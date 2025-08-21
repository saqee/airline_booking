const express = require("express")
const v1ApiRoutes = require("./v1/index") // Assuming you have v1 routes defined
const router = express.Router()

router.use("/v1", v1ApiRoutes)
module.exports = router
