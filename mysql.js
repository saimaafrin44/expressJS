const mysql = require('mysql');
const database = express.database();

var mysqlConnection = mysql.createConnection({
  host :'localhost',
  user :'root',
  paswword : '1234',
  database : 'VimKetDB'
});

mysqlConnection.connect((err)=> {
  if (!err)
      console.log('succeded');
  else
      console.log('failed \n error : ' +JSON.stringify(err, undefined, 2));
});

module.exports = database;