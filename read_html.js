var querystring = require('querystring');
var mysql = require('mysql2');

//Connection mysql
var con = mysql.createConnection({
    host: "localhost",
    user: "Nodejs",
    password: "NodeJS_MySQL",
});
//fonction mysql
con.query('SELECT * FROM customers.customers', function (err, rows) {
    if (err) throw err;
    querystring.stringify(rows);
        exports.read_content = function compose_html () {return'<!Doctype html>' +
                                '<html lang="fr">' +
                                    '<head>' +
                                        '<title>Read</title>' +
                                        '<meta charset="utf-8">' +
                                        '<style>'+
                                        'html{' +
                                        'font-family: Arial, Helvetica, sans-serif;' +
                                        '}' +
                                        'a{' +
                                        'color:cornflowerblue' +
                                        '}' +
                                        'table {' +
                                        'border-collapse: collapse;' +
                                        'width: 100%;' +
                                        '}' +
                                        'th, td {' +
                                        'padding: 8px;' +
                                        'text-align: left;' +
                                        'border-bottom: 1px solid #ddd;' +
                                        '}' +
                                        '</style>' +
                                    '</head>' +
                                    '<header>' +
                                        '<h1>Read</h1>' +
                                        '<a href="/">Accueil</a>' +
                                        '<br>'+ 
                                    '</header>' +
                                    '<body>' +
                                        '<table>' +
                                        '<tr>' +
                                        '<th>id</th>' +
                                        '<th>name</th>' +
                                        '<th>email</th>' +
                                        '</tr>' +
                                        rows.map(function(rows) {
                                            return '<tr>' +
                                            '<td>' + rows.id + '</td>' +
                                            '<td>' + rows.name + '</td>' +
                                            '<td>' + rows.email + '</td>' +
                                            '</tr>'; 
                                        }).join('')+
                                        '</table>' +
                                    '</body>' +
                                '</html>';
                            }
});