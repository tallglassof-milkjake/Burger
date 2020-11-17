const express = require("express");
const burger = require("../models/burger");

let router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let object = {
            burgers: data
        };

        console.log(object);
        res.render("index", object);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({id: result.id});
    });
});

router.put("/api/burger/:id", function(req, res) {
    let condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;