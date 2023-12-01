const { Production } = require("../models/models")
const ApiError = require("../error/ApiError")

class ProductionController {
    async Production_create(req, res){
        const {title, price, price_current, picture_addres, categoryId} = req.body
        const production = await Production.create({title, price, price_current, picture_addres, categoryId})
        return res.json(production)
    }

    async Production_getAll(req, res){
        const production = await Production.findAll();
        return res.json(production)
    }

    async Production_getOne(req, res, next){
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest("Не задан ID"))
        }
        const production = await Production.findAll({where:{id:id}});
        res.json(production);
    }

    async Production_update(req, res){
        const {id, title, picture_addres} = req.body
        const production = await Production.update({
            title:title,
            picture_addres:picture_addres,
        }, {
            where:{
                id:id
            }
        })
        res.json(production)
    }

    async Production_delete(req, res){
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest("Не задан ID"))
        }
        await Production.destroy({where:{id:id}})
        res.json({"message":"it's okay"})
    }
}

module.exports = new ProductionController()
