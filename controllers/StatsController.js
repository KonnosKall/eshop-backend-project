const dashboardStats = async (req, res) => {
    const categories = await Category.find().exec();
    const labels = categories.map( c => c.title);
    const counts = [];
    for (let cat of categories){
        const num= await Product.count({category:cat._id});
        counts.push(num);
    }
    res.json({
        success: true,
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'My categories dataset',
                    data: counts
                }
            ]
        }
    });
};
module.exports={
    dashboardStats
};
