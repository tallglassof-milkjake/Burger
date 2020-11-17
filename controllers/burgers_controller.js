const express = require("express");
const burger = require("../models/burger");

let router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        
        console.log(data);
        res.render("index", data);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name, function(result) {
        res.json({id: result.id});
    });
});

router.put("/api/burger/:id", function(req, res) {
    let burgerID = req.params.id;
    burger.updateOne("devoured", req.body.devoured, burgerID, function(result) {
        res.status(200).end();
    });
});

module.exports = router;