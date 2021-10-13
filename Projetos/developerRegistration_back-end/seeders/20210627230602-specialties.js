'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('specialties', [{
      name: 'JAVA'
    },
    {
      name: 'PYTHON'
    },
    {
      name: 'JAVASCRIPT'
    },
    {
      name: 'GOLANG'
    },
    {
     name: 'CSHARP'
    },
    {
      name: 'ELIXIR'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('specialties', null, {});
  }
};
