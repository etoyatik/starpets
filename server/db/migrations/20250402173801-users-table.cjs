const { default: userS } = require('../schemas/user.schema.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', userS);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
