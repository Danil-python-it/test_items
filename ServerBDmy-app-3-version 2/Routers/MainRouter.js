const router = require("express").Router()
const CategoryRouter = require("./CategoryRouter")
const ProductionRouter = require("./ProductionRouter")

router.use("/Category",CategoryRouter)
router.use("/Production",ProductionRouter)

module.exports = router