'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('produto', [{
      id: 1,
      nome: 'Cama para cão',
      preco: 49.99,
      descricao: 'Cama para cães e gatos nº1 com almofada e cesto',
      estoque: 5,
      numero_vendas: 4,
      categoria_id: 4,
      usuario_id: 1
    },
    {
      id: 2,
      nome: 'Caixa De Transporte N.2 Cão Cachorro Gato Pequena AzulCama para cão',
      preco: 39.99,
      descricao: 'Informações da caixa',
      estoque: 2,
      numero_vendas: 6,
      categoria_id: 11,
      usuario_id: 5
    },
    {
      id: 3,
      nome: 'Luva Pet Nano Magnética Tira Pelos Rosa - Basic+',
      preco: 9.99,
      descricao: 'Sem Info',
      estoque: 40,
      numero_vendas: 10,
      categoria_id: 3,
      usuario_id: 2
    },
    {
      id: 4,
      nome: 'Comedouro Pet em Aço Inox 2 Peças Tamanho M 250ml - Basic+',
      preco: 9.99,
      descricao: 'Comedouro Pet em Aço Inox Tamanho M 250ml - Basic+.Imagens meramente ',
      estoque: 40,
      numero_vendas: 2,
      categoria_id: 13,
      usuario_id: 2
    },
    {
      id: 5,
      nome: 'Casinha para Cachorro Decorativa Pet Pequeno - Meemo',
      preco: 89.99,
      descricao: 'A Casinha decorativa serve como abrigo para seu animalzinho',
      estoque: 30,
      numero_vendas: 0,
      categoria_id: 6,
      usuario_id: 7
    },
    {
      id: 6,
      nome: 'Casinha para Cachorro Decorativa Pet Pequeno - Meemo',
      preco: 69.99,
      descricao: 'A Casinha decorativa serve como abrigo para seu animalzinho',
      estoque: 30,
      numero_vendas: 1,
      categoria_id: 6,
      usuario_id: 8
    },
    {
      id: 7,
      nome: 'Roupa Casacos Poliéster Cão Gato Pet Elegante',
      preco: 29.99,
      descricao: 'Roupa Casacos Poliéster Cão Gato Pet EleganteCasacos Roupa para Cão, Gato',
      estoque: 20,
      numero_vendas: 4,
      categoria_id: 9,
      usuario_id: 10
    },
    {
      id: 8,
      nome: 'Roupa Casacos Poliéster Cão Gato Pet Elegante 2',
      preco: 69.99,
      descricao: 'Roupa Casacos Poliéster Cão Gato Pet EleganteCasacos Roupa para Cão, Gato',
      estoque: 20,
      numero_vendas: 2,
      categoria_id: 9,
      usuario_id: 10
    },
    {
      id: 9,
      nome: 'Roupa Casacos Poliéster Cão Gato Pet Elegante 4',
      preco: 109.99,
      descricao: 'Roupa Casacos Poliéster Cão Gato Pet EleganteCasacos Roupa para Cão, Gato',
      estoque: 20,
      numero_vendas: 2,
      categoria_id: 9,
      usuario_id: 10
    },
    {
      id: 10,
      nome: 'Tipo de extensão do assento Pet Car Belt Dog ajustável Leash',
      preco: 19.99,
      descricao: 'Descrição: Tipo de Item: Pet Car Cinto de Segurança Aplicável',
      estoque: 10,
      numero_vendas: 2,
      categoria_id: 11,
      usuario_id: 10
    },
    {
      id: 11,
      nome: 'Madeira de Bell brinquedo bola de Pequenos Animais Coelho Guin¨¦ Hamster Pet Rat Hot Dog',
      preco: 109.99,
      descricao: 'Madeira de Bell brinquedo bola de Pequenos Animais Coelho Guin¨¦',
      estoque: 110,
      numero_vendas: 2,
      categoria_id: 5,
      usuario_id: 10
    },
    {
      id: 12,
      nome: 'Ração Royal Canin Urinary S/O Veterinary Diet Canine cachorro 1',
      preco: 209.99,
      descricao: 'Eles fazem parte da família e nos dão sua companhia e seu amor. ',
      estoque: 210,
      numero_vendas: 39,
      categoria_id: 1,
      usuario_id: 6
    },
    {
      id: 13,
      nome: 'Ração Royal Canin Hepatic Veterinary Diet Canine cachorro adulto 10kg',
      preco: 109.99,
      descricao: 'Eles fazem parte da família e nos dão sua companhia e seu amor. ',
      estoque: 110,
      numero_vendas: 22,
      categoria_id: 1,
      usuario_id: 6
    },
    {
      id: 14,
      nome: 'Aquário 100x40x50 Alt Vidro 6mm 200litros A Pronta Entrega',
      preco: 249.99,
      descricao: '- Aquário 100 X 40 X 50 altura | Vidro de 6mm | Aprox 200 litros',
      estoque: 40,
      numero_vendas: 22,
      categoria_id: 15,
      usuario_id: 6
    },
    {
      id: 15,
      nome: 'Filtro Uv Esterilizador 36w Ocean Tech Aquários Fontes Lagos',
      preco: 299.99,
      descricao: 'Especificações Do Filtro UV Ocean Tech 36W | Água verde nunca mais!',
      estoque: 40,
      numero_vendas: 52,
      categoria_id: 15,
      usuario_id: 6
    },
    {
      id: 16,
      nome: 'Arranhador para Gatos com Três Bases Bege/Marrom Cat House - Basic+',
      preco: 399.99,
      descricao: 'Permita que seu bichano libere seus instintos com o Arranhador para Gatos com Três Bases Bege/Marrom Cat House.',
      estoque: 20,
      numero_vendas: 3,
      categoria_id: 5,
      usuario_id: 2
    },
    {
      id: 17,
      nome: 'Biscoito para gato',
      preco: 9.99,
      descricao: 'Sem Info',
      estoque: 10,
      numero_vendas: 5,
      categoria_id: 1,
      usuario_id: 5
    },
    {
      id: 18,
      nome: 'Carrinho para Cachorro',
      preco: 199.99,
      descricao: 'Sem Info',
      estoque: 10,
      numero_vendas: 6,
      categoria_id: 1,
      usuario_id: 5
    },
    {
      id: 19,
      nome: 'Carrinho para Cachorro',
      preco: 99.99,
      descricao: 'Sem Info',
      estoque: 10,
      numero_vendas: 0,
      categoria_id: 11,
      usuario_id: 8
    },
    {
      id: 20,
      nome: 'Glicopan Pet 30 mL',
      preco: 99.99,
      descricao: 'SAÚDE E BEM-ESTAR - Estimula o apetite;- Excelente Energético;- ',
      estoque: 100,
      numero_vendas: 1,
      categoria_id: 2,
      usuario_id: 3
    },
    {
      id: 21,
      nome: 'Ciprovet Colírio Frasco - 5ml',
      preco: 99.99,
      descricao: '- Indicado No Tratamento Das Seguintes Patologias Em Cães, Gatos E Equinos',
      estoque: 100,
      numero_vendas: 6,
      categoria_id: 2,
      usuario_id: 3
    },
  ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('produto', null, {});

  }
};