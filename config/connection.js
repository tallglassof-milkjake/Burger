const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "uxkao1eysm0n1uz4",
        password: "xrsdgtmdp6fxs21f",
        database: "j7k34y8nit23cerz"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;