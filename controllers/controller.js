var express = require("express");

var router = express.Router();

router.get("/", function (req,res) {
    console.log("howdy fellers, this is that slashroute");
    res.render("index");
})

// Export routes for server.js to use.
module.exports = router;
