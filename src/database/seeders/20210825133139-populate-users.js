'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: 'Fulano',
      email: 'diego@gmail.com',
      password: '12345',
      created_alt: new Date(),
      update_at: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', null);
  }
};
