'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('endereco', [{
        id: 1,
        logradouro: 'Rua Reinado do Cavalo Marinho',
        numero: '2',
        bairro: 'Santana',
        usuario_id: 1,
        estado_id: 26,
        cidade_id: 5349,
        cep: 12345123
      },
      {
        id: 2,
        logradouro: 'Rua Verão do Cometa',
        numero: '55',
        bairro: 'Centro',
        usuario_id: 2,
        estado_id: 22,
        cidade_id: 222,
        cep: 12345123
      },
      {
        id: 3,
        logradouro: 'Travessa Canção Excêntrica',
        numero: '444',
        bairro: 'Alto',
        usuario_id: 3,
        estado_id: 10,
        cidade_id: 2,
        cep: 12345123
      },
      {
        id: 4,
        logradouro: 'R Paulo Afonso',
        numero: '242',
        bairro: 'Bras',
        usuario_id: 4,
        estado_id: 2,
        cidade_id: 30,
        cep: 12345123
      },
      {
        id: 5,
        logradouro: 'Rua Oriente',
        numero: '779',
        bairro: 'Bras',
        usuario_id: 5,
        estado_id: 5,
        cidade_id: 654,
        cep: 12345123
      },
      {
        id: 6,
        logradouro: 'R. Mendes Júnior',
        numero: '779',
        bairro: 'Bras',
        usuario_id: 6,
        estado_id: 8,
        cidade_id: 900,
        cep: 12345123
      },
      {
        id: 7,
        logradouro: 'Rua Barão de Ladário',
        numero: '567',
        bairro: 'Pari',
        usuario_id: 7,
        estado_id: 10,
        cidade_id: 1000,
        cep: 12345123
      },
      {
        id: 8,
        logradouro: 'Rua Ipanema',
        numero: '2922',
        bairro: 'Pari',
        usuario_id: 8,
        estado_id: 4,
        cidade_id: 321,
        cep: 12345123
      },
      {
        id: 9,
        logradouro: 'Rua Flórida',
        numero: '909',
        bairro: 'Pari',
        usuario_id: 9,
        estado_id: 18,
        cidade_id: 986,
        cep: 12345123
      },
      {
        id: 10,
        logradouro: 'Rua Afonso Silva',
        numero: '12',
        bairro: 'Centro',
        usuario_id: 10,
        estado_id: 13,
        cidade_id: 776,
        cep: 12345123
      },
      
      
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('endereco', null, {});
    
  }
};
