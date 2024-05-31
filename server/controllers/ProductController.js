import ProductModel from "../Models/ProductModel.js"



export const getProducts = async (req, res) => {
    const q = req.query;
    const limit = 10;
    const page = req.query.page
    const filters = {
        ...(q.cat && { category: q.cat }),
        ...(q.search && { title: { $regex: q.search, $options: "i" } }),
        ...(q.sold && { size: q.sold }),
    };
    try {
        const products = await ProductModel.find(filters).limit(10).skip((page - 1) * limit).sort({ createdAt: -1 })
        return res.status(200).json({
            products,
            currentPage: page,
            totalProducts: `${limit * page} out of 60`
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}



export const getMonthSales = async (req, res) => {

    const { year, month } = req.query;

    try {

        const start = new Date(`${year}-${month}-01`)
        const end = new Date(start);
        end.setMonth(end.getMonth() + 1);


        const sales = await ProductModel.aggregate([
            {
                $match: {
                    dateOfSale: {
                        $gte: start.toISOString(),
                        $lt: end.toISOString()
                    },
                    sold: true,
                },
            },
            {
                $group: {
                    _id: null,
                    totalSale: { $sum: '$price' },
                },
            },
        ]);
        const totalSaleAmount = sales[0]?.totalSale || 0;
        res.json({ totalSaleAmount });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }


}


export const getSoldProductsPerMonth = async (req, res) => {

    const { year, month } = req.query;

    try {

        const start = new Date(`${year}-${month}-01`)
        const end = new Date(start);
        end.setMonth(end.getMonth() + 1);


        const sales = await ProductModel.aggregate([
            {
                $match: {
                    dateOfSale: {
                        $gte: start.toISOString(),
                        $lt: end.toISOString()
                    },
                    sold: true,
                },
            },
        ]);

        let totalproducts = sales.length
        res.json({ totalproducts });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}


export const getNotSoldProductsPerMonth = async (req, res) => {

    const { year, month } = req.query;

    try {

        const start = new Date(`${year}-${month}-01`)
        const end = new Date(start);
        end.setMonth(end.getMonth() + 1);

        const sales = await ProductModel.aggregate([
            {
                $match: {
                    dateOfSale: {
                        $gte: start.toISOString(),
                        $lt: end.toISOString()
                    },
                    sold: false,
                },
            },
        ]);
        let totalproducts = sales.length
        res.json({ totalproducts });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}



export const getProductsCategory = async (req, res) => {
    const { month } = req.query;
    const monthInt = parseInt(month, 10);
  
    if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
        return res.status(400).send({ error: 'Invalid month parameter. It should be a number between 1 and 12.' });
    }

    try {
        const sales = await ProductModel.aggregate([
            {
                $match: {
                    sold: true,
                    dateOfSale: {
                        $regex: `-${month.padStart(2, '0')}-`
                    }
                }
            },
            {
                $group: {
                    _id: "$category",
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    category: "$_id",
                    count: 1
                }
            }
        ]);

        res.json(sales);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};