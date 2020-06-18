'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('imagem_pet', [{
        id: 1,
        imagem: '/images/pets/1592417592280-pet.png',
        pet_id: 1
      },
      {
        id: 2,
        imagem: '/images/pets/1592416498715-pet.png',
        pet_id: 2
      },
      {
        id: 3,
        imagem: '/images/pets/1592418578191-pet.png',
        pet_id: 3
      },
      {
        id: 4,
        imagem: '/images/pets/1592418310502-pet.png',
        pet_id: 4
      },
      {
        id: 5,
        imagem: '/images/pets/1592417434639-pet.png',
        pet_id: 5
      },
      {
        id: 6,
        imagem: '/images/pets/1592417118566-pet.png',
        pet_id: 6
      },
      {
        id: 7,
        imagem: '/images/pets/1592416189752-pet.png',
        pet_id: 7
      },
      {
        id: 8,
        imagem: '/images/pets/1592416686118-pet.png',
        pet_id: 8
      },
      {
        id: 9,
        imagem: '/images/pets/1592417882702-pet.png',
        pet_id: 9
      },
      {
        id: 10,
        imagem: '/images/pets/1592418269343-pet.png',
        pet_id: 10
      },
      {
        id: 11,
        imagem: '/images/pets/1592416973684-pet.png',
        pet_id: 11
      },
      {
        id: 12,
        imagem: '/images/pets/1592417085707-pet.png',
        pet_id: 12
      },
      {
        id: 13,
        imagem: '/images/pets/1592416560642-pet.png',
        pet_id: 13
      },
      {
        id: 14,
        imagem: '/images/pets/1592417785728-pet.png',
        pet_id: 14
      },
      {
        id: 15,
        imagem: '/images/pets/1592416437012-pet.png',
        pet_id: 15
      },
      {
        id: 16,
        imagem: '/images/pets/1592417484846-pet.png',
        pet_id: 16
      },
      {
        id: 17,
        imagem: '/images/pets/1592417832646-pet.png',
        pet_id: 17
      },
      {
        id: 18,
        imagem: '/images/pets/1592418230398-pet.png',
        pet_id: 18
      },
      {
        id: 19,
        imagem: '/images/pets/1592418139876-pet.png',
        pet_id: 19
      },
      {
        id: 20,
        imagem: '/images/pets/1592418457686-pet.png',
        pet_id: 20
      },
      {
        id: 21,
        imagem: '/images/pets/1592417260990-pet.png',
        pet_id: 21
      },
      {
        id: 22,
        imagem: '/images/pets/1592418518230-pet.png',
        pet_id: 22
      },
      {
        id: 23,
        imagem: '/images/pets/1592418746924-pet.png',
        pet_id: 23
      },
      {
        id: 24,
        imagem: '/images/pets/1592416783249-pet.png',
        pet_id: 24
      },
      {
        id: 25,
        imagem: '/images/pets/1592416737347-pet.png',
        pet_id: 25
      },
      {
        id: 26,
        imagem: '/images/pets/1592418180024-pet.png',
        pet_id: 26
      },
      {
        id: 27,
        imagem: '/images/pets/1592418023396-pet.png',
        pet_id: 27
      },
      {
        id: 28,
        imagem: '/images/pets/1592418677283-pet.png',
        pet_id: 28
      },
      {
        id: 29,
        imagem: '/images/pets/1592416838401-pet.png',
        pet_id: 29
      },
      {
        id: 30,
        imagem: '/images/pets/1592418396412-pet.png',
        pet_id: 30
      },
      {
        id: 31,
        imagem: '/images/pets/1592418615306-pet.png',
        pet_id: 31
      },
      {
        id: 32,
        imagem: '/images/pets/1592416609846-pet.png',
        pet_id: 32
      },
      {
        id: 33,
        imagem: '/images/pets/1592416973684-pet.png',
        pet_id: 33
      },
      {
        id: 34,
        imagem: '/images/pets/1592417652125-pet.png',
        pet_id: 34
      },
      {
        id: 35,
        imagem: '/images/pets/1592416381411-pet.png',
        pet_id: 35
      },
      {
        id: 36,
        imagem: '/images/pets/1592417927458-pet.png',
        pet_id: 36
      },
      {
        id: 37,
        imagem: '/images/pets/1592417551197-pet.png',
        pet_id: 37
      },
      {
        id: 38,
        imagem: '/images/pets/1592417213224-pet.png',
        pet_id: 38
      },
      {
        id: 39,
        imagem: '/images/pets/1592417754051-pet.png',
        pet_id: 39
      },
      {
        id: 40,
        imagem: '/images/pets/1592418059811-pet.png',
        pet_id: 40
      },
      {
        id: 41,
        imagem: '/images/pets/1592417179840-pet.png',
        pet_id: 41
      },
      {
        id: 42,
        imagem: '/images/pets/1592417384723-pet.png',
        pet_id: 42
      },
      {
        id: 43,
        imagem: '/images/pets/1592417034322-pet.png',
        pet_id: 43
      },
      {
        id: 44,
        imagem: '/images/pets/1592417306606-pet.png',
        pet_id: 44
      },
      {
        id: 45,
        imagem: '/images/pets/1591915053744-pet.png',
        pet_id: 45
      },
      {
        id: 46,
        imagem: '/images/pets/1591918839476-pet.png',
        pet_id: 46
      },

    ], {});
 
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('imagem_pet', null, {});
    
  }
};
