const router = require("express").Router()
const ProductionController = require("../Controller/ProductionController")

router.get("/",ProductionController.Production_getAll)
router.get("/get",ProductionController.Production_getOne)
router.post("/create",ProductionController.Production_create)
router.put("/update",ProductionController.Production_update)
router.delete("/",ProductionController.Production_delete)

module.exports = router