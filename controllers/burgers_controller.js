var express = require("express");

var router = express.Router();
var burger = require('../model/burger.js');

// Base route - shows whatever is in the index handlebar file; reference to burger.js file and passing burger data to the function and will be sending burger data to our handlebar file.
router.get("/", function (req, res) {
  burger.all(function (burger_data) {
    console.log(burger_data);
    res.render('index');
  })
})
//replace above - res.render('index', { burger_data });
router.put("/burgers/update", function (req, res) {
  burger.update(req.body.burger_id, function (result) {
    console.log(result);
    res.redirect('/');
  });
});

router.post("/burgers/create", function (req, res) {
  burger.create(req.body.burger_name, function (result) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
