const connection = require("./connection.js");

const orm = {
    selectAll: function() {
        connection.query("SELECT * FROM burgers", function(err, res) {
            if (err) throw err;
            return res;
        });
        console.log()
    },

    insertOne: function(burger) {
        connection.query("INSERT INTO burgers (burger_name) VALUES ('')",
        function(err, res) {
            if (err) throw err;
            return res;
        });
        console.log(burger);
    },

    updateOne: function(burger) {
        connection.query("UPDATE burgers SET ??-? WHERE id=?",
        function(err, res) {
            if (err) throw err;
            return res;
        });
        console.log(burger);
    }
}

module.exports = orm;