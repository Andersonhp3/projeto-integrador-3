'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('usuario', [{
        nome: 'Anderson Ricardo',
        email: 'anderson@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "111111111",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        nome: 'Bruno Ferraro',
        email: 'bruno@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "22222222211",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        nome: 'Felipe Silva',
        email: 'felipe@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "33322222211",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        nome: 'Igor Veloso',
        email: 'igor@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "44422222211",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        nome: 'Igor Veloso',
        email: 'igor@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "55522222211",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        nome: 'Aline Diniz',
        email: 'aline@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "66622222211",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        nome: 'Tamara Sousa',
        email: 'tamara@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "77722222211",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        nome: 'Thiago Silva',
        email: 'thiago@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "88822222211",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        nome: 'Carolina Sousa',
        email: 'carolina@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "99922222211",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
      {
        nome: 'Natalia Pereira',
        email: 'natalia@teste.com',
        senha: bcrypt.hashSync('123456', 12),
        cpf_cnpj: "10122222211",
        imagem: '/images/profiles/1589739533336-17332_100735099957491_1314197_n.webp'
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('usuario', null, {});

  }
};