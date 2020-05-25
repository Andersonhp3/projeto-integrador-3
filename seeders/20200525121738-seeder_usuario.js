'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('usuario', [{
        id: 1,
        nome: 'Anderson Ricardo',
        email: 'anderson@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "111.111.111",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        id: 2,
        nome: 'Bruno Ferraro',
        email: 'bruno@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "222.222.222-11",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        id: 3,
        nome: 'Felipe Silva',
        email: 'felipe@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "333.222.222-11",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        id: 4,
        nome: 'Igor Veloso',
        email: 'igor@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "444.222.222-11",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        id: 5,
        nome: 'Igor Veloso',
        email: 'igor@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "555.222.222-11",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        id: 6,
        nome: 'Aline Diniz',
        email: 'aline@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "666.222.222-11",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        id: 7,
        nome: 'Tamara Sousa',
        email: 'tamara@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "777.222.222-11",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        id: 8,
        nome: 'Thiago Silva',
        email: 'thiago@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "888.222.222-11",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        id: 9,
        nome: 'Carolina Sousa',
        email: 'carolina@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "999.222.222-11",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        id: 10,
        nome: 'Natalia Pereira',
        email: 'natalia@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "101.222.222-11",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('usuario', null, {});

  }
};