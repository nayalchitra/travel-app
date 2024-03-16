const CategoryModel = require("../model/category.model");

const categoryHandler = async(req,res)=>{
    try {
        const categories = await CategoryModel.find({});
        //console.log(categories);
        res.json(categories);
        
    } catch (error) {
        res.status(404).send({message:"no category found"})
    }
}

module.exports = categoryHandler;