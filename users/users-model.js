const db = require('../database/dbConfig');

function find() {
  return db('users');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users')
  .where({id})
}

async function add(user) {
 const [ id ] = await db('users').insert(user);
  
 return findById(id);
}

function remove(id) {
  return db('users').where({ id }).delete();
}

module.exports = {
    find,
    findBy,
    findById,
    add,
    remove
};