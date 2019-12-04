//Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//the variable is referencing the burgers database; 
//what is happening in ALL
//calling orm.all inserting burgers(DB) as our table input and running our function(respnse(res)) as a call back that will be sent to our our controller file
var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },


  create: function (name, cb) {
    orm.create("burgers", name, cd);
  },

  update: function (id, cb) {
    orm.update("burgers", id, cd);
  }
};

// Export the database functions for the controller (burger_Controller.js).
module.exports = burger;
