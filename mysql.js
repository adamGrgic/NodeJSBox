var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ap",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("select * from ap_db;", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });


