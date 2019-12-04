// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
//Methods to create: SEE ALL the data in the database; CREATE new data for the database; UPDATE data in the database
//Creating a connection query that is selecting everything from database and using a call back from the model folder.
var orm = {
  all: function (tableInput, cb) {
    connection.query('SELECT * FROM ' + tableInput + ';', function (err, result) {
      if (err) throw err;
      cb(result)
    })
  },


update: function (tableInput, condition, cb) {
    connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id= ' + condition + ';', function (err, result) {
      if (err) throw err;
      cb(result);
    })
  },

  //Create method
  create: function (tableInput, val, cb) {
    connection.query('INSERT INTO ' + tableInput + ' (burger_name)',
      VALUES('"+val+"'), ';', function (err, result) {
        if (err) throw err;
        cb(result);
      })
  }

}

// Export the orm object for the model (burgers.js).
module.exports = orm;
