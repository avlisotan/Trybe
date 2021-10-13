'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('devs', [{
      name: 'Rocketseat',
      phone: '(99) 9999-9999',
      Cell_phone: '(99) 9999-9999',
      address: 'dados retornados da api do via cep',
      specialties: '["PYTHON", "GOLANG"]'
    },
    {
      name: 'Trybe',
      phone: '(88) 8888-8888',
      Cell_phone: '(88) 8888-8888',
      address: 'dados retornados da api do via cep',
      specialties: '["ELIXIR", "JAVA"]'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('devs', null, {});
  }
};
