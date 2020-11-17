const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput) {
        const queryString = `SELECT * FROM ${tableInput}`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            
            cb(res);
        });
    },

    insertOne: function(table, values, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += " SET ";
        queryString += objToSql(values);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, res) {
            if (err) throw err;

            cb(res);
        });
    },

    updateOne: function(table, values, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += " SET ";
        queryString += objToSql(values);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);

        connection.query(queryString, function(err, res) {
            if (err) throw err;

            cb(res);
        });
    }
};


// HELPER FUNCTION TAKEN FROM EXERCISE 16
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

  
module.exports = orm;