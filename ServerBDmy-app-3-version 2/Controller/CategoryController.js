const { Category, Production } = require("../models/models")
const ApiError = require("../error/ApiError")

class CategoryController {
    async Category_create(req, res){
        const {title, picture_addres} = req.body
        const category = await Category.create({title, picture_addres})
        return res.json(category)
    }

    async Category_getAll(req, res){
        const category = await Category.findAll();
        return res.json(category)
    }

    async Category_getOne(req, res, next){
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest("Не задан ID"))
        }
        const category = await Category.findAll({where:{id:id}});
        res.json(category);
    }
    
    async Category_getAllProduction(req, res, next){
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest("Не задан ID"))
        }
        const category = await Category.findAll({where:{id:id}});
        const production = await Production.findAll({where:{categoryId:id}});
        
        category.push({production})

        res.json(category);
    }

    async Category_update(req, res){
        const {id, title, picture_addres} = req.body
        const category = await Category.update({
            title:title,
            picture_addres:picture_addres,
        }, {
            where:{
                id:id
            }
        })
        res.json(category)
    }

    async Category_delete(req, res){
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest("Не задан ID"))
        }
        await Category.destroy({where:{id:id}})
        res.json({"message":"it's okay"})
    }
}

module.exports = new CategoryController()

