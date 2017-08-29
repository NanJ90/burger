var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/index",function(req,res){
	burger.all(function(data){
		var hbsObject = {
			burgers:data
		};
		console.log(hbsobject);
		res.render("index",hbsobject);
	});
});

router.post("/index", function(req, res) {
  	burger.create(
    "burger_name", [
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});

router.put("/index", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devour: req.body.devour
  }, condition, function() {
    res.redirect("/");
  });
});

// router.delete("/:id", function(req, res) {
//   	var condition = "id = " + req.params.id;
//   	burger.delete(condition, function() {
//     res.redirect("/");
//   });
// });

module.exports = router;