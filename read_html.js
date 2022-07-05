const querystring = require('querystring');
const mysql = require('mysql2');

//Connection mysql
const con = mysql.createConnection({
    host: "localhost",
    user: "Nodejs",
    password: "NodeJS_MySQL",
});

function create_table(data) {
    var table = "<table>";
    table += "<tr><th>id</th><th>name</th><th>email</th></tr>";
    for (var i = 0; i < data.length; i++) {
      table += "<tr>";
      table += "<td>" + data[i].id + "</td>";
      table += "<td>" + data[i].name + "</td>";
      table += "<td>" + data[i].email + "</td>";
      table += "</tr>";
    }
    table += "</table>";
    return table;
  }
  
  exports.read_content = function (){
  function cb (callback) {
      console.log("callback called");
      // on effectue une requête asynchrone
      con.query("SELECT * FROM customers.customers", function(err, data) {
        if(err) {
          // s'il y a eu une erreur, on la renvoie à notre callback
          callback(err);
        } else {
          // sinon, tout s'est bien passé, on traite les données puis on renvoie notre réponse au callback
          console.log(data);
          var table = create_table(data);
          callback(null, table);
        }
      });
    };
};
