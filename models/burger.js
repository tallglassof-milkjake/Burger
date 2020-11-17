const orm = require("../config/orm");

const burger = {
    selectAll: function() {
        orm.selectAll(function(res) {
            return res;
        });
    },

    insertOne: function(burger) {
        orm.insertOne(burger, function(res) {
            return res;
        });
    },

    updateOne: function(burger) {
        orm.updateOne(burger, function(res) {
            return res;
        });
    }
};



module.exports = burger;