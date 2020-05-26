'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('produto', [{
      id: 1,
      nome: 'Cama para cão',
      preco: 49.99,
      descricao: 'Cama para cães e gatos nº1 com almofada e cesto ótima opção para o descanso do seu melhor amigo. Essa cama é confeccionada em plástico e traz ótimo custo benefício para você.',
      estoque: 5,
      categoria_id: 4,
      usuario_id: 1
    },
    {
      id: 2,
      nome: 'Caixa De Transporte N.2 Cão Cachorro Gato Pequena AzulCama para cão',
      preco: 39.99,
      descricao: 'Informações da caixa',
      estoque: 2,
      categoria_id: 11,
      usuario_id: 5
    },
    {
      id: 3,
      nome: 'Luva Pet Nano Magnética Tira Pelos Rosa - Basic+',
      preco: 9.99,
      descricao: 'Sem Info',
      estoque: 40,
      categoria_id: 3,
      usuario_id: 2
    },
    {
      id: 4,
      nome: 'Comedouro Pet em Aço Inox 2 Peças Tamanho M 250ml - Basic+',
      preco: 9.99,
      descricao: 'Comedouro Pet em Aço Inox Tamanho M 250ml - Basic+.Imagens meramente ilustrativas.Todas as informações divulgadas são de responsabilidade do Fabricante/Fornecedor',
      estoque: 40,
      categoria_id: 13,
      usuario_id: 2
    },
    {
      id: 5,
      nome: 'Casinha para Cachorro Decorativa Verde Pet Pequeno - Meemo',
      preco: 89.99,
      descricao: 'A Casinha decorativa serve como abrigo para seu animalzinho e também como mesa decorativa. Com Meemo seu melhor amigo terá uma vida saudável e com muito estilo. É impermeável, inodoro e isola o calor. Todas as informações divulgadas...',
      estoque: 30,
      categoria_id: 6,
      usuario_id: 7
    },
    {
      id: 6,
      nome: 'Casinha para Cachorro Decorativa Verde Pet Pequeno - Meemo',
      preco: 69.99,
      descricao: 'A Casinha decorativa serve como abrigo para seu animalzinho e também como mesa decorativa. Com Meemo seu melhor amigo terá uma vida saudável e com muito estilo. É impermeável, inodoro e isola o calor. Todas as informações divulgadas...',
      estoque: 30,
      categoria_id: 6,
      usuario_id: 8
    },
    {
      id: 7,
      nome: 'Roupa Casacos Poliéster Cão Gato Pet Elegante',
      preco: 29.99,
      descricao: 'Roupa Casacos Poliéster Cão Gato Pet EleganteCasacos Roupa para Cão, Gato, Pet.Confeccionado em Poliéster, soft e microfibra para seu bebe com muito amor e carinho para o friozinho....',
      estoque: 20,
      categoria_id: 9,
      usuario_id: 10
    },
    {
      id: 9,
      nome: 'Roupa Casacos Poliéster Cão Gato Pet Elegante 2',
      preco: 69.99,
      descricao: 'Roupa Casacos Poliéster Cão Gato Pet EleganteCasacos Roupa para Cão, Gato, Pet.Confeccionado em Poliéster, soft e microfibra para seu bebe com muito amor e carinho para o friozinho....',
      estoque: 20,
      categoria_id: 9,
      usuario_id: 10
    },
    {
      id: 10,
      nome: 'Roupa Casacos Poliéster Cão Gato Pet Elegante 4',
      preco: 109.99,
      descricao: 'Roupa Casacos Poliéster Cão Gato Pet EleganteCasacos Roupa para Cão, Gato, Pet.Confeccionado em Poliéster, soft e microfibra para seu bebe com muito amor e carinho para o friozinho....',
      estoque: 20,
      categoria_id: 9,
      usuario_id: 10
    },
    {
      id: 10,
      nome: 'Tipo de extensão do assento Pet Car Belt Dog ajustável Leash Cat Reflective Segurança Traction Belt',
      preco: 19.99,
      descricao: 'Descrição: Tipo de Item: Pet Car Cinto de Segurança Aplicável: Pet Cor: preto, verde, cinza Produtos peso líquido: 0,093 kg Tamanho do produto: 2.5 * 53-74cm, comprimento máximo elástica: 78 centímetros Características - Material de..',
      estoque: 10,
      categoria_id: 11,
      usuario_id: 10
    },
    {
      id: 11,
      nome: 'Madeira de Bell brinquedo bola de Pequenos Animais Coelho Guin¨¦ Hamster Pet Rat Hot Dog',
      preco: 109.99,
      descricao: 'Madeira de Bell brinquedo bola de Pequenos Animais Coelho Guin¨¦ Hamster Pet Rat Hot DogDescri??o:100%novo e de alta qualidadeN?o t¨®xicomaterial, seguro para mastigar e jogar;Um bemabastecimento dos brinquedos para se divertir.',
      estoque: 110,
      categoria_id: 5,
      usuario_id: 10
    },
    {
      id: 12,
      nome: 'Ração Royal Canin Urinary S/O Veterinary Diet Canine cachorro raça média/grande mix 10.1kg',
      preco: 209.99,
      descricao: 'Eles fazem parte da família e nos dão sua companhia e seu amor. Para que seu fiel amigo permaneça saudável e forte, uma dieta equilibrada é essencial. Dê ao seu cão todos os nutrientes que ele precisa para que ele possa correr, pular e brincar o dia todo.',
      estoque: 210,
      categoria_id: 1,
      usuario_id: 6
    },
    {
      id: 13,
      nome: 'Ração Royal Canin Hepatic Veterinary Diet Canine cachorro adulto 10kg',
      preco: 209.99,
      descricao: 'Eles fazem parte da família e nos dão sua companhia e seu amor. Para que seu fiel amigo permaneça saudável e forte, uma dieta equilibrada é essencial. Dê ao seu cão todos os nutrientes que ele precisa para que ele possa correr, pular e brincar o dia todo.',
      estoque: 110,
      categoria_id: 1,
      usuario_id: 6
    },
    {
      id: 14,
      nome: 'Aquário 100x40x50 Alt Vidro 6mm 200litros A Pronta Entrega',
      preco: 249.99,
      descricao: '- Aquário 100 X 40 X 50 altura | Vidro de 6mm | Aprox 200 litros',
      estoque: 40,
      categoria_id: 15,
      usuario_id: 6
    },
    {
      id: 15,
      nome: 'Filtro Uv Esterilizador 36w Ocean Tech Aquários Fontes Lagos',
      preco: 299.99,
      descricao: 'Especificações Do Filtro UV Ocean Tech 36W | Água verde nunca mais! Sistema de esterilização UV com design altamente eficiente e compacto para eliminação de algas e micro-organismos infecciosos prejudiciais aos habitantes do aquário.',
      estoque: 40,
      categoria_id: 15,
      usuario_id: 6
    },
    {
      id: 16,
      nome: 'Arranhador para Gatos com Três Bases Bege/Marrom Cat House - Basic+',
      preco: 399.99,
      descricao: 'Permita que seu bichano libere seus instintos com o Arranhador para Gatos com Três Bases Bege/Marrom Cat House. Desenvolvido visando o bem estar e o desenvolvimento do seu gatinho, esse arranhador vai permitir que seu pet libere seu..',
      estoque: 20,
      categoria_id: 5,
      usuario_id: 2
    },
    {
      id: 17,
      nome: 'Biscoito para gato',
      preco: 9.99,
      descricao: 'Sem Info',
      estoque: 10,
      categoria_id: 1,
      usuario_id: 5
    },
    {
      id: 18,
      nome: 'Carrinho para Cachorro',
      preco: 199.99,
      descricao: 'Sem Info',
      estoque: 10,
      categoria_id: 1,
      usuario_id: 5
    },
    {
      id: 19,
      nome: 'Carrinho para Cachorro',
      preco: 99.99,
      descricao: 'Sem Info',
      estoque: 10,
      categoria_id: 11,
      usuario_id: 5
    },
    {
      id: 20,
      nome: 'Glicopan Pet 125 mL',
      preco: 99.99,
      descricao: 'SAÚDE E BEM-ESTAR - Estimula o apetite;- Excelente Energético;- Auxilia na melhora do estado geral de animais com estado nutricional inadequado;- Indicado no preparo de animais para exposição e em treinamento;- Complexo B;- Suplemen',
      estoque: 100,
      categoria_id: 2,
      usuario_id: 3
    },
    {
      id: 21,
      nome: 'Ciprovet Colírio Frasco - 5ml',
      preco: 99.99,
      descricao: '- Indicado No Tratamento Das Seguintes Patologias Em Cães, Gatos E Equinos: Conjuntivite Infecciosa Bacteriana, Insuficiência Lacrimal, Ceratite Seca Contaminada E Úlcera De Córnea Provocada Por Micro-Organismos Gram Posi',
      estoque: 100,
      categoria_id: 2,
      usuario_id: 3
    },
  ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('produto', null, {});

  }
};