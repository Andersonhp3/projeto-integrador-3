'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('imagem_pet', [{
        id: 1,
        imagem: '/images/pets/default.png',
        pet_id: 1
      },
      {
        id: 2,
        imagem: '/images/pets/default.png',
        pet_id: 4
      },
      {
        id: 3,
        imagem: '/images/pets/default.png',
        pet_id: 4
      },
      {
        id: 4,
        imagem: '/images/pets/default.png',
        pet_id: 14
      },
      {
        id: 5,
        imagem: '/images/pets/default.png',
        pet_id: 2
      },
      {
        id: 6,
        imagem: '/images/pets/default.png',
        pet_id: 3
      },
      {
        id: 7,
        imagem: '/images/pets/default.png',
        pet_id: 5
      },
      {
        id: 8,
        imagem: '/images/pets/default.png',
        pet_id: 6
      },
      {
        id: 9,
        imagem: '/images/pets/default.png',
        pet_id: 7
      },
      {
        id: 10,
        imagem: '/images/pets/default.png',
        pet_id: 8
      },
      {
        id: 11,
        imagem: '/images/pets/default.png',
        pet_id: 10
      },
      {
        id: 12,
        imagem: '/images/pets/default.png',
        pet_id: 11
      },
      {
        id: 13,
        imagem: '/images/pets/default.png',
        pet_id: 12
      },
      {
        id: 14,
        imagem: '/images/pets/default.png',
        pet_id: 13
      },
      {
        id: 15,
        imagem: '/images/pets/default.png',
        pet_id: 14
      },
      {
        id: 16,
        imagem: '/images/pets/default.png',
        pet_id: 15
      },

    ], {});
 
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('imagem_pet', null, {});
    
  }
};
