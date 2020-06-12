'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('pet', [{
        id: 1,
        nome: 'Dino Dino',
        idade: 2,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '9999-9999',
        raca: 'Beagle',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        categoria_pet_id: 1,
        usuario_id: 1
      },
      {
        id: 2,
        nome: 'Rex Dino',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '1111-1111',
        raca: 'Chow Chow',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        categoria_pet_id: 1,
        usuario_id: 1
      },
      {
        id: 3,
        nome: 'Tim',
        idade: 4,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '3333-3333',
        raca: 'Dálmata',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        categoria_pet_id: 1,
        usuario_id: 2
      },
      {
        id: 4,
        nome: 'Lana',
        idade: 4,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '2233-3123',
        raca: 'Persa',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        categoria_pet_id: 2,
        usuario_id: 3
      },
      {
        id: 5,
        nome: 'Lolita',
        idade: 5,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '2233-3123',
        raca: 'Siamês',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        categoria_pet_id: 2,
        usuario_id: 7
      },
      {
        id: 6,
        nome: 'Mafalda',
        idade: 2,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '2233-3123',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: false,
        categoria_pet_id: 3,
        usuario_id: 7
      },
      {
        id: 7,
        nome: 'Flash',
        idade: 1,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '1111-1111',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: true,
        categoria_pet_id: 3,
        usuario_id: 2
      },
      {
        id: 8,
        nome: 'Frodo',
        idade: 2,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '1111-1111',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: true,
        categoria_pet_id: 4,
        usuario_id: 1
      },
      {
        id: 10,
        nome: 'Arya',
        idade: 2,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '1111-1111',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: true,
        categoria_pet_id: 7,
        usuario_id: 6
      },
      {
        id: 11,
        nome: 'Gohan',
        idade: 0,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'SRD',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: true,
        categoria_pet_id: 3,
        usuario_id: 10
      },
      {
        id: 12,
        nome: 'Dobby',
        idade: 0,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'Carpa',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: true,
        categoria_pet_id: 5,
        usuario_id: 3
      },
      {
        id: 13,
        nome: 'Jon Snow',
        idade: 3,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'Árabe',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: true,
        categoria_pet_id: 6,
        usuario_id: 5
      },
      {
        id: 14,
        nome: 'Hobbit',
        idade: 3,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'Boxer',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: true,
        categoria_pet_id: 1,
        usuario_id: 5
      },
      {
        id: 15,
        nome: 'Vader',
        idade: 3,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam?",
        contato: '6666-112321',
        raca: 'Siberiano',
        genero: 'Macho',
        dataCadastro: '2020-06-11',
        adotado: true,
        categoria_pet_id: 2,
        usuario_id: 2
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('pet', null, {});
    
  }
};
