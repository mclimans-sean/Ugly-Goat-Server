const knex = require('./knex');

module.exports = {

 getAll : function () {
    return knex('goats');
  },

 getOne : function (id) {
    return knex('goats').where('id', id);
  }
}
