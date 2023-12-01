const router = require("express").Router()
const CategoryController = require("../Controller/CategoryController")

router.get("/",CategoryController.Category_getAll)
router.get("/get",CategoryController.Category_getOne)
router.get("/getAllproduction",CategoryController.Category_getAllProduction)
router.post("/create",CategoryController.Category_create)
router.put("/update",CategoryController.Category_update)
router.delete("/",CategoryController.Category_delete)

module.exports = router