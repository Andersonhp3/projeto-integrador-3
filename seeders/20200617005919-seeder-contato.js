'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('contato', [{
        id: 1,
        nome: 'Anderson',
        email: 'anderson@teste.com',
        mensagem: "A casinha do cachorro tem uma boa qualidade"
      },
      {
        id: 2,
        nome: 'Ricardo',
        email: 'ricardo@teste.com',
        mensagem: "Como faço para doar?"
      },

    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('contato', null, {});
    
  }
};
