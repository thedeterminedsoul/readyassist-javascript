let mysql = require('mysql');

let connInfo = {
    host: "localhost",
    user: "root",
    password: "",
    database: "readyassist"
}

let con = mysql.createConnection(connInfo);

let sql = "select * from candidates;"

con.query(sql, function(err, data, fields){
    if(err) throw err;
    
    data.forEach(row => {
        console.log("=================")
        console.log(row.id);
        console.log(row.name);
        console.log(row.email);
        console.log(row.college);
        console.log("=================")
    });
    
});
