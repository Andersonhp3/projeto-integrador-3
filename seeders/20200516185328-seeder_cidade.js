'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('cidade', [{
        id: 1,
        cidade: 'Acrelândia',
        estado_id: 1
      },
      {
        id: 2,
        cidade: 'Assis Brasil',
        estado_id: 1
      },
      {
        id: 3,
        cidade: 'Brasiléia',
        estado_id: 1
      },
      {
        id: 4,
        cidade: 'Bujari',
        estado_id: 1
      },
      {
        id: 5,
        cidade: 'Capixaba',
        estado_id: 1
      },
      {
        id: 6,
        cidade: 'Cruzeiro do Sul',
        estado_id: 1
      },
      {
        id: 7,
        cidade: 'Epitaciolândia',
        estado_id: 1
      },
      {
        id: 8,
        cidade: 'Feijó',
        estado_id: 1
      },
      {
        id: 9,
        cidade: 'Jordão',
        estado_id: 1
      },
      {
        id: 10,
        cidade: 'Mâncio Lima',
        estado_id: 1
      },
      {
        id: 11,
        cidade: 'Manoel Urbano',
        estado_id: 1
      },
      {
        id: 12,
        cidade: 'Marechal Thaumaturgo',
        estado_id: 1
      },
      {
        id: 13,
        cidade: 'Plácido de Castro',
        estado_id: 1
      },
      {
        id: 14,
        cidade: 'Porto Walter',
        estado_id: 1
      },
      {
        id: 15,
        cidade: 'Rio Branco',
        estado_id: 1
      },
      {
        id: 16,
        cidade: 'Rodrigues Alves',
        estado_id: 1
      },
      {
        id: 17,
        cidade: 'Santa Rosa do Purus',
        estado_id: 1
      },
      {
        id: 18,
        cidade: 'Senador Guiomard',
        estado_id: 1
      },
      {
        id: 19,
        cidade: 'Sena Madureira',
        estado_id: 1
      },
      {
        id: 20,
        cidade: 'Tarauacá',
        estado_id: 1
      },
      {
        id: 21,
        cidade: 'Xapuri',
        estado_id: 1
      },
      {
        id: 22,
        cidade: 'Porto Acre',
        estado_id: 1
      },
      {
        id: 23,
        cidade: 'Água Branca',
        estado_id: 2
      },
      {
        id: 24,
        cidade: 'Anadia',
        estado_id: 2
      },
      {
        id: 25,
        cidade: 'Arapiraca',
        estado_id: 2
      },
      {
        id: 26,
        cidade: 'Atalaia',
        estado_id: 2
      },
      {
        id: 27,
        cidade: 'Barra de Santo Antônio',
        estado_id: 2
      },
      {
        id: 28,
        cidade: 'Barra de São Miguel',
        estado_id: 2
      },
      {
        id: 29,
        cidade: 'Batalha',
        estado_id: 2
      },
      {
        id: 30,
        cidade: 'Belém',
        estado_id: 2
      },
      {
        id: 31,
        cidade: 'Belo Monte',
        estado_id: 2
      },
      {
        id: 32,
        cidade: 'Boca da Mata',
        estado_id: 2
      },
      {
        id: 33,
        cidade: 'Branquinha',
        estado_id: 2
      },
      {
        id: 34,
        cidade: 'Cacimbinhas',
        estado_id: 2
      },
      {
        id: 35,
        cidade: 'Cajueiro',
        estado_id: 2
      },
      {
        id: 36,
        cidade: 'Campestre',
        estado_id: 2
      },
      {
        id: 37,
        cidade: 'Campo Alegre',
        estado_id: 2
      },
      {
        id: 38,
        cidade: 'Campo Grande',
        estado_id: 2
      },
      {
        id: 39,
        cidade: 'Canapi',
        estado_id: 2
      },
      {
        id: 40,
        cidade: 'Capela',
        estado_id: 2
      },
      {
        id: 41,
        cidade: 'Carneiros',
        estado_id: 2
      },
      {
        id: 42,
        cidade: 'Chã Preta',
        estado_id: 2
      },
      {
        id: 43,
        cidade: 'Coité do Nóia',
        estado_id: 2
      },
      {
        id: 44,
        cidade: 'Colônia Leopoldina',
        estado_id: 2
      },
      {
        id: 45,
        cidade: 'Coqueiro Seco',
        estado_id: 2
      },
      {
        id: 46,
        cidade: 'Coruripe',
        estado_id: 2
      },
      {
        id: 47,
        cidade: 'Craíbas',
        estado_id: 2
      },
      {
        id: 48,
        cidade: 'Delmiro Gouveia',
        estado_id: 2
      },
      {
        id: 49,
        cidade: 'Dois Riachos',
        estado_id: 2
      },
      {
        id: 50,
        cidade: 'Estrela de Alagoas',
        estado_id: 2
      },
      {
        id: 51,
        cidade: 'Feira Grande',
        estado_id: 2
      },
      {
        id: 52,
        cidade: 'Feliz Deserto',
        estado_id: 2
      },
      {
        id: 53,
        cidade: 'Flexeiras',
        estado_id: 2
      },
      {
        id: 54,
        cidade: 'Girau do Ponciano',
        estado_id: 2
      },
      {
        id: 55,
        cidade: 'Ibateguara',
        estado_id: 2
      },
      {
        id: 56,
        cidade: 'Igaci',
        estado_id: 2
      },
      {
        id: 57,
        cidade: 'Igreja Nova',
        estado_id: 2
      },
      {
        id: 58,
        cidade: 'Inhapi',
        estado_id: 2
      },
      {
        id: 59,
        cidade: 'Jacaré Dos Homens',
        estado_id: 2
      },
      {
        id: 60,
        cidade: 'Jacuípe',
        estado_id: 2
      },
      {
        id: 61,
        cidade: 'Japaratinga',
        estado_id: 2
      },
      {
        id: 62,
        cidade: 'Jaramataia',
        estado_id: 2
      },
      {
        id: 63,
        cidade: 'Jequiá da Praia',
        estado_id: 2
      },
      {
        id: 64,
        cidade: 'Joaquim Gomes',
        estado_id: 2
      },
      {
        id: 65,
        cidade: 'Jundiá',
        estado_id: 2
      },
      {
        id: 66,
        cidade: 'Junqueiro',
        estado_id: 2
      },
      {
        id: 67,
        cidade: 'Lagoa da Canoa',
        estado_id: 2
      },
      {
        id: 68,
        cidade: 'Limoeiro de Anadia',
        estado_id: 2
      },
      {
        id: 69,
        cidade: 'Maceió',
        estado_id: 2
      },
      {
        id: 70,
        cidade: 'Major Isidoro',
        estado_id: 2
      },
      {
        id: 71,
        cidade: 'Maragogi',
        estado_id: 2
      },
      {
        id: 72,
        cidade: 'Maravilha',
        estado_id: 2
      },
      {
        id: 73,
        cidade: 'Marechal Deodoro',
        estado_id: 2
      },
      {
        id: 74,
        cidade: 'Maribondo',
        estado_id: 2
      },
      {
        id: 75,
        cidade: 'Mar Vermelho',
        estado_id: 2
      },
      {
        id: 76,
        cidade: 'Mata Grande',
        estado_id: 2
      },
      {
        id: 77,
        cidade: 'Matriz de Camaragibe',
        estado_id: 2
      },
      {
        id: 78,
        cidade: 'Messias',
        estado_id: 2
      },
      {
        id: 79,
        cidade: 'Minador do Negrão',
        estado_id: 2
      },
      {
        id: 80,
        cidade: 'Monteirópolis',
        estado_id: 2
      },
      {
        id: 81,
        cidade: 'Murici',
        estado_id: 2
      },
      {
        id: 82,
        cidade: 'Novo Lino',
        estado_id: 2
      },
      {
        id: 83,
        cidade: 'Olho D´água Das Flores',
        estado_id: 2
      },
      {
        id: 84,
        cidade: 'Olho D´água do Casado',
        estado_id: 2
      },
      {
        id: 85,
        cidade: 'Olho D´água Grande',
        estado_id: 2
      },
      {
        id: 86,
        cidade: 'Olivença',
        estado_id: 2
      },
      {
        id: 87,
        cidade: 'Ouro Branco',
        estado_id: 2
      },
      {
        id: 88,
        cidade: 'Palestina',
        estado_id: 2
      },
      {
        id: 89,
        cidade: 'Palmeira Dos Índios',
        estado_id: 2
      },
      {
        id: 90,
        cidade: 'Pão de Açúcar',
        estado_id: 2
      },
      {
        id: 91,
        cidade: 'Pariconha',
        estado_id: 2
      },
      {
        id: 92,
        cidade: 'Paripueira',
        estado_id: 2
      },
      {
        id: 93,
        cidade: 'Passo de Camaragibe',
        estado_id: 2
      },
      {
        id: 94,
        cidade: 'Paulo Jacinto',
        estado_id: 2
      },
      {
        id: 95,
        cidade: 'Penedo',
        estado_id: 2
      },
      {
        id: 96,
        cidade: 'Piaçabuçu',
        estado_id: 2
      },
      {
        id: 97,
        cidade: 'Pilar',
        estado_id: 2
      },
      {
        id: 98,
        cidade: 'Pindoba',
        estado_id: 2
      },
      {
        id: 99,
        cidade: 'Piranhas',
        estado_id: 2
      },
      {
        id: 100,
        cidade: 'Poço Das Trincheiras',
        estado_id: 2
      },
      {
        id: 101,
        cidade: 'Porto Calvo',
        estado_id: 2
      },
      {
        id: 102,
        cidade: 'Porto de Pedras',
        estado_id: 2
      },
      {
        id: 103,
        cidade: 'Porto Real do Colégio',
        estado_id: 2
      },
      {
        id: 104,
        cidade: 'Quebrangulo',
        estado_id: 2
      },
      {
        id: 105,
        cidade: 'Rio Largo',
        estado_id: 2
      },
      {
        id: 106,
        cidade: 'Roteiro',
        estado_id: 2
      },
      {
        id: 107,
        cidade: 'Santa Luzia do Norte',
        estado_id: 2
      },
      {
        id: 108,
        cidade: 'Santana do Ipanema',
        estado_id: 2
      },
      {
        id: 109,
        cidade: 'Santana do Mundaú',
        estado_id: 2
      },
      {
        id: 110,
        cidade: 'São Brás',
        estado_id: 2
      },
      {
        id: 111,
        cidade: 'São José da Laje',
        estado_id: 2
      },
      {
        id: 112,
        cidade: 'São José da Tapera',
        estado_id: 2
      },
      {
        id: 113,
        cidade: 'São Luís do Quitunde',
        estado_id: 2
      },
      {
        id: 114,
        cidade: 'São Miguel Dos Campos',
        estado_id: 2
      },
      {
        id: 115,
        cidade: 'São Miguel Dos Milagres',
        estado_id: 2
      },
      {
        id: 116,
        cidade: 'São Sebastião',
        estado_id: 2
      },
      {
        id: 117,
        cidade: 'Satuba',
        estado_id: 2
      },
      {
        id: 118,
        cidade: 'Senador Rui Palmeira',
        estado_id: 2
      },
      {
        id: 119,
        cidade: 'Tanque D´arca',
        estado_id: 2
      },
      {
        id: 120,
        cidade: 'Taquarana',
        estado_id: 2
      },
      {
        id: 121,
        cidade: 'Teotônio Vilela',
        estado_id: 2
      },
      {
        id: 122,
        cidade: 'Traipu',
        estado_id: 2
      },
      {
        id: 123,
        cidade: 'União Dos Palmares',
        estado_id: 2
      },
      {
        id: 124,
        cidade: 'Viçosa',
        estado_id: 2
      },
      {
        id: 125,
        cidade: 'Alvarães',
        estado_id: 3
      },
      {
        id: 126,
        cidade: 'Amaturá',
        estado_id: 3
      },
      {
        id: 127,
        cidade: 'Anamã',
        estado_id: 3
      },
      {
        id: 128,
        cidade: 'Anori',
        estado_id: 3
      },
      {
        id: 129,
        cidade: 'Apuí',
        estado_id: 3
      },
      {
        id: 130,
        cidade: 'Atalaia do Norte',
        estado_id: 3
      },
      {
        id: 131,
        cidade: 'Autazes',
        estado_id: 3
      },
      {
        id: 132,
        cidade: 'Barcelos',
        estado_id: 3
      },
      {
        id: 133,
        cidade: 'Barreirinha',
        estado_id: 3
      },
      {
        id: 134,
        cidade: 'Benjamin Constant',
        estado_id: 3
      },
      {
        id: 135,
        cidade: 'Beruri',
        estado_id: 3
      },
      {
        id: 136,
        cidade: 'Boa Vista do Ramos',
        estado_id: 3
      },
      {
        id: 137,
        cidade: 'Boca do Acre',
        estado_id: 3
      },
      {
        id: 138,
        cidade: 'Borba',
        estado_id: 3
      },
      {
        id: 139,
        cidade: 'Caapiranga',
        estado_id: 3
      },
      {
        id: 140,
        cidade: 'Canutama',
        estado_id: 3
      },
      {
        id: 141,
        cidade: 'Carauari',
        estado_id: 3
      },
      {
        id: 142,
        cidade: 'Careiro',
        estado_id: 3
      },
      {
        id: 143,
        cidade: 'Careiro da Várzea',
        estado_id: 3
      },
      {
        id: 144,
        cidade: 'Coari',
        estado_id: 3
      },
      {
        id: 145,
        cidade: 'Codajás',
        estado_id: 3
      },
      {
        id: 146,
        cidade: 'Eirunepé',
        estado_id: 3
      },
      {
        id: 147,
        cidade: 'Envira',
        estado_id: 3
      },
      {
        id: 148,
        cidade: 'Fonte Boa',
        estado_id: 3
      },
      {
        id: 149,
        cidade: 'Guajará',
        estado_id: 3
      },
      {
        id: 150,
        cidade: 'Humaitá',
        estado_id: 3
      },
      {
        id: 151,
        cidade: 'Ipixuna',
        estado_id: 3
      },
      {
        id: 152,
        cidade: 'Iranduba',
        estado_id: 3
      },
      {
        id: 153,
        cidade: 'Itacoatiara',
        estado_id: 3
      },
      {
        id: 154,
        cidade: 'Itamarati',
        estado_id: 3
      },
      {
        id: 155,
        cidade: 'Itapiranga',
        estado_id: 3
      },
      {
        id: 156,
        cidade: 'Japurá',
        estado_id: 3
      },
      {
        id: 157,
        cidade: 'Juruá',
        estado_id: 3
      },
      {
        id: 158,
        cidade: 'Jutaí',
        estado_id: 3
      },
      {
        id: 159,
        cidade: 'Lábrea',
        estado_id: 3
      },
      {
        id: 160,
        cidade: 'Manacapuru',
        estado_id: 3
      },
      {
        id: 161,
        cidade: 'Manaquiri',
        estado_id: 3
      },
      {
        id: 162,
        cidade: 'Manaus',
        estado_id: 3
      },
      {
        id: 163,
        cidade: 'Manicoré',
        estado_id: 3
      },
      {
        id: 164,
        cidade: 'Maraã',
        estado_id: 3
      },
      {
        id: 165,
        cidade: 'Maués',
        estado_id: 3
      },
      {
        id: 166,
        cidade: 'Nhamundá',
        estado_id: 3
      },
      {
        id: 167,
        cidade: 'Nova Olinda do Norte',
        estado_id: 3
      },
      {
        id: 168,
        cidade: 'Novo Airão',
        estado_id: 3
      },
      {
        id: 169,
        cidade: 'Novo Aripuanã',
        estado_id: 3
      },
      {
        id: 170,
        cidade: 'Parintins',
        estado_id: 3
      },
      {
        id: 171,
        cidade: 'Pauini',
        estado_id: 3
      },
      {
        id: 172,
        cidade: 'Presidente Figueiredo',
        estado_id: 3
      },
      {
        id: 173,
        cidade: 'Rio Preto da Eva',
        estado_id: 3
      },
      {
        id: 174,
        cidade: 'Santa Isabel do Rio Negro',
        estado_id: 3
      },
      {
        id: 175,
        cidade: 'Santo Antônio do Içá',
        estado_id: 3
      },
      {
        id: 176,
        cidade: 'São Gabriel da Cachoeira',
        estado_id: 3
      },
      {
        id: 177,
        cidade: 'São Paulo de Olivença',
        estado_id: 3
      },
      {
        id: 178,
        cidade: 'São Sebastião do Uatumã',
        estado_id: 3
      },
      {
        id: 179,
        cidade: 'Silves',
        estado_id: 3
      },
      {
        id: 180,
        cidade: 'Tabatinga',
        estado_id: 3
      },
      {
        id: 181,
        cidade: 'Tapauá',
        estado_id: 3
      },
      {
        id: 182,
        cidade: 'Tefé',
        estado_id: 3
      },
      {
        id: 183,
        cidade: 'Tonantins',
        estado_id: 3
      },
      {
        id: 184,
        cidade: 'Uarini',
        estado_id: 3
      },
      {
        id: 185,
        cidade: 'Urucará',
        estado_id: 3
      },
      {
        id: 186,
        cidade: 'Urucurituba',
        estado_id: 3
      },
      {
        id: 187,
        cidade: 'Serra do Navio',
        estado_id: 4
      },
      {
        id: 188,
        cidade: 'Amapá',
        estado_id: 4
      },
      {
        id: 189,
        cidade: 'Pedra Branca do Amapari',
        estado_id: 4
      },
      {
        id: 190,
        cidade: 'Calçoene',
        estado_id: 4
      },
      {
        id: 191,
        cidade: 'Cutias',
        estado_id: 4
      },
      {
        id: 192,
        cidade: 'Ferreira Gomes',
        estado_id: 4
      },
      {
        id: 193,
        cidade: 'Itaubal',
        estado_id: 4
      },
      {
        id: 194,
        cidade: 'Laranjal do Jari',
        estado_id: 4
      },
      {
        id: 195,
        cidade: 'Macapá',
        estado_id: 4
      },
      {
        id: 196,
        cidade: 'Mazagão',
        estado_id: 4
      },
      {
        id: 197,
        cidade: 'Oiapoque',
        estado_id: 4
      },
      {
        id: 198,
        cidade: 'Porto Grande',
        estado_id: 4
      },
      {
        id: 199,
        cidade: 'Pracuúba',
        estado_id: 4
      },
      {
        id: 200,
        cidade: 'Santana',
        estado_id: 4
      },
      {
        id: 201,
        cidade: 'Tartarugalzinho',
        estado_id: 4
      },
      {
        id: 202,
        cidade: 'Vitória do Jari',
        estado_id: 4
      },
      {
        id: 203,
        cidade: 'Abaíra',
        estado_id: 5
      },
      {
        id: 204,
        cidade: 'Abaré',
        estado_id: 5
      },
      {
        id: 205,
        cidade: 'Acajutiba',
        estado_id: 5
      },
      {
        id: 206,
        cidade: 'Adustina',
        estado_id: 5
      },
      {
        id: 207,
        cidade: 'Água Fria',
        estado_id: 5
      },
      {
        id: 208,
        cidade: 'Érico Cardoso',
        estado_id: 5
      },
      {
        id: 209,
        cidade: 'Aiquara',
        estado_id: 5
      },
      {
        id: 210,
        cidade: 'Alagoinhas',
        estado_id: 5
      },
      {
        id: 211,
        cidade: 'Alcobaça',
        estado_id: 5
      },
      {
        id: 212,
        cidade: 'Almadina',
        estado_id: 5
      },
      {
        id: 213,
        cidade: 'Amargosa',
        estado_id: 5
      },
      {
        id: 214,
        cidade: 'Amélia Rodrigues',
        estado_id: 5
      },
      {
        id: 215,
        cidade: 'América Dourada',
        estado_id: 5
      },
      {
        id: 216,
        cidade: 'Anagé',
        estado_id: 5
      },
      {
        id: 217,
        cidade: 'Andaraí',
        estado_id: 5
      },
      {
        id: 218,
        cidade: 'Andorinha',
        estado_id: 5
      },
      {
        id: 219,
        cidade: 'Angical',
        estado_id: 5
      },
      {
        id: 220,
        cidade: 'Anguera',
        estado_id: 5
      },
      {
        id: 221,
        cidade: 'Antas',
        estado_id: 5
      },
      {
        id: 222,
        cidade: 'Antônio Cardoso',
        estado_id: 5
      },
      {
        id: 223,
        cidade: 'Antônio Gonçalves',
        estado_id: 5
      },
      {
        id: 224,
        cidade: 'Aporá',
        estado_id: 5
      },
      {
        id: 225,
        cidade: 'Apuarema',
        estado_id: 5
      },
      {
        id: 226,
        cidade: 'Aracatu',
        estado_id: 5
      },
      {
        id: 227,
        cidade: 'Araças',
        estado_id: 5
      },
      {
        id: 228,
        cidade: 'Araci',
        estado_id: 5
      },
      {
        id: 229,
        cidade: 'Aramari',
        estado_id: 5
      },
      {
        id: 230,
        cidade: 'Arataca',
        estado_id: 5
      },
      {
        id: 231,
        cidade: 'Aratuípe',
        estado_id: 5
      },
      {
        id: 232,
        cidade: 'Aurelino Leal',
        estado_id: 5
      },
      {
        id: 233,
        cidade: 'Baianópolis',
        estado_id: 5
      },
      {
        id: 234,
        cidade: 'Baixa Grande',
        estado_id: 5
      },
      {
        id: 235,
        cidade: 'Banzaê',
        estado_id: 5
      },
      {
        id: 236,
        cidade: 'Barra',
        estado_id: 5
      },
      {
        id: 237,
        cidade: 'Barra da Estiva',
        estado_id: 5
      },
      {
        id: 238,
        cidade: 'Barra do Choça',
        estado_id: 5
      },
      {
        id: 239,
        cidade: 'Barra do Mendes',
        estado_id: 5
      },
      {
        id: 240,
        cidade: 'Barra do Rocha',
        estado_id: 5
      },
      {
        id: 241,
        cidade: 'Barreiras',
        estado_id: 5
      },
      {
        id: 242,
        cidade: 'Barro Alto',
        estado_id: 5
      },
      {
        id: 243,
        cidade: 'Barrocas',
        estado_id: 5
      },
      {
        id: 244,
        cidade: 'Governador Lomanto Júnior',
        estado_id: 5
      },
      {
        id: 245,
        cidade: 'Belmonte',
        estado_id: 5
      },
      {
        id: 246,
        cidade: 'Belo Campo',
        estado_id: 5
      },
      {
        id: 247,
        cidade: 'Biritinga',
        estado_id: 5
      },
      {
        id: 248,
        cidade: 'Boa Nova',
        estado_id: 5
      },
      {
        id: 249,
        cidade: 'Boa Vista do Tupim',
        estado_id: 5
      },
      {
        id: 250,
        cidade: 'Bom Jesus da Lapa',
        estado_id: 5
      },
      {
        id: 251,
        cidade: 'Bom Jesus da Serra',
        estado_id: 5
      },
      {
        id: 252,
        cidade: 'Boninal',
        estado_id: 5
      },
      {
        id: 253,
        cidade: 'Bonito',
        estado_id: 5
      },
      {
        id: 254,
        cidade: 'Boquira',
        estado_id: 5
      },
      {
        id: 255,
        cidade: 'Botuporã',
        estado_id: 5
      },
      {
        id: 256,
        cidade: 'Brejões',
        estado_id: 5
      },
      {
        id: 257,
        cidade: 'Brejolândia',
        estado_id: 5
      },
      {
        id: 258,
        cidade: 'Brotas de Macaúbas',
        estado_id: 5
      },
      {
        id: 259,
        cidade: 'Brumado',
        estado_id: 5
      },
      {
        id: 260,
        cidade: 'Buerarema',
        estado_id: 5
      },
      {
        id: 261,
        cidade: 'Buritirama',
        estado_id: 5
      },
      {
        id: 262,
        cidade: 'Caatiba',
        estado_id: 5
      },
      {
        id: 263,
        cidade: 'Cabaceiras do Paraguaçu',
        estado_id: 5
      },
      {
        id: 264,
        cidade: 'Cachoeira',
        estado_id: 5
      },
      {
        id: 265,
        cidade: 'Caculé',
        estado_id: 5
      },
      {
        id: 266,
        cidade: 'Caém',
        estado_id: 5
      },
      {
        id: 267,
        cidade: 'Caetanos',
        estado_id: 5
      },
      {
        id: 268,
        cidade: 'Caetité',
        estado_id: 5
      },
      {
        id: 269,
        cidade: 'Cafarnaum',
        estado_id: 5
      },
      {
        id: 270,
        cidade: 'Cairu',
        estado_id: 5
      },
      {
        id: 271,
        cidade: 'Caldeirão Grande',
        estado_id: 5
      },
      {
        id: 272,
        cidade: 'Camacan',
        estado_id: 5
      },
      {
        id: 273,
        cidade: 'Camaçari',
        estado_id: 5
      },
      {
        id: 274,
        cidade: 'Camamu',
        estado_id: 5
      },
      {
        id: 275,
        cidade: 'Campo Alegre de Lourdes',
        estado_id: 5
      },
      {
        id: 276,
        cidade: 'Campo Formoso',
        estado_id: 5
      },
      {
        id: 277,
        cidade: 'Canápolis',
        estado_id: 5
      },
      {
        id: 278,
        cidade: 'Canarana',
        estado_id: 5
      },
      {
        id: 279,
        cidade: 'Canavieiras',
        estado_id: 5
      },
      {
        id: 280,
        cidade: 'Candeal',
        estado_id: 5
      },
      {
        id: 281,
        cidade: 'Candeias',
        estado_id: 5
      },
      {
        id: 282,
        cidade: 'Candiba',
        estado_id: 5
      },
      {
        id: 283,
        cidade: 'Cândido Sales',
        estado_id: 5
      },
      {
        id: 284,
        cidade: 'Cansanção',
        estado_id: 5
      },
      {
        id: 285,
        cidade: 'Canudos',
        estado_id: 5
      },
      {
        id: 286,
        cidade: 'Capela do Alto Alegre',
        estado_id: 5
      },
      {
        id: 287,
        cidade: 'Capim Grosso',
        estado_id: 5
      },
      {
        id: 288,
        cidade: 'Caraíbas',
        estado_id: 5
      },
      {
        id: 289,
        cidade: 'Caravelas',
        estado_id: 5
      },
      {
        id: 290,
        cidade: 'Cardeal da Silva',
        estado_id: 5
      },
      {
        id: 291,
        cidade: 'Carinhanha',
        estado_id: 5
      },
      {
        id: 292,
        cidade: 'Casa Nova',
        estado_id: 5
      },
      {
        id: 293,
        cidade: 'Castro Alves',
        estado_id: 5
      },
      {
        id: 294,
        cidade: 'Catolândia',
        estado_id: 5
      },
      {
        id: 295,
        cidade: 'Catu',
        estado_id: 5
      },
      {
        id: 296,
        cidade: 'Caturama',
        estado_id: 5
      },
      {
        id: 297,
        cidade: 'Central',
        estado_id: 5
      },
      {
        id: 298,
        cidade: 'Chorrochó',
        estado_id: 5
      },
      {
        id: 299,
        cidade: 'Cícero Dantas',
        estado_id: 5
      },
      {
        id: 300,
        cidade: 'Cipó',
        estado_id: 5
      },
      {
        id: 301,
        cidade: 'Coaraci',
        estado_id: 5
      },
      {
        id: 302,
        cidade: 'Cocos',
        estado_id: 5
      },
      {
        id: 303,
        cidade: 'Conceição da Feira',
        estado_id: 5
      },
      {
        id: 304,
        cidade: 'Conceição do Almeida',
        estado_id: 5
      },
      {
        id: 305,
        cidade: 'Conceição do Coité',
        estado_id: 5
      },
      {
        id: 306,
        cidade: 'Conceição do Jacuípe',
        estado_id: 5
      },
      {
        id: 307,
        cidade: 'Conde',
        estado_id: 5
      },
      {
        id: 308,
        cidade: 'Condeúba',
        estado_id: 5
      },
      {
        id: 309,
        cidade: 'Contendas do Sincorá',
        estado_id: 5
      },
      {
        id: 310,
        cidade: 'Coração de Maria',
        estado_id: 5
      },
      {
        id: 311,
        cidade: 'Cordeiros',
        estado_id: 5
      },
      {
        id: 312,
        cidade: 'Coribe',
        estado_id: 5
      },
      {
        id: 313,
        cidade: 'Coronel João sá',
        estado_id: 5
      },
      {
        id: 314,
        cidade: 'Correntina',
        estado_id: 5
      },
      {
        id: 315,
        cidade: 'Cotegipe',
        estado_id: 5
      },
      {
        id: 316,
        cidade: 'Cravolândia',
        estado_id: 5
      },
      {
        id: 317,
        cidade: 'Crisópolis',
        estado_id: 5
      },
      {
        id: 318,
        cidade: 'Cristópolis',
        estado_id: 5
      },
      {
        id: 319,
        cidade: 'Cruz Das Almas',
        estado_id: 5
      },
      {
        id: 320,
        cidade: 'Curaçá',
        estado_id: 5
      },
      {
        id: 321,
        cidade: 'Dário Meira',
        estado_id: 5
      },
      {
        id: 322,
        cidade: 'Dias D´ávila',
        estado_id: 5
      },
      {
        id: 323,
        cidade: 'Dom Basílio',
        estado_id: 5
      },
      {
        id: 324,
        cidade: 'Dom Macedo Costa',
        estado_id: 5
      },
      {
        id: 325,
        cidade: 'Elísio Medrado',
        estado_id: 5
      },
      {
        id: 326,
        cidade: 'Encruzilhada',
        estado_id: 5
      },
      {
        id: 327,
        cidade: 'Entre Rios',
        estado_id: 5
      },
      {
        id: 328,
        cidade: 'Esplanada',
        estado_id: 5
      },
      {
        id: 329,
        cidade: 'Euclides da Cunha',
        estado_id: 5
      },
      {
        id: 330,
        cidade: 'Eunápolis',
        estado_id: 5
      },
      {
        id: 331,
        cidade: 'Fátima',
        estado_id: 5
      },
      {
        id: 332,
        cidade: 'Feira da Mata',
        estado_id: 5
      },
      {
        id: 333,
        cidade: 'Feira de Santana',
        estado_id: 5
      },
      {
        id: 334,
        cidade: 'Filadélfia',
        estado_id: 5
      },
      {
        id: 335,
        cidade: 'Firmino Alves',
        estado_id: 5
      },
      {
        id: 336,
        cidade: 'Floresta Azul',
        estado_id: 5
      },
      {
        id: 337,
        cidade: 'Formosa do Rio Preto',
        estado_id: 5
      },
      {
        id: 338,
        cidade: 'Gandu',
        estado_id: 5
      },
      {
        id: 339,
        cidade: 'Gavião',
        estado_id: 5
      },
      {
        id: 340,
        cidade: 'Gentio do Ouro',
        estado_id: 5
      },
      {
        id: 341,
        cidade: 'Glória',
        estado_id: 5
      },
      {
        id: 342,
        cidade: 'Gongogi',
        estado_id: 5
      },
      {
        id: 343,
        cidade: 'Governador Mangabeira',
        estado_id: 5
      },
      {
        id: 344,
        cidade: 'Guajeru',
        estado_id: 5
      },
      {
        id: 345,
        cidade: 'Guanambi',
        estado_id: 5
      },
      {
        id: 346,
        cidade: 'Guaratinga',
        estado_id: 5
      },
      {
        id: 347,
        cidade: 'Heliópolis',
        estado_id: 5
      },
      {
        id: 348,
        cidade: 'Iaçu',
        estado_id: 5
      },
      {
        id: 349,
        cidade: 'Ibiassucê',
        estado_id: 5
      },
      {
        id: 350,
        cidade: 'Ibicaraí',
        estado_id: 5
      },
      {
        id: 351,
        cidade: 'Ibicoara',
        estado_id: 5
      },
      {
        id: 352,
        cidade: 'Ibicuí',
        estado_id: 5
      },
      {
        id: 353,
        cidade: 'Ibipeba',
        estado_id: 5
      },
      {
        id: 354,
        cidade: 'Ibipitanga',
        estado_id: 5
      },
      {
        id: 355,
        cidade: 'Ibiquera',
        estado_id: 5
      },
      {
        id: 356,
        cidade: 'Ibirapitanga',
        estado_id: 5
      },
      {
        id: 357,
        cidade: 'Ibirapuã',
        estado_id: 5
      },
      {
        id: 358,
        cidade: 'Ibirataia',
        estado_id: 5
      },
      {
        id: 359,
        cidade: 'Ibitiara',
        estado_id: 5
      },
      {
        id: 360,
        cidade: 'Ibititá',
        estado_id: 5
      },
      {
        id: 361,
        cidade: 'Ibotirama',
        estado_id: 5
      },
      {
        id: 362,
        cidade: 'Ichu',
        estado_id: 5
      },
      {
        id: 363,
        cidade: 'Igaporã',
        estado_id: 5
      },
      {
        id: 364,
        cidade: 'Igrapiúna',
        estado_id: 5
      },
      {
        id: 365,
        cidade: 'Iguaí',
        estado_id: 5
      },
      {
        id: 366,
        cidade: 'Ilhéus',
        estado_id: 5
      },
      {
        id: 367,
        cidade: 'Inhambupe',
        estado_id: 5
      },
      {
        id: 368,
        cidade: 'Ipecaetá',
        estado_id: 5
      },
      {
        id: 369,
        cidade: 'Ipiaú',
        estado_id: 5
      },
      {
        id: 370,
        cidade: 'Ipirá',
        estado_id: 5
      },
      {
        id: 371,
        cidade: 'Ipupiara',
        estado_id: 5
      },
      {
        id: 372,
        cidade: 'Irajuba',
        estado_id: 5
      },
      {
        id: 373,
        cidade: 'Iramaia',
        estado_id: 5
      },
      {
        id: 374,
        cidade: 'Iraquara',
        estado_id: 5
      },
      {
        id: 375,
        cidade: 'Irará',
        estado_id: 5
      },
      {
        id: 376,
        cidade: 'Irecê',
        estado_id: 5
      },
      {
        id: 377,
        cidade: 'Itabela',
        estado_id: 5
      },
      {
        id: 378,
        cidade: 'Itaberaba',
        estado_id: 5
      },
      {
        id: 379,
        cidade: 'Itabuna',
        estado_id: 5
      },
      {
        id: 380,
        cidade: 'Itacaré',
        estado_id: 5
      },
      {
        id: 381,
        cidade: 'Itaeté',
        estado_id: 5
      },
      {
        id: 382,
        cidade: 'Itagi',
        estado_id: 5
      },
      {
        id: 383,
        cidade: 'Itagibá',
        estado_id: 5
      },
      {
        id: 384,
        cidade: 'Itagimirim',
        estado_id: 5
      },
      {
        id: 385,
        cidade: 'Itaguaçu da Bahia',
        estado_id: 5
      },
      {
        id: 386,
        cidade: 'Itaju do Colônia',
        estado_id: 5
      },
      {
        id: 387,
        cidade: 'Itajuípe',
        estado_id: 5
      },
      {
        id: 388,
        cidade: 'Itamaraju',
        estado_id: 5
      },
      {
        id: 389,
        cidade: 'Itamari',
        estado_id: 5
      },
      {
        id: 390,
        cidade: 'Itambé',
        estado_id: 5
      },
      {
        id: 391,
        cidade: 'Itanagra',
        estado_id: 5
      },
      {
        id: 392,
        cidade: 'Itanhém',
        estado_id: 5
      },
      {
        id: 393,
        cidade: 'Itaparica',
        estado_id: 5
      },
      {
        id: 394,
        cidade: 'Itapé',
        estado_id: 5
      },
      {
        id: 395,
        cidade: 'Itapebi',
        estado_id: 5
      },
      {
        id: 396,
        cidade: 'Itapetinga',
        estado_id: 5
      },
      {
        id: 397,
        cidade: 'Itapicuru',
        estado_id: 5
      },
      {
        id: 398,
        cidade: 'Itapitanga',
        estado_id: 5
      },
      {
        id: 399,
        cidade: 'Itaquara',
        estado_id: 5
      },
      {
        id: 400,
        cidade: 'Itarantim',
        estado_id: 5
      },
      {
        id: 401,
        cidade: 'Itatim',
        estado_id: 5
      },
      {
        id: 402,
        cidade: 'Itiruçu',
        estado_id: 5
      },
      {
        id: 403,
        cidade: 'Itiúba',
        estado_id: 5
      },
      {
        id: 404,
        cidade: 'Itororó',
        estado_id: 5
      },
      {
        id: 405,
        cidade: 'Ituaçu',
        estado_id: 5
      },
      {
        id: 406,
        cidade: 'Ituberá',
        estado_id: 5
      },
      {
        id: 407,
        cidade: 'Iuiú',
        estado_id: 5
      },
      {
        id: 408,
        cidade: 'Jaborandi',
        estado_id: 5
      },
      {
        id: 409,
        cidade: 'Jacaraci',
        estado_id: 5
      },
      {
        id: 410,
        cidade: 'Jacobina',
        estado_id: 5
      },
      {
        id: 411,
        cidade: 'Jaguaquara',
        estado_id: 5
      },
      {
        id: 412,
        cidade: 'Jaguarari',
        estado_id: 5
      },
      {
        id: 413,
        cidade: 'Jaguaripe',
        estado_id: 5
      },
      {
        id: 414,
        cidade: 'Jandaíra',
        estado_id: 5
      },
      {
        id: 415,
        cidade: 'Jequié',
        estado_id: 5
      },
      {
        id: 416,
        cidade: 'Jeremoabo',
        estado_id: 5
      },
      {
        id: 417,
        cidade: 'Jiquiriçá',
        estado_id: 5
      },
      {
        id: 418,
        cidade: 'Jitaúna',
        estado_id: 5
      },
      {
        id: 419,
        cidade: 'João Dourado',
        estado_id: 5
      },
      {
        id: 420,
        cidade: 'Juazeiro',
        estado_id: 5
      },
      {
        id: 421,
        cidade: 'Jucuruçu',
        estado_id: 5
      },
      {
        id: 422,
        cidade: 'Jussara',
        estado_id: 5
      },
      {
        id: 423,
        cidade: 'Jussari',
        estado_id: 5
      },
      {
        id: 424,
        cidade: 'Jussiape',
        estado_id: 5
      },
      {
        id: 425,
        cidade: 'Lafaiete Coutinho',
        estado_id: 5
      },
      {
        id: 426,
        cidade: 'Lagoa Real',
        estado_id: 5
      },
      {
        id: 427,
        cidade: 'Laje',
        estado_id: 5
      },
      {
        id: 428,
        cidade: 'Lajedão',
        estado_id: 5
      },
      {
        id: 429,
        cidade: 'Lajedinho',
        estado_id: 5
      },
      {
        id: 430,
        cidade: 'Lajedo do Tabocal',
        estado_id: 5
      },
      {
        id: 431,
        cidade: 'Lamarão',
        estado_id: 5
      },
      {
        id: 432,
        cidade: 'Lapão',
        estado_id: 5
      },
      {
        id: 433,
        cidade: 'Lauro de Freitas',
        estado_id: 5
      },
      {
        id: 434,
        cidade: 'Lençóis',
        estado_id: 5
      },
      {
        id: 435,
        cidade: 'Licínio de Almeida',
        estado_id: 5
      },
      {
        id: 436,
        cidade: 'Livramento de Nossa Senhora',
        estado_id: 5
      },
      {
        id: 437,
        cidade: 'Luís Eduardo Magalhães',
        estado_id: 5
      },
      {
        id: 438,
        cidade: 'Macajuba',
        estado_id: 5
      },
      {
        id: 439,
        cidade: 'Macarani',
        estado_id: 5
      },
      {
        id: 440,
        cidade: 'Macaúbas',
        estado_id: 5
      },
      {
        id: 441,
        cidade: 'Macururé',
        estado_id: 5
      },
      {
        id: 442,
        cidade: 'Madre de Deus',
        estado_id: 5
      },
      {
        id: 443,
        cidade: 'Maetinga',
        estado_id: 5
      },
      {
        id: 444,
        cidade: 'Maiquinique',
        estado_id: 5
      },
      {
        id: 445,
        cidade: 'Mairi',
        estado_id: 5
      },
      {
        id: 446,
        cidade: 'Malhada',
        estado_id: 5
      },
      {
        id: 447,
        cidade: 'Malhada de Pedras',
        estado_id: 5
      },
      {
        id: 448,
        cidade: 'Manoel Vitorino',
        estado_id: 5
      },
      {
        id: 449,
        cidade: 'Mansidão',
        estado_id: 5
      },
      {
        id: 450,
        cidade: 'Maracás',
        estado_id: 5
      },
      {
        id: 451,
        cidade: 'Maragogipe',
        estado_id: 5
      },
      {
        id: 452,
        cidade: 'Maraú',
        estado_id: 5
      },
      {
        id: 453,
        cidade: 'Marcionílio Souza',
        estado_id: 5
      },
      {
        id: 454,
        cidade: 'Mascote',
        estado_id: 5
      },
      {
        id: 455,
        cidade: 'Mata de São João',
        estado_id: 5
      },
      {
        id: 456,
        cidade: 'Matina',
        estado_id: 5
      },
      {
        id: 457,
        cidade: 'Medeiros Neto',
        estado_id: 5
      },
      {
        id: 458,
        cidade: 'Miguel Calmon',
        estado_id: 5
      },
      {
        id: 459,
        cidade: 'Milagres',
        estado_id: 5
      },
      {
        id: 460,
        cidade: 'Mirangaba',
        estado_id: 5
      },
      {
        id: 461,
        cidade: 'Mirante',
        estado_id: 5
      },
      {
        id: 462,
        cidade: 'Monte Santo',
        estado_id: 5
      },
      {
        id: 463,
        cidade: 'Morpará',
        estado_id: 5
      },
      {
        id: 464,
        cidade: 'Morro do Chapéu',
        estado_id: 5
      },
      {
        id: 465,
        cidade: 'Mortugaba',
        estado_id: 5
      },
      {
        id: 466,
        cidade: 'Mucugê',
        estado_id: 5
      },
      {
        id: 467,
        cidade: 'Mucuri',
        estado_id: 5
      },
      {
        id: 468,
        cidade: 'Mulungu do Morro',
        estado_id: 5
      },
      {
        id: 469,
        cidade: 'Mundo Novo',
        estado_id: 5
      },
      {
        id: 470,
        cidade: 'Muniz Ferreira',
        estado_id: 5
      },
      {
        id: 471,
        cidade: 'Muquém de São Francisco',
        estado_id: 5
      },
      {
        id: 472,
        cidade: 'Muritiba',
        estado_id: 5
      },
      {
        id: 473,
        cidade: 'Mutuípe',
        estado_id: 5
      },
      {
        id: 474,
        cidade: 'Nazaré',
        estado_id: 5
      },
      {
        id: 475,
        cidade: 'Nilo Peçanha',
        estado_id: 5
      },
      {
        id: 476,
        cidade: 'Nordestina',
        estado_id: 5
      },
      {
        id: 477,
        cidade: 'Nova Canaã',
        estado_id: 5
      },
      {
        id: 478,
        cidade: 'Nova Fátima',
        estado_id: 5
      },
      {
        id: 479,
        cidade: 'Nova Ibiá',
        estado_id: 5
      },
      {
        id: 480,
        cidade: 'Nova Itarana',
        estado_id: 5
      },
      {
        id: 481,
        cidade: 'Nova Redenção',
        estado_id: 5
      },
      {
        id: 482,
        cidade: 'Nova Soure',
        estado_id: 5
      },
      {
        id: 483,
        cidade: 'Nova Viçosa',
        estado_id: 5
      },
      {
        id: 484,
        cidade: 'Novo Horizonte',
        estado_id: 5
      },
      {
        id: 485,
        cidade: 'Novo Triunfo',
        estado_id: 5
      },
      {
        id: 486,
        cidade: 'Olindina',
        estado_id: 5
      },
      {
        id: 487,
        cidade: 'Oliveira Dos Brejinhos',
        estado_id: 5
      },
      {
        id: 488,
        cidade: 'Ouriçangas',
        estado_id: 5
      },
      {
        id: 489,
        cidade: 'Ourolândia',
        estado_id: 5
      },
      {
        id: 490,
        cidade: 'Palmas de Monte Alto',
        estado_id: 5
      },
      {
        id: 491,
        cidade: 'Palmeiras',
        estado_id: 5
      },
      {
        id: 492,
        cidade: 'Paramirim',
        estado_id: 5
      },
      {
        id: 493,
        cidade: 'Paratinga',
        estado_id: 5
      },
      {
        id: 494,
        cidade: 'Paripiranga',
        estado_id: 5
      },
      {
        id: 495,
        cidade: 'Pau Brasil',
        estado_id: 5
      },
      {
        id: 496,
        cidade: 'Paulo Afonso',
        estado_id: 5
      },
      {
        id: 497,
        cidade: 'pé de Serra',
        estado_id: 5
      },
      {
        id: 498,
        cidade: 'Pedrão',
        estado_id: 5
      },
      {
        id: 499,
        cidade: 'Pedro Alexandre',
        estado_id: 5
      },
      {
        id: 500,
        cidade: 'Piatã',
        estado_id: 5
      },
      {
        id: 501,
        cidade: 'Pilão Arcado',
        estado_id: 5
      },
      {
        id: 502,
        cidade: 'Pindaí',
        estado_id: 5
      },
      {
        id: 503,
        cidade: 'Pindobaçu',
        estado_id: 5
      },
      {
        id: 504,
        cidade: 'Pintadas',
        estado_id: 5
      },
      {
        id: 505,
        cidade: 'Piraí do Norte',
        estado_id: 5
      },
      {
        id: 506,
        cidade: 'Piripá',
        estado_id: 5
      },
      {
        id: 507,
        cidade: 'Piritiba',
        estado_id: 5
      },
      {
        id: 508,
        cidade: 'Planaltino',
        estado_id: 5
      },
      {
        id: 509,
        cidade: 'Planalto',
        estado_id: 5
      },
      {
        id: 510,
        cidade: 'Poções',
        estado_id: 5
      },
      {
        id: 511,
        cidade: 'Pojuca',
        estado_id: 5
      },
      {
        id: 512,
        cidade: 'Ponto Novo',
        estado_id: 5
      },
      {
        id: 513,
        cidade: 'Porto Seguro',
        estado_id: 5
      },
      {
        id: 514,
        cidade: 'Potiraguá',
        estado_id: 5
      },
      {
        id: 515,
        cidade: 'Prado',
        estado_id: 5
      },
      {
        id: 516,
        cidade: 'Presidente Dutra',
        estado_id: 5
      },
      {
        id: 517,
        cidade: 'Presidente Jânio Quadros',
        estado_id: 5
      },
      {
        id: 518,
        cidade: 'Presidente Tancredo Neves',
        estado_id: 5
      },
      {
        id: 519,
        cidade: 'Queimadas',
        estado_id: 5
      },
      {
        id: 520,
        cidade: 'Quijingue',
        estado_id: 5
      },
      {
        id: 521,
        cidade: 'Quixabeira',
        estado_id: 5
      },
      {
        id: 522,
        cidade: 'Rafael Jambeiro',
        estado_id: 5
      },
      {
        id: 523,
        cidade: 'Remanso',
        estado_id: 5
      },
      {
        id: 524,
        cidade: 'Retirolândia',
        estado_id: 5
      },
      {
        id: 525,
        cidade: 'Riachão Das Neves',
        estado_id: 5
      },
      {
        id: 526,
        cidade: 'Riachão do Jacuípe',
        estado_id: 5
      },
      {
        id: 527,
        cidade: 'Riacho de Santana',
        estado_id: 5
      },
      {
        id: 528,
        cidade: 'Ribeira do Amparo',
        estado_id: 5
      },
      {
        id: 529,
        cidade: 'Ribeira do Pombal',
        estado_id: 5
      },
      {
        id: 530,
        cidade: 'Ribeirão do Largo',
        estado_id: 5
      },
      {
        id: 531,
        cidade: 'Rio de Contas',
        estado_id: 5
      },
      {
        id: 532,
        cidade: 'Rio do Antônio',
        estado_id: 5
      },
      {
        id: 533,
        cidade: 'Rio do Pires',
        estado_id: 5
      },
      {
        id: 534,
        cidade: 'Rio Real',
        estado_id: 5
      },
      {
        id: 535,
        cidade: 'Rodelas',
        estado_id: 5
      },
      {
        id: 536,
        cidade: 'Ruy Barbosa',
        estado_id: 5
      },
      {
        id: 537,
        cidade: 'Salinas da Margarida',
        estado_id: 5
      },
      {
        id: 538,
        cidade: 'Salvador',
        estado_id: 5
      },
      {
        id: 539,
        cidade: 'Santa Bárbara',
        estado_id: 5
      },
      {
        id: 540,
        cidade: 'Santa Brígida',
        estado_id: 5
      },
      {
        id: 541,
        cidade: 'Santa Cruz Cabrália',
        estado_id: 5
      },
      {
        id: 542,
        cidade: 'Santa Cruz da Vitória',
        estado_id: 5
      },
      {
        id: 543,
        cidade: 'Santa Inês',
        estado_id: 5
      },
      {
        id: 544,
        cidade: 'Santaluz',
        estado_id: 5
      },
      {
        id: 545,
        cidade: 'Santa Luzia',
        estado_id: 5
      },
      {
        id: 546,
        cidade: 'Santa Maria da Vitória',
        estado_id: 5
      },
      {
        id: 547,
        cidade: 'Santana',
        estado_id: 5
      },
      {
        id: 548,
        cidade: 'Santanópolis',
        estado_id: 5
      },
      {
        id: 549,
        cidade: 'Santa Rita de Cássia',
        estado_id: 5
      },
      {
        id: 550,
        cidade: 'Santa Teresinha',
        estado_id: 5
      },
      {
        id: 551,
        cidade: 'Santo Amaro',
        estado_id: 5
      },
      {
        id: 552,
        cidade: 'Santo Antônio de Jesus',
        estado_id: 5
      },
      {
        id: 553,
        cidade: 'Santo Estêvão',
        estado_id: 5
      },
      {
        id: 554,
        cidade: 'São Desidério',
        estado_id: 5
      },
      {
        id: 555,
        cidade: 'São Domingos',
        estado_id: 5
      },
      {
        id: 556,
        cidade: 'São Félix',
        estado_id: 5
      },
      {
        id: 557,
        cidade: 'São Félix do Coribe',
        estado_id: 5
      },
      {
        id: 558,
        cidade: 'São Felipe',
        estado_id: 5
      },
      {
        id: 559,
        cidade: 'São Francisco do Conde',
        estado_id: 5
      },
      {
        id: 560,
        cidade: 'São Gabriel',
        estado_id: 5
      },
      {
        id: 561,
        cidade: 'São Gonçalo Dos Campos',
        estado_id: 5
      },
      {
        id: 562,
        cidade: 'São José da Vitória',
        estado_id: 5
      },
      {
        id: 563,
        cidade: 'São José do Jacuípe',
        estado_id: 5
      },
      {
        id: 564,
        cidade: 'São Miguel Das Matas',
        estado_id: 5
      },
      {
        id: 565,
        cidade: 'São Sebastião do Passé',
        estado_id: 5
      },
      {
        id: 566,
        cidade: 'Sapeaçu',
        estado_id: 5
      },
      {
        id: 567,
        cidade: 'Sátiro Dias',
        estado_id: 5
      },
      {
        id: 568,
        cidade: 'Saubara',
        estado_id: 5
      },
      {
        id: 569,
        cidade: 'Saúde',
        estado_id: 5
      },
      {
        id: 570,
        cidade: 'Seabra',
        estado_id: 5
      },
      {
        id: 571,
        cidade: 'Sebastião Laranjeiras',
        estado_id: 5
      },
      {
        id: 572,
        cidade: 'Senhor do Bonfim',
        estado_id: 5
      },
      {
        id: 573,
        cidade: 'Serra do Ramalho',
        estado_id: 5
      },
      {
        id: 574,
        cidade: 'Sento sé',
        estado_id: 5
      },
      {
        id: 575,
        cidade: 'Serra Dourada',
        estado_id: 5
      },
      {
        id: 576,
        cidade: 'Serra Preta',
        estado_id: 5
      },
      {
        id: 577,
        cidade: 'Serrinha',
        estado_id: 5
      },
      {
        id: 578,
        cidade: 'Serrolândia',
        estado_id: 5
      },
      {
        id: 579,
        cidade: 'Simões Filho',
        estado_id: 5
      },
      {
        id: 580,
        cidade: 'Sítio do Mato',
        estado_id: 5
      },
      {
        id: 581,
        cidade: 'Sítio do Quinto',
        estado_id: 5
      },
      {
        id: 582,
        cidade: 'Sobradinho',
        estado_id: 5
      },
      {
        id: 583,
        cidade: 'Souto Soares',
        estado_id: 5
      },
      {
        id: 584,
        cidade: 'Tabocas do Brejo Velho',
        estado_id: 5
      },
      {
        id: 585,
        cidade: 'Tanhaçu',
        estado_id: 5
      },
      {
        id: 586,
        cidade: 'Tanque Novo',
        estado_id: 5
      },
      {
        id: 587,
        cidade: 'Tanquinho',
        estado_id: 5
      },
      {
        id: 588,
        cidade: 'Taperoá',
        estado_id: 5
      },
      {
        id: 589,
        cidade: 'Tapiramutá',
        estado_id: 5
      },
      {
        id: 590,
        cidade: 'Teixeira de Freitas',
        estado_id: 5
      },
      {
        id: 591,
        cidade: 'Teodoro Sampaio',
        estado_id: 5
      },
      {
        id: 592,
        cidade: 'Teofilândia',
        estado_id: 5
      },
      {
        id: 593,
        cidade: 'Teolândia',
        estado_id: 5
      },
      {
        id: 594,
        cidade: 'Terra Nova',
        estado_id: 5
      },
      {
        id: 595,
        cidade: 'Tremedal',
        estado_id: 5
      },
      {
        id: 596,
        cidade: 'Tucano',
        estado_id: 5
      },
      {
        id: 597,
        cidade: 'Uauá',
        estado_id: 5
      },
      {
        id: 598,
        cidade: 'Ubaíra',
        estado_id: 5
      },
      {
        id: 599,
        cidade: 'Ubaitaba',
        estado_id: 5
      },
      {
        id: 600,
        cidade: 'Ubatã',
        estado_id: 5
      },
      {
        id: 601,
        cidade: 'Uibaí',
        estado_id: 5
      },
      {
        id: 602,
        cidade: 'Umburanas',
        estado_id: 5
      },
      {
        id: 603,
        cidade: 'Una',
        estado_id: 5
      },
      {
        id: 604,
        cidade: 'Urandi',
        estado_id: 5
      },
      {
        id: 605,
        cidade: 'Uruçuca',
        estado_id: 5
      },
      {
        id: 606,
        cidade: 'Utinga',
        estado_id: 5
      },
      {
        id: 607,
        cidade: 'Valença',
        estado_id: 5
      },
      {
        id: 608,
        cidade: 'Valente',
        estado_id: 5
      },
      {
        id: 609,
        cidade: 'Várzea da Roça',
        estado_id: 5
      },
      {
        id: 610,
        cidade: 'Várzea do Poço',
        estado_id: 5
      },
      {
        id: 611,
        cidade: 'Várzea Nova',
        estado_id: 5
      },
      {
        id: 612,
        cidade: 'Varzedo',
        estado_id: 5
      },
      {
        id: 613,
        cidade: 'Vera Cruz',
        estado_id: 5
      },
      {
        id: 614,
        cidade: 'Vereda',
        estado_id: 5
      },
      {
        id: 615,
        cidade: 'Vitória da Conquista',
        estado_id: 5
      },
      {
        id: 616,
        cidade: 'Wagner',
        estado_id: 5
      },
      {
        id: 617,
        cidade: 'Wanderley',
        estado_id: 5
      },
      {
        id: 618,
        cidade: 'Wenceslau Guimarães',
        estado_id: 5
      },
      {
        id: 619,
        cidade: 'Xique-xique',
        estado_id: 5
      },
      {
        id: 620,
        cidade: 'Abaiara',
        estado_id: 6
      },
      {
        id: 621,
        cidade: 'Acarapé',
        estado_id: 6
      },
      {
        id: 622,
        cidade: 'Acaraú',
        estado_id: 6
      },
      {
        id: 623,
        cidade: 'Acopiara',
        estado_id: 6
      },
      {
        id: 624,
        cidade: 'Aiuaba',
        estado_id: 6
      },
      {
        id: 625,
        cidade: 'Alcântaras',
        estado_id: 6
      },
      {
        id: 626,
        cidade: 'Altaneira',
        estado_id: 6
      },
      {
        id: 627,
        cidade: 'Alto Santo',
        estado_id: 6
      },
      {
        id: 628,
        cidade: 'Amontada',
        estado_id: 6
      },
      {
        id: 629,
        cidade: 'Antonina do Norte',
        estado_id: 6
      },
      {
        id: 630,
        cidade: 'Apuiarés',
        estado_id: 6
      },
      {
        id: 631,
        cidade: 'Aquiraz',
        estado_id: 6
      },
      {
        id: 632,
        cidade: 'Aracati',
        estado_id: 6
      },
      {
        id: 633,
        cidade: 'Aracoiaba',
        estado_id: 6
      },
      {
        id: 634,
        cidade: 'Ararendá',
        estado_id: 6
      },
      {
        id: 635,
        cidade: 'Araripe',
        estado_id: 6
      },
      {
        id: 636,
        cidade: 'Aratuba',
        estado_id: 6
      },
      {
        id: 637,
        cidade: 'Arneiroz',
        estado_id: 6
      },
      {
        id: 638,
        cidade: 'Assaré',
        estado_id: 6
      },
      {
        id: 639,
        cidade: 'Aurora',
        estado_id: 6
      },
      {
        id: 640,
        cidade: 'Baixio',
        estado_id: 6
      },
      {
        id: 641,
        cidade: 'Banabuiú',
        estado_id: 6
      },
      {
        id: 642,
        cidade: 'Barbalha',
        estado_id: 6
      },
      {
        id: 643,
        cidade: 'Barreira',
        estado_id: 6
      },
      {
        id: 644,
        cidade: 'Barro',
        estado_id: 6
      },
      {
        id: 645,
        cidade: 'Barroquinha',
        estado_id: 6
      },
      {
        id: 646,
        cidade: 'Baturité',
        estado_id: 6
      },
      {
        id: 647,
        cidade: 'Beberibe',
        estado_id: 6
      },
      {
        id: 648,
        cidade: 'Bela Cruz',
        estado_id: 6
      },
      {
        id: 649,
        cidade: 'Boa Viagem',
        estado_id: 6
      },
      {
        id: 650,
        cidade: 'Brejo Santo',
        estado_id: 6
      },
      {
        id: 651,
        cidade: 'Camocim',
        estado_id: 6
      },
      {
        id: 652,
        cidade: 'Campos Sales',
        estado_id: 6
      },
      {
        id: 653,
        cidade: 'Canindé',
        estado_id: 6
      },
      {
        id: 654,
        cidade: 'Capistrano',
        estado_id: 6
      },
      {
        id: 655,
        cidade: 'Caridade',
        estado_id: 6
      },
      {
        id: 656,
        cidade: 'Cariré',
        estado_id: 6
      },
      {
        id: 657,
        cidade: 'Caririaçu',
        estado_id: 6
      },
      {
        id: 658,
        cidade: 'Cariús',
        estado_id: 6
      },
      {
        id: 659,
        cidade: 'Carnaubal',
        estado_id: 6
      },
      {
        id: 660,
        cidade: 'Cascavel',
        estado_id: 6
      },
      {
        id: 661,
        cidade: 'Catarina',
        estado_id: 6
      },
      {
        id: 662,
        cidade: 'Catunda',
        estado_id: 6
      },
      {
        id: 663,
        cidade: 'Caucaia',
        estado_id: 6
      },
      {
        id: 664,
        cidade: 'Cedro',
        estado_id: 6
      },
      {
        id: 665,
        cidade: 'Chaval',
        estado_id: 6
      },
      {
        id: 666,
        cidade: 'Choró',
        estado_id: 6
      },
      {
        id: 667,
        cidade: 'Chorozinho',
        estado_id: 6
      },
      {
        id: 668,
        cidade: 'Coreaú',
        estado_id: 6
      },
      {
        id: 669,
        cidade: 'Crateús',
        estado_id: 6
      },
      {
        id: 670,
        cidade: 'Crato',
        estado_id: 6
      },
      {
        id: 671,
        cidade: 'Croatá',
        estado_id: 6
      },
      {
        id: 672,
        cidade: 'Cruz',
        estado_id: 6
      },
      {
        id: 673,
        cidade: 'Deputado Irapuan Pinheiro',
        estado_id: 6
      },
      {
        id: 674,
        cidade: 'Ererê',
        estado_id: 6
      },
      {
        id: 675,
        cidade: 'Eusébio',
        estado_id: 6
      },
      {
        id: 676,
        cidade: 'Farias Brito',
        estado_id: 6
      },
      {
        id: 677,
        cidade: 'Forquilha',
        estado_id: 6
      },
      {
        id: 678,
        cidade: 'Fortaleza',
        estado_id: 6
      },
      {
        id: 679,
        cidade: 'Fortim',
        estado_id: 6
      },
      {
        id: 680,
        cidade: 'Frecheirinha',
        estado_id: 6
      },
      {
        id: 681,
        cidade: 'General Sampaio',
        estado_id: 6
      },
      {
        id: 682,
        cidade: 'Graça',
        estado_id: 6
      },
      {
        id: 683,
        cidade: 'Granja',
        estado_id: 6
      },
      {
        id: 684,
        cidade: 'Granjeiro',
        estado_id: 6
      },
      {
        id: 685,
        cidade: 'Groaíras',
        estado_id: 6
      },
      {
        id: 686,
        cidade: 'Guaiúba',
        estado_id: 6
      },
      {
        id: 687,
        cidade: 'Guaraciaba do Norte',
        estado_id: 6
      },
      {
        id: 688,
        cidade: 'Guaramiranga',
        estado_id: 6
      },
      {
        id: 689,
        cidade: 'Hidrolândia',
        estado_id: 6
      },
      {
        id: 690,
        cidade: 'Horizonte',
        estado_id: 6
      },
      {
        id: 691,
        cidade: 'Ibaretama',
        estado_id: 6
      },
      {
        id: 692,
        cidade: 'Ibiapina',
        estado_id: 6
      },
      {
        id: 693,
        cidade: 'Ibicuitinga',
        estado_id: 6
      },
      {
        id: 694,
        cidade: 'Icapuí',
        estado_id: 6
      },
      {
        id: 695,
        cidade: 'Icó',
        estado_id: 6
      },
      {
        id: 696,
        cidade: 'Iguatu',
        estado_id: 6
      },
      {
        id: 697,
        cidade: 'Independência',
        estado_id: 6
      },
      {
        id: 698,
        cidade: 'Ipaporanga',
        estado_id: 6
      },
      {
        id: 699,
        cidade: 'Ipaumirim',
        estado_id: 6
      },
      {
        id: 700,
        cidade: 'Ipu',
        estado_id: 6
      },
      {
        id: 701,
        cidade: 'Ipueiras',
        estado_id: 6
      },
      {
        id: 702,
        cidade: 'Iracema',
        estado_id: 6
      },
      {
        id: 703,
        cidade: 'Irauçuba',
        estado_id: 6
      },
      {
        id: 704,
        cidade: 'Itaiçaba',
        estado_id: 6
      },
      {
        id: 705,
        cidade: 'Itaitinga',
        estado_id: 6
      },
      {
        id: 706,
        cidade: 'Itapagé',
        estado_id: 6
      },
      {
        id: 707,
        cidade: 'Itapipoca',
        estado_id: 6
      },
      {
        id: 708,
        cidade: 'Itapiúna',
        estado_id: 6
      },
      {
        id: 709,
        cidade: 'Itarema',
        estado_id: 6
      },
      {
        id: 710,
        cidade: 'Itatira',
        estado_id: 6
      },
      {
        id: 711,
        cidade: 'Jaguaretama',
        estado_id: 6
      },
      {
        id: 712,
        cidade: 'Jaguaribara',
        estado_id: 6
      },
      {
        id: 713,
        cidade: 'Jaguaribe',
        estado_id: 6
      },
      {
        id: 714,
        cidade: 'Jaguaruana',
        estado_id: 6
      },
      {
        id: 715,
        cidade: 'Jardim',
        estado_id: 6
      },
      {
        id: 716,
        cidade: 'Jati',
        estado_id: 6
      },
      {
        id: 717,
        cidade: 'Jijoca de Jericoacoara',
        estado_id: 6
      },
      {
        id: 718,
        cidade: 'Juazeiro do Norte',
        estado_id: 6
      },
      {
        id: 719,
        cidade: 'Jucás',
        estado_id: 6
      },
      {
        id: 720,
        cidade: 'Lavras da Mangabeira',
        estado_id: 6
      },
      {
        id: 721,
        cidade: 'Limoeiro do Norte',
        estado_id: 6
      },
      {
        id: 722,
        cidade: 'Madalena',
        estado_id: 6
      },
      {
        id: 723,
        cidade: 'Maracanaú',
        estado_id: 6
      },
      {
        id: 724,
        cidade: 'Maranguape',
        estado_id: 6
      },
      {
        id: 725,
        cidade: 'Marco',
        estado_id: 6
      },
      {
        id: 726,
        cidade: 'Martinópole',
        estado_id: 6
      },
      {
        id: 727,
        cidade: 'Massapê',
        estado_id: 6
      },
      {
        id: 728,
        cidade: 'Mauriti',
        estado_id: 6
      },
      {
        id: 729,
        cidade: 'Meruoca',
        estado_id: 6
      },
      {
        id: 730,
        cidade: 'Milagres',
        estado_id: 6
      },
      {
        id: 731,
        cidade: 'Milhã',
        estado_id: 6
      },
      {
        id: 732,
        cidade: 'Miraíma',
        estado_id: 6
      },
      {
        id: 733,
        cidade: 'Missão Velha',
        estado_id: 6
      },
      {
        id: 734,
        cidade: 'Mombaça',
        estado_id: 6
      },
      {
        id: 735,
        cidade: 'Monsenhor Tabosa',
        estado_id: 6
      },
      {
        id: 736,
        cidade: 'Morada Nova',
        estado_id: 6
      },
      {
        id: 737,
        cidade: 'Moraújo',
        estado_id: 6
      },
      {
        id: 738,
        cidade: 'Morrinhos',
        estado_id: 6
      },
      {
        id: 739,
        cidade: 'Mucambo',
        estado_id: 6
      },
      {
        id: 740,
        cidade: 'Mulungu',
        estado_id: 6
      },
      {
        id: 741,
        cidade: 'Nova Olinda',
        estado_id: 6
      },
      {
        id: 742,
        cidade: 'Nova Russas',
        estado_id: 6
      },
      {
        id: 743,
        cidade: 'Novo Oriente',
        estado_id: 6
      },
      {
        id: 744,
        cidade: 'Ocara',
        estado_id: 6
      },
      {
        id: 745,
        cidade: 'Orós',
        estado_id: 6
      },
      {
        id: 746,
        cidade: 'Pacajus',
        estado_id: 6
      },
      {
        id: 747,
        cidade: 'Pacatuba',
        estado_id: 6
      },
      {
        id: 748,
        cidade: 'Pacoti',
        estado_id: 6
      },
      {
        id: 749,
        cidade: 'Pacujá',
        estado_id: 6
      },
      {
        id: 750,
        cidade: 'Palhano',
        estado_id: 6
      },
      {
        id: 751,
        cidade: 'Palmácia',
        estado_id: 6
      },
      {
        id: 752,
        cidade: 'Paracuru',
        estado_id: 6
      },
      {
        id: 753,
        cidade: 'Paraipaba',
        estado_id: 6
      },
      {
        id: 754,
        cidade: 'Parambu',
        estado_id: 6
      },
      {
        id: 755,
        cidade: 'Paramoti',
        estado_id: 6
      },
      {
        id: 756,
        cidade: 'Pedra Branca',
        estado_id: 6
      },
      {
        id: 757,
        cidade: 'Penaforte',
        estado_id: 6
      },
      {
        id: 758,
        cidade: 'Pentecoste',
        estado_id: 6
      },
      {
        id: 759,
        cidade: 'Pereiro',
        estado_id: 6
      },
      {
        id: 760,
        cidade: 'Pindoretama',
        estado_id: 6
      },
      {
        id: 761,
        cidade: 'Piquet Carneiro',
        estado_id: 6
      },
      {
        id: 762,
        cidade: 'Pires Ferreira',
        estado_id: 6
      },
      {
        id: 763,
        cidade: 'Poranga',
        estado_id: 6
      },
      {
        id: 764,
        cidade: 'Porteiras',
        estado_id: 6
      },
      {
        id: 765,
        cidade: 'Potengi',
        estado_id: 6
      },
      {
        id: 766,
        cidade: 'Potiretama',
        estado_id: 6
      },
      {
        id: 767,
        cidade: 'Quiterianópolis',
        estado_id: 6
      },
      {
        id: 768,
        cidade: 'Quixadá',
        estado_id: 6
      },
      {
        id: 769,
        cidade: 'Quixelô',
        estado_id: 6
      },
      {
        id: 770,
        cidade: 'Quixeramobim',
        estado_id: 6
      },
      {
        id: 771,
        cidade: 'Quixeré',
        estado_id: 6
      },
      {
        id: 772,
        cidade: 'Redenção',
        estado_id: 6
      },
      {
        id: 773,
        cidade: 'Reriutaba',
        estado_id: 6
      },
      {
        id: 774,
        cidade: 'Russas',
        estado_id: 6
      },
      {
        id: 775,
        cidade: 'Saboeiro',
        estado_id: 6
      },
      {
        id: 776,
        cidade: 'Salitre',
        estado_id: 6
      },
      {
        id: 777,
        cidade: 'Santana do Acaraú',
        estado_id: 6
      },
      {
        id: 778,
        cidade: 'Santana do Cariri',
        estado_id: 6
      },
      {
        id: 779,
        cidade: 'Santa Quitéria',
        estado_id: 6
      },
      {
        id: 780,
        cidade: 'São Benedito',
        estado_id: 6
      },
      {
        id: 781,
        cidade: 'São Gonçalo do Amarante',
        estado_id: 6
      },
      {
        id: 782,
        cidade: 'São João do Jaguaribe',
        estado_id: 6
      },
      {
        id: 783,
        cidade: 'São Luís do Curu',
        estado_id: 6
      },
      {
        id: 784,
        cidade: 'Senador Pompeu',
        estado_id: 6
      },
      {
        id: 785,
        cidade: 'Senador sá',
        estado_id: 6
      },
      {
        id: 786,
        cidade: 'Sobral',
        estado_id: 6
      },
      {
        id: 787,
        cidade: 'Solonópole',
        estado_id: 6
      },
      {
        id: 788,
        cidade: 'Tabuleiro do Norte',
        estado_id: 6
      },
      {
        id: 789,
        cidade: 'Tamboril',
        estado_id: 6
      },
      {
        id: 790,
        cidade: 'Tarrafas',
        estado_id: 6
      },
      {
        id: 791,
        cidade: 'Tauá',
        estado_id: 6
      },
      {
        id: 792,
        cidade: 'Tejuçuoca',
        estado_id: 6
      },
      {
        id: 793,
        cidade: 'Tianguá',
        estado_id: 6
      },
      {
        id: 794,
        cidade: 'Trairi',
        estado_id: 6
      },
      {
        id: 795,
        cidade: 'Tururu',
        estado_id: 6
      },
      {
        id: 796,
        cidade: 'Ubajara',
        estado_id: 6
      },
      {
        id: 797,
        cidade: 'Umari',
        estado_id: 6
      },
      {
        id: 798,
        cidade: 'Umirim',
        estado_id: 6
      },
      {
        id: 799,
        cidade: 'Uruburetama',
        estado_id: 6
      },
      {
        id: 800,
        cidade: 'Uruoca',
        estado_id: 6
      },
      {
        id: 801,
        cidade: 'Varjota',
        estado_id: 6
      },
      {
        id: 802,
        cidade: 'Várzea Alegre',
        estado_id: 6
      },
      {
        id: 803,
        cidade: 'Viçosa do Ceará',
        estado_id: 6
      },
      {
        id: 804,
        cidade: 'Brasília',
        estado_id: 7
      },
      {
        id: 805,
        cidade: 'Afonso Cláudio',
        estado_id: 8
      },
      {
        id: 806,
        cidade: 'Águia Branca',
        estado_id: 8
      },
      {
        id: 807,
        cidade: 'Água Doce do Norte',
        estado_id: 8
      },
      {
        id: 808,
        cidade: 'Alegre',
        estado_id: 8
      },
      {
        id: 809,
        cidade: 'Alfredo Chaves',
        estado_id: 8
      },
      {
        id: 810,
        cidade: 'Alto Rio Novo',
        estado_id: 8
      },
      {
        id: 811,
        cidade: 'Anchieta',
        estado_id: 8
      },
      {
        id: 812,
        cidade: 'Apiacá',
        estado_id: 8
      },
      {
        id: 813,
        cidade: 'Aracruz',
        estado_id: 8
      },
      {
        id: 814,
        cidade: 'Atilio Vivacqua',
        estado_id: 8
      },
      {
        id: 815,
        cidade: 'Baixo Guandu',
        estado_id: 8
      },
      {
        id: 816,
        cidade: 'Barra de São Francisco',
        estado_id: 8
      },
      {
        id: 817,
        cidade: 'Boa Esperança',
        estado_id: 8
      },
      {
        id: 818,
        cidade: 'Bom Jesus do Norte',
        estado_id: 8
      },
      {
        id: 819,
        cidade: 'Brejetuba',
        estado_id: 8
      },
      {
        id: 820,
        cidade: 'Cachoeiro de Itapemirim',
        estado_id: 8
      },
      {
        id: 821,
        cidade: 'Cariacica',
        estado_id: 8
      },
      {
        id: 822,
        cidade: 'Castelo',
        estado_id: 8
      },
      {
        id: 823,
        cidade: 'Colatina',
        estado_id: 8
      },
      {
        id: 824,
        cidade: 'Conceição da Barra',
        estado_id: 8
      },
      {
        id: 825,
        cidade: 'Conceição do Castelo',
        estado_id: 8
      },
      {
        id: 826,
        cidade: 'Divino de São Lourenço',
        estado_id: 8
      },
      {
        id: 827,
        cidade: 'Domingos Martins',
        estado_id: 8
      },
      {
        id: 828,
        cidade: 'Dores do Rio Preto',
        estado_id: 8
      },
      {
        id: 829,
        cidade: 'Ecoporanga',
        estado_id: 8
      },
      {
        id: 830,
        cidade: 'Fundão',
        estado_id: 8
      },
      {
        id: 831,
        cidade: 'Governador Lindenberg',
        estado_id: 8
      },
      {
        id: 832,
        cidade: 'Guaçuí',
        estado_id: 8
      },
      {
        id: 833,
        cidade: 'Guarapari',
        estado_id: 8
      },
      {
        id: 834,
        cidade: 'Ibatiba',
        estado_id: 8
      },
      {
        id: 835,
        cidade: 'Ibiraçu',
        estado_id: 8
      },
      {
        id: 836,
        cidade: 'Ibitirama',
        estado_id: 8
      },
      {
        id: 837,
        cidade: 'Iconha',
        estado_id: 8
      },
      {
        id: 838,
        cidade: 'Irupi',
        estado_id: 8
      },
      {
        id: 839,
        cidade: 'Itaguaçu',
        estado_id: 8
      },
      {
        id: 840,
        cidade: 'Itapemirim',
        estado_id: 8
      },
      {
        id: 841,
        cidade: 'Itarana',
        estado_id: 8
      },
      {
        id: 842,
        cidade: 'Iúna',
        estado_id: 8
      },
      {
        id: 843,
        cidade: 'Jaguaré',
        estado_id: 8
      },
      {
        id: 844,
        cidade: 'Jerônimo Monteiro',
        estado_id: 8
      },
      {
        id: 845,
        cidade: 'João Neiva',
        estado_id: 8
      },
      {
        id: 846,
        cidade: 'Laranja da Terra',
        estado_id: 8
      },
      {
        id: 847,
        cidade: 'Linhares',
        estado_id: 8
      },
      {
        id: 848,
        cidade: 'Mantenópolis',
        estado_id: 8
      },
      {
        id: 849,
        cidade: 'Marataízes',
        estado_id: 8
      },
      {
        id: 850,
        cidade: 'Marechal Floriano',
        estado_id: 8
      },
      {
        id: 851,
        cidade: 'Marilândia',
        estado_id: 8
      },
      {
        id: 852,
        cidade: 'Mimoso do Sul',
        estado_id: 8
      },
      {
        id: 853,
        cidade: 'Montanha',
        estado_id: 8
      },
      {
        id: 854,
        cidade: 'Mucurici',
        estado_id: 8
      },
      {
        id: 855,
        cidade: 'Muniz Freire',
        estado_id: 8
      },
      {
        id: 856,
        cidade: 'Muqui',
        estado_id: 8
      },
      {
        id: 857,
        cidade: 'Nova Venécia',
        estado_id: 8
      },
      {
        id: 858,
        cidade: 'Pancas',
        estado_id: 8
      },
      {
        id: 859,
        cidade: 'Pedro Canário',
        estado_id: 8
      },
      {
        id: 860,
        cidade: 'Pinheiros',
        estado_id: 8
      },
      {
        id: 861,
        cidade: 'Piúma',
        estado_id: 8
      },
      {
        id: 862,
        cidade: 'Ponto Belo',
        estado_id: 8
      },
      {
        id: 863,
        cidade: 'Presidente Kennedy',
        estado_id: 8
      },
      {
        id: 864,
        cidade: 'Rio Bananal',
        estado_id: 8
      },
      {
        id: 865,
        cidade: 'Rio Novo do Sul',
        estado_id: 8
      },
      {
        id: 866,
        cidade: 'Santa Leopoldina',
        estado_id: 8
      },
      {
        id: 867,
        cidade: 'Santa Maria de Jetibá',
        estado_id: 8
      },
      {
        id: 868,
        cidade: 'Santa Teresa',
        estado_id: 8
      },
      {
        id: 869,
        cidade: 'São Domingos do Norte',
        estado_id: 8
      },
      {
        id: 870,
        cidade: 'São Gabriel da Palha',
        estado_id: 8
      },
      {
        id: 871,
        cidade: 'São José do Calçado',
        estado_id: 8
      },
      {
        id: 872,
        cidade: 'São Mateus',
        estado_id: 8
      },
      {
        id: 873,
        cidade: 'São Roque do Canaã',
        estado_id: 8
      },
      {
        id: 874,
        cidade: 'Serra',
        estado_id: 8
      },
      {
        id: 875,
        cidade: 'Sooretama',
        estado_id: 8
      },
      {
        id: 876,
        cidade: 'Vargem Alta',
        estado_id: 8
      },
      {
        id: 877,
        cidade: 'Venda Nova do Imigrante',
        estado_id: 8
      },
      {
        id: 878,
        cidade: 'Viana',
        estado_id: 8
      },
      {
        id: 879,
        cidade: 'Vila Pavão',
        estado_id: 8
      },
      {
        id: 880,
        cidade: 'Vila Valério',
        estado_id: 8
      },
      {
        id: 881,
        cidade: 'Vila Velha',
        estado_id: 8
      },
      {
        id: 882,
        cidade: 'Vitória',
        estado_id: 8
      },
      {
        id: 883,
        cidade: 'Abadia de Goiás',
        estado_id: 9
      },
      {
        id: 884,
        cidade: 'Abadiânia',
        estado_id: 9
      },
      {
        id: 885,
        cidade: 'Acreúna',
        estado_id: 9
      },
      {
        id: 886,
        cidade: 'Adelândia',
        estado_id: 9
      },
      {
        id: 887,
        cidade: 'Água Fria de Goiás',
        estado_id: 9
      },
      {
        id: 888,
        cidade: 'Água Limpa',
        estado_id: 9
      },
      {
        id: 889,
        cidade: 'Águas Lindas de Goiás',
        estado_id: 9
      },
      {
        id: 890,
        cidade: 'Alexânia',
        estado_id: 9
      },
      {
        id: 891,
        cidade: 'Aloândia',
        estado_id: 9
      },
      {
        id: 892,
        cidade: 'Alto Horizonte',
        estado_id: 9
      },
      {
        id: 893,
        cidade: 'Alto Paraíso de Goiás',
        estado_id: 9
      },
      {
        id: 894,
        cidade: 'Alvorada do Norte',
        estado_id: 9
      },
      {
        id: 895,
        cidade: 'Amaralina',
        estado_id: 9
      },
      {
        id: 896,
        cidade: 'Americano do Brasil',
        estado_id: 9
      },
      {
        id: 897,
        cidade: 'Amorinópolis',
        estado_id: 9
      },
      {
        id: 898,
        cidade: 'Anápolis',
        estado_id: 9
      },
      {
        id: 899,
        cidade: 'Anhanguera',
        estado_id: 9
      },
      {
        id: 900,
        cidade: 'Anicuns',
        estado_id: 9
      },
      {
        id: 901,
        cidade: 'Aparecida de Goiânia',
        estado_id: 9
      },
      {
        id: 902,
        cidade: 'Aparecida do Rio Doce',
        estado_id: 9
      },
      {
        id: 903,
        cidade: 'Aporé',
        estado_id: 9
      },
      {
        id: 904,
        cidade: 'Araçu',
        estado_id: 9
      },
      {
        id: 905,
        cidade: 'Aragarças',
        estado_id: 9
      },
      {
        id: 906,
        cidade: 'Aragoiânia',
        estado_id: 9
      },
      {
        id: 907,
        cidade: 'Araguapaz',
        estado_id: 9
      },
      {
        id: 908,
        cidade: 'Arenópolis',
        estado_id: 9
      },
      {
        id: 909,
        cidade: 'Aruanã',
        estado_id: 9
      },
      {
        id: 910,
        cidade: 'Aurilândia',
        estado_id: 9
      },
      {
        id: 911,
        cidade: 'Avelinópolis',
        estado_id: 9
      },
      {
        id: 912,
        cidade: 'Baliza',
        estado_id: 9
      },
      {
        id: 913,
        cidade: 'Barro Alto',
        estado_id: 9
      },
      {
        id: 914,
        cidade: 'Bela Vista de Goiás',
        estado_id: 9
      },
      {
        id: 915,
        cidade: 'Bom Jardim de Goiás',
        estado_id: 9
      },
      {
        id: 916,
        cidade: 'Bom Jesus de Goiás',
        estado_id: 9
      },
      {
        id: 917,
        cidade: 'Bonfinópolis',
        estado_id: 9
      },
      {
        id: 918,
        cidade: 'Bonópolis',
        estado_id: 9
      },
      {
        id: 919,
        cidade: 'Brazabrantes',
        estado_id: 9
      },
      {
        id: 920,
        cidade: 'Britânia',
        estado_id: 9
      },
      {
        id: 921,
        cidade: 'Buriti Alegre',
        estado_id: 9
      },
      {
        id: 922,
        cidade: 'Buriti de Goiás',
        estado_id: 9
      },
      {
        id: 923,
        cidade: 'Buritinópolis',
        estado_id: 9
      },
      {
        id: 924,
        cidade: 'Cabeceiras',
        estado_id: 9
      },
      {
        id: 925,
        cidade: 'Cachoeira Alta',
        estado_id: 9
      },
      {
        id: 926,
        cidade: 'Cachoeira de Goiás',
        estado_id: 9
      },
      {
        id: 927,
        cidade: 'Cachoeira Dourada',
        estado_id: 9
      },
      {
        id: 928,
        cidade: 'Caçu',
        estado_id: 9
      },
      {
        id: 929,
        cidade: 'Caiapônia',
        estado_id: 9
      },
      {
        id: 930,
        cidade: 'Caldas Novas',
        estado_id: 9
      },
      {
        id: 931,
        cidade: 'Caldazinha',
        estado_id: 9
      },
      {
        id: 932,
        cidade: 'Campestre de Goiás',
        estado_id: 9
      },
      {
        id: 933,
        cidade: 'Campinaçu',
        estado_id: 9
      },
      {
        id: 934,
        cidade: 'Campinorte',
        estado_id: 9
      },
      {
        id: 935,
        cidade: 'Campo Alegre de Goiás',
        estado_id: 9
      },
      {
        id: 936,
        cidade: 'Campo Limpo de Goiás',
        estado_id: 9
      },
      {
        id: 937,
        cidade: 'Campos Belos',
        estado_id: 9
      },
      {
        id: 938,
        cidade: 'Campos Verdes',
        estado_id: 9
      },
      {
        id: 939,
        cidade: 'Carmo do Rio Verde',
        estado_id: 9
      },
      {
        id: 940,
        cidade: 'Castelândia',
        estado_id: 9
      },
      {
        id: 941,
        cidade: 'Catalão',
        estado_id: 9
      },
      {
        id: 942,
        cidade: 'Caturaí',
        estado_id: 9
      },
      {
        id: 943,
        cidade: 'Cavalcante',
        estado_id: 9
      },
      {
        id: 944,
        cidade: 'Ceres',
        estado_id: 9
      },
      {
        id: 945,
        cidade: 'Cezarina',
        estado_id: 9
      },
      {
        id: 946,
        cidade: 'Chapadão do Céu',
        estado_id: 9
      },
      {
        id: 947,
        cidade: 'Cidade Ocidental',
        estado_id: 9
      },
      {
        id: 948,
        cidade: 'Cocalzinho de Goiás',
        estado_id: 9
      },
      {
        id: 949,
        cidade: 'Colinas do Sul',
        estado_id: 9
      },
      {
        id: 950,
        cidade: 'Córrego do Ouro',
        estado_id: 9
      },
      {
        id: 951,
        cidade: 'Corumbá de Goiás',
        estado_id: 9
      },
      {
        id: 952,
        cidade: 'Corumbaíba',
        estado_id: 9
      },
      {
        id: 953,
        cidade: 'Cristalina',
        estado_id: 9
      },
      {
        id: 954,
        cidade: 'Cristianópolis',
        estado_id: 9
      },
      {
        id: 955,
        cidade: 'Crixás',
        estado_id: 9
      },
      {
        id: 956,
        cidade: 'Cromínia',
        estado_id: 9
      },
      {
        id: 957,
        cidade: 'Cumari',
        estado_id: 9
      },
      {
        id: 958,
        cidade: 'Damianópolis',
        estado_id: 9
      },
      {
        id: 959,
        cidade: 'Damolândia',
        estado_id: 9
      },
      {
        id: 960,
        cidade: 'Davinópolis',
        estado_id: 9
      },
      {
        id: 961,
        cidade: 'Diorama',
        estado_id: 9
      },
      {
        id: 962,
        cidade: 'Doverlândia',
        estado_id: 9
      },
      {
        id: 963,
        cidade: 'Edealina',
        estado_id: 9
      },
      {
        id: 964,
        cidade: 'Edéia',
        estado_id: 9
      },
      {
        id: 965,
        cidade: 'Estrela do Norte',
        estado_id: 9
      },
      {
        id: 966,
        cidade: 'Faina',
        estado_id: 9
      },
      {
        id: 967,
        cidade: 'Fazenda Nova',
        estado_id: 9
      },
      {
        id: 968,
        cidade: 'Firminópolis',
        estado_id: 9
      },
      {
        id: 969,
        cidade: 'Flores de Goiás',
        estado_id: 9
      },
      {
        id: 970,
        cidade: 'Formosa',
        estado_id: 9
      },
      {
        id: 971,
        cidade: 'Formoso',
        estado_id: 9
      },
      {
        id: 972,
        cidade: 'Gameleira de Goiás',
        estado_id: 9
      },
      {
        id: 973,
        cidade: 'Divinópolis de Goiás',
        estado_id: 9
      },
      {
        id: 974,
        cidade: 'Goianápolis',
        estado_id: 9
      },
      {
        id: 975,
        cidade: 'Goiandira',
        estado_id: 9
      },
      {
        id: 976,
        cidade: 'Goianésia',
        estado_id: 9
      },
      {
        id: 977,
        cidade: 'Goiânia',
        estado_id: 9
      },
      {
        id: 978,
        cidade: 'Goianira',
        estado_id: 9
      },
      {
        id: 979,
        cidade: 'Goiás',
        estado_id: 9
      },
      {
        id: 980,
        cidade: 'Goiatuba',
        estado_id: 9
      },
      {
        id: 981,
        cidade: 'Gouvelândia',
        estado_id: 9
      },
      {
        id: 982,
        cidade: 'Guapó',
        estado_id: 9
      },
      {
        id: 983,
        cidade: 'Guaraíta',
        estado_id: 9
      },
      {
        id: 984,
        cidade: 'Guarani de Goiás',
        estado_id: 9
      },
      {
        id: 985,
        cidade: 'Guarinos',
        estado_id: 9
      },
      {
        id: 986,
        cidade: 'Heitoraí',
        estado_id: 9
      },
      {
        id: 987,
        cidade: 'Hidrolândia',
        estado_id: 9
      },
      {
        id: 988,
        cidade: 'Hidrolina',
        estado_id: 9
      },
      {
        id: 989,
        cidade: 'Iaciara',
        estado_id: 9
      },
      {
        id: 990,
        cidade: 'Inaciolândia',
        estado_id: 9
      },
      {
        id: 991,
        cidade: 'Indiara',
        estado_id: 9
      },
      {
        id: 992,
        cidade: 'Inhumas',
        estado_id: 9
      },
      {
        id: 993,
        cidade: 'Ipameri',
        estado_id: 9
      },
      {
        id: 994,
        cidade: 'Ipiranga de Goiás',
        estado_id: 9
      },
      {
        id: 995,
        cidade: 'Iporá',
        estado_id: 9
      },
      {
        id: 996,
        cidade: 'Israelândia',
        estado_id: 9
      },
      {
        id: 997,
        cidade: 'Itaberaí',
        estado_id: 9
      },
      {
        id: 998,
        cidade: 'Itaguari',
        estado_id: 9
      },
      {
        id: 999,
        cidade: 'Itaguaru',
        estado_id: 9
      },
      {
        id: 1000,
        cidade: 'Itajá',
        estado_id: 9
      },
      {
        id: 1001,
        cidade: 'Itapaci',
        estado_id: 9
      },
      {
        id: 1002,
        cidade: 'Itapirapuã',
        estado_id: 9
      },
      {
        id: 1003,
        cidade: 'Itapuranga',
        estado_id: 9
      },
      {
        id: 1004,
        cidade: 'Itarumã',
        estado_id: 9
      },
      {
        id: 1005,
        cidade: 'Itauçu',
        estado_id: 9
      },
      {
        id: 1006,
        cidade: 'Itumbiara',
        estado_id: 9
      },
      {
        id: 1007,
        cidade: 'Ivolândia',
        estado_id: 9
      },
      {
        id: 1008,
        cidade: 'Jandaia',
        estado_id: 9
      },
      {
        id: 1009,
        cidade: 'Jaraguá',
        estado_id: 9
      },
      {
        id: 1010,
        cidade: 'Jataí',
        estado_id: 9
      },
      {
        id: 1011,
        cidade: 'Jaupaci',
        estado_id: 9
      },
      {
        id: 1012,
        cidade: 'Jesúpolis',
        estado_id: 9
      },
      {
        id: 1013,
        cidade: 'Joviânia',
        estado_id: 9
      },
      {
        id: 1014,
        cidade: 'Jussara',
        estado_id: 9
      },
      {
        id: 1015,
        cidade: 'Lagoa Santa',
        estado_id: 9
      },
      {
        id: 1016,
        cidade: 'Leopoldo de Bulhões',
        estado_id: 9
      },
      {
        id: 1017,
        cidade: 'Luziânia',
        estado_id: 9
      },
      {
        id: 1018,
        cidade: 'Mairipotaba',
        estado_id: 9
      },
      {
        id: 1019,
        cidade: 'Mambaí',
        estado_id: 9
      },
      {
        id: 1020,
        cidade: 'Mara Rosa',
        estado_id: 9
      },
      {
        id: 1021,
        cidade: 'Marzagão',
        estado_id: 9
      },
      {
        id: 1022,
        cidade: 'Matrinchã',
        estado_id: 9
      },
      {
        id: 1023,
        cidade: 'Maurilândia',
        estado_id: 9
      },
      {
        id: 1024,
        cidade: 'Mimoso de Goiás',
        estado_id: 9
      },
      {
        id: 1025,
        cidade: 'Minaçu',
        estado_id: 9
      },
      {
        id: 1026,
        cidade: 'Mineiros',
        estado_id: 9
      },
      {
        id: 1027,
        cidade: 'Moiporá',
        estado_id: 9
      },
      {
        id: 1028,
        cidade: 'Monte Alegre de Goiás',
        estado_id: 9
      },
      {
        id: 1029,
        cidade: 'Montes Claros de Goiás',
        estado_id: 9
      },
      {
        id: 1030,
        cidade: 'Montividiu',
        estado_id: 9
      },
      {
        id: 1031,
        cidade: 'Montividiu do Norte',
        estado_id: 9
      },
      {
        id: 1032,
        cidade: 'Morrinhos',
        estado_id: 9
      },
      {
        id: 1033,
        cidade: 'Morro Agudo de Goiás',
        estado_id: 9
      },
      {
        id: 1034,
        cidade: 'Mossâmedes',
        estado_id: 9
      },
      {
        id: 1035,
        cidade: 'Mozarlândia',
        estado_id: 9
      },
      {
        id: 1036,
        cidade: 'Mundo Novo',
        estado_id: 9
      },
      {
        id: 1037,
        cidade: 'Mutunópolis',
        estado_id: 9
      },
      {
        id: 1038,
        cidade: 'Nazário',
        estado_id: 9
      },
      {
        id: 1039,
        cidade: 'Nerópolis',
        estado_id: 9
      },
      {
        id: 1040,
        cidade: 'Niquelândia',
        estado_id: 9
      },
      {
        id: 1041,
        cidade: 'Nova América',
        estado_id: 9
      },
      {
        id: 1042,
        cidade: 'Nova Aurora',
        estado_id: 9
      },
      {
        id: 1043,
        cidade: 'Nova Crixás',
        estado_id: 9
      },
      {
        id: 1044,
        cidade: 'Nova Glória',
        estado_id: 9
      },
      {
        id: 1045,
        cidade: 'Nova Iguaçu de Goiás',
        estado_id: 9
      },
      {
        id: 1046,
        cidade: 'Nova Roma',
        estado_id: 9
      },
      {
        id: 1047,
        cidade: 'Nova Veneza',
        estado_id: 9
      },
      {
        id: 1048,
        cidade: 'Novo Brasil',
        estado_id: 9
      },
      {
        id: 1049,
        cidade: 'Novo Gama',
        estado_id: 9
      },
      {
        id: 1050,
        cidade: 'Novo Planalto',
        estado_id: 9
      },
      {
        id: 1051,
        cidade: 'Orizona',
        estado_id: 9
      },
      {
        id: 1052,
        cidade: 'Ouro Verde de Goiás',
        estado_id: 9
      },
      {
        id: 1053,
        cidade: 'Ouvidor',
        estado_id: 9
      },
      {
        id: 1054,
        cidade: 'Padre Bernardo',
        estado_id: 9
      },
      {
        id: 1055,
        cidade: 'Palestina de Goiás',
        estado_id: 9
      },
      {
        id: 1056,
        cidade: 'Palmeiras de Goiás',
        estado_id: 9
      },
      {
        id: 1057,
        cidade: 'Palmelo',
        estado_id: 9
      },
      {
        id: 1058,
        cidade: 'Palminópolis',
        estado_id: 9
      },
      {
        id: 1059,
        cidade: 'Panamá',
        estado_id: 9
      },
      {
        id: 1060,
        cidade: 'Paranaiguara',
        estado_id: 9
      },
      {
        id: 1061,
        cidade: 'Paraúna',
        estado_id: 9
      },
      {
        id: 1062,
        cidade: 'Perolândia',
        estado_id: 9
      },
      {
        id: 1063,
        cidade: 'Petrolina de Goiás',
        estado_id: 9
      },
      {
        id: 1064,
        cidade: 'Pilar de Goiás',
        estado_id: 9
      },
      {
        id: 1065,
        cidade: 'Piracanjuba',
        estado_id: 9
      },
      {
        id: 1066,
        cidade: 'Piranhas',
        estado_id: 9
      },
      {
        id: 1067,
        cidade: 'Pirenópolis',
        estado_id: 9
      },
      {
        id: 1068,
        cidade: 'Pires do Rio',
        estado_id: 9
      },
      {
        id: 1069,
        cidade: 'Planaltina',
        estado_id: 9
      },
      {
        id: 1070,
        cidade: 'Pontalina',
        estado_id: 9
      },
      {
        id: 1071,
        cidade: 'Porangatu',
        estado_id: 9
      },
      {
        id: 1072,
        cidade: 'Porteirão',
        estado_id: 9
      },
      {
        id: 1073,
        cidade: 'Portelândia',
        estado_id: 9
      },
      {
        id: 1074,
        cidade: 'Posse',
        estado_id: 9
      },
      {
        id: 1075,
        cidade: 'Professor Jamil',
        estado_id: 9
      },
      {
        id: 1076,
        cidade: 'Quirinópolis',
        estado_id: 9
      },
      {
        id: 1077,
        cidade: 'Rialma',
        estado_id: 9
      },
      {
        id: 1078,
        cidade: 'Rianápolis',
        estado_id: 9
      },
      {
        id: 1079,
        cidade: 'Rio Quente',
        estado_id: 9
      },
      {
        id: 1080,
        cidade: 'Rio Verde',
        estado_id: 9
      },
      {
        id: 1081,
        cidade: 'Rubiataba',
        estado_id: 9
      },
      {
        id: 1082,
        cidade: 'Sanclerlândia',
        estado_id: 9
      },
      {
        id: 1083,
        cidade: 'Santa Bárbara de Goiás',
        estado_id: 9
      },
      {
        id: 1084,
        cidade: 'Santa Cruz de Goiás',
        estado_id: 9
      },
      {
        id: 1085,
        cidade: 'Santa fé de Goiás',
        estado_id: 9
      },
      {
        id: 1086,
        cidade: 'Santa Helena de Goiás',
        estado_id: 9
      },
      {
        id: 1087,
        cidade: 'Santa Isabel',
        estado_id: 9
      },
      {
        id: 1088,
        cidade: 'Santa Rita do Araguaia',
        estado_id: 9
      },
      {
        id: 1089,
        cidade: 'Santa Rita do Novo Destino',
        estado_id: 9
      },
      {
        id: 1090,
        cidade: 'Santa Rosa de Goiás',
        estado_id: 9
      },
      {
        id: 1091,
        cidade: 'Santa Tereza de Goiás',
        estado_id: 9
      },
      {
        id: 1092,
        cidade: 'Santa Terezinha de Goiás',
        estado_id: 9
      },
      {
        id: 1093,
        cidade: 'Santo Antônio da Barra',
        estado_id: 9
      },
      {
        id: 1094,
        cidade: 'Santo Antônio de Goiás',
        estado_id: 9
      },
      {
        id: 1095,
        cidade: 'Santo Antônio do Descoberto',
        estado_id: 9
      },
      {
        id: 1096,
        cidade: 'São Domingos',
        estado_id: 9
      },
      {
        id: 1097,
        cidade: 'São Francisco de Goiás',
        estado_id: 9
      },
      {
        id: 1098,
        cidade: 'São João D´aliança',
        estado_id: 9
      },
      {
        id: 1099,
        cidade: 'São João da Paraúna',
        estado_id: 9
      },
      {
        id: 1100,
        cidade: 'São Luís de Montes Belos',
        estado_id: 9
      },
      {
        id: 1101,
        cidade: 'São Luíz do Norte',
        estado_id: 9
      },
      {
        id: 1102,
        cidade: 'São Miguel do Araguaia',
        estado_id: 9
      },
      {
        id: 1103,
        cidade: 'São Miguel do Passa Quatro',
        estado_id: 9
      },
      {
        id: 1104,
        cidade: 'São Patrício',
        estado_id: 9
      },
      {
        id: 1105,
        cidade: 'São Simão',
        estado_id: 9
      },
      {
        id: 1106,
        cidade: 'Senador Canedo',
        estado_id: 9
      },
      {
        id: 1107,
        cidade: 'Serranópolis',
        estado_id: 9
      },
      {
        id: 1108,
        cidade: 'Silvânia',
        estado_id: 9
      },
      {
        id: 1109,
        cidade: 'Simolândia',
        estado_id: 9
      },
      {
        id: 1110,
        cidade: 'Sítio D´abadia',
        estado_id: 9
      },
      {
        id: 1111,
        cidade: 'Taquaral de Goiás',
        estado_id: 9
      },
      {
        id: 1112,
        cidade: 'Teresina de Goiás',
        estado_id: 9
      },
      {
        id: 1113,
        cidade: 'Terezópolis de Goiás',
        estado_id: 9
      },
      {
        id: 1114,
        cidade: 'Três Ranchos',
        estado_id: 9
      },
      {
        id: 1115,
        cidade: 'Trindade',
        estado_id: 9
      },
      {
        id: 1116,
        cidade: 'Trombas',
        estado_id: 9
      },
      {
        id: 1117,
        cidade: 'Turvânia',
        estado_id: 9
      },
      {
        id: 1118,
        cidade: 'Turvelândia',
        estado_id: 9
      },
      {
        id: 1119,
        cidade: 'Uirapuru',
        estado_id: 9
      },
      {
        id: 1120,
        cidade: 'Uruaçu',
        estado_id: 9
      },
      {
        id: 1121,
        cidade: 'Uruana',
        estado_id: 9
      },
      {
        id: 1122,
        cidade: 'Urutaí',
        estado_id: 9
      },
      {
        id: 1123,
        cidade: 'Valparaíso de Goiás',
        estado_id: 9
      },
      {
        id: 1124,
        cidade: 'Varjão',
        estado_id: 9
      },
      {
        id: 1125,
        cidade: 'Vianópolis',
        estado_id: 9
      },
      {
        id: 1126,
        cidade: 'Vicentinópolis',
        estado_id: 9
      },
      {
        id: 1127,
        cidade: 'Vila Boa',
        estado_id: 9
      },
      {
        id: 1128,
        cidade: 'Vila Propício',
        estado_id: 9
      },
      {
        id: 1129,
        cidade: 'Açailândia',
        estado_id: 10
      },
      {
        id: 1130,
        cidade: 'Afonso Cunha',
        estado_id: 10
      },
      {
        id: 1131,
        cidade: 'Água Doce do Maranhão',
        estado_id: 10
      },
      {
        id: 1132,
        cidade: 'Alcântara',
        estado_id: 10
      },
      {
        id: 1133,
        cidade: 'Aldeias Altas',
        estado_id: 10
      },
      {
        id: 1134,
        cidade: 'Altamira do Maranhão',
        estado_id: 10
      },
      {
        id: 1135,
        cidade: 'Alto Alegre do Maranhão',
        estado_id: 10
      },
      {
        id: 1136,
        cidade: 'Alto Alegre do Pindaré',
        estado_id: 10
      },
      {
        id: 1137,
        cidade: 'Alto Parnaíba',
        estado_id: 10
      },
      {
        id: 1138,
        cidade: 'Amapá do Maranhão',
        estado_id: 10
      },
      {
        id: 1139,
        cidade: 'Amarante do Maranhão',
        estado_id: 10
      },
      {
        id: 1140,
        cidade: 'Anajatuba',
        estado_id: 10
      },
      {
        id: 1141,
        cidade: 'Anapurus',
        estado_id: 10
      },
      {
        id: 1142,
        cidade: 'Apicum-açu',
        estado_id: 10
      },
      {
        id: 1143,
        cidade: 'Araguanã',
        estado_id: 10
      },
      {
        id: 1144,
        cidade: 'Araioses',
        estado_id: 10
      },
      {
        id: 1145,
        cidade: 'Arame',
        estado_id: 10
      },
      {
        id: 1146,
        cidade: 'Arari',
        estado_id: 10
      },
      {
        id: 1147,
        cidade: 'Axixá',
        estado_id: 10
      },
      {
        id: 1148,
        cidade: 'Bacabal',
        estado_id: 10
      },
      {
        id: 1149,
        cidade: 'Bacabeira',
        estado_id: 10
      },
      {
        id: 1150,
        cidade: 'Bacuri',
        estado_id: 10
      },
      {
        id: 1151,
        cidade: 'Bacurituba',
        estado_id: 10
      },
      {
        id: 1152,
        cidade: 'Balsas',
        estado_id: 10
      },
      {
        id: 1153,
        cidade: 'Barão de Grajaú',
        estado_id: 10
      },
      {
        id: 1154,
        cidade: 'Barra do Corda',
        estado_id: 10
      },
      {
        id: 1155,
        cidade: 'Barreirinhas',
        estado_id: 10
      },
      {
        id: 1156,
        cidade: 'Belágua',
        estado_id: 10
      },
      {
        id: 1157,
        cidade: 'Bela Vista do Maranhão',
        estado_id: 10
      },
      {
        id: 1158,
        cidade: 'Benedito Leite',
        estado_id: 10
      },
      {
        id: 1159,
        cidade: 'Bequimão',
        estado_id: 10
      },
      {
        id: 1160,
        cidade: 'Bernardo do Mearim',
        estado_id: 10
      },
      {
        id: 1161,
        cidade: 'Boa Vista do Gurupi',
        estado_id: 10
      },
      {
        id: 1162,
        cidade: 'Bom Jardim',
        estado_id: 10
      },
      {
        id: 1163,
        cidade: 'Bom Jesus Das Selvas',
        estado_id: 10
      },
      {
        id: 1164,
        cidade: 'Bom Lugar',
        estado_id: 10
      },
      {
        id: 1165,
        cidade: 'Brejo',
        estado_id: 10
      },
      {
        id: 1166,
        cidade: 'Brejo de Areia',
        estado_id: 10
      },
      {
        id: 1167,
        cidade: 'Buriti',
        estado_id: 10
      },
      {
        id: 1168,
        cidade: 'Buriti Bravo',
        estado_id: 10
      },
      {
        id: 1169,
        cidade: 'Buriticupu',
        estado_id: 10
      },
      {
        id: 1170,
        cidade: 'Buritirana',
        estado_id: 10
      },
      {
        id: 1171,
        cidade: 'Cachoeira Grande',
        estado_id: 10
      },
      {
        id: 1172,
        cidade: 'Cajapió',
        estado_id: 10
      },
      {
        id: 1173,
        cidade: 'Cajari',
        estado_id: 10
      },
      {
        id: 1174,
        cidade: 'Campestre do Maranhão',
        estado_id: 10
      },
      {
        id: 1175,
        cidade: 'Cândido Mendes',
        estado_id: 10
      },
      {
        id: 1176,
        cidade: 'Cantanhede',
        estado_id: 10
      },
      {
        id: 1177,
        cidade: 'Capinzal do Norte',
        estado_id: 10
      },
      {
        id: 1178,
        cidade: 'Carolina',
        estado_id: 10
      },
      {
        id: 1179,
        cidade: 'Carutapera',
        estado_id: 10
      },
      {
        id: 1180,
        cidade: 'Caxias',
        estado_id: 10
      },
      {
        id: 1181,
        cidade: 'Cedral',
        estado_id: 10
      },
      {
        id: 1182,
        cidade: 'Central do Maranhão',
        estado_id: 10
      },
      {
        id: 1183,
        cidade: 'Centro do Guilherme',
        estado_id: 10
      },
      {
        id: 1184,
        cidade: 'Centro Novo do Maranhão',
        estado_id: 10
      },
      {
        id: 1185,
        cidade: 'Chapadinha',
        estado_id: 10
      },
      {
        id: 1186,
        cidade: 'Cidelândia',
        estado_id: 10
      },
      {
        id: 1187,
        cidade: 'Codó',
        estado_id: 10
      },
      {
        id: 1188,
        cidade: 'Coelho Neto',
        estado_id: 10
      },
      {
        id: 1189,
        cidade: 'Colinas',
        estado_id: 10
      },
      {
        id: 1190,
        cidade: 'Conceição do Lago-açu',
        estado_id: 10
      },
      {
        id: 1191,
        cidade: 'Coroatá',
        estado_id: 10
      },
      {
        id: 1192,
        cidade: 'Cururupu',
        estado_id: 10
      },
      {
        id: 1193,
        cidade: 'Davinópolis',
        estado_id: 10
      },
      {
        id: 1194,
        cidade: 'Dom Pedro',
        estado_id: 10
      },
      {
        id: 1195,
        cidade: 'Duque Bacelar',
        estado_id: 10
      },
      {
        id: 1196,
        cidade: 'Esperantinópolis',
        estado_id: 10
      },
      {
        id: 1197,
        cidade: 'Estreito',
        estado_id: 10
      },
      {
        id: 1198,
        cidade: 'Feira Nova do Maranhão',
        estado_id: 10
      },
      {
        id: 1199,
        cidade: 'Fernando Falcão',
        estado_id: 10
      },
      {
        id: 1200,
        cidade: 'Formosa da Serra Negra',
        estado_id: 10
      },
      {
        id: 1201,
        cidade: 'Fortaleza Dos Nogueiras',
        estado_id: 10
      },
      {
        id: 1202,
        cidade: 'Fortuna',
        estado_id: 10
      },
      {
        id: 1203,
        cidade: 'Godofredo Viana',
        estado_id: 10
      },
      {
        id: 1204,
        cidade: 'Gonçalves Dias',
        estado_id: 10
      },
      {
        id: 1205,
        cidade: 'Governador Archer',
        estado_id: 10
      },
      {
        id: 1206,
        cidade: 'Governador Edison Lobão',
        estado_id: 10
      },
      {
        id: 1207,
        cidade: 'Governador Eugênio Barros',
        estado_id: 10
      },
      {
        id: 1208,
        cidade: 'Governador Luiz Rocha',
        estado_id: 10
      },
      {
        id: 1209,
        cidade: 'Governador Newton Bello',
        estado_id: 10
      },
      {
        id: 1210,
        cidade: 'Governador Nunes Freire',
        estado_id: 10
      },
      {
        id: 1211,
        cidade: 'Graça Aranha',
        estado_id: 10
      },
      {
        id: 1212,
        cidade: 'Grajaú',
        estado_id: 10
      },
      {
        id: 1213,
        cidade: 'Guimarães',
        estado_id: 10
      },
      {
        id: 1214,
        cidade: 'Humberto de Campos',
        estado_id: 10
      },
      {
        id: 1215,
        cidade: 'Icatu',
        estado_id: 10
      },
      {
        id: 1216,
        cidade: 'Igarapé do Meio',
        estado_id: 10
      },
      {
        id: 1217,
        cidade: 'Igarapé Grande',
        estado_id: 10
      },
      {
        id: 1218,
        cidade: 'Imperatriz',
        estado_id: 10
      },
      {
        id: 1219,
        cidade: 'Itaipava do Grajaú',
        estado_id: 10
      },
      {
        id: 1220,
        cidade: 'Itapecuru Mirim',
        estado_id: 10
      },
      {
        id: 1221,
        cidade: 'Itinga do Maranhão',
        estado_id: 10
      },
      {
        id: 1222,
        cidade: 'Jatobá',
        estado_id: 10
      },
      {
        id: 1223,
        cidade: 'Jenipapo Dos Vieiras',
        estado_id: 10
      },
      {
        id: 1224,
        cidade: 'João Lisboa',
        estado_id: 10
      },
      {
        id: 1225,
        cidade: 'Joselândia',
        estado_id: 10
      },
      {
        id: 1226,
        cidade: 'Junco do Maranhão',
        estado_id: 10
      },
      {
        id: 1227,
        cidade: 'Lago da Pedra',
        estado_id: 10
      },
      {
        id: 1228,
        cidade: 'Lago do Junco',
        estado_id: 10
      },
      {
        id: 1229,
        cidade: 'Lago Verde',
        estado_id: 10
      },
      {
        id: 1230,
        cidade: 'Lagoa do Mato',
        estado_id: 10
      },
      {
        id: 1231,
        cidade: 'Lago Dos Rodrigues',
        estado_id: 10
      },
      {
        id: 1232,
        cidade: 'Lagoa Grande do Maranhão',
        estado_id: 10
      },
      {
        id: 1233,
        cidade: 'Lajeado Novo',
        estado_id: 10
      },
      {
        id: 1234,
        cidade: 'Lima Campos',
        estado_id: 10
      },
      {
        id: 1235,
        cidade: 'Loreto',
        estado_id: 10
      },
      {
        id: 1236,
        cidade: 'Luís Domingues',
        estado_id: 10
      },
      {
        id: 1237,
        cidade: 'Magalhães de Almeida',
        estado_id: 10
      },
      {
        id: 1238,
        cidade: 'Maracaçumé',
        estado_id: 10
      },
      {
        id: 1239,
        cidade: 'Marajá do Sena',
        estado_id: 10
      },
      {
        id: 1240,
        cidade: 'Maranhãozinho',
        estado_id: 10
      },
      {
        id: 1241,
        cidade: 'Mata Roma',
        estado_id: 10
      },
      {
        id: 1242,
        cidade: 'Matinha',
        estado_id: 10
      },
      {
        id: 1243,
        cidade: 'Matões',
        estado_id: 10
      },
      {
        id: 1244,
        cidade: 'Matões do Norte',
        estado_id: 10
      },
      {
        id: 1245,
        cidade: 'Milagres do Maranhão',
        estado_id: 10
      },
      {
        id: 1246,
        cidade: 'Mirador',
        estado_id: 10
      },
      {
        id: 1247,
        cidade: 'Miranda do Norte',
        estado_id: 10
      },
      {
        id: 1248,
        cidade: 'Mirinzal',
        estado_id: 10
      },
      {
        id: 1249,
        cidade: 'Monção',
        estado_id: 10
      },
      {
        id: 1250,
        cidade: 'Montes Altos',
        estado_id: 10
      },
      {
        id: 1251,
        cidade: 'Morros',
        estado_id: 10
      },
      {
        id: 1252,
        cidade: 'Nina Rodrigues',
        estado_id: 10
      },
      {
        id: 1253,
        cidade: 'Nova Colinas',
        estado_id: 10
      },
      {
        id: 1254,
        cidade: 'Nova Iorque',
        estado_id: 10
      },
      {
        id: 1255,
        cidade: 'Nova Olinda do Maranhão',
        estado_id: 10
      },
      {
        id: 1256,
        cidade: 'Olho D´água Das Cunhãs',
        estado_id: 10
      },
      {
        id: 1257,
        cidade: 'Olinda Nova do Maranhão',
        estado_id: 10
      },
      {
        id: 1258,
        cidade: 'Paço do Lumiar',
        estado_id: 10
      },
      {
        id: 1259,
        cidade: 'Palmeirândia',
        estado_id: 10
      },
      {
        id: 1260,
        cidade: 'Paraibano',
        estado_id: 10
      },
      {
        id: 1261,
        cidade: 'Parnarama',
        estado_id: 10
      },
      {
        id: 1262,
        cidade: 'Passagem Franca',
        estado_id: 10
      },
      {
        id: 1263,
        cidade: 'Pastos Bons',
        estado_id: 10
      },
      {
        id: 1264,
        cidade: 'Paulino Neves',
        estado_id: 10
      },
      {
        id: 1265,
        cidade: 'Paulo Ramos',
        estado_id: 10
      },
      {
        id: 1266,
        cidade: 'Pedreiras',
        estado_id: 10
      },
      {
        id: 1267,
        cidade: 'Pedro do Rosário',
        estado_id: 10
      },
      {
        id: 1268,
        cidade: 'Penalva',
        estado_id: 10
      },
      {
        id: 1269,
        cidade: 'Peri Mirim',
        estado_id: 10
      },
      {
        id: 1270,
        cidade: 'Peritoró',
        estado_id: 10
      },
      {
        id: 1271,
        cidade: 'Pindaré-mirim',
        estado_id: 10
      },
      {
        id: 1272,
        cidade: 'Pinheiro',
        estado_id: 10
      },
      {
        id: 1273,
        cidade: 'Pio Xii',
        estado_id: 10
      },
      {
        id: 1274,
        cidade: 'Pirapemas',
        estado_id: 10
      },
      {
        id: 1275,
        cidade: 'Poção de Pedras',
        estado_id: 10
      },
      {
        id: 1276,
        cidade: 'Porto Franco',
        estado_id: 10
      },
      {
        id: 1277,
        cidade: 'Porto Rico do Maranhão',
        estado_id: 10
      },
      {
        id: 1278,
        cidade: 'Presidente Dutra',
        estado_id: 10
      },
      {
        id: 1279,
        cidade: 'Presidente Juscelino',
        estado_id: 10
      },
      {
        id: 1280,
        cidade: 'Presidente Médici',
        estado_id: 10
      },
      {
        id: 1281,
        cidade: 'Presidente Sarney',
        estado_id: 10
      },
      {
        id: 1282,
        cidade: 'Presidente Vargas',
        estado_id: 10
      },
      {
        id: 1283,
        cidade: 'Primeira Cruz',
        estado_id: 10
      },
      {
        id: 1284,
        cidade: 'Raposa',
        estado_id: 10
      },
      {
        id: 1285,
        cidade: 'Riachão',
        estado_id: 10
      },
      {
        id: 1286,
        cidade: 'Ribamar Fiquene',
        estado_id: 10
      },
      {
        id: 1287,
        cidade: 'Rosário',
        estado_id: 10
      },
      {
        id: 1288,
        cidade: 'Sambaíba',
        estado_id: 10
      },
      {
        id: 1289,
        cidade: 'Santa Filomena do Maranhão',
        estado_id: 10
      },
      {
        id: 1290,
        cidade: 'Santa Helena',
        estado_id: 10
      },
      {
        id: 1291,
        cidade: 'Santa Inês',
        estado_id: 10
      },
      {
        id: 1292,
        cidade: 'Santa Luzia',
        estado_id: 10
      },
      {
        id: 1293,
        cidade: 'Santa Luzia do Paruá',
        estado_id: 10
      },
      {
        id: 1294,
        cidade: 'Santa Quitéria do Maranhão',
        estado_id: 10
      },
      {
        id: 1295,
        cidade: 'Santa Rita',
        estado_id: 10
      },
      {
        id: 1296,
        cidade: 'Santana do Maranhão',
        estado_id: 10
      },
      {
        id: 1297,
        cidade: 'Santo Amaro do Maranhão',
        estado_id: 10
      },
      {
        id: 1298,
        cidade: 'Santo Antônio Dos Lopes',
        estado_id: 10
      },
      {
        id: 1299,
        cidade: 'São Benedito do Rio Preto',
        estado_id: 10
      },
      {
        id: 1300,
        cidade: 'São Bento',
        estado_id: 10
      },
      {
        id: 1301,
        cidade: 'São Bernardo',
        estado_id: 10
      },
      {
        id: 1302,
        cidade: 'São Domingos do Azeitão',
        estado_id: 10
      },
      {
        id: 1303,
        cidade: 'São Domingos do Maranhão',
        estado_id: 10
      },
      {
        id: 1304,
        cidade: 'São Félix de Balsas',
        estado_id: 10
      },
      {
        id: 1305,
        cidade: 'São Francisco do Brejão',
        estado_id: 10
      },
      {
        id: 1306,
        cidade: 'São Francisco do Maranhão',
        estado_id: 10
      },
      {
        id: 1307,
        cidade: 'São João Batista',
        estado_id: 10
      },
      {
        id: 1308,
        cidade: 'São João do Carú',
        estado_id: 10
      },
      {
        id: 1309,
        cidade: 'São João do Paraíso',
        estado_id: 10
      },
      {
        id: 1310,
        cidade: 'São João do Soter',
        estado_id: 10
      },
      {
        id: 1311,
        cidade: 'São João Dos Patos',
        estado_id: 10
      },
      {
        id: 1312,
        cidade: 'São José de Ribamar',
        estado_id: 10
      },
      {
        id: 1313,
        cidade: 'São José Dos Basílios',
        estado_id: 10
      },
      {
        id: 1314,
        cidade: 'São Luís',
        estado_id: 10
      },
      {
        id: 1315,
        cidade: 'São Luís Gonzaga do Maranhão',
        estado_id: 10
      },
      {
        id: 1316,
        cidade: 'São Mateus do Maranhão',
        estado_id: 10
      },
      {
        id: 1317,
        cidade: 'São Pedro da Água Branca',
        estado_id: 10
      },
      {
        id: 1318,
        cidade: 'São Pedro Dos Crentes',
        estado_id: 10
      },
      {
        id: 1319,
        cidade: 'São Raimundo Das Mangabeiras',
        estado_id: 10
      },
      {
        id: 1320,
        cidade: 'São Raimundo do Doca Bezerra',
        estado_id: 10
      },
      {
        id: 1321,
        cidade: 'São Roberto',
        estado_id: 10
      },
      {
        id: 1322,
        cidade: 'São Vicente Ferrer',
        estado_id: 10
      },
      {
        id: 1323,
        cidade: 'Satubinha',
        estado_id: 10
      },
      {
        id: 1324,
        cidade: 'Senador Alexandre Costa',
        estado_id: 10
      },
      {
        id: 1325,
        cidade: 'Senador la Rocque',
        estado_id: 10
      },
      {
        id: 1326,
        cidade: 'Serrano do Maranhão',
        estado_id: 10
      },
      {
        id: 1327,
        cidade: 'Sítio Novo',
        estado_id: 10
      },
      {
        id: 1328,
        cidade: 'Sucupira do Norte',
        estado_id: 10
      },
      {
        id: 1329,
        cidade: 'Sucupira do Riachão',
        estado_id: 10
      },
      {
        id: 1330,
        cidade: 'Tasso Fragoso',
        estado_id: 10
      },
      {
        id: 1331,
        cidade: 'Timbiras',
        estado_id: 10
      },
      {
        id: 1332,
        cidade: 'Timon',
        estado_id: 10
      },
      {
        id: 1333,
        cidade: 'Trizidela do Vale',
        estado_id: 10
      },
      {
        id: 1334,
        cidade: 'Tufilândia',
        estado_id: 10
      },
      {
        id: 1335,
        cidade: 'Tuntum',
        estado_id: 10
      },
      {
        id: 1336,
        cidade: 'Turiaçu',
        estado_id: 10
      },
      {
        id: 1337,
        cidade: 'Turilândia',
        estado_id: 10
      },
      {
        id: 1338,
        cidade: 'Tutóia',
        estado_id: 10
      },
      {
        id: 1339,
        cidade: 'Urbano Santos',
        estado_id: 10
      },
      {
        id: 1340,
        cidade: 'Vargem Grande',
        estado_id: 10
      },
      {
        id: 1341,
        cidade: 'Viana',
        estado_id: 10
      },
      {
        id: 1342,
        cidade: 'Vila Nova Dos Martírios',
        estado_id: 10
      },
      {
        id: 1343,
        cidade: 'Vitória do Mearim',
        estado_id: 10
      },
      {
        id: 1344,
        cidade: 'Vitorino Freire',
        estado_id: 10
      },
      {
        id: 1345,
        cidade: 'zé Doca',
        estado_id: 10
      },
      {
        id: 1346,
        cidade: 'Abadia Dos Dourados',
        estado_id: 11
      },
      {
        id: 1347,
        cidade: 'Abaeté',
        estado_id: 11
      },
      {
        id: 1348,
        cidade: 'Abre Campo',
        estado_id: 11
      },
      {
        id: 1349,
        cidade: 'Acaiaca',
        estado_id: 11
      },
      {
        id: 1350,
        cidade: 'Açucena',
        estado_id: 11
      },
      {
        id: 1351,
        cidade: 'Água Boa',
        estado_id: 11
      },
      {
        id: 1352,
        cidade: 'Água Comprida',
        estado_id: 11
      },
      {
        id: 1353,
        cidade: 'Aguanil',
        estado_id: 11
      },
      {
        id: 1354,
        cidade: 'Águas Formosas',
        estado_id: 11
      },
      {
        id: 1355,
        cidade: 'Águas Vermelhas',
        estado_id: 11
      },
      {
        id: 1356,
        cidade: 'Aimorés',
        estado_id: 11
      },
      {
        id: 1357,
        cidade: 'Aiuruoca',
        estado_id: 11
      },
      {
        id: 1358,
        cidade: 'Alagoa',
        estado_id: 11
      },
      {
        id: 1359,
        cidade: 'Albertina',
        estado_id: 11
      },
      {
        id: 1360,
        cidade: 'Além Paraíba',
        estado_id: 11
      },
      {
        id: 1361,
        cidade: 'Alfenas',
        estado_id: 11
      },
      {
        id: 1362,
        cidade: 'Alfredo Vasconcelos',
        estado_id: 11
      },
      {
        id: 1363,
        cidade: 'Almenara',
        estado_id: 11
      },
      {
        id: 1364,
        cidade: 'Alpercata',
        estado_id: 11
      },
      {
        id: 1365,
        cidade: 'Alpinópolis',
        estado_id: 11
      },
      {
        id: 1366,
        cidade: 'Alterosa',
        estado_id: 11
      },
      {
        id: 1367,
        cidade: 'Alto Caparaó',
        estado_id: 11
      },
      {
        id: 1368,
        cidade: 'Alto Rio Doce',
        estado_id: 11
      },
      {
        id: 1369,
        cidade: 'Alvarenga',
        estado_id: 11
      },
      {
        id: 1370,
        cidade: 'Alvinópolis',
        estado_id: 11
      },
      {
        id: 1371,
        cidade: 'Alvorada de Minas',
        estado_id: 11
      },
      {
        id: 1372,
        cidade: 'Amparo do Serra',
        estado_id: 11
      },
      {
        id: 1373,
        cidade: 'Andradas',
        estado_id: 11
      },
      {
        id: 1374,
        cidade: 'Cachoeira de Pajeú',
        estado_id: 11
      },
      {
        id: 1375,
        cidade: 'Andrelândia',
        estado_id: 11
      },
      {
        id: 1376,
        cidade: 'Angelândia',
        estado_id: 11
      },
      {
        id: 1377,
        cidade: 'Antônio Carlos',
        estado_id: 11
      },
      {
        id: 1378,
        cidade: 'Antônio Dias',
        estado_id: 11
      },
      {
        id: 1379,
        cidade: 'Antônio Prado de Minas',
        estado_id: 11
      },
      {
        id: 1380,
        cidade: 'Araçaí',
        estado_id: 11
      },
      {
        id: 1381,
        cidade: 'Aracitaba',
        estado_id: 11
      },
      {
        id: 1382,
        cidade: 'Araçuaí',
        estado_id: 11
      },
      {
        id: 1383,
        cidade: 'Araguari',
        estado_id: 11
      },
      {
        id: 1384,
        cidade: 'Arantina',
        estado_id: 11
      },
      {
        id: 1385,
        cidade: 'Araponga',
        estado_id: 11
      },
      {
        id: 1386,
        cidade: 'Araporã',
        estado_id: 11
      },
      {
        id: 1387,
        cidade: 'Arapuá',
        estado_id: 11
      },
      {
        id: 1388,
        cidade: 'Araújos',
        estado_id: 11
      },
      {
        id: 1389,
        cidade: 'Araxá',
        estado_id: 11
      },
      {
        id: 1390,
        cidade: 'Arceburgo',
        estado_id: 11
      },
      {
        id: 1391,
        cidade: 'Arcos',
        estado_id: 11
      },
      {
        id: 1392,
        cidade: 'Areado',
        estado_id: 11
      },
      {
        id: 1393,
        cidade: 'Argirita',
        estado_id: 11
      },
      {
        id: 1394,
        cidade: 'Aricanduva',
        estado_id: 11
      },
      {
        id: 1395,
        cidade: 'Arinos',
        estado_id: 11
      },
      {
        id: 1396,
        cidade: 'Astolfo Dutra',
        estado_id: 11
      },
      {
        id: 1397,
        cidade: 'Ataléia',
        estado_id: 11
      },
      {
        id: 1398,
        cidade: 'Augusto de Lima',
        estado_id: 11
      },
      {
        id: 1399,
        cidade: 'Baependi',
        estado_id: 11
      },
      {
        id: 1400,
        cidade: 'Baldim',
        estado_id: 11
      },
      {
        id: 1401,
        cidade: 'Bambuí',
        estado_id: 11
      },
      {
        id: 1402,
        cidade: 'Bandeira',
        estado_id: 11
      },
      {
        id: 1403,
        cidade: 'Bandeira do Sul',
        estado_id: 11
      },
      {
        id: 1404,
        cidade: 'Barão de Cocais',
        estado_id: 11
      },
      {
        id: 1405,
        cidade: 'Barão de Monte Alto',
        estado_id: 11
      },
      {
        id: 1406,
        cidade: 'Barbacena',
        estado_id: 11
      },
      {
        id: 1407,
        cidade: 'Barra Longa',
        estado_id: 11
      },
      {
        id: 1408,
        cidade: 'Barroso',
        estado_id: 11
      },
      {
        id: 1409,
        cidade: 'Bela Vista de Minas',
        estado_id: 11
      },
      {
        id: 1410,
        cidade: 'Belmiro Braga',
        estado_id: 11
      },
      {
        id: 1411,
        cidade: 'Belo Horizonte',
        estado_id: 11
      },
      {
        id: 1412,
        cidade: 'Belo Oriente',
        estado_id: 11
      },
      {
        id: 1413,
        cidade: 'Belo Vale',
        estado_id: 11
      },
      {
        id: 1414,
        cidade: 'Berilo',
        estado_id: 11
      },
      {
        id: 1415,
        cidade: 'Bertópolis',
        estado_id: 11
      },
      {
        id: 1416,
        cidade: 'Berizal',
        estado_id: 11
      },
      {
        id: 1417,
        cidade: 'Betim',
        estado_id: 11
      },
      {
        id: 1418,
        cidade: 'Bias Fortes',
        estado_id: 11
      },
      {
        id: 1419,
        cidade: 'Bicas',
        estado_id: 11
      },
      {
        id: 1420,
        cidade: 'Biquinhas',
        estado_id: 11
      },
      {
        id: 1421,
        cidade: 'Boa Esperança',
        estado_id: 11
      },
      {
        id: 1422,
        cidade: 'Bocaina de Minas',
        estado_id: 11
      },
      {
        id: 1423,
        cidade: 'Bocaiúva',
        estado_id: 11
      },
      {
        id: 1424,
        cidade: 'Bom Despacho',
        estado_id: 11
      },
      {
        id: 1425,
        cidade: 'Bom Jardim de Minas',
        estado_id: 11
      },
      {
        id: 1426,
        cidade: 'Bom Jesus da Penha',
        estado_id: 11
      },
      {
        id: 1427,
        cidade: 'Bom Jesus do Amparo',
        estado_id: 11
      },
      {
        id: 1428,
        cidade: 'Bom Jesus do Galho',
        estado_id: 11
      },
      {
        id: 1429,
        cidade: 'Bom Repouso',
        estado_id: 11
      },
      {
        id: 1430,
        cidade: 'Bom Sucesso',
        estado_id: 11
      },
      {
        id: 1431,
        cidade: 'Bonfim',
        estado_id: 11
      },
      {
        id: 1432,
        cidade: 'Bonfinópolis de Minas',
        estado_id: 11
      },
      {
        id: 1433,
        cidade: 'Bonito de Minas',
        estado_id: 11
      },
      {
        id: 1434,
        cidade: 'Borda da Mata',
        estado_id: 11
      },
      {
        id: 1435,
        cidade: 'Botelhos',
        estado_id: 11
      },
      {
        id: 1436,
        cidade: 'Botumirim',
        estado_id: 11
      },
      {
        id: 1437,
        cidade: 'Brasilândia de Minas',
        estado_id: 11
      },
      {
        id: 1438,
        cidade: 'Brasília de Minas',
        estado_id: 11
      },
      {
        id: 1439,
        cidade: 'Brás Pires',
        estado_id: 11
      },
      {
        id: 1440,
        cidade: 'Braúnas',
        estado_id: 11
      },
      {
        id: 1441,
        cidade: 'Brasópolis',
        estado_id: 11
      },
      {
        id: 1442,
        cidade: 'Brumadinho',
        estado_id: 11
      },
      {
        id: 1443,
        cidade: 'Bueno Brandão',
        estado_id: 11
      },
      {
        id: 1444,
        cidade: 'Buenópolis',
        estado_id: 11
      },
      {
        id: 1445,
        cidade: 'Bugre',
        estado_id: 11
      },
      {
        id: 1446,
        cidade: 'Buritis',
        estado_id: 11
      },
      {
        id: 1447,
        cidade: 'Buritizeiro',
        estado_id: 11
      },
      {
        id: 1448,
        cidade: 'Cabeceira Grande',
        estado_id: 11
      },
      {
        id: 1449,
        cidade: 'Cabo Verde',
        estado_id: 11
      },
      {
        id: 1450,
        cidade: 'Cachoeira da Prata',
        estado_id: 11
      },
      {
        id: 1451,
        cidade: 'Cachoeira de Minas',
        estado_id: 11
      },
      {
        id: 1452,
        cidade: 'Cachoeira Dourada',
        estado_id: 11
      },
      {
        id: 1453,
        cidade: 'Caetanópolis',
        estado_id: 11
      },
      {
        id: 1454,
        cidade: 'Caeté',
        estado_id: 11
      },
      {
        id: 1455,
        cidade: 'Caiana',
        estado_id: 11
      },
      {
        id: 1456,
        cidade: 'Cajuri',
        estado_id: 11
      },
      {
        id: 1457,
        cidade: 'Caldas',
        estado_id: 11
      },
      {
        id: 1458,
        cidade: 'Camacho',
        estado_id: 11
      },
      {
        id: 1459,
        cidade: 'Camanducaia',
        estado_id: 11
      },
      {
        id: 1460,
        cidade: 'Cambuí',
        estado_id: 11
      },
      {
        id: 1461,
        cidade: 'Cambuquira',
        estado_id: 11
      },
      {
        id: 1462,
        cidade: 'Campanário',
        estado_id: 11
      },
      {
        id: 1463,
        cidade: 'Campanha',
        estado_id: 11
      },
      {
        id: 1464,
        cidade: 'Campestre',
        estado_id: 11
      },
      {
        id: 1465,
        cidade: 'Campina Verde',
        estado_id: 11
      },
      {
        id: 1466,
        cidade: 'Campo Azul',
        estado_id: 11
      },
      {
        id: 1467,
        cidade: 'Campo Belo',
        estado_id: 11
      },
      {
        id: 1468,
        cidade: 'Campo do Meio',
        estado_id: 11
      },
      {
        id: 1469,
        cidade: 'Campo Florido',
        estado_id: 11
      },
      {
        id: 1470,
        cidade: 'Campos Altos',
        estado_id: 11
      },
      {
        id: 1471,
        cidade: 'Campos Gerais',
        estado_id: 11
      },
      {
        id: 1472,
        cidade: 'Canaã',
        estado_id: 11
      },
      {
        id: 1473,
        cidade: 'Canápolis',
        estado_id: 11
      },
      {
        id: 1474,
        cidade: 'Cana Verde',
        estado_id: 11
      },
      {
        id: 1475,
        cidade: 'Candeias',
        estado_id: 11
      },
      {
        id: 1476,
        cidade: 'Cantagalo',
        estado_id: 11
      },
      {
        id: 1477,
        cidade: 'Caparaó',
        estado_id: 11
      },
      {
        id: 1478,
        cidade: 'Capela Nova',
        estado_id: 11
      },
      {
        id: 1479,
        cidade: 'Capelinha',
        estado_id: 11
      },
      {
        id: 1480,
        cidade: 'Capetinga',
        estado_id: 11
      },
      {
        id: 1481,
        cidade: 'Capim Branco',
        estado_id: 11
      },
      {
        id: 1482,
        cidade: 'Capinópolis',
        estado_id: 11
      },
      {
        id: 1483,
        cidade: 'Capitão Andrade',
        estado_id: 11
      },
      {
        id: 1484,
        cidade: 'Capitão Enéas',
        estado_id: 11
      },
      {
        id: 1485,
        cidade: 'Capitólio',
        estado_id: 11
      },
      {
        id: 1486,
        cidade: 'Caputira',
        estado_id: 11
      },
      {
        id: 1487,
        cidade: 'Caraí',
        estado_id: 11
      },
      {
        id: 1488,
        cidade: 'Caranaíba',
        estado_id: 11
      },
      {
        id: 1489,
        cidade: 'Carandaí',
        estado_id: 11
      },
      {
        id: 1490,
        cidade: 'Carangola',
        estado_id: 11
      },
      {
        id: 1491,
        cidade: 'Caratinga',
        estado_id: 11
      },
      {
        id: 1492,
        cidade: 'Carbonita',
        estado_id: 11
      },
      {
        id: 1493,
        cidade: 'Careaçu',
        estado_id: 11
      },
      {
        id: 1494,
        cidade: 'Carlos Chagas',
        estado_id: 11
      },
      {
        id: 1495,
        cidade: 'Carmésia',
        estado_id: 11
      },
      {
        id: 1496,
        cidade: 'Carmo da Cachoeira',
        estado_id: 11
      },
      {
        id: 1497,
        cidade: 'Carmo da Mata',
        estado_id: 11
      },
      {
        id: 1498,
        cidade: 'Carmo de Minas',
        estado_id: 11
      },
      {
        id: 1499,
        cidade: 'Carmo do Cajuru',
        estado_id: 11
      },
      {
        id: 1500,
        cidade: 'Carmo do Paranaíba',
        estado_id: 11
      },
      {
        id: 1501,
        cidade: 'Carmo do Rio Claro',
        estado_id: 11
      },
      {
        id: 1502,
        cidade: 'Carmópolis de Minas',
        estado_id: 11
      },
      {
        id: 1503,
        cidade: 'Carneirinho',
        estado_id: 11
      },
      {
        id: 1504,
        cidade: 'Carrancas',
        estado_id: 11
      },
      {
        id: 1505,
        cidade: 'Carvalhópolis',
        estado_id: 11
      },
      {
        id: 1506,
        cidade: 'Carvalhos',
        estado_id: 11
      },
      {
        id: 1507,
        cidade: 'Casa Grande',
        estado_id: 11
      },
      {
        id: 1508,
        cidade: 'Cascalho Rico',
        estado_id: 11
      },
      {
        id: 1509,
        cidade: 'Cássia',
        estado_id: 11
      },
      {
        id: 1510,
        cidade: 'Conceição da Barra de Minas',
        estado_id: 11
      },
      {
        id: 1511,
        cidade: 'Cataguases',
        estado_id: 11
      },
      {
        id: 1512,
        cidade: 'Catas Altas',
        estado_id: 11
      },
      {
        id: 1513,
        cidade: 'Catas Altas da Noruega',
        estado_id: 11
      },
      {
        id: 1514,
        cidade: 'Catuji',
        estado_id: 11
      },
      {
        id: 1515,
        cidade: 'Catuti',
        estado_id: 11
      },
      {
        id: 1516,
        cidade: 'Caxambu',
        estado_id: 11
      },
      {
        id: 1517,
        cidade: 'Cedro do Abaeté',
        estado_id: 11
      },
      {
        id: 1518,
        cidade: 'Central de Minas',
        estado_id: 11
      },
      {
        id: 1519,
        cidade: 'Centralina',
        estado_id: 11
      },
      {
        id: 1520,
        cidade: 'Chácara',
        estado_id: 11
      },
      {
        id: 1521,
        cidade: 'Chalé',
        estado_id: 11
      },
      {
        id: 1522,
        cidade: 'Chapada do Norte',
        estado_id: 11
      },
      {
        id: 1523,
        cidade: 'Chapada Gaúcha',
        estado_id: 11
      },
      {
        id: 1524,
        cidade: 'Chiador',
        estado_id: 11
      },
      {
        id: 1525,
        cidade: 'Cipotânea',
        estado_id: 11
      },
      {
        id: 1526,
        cidade: 'Claraval',
        estado_id: 11
      },
      {
        id: 1527,
        cidade: 'Claro Dos Poções',
        estado_id: 11
      },
      {
        id: 1528,
        cidade: 'Cláudio',
        estado_id: 11
      },
      {
        id: 1529,
        cidade: 'Coimbra',
        estado_id: 11
      },
      {
        id: 1530,
        cidade: 'Coluna',
        estado_id: 11
      },
      {
        id: 1531,
        cidade: 'Comendador Gomes',
        estado_id: 11
      },
      {
        id: 1532,
        cidade: 'Comercinho',
        estado_id: 11
      },
      {
        id: 1533,
        cidade: 'Conceição da Aparecida',
        estado_id: 11
      },
      {
        id: 1534,
        cidade: 'Conceição Das Pedras',
        estado_id: 11
      },
      {
        id: 1535,
        cidade: 'Conceição Das Alagoas',
        estado_id: 11
      },
      {
        id: 1536,
        cidade: 'Conceição de Ipanema',
        estado_id: 11
      },
      {
        id: 1537,
        cidade: 'Conceição do Mato Dentro',
        estado_id: 11
      },
      {
        id: 1538,
        cidade: 'Conceição do Pará',
        estado_id: 11
      },
      {
        id: 1539,
        cidade: 'Conceição do Rio Verde',
        estado_id: 11
      },
      {
        id: 1540,
        cidade: 'Conceição Dos Ouros',
        estado_id: 11
      },
      {
        id: 1541,
        cidade: 'Cônego Marinho',
        estado_id: 11
      },
      {
        id: 1542,
        cidade: 'Confins',
        estado_id: 11
      },
      {
        id: 1543,
        cidade: 'Congonhal',
        estado_id: 11
      },
      {
        id: 1544,
        cidade: 'Congonhas',
        estado_id: 11
      },
      {
        id: 1545,
        cidade: 'Congonhas do Norte',
        estado_id: 11
      },
      {
        id: 1546,
        cidade: 'Conquista',
        estado_id: 11
      },
      {
        id: 1547,
        cidade: 'Conselheiro Lafaiete',
        estado_id: 11
      },
      {
        id: 1548,
        cidade: 'Conselheiro Pena',
        estado_id: 11
      },
      {
        id: 1549,
        cidade: 'Consolação',
        estado_id: 11
      },
      {
        id: 1550,
        cidade: 'Contagem',
        estado_id: 11
      },
      {
        id: 1551,
        cidade: 'Coqueiral',
        estado_id: 11
      },
      {
        id: 1552,
        cidade: 'Coração de Jesus',
        estado_id: 11
      },
      {
        id: 1553,
        cidade: 'Cordisburgo',
        estado_id: 11
      },
      {
        id: 1554,
        cidade: 'Cordislândia',
        estado_id: 11
      },
      {
        id: 1555,
        cidade: 'Corinto',
        estado_id: 11
      },
      {
        id: 1556,
        cidade: 'Coroaci',
        estado_id: 11
      },
      {
        id: 1557,
        cidade: 'Coromandel',
        estado_id: 11
      },
      {
        id: 1558,
        cidade: 'Coronel Fabriciano',
        estado_id: 11
      },
      {
        id: 1559,
        cidade: 'Coronel Murta',
        estado_id: 11
      },
      {
        id: 1560,
        cidade: 'Coronel Pacheco',
        estado_id: 11
      },
      {
        id: 1561,
        cidade: 'Coronel Xavier Chaves',
        estado_id: 11
      },
      {
        id: 1562,
        cidade: 'Córrego Danta',
        estado_id: 11
      },
      {
        id: 1563,
        cidade: 'Córrego do Bom Jesus',
        estado_id: 11
      },
      {
        id: 1564,
        cidade: 'Córrego Fundo',
        estado_id: 11
      },
      {
        id: 1565,
        cidade: 'Córrego Novo',
        estado_id: 11
      },
      {
        id: 1566,
        cidade: 'Couto de Magalhães de Minas',
        estado_id: 11
      },
      {
        id: 1567,
        cidade: 'Crisólita',
        estado_id: 11
      },
      {
        id: 1568,
        cidade: 'Cristais',
        estado_id: 11
      },
      {
        id: 1569,
        cidade: 'Cristália',
        estado_id: 11
      },
      {
        id: 1570,
        cidade: 'Cristiano Otoni',
        estado_id: 11
      },
      {
        id: 1571,
        cidade: 'Cristina',
        estado_id: 11
      },
      {
        id: 1572,
        cidade: 'Crucilândia',
        estado_id: 11
      },
      {
        id: 1573,
        cidade: 'Cruzeiro da Fortaleza',
        estado_id: 11
      },
      {
        id: 1574,
        cidade: 'Cruzília',
        estado_id: 11
      },
      {
        id: 1575,
        cidade: 'Cuparaque',
        estado_id: 11
      },
      {
        id: 1576,
        cidade: 'Curral de Dentro',
        estado_id: 11
      },
      {
        id: 1577,
        cidade: 'Curvelo',
        estado_id: 11
      },
      {
        id: 1578,
        cidade: 'Datas',
        estado_id: 11
      },
      {
        id: 1579,
        cidade: 'Delfim Moreira',
        estado_id: 11
      },
      {
        id: 1580,
        cidade: 'Delfinópolis',
        estado_id: 11
      },
      {
        id: 1581,
        cidade: 'Delta',
        estado_id: 11
      },
      {
        id: 1582,
        cidade: 'Descoberto',
        estado_id: 11
      },
      {
        id: 1583,
        cidade: 'Desterro de Entre Rios',
        estado_id: 11
      },
      {
        id: 1584,
        cidade: 'Desterro do Melo',
        estado_id: 11
      },
      {
        id: 1585,
        cidade: 'Diamantina',
        estado_id: 11
      },
      {
        id: 1586,
        cidade: 'Diogo de Vasconcelos',
        estado_id: 11
      },
      {
        id: 1587,
        cidade: 'Dionísio',
        estado_id: 11
      },
      {
        id: 1588,
        cidade: 'Divinésia',
        estado_id: 11
      },
      {
        id: 1589,
        cidade: 'Divino',
        estado_id: 11
      },
      {
        id: 1590,
        cidade: 'Divino Das Laranjeiras',
        estado_id: 11
      },
      {
        id: 1591,
        cidade: 'Divinolândia de Minas',
        estado_id: 11
      },
      {
        id: 1592,
        cidade: 'Divinópolis',
        estado_id: 11
      },
      {
        id: 1593,
        cidade: 'Divisa Alegre',
        estado_id: 11
      },
      {
        id: 1594,
        cidade: 'Divisa Nova',
        estado_id: 11
      },
      {
        id: 1595,
        cidade: 'Divisópolis',
        estado_id: 11
      },
      {
        id: 1596,
        cidade: 'Dom Bosco',
        estado_id: 11
      },
      {
        id: 1597,
        cidade: 'Dom Cavati',
        estado_id: 11
      },
      {
        id: 1598,
        cidade: 'Dom Joaquim',
        estado_id: 11
      },
      {
        id: 1599,
        cidade: 'Dom Silvério',
        estado_id: 11
      },
      {
        id: 1600,
        cidade: 'Dom Viçoso',
        estado_id: 11
      },
      {
        id: 1601,
        cidade: 'Dona Eusébia',
        estado_id: 11
      },
      {
        id: 1602,
        cidade: 'Dores de Campos',
        estado_id: 11
      },
      {
        id: 1603,
        cidade: 'Dores de Guanhães',
        estado_id: 11
      },
      {
        id: 1604,
        cidade: 'Dores do Indaiá',
        estado_id: 11
      },
      {
        id: 1605,
        cidade: 'Dores do Turvo',
        estado_id: 11
      },
      {
        id: 1606,
        cidade: 'Doresópolis',
        estado_id: 11
      },
      {
        id: 1607,
        cidade: 'Douradoquara',
        estado_id: 11
      },
      {
        id: 1608,
        cidade: 'Durandé',
        estado_id: 11
      },
      {
        id: 1609,
        cidade: 'Elói Mendes',
        estado_id: 11
      },
      {
        id: 1610,
        cidade: 'Engenheiro Caldas',
        estado_id: 11
      },
      {
        id: 1611,
        cidade: 'Engenheiro Navarro',
        estado_id: 11
      },
      {
        id: 1612,
        cidade: 'Entre Folhas',
        estado_id: 11
      },
      {
        id: 1613,
        cidade: 'Entre Rios de Minas',
        estado_id: 11
      },
      {
        id: 1614,
        cidade: 'Ervália',
        estado_id: 11
      },
      {
        id: 1615,
        cidade: 'Esmeraldas',
        estado_id: 11
      },
      {
        id: 1616,
        cidade: 'Espera Feliz',
        estado_id: 11
      },
      {
        id: 1617,
        cidade: 'Espinosa',
        estado_id: 11
      },
      {
        id: 1618,
        cidade: 'Espírito Santo do Dourado',
        estado_id: 11
      },
      {
        id: 1619,
        cidade: 'Estiva',
        estado_id: 11
      },
      {
        id: 1620,
        cidade: 'Estrela Dalva',
        estado_id: 11
      },
      {
        id: 1621,
        cidade: 'Estrela do Indaiá',
        estado_id: 11
      },
      {
        id: 1622,
        cidade: 'Estrela do Sul',
        estado_id: 11
      },
      {
        id: 1623,
        cidade: 'Eugenópolis',
        estado_id: 11
      },
      {
        id: 1624,
        cidade: 'Ewbank da Câmara',
        estado_id: 11
      },
      {
        id: 1625,
        cidade: 'Extrema',
        estado_id: 11
      },
      {
        id: 1626,
        cidade: 'Fama',
        estado_id: 11
      },
      {
        id: 1627,
        cidade: 'Faria Lemos',
        estado_id: 11
      },
      {
        id: 1628,
        cidade: 'Felício Dos Santos',
        estado_id: 11
      },
      {
        id: 1629,
        cidade: 'São Gonçalo do Rio Preto',
        estado_id: 11
      },
      {
        id: 1630,
        cidade: 'Felisburgo',
        estado_id: 11
      },
      {
        id: 1631,
        cidade: 'Felixlândia',
        estado_id: 11
      },
      {
        id: 1632,
        cidade: 'Fernandes Tourinho',
        estado_id: 11
      },
      {
        id: 1633,
        cidade: 'Ferros',
        estado_id: 11
      },
      {
        id: 1634,
        cidade: 'Fervedouro',
        estado_id: 11
      },
      {
        id: 1635,
        cidade: 'Florestal',
        estado_id: 11
      },
      {
        id: 1636,
        cidade: 'Formiga',
        estado_id: 11
      },
      {
        id: 1637,
        cidade: 'Formoso',
        estado_id: 11
      },
      {
        id: 1638,
        cidade: 'Fortaleza de Minas',
        estado_id: 11
      },
      {
        id: 1639,
        cidade: 'Fortuna de Minas',
        estado_id: 11
      },
      {
        id: 1640,
        cidade: 'Francisco Badaró',
        estado_id: 11
      },
      {
        id: 1641,
        cidade: 'Francisco Dumont',
        estado_id: 11
      },
      {
        id: 1642,
        cidade: 'Francisco sá',
        estado_id: 11
      },
      {
        id: 1643,
        cidade: 'Franciscópolis',
        estado_id: 11
      },
      {
        id: 1644,
        cidade: 'Frei Gaspar',
        estado_id: 11
      },
      {
        id: 1645,
        cidade: 'Frei Inocêncio',
        estado_id: 11
      },
      {
        id: 1646,
        cidade: 'Frei Lagonegro',
        estado_id: 11
      },
      {
        id: 1647,
        cidade: 'Fronteira',
        estado_id: 11
      },
      {
        id: 1648,
        cidade: 'Fronteira Dos Vales',
        estado_id: 11
      },
      {
        id: 1649,
        cidade: 'Fruta de Leite',
        estado_id: 11
      },
      {
        id: 1650,
        cidade: 'Frutal',
        estado_id: 11
      },
      {
        id: 1651,
        cidade: 'Funilândia',
        estado_id: 11
      },
      {
        id: 1652,
        cidade: 'Galiléia',
        estado_id: 11
      },
      {
        id: 1653,
        cidade: 'Gameleiras',
        estado_id: 11
      },
      {
        id: 1654,
        cidade: 'Glaucilândia',
        estado_id: 11
      },
      {
        id: 1655,
        cidade: 'Goiabeira',
        estado_id: 11
      },
      {
        id: 1656,
        cidade: 'Goianá',
        estado_id: 11
      },
      {
        id: 1657,
        cidade: 'Gonçalves',
        estado_id: 11
      },
      {
        id: 1658,
        cidade: 'Gonzaga',
        estado_id: 11
      },
      {
        id: 1659,
        cidade: 'Gouveia',
        estado_id: 11
      },
      {
        id: 1660,
        cidade: 'Governador Valadares',
        estado_id: 11
      },
      {
        id: 1661,
        cidade: 'Grão Mogol',
        estado_id: 11
      },
      {
        id: 1662,
        cidade: 'Grupiara',
        estado_id: 11
      },
      {
        id: 1663,
        cidade: 'Guanhães',
        estado_id: 11
      },
      {
        id: 1664,
        cidade: 'Guapé',
        estado_id: 11
      },
      {
        id: 1665,
        cidade: 'Guaraciaba',
        estado_id: 11
      },
      {
        id: 1666,
        cidade: 'Guaraciama',
        estado_id: 11
      },
      {
        id: 1667,
        cidade: 'Guaranésia',
        estado_id: 11
      },
      {
        id: 1668,
        cidade: 'Guarani',
        estado_id: 11
      },
      {
        id: 1669,
        cidade: 'Guarará',
        estado_id: 11
      },
      {
        id: 1670,
        cidade: 'Guarda-mor',
        estado_id: 11
      },
      {
        id: 1671,
        cidade: 'Guaxupé',
        estado_id: 11
      },
      {
        id: 1672,
        cidade: 'Guidoval',
        estado_id: 11
      },
      {
        id: 1673,
        cidade: 'Guimarânia',
        estado_id: 11
      },
      {
        id: 1674,
        cidade: 'Guiricema',
        estado_id: 11
      },
      {
        id: 1675,
        cidade: 'Gurinhatã',
        estado_id: 11
      },
      {
        id: 1676,
        cidade: 'Heliodora',
        estado_id: 11
      },
      {
        id: 1677,
        cidade: 'Iapu',
        estado_id: 11
      },
      {
        id: 1678,
        cidade: 'Ibertioga',
        estado_id: 11
      },
      {
        id: 1679,
        cidade: 'Ibiá',
        estado_id: 11
      },
      {
        id: 1680,
        cidade: 'Ibiaí',
        estado_id: 11
      },
      {
        id: 1681,
        cidade: 'Ibiracatu',
        estado_id: 11
      },
      {
        id: 1682,
        cidade: 'Ibiraci',
        estado_id: 11
      },
      {
        id: 1683,
        cidade: 'Ibirité',
        estado_id: 11
      },
      {
        id: 1684,
        cidade: 'Ibitiúra de Minas',
        estado_id: 11
      },
      {
        id: 1685,
        cidade: 'Ibituruna',
        estado_id: 11
      },
      {
        id: 1686,
        cidade: 'Icaraí de Minas',
        estado_id: 11
      },
      {
        id: 1687,
        cidade: 'Igarapé',
        estado_id: 11
      },
      {
        id: 1688,
        cidade: 'Igaratinga',
        estado_id: 11
      },
      {
        id: 1689,
        cidade: 'Iguatama',
        estado_id: 11
      },
      {
        id: 1690,
        cidade: 'Ijaci',
        estado_id: 11
      },
      {
        id: 1691,
        cidade: 'Ilicínea',
        estado_id: 11
      },
      {
        id: 1692,
        cidade: 'Imbé de Minas',
        estado_id: 11
      },
      {
        id: 1693,
        cidade: 'Inconfidentes',
        estado_id: 11
      },
      {
        id: 1694,
        cidade: 'Indaiabira',
        estado_id: 11
      },
      {
        id: 1695,
        cidade: 'Indianópolis',
        estado_id: 11
      },
      {
        id: 1696,
        cidade: 'Ingaí',
        estado_id: 11
      },
      {
        id: 1697,
        cidade: 'Inhapim',
        estado_id: 11
      },
      {
        id: 1698,
        cidade: 'Inhaúma',
        estado_id: 11
      },
      {
        id: 1699,
        cidade: 'Inimutaba',
        estado_id: 11
      },
      {
        id: 1700,
        cidade: 'Ipaba',
        estado_id: 11
      },
      {
        id: 1701,
        cidade: 'Ipanema',
        estado_id: 11
      },
      {
        id: 1702,
        cidade: 'Ipatinga',
        estado_id: 11
      },
      {
        id: 1703,
        cidade: 'Ipiaçu',
        estado_id: 11
      },
      {
        id: 1704,
        cidade: 'Ipuiúna',
        estado_id: 11
      },
      {
        id: 1705,
        cidade: 'Iraí de Minas',
        estado_id: 11
      },
      {
        id: 1706,
        cidade: 'Itabira',
        estado_id: 11
      },
      {
        id: 1707,
        cidade: 'Itabirinha',
        estado_id: 11
      },
      {
        id: 1708,
        cidade: 'Itabirito',
        estado_id: 11
      },
      {
        id: 1709,
        cidade: 'Itacambira',
        estado_id: 11
      },
      {
        id: 1710,
        cidade: 'Itacarambi',
        estado_id: 11
      },
      {
        id: 1711,
        cidade: 'Itaguara',
        estado_id: 11
      },
      {
        id: 1712,
        cidade: 'Itaipé',
        estado_id: 11
      },
      {
        id: 1713,
        cidade: 'Itajubá',
        estado_id: 11
      },
      {
        id: 1714,
        cidade: 'Itamarandiba',
        estado_id: 11
      },
      {
        id: 1715,
        cidade: 'Itamarati de Minas',
        estado_id: 11
      },
      {
        id: 1716,
        cidade: 'Itambacuri',
        estado_id: 11
      },
      {
        id: 1717,
        cidade: 'Itambé do Mato Dentro',
        estado_id: 11
      },
      {
        id: 1718,
        cidade: 'Itamogi',
        estado_id: 11
      },
      {
        id: 1719,
        cidade: 'Itamonte',
        estado_id: 11
      },
      {
        id: 1720,
        cidade: 'Itanhandu',
        estado_id: 11
      },
      {
        id: 1721,
        cidade: 'Itanhomi',
        estado_id: 11
      },
      {
        id: 1722,
        cidade: 'Itaobim',
        estado_id: 11
      },
      {
        id: 1723,
        cidade: 'Itapagipe',
        estado_id: 11
      },
      {
        id: 1724,
        cidade: 'Itapecerica',
        estado_id: 11
      },
      {
        id: 1725,
        cidade: 'Itapeva',
        estado_id: 11
      },
      {
        id: 1726,
        cidade: 'Itatiaiuçu',
        estado_id: 11
      },
      {
        id: 1727,
        cidade: 'Itaú de Minas',
        estado_id: 11
      },
      {
        id: 1728,
        cidade: 'Itaúna',
        estado_id: 11
      },
      {
        id: 1729,
        cidade: 'Itaverava',
        estado_id: 11
      },
      {
        id: 1730,
        cidade: 'Itinga',
        estado_id: 11
      },
      {
        id: 1731,
        cidade: 'Itueta',
        estado_id: 11
      },
      {
        id: 1732,
        cidade: 'Ituiutaba',
        estado_id: 11
      },
      {
        id: 1733,
        cidade: 'Itumirim',
        estado_id: 11
      },
      {
        id: 1734,
        cidade: 'Iturama',
        estado_id: 11
      },
      {
        id: 1735,
        cidade: 'Itutinga',
        estado_id: 11
      },
      {
        id: 1736,
        cidade: 'Jaboticatubas',
        estado_id: 11
      },
      {
        id: 1737,
        cidade: 'Jacinto',
        estado_id: 11
      },
      {
        id: 1738,
        cidade: 'Jacuí',
        estado_id: 11
      },
      {
        id: 1739,
        cidade: 'Jacutinga',
        estado_id: 11
      },
      {
        id: 1740,
        cidade: 'Jaguaraçu',
        estado_id: 11
      },
      {
        id: 1741,
        cidade: 'Jaíba',
        estado_id: 11
      },
      {
        id: 1742,
        cidade: 'Jampruca',
        estado_id: 11
      },
      {
        id: 1743,
        cidade: 'Janaúba',
        estado_id: 11
      },
      {
        id: 1744,
        cidade: 'Januária',
        estado_id: 11
      },
      {
        id: 1745,
        cidade: 'Japaraíba',
        estado_id: 11
      },
      {
        id: 1746,
        cidade: 'Japonvar',
        estado_id: 11
      },
      {
        id: 1747,
        cidade: 'Jeceaba',
        estado_id: 11
      },
      {
        id: 1748,
        cidade: 'Jenipapo de Minas',
        estado_id: 11
      },
      {
        id: 1749,
        cidade: 'Jequeri',
        estado_id: 11
      },
      {
        id: 1750,
        cidade: 'Jequitaí',
        estado_id: 11
      },
      {
        id: 1751,
        cidade: 'Jequitibá',
        estado_id: 11
      },
      {
        id: 1752,
        cidade: 'Jequitinhonha',
        estado_id: 11
      },
      {
        id: 1753,
        cidade: 'Jesuânia',
        estado_id: 11
      },
      {
        id: 1754,
        cidade: 'Joaíma',
        estado_id: 11
      },
      {
        id: 1755,
        cidade: 'Joanésia',
        estado_id: 11
      },
      {
        id: 1756,
        cidade: 'João Monlevade',
        estado_id: 11
      },
      {
        id: 1757,
        cidade: 'João Pinheiro',
        estado_id: 11
      },
      {
        id: 1758,
        cidade: 'Joaquim Felício',
        estado_id: 11
      },
      {
        id: 1759,
        cidade: 'Jordânia',
        estado_id: 11
      },
      {
        id: 1760,
        cidade: 'José Gonçalves de Minas',
        estado_id: 11
      },
      {
        id: 1761,
        cidade: 'José Raydan',
        estado_id: 11
      },
      {
        id: 1762,
        cidade: 'Josenópolis',
        estado_id: 11
      },
      {
        id: 1763,
        cidade: 'Nova União',
        estado_id: 11
      },
      {
        id: 1764,
        cidade: 'Juatuba',
        estado_id: 11
      },
      {
        id: 1765,
        cidade: 'Juiz de Fora',
        estado_id: 11
      },
      {
        id: 1766,
        cidade: 'Juramento',
        estado_id: 11
      },
      {
        id: 1767,
        cidade: 'Juruaia',
        estado_id: 11
      },
      {
        id: 1768,
        cidade: 'Juvenília',
        estado_id: 11
      },
      {
        id: 1769,
        cidade: 'Ladainha',
        estado_id: 11
      },
      {
        id: 1770,
        cidade: 'Lagamar',
        estado_id: 11
      },
      {
        id: 1771,
        cidade: 'Lagoa da Prata',
        estado_id: 11
      },
      {
        id: 1772,
        cidade: 'Lagoa Dos Patos',
        estado_id: 11
      },
      {
        id: 1773,
        cidade: 'Lagoa Dourada',
        estado_id: 11
      },
      {
        id: 1774,
        cidade: 'Lagoa Formosa',
        estado_id: 11
      },
      {
        id: 1775,
        cidade: 'Lagoa Grande',
        estado_id: 11
      },
      {
        id: 1776,
        cidade: 'Lagoa Santa',
        estado_id: 11
      },
      {
        id: 1777,
        cidade: 'Lajinha',
        estado_id: 11
      },
      {
        id: 1778,
        cidade: 'Lambari',
        estado_id: 11
      },
      {
        id: 1779,
        cidade: 'Lamim',
        estado_id: 11
      },
      {
        id: 1780,
        cidade: 'Laranjal',
        estado_id: 11
      },
      {
        id: 1781,
        cidade: 'Lassance',
        estado_id: 11
      },
      {
        id: 1782,
        cidade: 'Lavras',
        estado_id: 11
      },
      {
        id: 1783,
        cidade: 'Leandro Ferreira',
        estado_id: 11
      },
      {
        id: 1784,
        cidade: 'Leme do Prado',
        estado_id: 11
      },
      {
        id: 1785,
        cidade: 'Leopoldina',
        estado_id: 11
      },
      {
        id: 1786,
        cidade: 'Liberdade',
        estado_id: 11
      },
      {
        id: 1787,
        cidade: 'Lima Duarte',
        estado_id: 11
      },
      {
        id: 1788,
        cidade: 'Limeira do Oeste',
        estado_id: 11
      },
      {
        id: 1789,
        cidade: 'Lontra',
        estado_id: 11
      },
      {
        id: 1790,
        cidade: 'Luisburgo',
        estado_id: 11
      },
      {
        id: 1791,
        cidade: 'Luislândia',
        estado_id: 11
      },
      {
        id: 1792,
        cidade: 'Luminárias',
        estado_id: 11
      },
      {
        id: 1793,
        cidade: 'Luz',
        estado_id: 11
      },
      {
        id: 1794,
        cidade: 'Machacalis',
        estado_id: 11
      },
      {
        id: 1795,
        cidade: 'Machado',
        estado_id: 11
      },
      {
        id: 1796,
        cidade: 'Madre de Deus de Minas',
        estado_id: 11
      },
      {
        id: 1797,
        cidade: 'Malacacheta',
        estado_id: 11
      },
      {
        id: 1798,
        cidade: 'Mamonas',
        estado_id: 11
      },
      {
        id: 1799,
        cidade: 'Manga',
        estado_id: 11
      },
      {
        id: 1800,
        cidade: 'Manhuaçu',
        estado_id: 11
      },
      {
        id: 1801,
        cidade: 'Manhumirim',
        estado_id: 11
      },
      {
        id: 1802,
        cidade: 'Mantena',
        estado_id: 11
      },
      {
        id: 1803,
        cidade: 'Maravilhas',
        estado_id: 11
      },
      {
        id: 1804,
        cidade: 'Mar de Espanha',
        estado_id: 11
      },
      {
        id: 1805,
        cidade: 'Maria da fé',
        estado_id: 11
      },
      {
        id: 1806,
        cidade: 'Mariana',
        estado_id: 11
      },
      {
        id: 1807,
        cidade: 'Marilac',
        estado_id: 11
      },
      {
        id: 1808,
        cidade: 'Mário Campos',
        estado_id: 11
      },
      {
        id: 1809,
        cidade: 'Maripá de Minas',
        estado_id: 11
      },
      {
        id: 1810,
        cidade: 'Marliéria',
        estado_id: 11
      },
      {
        id: 1811,
        cidade: 'Marmelópolis',
        estado_id: 11
      },
      {
        id: 1812,
        cidade: 'Martinho Campos',
        estado_id: 11
      },
      {
        id: 1813,
        cidade: 'Martins Soares',
        estado_id: 11
      },
      {
        id: 1814,
        cidade: 'Mata Verde',
        estado_id: 11
      },
      {
        id: 1815,
        cidade: 'Materlândia',
        estado_id: 11
      },
      {
        id: 1816,
        cidade: 'Mateus Leme',
        estado_id: 11
      },
      {
        id: 1817,
        cidade: 'Matias Barbosa',
        estado_id: 11
      },
      {
        id: 1818,
        cidade: 'Matias Cardoso',
        estado_id: 11
      },
      {
        id: 1819,
        cidade: 'Matipó',
        estado_id: 11
      },
      {
        id: 1820,
        cidade: 'Mato Verde',
        estado_id: 11
      },
      {
        id: 1821,
        cidade: 'Matozinhos',
        estado_id: 11
      },
      {
        id: 1822,
        cidade: 'Matutina',
        estado_id: 11
      },
      {
        id: 1823,
        cidade: 'Medeiros',
        estado_id: 11
      },
      {
        id: 1824,
        cidade: 'Medina',
        estado_id: 11
      },
      {
        id: 1825,
        cidade: 'Mendes Pimentel',
        estado_id: 11
      },
      {
        id: 1826,
        cidade: 'Mercês',
        estado_id: 11
      },
      {
        id: 1827,
        cidade: 'Mesquita',
        estado_id: 11
      },
      {
        id: 1828,
        cidade: 'Minas Novas',
        estado_id: 11
      },
      {
        id: 1829,
        cidade: 'Minduri',
        estado_id: 11
      },
      {
        id: 1830,
        cidade: 'Mirabela',
        estado_id: 11
      },
      {
        id: 1831,
        cidade: 'Miradouro',
        estado_id: 11
      },
      {
        id: 1832,
        cidade: 'Miraí',
        estado_id: 11
      },
      {
        id: 1833,
        cidade: 'Miravânia',
        estado_id: 11
      },
      {
        id: 1834,
        cidade: 'Moeda',
        estado_id: 11
      },
      {
        id: 1835,
        cidade: 'Moema',
        estado_id: 11
      },
      {
        id: 1836,
        cidade: 'Monjolos',
        estado_id: 11
      },
      {
        id: 1837,
        cidade: 'Monsenhor Paulo',
        estado_id: 11
      },
      {
        id: 1838,
        cidade: 'Montalvânia',
        estado_id: 11
      },
      {
        id: 1839,
        cidade: 'Monte Alegre de Minas',
        estado_id: 11
      },
      {
        id: 1840,
        cidade: 'Monte Azul',
        estado_id: 11
      },
      {
        id: 1841,
        cidade: 'Monte Belo',
        estado_id: 11
      },
      {
        id: 1842,
        cidade: 'Monte Carmelo',
        estado_id: 11
      },
      {
        id: 1843,
        cidade: 'Monte Formoso',
        estado_id: 11
      },
      {
        id: 1844,
        cidade: 'Monte Santo de Minas',
        estado_id: 11
      },
      {
        id: 1845,
        cidade: 'Montes Claros',
        estado_id: 11
      },
      {
        id: 1846,
        cidade: 'Monte Sião',
        estado_id: 11
      },
      {
        id: 1847,
        cidade: 'Montezuma',
        estado_id: 11
      },
      {
        id: 1848,
        cidade: 'Morada Nova de Minas',
        estado_id: 11
      },
      {
        id: 1849,
        cidade: 'Morro da Garça',
        estado_id: 11
      },
      {
        id: 1850,
        cidade: 'Morro do Pilar',
        estado_id: 11
      },
      {
        id: 1851,
        cidade: 'Munhoz',
        estado_id: 11
      },
      {
        id: 1852,
        cidade: 'Muriaé',
        estado_id: 11
      },
      {
        id: 1853,
        cidade: 'Mutum',
        estado_id: 11
      },
      {
        id: 1854,
        cidade: 'Muzambinho',
        estado_id: 11
      },
      {
        id: 1855,
        cidade: 'Nacip Raydan',
        estado_id: 11
      },
      {
        id: 1856,
        cidade: 'Nanuque',
        estado_id: 11
      },
      {
        id: 1857,
        cidade: 'Naque',
        estado_id: 11
      },
      {
        id: 1858,
        cidade: 'Natalândia',
        estado_id: 11
      },
      {
        id: 1859,
        cidade: 'Natércia',
        estado_id: 11
      },
      {
        id: 1860,
        cidade: 'Nazareno',
        estado_id: 11
      },
      {
        id: 1861,
        cidade: 'Nepomuceno',
        estado_id: 11
      },
      {
        id: 1862,
        cidade: 'Ninheira',
        estado_id: 11
      },
      {
        id: 1863,
        cidade: 'Nova Belém',
        estado_id: 11
      },
      {
        id: 1864,
        cidade: 'Nova Era',
        estado_id: 11
      },
      {
        id: 1865,
        cidade: 'Nova Lima',
        estado_id: 11
      },
      {
        id: 1866,
        cidade: 'Nova Módica',
        estado_id: 11
      },
      {
        id: 1867,
        cidade: 'Nova Ponte',
        estado_id: 11
      },
      {
        id: 1868,
        cidade: 'Nova Porteirinha',
        estado_id: 11
      },
      {
        id: 1869,
        cidade: 'Nova Resende',
        estado_id: 11
      },
      {
        id: 1870,
        cidade: 'Nova Serrana',
        estado_id: 11
      },
      {
        id: 1871,
        cidade: 'Novo Cruzeiro',
        estado_id: 11
      },
      {
        id: 1872,
        cidade: 'Novo Oriente de Minas',
        estado_id: 11
      },
      {
        id: 1873,
        cidade: 'Novorizonte',
        estado_id: 11
      },
      {
        id: 1874,
        cidade: 'Olaria',
        estado_id: 11
      },
      {
        id: 1875,
        cidade: 'Olhos-d´água',
        estado_id: 11
      },
      {
        id: 1876,
        cidade: 'Olímpio Noronha',
        estado_id: 11
      },
      {
        id: 1877,
        cidade: 'Oliveira',
        estado_id: 11
      },
      {
        id: 1878,
        cidade: 'Oliveira Fortes',
        estado_id: 11
      },
      {
        id: 1879,
        cidade: 'Onça de Pitangui',
        estado_id: 11
      },
      {
        id: 1880,
        cidade: 'Oratórios',
        estado_id: 11
      },
      {
        id: 1881,
        cidade: 'Orizânia',
        estado_id: 11
      },
      {
        id: 1882,
        cidade: 'Ouro Branco',
        estado_id: 11
      },
      {
        id: 1883,
        cidade: 'Ouro Fino',
        estado_id: 11
      },
      {
        id: 1884,
        cidade: 'Ouro Preto',
        estado_id: 11
      },
      {
        id: 1885,
        cidade: 'Ouro Verde de Minas',
        estado_id: 11
      },
      {
        id: 1886,
        cidade: 'Padre Carvalho',
        estado_id: 11
      },
      {
        id: 1887,
        cidade: 'Padre Paraíso',
        estado_id: 11
      },
      {
        id: 1888,
        cidade: 'Paineiras',
        estado_id: 11
      },
      {
        id: 1889,
        cidade: 'Pains',
        estado_id: 11
      },
      {
        id: 1890,
        cidade: 'Pai Pedro',
        estado_id: 11
      },
      {
        id: 1891,
        cidade: 'Paiva',
        estado_id: 11
      },
      {
        id: 1892,
        cidade: 'Palma',
        estado_id: 11
      },
      {
        id: 1893,
        cidade: 'Palmópolis',
        estado_id: 11
      },
      {
        id: 1894,
        cidade: 'Papagaios',
        estado_id: 11
      },
      {
        id: 1895,
        cidade: 'Paracatu',
        estado_id: 11
      },
      {
        id: 1896,
        cidade: 'Pará de Minas',
        estado_id: 11
      },
      {
        id: 1897,
        cidade: 'Paraguaçu',
        estado_id: 11
      },
      {
        id: 1898,
        cidade: 'Paraisópolis',
        estado_id: 11
      },
      {
        id: 1899,
        cidade: 'Paraopeba',
        estado_id: 11
      },
      {
        id: 1900,
        cidade: 'Passabém',
        estado_id: 11
      },
      {
        id: 1901,
        cidade: 'Passa Quatro',
        estado_id: 11
      },
      {
        id: 1902,
        cidade: 'Passa Tempo',
        estado_id: 11
      },
      {
        id: 1903,
        cidade: 'Passa-vinte',
        estado_id: 11
      },
      {
        id: 1904,
        cidade: 'Passos',
        estado_id: 11
      },
      {
        id: 1905,
        cidade: 'Patis',
        estado_id: 11
      },
      {
        id: 1906,
        cidade: 'Patos de Minas',
        estado_id: 11
      },
      {
        id: 1907,
        cidade: 'Patrocínio',
        estado_id: 11
      },
      {
        id: 1908,
        cidade: 'Patrocínio do Muriaé',
        estado_id: 11
      },
      {
        id: 1909,
        cidade: 'Paula Cândido',
        estado_id: 11
      },
      {
        id: 1910,
        cidade: 'Paulistas',
        estado_id: 11
      },
      {
        id: 1911,
        cidade: 'Pavão',
        estado_id: 11
      },
      {
        id: 1912,
        cidade: 'Peçanha',
        estado_id: 11
      },
      {
        id: 1913,
        cidade: 'Pedra Azul',
        estado_id: 11
      },
      {
        id: 1914,
        cidade: 'Pedra Bonita',
        estado_id: 11
      },
      {
        id: 1915,
        cidade: 'Pedra do Anta',
        estado_id: 11
      },
      {
        id: 1916,
        cidade: 'Pedra do Indaiá',
        estado_id: 11
      },
      {
        id: 1917,
        cidade: 'Pedra Dourada',
        estado_id: 11
      },
      {
        id: 1918,
        cidade: 'Pedralva',
        estado_id: 11
      },
      {
        id: 1919,
        cidade: 'Pedras de Maria da Cruz',
        estado_id: 11
      },
      {
        id: 1920,
        cidade: 'Pedrinópolis',
        estado_id: 11
      },
      {
        id: 1921,
        cidade: 'Pedro Leopoldo',
        estado_id: 11
      },
      {
        id: 1922,
        cidade: 'Pedro Teixeira',
        estado_id: 11
      },
      {
        id: 1923,
        cidade: 'Pequeri',
        estado_id: 11
      },
      {
        id: 1924,
        cidade: 'Pequi',
        estado_id: 11
      },
      {
        id: 1925,
        cidade: 'Perdigão',
        estado_id: 11
      },
      {
        id: 1926,
        cidade: 'Perdizes',
        estado_id: 11
      },
      {
        id: 1927,
        cidade: 'Perdões',
        estado_id: 11
      },
      {
        id: 1928,
        cidade: 'Periquito',
        estado_id: 11
      },
      {
        id: 1929,
        cidade: 'Pescador',
        estado_id: 11
      },
      {
        id: 1930,
        cidade: 'Piau',
        estado_id: 11
      },
      {
        id: 1931,
        cidade: 'Piedade de Caratinga',
        estado_id: 11
      },
      {
        id: 1932,
        cidade: 'Piedade de Ponte Nova',
        estado_id: 11
      },
      {
        id: 1933,
        cidade: 'Piedade do Rio Grande',
        estado_id: 11
      },
      {
        id: 1934,
        cidade: 'Piedade Dos Gerais',
        estado_id: 11
      },
      {
        id: 1935,
        cidade: 'Pimenta',
        estado_id: 11
      },
      {
        id: 1936,
        cidade: 'Pingo-d´água',
        estado_id: 11
      },
      {
        id: 1937,
        cidade: 'Pintópolis',
        estado_id: 11
      },
      {
        id: 1938,
        cidade: 'Piracema',
        estado_id: 11
      },
      {
        id: 1939,
        cidade: 'Pirajuba',
        estado_id: 11
      },
      {
        id: 1940,
        cidade: 'Piranga',
        estado_id: 11
      },
      {
        id: 1941,
        cidade: 'Piranguçu',
        estado_id: 11
      },
      {
        id: 1942,
        cidade: 'Piranguinho',
        estado_id: 11
      },
      {
        id: 1943,
        cidade: 'Pirapetinga',
        estado_id: 11
      },
      {
        id: 1944,
        cidade: 'Pirapora',
        estado_id: 11
      },
      {
        id: 1945,
        cidade: 'Piraúba',
        estado_id: 11
      },
      {
        id: 1946,
        cidade: 'Pitangui',
        estado_id: 11
      },
      {
        id: 1947,
        cidade: 'Piumhi',
        estado_id: 11
      },
      {
        id: 1948,
        cidade: 'Planura',
        estado_id: 11
      },
      {
        id: 1949,
        cidade: 'Poço Fundo',
        estado_id: 11
      },
      {
        id: 1950,
        cidade: 'Poços de Caldas',
        estado_id: 11
      },
      {
        id: 1951,
        cidade: 'Pocrane',
        estado_id: 11
      },
      {
        id: 1952,
        cidade: 'Pompéu',
        estado_id: 11
      },
      {
        id: 1953,
        cidade: 'Ponte Nova',
        estado_id: 11
      },
      {
        id: 1954,
        cidade: 'Ponto Chique',
        estado_id: 11
      },
      {
        id: 1955,
        cidade: 'Ponto Dos Volantes',
        estado_id: 11
      },
      {
        id: 1956,
        cidade: 'Porteirinha',
        estado_id: 11
      },
      {
        id: 1957,
        cidade: 'Porto Firme',
        estado_id: 11
      },
      {
        id: 1958,
        cidade: 'Poté',
        estado_id: 11
      },
      {
        id: 1959,
        cidade: 'Pouso Alegre',
        estado_id: 11
      },
      {
        id: 1960,
        cidade: 'Pouso Alto',
        estado_id: 11
      },
      {
        id: 1961,
        cidade: 'Prados',
        estado_id: 11
      },
      {
        id: 1962,
        cidade: 'Prata',
        estado_id: 11
      },
      {
        id: 1963,
        cidade: 'Pratápolis',
        estado_id: 11
      },
      {
        id: 1964,
        cidade: 'Pratinha',
        estado_id: 11
      },
      {
        id: 1965,
        cidade: 'Presidente Bernardes',
        estado_id: 11
      },
      {
        id: 1966,
        cidade: 'Presidente Juscelino',
        estado_id: 11
      },
      {
        id: 1967,
        cidade: 'Presidente Kubitschek',
        estado_id: 11
      },
      {
        id: 1968,
        cidade: 'Presidente Olegário',
        estado_id: 11
      },
      {
        id: 1969,
        cidade: 'Alto Jequitibá',
        estado_id: 11
      },
      {
        id: 1970,
        cidade: 'Prudente de Morais',
        estado_id: 11
      },
      {
        id: 1971,
        cidade: 'Quartel Geral',
        estado_id: 11
      },
      {
        id: 1972,
        cidade: 'Queluzito',
        estado_id: 11
      },
      {
        id: 1973,
        cidade: 'Raposos',
        estado_id: 11
      },
      {
        id: 1974,
        cidade: 'Raul Soares',
        estado_id: 11
      },
      {
        id: 1975,
        cidade: 'Recreio',
        estado_id: 11
      },
      {
        id: 1976,
        cidade: 'Reduto',
        estado_id: 11
      },
      {
        id: 1977,
        cidade: 'Resende Costa',
        estado_id: 11
      },
      {
        id: 1978,
        cidade: 'Resplendor',
        estado_id: 11
      },
      {
        id: 1979,
        cidade: 'Ressaquinha',
        estado_id: 11
      },
      {
        id: 1980,
        cidade: 'Riachinho',
        estado_id: 11
      },
      {
        id: 1981,
        cidade: 'Riacho Dos Machados',
        estado_id: 11
      },
      {
        id: 1982,
        cidade: 'Ribeirão Das Neves',
        estado_id: 11
      },
      {
        id: 1983,
        cidade: 'Ribeirão Vermelho',
        estado_id: 11
      },
      {
        id: 1984,
        cidade: 'Rio Acima',
        estado_id: 11
      },
      {
        id: 1985,
        cidade: 'Rio Casca',
        estado_id: 11
      },
      {
        id: 1986,
        cidade: 'Rio Doce',
        estado_id: 11
      },
      {
        id: 1987,
        cidade: 'Rio do Prado',
        estado_id: 11
      },
      {
        id: 1988,
        cidade: 'Rio Espera',
        estado_id: 11
      },
      {
        id: 1989,
        cidade: 'Rio Manso',
        estado_id: 11
      },
      {
        id: 1990,
        cidade: 'Rio Novo',
        estado_id: 11
      },
      {
        id: 1991,
        cidade: 'Rio Paranaíba',
        estado_id: 11
      },
      {
        id: 1992,
        cidade: 'Rio Pardo de Minas',
        estado_id: 11
      },
      {
        id: 1993,
        cidade: 'Rio Piracicaba',
        estado_id: 11
      },
      {
        id: 1994,
        cidade: 'Rio Pomba',
        estado_id: 11
      },
      {
        id: 1995,
        cidade: 'Rio Preto',
        estado_id: 11
      },
      {
        id: 1996,
        cidade: 'Rio Vermelho',
        estado_id: 11
      },
      {
        id: 1997,
        cidade: 'Ritápolis',
        estado_id: 11
      },
      {
        id: 1998,
        cidade: 'Rochedo de Minas',
        estado_id: 11
      },
      {
        id: 1999,
        cidade: 'Rodeiro',
        estado_id: 11
      },
      {
        id: 2000,
        cidade: 'Romaria',
        estado_id: 11
      },
      {
        id: 2001,
        cidade: 'Rosário da Limeira',
        estado_id: 11
      },
      {
        id: 2002,
        cidade: 'Rubelita',
        estado_id: 11
      },
      {
        id: 2003,
        cidade: 'Rubim',
        estado_id: 11
      },
      {
        id: 2004,
        cidade: 'Sabará',
        estado_id: 11
      },
      {
        id: 2005,
        cidade: 'Sabinópolis',
        estado_id: 11
      },
      {
        id: 2006,
        cidade: 'Sacramento',
        estado_id: 11
      },
      {
        id: 2007,
        cidade: 'Salinas',
        estado_id: 11
      },
      {
        id: 2008,
        cidade: 'Salto da Divisa',
        estado_id: 11
      },
      {
        id: 2009,
        cidade: 'Santa Bárbara',
        estado_id: 11
      },
      {
        id: 2010,
        cidade: 'Santa Bárbara do Leste',
        estado_id: 11
      },
      {
        id: 2011,
        cidade: 'Santa Bárbara do Monte Verde',
        estado_id: 11
      },
      {
        id: 2012,
        cidade: 'Santa Bárbara do Tugúrio',
        estado_id: 11
      },
      {
        id: 2013,
        cidade: 'Santa Cruz de Minas',
        estado_id: 11
      },
      {
        id: 2014,
        cidade: 'Santa Cruz de Salinas',
        estado_id: 11
      },
      {
        id: 2015,
        cidade: 'Santa Cruz do Escalvado',
        estado_id: 11
      },
      {
        id: 2016,
        cidade: 'Santa Efigênia de Minas',
        estado_id: 11
      },
      {
        id: 2017,
        cidade: 'Santa fé de Minas',
        estado_id: 11
      },
      {
        id: 2018,
        cidade: 'Santa Helena de Minas',
        estado_id: 11
      },
      {
        id: 2019,
        cidade: 'Santa Juliana',
        estado_id: 11
      },
      {
        id: 2020,
        cidade: 'Santa Luzia',
        estado_id: 11
      },
      {
        id: 2021,
        cidade: 'Santa Margarida',
        estado_id: 11
      },
      {
        id: 2022,
        cidade: 'Santa Maria de Itabira',
        estado_id: 11
      },
      {
        id: 2023,
        cidade: 'Santa Maria do Salto',
        estado_id: 11
      },
      {
        id: 2024,
        cidade: 'Santa Maria do Suaçuí',
        estado_id: 11
      },
      {
        id: 2025,
        cidade: 'Santana da Vargem',
        estado_id: 11
      },
      {
        id: 2026,
        cidade: 'Santana de Cataguases',
        estado_id: 11
      },
      {
        id: 2027,
        cidade: 'Santana de Pirapama',
        estado_id: 11
      },
      {
        id: 2028,
        cidade: 'Santana do Deserto',
        estado_id: 11
      },
      {
        id: 2029,
        cidade: 'Santana do Garambéu',
        estado_id: 11
      },
      {
        id: 2030,
        cidade: 'Santana do Jacaré',
        estado_id: 11
      },
      {
        id: 2031,
        cidade: 'Santana do Manhuaçu',
        estado_id: 11
      },
      {
        id: 2032,
        cidade: 'Santana do Paraíso',
        estado_id: 11
      },
      {
        id: 2033,
        cidade: 'Santana do Riacho',
        estado_id: 11
      },
      {
        id: 2034,
        cidade: 'Santana Dos Montes',
        estado_id: 11
      },
      {
        id: 2035,
        cidade: 'Santa Rita de Caldas',
        estado_id: 11
      },
      {
        id: 2036,
        cidade: 'Santa Rita de Jacutinga',
        estado_id: 11
      },
      {
        id: 2037,
        cidade: 'Santa Rita de Minas',
        estado_id: 11
      },
      {
        id: 2038,
        cidade: 'Santa Rita de Ibitipoca',
        estado_id: 11
      },
      {
        id: 2039,
        cidade: 'Santa Rita do Itueto',
        estado_id: 11
      },
      {
        id: 2040,
        cidade: 'Santa Rita do Sapucaí',
        estado_id: 11
      },
      {
        id: 2041,
        cidade: 'Santa Rosa da Serra',
        estado_id: 11
      },
      {
        id: 2042,
        cidade: 'Santa Vitória',
        estado_id: 11
      },
      {
        id: 2043,
        cidade: 'Santo Antônio do Amparo',
        estado_id: 11
      },
      {
        id: 2044,
        cidade: 'Santo Antônio do Aventureiro',
        estado_id: 11
      },
      {
        id: 2045,
        cidade: 'Santo Antônio do Grama',
        estado_id: 11
      },
      {
        id: 2046,
        cidade: 'Santo Antônio do Itambé',
        estado_id: 11
      },
      {
        id: 2047,
        cidade: 'Santo Antônio do Jacinto',
        estado_id: 11
      },
      {
        id: 2048,
        cidade: 'Santo Antônio do Monte',
        estado_id: 11
      },
      {
        id: 2049,
        cidade: 'Santo Antônio do Retiro',
        estado_id: 11
      },
      {
        id: 2050,
        cidade: 'Santo Antônio do Rio Abaixo',
        estado_id: 11
      },
      {
        id: 2051,
        cidade: 'Santo Hipólito',
        estado_id: 11
      },
      {
        id: 2052,
        cidade: 'Santos Dumont',
        estado_id: 11
      },
      {
        id: 2053,
        cidade: 'São Bento Abade',
        estado_id: 11
      },
      {
        id: 2054,
        cidade: 'São Brás do Suaçuí',
        estado_id: 11
      },
      {
        id: 2055,
        cidade: 'São Domingos Das Dores',
        estado_id: 11
      },
      {
        id: 2056,
        cidade: 'São Domingos do Prata',
        estado_id: 11
      },
      {
        id: 2057,
        cidade: 'São Félix de Minas',
        estado_id: 11
      },
      {
        id: 2058,
        cidade: 'São Francisco',
        estado_id: 11
      },
      {
        id: 2059,
        cidade: 'São Francisco de Paula',
        estado_id: 11
      },
      {
        id: 2060,
        cidade: 'São Francisco de Sales',
        estado_id: 11
      },
      {
        id: 2061,
        cidade: 'São Francisco do Glória',
        estado_id: 11
      },
      {
        id: 2062,
        cidade: 'São Geraldo',
        estado_id: 11
      },
      {
        id: 2063,
        cidade: 'São Geraldo da Piedade',
        estado_id: 11
      },
      {
        id: 2064,
        cidade: 'São Geraldo do Baixio',
        estado_id: 11
      },
      {
        id: 2065,
        cidade: 'São Gonçalo do Abaeté',
        estado_id: 11
      },
      {
        id: 2066,
        cidade: 'São Gonçalo do Pará',
        estado_id: 11
      },
      {
        id: 2067,
        cidade: 'São Gonçalo do Rio Abaixo',
        estado_id: 11
      },
      {
        id: 2068,
        cidade: 'São Gonçalo do Sapucaí',
        estado_id: 11
      },
      {
        id: 2069,
        cidade: 'São Gotardo',
        estado_id: 11
      },
      {
        id: 2070,
        cidade: 'São João Batista do Glória',
        estado_id: 11
      },
      {
        id: 2071,
        cidade: 'São João da Lagoa',
        estado_id: 11
      },
      {
        id: 2072,
        cidade: 'São João da Mata',
        estado_id: 11
      },
      {
        id: 2073,
        cidade: 'São João da Ponte',
        estado_id: 11
      },
      {
        id: 2074,
        cidade: 'São João Das Missões',
        estado_id: 11
      },
      {
        id: 2075,
        cidade: 'São João Del Rei',
        estado_id: 11
      },
      {
        id: 2076,
        cidade: 'São João do Manhuaçu',
        estado_id: 11
      },
      {
        id: 2077,
        cidade: 'São João do Manteninha',
        estado_id: 11
      },
      {
        id: 2078,
        cidade: 'São João do Oriente',
        estado_id: 11
      },
      {
        id: 2079,
        cidade: 'São João do Pacuí',
        estado_id: 11
      },
      {
        id: 2080,
        cidade: 'São João do Paraíso',
        estado_id: 11
      },
      {
        id: 2081,
        cidade: 'São João Evangelista',
        estado_id: 11
      },
      {
        id: 2082,
        cidade: 'São João Nepomuceno',
        estado_id: 11
      },
      {
        id: 2083,
        cidade: 'São Joaquim de Bicas',
        estado_id: 11
      },
      {
        id: 2084,
        cidade: 'São José da Barra',
        estado_id: 11
      },
      {
        id: 2085,
        cidade: 'São José da Lapa',
        estado_id: 11
      },
      {
        id: 2086,
        cidade: 'São José da Safira',
        estado_id: 11
      },
      {
        id: 2087,
        cidade: 'São José da Varginha',
        estado_id: 11
      },
      {
        id: 2088,
        cidade: 'São José do Alegre',
        estado_id: 11
      },
      {
        id: 2089,
        cidade: 'São José do Divino',
        estado_id: 11
      },
      {
        id: 2090,
        cidade: 'São José do Goiabal',
        estado_id: 11
      },
      {
        id: 2091,
        cidade: 'São José do Jacuri',
        estado_id: 11
      },
      {
        id: 2092,
        cidade: 'São José do Mantimento',
        estado_id: 11
      },
      {
        id: 2093,
        cidade: 'São Lourenço',
        estado_id: 11
      },
      {
        id: 2094,
        cidade: 'São Miguel do Anta',
        estado_id: 11
      },
      {
        id: 2095,
        cidade: 'São Pedro da União',
        estado_id: 11
      },
      {
        id: 2096,
        cidade: 'São Pedro Dos Ferros',
        estado_id: 11
      },
      {
        id: 2097,
        cidade: 'São Pedro do Suaçuí',
        estado_id: 11
      },
      {
        id: 2098,
        cidade: 'São Romão',
        estado_id: 11
      },
      {
        id: 2099,
        cidade: 'São Roque de Minas',
        estado_id: 11
      },
      {
        id: 2100,
        cidade: 'São Sebastião da Bela Vista',
        estado_id: 11
      },
      {
        id: 2101,
        cidade: 'São Sebastião da Vargem Alegre',
        estado_id: 11
      },
      {
        id: 2102,
        cidade: 'São Sebastião do Anta',
        estado_id: 11
      },
      {
        id: 2103,
        cidade: 'São Sebastião do Maranhão',
        estado_id: 11
      },
      {
        id: 2104,
        cidade: 'São Sebastião do Oeste',
        estado_id: 11
      },
      {
        id: 2105,
        cidade: 'São Sebastião do Paraíso',
        estado_id: 11
      },
      {
        id: 2106,
        cidade: 'São Sebastião do Rio Preto',
        estado_id: 11
      },
      {
        id: 2107,
        cidade: 'São Sebastião do Rio Verde',
        estado_id: 11
      },
      {
        id: 2108,
        cidade: 'São Tiago',
        estado_id: 11
      },
      {
        id: 2109,
        cidade: 'São Tomás de Aquino',
        estado_id: 11
      },
      {
        id: 2110,
        cidade: 'São Thomé Das Letras',
        estado_id: 11
      },
      {
        id: 2111,
        cidade: 'São Vicente de Minas',
        estado_id: 11
      },
      {
        id: 2112,
        cidade: 'Sapucaí-mirim',
        estado_id: 11
      },
      {
        id: 2113,
        cidade: 'Sardoá',
        estado_id: 11
      },
      {
        id: 2114,
        cidade: 'Sarzedo',
        estado_id: 11
      },
      {
        id: 2115,
        cidade: 'Setubinha',
        estado_id: 11
      },
      {
        id: 2116,
        cidade: 'Sem-peixe',
        estado_id: 11
      },
      {
        id: 2117,
        cidade: 'Senador Amaral',
        estado_id: 11
      },
      {
        id: 2118,
        cidade: 'Senador Cortes',
        estado_id: 11
      },
      {
        id: 2119,
        cidade: 'Senador Firmino',
        estado_id: 11
      },
      {
        id: 2120,
        cidade: 'Senador José Bento',
        estado_id: 11
      },
      {
        id: 2121,
        cidade: 'Senador Modestino Gonçalves',
        estado_id: 11
      },
      {
        id: 2122,
        cidade: 'Senhora de Oliveira',
        estado_id: 11
      },
      {
        id: 2123,
        cidade: 'Senhora do Porto',
        estado_id: 11
      },
      {
        id: 2124,
        cidade: 'Senhora Dos Remédios',
        estado_id: 11
      },
      {
        id: 2125,
        cidade: 'Sericita',
        estado_id: 11
      },
      {
        id: 2126,
        cidade: 'Seritinga',
        estado_id: 11
      },
      {
        id: 2127,
        cidade: 'Serra Azul de Minas',
        estado_id: 11
      },
      {
        id: 2128,
        cidade: 'Serra da Saudade',
        estado_id: 11
      },
      {
        id: 2129,
        cidade: 'Serra Dos Aimorés',
        estado_id: 11
      },
      {
        id: 2130,
        cidade: 'Serra do Salitre',
        estado_id: 11
      },
      {
        id: 2131,
        cidade: 'Serrania',
        estado_id: 11
      },
      {
        id: 2132,
        cidade: 'Serranópolis de Minas',
        estado_id: 11
      },
      {
        id: 2133,
        cidade: 'Serranos',
        estado_id: 11
      },
      {
        id: 2134,
        cidade: 'Serro',
        estado_id: 11
      },
      {
        id: 2135,
        cidade: 'Sete Lagoas',
        estado_id: 11
      },
      {
        id: 2136,
        cidade: 'Silveirânia',
        estado_id: 11
      },
      {
        id: 2137,
        cidade: 'Silvianópolis',
        estado_id: 11
      },
      {
        id: 2138,
        cidade: 'Simão Pereira',
        estado_id: 11
      },
      {
        id: 2139,
        cidade: 'Simonésia',
        estado_id: 11
      },
      {
        id: 2140,
        cidade: 'Sobrália',
        estado_id: 11
      },
      {
        id: 2141,
        cidade: 'Soledade de Minas',
        estado_id: 11
      },
      {
        id: 2142,
        cidade: 'Tabuleiro',
        estado_id: 11
      },
      {
        id: 2143,
        cidade: 'Taiobeiras',
        estado_id: 11
      },
      {
        id: 2144,
        cidade: 'Taparuba',
        estado_id: 11
      },
      {
        id: 2145,
        cidade: 'Tapira',
        estado_id: 11
      },
      {
        id: 2146,
        cidade: 'Tapiraí',
        estado_id: 11
      },
      {
        id: 2147,
        cidade: 'Taquaraçu de Minas',
        estado_id: 11
      },
      {
        id: 2148,
        cidade: 'Tarumirim',
        estado_id: 11
      },
      {
        id: 2149,
        cidade: 'Teixeiras',
        estado_id: 11
      },
      {
        id: 2150,
        cidade: 'Teófilo Otoni',
        estado_id: 11
      },
      {
        id: 2151,
        cidade: 'Timóteo',
        estado_id: 11
      },
      {
        id: 2152,
        cidade: 'Tiradentes',
        estado_id: 11
      },
      {
        id: 2153,
        cidade: 'Tiros',
        estado_id: 11
      },
      {
        id: 2154,
        cidade: 'Tocantins',
        estado_id: 11
      },
      {
        id: 2155,
        cidade: 'Tocos do Moji',
        estado_id: 11
      },
      {
        id: 2156,
        cidade: 'Toledo',
        estado_id: 11
      },
      {
        id: 2157,
        cidade: 'Tombos',
        estado_id: 11
      },
      {
        id: 2158,
        cidade: 'Três Corações',
        estado_id: 11
      },
      {
        id: 2159,
        cidade: 'Três Marias',
        estado_id: 11
      },
      {
        id: 2160,
        cidade: 'Três Pontas',
        estado_id: 11
      },
      {
        id: 2161,
        cidade: 'Tumiritinga',
        estado_id: 11
      },
      {
        id: 2162,
        cidade: 'Tupaciguara',
        estado_id: 11
      },
      {
        id: 2163,
        cidade: 'Turmalina',
        estado_id: 11
      },
      {
        id: 2164,
        cidade: 'Turvolândia',
        estado_id: 11
      },
      {
        id: 2165,
        cidade: 'Ubá',
        estado_id: 11
      },
      {
        id: 2166,
        cidade: 'Ubaí',
        estado_id: 11
      },
      {
        id: 2167,
        cidade: 'Ubaporanga',
        estado_id: 11
      },
      {
        id: 2168,
        cidade: 'Uberaba',
        estado_id: 11
      },
      {
        id: 2169,
        cidade: 'Uberlândia',
        estado_id: 11
      },
      {
        id: 2170,
        cidade: 'Umburatiba',
        estado_id: 11
      },
      {
        id: 2171,
        cidade: 'Unaí',
        estado_id: 11
      },
      {
        id: 2172,
        cidade: 'União de Minas',
        estado_id: 11
      },
      {
        id: 2173,
        cidade: 'Uruana de Minas',
        estado_id: 11
      },
      {
        id: 2174,
        cidade: 'Urucânia',
        estado_id: 11
      },
      {
        id: 2175,
        cidade: 'Urucuia',
        estado_id: 11
      },
      {
        id: 2176,
        cidade: 'Vargem Alegre',
        estado_id: 11
      },
      {
        id: 2177,
        cidade: 'Vargem Bonita',
        estado_id: 11
      },
      {
        id: 2178,
        cidade: 'Vargem Grande do Rio Pardo',
        estado_id: 11
      },
      {
        id: 2179,
        cidade: 'Varginha',
        estado_id: 11
      },
      {
        id: 2180,
        cidade: 'Varjão de Minas',
        estado_id: 11
      },
      {
        id: 2181,
        cidade: 'Várzea da Palma',
        estado_id: 11
      },
      {
        id: 2182,
        cidade: 'Varzelândia',
        estado_id: 11
      },
      {
        id: 2183,
        cidade: 'Vazante',
        estado_id: 11
      },
      {
        id: 2184,
        cidade: 'Verdelândia',
        estado_id: 11
      },
      {
        id: 2185,
        cidade: 'Veredinha',
        estado_id: 11
      },
      {
        id: 2186,
        cidade: 'Veríssimo',
        estado_id: 11
      },
      {
        id: 2187,
        cidade: 'Vermelho Novo',
        estado_id: 11
      },
      {
        id: 2188,
        cidade: 'Vespasiano',
        estado_id: 11
      },
      {
        id: 2189,
        cidade: 'Viçosa',
        estado_id: 11
      },
      {
        id: 2190,
        cidade: 'Vieiras',
        estado_id: 11
      },
      {
        id: 2191,
        cidade: 'Mathias Lobato',
        estado_id: 11
      },
      {
        id: 2192,
        cidade: 'Virgem da Lapa',
        estado_id: 11
      },
      {
        id: 2193,
        cidade: 'Virgínia',
        estado_id: 11
      },
      {
        id: 2194,
        cidade: 'Virginópolis',
        estado_id: 11
      },
      {
        id: 2195,
        cidade: 'Virgolândia',
        estado_id: 11
      },
      {
        id: 2196,
        cidade: 'Visconde do Rio Branco',
        estado_id: 11
      },
      {
        id: 2197,
        cidade: 'Volta Grande',
        estado_id: 11
      },
      {
        id: 2198,
        cidade: 'Wenceslau Braz',
        estado_id: 11
      },
      {
        id: 2199,
        cidade: 'Água Clara',
        estado_id: 12
      },
      {
        id: 2200,
        cidade: 'Alcinópolis',
        estado_id: 12
      },
      {
        id: 2201,
        cidade: 'Amambaí',
        estado_id: 12
      },
      {
        id: 2202,
        cidade: 'Anastácio',
        estado_id: 12
      },
      {
        id: 2203,
        cidade: 'Anaurilândia',
        estado_id: 12
      },
      {
        id: 2204,
        cidade: 'Angélica',
        estado_id: 12
      },
      {
        id: 2205,
        cidade: 'Antônio João',
        estado_id: 12
      },
      {
        id: 2206,
        cidade: 'Aparecida do Taboado',
        estado_id: 12
      },
      {
        id: 2207,
        cidade: 'Aquidauana',
        estado_id: 12
      },
      {
        id: 2208,
        cidade: 'Aral Moreira',
        estado_id: 12
      },
      {
        id: 2209,
        cidade: 'Bandeirantes',
        estado_id: 12
      },
      {
        id: 2210,
        cidade: 'Bataguassu',
        estado_id: 12
      },
      {
        id: 2211,
        cidade: 'Batayporã',
        estado_id: 12
      },
      {
        id: 2212,
        cidade: 'Bela Vista',
        estado_id: 12
      },
      {
        id: 2213,
        cidade: 'Bodoquena',
        estado_id: 12
      },
      {
        id: 2214,
        cidade: 'Bonito',
        estado_id: 12
      },
      {
        id: 2215,
        cidade: 'Brasilândia',
        estado_id: 12
      },
      {
        id: 2216,
        cidade: 'Caarapó',
        estado_id: 12
      },
      {
        id: 2217,
        cidade: 'Camapuã',
        estado_id: 12
      },
      {
        id: 2218,
        cidade: 'Campo Grande',
        estado_id: 12
      },
      {
        id: 2219,
        cidade: 'Caracol',
        estado_id: 12
      },
      {
        id: 2220,
        cidade: 'Cassilândia',
        estado_id: 12
      },
      {
        id: 2221,
        cidade: 'Chapadão do Sul',
        estado_id: 12
      },
      {
        id: 2222,
        cidade: 'Corguinho',
        estado_id: 12
      },
      {
        id: 2223,
        cidade: 'Coronel Sapucaia',
        estado_id: 12
      },
      {
        id: 2224,
        cidade: 'Corumbá',
        estado_id: 12
      },
      {
        id: 2225,
        cidade: 'Costa Rica',
        estado_id: 12
      },
      {
        id: 2226,
        cidade: 'Coxim',
        estado_id: 12
      },
      {
        id: 2227,
        cidade: 'Deodápolis',
        estado_id: 12
      },
      {
        id: 2228,
        cidade: 'Dois Irmãos do Buriti',
        estado_id: 12
      },
      {
        id: 2229,
        cidade: 'Douradina',
        estado_id: 12
      },
      {
        id: 2230,
        cidade: 'Dourados',
        estado_id: 12
      },
      {
        id: 2231,
        cidade: 'Eldorado',
        estado_id: 12
      },
      {
        id: 2232,
        cidade: 'Fátima do Sul',
        estado_id: 12
      },
      {
        id: 2233,
        cidade: 'Figueirão',
        estado_id: 12
      },
      {
        id: 2234,
        cidade: 'Glória de Dourados',
        estado_id: 12
      },
      {
        id: 2235,
        cidade: 'Guia Lopes da Laguna',
        estado_id: 12
      },
      {
        id: 2236,
        cidade: 'Iguatemi',
        estado_id: 12
      },
      {
        id: 2237,
        cidade: 'Inocência',
        estado_id: 12
      },
      {
        id: 2238,
        cidade: 'Itaporã',
        estado_id: 12
      },
      {
        id: 2239,
        cidade: 'Itaquiraí',
        estado_id: 12
      },
      {
        id: 2240,
        cidade: 'Ivinhema',
        estado_id: 12
      },
      {
        id: 2241,
        cidade: 'Japorã',
        estado_id: 12
      },
      {
        id: 2242,
        cidade: 'Jaraguari',
        estado_id: 12
      },
      {
        id: 2243,
        cidade: 'Jardim',
        estado_id: 12
      },
      {
        id: 2244,
        cidade: 'Jateí',
        estado_id: 12
      },
      {
        id: 2245,
        cidade: 'Juti',
        estado_id: 12
      },
      {
        id: 2246,
        cidade: 'Ladário',
        estado_id: 12
      },
      {
        id: 2247,
        cidade: 'Laguna Carapã',
        estado_id: 12
      },
      {
        id: 2248,
        cidade: 'Maracaju',
        estado_id: 12
      },
      {
        id: 2249,
        cidade: 'Miranda',
        estado_id: 12
      },
      {
        id: 2250,
        cidade: 'Mundo Novo',
        estado_id: 12
      },
      {
        id: 2251,
        cidade: 'Naviraí',
        estado_id: 12
      },
      {
        id: 2252,
        cidade: 'Nioaque',
        estado_id: 12
      },
      {
        id: 2253,
        cidade: 'Nova Alvorada do Sul',
        estado_id: 12
      },
      {
        id: 2254,
        cidade: 'Nova Andradina',
        estado_id: 12
      },
      {
        id: 2255,
        cidade: 'Novo Horizonte do Sul',
        estado_id: 12
      },
      {
        id: 2256,
        cidade: 'Paraíso das Águas',
        estado_id: 12
      },
      {
        id: 2257,
        cidade: 'Paranaíba',
        estado_id: 12
      },
      {
        id: 2258,
        cidade: 'Paranhos',
        estado_id: 12
      },
      {
        id: 2259,
        cidade: 'Pedro Gomes',
        estado_id: 12
      },
      {
        id: 2260,
        cidade: 'Ponta Porã',
        estado_id: 12
      },
      {
        id: 2261,
        cidade: 'Porto Murtinho',
        estado_id: 12
      },
      {
        id: 2262,
        cidade: 'Ribas do Rio Pardo',
        estado_id: 12
      },
      {
        id: 2263,
        cidade: 'Rio Brilhante',
        estado_id: 12
      },
      {
        id: 2264,
        cidade: 'Rio Negro',
        estado_id: 12
      },
      {
        id: 2265,
        cidade: 'Rio Verde de Mato Grosso',
        estado_id: 12
      },
      {
        id: 2266,
        cidade: 'Rochedo',
        estado_id: 12
      },
      {
        id: 2267,
        cidade: 'Santa Rita do Pardo',
        estado_id: 12
      },
      {
        id: 2268,
        cidade: 'São Gabriel do Oeste',
        estado_id: 12
      },
      {
        id: 2269,
        cidade: 'Sete Quedas',
        estado_id: 12
      },
      {
        id: 2270,
        cidade: 'Selvíria',
        estado_id: 12
      },
      {
        id: 2271,
        cidade: 'Sidrolândia',
        estado_id: 12
      },
      {
        id: 2272,
        cidade: 'Sonora',
        estado_id: 12
      },
      {
        id: 2273,
        cidade: 'Tacuru',
        estado_id: 12
      },
      {
        id: 2274,
        cidade: 'Taquarussu',
        estado_id: 12
      },
      {
        id: 2275,
        cidade: 'Terenos',
        estado_id: 12
      },
      {
        id: 2276,
        cidade: 'Três Lagoas',
        estado_id: 12
      },
      {
        id: 2277,
        cidade: 'Vicentina',
        estado_id: 12
      },
      {
        id: 2278,
        cidade: 'Acorizal',
        estado_id: 13
      },
      {
        id: 2279,
        cidade: 'Água Boa',
        estado_id: 13
      },
      {
        id: 2280,
        cidade: 'Alta Floresta',
        estado_id: 13
      },
      {
        id: 2281,
        cidade: 'Alto Araguaia',
        estado_id: 13
      },
      {
        id: 2282,
        cidade: 'Alto Boa Vista',
        estado_id: 13
      },
      {
        id: 2283,
        cidade: 'Alto Garças',
        estado_id: 13
      },
      {
        id: 2284,
        cidade: 'Alto Paraguai',
        estado_id: 13
      },
      {
        id: 2285,
        cidade: 'Alto Taquari',
        estado_id: 13
      },
      {
        id: 2286,
        cidade: 'Apiacás',
        estado_id: 13
      },
      {
        id: 2287,
        cidade: 'Araguaiana',
        estado_id: 13
      },
      {
        id: 2288,
        cidade: 'Araguainha',
        estado_id: 13
      },
      {
        id: 2289,
        cidade: 'Araputanga',
        estado_id: 13
      },
      {
        id: 2290,
        cidade: 'Arenápolis',
        estado_id: 13
      },
      {
        id: 2291,
        cidade: 'Aripuanã',
        estado_id: 13
      },
      {
        id: 2292,
        cidade: 'Barão de Melgaço',
        estado_id: 13
      },
      {
        id: 2293,
        cidade: 'Barra do Bugres',
        estado_id: 13
      },
      {
        id: 2294,
        cidade: 'Barra do Garças',
        estado_id: 13
      },
      {
        id: 2295,
        cidade: 'Bom Jesus do Araguaia',
        estado_id: 13
      },
      {
        id: 2296,
        cidade: 'Brasnorte',
        estado_id: 13
      },
      {
        id: 2297,
        cidade: 'Cáceres',
        estado_id: 13
      },
      {
        id: 2298,
        cidade: 'Campinápolis',
        estado_id: 13
      },
      {
        id: 2299,
        cidade: 'Campo Novo do Parecis',
        estado_id: 13
      },
      {
        id: 2300,
        cidade: 'Campo Verde',
        estado_id: 13
      },
      {
        id: 2301,
        cidade: 'Campos de Júlio',
        estado_id: 13
      },
      {
        id: 2302,
        cidade: 'Canabrava do Norte',
        estado_id: 13
      },
      {
        id: 2303,
        cidade: 'Canarana',
        estado_id: 13
      },
      {
        id: 2304,
        cidade: 'Carlinda',
        estado_id: 13
      },
      {
        id: 2305,
        cidade: 'Castanheira',
        estado_id: 13
      },
      {
        id: 2306,
        cidade: 'Chapada Dos Guimarães',
        estado_id: 13
      },
      {
        id: 2307,
        cidade: 'Cláudia',
        estado_id: 13
      },
      {
        id: 2308,
        cidade: 'Cocalinho',
        estado_id: 13
      },
      {
        id: 2309,
        cidade: 'Colíder',
        estado_id: 13
      },
      {
        id: 2310,
        cidade: 'Colniza',
        estado_id: 13
      },
      {
        id: 2311,
        cidade: 'Comodoro',
        estado_id: 13
      },
      {
        id: 2312,
        cidade: 'Confresa',
        estado_id: 13
      },
      {
        id: 2313,
        cidade: 'Conquista D´oeste',
        estado_id: 13
      },
      {
        id: 2314,
        cidade: 'Cotriguaçu',
        estado_id: 13
      },
      {
        id: 2315,
        cidade: 'Cuiabá',
        estado_id: 13
      },
      {
        id: 2316,
        cidade: 'Curvelândia',
        estado_id: 13
      },
      {
        id: 2317,
        cidade: 'Denise',
        estado_id: 13
      },
      {
        id: 2318,
        cidade: 'Diamantino',
        estado_id: 13
      },
      {
        id: 2319,
        cidade: 'Dom Aquino',
        estado_id: 13
      },
      {
        id: 2320,
        cidade: 'Feliz Natal',
        estado_id: 13
      },
      {
        id: 2321,
        cidade: 'Figueirópolis D´oeste',
        estado_id: 13
      },
      {
        id: 2322,
        cidade: 'Gaúcha do Norte',
        estado_id: 13
      },
      {
        id: 2323,
        cidade: 'General Carneiro',
        estado_id: 13
      },
      {
        id: 2324,
        cidade: 'Glória D´oeste',
        estado_id: 13
      },
      {
        id: 2325,
        cidade: 'Guarantã do Norte',
        estado_id: 13
      },
      {
        id: 2326,
        cidade: 'Guiratinga',
        estado_id: 13
      },
      {
        id: 2327,
        cidade: 'Indiavaí',
        estado_id: 13
      },
      {
        id: 2328,
        cidade: 'Ipiranga do Norte',
        estado_id: 13
      },
      {
        id: 2329,
        cidade: 'Itanhangá',
        estado_id: 13
      },
      {
        id: 2330,
        cidade: 'Itaúba',
        estado_id: 13
      },
      {
        id: 2331,
        cidade: 'Itiquira',
        estado_id: 13
      },
      {
        id: 2332,
        cidade: 'Jaciara',
        estado_id: 13
      },
      {
        id: 2333,
        cidade: 'Jangada',
        estado_id: 13
      },
      {
        id: 2334,
        cidade: 'Jauru',
        estado_id: 13
      },
      {
        id: 2335,
        cidade: 'Juara',
        estado_id: 13
      },
      {
        id: 2336,
        cidade: 'Juína',
        estado_id: 13
      },
      {
        id: 2337,
        cidade: 'Juruena',
        estado_id: 13
      },
      {
        id: 2338,
        cidade: 'Juscimeira',
        estado_id: 13
      },
      {
        id: 2339,
        cidade: 'Lambari D´oeste',
        estado_id: 13
      },
      {
        id: 2340,
        cidade: 'Lucas do Rio Verde',
        estado_id: 13
      },
      {
        id: 2341,
        cidade: 'Luciára',
        estado_id: 13
      },
      {
        id: 2342,
        cidade: 'Vila Bela da Santíssima Trindade',
        estado_id: 13
      },
      {
        id: 2343,
        cidade: 'Marcelândia',
        estado_id: 13
      },
      {
        id: 2344,
        cidade: 'Matupá',
        estado_id: 13
      },
      {
        id: 2345,
        cidade: 'Mirassol D´oeste',
        estado_id: 13
      },
      {
        id: 2346,
        cidade: 'Nobres',
        estado_id: 13
      },
      {
        id: 2347,
        cidade: 'Nortelândia',
        estado_id: 13
      },
      {
        id: 2348,
        cidade: 'Nossa Senhora do Livramento',
        estado_id: 13
      },
      {
        id: 2349,
        cidade: 'Nova Bandeirantes',
        estado_id: 13
      },
      {
        id: 2350,
        cidade: 'Nova Nazaré',
        estado_id: 13
      },
      {
        id: 2351,
        cidade: 'Nova Lacerda',
        estado_id: 13
      },
      {
        id: 2352,
        cidade: 'Nova Santa Helena',
        estado_id: 13
      },
      {
        id: 2353,
        cidade: 'Nova Brasilândia',
        estado_id: 13
      },
      {
        id: 2354,
        cidade: 'Nova Canaã do Norte',
        estado_id: 13
      },
      {
        id: 2355,
        cidade: 'Nova Mutum',
        estado_id: 13
      },
      {
        id: 2356,
        cidade: 'Nova Olímpia',
        estado_id: 13
      },
      {
        id: 2357,
        cidade: 'Nova Ubiratã',
        estado_id: 13
      },
      {
        id: 2358,
        cidade: 'Nova Xavantina',
        estado_id: 13
      },
      {
        id: 2359,
        cidade: 'Novo Mundo',
        estado_id: 13
      },
      {
        id: 2360,
        cidade: 'Novo Horizonte do Norte',
        estado_id: 13
      },
      {
        id: 2361,
        cidade: 'Novo São Joaquim',
        estado_id: 13
      },
      {
        id: 2362,
        cidade: 'Paranaíta',
        estado_id: 13
      },
      {
        id: 2363,
        cidade: 'Paranatinga',
        estado_id: 13
      },
      {
        id: 2364,
        cidade: 'Novo Santo Antônio',
        estado_id: 13
      },
      {
        id: 2365,
        cidade: 'Pedra Preta',
        estado_id: 13
      },
      {
        id: 2366,
        cidade: 'Peixoto de Azevedo',
        estado_id: 13
      },
      {
        id: 2367,
        cidade: 'Planalto da Serra',
        estado_id: 13
      },
      {
        id: 2368,
        cidade: 'Poconé',
        estado_id: 13
      },
      {
        id: 2369,
        cidade: 'Pontal do Araguaia',
        estado_id: 13
      },
      {
        id: 2370,
        cidade: 'Ponte Branca',
        estado_id: 13
      },
      {
        id: 2371,
        cidade: 'Pontes e Lacerda',
        estado_id: 13
      },
      {
        id: 2372,
        cidade: 'Porto Alegre do Norte',
        estado_id: 13
      },
      {
        id: 2373,
        cidade: 'Porto Dos Gaúchos',
        estado_id: 13
      },
      {
        id: 2374,
        cidade: 'Porto Esperidião',
        estado_id: 13
      },
      {
        id: 2375,
        cidade: 'Porto Estrela',
        estado_id: 13
      },
      {
        id: 2376,
        cidade: 'Poxoréo',
        estado_id: 13
      },
      {
        id: 2377,
        cidade: 'Primavera do Leste',
        estado_id: 13
      },
      {
        id: 2378,
        cidade: 'Querência',
        estado_id: 13
      },
      {
        id: 2379,
        cidade: 'São José Dos Quatro Marcos',
        estado_id: 13
      },
      {
        id: 2380,
        cidade: 'Reserva do Cabaçal',
        estado_id: 13
      },
      {
        id: 2381,
        cidade: 'Ribeirão Cascalheira',
        estado_id: 13
      },
      {
        id: 2382,
        cidade: 'Ribeirãozinho',
        estado_id: 13
      },
      {
        id: 2383,
        cidade: 'Rio Branco',
        estado_id: 13
      },
      {
        id: 2384,
        cidade: 'Santa Carmem',
        estado_id: 13
      },
      {
        id: 2385,
        cidade: 'Santo Afonso',
        estado_id: 13
      },
      {
        id: 2386,
        cidade: 'São José do Povo',
        estado_id: 13
      },
      {
        id: 2387,
        cidade: 'São José do Rio Claro',
        estado_id: 13
      },
      {
        id: 2388,
        cidade: 'São José do Xingu',
        estado_id: 13
      },
      {
        id: 2389,
        cidade: 'São Pedro da Cipa',
        estado_id: 13
      },
      {
        id: 2390,
        cidade: 'Rondolândia',
        estado_id: 13
      },
      {
        id: 2391,
        cidade: 'Rondonópolis',
        estado_id: 13
      },
      {
        id: 2392,
        cidade: 'Rosário Oeste',
        estado_id: 13
      },
      {
        id: 2393,
        cidade: 'Santa Cruz do Xingu',
        estado_id: 13
      },
      {
        id: 2394,
        cidade: 'Salto do Céu',
        estado_id: 13
      },
      {
        id: 2395,
        cidade: 'Santa Rita do Trivelato',
        estado_id: 13
      },
      {
        id: 2396,
        cidade: 'Santa Terezinha',
        estado_id: 13
      },
      {
        id: 2397,
        cidade: 'Santo Antônio do Leste',
        estado_id: 13
      },
      {
        id: 2398,
        cidade: 'Santo Antônio do Leverger',
        estado_id: 13
      },
      {
        id: 2399,
        cidade: 'São Félix do Araguaia',
        estado_id: 13
      },
      {
        id: 2400,
        cidade: 'Sapezal',
        estado_id: 13
      },
      {
        id: 2401,
        cidade: 'Serra Nova Dourada',
        estado_id: 13
      },
      {
        id: 2402,
        cidade: 'Sinop',
        estado_id: 13
      },
      {
        id: 2403,
        cidade: 'Sorriso',
        estado_id: 13
      },
      {
        id: 2404,
        cidade: 'Tabaporã',
        estado_id: 13
      },
      {
        id: 2405,
        cidade: 'Tangará da Serra',
        estado_id: 13
      },
      {
        id: 2406,
        cidade: 'Tapurah',
        estado_id: 13
      },
      {
        id: 2407,
        cidade: 'Terra Nova do Norte',
        estado_id: 13
      },
      {
        id: 2408,
        cidade: 'Tesouro',
        estado_id: 13
      },
      {
        id: 2409,
        cidade: 'Torixoréu',
        estado_id: 13
      },
      {
        id: 2410,
        cidade: 'União do Sul',
        estado_id: 13
      },
      {
        id: 2411,
        cidade: 'Vale de São Domingos',
        estado_id: 13
      },
      {
        id: 2412,
        cidade: 'Várzea Grande',
        estado_id: 13
      },
      {
        id: 2413,
        cidade: 'Vera',
        estado_id: 13
      },
      {
        id: 2414,
        cidade: 'Vila Rica',
        estado_id: 13
      },
      {
        id: 2415,
        cidade: 'Nova Guarita',
        estado_id: 13
      },
      {
        id: 2416,
        cidade: 'Nova Marilândia',
        estado_id: 13
      },
      {
        id: 2417,
        cidade: 'Nova Maringá',
        estado_id: 13
      },
      {
        id: 2418,
        cidade: 'Nova Monte Verde',
        estado_id: 13
      },
      {
        id: 2419,
        cidade: 'Abaetetuba',
        estado_id: 14
      },
      {
        id: 2420,
        cidade: 'Abel Figueiredo',
        estado_id: 14
      },
      {
        id: 2421,
        cidade: 'Acará',
        estado_id: 14
      },
      {
        id: 2422,
        cidade: 'Afuá',
        estado_id: 14
      },
      {
        id: 2423,
        cidade: 'Água Azul do Norte',
        estado_id: 14
      },
      {
        id: 2424,
        cidade: 'Alenquer',
        estado_id: 14
      },
      {
        id: 2425,
        cidade: 'Almeirim',
        estado_id: 14
      },
      {
        id: 2426,
        cidade: 'Altamira',
        estado_id: 14
      },
      {
        id: 2427,
        cidade: 'Anajás',
        estado_id: 14
      },
      {
        id: 2428,
        cidade: 'Ananindeua',
        estado_id: 14
      },
      {
        id: 2429,
        cidade: 'Anapu',
        estado_id: 14
      },
      {
        id: 2430,
        cidade: 'Augusto Corrêa',
        estado_id: 14
      },
      {
        id: 2431,
        cidade: 'Aurora do Pará',
        estado_id: 14
      },
      {
        id: 2432,
        cidade: 'Aveiro',
        estado_id: 14
      },
      {
        id: 2433,
        cidade: 'Bagre',
        estado_id: 14
      },
      {
        id: 2434,
        cidade: 'Baião',
        estado_id: 14
      },
      {
        id: 2435,
        cidade: 'Bannach',
        estado_id: 14
      },
      {
        id: 2436,
        cidade: 'Barcarena',
        estado_id: 14
      },
      {
        id: 2437,
        cidade: 'Belém',
        estado_id: 14
      },
      {
        id: 2438,
        cidade: 'Belterra',
        estado_id: 14
      },
      {
        id: 2439,
        cidade: 'Benevides',
        estado_id: 14
      },
      {
        id: 2440,
        cidade: 'Bom Jesus do Tocantins',
        estado_id: 14
      },
      {
        id: 2441,
        cidade: 'Bonito',
        estado_id: 14
      },
      {
        id: 2442,
        cidade: 'Bragança',
        estado_id: 14
      },
      {
        id: 2443,
        cidade: 'Brasil Novo',
        estado_id: 14
      },
      {
        id: 2444,
        cidade: 'Brejo Grande do Araguaia',
        estado_id: 14
      },
      {
        id: 2445,
        cidade: 'Breu Branco',
        estado_id: 14
      },
      {
        id: 2446,
        cidade: 'Breves',
        estado_id: 14
      },
      {
        id: 2447,
        cidade: 'Bujaru',
        estado_id: 14
      },
      {
        id: 2448,
        cidade: 'Cachoeira do Piriá',
        estado_id: 14
      },
      {
        id: 2449,
        cidade: 'Cachoeira do Arari',
        estado_id: 14
      },
      {
        id: 2450,
        cidade: 'Cametá',
        estado_id: 14
      },
      {
        id: 2451,
        cidade: 'Canaã Dos Carajás',
        estado_id: 14
      },
      {
        id: 2452,
        cidade: 'Capanema',
        estado_id: 14
      },
      {
        id: 2453,
        cidade: 'Capitão Poço',
        estado_id: 14
      },
      {
        id: 2454,
        cidade: 'Castanhal',
        estado_id: 14
      },
      {
        id: 2455,
        cidade: 'Chaves',
        estado_id: 14
      },
      {
        id: 2456,
        cidade: 'Colares',
        estado_id: 14
      },
      {
        id: 2457,
        cidade: 'Conceição do Araguaia',
        estado_id: 14
      },
      {
        id: 2458,
        cidade: 'Concórdia do Pará',
        estado_id: 14
      },
      {
        id: 2459,
        cidade: 'Cumaru do Norte',
        estado_id: 14
      },
      {
        id: 2460,
        cidade: 'Curionópolis',
        estado_id: 14
      },
      {
        id: 2461,
        cidade: 'Curralinho',
        estado_id: 14
      },
      {
        id: 2462,
        cidade: 'Curuá',
        estado_id: 14
      },
      {
        id: 2463,
        cidade: 'Curuçá',
        estado_id: 14
      },
      {
        id: 2464,
        cidade: 'Dom Eliseu',
        estado_id: 14
      },
      {
        id: 2465,
        cidade: 'Eldorado Dos Carajás',
        estado_id: 14
      },
      {
        id: 2466,
        cidade: 'Faro',
        estado_id: 14
      },
      {
        id: 2467,
        cidade: 'Floresta do Araguaia',
        estado_id: 14
      },
      {
        id: 2468,
        cidade: 'Garrafão do Norte',
        estado_id: 14
      },
      {
        id: 2469,
        cidade: 'Goianésia do Pará',
        estado_id: 14
      },
      {
        id: 2470,
        cidade: 'Gurupá',
        estado_id: 14
      },
      {
        id: 2471,
        cidade: 'Igarapé-açu',
        estado_id: 14
      },
      {
        id: 2472,
        cidade: 'Igarapé-miri',
        estado_id: 14
      },
      {
        id: 2473,
        cidade: 'Inhangapi',
        estado_id: 14
      },
      {
        id: 2474,
        cidade: 'Ipixuna do Pará',
        estado_id: 14
      },
      {
        id: 2475,
        cidade: 'Irituia',
        estado_id: 14
      },
      {
        id: 2476,
        cidade: 'Itaituba',
        estado_id: 14
      },
      {
        id: 2477,
        cidade: 'Itupiranga',
        estado_id: 14
      },
      {
        id: 2478,
        cidade: 'Jacareacanga',
        estado_id: 14
      },
      {
        id: 2479,
        cidade: 'Jacundá',
        estado_id: 14
      },
      {
        id: 2480,
        cidade: 'Juruti',
        estado_id: 14
      },
      {
        id: 2481,
        cidade: 'Limoeiro do Ajuru',
        estado_id: 14
      },
      {
        id: 2482,
        cidade: 'Mãe do Rio',
        estado_id: 14
      },
      {
        id: 2483,
        cidade: 'Magalhães Barata',
        estado_id: 14
      },
      {
        id: 2484,
        cidade: 'Marabá',
        estado_id: 14
      },
      {
        id: 2485,
        cidade: 'Maracanã',
        estado_id: 14
      },
      {
        id: 2486,
        cidade: 'Marapanim',
        estado_id: 14
      },
      {
        id: 2487,
        cidade: 'Marituba',
        estado_id: 14
      },
      {
        id: 2488,
        cidade: 'Medicilândia',
        estado_id: 14
      },
      {
        id: 2489,
        cidade: 'Melgaço',
        estado_id: 14
      },
      {
        id: 2490,
        cidade: 'Mocajuba',
        estado_id: 14
      },
      {
        id: 2491,
        cidade: 'Moju',
        estado_id: 14
      },
      {
        id: 2492,
        cidade: 'Mojuí dos Campos',
        estado_id: 14
      },
      {
        id: 2493,
        cidade: 'Monte Alegre',
        estado_id: 14
      },
      {
        id: 2494,
        cidade: 'Muaná',
        estado_id: 14
      },
      {
        id: 2495,
        cidade: 'Nova Esperança do Piriá',
        estado_id: 14
      },
      {
        id: 2496,
        cidade: 'Nova Ipixuna',
        estado_id: 14
      },
      {
        id: 2497,
        cidade: 'Nova Timboteua',
        estado_id: 14
      },
      {
        id: 2498,
        cidade: 'Novo Progresso',
        estado_id: 14
      },
      {
        id: 2499,
        cidade: 'Novo Repartimento',
        estado_id: 14
      },
      {
        id: 2500,
        cidade: 'Óbidos',
        estado_id: 14
      },
      {
        id: 2501,
        cidade: 'Oeiras do Pará',
        estado_id: 14
      },
      {
        id: 2502,
        cidade: 'Oriximiná',
        estado_id: 14
      },
      {
        id: 2503,
        cidade: 'Ourém',
        estado_id: 14
      },
      {
        id: 2504,
        cidade: 'Ourilândia do Norte',
        estado_id: 14
      },
      {
        id: 2505,
        cidade: 'Pacajá',
        estado_id: 14
      },
      {
        id: 2506,
        cidade: 'Palestina do Pará',
        estado_id: 14
      },
      {
        id: 2507,
        cidade: 'Paragominas',
        estado_id: 14
      },
      {
        id: 2508,
        cidade: 'Parauapebas',
        estado_id: 14
      },
      {
        id: 2509,
        cidade: 'Pau D´arco',
        estado_id: 14
      },
      {
        id: 2510,
        cidade: 'Peixe-boi',
        estado_id: 14
      },
      {
        id: 2511,
        cidade: 'Piçarra',
        estado_id: 14
      },
      {
        id: 2512,
        cidade: 'Placas',
        estado_id: 14
      },
      {
        id: 2513,
        cidade: 'Ponta de Pedras',
        estado_id: 14
      },
      {
        id: 2514,
        cidade: 'Portel',
        estado_id: 14
      },
      {
        id: 2515,
        cidade: 'Porto de Moz',
        estado_id: 14
      },
      {
        id: 2516,
        cidade: 'Prainha',
        estado_id: 14
      },
      {
        id: 2517,
        cidade: 'Primavera',
        estado_id: 14
      },
      {
        id: 2518,
        cidade: 'Quatipuru',
        estado_id: 14
      },
      {
        id: 2519,
        cidade: 'Redenção',
        estado_id: 14
      },
      {
        id: 2520,
        cidade: 'Rio Maria',
        estado_id: 14
      },
      {
        id: 2521,
        cidade: 'Rondon do Pará',
        estado_id: 14
      },
      {
        id: 2522,
        cidade: 'Rurópolis',
        estado_id: 14
      },
      {
        id: 2523,
        cidade: 'Salinópolis',
        estado_id: 14
      },
      {
        id: 2524,
        cidade: 'Salvaterra',
        estado_id: 14
      },
      {
        id: 2525,
        cidade: 'Santa Bárbara do Pará',
        estado_id: 14
      },
      {
        id: 2526,
        cidade: 'Santa Cruz do Arari',
        estado_id: 14
      },
      {
        id: 2527,
        cidade: 'Santa Isabel do Pará',
        estado_id: 14
      },
      {
        id: 2528,
        cidade: 'Santa Luzia do Pará',
        estado_id: 14
      },
      {
        id: 2529,
        cidade: 'Santa Maria Das Barreiras',
        estado_id: 14
      },
      {
        id: 2530,
        cidade: 'Santa Maria do Pará',
        estado_id: 14
      },
      {
        id: 2531,
        cidade: 'Santana do Araguaia',
        estado_id: 14
      },
      {
        id: 2532,
        cidade: 'Santarém',
        estado_id: 14
      },
      {
        id: 2533,
        cidade: 'Santarém Novo',
        estado_id: 14
      },
      {
        id: 2534,
        cidade: 'Santo Antônio do Tauá',
        estado_id: 14
      },
      {
        id: 2535,
        cidade: 'São Caetano de Odivelas',
        estado_id: 14
      },
      {
        id: 2536,
        cidade: 'São Domingos do Araguaia',
        estado_id: 14
      },
      {
        id: 2537,
        cidade: 'São Domingos do Capim',
        estado_id: 14
      },
      {
        id: 2538,
        cidade: 'São Félix do Xingu',
        estado_id: 14
      },
      {
        id: 2539,
        cidade: 'São Francisco do Pará',
        estado_id: 14
      },
      {
        id: 2540,
        cidade: 'São Geraldo do Araguaia',
        estado_id: 14
      },
      {
        id: 2541,
        cidade: 'São João da Ponta',
        estado_id: 14
      },
      {
        id: 2542,
        cidade: 'São João de Pirabas',
        estado_id: 14
      },
      {
        id: 2543,
        cidade: 'São João do Araguaia',
        estado_id: 14
      },
      {
        id: 2544,
        cidade: 'São Miguel do Guamá',
        estado_id: 14
      },
      {
        id: 2545,
        cidade: 'São Sebastião da Boa Vista',
        estado_id: 14
      },
      {
        id: 2546,
        cidade: 'Sapucaia',
        estado_id: 14
      },
      {
        id: 2547,
        cidade: 'Senador José Porfírio',
        estado_id: 14
      },
      {
        id: 2548,
        cidade: 'Soure',
        estado_id: 14
      },
      {
        id: 2549,
        cidade: 'Tailândia',
        estado_id: 14
      },
      {
        id: 2550,
        cidade: 'Terra Alta',
        estado_id: 14
      },
      {
        id: 2551,
        cidade: 'Terra Santa',
        estado_id: 14
      },
      {
        id: 2552,
        cidade: 'Tomé-açu',
        estado_id: 14
      },
      {
        id: 2553,
        cidade: 'Tracuateua',
        estado_id: 14
      },
      {
        id: 2554,
        cidade: 'Trairão',
        estado_id: 14
      },
      {
        id: 2555,
        cidade: 'Tucumã',
        estado_id: 14
      },
      {
        id: 2556,
        cidade: 'Tucuruí',
        estado_id: 14
      },
      {
        id: 2557,
        cidade: 'Ulianópolis',
        estado_id: 14
      },
      {
        id: 2558,
        cidade: 'Uruará',
        estado_id: 14
      },
      {
        id: 2559,
        cidade: 'Vigia',
        estado_id: 14
      },
      {
        id: 2560,
        cidade: 'Viseu',
        estado_id: 14
      },
      {
        id: 2561,
        cidade: 'Vitória do Xingu',
        estado_id: 14
      },
      {
        id: 2562,
        cidade: 'Xinguara',
        estado_id: 14
      },
      {
        id: 2563,
        cidade: 'Água Branca',
        estado_id: 15
      },
      {
        id: 2564,
        cidade: 'Aguiar',
        estado_id: 15
      },
      {
        id: 2565,
        cidade: 'Alagoa Grande',
        estado_id: 15
      },
      {
        id: 2566,
        cidade: 'Alagoa Nova',
        estado_id: 15
      },
      {
        id: 2567,
        cidade: 'Alagoinha',
        estado_id: 15
      },
      {
        id: 2568,
        cidade: 'Alcantil',
        estado_id: 15
      },
      {
        id: 2569,
        cidade: 'Algodão de Jandaíra',
        estado_id: 15
      },
      {
        id: 2570,
        cidade: 'Alhandra',
        estado_id: 15
      },
      {
        id: 2571,
        cidade: 'São João do Rio do Peixe',
        estado_id: 15
      },
      {
        id: 2572,
        cidade: 'Amparo',
        estado_id: 15
      },
      {
        id: 2573,
        cidade: 'Aparecida',
        estado_id: 15
      },
      {
        id: 2574,
        cidade: 'Araçagi',
        estado_id: 15
      },
      {
        id: 2575,
        cidade: 'Arara',
        estado_id: 15
      },
      {
        id: 2576,
        cidade: 'Araruna',
        estado_id: 15
      },
      {
        id: 2577,
        cidade: 'Areia',
        estado_id: 15
      },
      {
        id: 2578,
        cidade: 'Areia de Baraúnas',
        estado_id: 15
      },
      {
        id: 2579,
        cidade: 'Areial',
        estado_id: 15
      },
      {
        id: 2580,
        cidade: 'Aroeiras',
        estado_id: 15
      },
      {
        id: 2581,
        cidade: 'Assunção',
        estado_id: 15
      },
      {
        id: 2582,
        cidade: 'Baía da Traição',
        estado_id: 15
      },
      {
        id: 2583,
        cidade: 'Bananeiras',
        estado_id: 15
      },
      {
        id: 2584,
        cidade: 'Baraúna',
        estado_id: 15
      },
      {
        id: 2585,
        cidade: 'Barra de Santana',
        estado_id: 15
      },
      {
        id: 2586,
        cidade: 'Barra de Santa Rosa',
        estado_id: 15
      },
      {
        id: 2587,
        cidade: 'Barra de São Miguel',
        estado_id: 15
      },
      {
        id: 2588,
        cidade: 'Bayeux',
        estado_id: 15
      },
      {
        id: 2589,
        cidade: 'Belém',
        estado_id: 15
      },
      {
        id: 2590,
        cidade: 'Belém do Brejo do Cruz',
        estado_id: 15
      },
      {
        id: 2591,
        cidade: 'Bernardino Batista',
        estado_id: 15
      },
      {
        id: 2592,
        cidade: 'Boa Ventura',
        estado_id: 15
      },
      {
        id: 2593,
        cidade: 'Boa Vista',
        estado_id: 15
      },
      {
        id: 2594,
        cidade: 'Bom Jesus',
        estado_id: 15
      },
      {
        id: 2595,
        cidade: 'Bom Sucesso',
        estado_id: 15
      },
      {
        id: 2596,
        cidade: 'Bonito de Santa fé',
        estado_id: 15
      },
      {
        id: 2597,
        cidade: 'Boqueirão',
        estado_id: 15
      },
      {
        id: 2598,
        cidade: 'Igaracy',
        estado_id: 15
      },
      {
        id: 2599,
        cidade: 'Borborema',
        estado_id: 15
      },
      {
        id: 2600,
        cidade: 'Brejo do Cruz',
        estado_id: 15
      },
      {
        id: 2601,
        cidade: 'Brejo Dos Santos',
        estado_id: 15
      },
      {
        id: 2602,
        cidade: 'Caaporã',
        estado_id: 15
      },
      {
        id: 2603,
        cidade: 'Cabaceiras',
        estado_id: 15
      },
      {
        id: 2604,
        cidade: 'Cabedelo',
        estado_id: 15
      },
      {
        id: 2605,
        cidade: 'Cachoeira Dos Índios',
        estado_id: 15
      },
      {
        id: 2606,
        cidade: 'Cacimba de Areia',
        estado_id: 15
      },
      {
        id: 2607,
        cidade: 'Cacimba de Dentro',
        estado_id: 15
      },
      {
        id: 2608,
        cidade: 'Cacimbas',
        estado_id: 15
      },
      {
        id: 2609,
        cidade: 'Caiçara',
        estado_id: 15
      },
      {
        id: 2610,
        cidade: 'Cajazeiras',
        estado_id: 15
      },
      {
        id: 2611,
        cidade: 'Cajazeirinhas',
        estado_id: 15
      },
      {
        id: 2612,
        cidade: 'Caldas Brandão',
        estado_id: 15
      },
      {
        id: 2613,
        cidade: 'Camalaú',
        estado_id: 15
      },
      {
        id: 2614,
        cidade: 'Campina Grande',
        estado_id: 15
      },
      {
        id: 2615,
        cidade: 'Capim',
        estado_id: 15
      },
      {
        id: 2616,
        cidade: 'Caraúbas',
        estado_id: 15
      },
      {
        id: 2617,
        cidade: 'Carrapateira',
        estado_id: 15
      },
      {
        id: 2618,
        cidade: 'Casserengue',
        estado_id: 15
      },
      {
        id: 2619,
        cidade: 'Catingueira',
        estado_id: 15
      },
      {
        id: 2620,
        cidade: 'Catolé do Rocha',
        estado_id: 15
      },
      {
        id: 2621,
        cidade: 'Caturité',
        estado_id: 15
      },
      {
        id: 2622,
        cidade: 'Conceição',
        estado_id: 15
      },
      {
        id: 2623,
        cidade: 'Condado',
        estado_id: 15
      },
      {
        id: 2624,
        cidade: 'Conde',
        estado_id: 15
      },
      {
        id: 2625,
        cidade: 'Congo',
        estado_id: 15
      },
      {
        id: 2626,
        cidade: 'Coremas',
        estado_id: 15
      },
      {
        id: 2627,
        cidade: 'Coxixola',
        estado_id: 15
      },
      {
        id: 2628,
        cidade: 'Cruz do Espírito Santo',
        estado_id: 15
      },
      {
        id: 2629,
        cidade: 'Cubati',
        estado_id: 15
      },
      {
        id: 2630,
        cidade: 'Cuité',
        estado_id: 15
      },
      {
        id: 2631,
        cidade: 'Cuitegi',
        estado_id: 15
      },
      {
        id: 2632,
        cidade: 'Cuité de Mamanguape',
        estado_id: 15
      },
      {
        id: 2633,
        cidade: 'Curral de Cima',
        estado_id: 15
      },
      {
        id: 2634,
        cidade: 'Curral Velho',
        estado_id: 15
      },
      {
        id: 2635,
        cidade: 'Damião',
        estado_id: 15
      },
      {
        id: 2636,
        cidade: 'Desterro',
        estado_id: 15
      },
      {
        id: 2637,
        cidade: 'Vista Serrana',
        estado_id: 15
      },
      {
        id: 2638,
        cidade: 'Diamante',
        estado_id: 15
      },
      {
        id: 2639,
        cidade: 'Dona Inês',
        estado_id: 15
      },
      {
        id: 2640,
        cidade: 'Duas Estradas',
        estado_id: 15
      },
      {
        id: 2641,
        cidade: 'Emas',
        estado_id: 15
      },
      {
        id: 2642,
        cidade: 'Esperança',
        estado_id: 15
      },
      {
        id: 2643,
        cidade: 'Fagundes',
        estado_id: 15
      },
      {
        id: 2644,
        cidade: 'Frei Martinho',
        estado_id: 15
      },
      {
        id: 2645,
        cidade: 'Gado Bravo',
        estado_id: 15
      },
      {
        id: 2646,
        cidade: 'Guarabira',
        estado_id: 15
      },
      {
        id: 2647,
        cidade: 'Gurinhém',
        estado_id: 15
      },
      {
        id: 2648,
        cidade: 'Gurjão',
        estado_id: 15
      },
      {
        id: 2649,
        cidade: 'Ibiara',
        estado_id: 15
      },
      {
        id: 2650,
        cidade: 'Imaculada',
        estado_id: 15
      },
      {
        id: 2651,
        cidade: 'Ingá',
        estado_id: 15
      },
      {
        id: 2652,
        cidade: 'Itabaiana',
        estado_id: 15
      },
      {
        id: 2653,
        cidade: 'Itaporanga',
        estado_id: 15
      },
      {
        id: 2654,
        cidade: 'Itapororoca',
        estado_id: 15
      },
      {
        id: 2655,
        cidade: 'Itatuba',
        estado_id: 15
      },
      {
        id: 2656,
        cidade: 'Jacaraú',
        estado_id: 15
      },
      {
        id: 2657,
        cidade: 'Jericó',
        estado_id: 15
      },
      {
        id: 2658,
        cidade: 'João Pessoa',
        estado_id: 15
      },
      {
        id: 2659,
        cidade: 'Juarez Távora',
        estado_id: 15
      },
      {
        id: 2660,
        cidade: 'Juazeirinho',
        estado_id: 15
      },
      {
        id: 2661,
        cidade: 'Junco do Seridó',
        estado_id: 15
      },
      {
        id: 2662,
        cidade: 'Juripiranga',
        estado_id: 15
      },
      {
        id: 2663,
        cidade: 'Juru',
        estado_id: 15
      },
      {
        id: 2664,
        cidade: 'Lagoa',
        estado_id: 15
      },
      {
        id: 2665,
        cidade: 'Lagoa de Dentro',
        estado_id: 15
      },
      {
        id: 2666,
        cidade: 'Lagoa Seca',
        estado_id: 15
      },
      {
        id: 2667,
        cidade: 'Lastro',
        estado_id: 15
      },
      {
        id: 2668,
        cidade: 'Livramento',
        estado_id: 15
      },
      {
        id: 2669,
        cidade: 'Logradouro',
        estado_id: 15
      },
      {
        id: 2670,
        cidade: 'Lucena',
        estado_id: 15
      },
      {
        id: 2671,
        cidade: 'Mãe D´água',
        estado_id: 15
      },
      {
        id: 2672,
        cidade: 'Malta',
        estado_id: 15
      },
      {
        id: 2673,
        cidade: 'Mamanguape',
        estado_id: 15
      },
      {
        id: 2674,
        cidade: 'Manaíra',
        estado_id: 15
      },
      {
        id: 2675,
        cidade: 'Marcação',
        estado_id: 15
      },
      {
        id: 2676,
        cidade: 'Mari',
        estado_id: 15
      },
      {
        id: 2677,
        cidade: 'Marizópolis',
        estado_id: 15
      },
      {
        id: 2678,
        cidade: 'Massaranduba',
        estado_id: 15
      },
      {
        id: 2679,
        cidade: 'Mataraca',
        estado_id: 15
      },
      {
        id: 2680,
        cidade: 'Matinhas',
        estado_id: 15
      },
      {
        id: 2681,
        cidade: 'Mato Grosso',
        estado_id: 15
      },
      {
        id: 2682,
        cidade: 'Maturéia',
        estado_id: 15
      },
      {
        id: 2683,
        cidade: 'Mogeiro',
        estado_id: 15
      },
      {
        id: 2684,
        cidade: 'Montadas',
        estado_id: 15
      },
      {
        id: 2685,
        cidade: 'Monte Horebe',
        estado_id: 15
      },
      {
        id: 2686,
        cidade: 'Monteiro',
        estado_id: 15
      },
      {
        id: 2687,
        cidade: 'Mulungu',
        estado_id: 15
      },
      {
        id: 2688,
        cidade: 'Natuba',
        estado_id: 15
      },
      {
        id: 2689,
        cidade: 'Nazarezinho',
        estado_id: 15
      },
      {
        id: 2690,
        cidade: 'Nova Floresta',
        estado_id: 15
      },
      {
        id: 2691,
        cidade: 'Nova Olinda',
        estado_id: 15
      },
      {
        id: 2692,
        cidade: 'Nova Palmeira',
        estado_id: 15
      },
      {
        id: 2693,
        cidade: 'Olho D´água',
        estado_id: 15
      },
      {
        id: 2694,
        cidade: 'Olivedos',
        estado_id: 15
      },
      {
        id: 2695,
        cidade: 'Ouro Velho',
        estado_id: 15
      },
      {
        id: 2696,
        cidade: 'Parari',
        estado_id: 15
      },
      {
        id: 2697,
        cidade: 'Passagem',
        estado_id: 15
      },
      {
        id: 2698,
        cidade: 'Patos',
        estado_id: 15
      },
      {
        id: 2699,
        cidade: 'Paulista',
        estado_id: 15
      },
      {
        id: 2700,
        cidade: 'Pedra Branca',
        estado_id: 15
      },
      {
        id: 2701,
        cidade: 'Pedra Lavrada',
        estado_id: 15
      },
      {
        id: 2702,
        cidade: 'Pedras de Fogo',
        estado_id: 15
      },
      {
        id: 2703,
        cidade: 'Piancó',
        estado_id: 15
      },
      {
        id: 2704,
        cidade: 'Picuí',
        estado_id: 15
      },
      {
        id: 2705,
        cidade: 'Pilar',
        estado_id: 15
      },
      {
        id: 2706,
        cidade: 'Pilões',
        estado_id: 15
      },
      {
        id: 2707,
        cidade: 'Pilõezinhos',
        estado_id: 15
      },
      {
        id: 2708,
        cidade: 'Pirpirituba',
        estado_id: 15
      },
      {
        id: 2709,
        cidade: 'Pitimbu',
        estado_id: 15
      },
      {
        id: 2710,
        cidade: 'Pocinhos',
        estado_id: 15
      },
      {
        id: 2711,
        cidade: 'Poço Dantas',
        estado_id: 15
      },
      {
        id: 2712,
        cidade: 'Poço de José de Moura',
        estado_id: 15
      },
      {
        id: 2713,
        cidade: 'Pombal',
        estado_id: 15
      },
      {
        id: 2714,
        cidade: 'Prata',
        estado_id: 15
      },
      {
        id: 2715,
        cidade: 'Princesa Isabel',
        estado_id: 15
      },
      {
        id: 2716,
        cidade: 'Puxinanã',
        estado_id: 15
      },
      {
        id: 2717,
        cidade: 'Queimadas',
        estado_id: 15
      },
      {
        id: 2718,
        cidade: 'Quixabá',
        estado_id: 15
      },
      {
        id: 2719,
        cidade: 'Remígio',
        estado_id: 15
      },
      {
        id: 2720,
        cidade: 'Pedro Régis',
        estado_id: 15
      },
      {
        id: 2721,
        cidade: 'Riachão',
        estado_id: 15
      },
      {
        id: 2722,
        cidade: 'Riachão do Bacamarte',
        estado_id: 15
      },
      {
        id: 2723,
        cidade: 'Riachão do Poço',
        estado_id: 15
      },
      {
        id: 2724,
        cidade: 'Riacho de Santo Antônio',
        estado_id: 15
      },
      {
        id: 2725,
        cidade: 'Riacho Dos Cavalos',
        estado_id: 15
      },
      {
        id: 2726,
        cidade: 'Rio Tinto',
        estado_id: 15
      },
      {
        id: 2727,
        cidade: 'Salgadinho',
        estado_id: 15
      },
      {
        id: 2728,
        cidade: 'Salgado de São Félix',
        estado_id: 15
      },
      {
        id: 2729,
        cidade: 'Santa Cecília',
        estado_id: 15
      },
      {
        id: 2730,
        cidade: 'Santa Cruz',
        estado_id: 15
      },
      {
        id: 2731,
        cidade: 'Santa Helena',
        estado_id: 15
      },
      {
        id: 2732,
        cidade: 'Santa Inês',
        estado_id: 15
      },
      {
        id: 2733,
        cidade: 'Santa Luzia',
        estado_id: 15
      },
      {
        id: 2734,
        cidade: 'Santana de Mangueira',
        estado_id: 15
      },
      {
        id: 2735,
        cidade: 'Santana Dos Garrotes',
        estado_id: 15
      },
      {
        id: 2736,
        cidade: 'Santarém',
        estado_id: 15
      },
      {
        id: 2737,
        cidade: 'Santa Rita',
        estado_id: 15
      },
      {
        id: 2738,
        cidade: 'Santa Teresinha',
        estado_id: 15
      },
      {
        id: 2739,
        cidade: 'Santo André',
        estado_id: 15
      },
      {
        id: 2740,
        cidade: 'São Bento',
        estado_id: 15
      },
      {
        id: 2741,
        cidade: 'São Bentinho',
        estado_id: 15
      },
      {
        id: 2742,
        cidade: 'São Domingos do Cariri',
        estado_id: 15
      },
      {
        id: 2743,
        cidade: 'São Domingos de Pombal',
        estado_id: 15
      },
      {
        id: 2744,
        cidade: 'São Francisco',
        estado_id: 15
      },
      {
        id: 2745,
        cidade: 'São João do Cariri',
        estado_id: 15
      },
      {
        id: 2746,
        cidade: 'São João do Tigre',
        estado_id: 15
      },
      {
        id: 2747,
        cidade: 'São José da Lagoa Tapada',
        estado_id: 15
      },
      {
        id: 2748,
        cidade: 'São José de Caiana',
        estado_id: 15
      },
      {
        id: 2749,
        cidade: 'São José de Espinharas',
        estado_id: 15
      },
      {
        id: 2750,
        cidade: 'São José Dos Ramos',
        estado_id: 15
      },
      {
        id: 2751,
        cidade: 'São José de Piranhas',
        estado_id: 15
      },
      {
        id: 2752,
        cidade: 'São José de Princesa',
        estado_id: 15
      },
      {
        id: 2753,
        cidade: 'São José do Bonfim',
        estado_id: 15
      },
      {
        id: 2754,
        cidade: 'São José do Brejo do Cruz',
        estado_id: 15
      },
      {
        id: 2755,
        cidade: 'São José do Sabugi',
        estado_id: 15
      },
      {
        id: 2756,
        cidade: 'São José Dos Cordeiros',
        estado_id: 15
      },
      {
        id: 2757,
        cidade: 'São Mamede',
        estado_id: 15
      },
      {
        id: 2758,
        cidade: 'São Miguel de Taipu',
        estado_id: 15
      },
      {
        id: 2759,
        cidade: 'São Sebastião de Lagoa de Roça',
        estado_id: 15
      },
      {
        id: 2760,
        cidade: 'São Sebastião do Umbuzeiro',
        estado_id: 15
      },
      {
        id: 2761,
        cidade: 'Sapé',
        estado_id: 15
      },
      {
        id: 2762,
        cidade: 'Seridó',
        estado_id: 15
      },
      {
        id: 2763,
        cidade: 'Serra Branca',
        estado_id: 15
      },
      {
        id: 2764,
        cidade: 'Serra da Raiz',
        estado_id: 15
      },
      {
        id: 2765,
        cidade: 'Serra Grande',
        estado_id: 15
      },
      {
        id: 2766,
        cidade: 'Serra Redonda',
        estado_id: 15
      },
      {
        id: 2767,
        cidade: 'Serraria',
        estado_id: 15
      },
      {
        id: 2768,
        cidade: 'Sertãozinho',
        estado_id: 15
      },
      {
        id: 2769,
        cidade: 'Sobrado',
        estado_id: 15
      },
      {
        id: 2770,
        cidade: 'Solânea',
        estado_id: 15
      },
      {
        id: 2771,
        cidade: 'Soledade',
        estado_id: 15
      },
      {
        id: 2772,
        cidade: 'Sossêgo',
        estado_id: 15
      },
      {
        id: 2773,
        cidade: 'Sousa',
        estado_id: 15
      },
      {
        id: 2774,
        cidade: 'Sumé',
        estado_id: 15
      },
      {
        id: 2775,
        cidade: 'Campo de Santana',
        estado_id: 15
      },
      {
        id: 2776,
        cidade: 'Taperoá',
        estado_id: 15
      },
      {
        id: 2777,
        cidade: 'Tavares',
        estado_id: 15
      },
      {
        id: 2778,
        cidade: 'Teixeira',
        estado_id: 15
      },
      {
        id: 2779,
        cidade: 'Tenório',
        estado_id: 15
      },
      {
        id: 2780,
        cidade: 'Triunfo',
        estado_id: 15
      },
      {
        id: 2781,
        cidade: 'Uiraúna',
        estado_id: 15
      },
      {
        id: 2782,
        cidade: 'Umbuzeiro',
        estado_id: 15
      },
      {
        id: 2783,
        cidade: 'Várzea',
        estado_id: 15
      },
      {
        id: 2784,
        cidade: 'Vieirópolis',
        estado_id: 15
      },
      {
        id: 2785,
        cidade: 'Zabelê',
        estado_id: 15
      },
      {
        id: 2786,
        cidade: 'Abreu e Lima',
        estado_id: 16
      },
      {
        id: 2787,
        cidade: 'Afogados da Ingazeira',
        estado_id: 16
      },
      {
        id: 2788,
        cidade: 'Afrânio',
        estado_id: 16
      },
      {
        id: 2789,
        cidade: 'Agrestina',
        estado_id: 16
      },
      {
        id: 2790,
        cidade: 'Água Preta',
        estado_id: 16
      },
      {
        id: 2791,
        cidade: 'Águas Belas',
        estado_id: 16
      },
      {
        id: 2792,
        cidade: 'Alagoinha',
        estado_id: 16
      },
      {
        id: 2793,
        cidade: 'Aliança',
        estado_id: 16
      },
      {
        id: 2794,
        cidade: 'Altinho',
        estado_id: 16
      },
      {
        id: 2795,
        cidade: 'Amaraji',
        estado_id: 16
      },
      {
        id: 2796,
        cidade: 'Angelim',
        estado_id: 16
      },
      {
        id: 2797,
        cidade: 'Araçoiaba',
        estado_id: 16
      },
      {
        id: 2798,
        cidade: 'Araripina',
        estado_id: 16
      },
      {
        id: 2799,
        cidade: 'Arcoverde',
        estado_id: 16
      },
      {
        id: 2800,
        cidade: 'Barra de Guabiraba',
        estado_id: 16
      },
      {
        id: 2801,
        cidade: 'Barreiros',
        estado_id: 16
      },
      {
        id: 2802,
        cidade: 'Belém de Maria',
        estado_id: 16
      },
      {
        id: 2803,
        cidade: 'Belém de São Francisco',
        estado_id: 16
      },
      {
        id: 2804,
        cidade: 'Belo Jardim',
        estado_id: 16
      },
      {
        id: 2805,
        cidade: 'Betânia',
        estado_id: 16
      },
      {
        id: 2806,
        cidade: 'Bezerros',
        estado_id: 16
      },
      {
        id: 2807,
        cidade: 'Bodocó',
        estado_id: 16
      },
      {
        id: 2808,
        cidade: 'Bom Conselho',
        estado_id: 16
      },
      {
        id: 2809,
        cidade: 'Bom Jardim',
        estado_id: 16
      },
      {
        id: 2810,
        cidade: 'Bonito',
        estado_id: 16
      },
      {
        id: 2811,
        cidade: 'Brejão',
        estado_id: 16
      },
      {
        id: 2812,
        cidade: 'Brejinho',
        estado_id: 16
      },
      {
        id: 2813,
        cidade: 'Brejo da Madre de Deus',
        estado_id: 16
      },
      {
        id: 2814,
        cidade: 'Buenos Aires',
        estado_id: 16
      },
      {
        id: 2815,
        cidade: 'Buíque',
        estado_id: 16
      },
      {
        id: 2816,
        cidade: 'Cabo de Santo Agostinho',
        estado_id: 16
      },
      {
        id: 2817,
        cidade: 'Cabrobó',
        estado_id: 16
      },
      {
        id: 2818,
        cidade: 'Cachoeirinha',
        estado_id: 16
      },
      {
        id: 2819,
        cidade: 'Caetés',
        estado_id: 16
      },
      {
        id: 2820,
        cidade: 'Calçado',
        estado_id: 16
      },
      {
        id: 2821,
        cidade: 'Calumbi',
        estado_id: 16
      },
      {
        id: 2822,
        cidade: 'Camaragibe',
        estado_id: 16
      },
      {
        id: 2823,
        cidade: 'Camocim de São Félix',
        estado_id: 16
      },
      {
        id: 2824,
        cidade: 'Camutanga',
        estado_id: 16
      },
      {
        id: 2825,
        cidade: 'Canhotinho',
        estado_id: 16
      },
      {
        id: 2826,
        cidade: 'Capoeiras',
        estado_id: 16
      },
      {
        id: 2827,
        cidade: 'Carnaíba',
        estado_id: 16
      },
      {
        id: 2828,
        cidade: 'Carnaubeira da Penha',
        estado_id: 16
      },
      {
        id: 2829,
        cidade: 'Carpina',
        estado_id: 16
      },
      {
        id: 2830,
        cidade: 'Caruaru',
        estado_id: 16
      },
      {
        id: 2831,
        cidade: 'Casinhas',
        estado_id: 16
      },
      {
        id: 2832,
        cidade: 'Catende',
        estado_id: 16
      },
      {
        id: 2833,
        cidade: 'Cedro',
        estado_id: 16
      },
      {
        id: 2834,
        cidade: 'Chã de Alegria',
        estado_id: 16
      },
      {
        id: 2835,
        cidade: 'Chã Grande',
        estado_id: 16
      },
      {
        id: 2836,
        cidade: 'Condado',
        estado_id: 16
      },
      {
        id: 2837,
        cidade: 'Correntes',
        estado_id: 16
      },
      {
        id: 2838,
        cidade: 'Cortês',
        estado_id: 16
      },
      {
        id: 2839,
        cidade: 'Cumaru',
        estado_id: 16
      },
      {
        id: 2840,
        cidade: 'Cupira',
        estado_id: 16
      },
      {
        id: 2841,
        cidade: 'Custódia',
        estado_id: 16
      },
      {
        id: 2842,
        cidade: 'Dormentes',
        estado_id: 16
      },
      {
        id: 2843,
        cidade: 'Escada',
        estado_id: 16
      },
      {
        id: 2844,
        cidade: 'Exu',
        estado_id: 16
      },
      {
        id: 2845,
        cidade: 'Feira Nova',
        estado_id: 16
      },
      {
        id: 2846,
        cidade: 'Fernando de Noronha',
        estado_id: 16
      },
      {
        id: 2847,
        cidade: 'Ferreiros',
        estado_id: 16
      },
      {
        id: 2848,
        cidade: 'Flores',
        estado_id: 16
      },
      {
        id: 2849,
        cidade: 'Floresta',
        estado_id: 16
      },
      {
        id: 2850,
        cidade: 'Frei Miguelinho',
        estado_id: 16
      },
      {
        id: 2851,
        cidade: 'Gameleira',
        estado_id: 16
      },
      {
        id: 2852,
        cidade: 'Garanhuns',
        estado_id: 16
      },
      {
        id: 2853,
        cidade: 'Glória do Goitá',
        estado_id: 16
      },
      {
        id: 2854,
        cidade: 'Goiana',
        estado_id: 16
      },
      {
        id: 2855,
        cidade: 'Granito',
        estado_id: 16
      },
      {
        id: 2856,
        cidade: 'Gravatá',
        estado_id: 16
      },
      {
        id: 2857,
        cidade: 'Iati',
        estado_id: 16
      },
      {
        id: 2858,
        cidade: 'Ibimirim',
        estado_id: 16
      },
      {
        id: 2859,
        cidade: 'Ibirajuba',
        estado_id: 16
      },
      {
        id: 2860,
        cidade: 'Igarassu',
        estado_id: 16
      },
      {
        id: 2861,
        cidade: 'Iguaraci',
        estado_id: 16
      },
      {
        id: 2862,
        cidade: 'Inajá',
        estado_id: 16
      },
      {
        id: 2863,
        cidade: 'Ingazeira',
        estado_id: 16
      },
      {
        id: 2864,
        cidade: 'Ipojuca',
        estado_id: 16
      },
      {
        id: 2865,
        cidade: 'Ipubi',
        estado_id: 16
      },
      {
        id: 2866,
        cidade: 'Itacuruba',
        estado_id: 16
      },
      {
        id: 2867,
        cidade: 'Itaíba',
        estado_id: 16
      },
      {
        id: 2868,
        cidade: 'Ilha de Itamaracá',
        estado_id: 16
      },
      {
        id: 2869,
        cidade: 'Itambé',
        estado_id: 16
      },
      {
        id: 2870,
        cidade: 'Itapetim',
        estado_id: 16
      },
      {
        id: 2871,
        cidade: 'Itapissuma',
        estado_id: 16
      },
      {
        id: 2872,
        cidade: 'Itaquitinga',
        estado_id: 16
      },
      {
        id: 2873,
        cidade: 'Jaboatão Dos Guararapes',
        estado_id: 16
      },
      {
        id: 2874,
        cidade: 'Jaqueira',
        estado_id: 16
      },
      {
        id: 2875,
        cidade: 'Jataúba',
        estado_id: 16
      },
      {
        id: 2876,
        cidade: 'Jatobá',
        estado_id: 16
      },
      {
        id: 2877,
        cidade: 'João Alfredo',
        estado_id: 16
      },
      {
        id: 2878,
        cidade: 'Joaquim Nabuco',
        estado_id: 16
      },
      {
        id: 2879,
        cidade: 'Jucati',
        estado_id: 16
      },
      {
        id: 2880,
        cidade: 'Jupi',
        estado_id: 16
      },
      {
        id: 2881,
        cidade: 'Jurema',
        estado_id: 16
      },
      {
        id: 2882,
        cidade: 'Lagoa do Carro',
        estado_id: 16
      },
      {
        id: 2883,
        cidade: 'Lagoa do Itaenga',
        estado_id: 16
      },
      {
        id: 2884,
        cidade: 'Lagoa do Ouro',
        estado_id: 16
      },
      {
        id: 2885,
        cidade: 'Lagoa Dos Gatos',
        estado_id: 16
      },
      {
        id: 2886,
        cidade: 'Lagoa Grande',
        estado_id: 16
      },
      {
        id: 2887,
        cidade: 'Lajedo',
        estado_id: 16
      },
      {
        id: 2888,
        cidade: 'Limoeiro',
        estado_id: 16
      },
      {
        id: 2889,
        cidade: 'Macaparana',
        estado_id: 16
      },
      {
        id: 2890,
        cidade: 'Machados',
        estado_id: 16
      },
      {
        id: 2891,
        cidade: 'Manari',
        estado_id: 16
      },
      {
        id: 2892,
        cidade: 'Maraial',
        estado_id: 16
      },
      {
        id: 2893,
        cidade: 'Mirandiba',
        estado_id: 16
      },
      {
        id: 2894,
        cidade: 'Moreno',
        estado_id: 16
      },
      {
        id: 2895,
        cidade: 'Nazaré da Mata',
        estado_id: 16
      },
      {
        id: 2896,
        cidade: 'Olinda',
        estado_id: 16
      },
      {
        id: 2897,
        cidade: 'Orobó',
        estado_id: 16
      },
      {
        id: 2898,
        cidade: 'Orocó',
        estado_id: 16
      },
      {
        id: 2899,
        cidade: 'Ouricuri',
        estado_id: 16
      },
      {
        id: 2900,
        cidade: 'Palmares',
        estado_id: 16
      },
      {
        id: 2901,
        cidade: 'Palmeirina',
        estado_id: 16
      },
      {
        id: 2902,
        cidade: 'Panelas',
        estado_id: 16
      },
      {
        id: 2903,
        cidade: 'Paranatama',
        estado_id: 16
      },
      {
        id: 2904,
        cidade: 'Parnamirim',
        estado_id: 16
      },
      {
        id: 2905,
        cidade: 'Passira',
        estado_id: 16
      },
      {
        id: 2906,
        cidade: 'Paudalho',
        estado_id: 16
      },
      {
        id: 2907,
        cidade: 'Paulista',
        estado_id: 16
      },
      {
        id: 2908,
        cidade: 'Pedra',
        estado_id: 16
      },
      {
        id: 2909,
        cidade: 'Pesqueira',
        estado_id: 16
      },
      {
        id: 2910,
        cidade: 'Petrolândia',
        estado_id: 16
      },
      {
        id: 2911,
        cidade: 'Petrolina',
        estado_id: 16
      },
      {
        id: 2912,
        cidade: 'Poção',
        estado_id: 16
      },
      {
        id: 2913,
        cidade: 'Pombos',
        estado_id: 16
      },
      {
        id: 2914,
        cidade: 'Primavera',
        estado_id: 16
      },
      {
        id: 2915,
        cidade: 'Quipapá',
        estado_id: 16
      },
      {
        id: 2916,
        cidade: 'Quixaba',
        estado_id: 16
      },
      {
        id: 2917,
        cidade: 'Recife',
        estado_id: 16
      },
      {
        id: 2918,
        cidade: 'Riacho Das Almas',
        estado_id: 16
      },
      {
        id: 2919,
        cidade: 'Ribeirão',
        estado_id: 16
      },
      {
        id: 2920,
        cidade: 'Rio Formoso',
        estado_id: 16
      },
      {
        id: 2921,
        cidade: 'Sairé',
        estado_id: 16
      },
      {
        id: 2922,
        cidade: 'Salgadinho',
        estado_id: 16
      },
      {
        id: 2923,
        cidade: 'Salgueiro',
        estado_id: 16
      },
      {
        id: 2924,
        cidade: 'Saloá',
        estado_id: 16
      },
      {
        id: 2925,
        cidade: 'Sanharó',
        estado_id: 16
      },
      {
        id: 2926,
        cidade: 'Santa Cruz',
        estado_id: 16
      },
      {
        id: 2927,
        cidade: 'Santa Cruz da Baixa Verde',
        estado_id: 16
      },
      {
        id: 2928,
        cidade: 'Santa Cruz do Capibaribe',
        estado_id: 16
      },
      {
        id: 2929,
        cidade: 'Santa Filomena',
        estado_id: 16
      },
      {
        id: 2930,
        cidade: 'Santa Maria da Boa Vista',
        estado_id: 16
      },
      {
        id: 2931,
        cidade: 'Santa Maria do Cambucá',
        estado_id: 16
      },
      {
        id: 2932,
        cidade: 'Santa Terezinha',
        estado_id: 16
      },
      {
        id: 2933,
        cidade: 'São Benedito do Sul',
        estado_id: 16
      },
      {
        id: 2934,
        cidade: 'São Bento do Una',
        estado_id: 16
      },
      {
        id: 2935,
        cidade: 'São Caitano',
        estado_id: 16
      },
      {
        id: 2936,
        cidade: 'São João',
        estado_id: 16
      },
      {
        id: 2937,
        cidade: 'São Joaquim do Monte',
        estado_id: 16
      },
      {
        id: 2938,
        cidade: 'São José da Coroa Grande',
        estado_id: 16
      },
      {
        id: 2939,
        cidade: 'São José do Belmonte',
        estado_id: 16
      },
      {
        id: 2940,
        cidade: 'São José do Egito',
        estado_id: 16
      },
      {
        id: 2941,
        cidade: 'São Lourenço da Mata',
        estado_id: 16
      },
      {
        id: 2942,
        cidade: 'São Vicente Ferrer',
        estado_id: 16
      },
      {
        id: 2943,
        cidade: 'Serra Talhada',
        estado_id: 16
      },
      {
        id: 2944,
        cidade: 'Serrita',
        estado_id: 16
      },
      {
        id: 2945,
        cidade: 'Sertânia',
        estado_id: 16
      },
      {
        id: 2946,
        cidade: 'Sirinhaém',
        estado_id: 16
      },
      {
        id: 2947,
        cidade: 'Moreilândia',
        estado_id: 16
      },
      {
        id: 2948,
        cidade: 'Solidão',
        estado_id: 16
      },
      {
        id: 2949,
        cidade: 'Surubim',
        estado_id: 16
      },
      {
        id: 2950,
        cidade: 'Tabira',
        estado_id: 16
      },
      {
        id: 2951,
        cidade: 'Tacaimbó',
        estado_id: 16
      },
      {
        id: 2952,
        cidade: 'Tacaratu',
        estado_id: 16
      },
      {
        id: 2953,
        cidade: 'Tamandaré',
        estado_id: 16
      },
      {
        id: 2954,
        cidade: 'Taquaritinga do Norte',
        estado_id: 16
      },
      {
        id: 2955,
        cidade: 'Terezinha',
        estado_id: 16
      },
      {
        id: 2956,
        cidade: 'Terra Nova',
        estado_id: 16
      },
      {
        id: 2957,
        cidade: 'Timbaúba',
        estado_id: 16
      },
      {
        id: 2958,
        cidade: 'Toritama',
        estado_id: 16
      },
      {
        id: 2959,
        cidade: 'Tracunhaém',
        estado_id: 16
      },
      {
        id: 2960,
        cidade: 'Trindade',
        estado_id: 16
      },
      {
        id: 2961,
        cidade: 'Triunfo',
        estado_id: 16
      },
      {
        id: 2962,
        cidade: 'Tupanatinga',
        estado_id: 16
      },
      {
        id: 2963,
        cidade: 'Tuparetama',
        estado_id: 16
      },
      {
        id: 2964,
        cidade: 'Venturosa',
        estado_id: 16
      },
      {
        id: 2965,
        cidade: 'Verdejante',
        estado_id: 16
      },
      {
        id: 2966,
        cidade: 'Vertente do Lério',
        estado_id: 16
      },
      {
        id: 2967,
        cidade: 'Vertentes',
        estado_id: 16
      },
      {
        id: 2968,
        cidade: 'Vicência',
        estado_id: 16
      },
      {
        id: 2969,
        cidade: 'Vitória de Santo Antão',
        estado_id: 16
      },
      {
        id: 2970,
        cidade: 'Xexéu',
        estado_id: 16
      },
      {
        id: 2971,
        cidade: 'Acauã',
        estado_id: 17
      },
      {
        id: 2972,
        cidade: 'Agricolândia',
        estado_id: 17
      },
      {
        id: 2973,
        cidade: 'Água Branca',
        estado_id: 17
      },
      {
        id: 2974,
        cidade: 'Alagoinha do Piauí',
        estado_id: 17
      },
      {
        id: 2975,
        cidade: 'Alegrete do Piauí',
        estado_id: 17
      },
      {
        id: 2976,
        cidade: 'Alto Longá',
        estado_id: 17
      },
      {
        id: 2977,
        cidade: 'Altos',
        estado_id: 17
      },
      {
        id: 2978,
        cidade: 'Alvorada do Gurguéia',
        estado_id: 17
      },
      {
        id: 2979,
        cidade: 'Amarante',
        estado_id: 17
      },
      {
        id: 2980,
        cidade: 'Angical do Piauí',
        estado_id: 17
      },
      {
        id: 2981,
        cidade: 'Anísio de Abreu',
        estado_id: 17
      },
      {
        id: 2982,
        cidade: 'Antônio Almeida',
        estado_id: 17
      },
      {
        id: 2983,
        cidade: 'Aroazes',
        estado_id: 17
      },
      {
        id: 2984,
        cidade: 'Aroeiras do Itaim',
        estado_id: 17
      },
      {
        id: 2985,
        cidade: 'Arraial',
        estado_id: 17
      },
      {
        id: 2986,
        cidade: 'Assunção do Piauí',
        estado_id: 17
      },
      {
        id: 2987,
        cidade: 'Avelino Lopes',
        estado_id: 17
      },
      {
        id: 2988,
        cidade: 'Baixa Grande do Ribeiro',
        estado_id: 17
      },
      {
        id: 2989,
        cidade: 'Barra D´alcântara',
        estado_id: 17
      },
      {
        id: 2990,
        cidade: 'Barras',
        estado_id: 17
      },
      {
        id: 2991,
        cidade: 'Barreiras do Piauí',
        estado_id: 17
      },
      {
        id: 2992,
        cidade: 'Barro Duro',
        estado_id: 17
      },
      {
        id: 2993,
        cidade: 'Batalha',
        estado_id: 17
      },
      {
        id: 2994,
        cidade: 'Bela Vista do Piauí',
        estado_id: 17
      },
      {
        id: 2995,
        cidade: 'Belém do Piauí',
        estado_id: 17
      },
      {
        id: 2996,
        cidade: 'Beneditinos',
        estado_id: 17
      },
      {
        id: 2997,
        cidade: 'Bertolínia',
        estado_id: 17
      },
      {
        id: 2998,
        cidade: 'Betânia do Piauí',
        estado_id: 17
      },
      {
        id: 2999,
        cidade: 'Boa Hora',
        estado_id: 17
      },
      {
        id: 3000,
        cidade: 'Bocaina',
        estado_id: 17
      },
      {
        id: 3001,
        cidade: 'Bom Jesus',
        estado_id: 17
      },
      {
        id: 3002,
        cidade: 'Bom Princípio do Piauí',
        estado_id: 17
      },
      {
        id: 3003,
        cidade: 'Bonfim do Piauí',
        estado_id: 17
      },
      {
        id: 3004,
        cidade: 'Boqueirão do Piauí',
        estado_id: 17
      },
      {
        id: 3005,
        cidade: 'Brasileira',
        estado_id: 17
      },
      {
        id: 3006,
        cidade: 'Brejo do Piauí',
        estado_id: 17
      },
      {
        id: 3007,
        cidade: 'Buriti Dos Lopes',
        estado_id: 17
      },
      {
        id: 3008,
        cidade: 'Buriti Dos Montes',
        estado_id: 17
      },
      {
        id: 3009,
        cidade: 'Cabeceiras do Piauí',
        estado_id: 17
      },
      {
        id: 3010,
        cidade: 'Cajazeiras do Piauí',
        estado_id: 17
      },
      {
        id: 3011,
        cidade: 'Cajueiro da Praia',
        estado_id: 17
      },
      {
        id: 3012,
        cidade: 'Caldeirão Grande do Piauí',
        estado_id: 17
      },
      {
        id: 3013,
        cidade: 'Campinas do Piauí',
        estado_id: 17
      },
      {
        id: 3014,
        cidade: 'Campo Alegre do Fidalgo',
        estado_id: 17
      },
      {
        id: 3015,
        cidade: 'Campo Grande do Piauí',
        estado_id: 17
      },
      {
        id: 3016,
        cidade: 'Campo Largo do Piauí',
        estado_id: 17
      },
      {
        id: 3017,
        cidade: 'Campo Maior',
        estado_id: 17
      },
      {
        id: 3018,
        cidade: 'Canavieira',
        estado_id: 17
      },
      {
        id: 3019,
        cidade: 'Canto do Buriti',
        estado_id: 17
      },
      {
        id: 3020,
        cidade: 'Capitão de Campos',
        estado_id: 17
      },
      {
        id: 3021,
        cidade: 'Capitão Gervásio Oliveira',
        estado_id: 17
      },
      {
        id: 3022,
        cidade: 'Caracol',
        estado_id: 17
      },
      {
        id: 3023,
        cidade: 'Caraúbas do Piauí',
        estado_id: 17
      },
      {
        id: 3024,
        cidade: 'Caridade do Piauí',
        estado_id: 17
      },
      {
        id: 3025,
        cidade: 'Castelo do Piauí',
        estado_id: 17
      },
      {
        id: 3026,
        cidade: 'Caxingó',
        estado_id: 17
      },
      {
        id: 3027,
        cidade: 'Cocal',
        estado_id: 17
      },
      {
        id: 3028,
        cidade: 'Cocal de Telha',
        estado_id: 17
      },
      {
        id: 3029,
        cidade: 'Cocal Dos Alves',
        estado_id: 17
      },
      {
        id: 3030,
        cidade: 'Coivaras',
        estado_id: 17
      },
      {
        id: 3031,
        cidade: 'Colônia do Gurguéia',
        estado_id: 17
      },
      {
        id: 3032,
        cidade: 'Colônia do Piauí',
        estado_id: 17
      },
      {
        id: 3033,
        cidade: 'Conceição do Canindé',
        estado_id: 17
      },
      {
        id: 3034,
        cidade: 'Coronel José Dias',
        estado_id: 17
      },
      {
        id: 3035,
        cidade: 'Corrente',
        estado_id: 17
      },
      {
        id: 3036,
        cidade: 'Cristalândia do Piauí',
        estado_id: 17
      },
      {
        id: 3037,
        cidade: 'Cristino Castro',
        estado_id: 17
      },
      {
        id: 3038,
        cidade: 'Curimatá',
        estado_id: 17
      },
      {
        id: 3039,
        cidade: 'Currais',
        estado_id: 17
      },
      {
        id: 3040,
        cidade: 'Curralinhos',
        estado_id: 17
      },
      {
        id: 3041,
        cidade: 'Curral Novo do Piauí',
        estado_id: 17
      },
      {
        id: 3042,
        cidade: 'Demerval Lobão',
        estado_id: 17
      },
      {
        id: 3043,
        cidade: 'Dirceu Arcoverde',
        estado_id: 17
      },
      {
        id: 3044,
        cidade: 'Dom Expedito Lopes',
        estado_id: 17
      },
      {
        id: 3045,
        cidade: 'Domingos Mourão',
        estado_id: 17
      },
      {
        id: 3046,
        cidade: 'Dom Inocêncio',
        estado_id: 17
      },
      {
        id: 3047,
        cidade: 'Elesbão Veloso',
        estado_id: 17
      },
      {
        id: 3048,
        cidade: 'Eliseu Martins',
        estado_id: 17
      },
      {
        id: 3049,
        cidade: 'Esperantina',
        estado_id: 17
      },
      {
        id: 3050,
        cidade: 'Fartura do Piauí',
        estado_id: 17
      },
      {
        id: 3051,
        cidade: 'Flores do Piauí',
        estado_id: 17
      },
      {
        id: 3052,
        cidade: 'Floresta do Piauí',
        estado_id: 17
      },
      {
        id: 3053,
        cidade: 'Floriano',
        estado_id: 17
      },
      {
        id: 3054,
        cidade: 'Francinópolis',
        estado_id: 17
      },
      {
        id: 3055,
        cidade: 'Francisco Ayres',
        estado_id: 17
      },
      {
        id: 3056,
        cidade: 'Francisco Macedo',
        estado_id: 17
      },
      {
        id: 3057,
        cidade: 'Francisco Santos',
        estado_id: 17
      },
      {
        id: 3058,
        cidade: 'Fronteiras',
        estado_id: 17
      },
      {
        id: 3059,
        cidade: 'Geminiano',
        estado_id: 17
      },
      {
        id: 3060,
        cidade: 'Gilbués',
        estado_id: 17
      },
      {
        id: 3061,
        cidade: 'Guadalupe',
        estado_id: 17
      },
      {
        id: 3062,
        cidade: 'Guaribas',
        estado_id: 17
      },
      {
        id: 3063,
        cidade: 'Hugo Napoleão',
        estado_id: 17
      },
      {
        id: 3064,
        cidade: 'Ilha Grande',
        estado_id: 17
      },
      {
        id: 3065,
        cidade: 'Inhuma',
        estado_id: 17
      },
      {
        id: 3066,
        cidade: 'Ipiranga do Piauí',
        estado_id: 17
      },
      {
        id: 3067,
        cidade: 'Isaías Coelho',
        estado_id: 17
      },
      {
        id: 3068,
        cidade: 'Itainópolis',
        estado_id: 17
      },
      {
        id: 3069,
        cidade: 'Itaueira',
        estado_id: 17
      },
      {
        id: 3070,
        cidade: 'Jacobina do Piauí',
        estado_id: 17
      },
      {
        id: 3071,
        cidade: 'Jaicós',
        estado_id: 17
      },
      {
        id: 3072,
        cidade: 'Jardim do Mulato',
        estado_id: 17
      },
      {
        id: 3073,
        cidade: 'Jatobá do Piauí',
        estado_id: 17
      },
      {
        id: 3074,
        cidade: 'Jerumenha',
        estado_id: 17
      },
      {
        id: 3075,
        cidade: 'João Costa',
        estado_id: 17
      },
      {
        id: 3076,
        cidade: 'Joaquim Pires',
        estado_id: 17
      },
      {
        id: 3077,
        cidade: 'Joca Marques',
        estado_id: 17
      },
      {
        id: 3078,
        cidade: 'José de Freitas',
        estado_id: 17
      },
      {
        id: 3079,
        cidade: 'Juazeiro do Piauí',
        estado_id: 17
      },
      {
        id: 3080,
        cidade: 'Júlio Borges',
        estado_id: 17
      },
      {
        id: 3081,
        cidade: 'Jurema',
        estado_id: 17
      },
      {
        id: 3082,
        cidade: 'Lagoinha do Piauí',
        estado_id: 17
      },
      {
        id: 3083,
        cidade: 'Lagoa Alegre',
        estado_id: 17
      },
      {
        id: 3084,
        cidade: 'Lagoa do Barro do Piauí',
        estado_id: 17
      },
      {
        id: 3085,
        cidade: 'Lagoa de São Francisco',
        estado_id: 17
      },
      {
        id: 3086,
        cidade: 'Lagoa do Piauí',
        estado_id: 17
      },
      {
        id: 3087,
        cidade: 'Lagoa do Sítio',
        estado_id: 17
      },
      {
        id: 3088,
        cidade: 'Landri Sales',
        estado_id: 17
      },
      {
        id: 3089,
        cidade: 'Luís Correia',
        estado_id: 17
      },
      {
        id: 3090,
        cidade: 'Luzilândia',
        estado_id: 17
      },
      {
        id: 3091,
        cidade: 'Madeiro',
        estado_id: 17
      },
      {
        id: 3092,
        cidade: 'Manoel Emídio',
        estado_id: 17
      },
      {
        id: 3093,
        cidade: 'Marcolândia',
        estado_id: 17
      },
      {
        id: 3094,
        cidade: 'Marcos Parente',
        estado_id: 17
      },
      {
        id: 3095,
        cidade: 'Massapê do Piauí',
        estado_id: 17
      },
      {
        id: 3096,
        cidade: 'Matias Olímpio',
        estado_id: 17
      },
      {
        id: 3097,
        cidade: 'Miguel Alves',
        estado_id: 17
      },
      {
        id: 3098,
        cidade: 'Miguel Leão',
        estado_id: 17
      },
      {
        id: 3099,
        cidade: 'Milton Brandão',
        estado_id: 17
      },
      {
        id: 3100,
        cidade: 'Monsenhor Gil',
        estado_id: 17
      },
      {
        id: 3101,
        cidade: 'Monsenhor Hipólito',
        estado_id: 17
      },
      {
        id: 3102,
        cidade: 'Monte Alegre do Piauí',
        estado_id: 17
      },
      {
        id: 3103,
        cidade: 'Morro Cabeça no Tempo',
        estado_id: 17
      },
      {
        id: 3104,
        cidade: 'Morro do Chapéu do Piauí',
        estado_id: 17
      },
      {
        id: 3105,
        cidade: 'Murici Dos Portelas',
        estado_id: 17
      },
      {
        id: 3106,
        cidade: 'Nazaré do Piauí',
        estado_id: 17
      },
      {
        id: 3107,
        cidade: 'Nazária',
        estado_id: 17
      },
      {
        id: 3108,
        cidade: 'Nossa Senhora de Nazaré',
        estado_id: 17
      },
      {
        id: 3109,
        cidade: 'Nossa Senhora Dos Remédios',
        estado_id: 17
      },
      {
        id: 3110,
        cidade: 'Novo Oriente do Piauí',
        estado_id: 17
      },
      {
        id: 3111,
        cidade: 'Novo Santo Antônio',
        estado_id: 17
      },
      {
        id: 3112,
        cidade: 'Oeiras',
        estado_id: 17
      },
      {
        id: 3113,
        cidade: 'Olho D´água do Piauí',
        estado_id: 17
      },
      {
        id: 3114,
        cidade: 'Padre Marcos',
        estado_id: 17
      },
      {
        id: 3115,
        cidade: 'Paes Landim',
        estado_id: 17
      },
      {
        id: 3116,
        cidade: 'Pajeú do Piauí',
        estado_id: 17
      },
      {
        id: 3117,
        cidade: 'Palmeira do Piauí',
        estado_id: 17
      },
      {
        id: 3118,
        cidade: 'Palmeirais',
        estado_id: 17
      },
      {
        id: 3119,
        cidade: 'Paquetá',
        estado_id: 17
      },
      {
        id: 3120,
        cidade: 'Parnaguá',
        estado_id: 17
      },
      {
        id: 3121,
        cidade: 'Parnaíba',
        estado_id: 17
      },
      {
        id: 3122,
        cidade: 'Passagem Franca do Piauí',
        estado_id: 17
      },
      {
        id: 3123,
        cidade: 'Patos do Piauí',
        estado_id: 17
      },
      {
        id: 3124,
        cidade: 'Pau D´arco do Piauí',
        estado_id: 17
      },
      {
        id: 3125,
        cidade: 'Paulistana',
        estado_id: 17
      },
      {
        id: 3126,
        cidade: 'Pavussu',
        estado_id: 17
      },
      {
        id: 3127,
        cidade: 'Pedro ii',
        estado_id: 17
      },
      {
        id: 3128,
        cidade: 'Pedro Laurentino',
        estado_id: 17
      },
      {
        id: 3129,
        cidade: 'Nova Santa Rita',
        estado_id: 17
      },
      {
        id: 3130,
        cidade: 'Picos',
        estado_id: 17
      },
      {
        id: 3131,
        cidade: 'Pimenteiras',
        estado_id: 17
      },
      {
        id: 3132,
        cidade: 'Pio ix',
        estado_id: 17
      },
      {
        id: 3133,
        cidade: 'Piracuruca',
        estado_id: 17
      },
      {
        id: 3134,
        cidade: 'Piripiri',
        estado_id: 17
      },
      {
        id: 3135,
        cidade: 'Porto',
        estado_id: 17
      },
      {
        id: 3136,
        cidade: 'Porto Alegre do Piauí',
        estado_id: 17
      },
      {
        id: 3137,
        cidade: 'Prata do Piauí',
        estado_id: 17
      },
      {
        id: 3138,
        cidade: 'Queimada Nova',
        estado_id: 17
      },
      {
        id: 3139,
        cidade: 'Redenção do Gurguéia',
        estado_id: 17
      },
      {
        id: 3140,
        cidade: 'Regeneração',
        estado_id: 17
      },
      {
        id: 3141,
        cidade: 'Riacho Frio',
        estado_id: 17
      },
      {
        id: 3142,
        cidade: 'Ribeira do Piauí',
        estado_id: 17
      },
      {
        id: 3143,
        cidade: 'Ribeiro Gonçalves',
        estado_id: 17
      },
      {
        id: 3144,
        cidade: 'Rio Grande do Piauí',
        estado_id: 17
      },
      {
        id: 3145,
        cidade: 'Santa Cruz do Piauí',
        estado_id: 17
      },
      {
        id: 3146,
        cidade: 'Santa Cruz Dos Milagres',
        estado_id: 17
      },
      {
        id: 3147,
        cidade: 'Santa Filomena',
        estado_id: 17
      },
      {
        id: 3148,
        cidade: 'Santa Luz',
        estado_id: 17
      },
      {
        id: 3149,
        cidade: 'Santana do Piauí',
        estado_id: 17
      },
      {
        id: 3150,
        cidade: 'Santa Rosa do Piauí',
        estado_id: 17
      },
      {
        id: 3151,
        cidade: 'Santo Antônio de Lisboa',
        estado_id: 17
      },
      {
        id: 3152,
        cidade: 'Santo Antônio Dos Milagres',
        estado_id: 17
      },
      {
        id: 3153,
        cidade: 'Santo Inácio do Piauí',
        estado_id: 17
      },
      {
        id: 3154,
        cidade: 'São Braz do Piauí',
        estado_id: 17
      },
      {
        id: 3155,
        cidade: 'São Félix do Piauí',
        estado_id: 17
      },
      {
        id: 3156,
        cidade: 'São Francisco de Assis do Piauí',
        estado_id: 17
      },
      {
        id: 3157,
        cidade: 'São Francisco do Piauí',
        estado_id: 17
      },
      {
        id: 3158,
        cidade: 'São Gonçalo do Gurguéia',
        estado_id: 17
      },
      {
        id: 3159,
        cidade: 'São Gonçalo do Piauí',
        estado_id: 17
      },
      {
        id: 3160,
        cidade: 'São João da Canabrava',
        estado_id: 17
      },
      {
        id: 3161,
        cidade: 'São João da Fronteira',
        estado_id: 17
      },
      {
        id: 3162,
        cidade: 'São João da Serra',
        estado_id: 17
      },
      {
        id: 3163,
        cidade: 'São João da Varjota',
        estado_id: 17
      },
      {
        id: 3164,
        cidade: 'São João do Arraial',
        estado_id: 17
      },
      {
        id: 3165,
        cidade: 'São João do Piauí',
        estado_id: 17
      },
      {
        id: 3166,
        cidade: 'São José do Divino',
        estado_id: 17
      },
      {
        id: 3167,
        cidade: 'São José do Peixe',
        estado_id: 17
      },
      {
        id: 3168,
        cidade: 'São José do Piauí',
        estado_id: 17
      },
      {
        id: 3169,
        cidade: 'São Julião',
        estado_id: 17
      },
      {
        id: 3170,
        cidade: 'São Lourenço do Piauí',
        estado_id: 17
      },
      {
        id: 3171,
        cidade: 'São Luis do Piauí',
        estado_id: 17
      },
      {
        id: 3172,
        cidade: 'São Miguel da Baixa Grande',
        estado_id: 17
      },
      {
        id: 3173,
        cidade: 'São Miguel do Fidalgo',
        estado_id: 17
      },
      {
        id: 3174,
        cidade: 'São Miguel do Tapuio',
        estado_id: 17
      },
      {
        id: 3175,
        cidade: 'São Pedro do Piauí',
        estado_id: 17
      },
      {
        id: 3176,
        cidade: 'São Raimundo Nonato',
        estado_id: 17
      },
      {
        id: 3177,
        cidade: 'Sebastião Barros',
        estado_id: 17
      },
      {
        id: 3178,
        cidade: 'Sebastião Leal',
        estado_id: 17
      },
      {
        id: 3179,
        cidade: 'Sigefredo Pacheco',
        estado_id: 17
      },
      {
        id: 3180,
        cidade: 'Simões',
        estado_id: 17
      },
      {
        id: 3181,
        cidade: 'Simplício Mendes',
        estado_id: 17
      },
      {
        id: 3182,
        cidade: 'Socorro do Piauí',
        estado_id: 17
      },
      {
        id: 3183,
        cidade: 'Sussuapara',
        estado_id: 17
      },
      {
        id: 3184,
        cidade: 'Tamboril do Piauí',
        estado_id: 17
      },
      {
        id: 3185,
        cidade: 'Tanque do Piauí',
        estado_id: 17
      },
      {
        id: 3186,
        cidade: 'Teresina',
        estado_id: 17
      },
      {
        id: 3187,
        cidade: 'União',
        estado_id: 17
      },
      {
        id: 3188,
        cidade: 'Uruçuí',
        estado_id: 17
      },
      {
        id: 3189,
        cidade: 'Valença do Piauí',
        estado_id: 17
      },
      {
        id: 3190,
        cidade: 'Várzea Branca',
        estado_id: 17
      },
      {
        id: 3191,
        cidade: 'Várzea Grande',
        estado_id: 17
      },
      {
        id: 3192,
        cidade: 'Vera Mendes',
        estado_id: 17
      },
      {
        id: 3193,
        cidade: 'Vila Nova do Piauí',
        estado_id: 17
      },
      {
        id: 3194,
        cidade: 'Wall Ferraz',
        estado_id: 17
      },
      {
        id: 3195,
        cidade: 'Abatiá',
        estado_id: 18
      },
      {
        id: 3196,
        cidade: 'Adrianópolis',
        estado_id: 18
      },
      {
        id: 3197,
        cidade: 'Agudos do Sul',
        estado_id: 18
      },
      {
        id: 3198,
        cidade: 'Almirante Tamandaré',
        estado_id: 18
      },
      {
        id: 3199,
        cidade: 'Altamira do Paraná',
        estado_id: 18
      },
      {
        id: 3200,
        cidade: 'Altônia',
        estado_id: 18
      },
      {
        id: 3201,
        cidade: 'Alto Paraná',
        estado_id: 18
      },
      {
        id: 3202,
        cidade: 'Alto Piquiri',
        estado_id: 18
      },
      {
        id: 3203,
        cidade: 'Alvorada do Sul',
        estado_id: 18
      },
      {
        id: 3204,
        cidade: 'Amaporã',
        estado_id: 18
      },
      {
        id: 3205,
        cidade: 'Ampére',
        estado_id: 18
      },
      {
        id: 3206,
        cidade: 'Anahy',
        estado_id: 18
      },
      {
        id: 3207,
        cidade: 'Andirá',
        estado_id: 18
      },
      {
        id: 3208,
        cidade: 'Ângulo',
        estado_id: 18
      },
      {
        id: 3209,
        cidade: 'Antonina',
        estado_id: 18
      },
      {
        id: 3210,
        cidade: 'Antônio Olinto',
        estado_id: 18
      },
      {
        id: 3211,
        cidade: 'Apucarana',
        estado_id: 18
      },
      {
        id: 3212,
        cidade: 'Arapongas',
        estado_id: 18
      },
      {
        id: 3213,
        cidade: 'Arapoti',
        estado_id: 18
      },
      {
        id: 3214,
        cidade: 'Arapuã',
        estado_id: 18
      },
      {
        id: 3215,
        cidade: 'Araruna',
        estado_id: 18
      },
      {
        id: 3216,
        cidade: 'Araucária',
        estado_id: 18
      },
      {
        id: 3217,
        cidade: 'Ariranha do Ivaí',
        estado_id: 18
      },
      {
        id: 3218,
        cidade: 'Assaí',
        estado_id: 18
      },
      {
        id: 3219,
        cidade: 'Assis Chateaubriand',
        estado_id: 18
      },
      {
        id: 3220,
        cidade: 'Astorga',
        estado_id: 18
      },
      {
        id: 3221,
        cidade: 'Atalaia',
        estado_id: 18
      },
      {
        id: 3222,
        cidade: 'Balsa Nova',
        estado_id: 18
      },
      {
        id: 3223,
        cidade: 'Bandeirantes',
        estado_id: 18
      },
      {
        id: 3224,
        cidade: 'Barbosa Ferraz',
        estado_id: 18
      },
      {
        id: 3225,
        cidade: 'Barracão',
        estado_id: 18
      },
      {
        id: 3226,
        cidade: 'Barra do Jacaré',
        estado_id: 18
      },
      {
        id: 3227,
        cidade: 'Bela Vista da Caroba',
        estado_id: 18
      },
      {
        id: 3228,
        cidade: 'Bela Vista do Paraíso',
        estado_id: 18
      },
      {
        id: 3229,
        cidade: 'Bituruna',
        estado_id: 18
      },
      {
        id: 3230,
        cidade: 'Boa Esperança',
        estado_id: 18
      },
      {
        id: 3231,
        cidade: 'Boa Esperança do Iguaçu',
        estado_id: 18
      },
      {
        id: 3232,
        cidade: 'Boa Ventura de São Roque',
        estado_id: 18
      },
      {
        id: 3233,
        cidade: 'Boa Vista da Aparecida',
        estado_id: 18
      },
      {
        id: 3234,
        cidade: 'Bocaiúva do Sul',
        estado_id: 18
      },
      {
        id: 3235,
        cidade: 'Bom Jesus do Sul',
        estado_id: 18
      },
      {
        id: 3236,
        cidade: 'Bom Sucesso',
        estado_id: 18
      },
      {
        id: 3237,
        cidade: 'Bom Sucesso do Sul',
        estado_id: 18
      },
      {
        id: 3238,
        cidade: 'Borrazópolis',
        estado_id: 18
      },
      {
        id: 3239,
        cidade: 'Braganey',
        estado_id: 18
      },
      {
        id: 3240,
        cidade: 'Brasilândia do Sul',
        estado_id: 18
      },
      {
        id: 3241,
        cidade: 'Cafeara',
        estado_id: 18
      },
      {
        id: 3242,
        cidade: 'Cafelândia',
        estado_id: 18
      },
      {
        id: 3243,
        cidade: 'Cafezal do Sul',
        estado_id: 18
      },
      {
        id: 3244,
        cidade: 'Califórnia',
        estado_id: 18
      },
      {
        id: 3245,
        cidade: 'Cambará',
        estado_id: 18
      },
      {
        id: 3246,
        cidade: 'Cambé',
        estado_id: 18
      },
      {
        id: 3247,
        cidade: 'Cambira',
        estado_id: 18
      },
      {
        id: 3248,
        cidade: 'Campina da Lagoa',
        estado_id: 18
      },
      {
        id: 3249,
        cidade: 'Campina do Simão',
        estado_id: 18
      },
      {
        id: 3250,
        cidade: 'Campina Grande do Sul',
        estado_id: 18
      },
      {
        id: 3251,
        cidade: 'Campo Bonito',
        estado_id: 18
      },
      {
        id: 3252,
        cidade: 'Campo do Tenente',
        estado_id: 18
      },
      {
        id: 3253,
        cidade: 'Campo Largo',
        estado_id: 18
      },
      {
        id: 3254,
        cidade: 'Campo Magro',
        estado_id: 18
      },
      {
        id: 3255,
        cidade: 'Campo Mourão',
        estado_id: 18
      },
      {
        id: 3256,
        cidade: 'Cândido de Abreu',
        estado_id: 18
      },
      {
        id: 3257,
        cidade: 'Candói',
        estado_id: 18
      },
      {
        id: 3258,
        cidade: 'Cantagalo',
        estado_id: 18
      },
      {
        id: 3259,
        cidade: 'Capanema',
        estado_id: 18
      },
      {
        id: 3260,
        cidade: 'Capitão Leônidas Marques',
        estado_id: 18
      },
      {
        id: 3261,
        cidade: 'Carambeí',
        estado_id: 18
      },
      {
        id: 3262,
        cidade: 'Carlópolis',
        estado_id: 18
      },
      {
        id: 3263,
        cidade: 'Cascavel',
        estado_id: 18
      },
      {
        id: 3264,
        cidade: 'Castro',
        estado_id: 18
      },
      {
        id: 3265,
        cidade: 'Catanduvas',
        estado_id: 18
      },
      {
        id: 3266,
        cidade: 'Centenário do Sul',
        estado_id: 18
      },
      {
        id: 3267,
        cidade: 'Cerro Azul',
        estado_id: 18
      },
      {
        id: 3268,
        cidade: 'Céu Azul',
        estado_id: 18
      },
      {
        id: 3269,
        cidade: 'Chopinzinho',
        estado_id: 18
      },
      {
        id: 3270,
        cidade: 'Cianorte',
        estado_id: 18
      },
      {
        id: 3271,
        cidade: 'Cidade Gaúcha',
        estado_id: 18
      },
      {
        id: 3272,
        cidade: 'Clevelândia',
        estado_id: 18
      },
      {
        id: 3273,
        cidade: 'Colombo',
        estado_id: 18
      },
      {
        id: 3274,
        cidade: 'Colorado',
        estado_id: 18
      },
      {
        id: 3275,
        cidade: 'Congonhinhas',
        estado_id: 18
      },
      {
        id: 3276,
        cidade: 'Conselheiro Mairinck',
        estado_id: 18
      },
      {
        id: 3277,
        cidade: 'Contenda',
        estado_id: 18
      },
      {
        id: 3278,
        cidade: 'Corbélia',
        estado_id: 18
      },
      {
        id: 3279,
        cidade: 'Cornélio Procópio',
        estado_id: 18
      },
      {
        id: 3280,
        cidade: 'Coronel Domingos Soares',
        estado_id: 18
      },
      {
        id: 3281,
        cidade: 'Coronel Vivida',
        estado_id: 18
      },
      {
        id: 3282,
        cidade: 'Corumbataí do Sul',
        estado_id: 18
      },
      {
        id: 3283,
        cidade: 'Cruzeiro do Iguaçu',
        estado_id: 18
      },
      {
        id: 3284,
        cidade: 'Cruzeiro do Oeste',
        estado_id: 18
      },
      {
        id: 3285,
        cidade: 'Cruzeiro do Sul',
        estado_id: 18
      },
      {
        id: 3286,
        cidade: 'Cruz Machado',
        estado_id: 18
      },
      {
        id: 3287,
        cidade: 'Cruzmaltina',
        estado_id: 18
      },
      {
        id: 3288,
        cidade: 'Curitiba',
        estado_id: 18
      },
      {
        id: 3289,
        cidade: 'Curiúva',
        estado_id: 18
      },
      {
        id: 3290,
        cidade: 'Diamante do Norte',
        estado_id: 18
      },
      {
        id: 3291,
        cidade: 'Diamante do Sul',
        estado_id: 18
      },
      {
        id: 3292,
        cidade: 'Diamante D´oeste',
        estado_id: 18
      },
      {
        id: 3293,
        cidade: 'Dois Vizinhos',
        estado_id: 18
      },
      {
        id: 3294,
        cidade: 'Douradina',
        estado_id: 18
      },
      {
        id: 3295,
        cidade: 'Doutor Camargo',
        estado_id: 18
      },
      {
        id: 3296,
        cidade: 'Enéas Marques',
        estado_id: 18
      },
      {
        id: 3297,
        cidade: 'Engenheiro Beltrão',
        estado_id: 18
      },
      {
        id: 3298,
        cidade: 'Esperança Nova',
        estado_id: 18
      },
      {
        id: 3299,
        cidade: 'Entre Rios do Oeste',
        estado_id: 18
      },
      {
        id: 3300,
        cidade: 'Espigão Alto do Iguaçu',
        estado_id: 18
      },
      {
        id: 3301,
        cidade: 'Farol',
        estado_id: 18
      },
      {
        id: 3302,
        cidade: 'Faxinal',
        estado_id: 18
      },
      {
        id: 3303,
        cidade: 'Fazenda Rio Grande',
        estado_id: 18
      },
      {
        id: 3304,
        cidade: 'Fênix',
        estado_id: 18
      },
      {
        id: 3305,
        cidade: 'Fernandes Pinheiro',
        estado_id: 18
      },
      {
        id: 3306,
        cidade: 'Figueira',
        estado_id: 18
      },
      {
        id: 3307,
        cidade: 'Floraí',
        estado_id: 18
      },
      {
        id: 3308,
        cidade: 'Flor da Serra do Sul',
        estado_id: 18
      },
      {
        id: 3309,
        cidade: 'Floresta',
        estado_id: 18
      },
      {
        id: 3310,
        cidade: 'Florestópolis',
        estado_id: 18
      },
      {
        id: 3311,
        cidade: 'Flórida',
        estado_id: 18
      },
      {
        id: 3312,
        cidade: 'Formosa do Oeste',
        estado_id: 18
      },
      {
        id: 3313,
        cidade: 'Foz do Iguaçu',
        estado_id: 18
      },
      {
        id: 3314,
        cidade: 'Francisco Alves',
        estado_id: 18
      },
      {
        id: 3315,
        cidade: 'Francisco Beltrão',
        estado_id: 18
      },
      {
        id: 3316,
        cidade: 'Foz do Jordão',
        estado_id: 18
      },
      {
        id: 3317,
        cidade: 'General Carneiro',
        estado_id: 18
      },
      {
        id: 3318,
        cidade: 'Godoy Moreira',
        estado_id: 18
      },
      {
        id: 3319,
        cidade: 'Goioerê',
        estado_id: 18
      },
      {
        id: 3320,
        cidade: 'Goioxim',
        estado_id: 18
      },
      {
        id: 3321,
        cidade: 'Grandes Rios',
        estado_id: 18
      },
      {
        id: 3322,
        cidade: 'Guaíra',
        estado_id: 18
      },
      {
        id: 3323,
        cidade: 'Guairaçá',
        estado_id: 18
      },
      {
        id: 3324,
        cidade: 'Guamiranga',
        estado_id: 18
      },
      {
        id: 3325,
        cidade: 'Guapirama',
        estado_id: 18
      },
      {
        id: 3326,
        cidade: 'Guaporema',
        estado_id: 18
      },
      {
        id: 3327,
        cidade: 'Guaraci',
        estado_id: 18
      },
      {
        id: 3328,
        cidade: 'Guaraniaçu',
        estado_id: 18
      },
      {
        id: 3329,
        cidade: 'Guarapuava',
        estado_id: 18
      },
      {
        id: 3330,
        cidade: 'Guaraqueçaba',
        estado_id: 18
      },
      {
        id: 3331,
        cidade: 'Guaratuba',
        estado_id: 18
      },
      {
        id: 3332,
        cidade: 'Honório Serpa',
        estado_id: 18
      },
      {
        id: 3333,
        cidade: 'Ibaiti',
        estado_id: 18
      },
      {
        id: 3334,
        cidade: 'Ibema',
        estado_id: 18
      },
      {
        id: 3335,
        cidade: 'Ibiporã',
        estado_id: 18
      },
      {
        id: 3336,
        cidade: 'Icaraíma',
        estado_id: 18
      },
      {
        id: 3337,
        cidade: 'Iguaraçu',
        estado_id: 18
      },
      {
        id: 3338,
        cidade: 'Iguatu',
        estado_id: 18
      },
      {
        id: 3339,
        cidade: 'Imbaú',
        estado_id: 18
      },
      {
        id: 3340,
        cidade: 'Imbituva',
        estado_id: 18
      },
      {
        id: 3341,
        cidade: 'Inácio Martins',
        estado_id: 18
      },
      {
        id: 3342,
        cidade: 'Inajá',
        estado_id: 18
      },
      {
        id: 3343,
        cidade: 'Indianópolis',
        estado_id: 18
      },
      {
        id: 3344,
        cidade: 'Ipiranga',
        estado_id: 18
      },
      {
        id: 3345,
        cidade: 'Iporã',
        estado_id: 18
      },
      {
        id: 3346,
        cidade: 'Iracema do Oeste',
        estado_id: 18
      },
      {
        id: 3347,
        cidade: 'Irati',
        estado_id: 18
      },
      {
        id: 3348,
        cidade: 'Iretama',
        estado_id: 18
      },
      {
        id: 3349,
        cidade: 'Itaguajé',
        estado_id: 18
      },
      {
        id: 3350,
        cidade: 'Itaipulândia',
        estado_id: 18
      },
      {
        id: 3351,
        cidade: 'Itambaracá',
        estado_id: 18
      },
      {
        id: 3352,
        cidade: 'Itambé',
        estado_id: 18
      },
      {
        id: 3353,
        cidade: 'Itapejara D´oeste',
        estado_id: 18
      },
      {
        id: 3354,
        cidade: 'Itaperuçu',
        estado_id: 18
      },
      {
        id: 3355,
        cidade: 'Itaúna do Sul',
        estado_id: 18
      },
      {
        id: 3356,
        cidade: 'Ivaí',
        estado_id: 18
      },
      {
        id: 3357,
        cidade: 'Ivaiporã',
        estado_id: 18
      },
      {
        id: 3358,
        cidade: 'Ivaté',
        estado_id: 18
      },
      {
        id: 3359,
        cidade: 'Ivatuba',
        estado_id: 18
      },
      {
        id: 3360,
        cidade: 'Jaboti',
        estado_id: 18
      },
      {
        id: 3361,
        cidade: 'Jacarezinho',
        estado_id: 18
      },
      {
        id: 3362,
        cidade: 'Jaguapitã',
        estado_id: 18
      },
      {
        id: 3363,
        cidade: 'Jaguariaíva',
        estado_id: 18
      },
      {
        id: 3364,
        cidade: 'Jandaia do Sul',
        estado_id: 18
      },
      {
        id: 3365,
        cidade: 'Janiópolis',
        estado_id: 18
      },
      {
        id: 3366,
        cidade: 'Japira',
        estado_id: 18
      },
      {
        id: 3367,
        cidade: 'Japurá',
        estado_id: 18
      },
      {
        id: 3368,
        cidade: 'Jardim Alegre',
        estado_id: 18
      },
      {
        id: 3369,
        cidade: 'Jardim Olinda',
        estado_id: 18
      },
      {
        id: 3370,
        cidade: 'Jataizinho',
        estado_id: 18
      },
      {
        id: 3371,
        cidade: 'Jesuítas',
        estado_id: 18
      },
      {
        id: 3372,
        cidade: 'Joaquim Távora',
        estado_id: 18
      },
      {
        id: 3373,
        cidade: 'Jundiaí do Sul',
        estado_id: 18
      },
      {
        id: 3374,
        cidade: 'Juranda',
        estado_id: 18
      },
      {
        id: 3375,
        cidade: 'Jussara',
        estado_id: 18
      },
      {
        id: 3376,
        cidade: 'Kaloré',
        estado_id: 18
      },
      {
        id: 3377,
        cidade: 'Lapa',
        estado_id: 18
      },
      {
        id: 3378,
        cidade: 'Laranjal',
        estado_id: 18
      },
      {
        id: 3379,
        cidade: 'Laranjeiras do Sul',
        estado_id: 18
      },
      {
        id: 3380,
        cidade: 'Leópolis',
        estado_id: 18
      },
      {
        id: 3381,
        cidade: 'Lidianópolis',
        estado_id: 18
      },
      {
        id: 3382,
        cidade: 'Lindoeste',
        estado_id: 18
      },
      {
        id: 3383,
        cidade: 'Loanda',
        estado_id: 18
      },
      {
        id: 3384,
        cidade: 'Lobato',
        estado_id: 18
      },
      {
        id: 3385,
        cidade: 'Londrina',
        estado_id: 18
      },
      {
        id: 3386,
        cidade: 'Luiziana',
        estado_id: 18
      },
      {
        id: 3387,
        cidade: 'Lunardelli',
        estado_id: 18
      },
      {
        id: 3388,
        cidade: 'Lupionópolis',
        estado_id: 18
      },
      {
        id: 3389,
        cidade: 'Mallet',
        estado_id: 18
      },
      {
        id: 3390,
        cidade: 'Mamborê',
        estado_id: 18
      },
      {
        id: 3391,
        cidade: 'Mandaguaçu',
        estado_id: 18
      },
      {
        id: 3392,
        cidade: 'Mandaguari',
        estado_id: 18
      },
      {
        id: 3393,
        cidade: 'Mandirituba',
        estado_id: 18
      },
      {
        id: 3394,
        cidade: 'Manfrinópolis',
        estado_id: 18
      },
      {
        id: 3395,
        cidade: 'Mangueirinha',
        estado_id: 18
      },
      {
        id: 3396,
        cidade: 'Manoel Ribas',
        estado_id: 18
      },
      {
        id: 3397,
        cidade: 'Marechal Cândido Rondon',
        estado_id: 18
      },
      {
        id: 3398,
        cidade: 'Maria Helena',
        estado_id: 18
      },
      {
        id: 3399,
        cidade: 'Marialva',
        estado_id: 18
      },
      {
        id: 3400,
        cidade: 'Marilândia do Sul',
        estado_id: 18
      },
      {
        id: 3401,
        cidade: 'Marilena',
        estado_id: 18
      },
      {
        id: 3402,
        cidade: 'Mariluz',
        estado_id: 18
      },
      {
        id: 3403,
        cidade: 'Maringá',
        estado_id: 18
      },
      {
        id: 3404,
        cidade: 'Mariópolis',
        estado_id: 18
      },
      {
        id: 3405,
        cidade: 'Maripá',
        estado_id: 18
      },
      {
        id: 3406,
        cidade: 'Marmeleiro',
        estado_id: 18
      },
      {
        id: 3407,
        cidade: 'Marquinho',
        estado_id: 18
      },
      {
        id: 3408,
        cidade: 'Marumbi',
        estado_id: 18
      },
      {
        id: 3409,
        cidade: 'Matelândia',
        estado_id: 18
      },
      {
        id: 3410,
        cidade: 'Matinhos',
        estado_id: 18
      },
      {
        id: 3411,
        cidade: 'Mato Rico',
        estado_id: 18
      },
      {
        id: 3412,
        cidade: 'Mauá da Serra',
        estado_id: 18
      },
      {
        id: 3413,
        cidade: 'Medianeira',
        estado_id: 18
      },
      {
        id: 3414,
        cidade: 'Mercedes',
        estado_id: 18
      },
      {
        id: 3415,
        cidade: 'Mirador',
        estado_id: 18
      },
      {
        id: 3416,
        cidade: 'Miraselva',
        estado_id: 18
      },
      {
        id: 3417,
        cidade: 'Missal',
        estado_id: 18
      },
      {
        id: 3418,
        cidade: 'Moreira Sales',
        estado_id: 18
      },
      {
        id: 3419,
        cidade: 'Morretes',
        estado_id: 18
      },
      {
        id: 3420,
        cidade: 'Munhoz de Melo',
        estado_id: 18
      },
      {
        id: 3421,
        cidade: 'Nossa Senhora Das Graças',
        estado_id: 18
      },
      {
        id: 3422,
        cidade: 'Nova Aliança do Ivaí',
        estado_id: 18
      },
      {
        id: 3423,
        cidade: 'Nova América da Colina',
        estado_id: 18
      },
      {
        id: 3424,
        cidade: 'Nova Aurora',
        estado_id: 18
      },
      {
        id: 3425,
        cidade: 'Nova Cantu',
        estado_id: 18
      },
      {
        id: 3426,
        cidade: 'Nova Esperança',
        estado_id: 18
      },
      {
        id: 3427,
        cidade: 'Nova Esperança do Sudoeste',
        estado_id: 18
      },
      {
        id: 3428,
        cidade: 'Nova Fátima',
        estado_id: 18
      },
      {
        id: 3429,
        cidade: 'Nova Laranjeiras',
        estado_id: 18
      },
      {
        id: 3430,
        cidade: 'Nova Londrina',
        estado_id: 18
      },
      {
        id: 3431,
        cidade: 'Nova Olímpia',
        estado_id: 18
      },
      {
        id: 3432,
        cidade: 'Nova Santa Bárbara',
        estado_id: 18
      },
      {
        id: 3433,
        cidade: 'Nova Santa Rosa',
        estado_id: 18
      },
      {
        id: 3434,
        cidade: 'Nova Prata do Iguaçu',
        estado_id: 18
      },
      {
        id: 3435,
        cidade: 'Nova Tebas',
        estado_id: 18
      },
      {
        id: 3436,
        cidade: 'Novo Itacolomi',
        estado_id: 18
      },
      {
        id: 3437,
        cidade: 'Ortigueira',
        estado_id: 18
      },
      {
        id: 3438,
        cidade: 'Ourizona',
        estado_id: 18
      },
      {
        id: 3439,
        cidade: 'Ouro Verde do Oeste',
        estado_id: 18
      },
      {
        id: 3440,
        cidade: 'Paiçandu',
        estado_id: 18
      },
      {
        id: 3441,
        cidade: 'Palmas',
        estado_id: 18
      },
      {
        id: 3442,
        cidade: 'Palmeira',
        estado_id: 18
      },
      {
        id: 3443,
        cidade: 'Palmital',
        estado_id: 18
      },
      {
        id: 3444,
        cidade: 'Palotina',
        estado_id: 18
      },
      {
        id: 3445,
        cidade: 'Paraíso do Norte',
        estado_id: 18
      },
      {
        id: 3446,
        cidade: 'Paranacity',
        estado_id: 18
      },
      {
        id: 3447,
        cidade: 'Paranaguá',
        estado_id: 18
      },
      {
        id: 3448,
        cidade: 'Paranapoema',
        estado_id: 18
      },
      {
        id: 3449,
        cidade: 'Paranavaí',
        estado_id: 18
      },
      {
        id: 3450,
        cidade: 'Pato Bragado',
        estado_id: 18
      },
      {
        id: 3451,
        cidade: 'Pato Branco',
        estado_id: 18
      },
      {
        id: 3452,
        cidade: 'Paula Freitas',
        estado_id: 18
      },
      {
        id: 3453,
        cidade: 'Paulo Frontin',
        estado_id: 18
      },
      {
        id: 3454,
        cidade: 'Peabiru',
        estado_id: 18
      },
      {
        id: 3455,
        cidade: 'Perobal',
        estado_id: 18
      },
      {
        id: 3456,
        cidade: 'Pérola',
        estado_id: 18
      },
      {
        id: 3457,
        cidade: 'Pérola D´oeste',
        estado_id: 18
      },
      {
        id: 3458,
        cidade: 'Piên',
        estado_id: 18
      },
      {
        id: 3459,
        cidade: 'Pinhais',
        estado_id: 18
      },
      {
        id: 3460,
        cidade: 'Pinhalão',
        estado_id: 18
      },
      {
        id: 3461,
        cidade: 'Pinhal de São Bento',
        estado_id: 18
      },
      {
        id: 3462,
        cidade: 'Pinhão',
        estado_id: 18
      },
      {
        id: 3463,
        cidade: 'Piraí do Sul',
        estado_id: 18
      },
      {
        id: 3464,
        cidade: 'Piraquara',
        estado_id: 18
      },
      {
        id: 3465,
        cidade: 'Pitanga',
        estado_id: 18
      },
      {
        id: 3466,
        cidade: 'Pitangueiras',
        estado_id: 18
      },
      {
        id: 3467,
        cidade: 'Planaltina do Paraná',
        estado_id: 18
      },
      {
        id: 3468,
        cidade: 'Planalto',
        estado_id: 18
      },
      {
        id: 3469,
        cidade: 'Ponta Grossa',
        estado_id: 18
      },
      {
        id: 3470,
        cidade: 'Pontal do Paraná',
        estado_id: 18
      },
      {
        id: 3471,
        cidade: 'Porecatu',
        estado_id: 18
      },
      {
        id: 3472,
        cidade: 'Porto Amazonas',
        estado_id: 18
      },
      {
        id: 3473,
        cidade: 'Porto Barreiro',
        estado_id: 18
      },
      {
        id: 3474,
        cidade: 'Porto Rico',
        estado_id: 18
      },
      {
        id: 3475,
        cidade: 'Porto Vitória',
        estado_id: 18
      },
      {
        id: 3476,
        cidade: 'Prado Ferreira',
        estado_id: 18
      },
      {
        id: 3477,
        cidade: 'Pranchita',
        estado_id: 18
      },
      {
        id: 3478,
        cidade: 'Presidente Castelo Branco',
        estado_id: 18
      },
      {
        id: 3479,
        cidade: 'Primeiro de Maio',
        estado_id: 18
      },
      {
        id: 3480,
        cidade: 'Prudentópolis',
        estado_id: 18
      },
      {
        id: 3481,
        cidade: 'Quarto Centenário',
        estado_id: 18
      },
      {
        id: 3482,
        cidade: 'Quatiguá',
        estado_id: 18
      },
      {
        id: 3483,
        cidade: 'Quatro Barras',
        estado_id: 18
      },
      {
        id: 3484,
        cidade: 'Quatro Pontes',
        estado_id: 18
      },
      {
        id: 3485,
        cidade: 'Quedas do Iguaçu',
        estado_id: 18
      },
      {
        id: 3486,
        cidade: 'Querência do Norte',
        estado_id: 18
      },
      {
        id: 3487,
        cidade: 'Quinta do Sol',
        estado_id: 18
      },
      {
        id: 3488,
        cidade: 'Quitandinha',
        estado_id: 18
      },
      {
        id: 3489,
        cidade: 'Ramilândia',
        estado_id: 18
      },
      {
        id: 3490,
        cidade: 'Rancho Alegre',
        estado_id: 18
      },
      {
        id: 3491,
        cidade: 'Rancho Alegre D´oeste',
        estado_id: 18
      },
      {
        id: 3492,
        cidade: 'Realeza',
        estado_id: 18
      },
      {
        id: 3493,
        cidade: 'Rebouças',
        estado_id: 18
      },
      {
        id: 3494,
        cidade: 'Renascença',
        estado_id: 18
      },
      {
        id: 3495,
        cidade: 'Reserva',
        estado_id: 18
      },
      {
        id: 3496,
        cidade: 'Reserva do Iguaçu',
        estado_id: 18
      },
      {
        id: 3497,
        cidade: 'Ribeirão Claro',
        estado_id: 18
      },
      {
        id: 3498,
        cidade: 'Ribeirão do Pinhal',
        estado_id: 18
      },
      {
        id: 3499,
        cidade: 'Rio Azul',
        estado_id: 18
      },
      {
        id: 3500,
        cidade: 'Rio Bom',
        estado_id: 18
      },
      {
        id: 3501,
        cidade: 'Rio Bonito do Iguaçu',
        estado_id: 18
      },
      {
        id: 3502,
        cidade: 'Rio Branco do Ivaí',
        estado_id: 18
      },
      {
        id: 3503,
        cidade: 'Rio Branco do Sul',
        estado_id: 18
      },
      {
        id: 3504,
        cidade: 'Rio Negro',
        estado_id: 18
      },
      {
        id: 3505,
        cidade: 'Rolândia',
        estado_id: 18
      },
      {
        id: 3506,
        cidade: 'Roncador',
        estado_id: 18
      },
      {
        id: 3507,
        cidade: 'Rondon',
        estado_id: 18
      },
      {
        id: 3508,
        cidade: 'Rosário do Ivaí',
        estado_id: 18
      },
      {
        id: 3509,
        cidade: 'Sabáudia',
        estado_id: 18
      },
      {
        id: 3510,
        cidade: 'Salgado Filho',
        estado_id: 18
      },
      {
        id: 3511,
        cidade: 'Salto do Itararé',
        estado_id: 18
      },
      {
        id: 3512,
        cidade: 'Salto do Lontra',
        estado_id: 18
      },
      {
        id: 3513,
        cidade: 'Santa Amélia',
        estado_id: 18
      },
      {
        id: 3514,
        cidade: 'Santa Cecília do Pavão',
        estado_id: 18
      },
      {
        id: 3515,
        cidade: 'Santa Cruz de Monte Castelo',
        estado_id: 18
      },
      {
        id: 3516,
        cidade: 'Santa fé',
        estado_id: 18
      },
      {
        id: 3517,
        cidade: 'Santa Helena',
        estado_id: 18
      },
      {
        id: 3518,
        cidade: 'Santa Inês',
        estado_id: 18
      },
      {
        id: 3519,
        cidade: 'Santa Isabel do Ivaí',
        estado_id: 18
      },
      {
        id: 3520,
        cidade: 'Santa Izabel do Oeste',
        estado_id: 18
      },
      {
        id: 3521,
        cidade: 'Santa Lúcia',
        estado_id: 18
      },
      {
        id: 3522,
        cidade: 'Santa Maria do Oeste',
        estado_id: 18
      },
      {
        id: 3523,
        cidade: 'Santa Mariana',
        estado_id: 18
      },
      {
        id: 3524,
        cidade: 'Santa Mônica',
        estado_id: 18
      },
      {
        id: 3525,
        cidade: 'Santana do Itararé',
        estado_id: 18
      },
      {
        id: 3526,
        cidade: 'Santa Tereza do Oeste',
        estado_id: 18
      },
      {
        id: 3527,
        cidade: 'Santa Terezinha de Itaipu',
        estado_id: 18
      },
      {
        id: 3528,
        cidade: 'Santo Antônio da Platina',
        estado_id: 18
      },
      {
        id: 3529,
        cidade: 'Santo Antônio do Caiuá',
        estado_id: 18
      },
      {
        id: 3530,
        cidade: 'Santo Antônio do Paraíso',
        estado_id: 18
      },
      {
        id: 3531,
        cidade: 'Santo Antônio do Sudoeste',
        estado_id: 18
      },
      {
        id: 3532,
        cidade: 'Santo Inácio',
        estado_id: 18
      },
      {
        id: 3533,
        cidade: 'São Carlos do Ivaí',
        estado_id: 18
      },
      {
        id: 3534,
        cidade: 'São Jerônimo da Serra',
        estado_id: 18
      },
      {
        id: 3535,
        cidade: 'São João',
        estado_id: 18
      },
      {
        id: 3536,
        cidade: 'São João do Caiuá',
        estado_id: 18
      },
      {
        id: 3537,
        cidade: 'São João do Ivaí',
        estado_id: 18
      },
      {
        id: 3538,
        cidade: 'São João do Triunfo',
        estado_id: 18
      },
      {
        id: 3539,
        cidade: 'São Jorge D´oeste',
        estado_id: 18
      },
      {
        id: 3540,
        cidade: 'São Jorge do Ivaí',
        estado_id: 18
      },
      {
        id: 3541,
        cidade: 'São Jorge do Patrocínio',
        estado_id: 18
      },
      {
        id: 3542,
        cidade: 'São José da Boa Vista',
        estado_id: 18
      },
      {
        id: 3543,
        cidade: 'São José Das Palmeiras',
        estado_id: 18
      },
      {
        id: 3544,
        cidade: 'São José Dos Pinhais',
        estado_id: 18
      },
      {
        id: 3545,
        cidade: 'São Manoel do Paraná',
        estado_id: 18
      },
      {
        id: 3546,
        cidade: 'São Mateus do Sul',
        estado_id: 18
      },
      {
        id: 3547,
        cidade: 'São Miguel do Iguaçu',
        estado_id: 18
      },
      {
        id: 3548,
        cidade: 'São Pedro do Iguaçu',
        estado_id: 18
      },
      {
        id: 3549,
        cidade: 'São Pedro do Ivaí',
        estado_id: 18
      },
      {
        id: 3550,
        cidade: 'São Pedro do Paraná',
        estado_id: 18
      },
      {
        id: 3551,
        cidade: 'São Sebastião da Amoreira',
        estado_id: 18
      },
      {
        id: 3552,
        cidade: 'São Tomé',
        estado_id: 18
      },
      {
        id: 3553,
        cidade: 'Sapopema',
        estado_id: 18
      },
      {
        id: 3554,
        cidade: 'Sarandi',
        estado_id: 18
      },
      {
        id: 3555,
        cidade: 'Saudade do Iguaçu',
        estado_id: 18
      },
      {
        id: 3556,
        cidade: 'Sengés',
        estado_id: 18
      },
      {
        id: 3557,
        cidade: 'Serranópolis do Iguaçu',
        estado_id: 18
      },
      {
        id: 3558,
        cidade: 'Sertaneja',
        estado_id: 18
      },
      {
        id: 3559,
        cidade: 'Sertanópolis',
        estado_id: 18
      },
      {
        id: 3560,
        cidade: 'Siqueira Campos',
        estado_id: 18
      },
      {
        id: 3561,
        cidade: 'Sulina',
        estado_id: 18
      },
      {
        id: 3562,
        cidade: 'Tamarana',
        estado_id: 18
      },
      {
        id: 3563,
        cidade: 'Tamboara',
        estado_id: 18
      },
      {
        id: 3564,
        cidade: 'Tapejara',
        estado_id: 18
      },
      {
        id: 3565,
        cidade: 'Tapira',
        estado_id: 18
      },
      {
        id: 3566,
        cidade: 'Teixeira Soares',
        estado_id: 18
      },
      {
        id: 3567,
        cidade: 'Telêmaco Borba',
        estado_id: 18
      },
      {
        id: 3568,
        cidade: 'Terra Boa',
        estado_id: 18
      },
      {
        id: 3569,
        cidade: 'Terra Rica',
        estado_id: 18
      },
      {
        id: 3570,
        cidade: 'Terra Roxa',
        estado_id: 18
      },
      {
        id: 3571,
        cidade: 'Tibagi',
        estado_id: 18
      },
      {
        id: 3572,
        cidade: 'Tijucas do Sul',
        estado_id: 18
      },
      {
        id: 3573,
        cidade: 'Toledo',
        estado_id: 18
      },
      {
        id: 3574,
        cidade: 'Tomazina',
        estado_id: 18
      },
      {
        id: 3575,
        cidade: 'Três Barras do Paraná',
        estado_id: 18
      },
      {
        id: 3576,
        cidade: 'Tunas do Paraná',
        estado_id: 18
      },
      {
        id: 3577,
        cidade: 'Tuneiras do Oeste',
        estado_id: 18
      },
      {
        id: 3578,
        cidade: 'Tupãssi',
        estado_id: 18
      },
      {
        id: 3579,
        cidade: 'Turvo',
        estado_id: 18
      },
      {
        id: 3580,
        cidade: 'Ubiratã',
        estado_id: 18
      },
      {
        id: 3581,
        cidade: 'Umuarama',
        estado_id: 18
      },
      {
        id: 3582,
        cidade: 'União da Vitória',
        estado_id: 18
      },
      {
        id: 3583,
        cidade: 'Uniflor',
        estado_id: 18
      },
      {
        id: 3584,
        cidade: 'Uraí',
        estado_id: 18
      },
      {
        id: 3585,
        cidade: 'Wenceslau Braz',
        estado_id: 18
      },
      {
        id: 3586,
        cidade: 'Ventania',
        estado_id: 18
      },
      {
        id: 3587,
        cidade: 'Vera Cruz do Oeste',
        estado_id: 18
      },
      {
        id: 3588,
        cidade: 'Verê',
        estado_id: 18
      },
      {
        id: 3589,
        cidade: 'Vila Alta',
        estado_id: 18
      },
      {
        id: 3590,
        cidade: 'Doutor Ulysses',
        estado_id: 18
      },
      {
        id: 3591,
        cidade: 'Virmond',
        estado_id: 18
      },
      {
        id: 3592,
        cidade: 'Vitorino',
        estado_id: 18
      },
      {
        id: 3593,
        cidade: 'Xambrê',
        estado_id: 18
      },
      {
        id: 3594,
        cidade: 'Angra Dos Reis',
        estado_id: 19
      },
      {
        id: 3595,
        cidade: 'Aperibé',
        estado_id: 19
      },
      {
        id: 3596,
        cidade: 'Araruama',
        estado_id: 19
      },
      {
        id: 3597,
        cidade: 'Areal',
        estado_id: 19
      },
      {
        id: 3598,
        cidade: 'Armação Dos Búzios',
        estado_id: 19
      },
      {
        id: 3599,
        cidade: 'Arraial do Cabo',
        estado_id: 19
      },
      {
        id: 3600,
        cidade: 'Barra do Piraí',
        estado_id: 19
      },
      {
        id: 3601,
        cidade: 'Barra Mansa',
        estado_id: 19
      },
      {
        id: 3602,
        cidade: 'Belford Roxo',
        estado_id: 19
      },
      {
        id: 3603,
        cidade: 'Bom Jardim',
        estado_id: 19
      },
      {
        id: 3604,
        cidade: 'Bom Jesus do Itabapoana',
        estado_id: 19
      },
      {
        id: 3605,
        cidade: 'Cabo Frio',
        estado_id: 19
      },
      {
        id: 3606,
        cidade: 'Cachoeiras de Macacu',
        estado_id: 19
      },
      {
        id: 3607,
        cidade: 'Cambuci',
        estado_id: 19
      },
      {
        id: 3608,
        cidade: 'Carapebus',
        estado_id: 19
      },
      {
        id: 3609,
        cidade: 'Comendador Levy Gasparian',
        estado_id: 19
      },
      {
        id: 3610,
        cidade: 'Campos Dos Goytacazes',
        estado_id: 19
      },
      {
        id: 3611,
        cidade: 'Cantagalo',
        estado_id: 19
      },
      {
        id: 3612,
        cidade: 'Cardoso Moreira',
        estado_id: 19
      },
      {
        id: 3613,
        cidade: 'Carmo',
        estado_id: 19
      },
      {
        id: 3614,
        cidade: 'Casimiro de Abreu',
        estado_id: 19
      },
      {
        id: 3615,
        cidade: 'Conceição de Macabu',
        estado_id: 19
      },
      {
        id: 3616,
        cidade: 'Cordeiro',
        estado_id: 19
      },
      {
        id: 3617,
        cidade: 'Duas Barras',
        estado_id: 19
      },
      {
        id: 3618,
        cidade: 'Duque de Caxias',
        estado_id: 19
      },
      {
        id: 3619,
        cidade: 'Engenheiro Paulo de Frontin',
        estado_id: 19
      },
      {
        id: 3620,
        cidade: 'Guapimirim',
        estado_id: 19
      },
      {
        id: 3621,
        cidade: 'Iguaba Grande',
        estado_id: 19
      },
      {
        id: 3622,
        cidade: 'Itaboraí',
        estado_id: 19
      },
      {
        id: 3623,
        cidade: 'Itaguaí',
        estado_id: 19
      },
      {
        id: 3624,
        cidade: 'Italva',
        estado_id: 19
      },
      {
        id: 3625,
        cidade: 'Itaocara',
        estado_id: 19
      },
      {
        id: 3626,
        cidade: 'Itaperuna',
        estado_id: 19
      },
      {
        id: 3627,
        cidade: 'Itatiaia',
        estado_id: 19
      },
      {
        id: 3628,
        cidade: 'Japeri',
        estado_id: 19
      },
      {
        id: 3629,
        cidade: 'Laje do Muriaé',
        estado_id: 19
      },
      {
        id: 3630,
        cidade: 'Macaé',
        estado_id: 19
      },
      {
        id: 3631,
        cidade: 'Macuco',
        estado_id: 19
      },
      {
        id: 3632,
        cidade: 'Magé',
        estado_id: 19
      },
      {
        id: 3633,
        cidade: 'Mangaratiba',
        estado_id: 19
      },
      {
        id: 3634,
        cidade: 'Maricá',
        estado_id: 19
      },
      {
        id: 3635,
        cidade: 'Mendes',
        estado_id: 19
      },
      {
        id: 3636,
        cidade: 'Mesquita',
        estado_id: 19
      },
      {
        id: 3637,
        cidade: 'Miguel Pereira',
        estado_id: 19
      },
      {
        id: 3638,
        cidade: 'Miracema',
        estado_id: 19
      },
      {
        id: 3639,
        cidade: 'Natividade',
        estado_id: 19
      },
      {
        id: 3640,
        cidade: 'Nilópolis',
        estado_id: 19
      },
      {
        id: 3641,
        cidade: 'Niterói',
        estado_id: 19
      },
      {
        id: 3642,
        cidade: 'Nova Friburgo',
        estado_id: 19
      },
      {
        id: 3643,
        cidade: 'Nova Iguaçu',
        estado_id: 19
      },
      {
        id: 3644,
        cidade: 'Paracambi',
        estado_id: 19
      },
      {
        id: 3645,
        cidade: 'Paraíba do Sul',
        estado_id: 19
      },
      {
        id: 3646,
        cidade: 'Parati',
        estado_id: 19
      },
      {
        id: 3647,
        cidade: 'Paty do Alferes',
        estado_id: 19
      },
      {
        id: 3648,
        cidade: 'Petrópolis',
        estado_id: 19
      },
      {
        id: 3649,
        cidade: 'Pinheiral',
        estado_id: 19
      },
      {
        id: 3650,
        cidade: 'Piraí',
        estado_id: 19
      },
      {
        id: 3651,
        cidade: 'Porciúncula',
        estado_id: 19
      },
      {
        id: 3652,
        cidade: 'Porto Real',
        estado_id: 19
      },
      {
        id: 3653,
        cidade: 'Quatis',
        estado_id: 19
      },
      {
        id: 3654,
        cidade: 'Queimados',
        estado_id: 19
      },
      {
        id: 3655,
        cidade: 'Quissamã',
        estado_id: 19
      },
      {
        id: 3656,
        cidade: 'Resende',
        estado_id: 19
      },
      {
        id: 3657,
        cidade: 'Rio Bonito',
        estado_id: 19
      },
      {
        id: 3658,
        cidade: 'Rio Claro',
        estado_id: 19
      },
      {
        id: 3659,
        cidade: 'Rio Das Flores',
        estado_id: 19
      },
      {
        id: 3660,
        cidade: 'Rio Das Ostras',
        estado_id: 19
      },
      {
        id: 3661,
        cidade: 'Rio de Janeiro',
        estado_id: 19
      },
      {
        id: 3662,
        cidade: 'Santa Maria Madalena',
        estado_id: 19
      },
      {
        id: 3663,
        cidade: 'Santo Antônio de Pádua',
        estado_id: 19
      },
      {
        id: 3664,
        cidade: 'São Francisco de Itabapoana',
        estado_id: 19
      },
      {
        id: 3665,
        cidade: 'São Fidélis',
        estado_id: 19
      },
      {
        id: 3666,
        cidade: 'São Gonçalo',
        estado_id: 19
      },
      {
        id: 3667,
        cidade: 'São João da Barra',
        estado_id: 19
      },
      {
        id: 3668,
        cidade: 'São João de Meriti',
        estado_id: 19
      },
      {
        id: 3669,
        cidade: 'São José de Ubá',
        estado_id: 19
      },
      {
        id: 3670,
        cidade: 'São José do Vale do Rio Preto',
        estado_id: 19
      },
      {
        id: 3671,
        cidade: 'São Pedro da Aldeia',
        estado_id: 19
      },
      {
        id: 3672,
        cidade: 'São Sebastião do Alto',
        estado_id: 19
      },
      {
        id: 3673,
        cidade: 'Sapucaia',
        estado_id: 19
      },
      {
        id: 3674,
        cidade: 'Saquarema',
        estado_id: 19
      },
      {
        id: 3675,
        cidade: 'Seropédica',
        estado_id: 19
      },
      {
        id: 3676,
        cidade: 'Silva Jardim',
        estado_id: 19
      },
      {
        id: 3677,
        cidade: 'Sumidouro',
        estado_id: 19
      },
      {
        id: 3678,
        cidade: 'Tanguá',
        estado_id: 19
      },
      {
        id: 3679,
        cidade: 'Teresópolis',
        estado_id: 19
      },
      {
        id: 3680,
        cidade: 'Trajano de Morais',
        estado_id: 19
      },
      {
        id: 3681,
        cidade: 'Três Rios',
        estado_id: 19
      },
      {
        id: 3682,
        cidade: 'Valença',
        estado_id: 19
      },
      {
        id: 3683,
        cidade: 'Varre-sai',
        estado_id: 19
      },
      {
        id: 3684,
        cidade: 'Vassouras',
        estado_id: 19
      },
      {
        id: 3685,
        cidade: 'Volta Redonda',
        estado_id: 19
      },
      {
        id: 3686,
        cidade: 'Acari',
        estado_id: 20
      },
      {
        id: 3687,
        cidade: 'Açu',
        estado_id: 20
      },
      {
        id: 3688,
        cidade: 'Afonso Bezerra',
        estado_id: 20
      },
      {
        id: 3689,
        cidade: 'Água Nova',
        estado_id: 20
      },
      {
        id: 3690,
        cidade: 'Alexandria',
        estado_id: 20
      },
      {
        id: 3691,
        cidade: 'Almino Afonso',
        estado_id: 20
      },
      {
        id: 3692,
        cidade: 'Alto do Rodrigues',
        estado_id: 20
      },
      {
        id: 3693,
        cidade: 'Angicos',
        estado_id: 20
      },
      {
        id: 3694,
        cidade: 'Antônio Martins',
        estado_id: 20
      },
      {
        id: 3695,
        cidade: 'Apodi',
        estado_id: 20
      },
      {
        id: 3696,
        cidade: 'Areia Branca',
        estado_id: 20
      },
      {
        id: 3697,
        cidade: 'Arês',
        estado_id: 20
      },
      {
        id: 3698,
        cidade: 'Augusto Severo',
        estado_id: 20
      },
      {
        id: 3699,
        cidade: 'Baía Formosa',
        estado_id: 20
      },
      {
        id: 3700,
        cidade: 'Baraúna',
        estado_id: 20
      },
      {
        id: 3701,
        cidade: 'Barcelona',
        estado_id: 20
      },
      {
        id: 3702,
        cidade: 'Bento Fernandes',
        estado_id: 20
      },
      {
        id: 3703,
        cidade: 'Bodó',
        estado_id: 20
      },
      {
        id: 3704,
        cidade: 'Bom Jesus',
        estado_id: 20
      },
      {
        id: 3705,
        cidade: 'Brejinho',
        estado_id: 20
      },
      {
        id: 3706,
        cidade: 'Caiçara do Norte',
        estado_id: 20
      },
      {
        id: 3707,
        cidade: 'Caiçara do Rio do Vento',
        estado_id: 20
      },
      {
        id: 3708,
        cidade: 'Caicó',
        estado_id: 20
      },
      {
        id: 3709,
        cidade: 'Campo Redondo',
        estado_id: 20
      },
      {
        id: 3710,
        cidade: 'Canguaretama',
        estado_id: 20
      },
      {
        id: 3711,
        cidade: 'Caraúbas',
        estado_id: 20
      },
      {
        id: 3712,
        cidade: 'Carnaúba Dos Dantas',
        estado_id: 20
      },
      {
        id: 3713,
        cidade: 'Carnaubais',
        estado_id: 20
      },
      {
        id: 3714,
        cidade: 'Ceará-mirim',
        estado_id: 20
      },
      {
        id: 3715,
        cidade: 'Cerro Corá',
        estado_id: 20
      },
      {
        id: 3716,
        cidade: 'Coronel Ezequiel',
        estado_id: 20
      },
      {
        id: 3717,
        cidade: 'Coronel João Pessoa',
        estado_id: 20
      },
      {
        id: 3718,
        cidade: 'Cruzeta',
        estado_id: 20
      },
      {
        id: 3719,
        cidade: 'Currais Novos',
        estado_id: 20
      },
      {
        id: 3720,
        cidade: 'Doutor Severiano',
        estado_id: 20
      },
      {
        id: 3721,
        cidade: 'Parnamirim',
        estado_id: 20
      },
      {
        id: 3722,
        cidade: 'Encanto',
        estado_id: 20
      },
      {
        id: 3723,
        cidade: 'Equador',
        estado_id: 20
      },
      {
        id: 3724,
        cidade: 'Espírito Santo',
        estado_id: 20
      },
      {
        id: 3725,
        cidade: 'Extremoz',
        estado_id: 20
      },
      {
        id: 3726,
        cidade: 'Felipe Guerra',
        estado_id: 20
      },
      {
        id: 3727,
        cidade: 'Fernando Pedroza',
        estado_id: 20
      },
      {
        id: 3728,
        cidade: 'Florânia',
        estado_id: 20
      },
      {
        id: 3729,
        cidade: 'Francisco Dantas',
        estado_id: 20
      },
      {
        id: 3730,
        cidade: 'Frutuoso Gomes',
        estado_id: 20
      },
      {
        id: 3731,
        cidade: 'Galinhos',
        estado_id: 20
      },
      {
        id: 3732,
        cidade: 'Goianinha',
        estado_id: 20
      },
      {
        id: 3733,
        cidade: 'Governador Dix-sept Rosado',
        estado_id: 20
      },
      {
        id: 3734,
        cidade: 'Grossos',
        estado_id: 20
      },
      {
        id: 3735,
        cidade: 'Guamaré',
        estado_id: 20
      },
      {
        id: 3736,
        cidade: 'Ielmo Marinho',
        estado_id: 20
      },
      {
        id: 3737,
        cidade: 'Ipanguaçu',
        estado_id: 20
      },
      {
        id: 3738,
        cidade: 'Ipueira',
        estado_id: 20
      },
      {
        id: 3739,
        cidade: 'Itajá',
        estado_id: 20
      },
      {
        id: 3740,
        cidade: 'Itaú',
        estado_id: 20
      },
      {
        id: 3741,
        cidade: 'Jaçanã',
        estado_id: 20
      },
      {
        id: 3742,
        cidade: 'Jandaíra',
        estado_id: 20
      },
      {
        id: 3743,
        cidade: 'Janduís',
        estado_id: 20
      },
      {
        id: 3744,
        cidade: 'Januário Cicco',
        estado_id: 20
      },
      {
        id: 3745,
        cidade: 'Japi',
        estado_id: 20
      },
      {
        id: 3746,
        cidade: 'Jardim de Angicos',
        estado_id: 20
      },
      {
        id: 3747,
        cidade: 'Jardim de Piranhas',
        estado_id: 20
      },
      {
        id: 3748,
        cidade: 'Jardim do Seridó',
        estado_id: 20
      },
      {
        id: 3749,
        cidade: 'João Câmara',
        estado_id: 20
      },
      {
        id: 3750,
        cidade: 'João Dias',
        estado_id: 20
      },
      {
        id: 3751,
        cidade: 'José da Penha',
        estado_id: 20
      },
      {
        id: 3752,
        cidade: 'Jucurutu',
        estado_id: 20
      },
      {
        id: 3753,
        cidade: 'Jundiá',
        estado_id: 20
      },
      {
        id: 3754,
        cidade: 'Lagoa D´anta',
        estado_id: 20
      },
      {
        id: 3755,
        cidade: 'Lagoa de Pedras',
        estado_id: 20
      },
      {
        id: 3756,
        cidade: 'Lagoa de Velhos',
        estado_id: 20
      },
      {
        id: 3757,
        cidade: 'Lagoa Nova',
        estado_id: 20
      },
      {
        id: 3758,
        cidade: 'Lagoa Salgada',
        estado_id: 20
      },
      {
        id: 3759,
        cidade: 'Lajes',
        estado_id: 20
      },
      {
        id: 3760,
        cidade: 'Lajes Pintadas',
        estado_id: 20
      },
      {
        id: 3761,
        cidade: 'Lucrécia',
        estado_id: 20
      },
      {
        id: 3762,
        cidade: 'Luís Gomes',
        estado_id: 20
      },
      {
        id: 3763,
        cidade: 'Macaíba',
        estado_id: 20
      },
      {
        id: 3764,
        cidade: 'Macau',
        estado_id: 20
      },
      {
        id: 3765,
        cidade: 'Major Sales',
        estado_id: 20
      },
      {
        id: 3766,
        cidade: 'Marcelino Vieira',
        estado_id: 20
      },
      {
        id: 3767,
        cidade: 'Martins',
        estado_id: 20
      },
      {
        id: 3768,
        cidade: 'Maxaranguape',
        estado_id: 20
      },
      {
        id: 3769,
        cidade: 'Messias Targino',
        estado_id: 20
      },
      {
        id: 3770,
        cidade: 'Montanhas',
        estado_id: 20
      },
      {
        id: 3771,
        cidade: 'Monte Alegre',
        estado_id: 20
      },
      {
        id: 3772,
        cidade: 'Monte Das Gameleiras',
        estado_id: 20
      },
      {
        id: 3773,
        cidade: 'Mossoró',
        estado_id: 20
      },
      {
        id: 3774,
        cidade: 'Natal',
        estado_id: 20
      },
      {
        id: 3775,
        cidade: 'Nísia Floresta',
        estado_id: 20
      },
      {
        id: 3776,
        cidade: 'Nova Cruz',
        estado_id: 20
      },
      {
        id: 3777,
        cidade: 'Olho-d´água do Borges',
        estado_id: 20
      },
      {
        id: 3778,
        cidade: 'Ouro Branco',
        estado_id: 20
      },
      {
        id: 3779,
        cidade: 'Paraná',
        estado_id: 20
      },
      {
        id: 3780,
        cidade: 'Paraú',
        estado_id: 20
      },
      {
        id: 3781,
        cidade: 'Parazinho',
        estado_id: 20
      },
      {
        id: 3782,
        cidade: 'Parelhas',
        estado_id: 20
      },
      {
        id: 3783,
        cidade: 'Rio do Fogo',
        estado_id: 20
      },
      {
        id: 3784,
        cidade: 'Passa e Fica',
        estado_id: 20
      },
      {
        id: 3785,
        cidade: 'Passagem',
        estado_id: 20
      },
      {
        id: 3786,
        cidade: 'Patu',
        estado_id: 20
      },
      {
        id: 3787,
        cidade: 'Santa Maria',
        estado_id: 20
      },
      {
        id: 3788,
        cidade: 'Pau Dos Ferros',
        estado_id: 20
      },
      {
        id: 3789,
        cidade: 'Pedra Grande',
        estado_id: 20
      },
      {
        id: 3790,
        cidade: 'Pedra Preta',
        estado_id: 20
      },
      {
        id: 3791,
        cidade: 'Pedro Avelino',
        estado_id: 20
      },
      {
        id: 3792,
        cidade: 'Pedro Velho',
        estado_id: 20
      },
      {
        id: 3793,
        cidade: 'Pendências',
        estado_id: 20
      },
      {
        id: 3794,
        cidade: 'Pilões',
        estado_id: 20
      },
      {
        id: 3795,
        cidade: 'Poço Branco',
        estado_id: 20
      },
      {
        id: 3796,
        cidade: 'Portalegre',
        estado_id: 20
      },
      {
        id: 3797,
        cidade: 'Porto do Mangue',
        estado_id: 20
      },
      {
        id: 3798,
        cidade: 'Presidente Juscelino',
        estado_id: 20
      },
      {
        id: 3799,
        cidade: 'Pureza',
        estado_id: 20
      },
      {
        id: 3800,
        cidade: 'Rafael Fernandes',
        estado_id: 20
      },
      {
        id: 3801,
        cidade: 'Rafael Godeiro',
        estado_id: 20
      },
      {
        id: 3802,
        cidade: 'Riacho da Cruz',
        estado_id: 20
      },
      {
        id: 3803,
        cidade: 'Riacho de Santana',
        estado_id: 20
      },
      {
        id: 3804,
        cidade: 'Riachuelo',
        estado_id: 20
      },
      {
        id: 3805,
        cidade: 'Rodolfo Fernandes',
        estado_id: 20
      },
      {
        id: 3806,
        cidade: 'Tibau',
        estado_id: 20
      },
      {
        id: 3807,
        cidade: 'Ruy Barbosa',
        estado_id: 20
      },
      {
        id: 3808,
        cidade: 'Santa Cruz',
        estado_id: 20
      },
      {
        id: 3809,
        cidade: 'Santana do Matos',
        estado_id: 20
      },
      {
        id: 3810,
        cidade: 'Santana do Seridó',
        estado_id: 20
      },
      {
        id: 3811,
        cidade: 'Santo Antônio',
        estado_id: 20
      },
      {
        id: 3812,
        cidade: 'São Bento do Norte',
        estado_id: 20
      },
      {
        id: 3813,
        cidade: 'São Bento do Trairí',
        estado_id: 20
      },
      {
        id: 3814,
        cidade: 'São Fernando',
        estado_id: 20
      },
      {
        id: 3815,
        cidade: 'São Francisco do Oeste',
        estado_id: 20
      },
      {
        id: 3816,
        cidade: 'São Gonçalo do Amarante',
        estado_id: 20
      },
      {
        id: 3817,
        cidade: 'São João do Sabugi',
        estado_id: 20
      },
      {
        id: 3818,
        cidade: 'São José de Mipibu',
        estado_id: 20
      },
      {
        id: 3819,
        cidade: 'São José do Campestre',
        estado_id: 20
      },
      {
        id: 3820,
        cidade: 'São José do Seridó',
        estado_id: 20
      },
      {
        id: 3821,
        cidade: 'São Miguel',
        estado_id: 20
      },
      {
        id: 3822,
        cidade: 'São Miguel do Gostoso',
        estado_id: 20
      },
      {
        id: 3823,
        cidade: 'São Paulo do Potengi',
        estado_id: 20
      },
      {
        id: 3824,
        cidade: 'São Pedro',
        estado_id: 20
      },
      {
        id: 3825,
        cidade: 'São Rafael',
        estado_id: 20
      },
      {
        id: 3826,
        cidade: 'São Tomé',
        estado_id: 20
      },
      {
        id: 3827,
        cidade: 'São Vicente',
        estado_id: 20
      },
      {
        id: 3828,
        cidade: 'Senador Elói de Souza',
        estado_id: 20
      },
      {
        id: 3829,
        cidade: 'Senador Georgino Avelino',
        estado_id: 20
      },
      {
        id: 3830,
        cidade: 'Serra de São Bento',
        estado_id: 20
      },
      {
        id: 3831,
        cidade: 'Serra do Mel',
        estado_id: 20
      },
      {
        id: 3832,
        cidade: 'Serra Negra do Norte',
        estado_id: 20
      },
      {
        id: 3833,
        cidade: 'Serrinha',
        estado_id: 20
      },
      {
        id: 3834,
        cidade: 'Serrinha Dos Pintos',
        estado_id: 20
      },
      {
        id: 3835,
        cidade: 'Severiano Melo',
        estado_id: 20
      },
      {
        id: 3836,
        cidade: 'Sítio Novo',
        estado_id: 20
      },
      {
        id: 3837,
        cidade: 'Taboleiro Grande',
        estado_id: 20
      },
      {
        id: 3838,
        cidade: 'Taipu',
        estado_id: 20
      },
      {
        id: 3839,
        cidade: 'Tangará',
        estado_id: 20
      },
      {
        id: 3840,
        cidade: 'Tenente Ananias',
        estado_id: 20
      },
      {
        id: 3841,
        cidade: 'Tenente Laurentino Cruz',
        estado_id: 20
      },
      {
        id: 3842,
        cidade: 'Tibau do Sul',
        estado_id: 20
      },
      {
        id: 3843,
        cidade: 'Timbaúba Dos Batistas',
        estado_id: 20
      },
      {
        id: 3844,
        cidade: 'Touros',
        estado_id: 20
      },
      {
        id: 3845,
        cidade: 'Triunfo Potiguar',
        estado_id: 20
      },
      {
        id: 3846,
        cidade: 'Umarizal',
        estado_id: 20
      },
      {
        id: 3847,
        cidade: 'Upanema',
        estado_id: 20
      },
      {
        id: 3848,
        cidade: 'Várzea',
        estado_id: 20
      },
      {
        id: 3849,
        cidade: 'Venha-ver',
        estado_id: 20
      },
      {
        id: 3850,
        cidade: 'Vera Cruz',
        estado_id: 20
      },
      {
        id: 3851,
        cidade: 'Viçosa',
        estado_id: 20
      },
      {
        id: 3852,
        cidade: 'Vila Flor',
        estado_id: 20
      },
      {
        id: 3853,
        cidade: 'Alta Floresta D´oeste',
        estado_id: 21
      },
      {
        id: 3854,
        cidade: 'Ariquemes',
        estado_id: 21
      },
      {
        id: 3855,
        cidade: 'Cabixi',
        estado_id: 21
      },
      {
        id: 3856,
        cidade: 'Cacoal',
        estado_id: 21
      },
      {
        id: 3857,
        cidade: 'Cerejeiras',
        estado_id: 21
      },
      {
        id: 3858,
        cidade: 'Colorado do Oeste',
        estado_id: 21
      },
      {
        id: 3859,
        cidade: 'Corumbiara',
        estado_id: 21
      },
      {
        id: 3860,
        cidade: 'Costa Marques',
        estado_id: 21
      },
      {
        id: 3861,
        cidade: 'Espigão D´oeste',
        estado_id: 21
      },
      {
        id: 3862,
        cidade: 'Guajará-mirim',
        estado_id: 21
      },
      {
        id: 3863,
        cidade: 'Jaru',
        estado_id: 21
      },
      {
        id: 3864,
        cidade: 'Ji-paraná',
        estado_id: 21
      },
      {
        id: 3865,
        cidade: 'Machadinho D´oeste',
        estado_id: 21
      },
      {
        id: 3866,
        cidade: 'Nova Brasilândia D´oeste',
        estado_id: 21
      },
      {
        id: 3867,
        cidade: 'Ouro Preto do Oeste',
        estado_id: 21
      },
      {
        id: 3868,
        cidade: 'Pimenta Bueno',
        estado_id: 21
      },
      {
        id: 3869,
        cidade: 'Porto Velho',
        estado_id: 21
      },
      {
        id: 3870,
        cidade: 'Presidente Médici',
        estado_id: 21
      },
      {
        id: 3871,
        cidade: 'Rio Crespo',
        estado_id: 21
      },
      {
        id: 3872,
        cidade: 'Rolim de Moura',
        estado_id: 21
      },
      {
        id: 3873,
        cidade: 'Santa Luzia D´oeste',
        estado_id: 21
      },
      {
        id: 3874,
        cidade: 'Vilhena',
        estado_id: 21
      },
      {
        id: 3875,
        cidade: 'São Miguel do Guaporé',
        estado_id: 21
      },
      {
        id: 3876,
        cidade: 'Nova Mamoré',
        estado_id: 21
      },
      {
        id: 3877,
        cidade: 'Alvorada D´oeste',
        estado_id: 21
      },
      {
        id: 3878,
        cidade: 'Alto Alegre Dos Parecis',
        estado_id: 21
      },
      {
        id: 3879,
        cidade: 'Alto Paraíso',
        estado_id: 21
      },
      {
        id: 3880,
        cidade: 'Buritis',
        estado_id: 21
      },
      {
        id: 3881,
        cidade: 'Novo Horizonte do Oeste',
        estado_id: 21
      },
      {
        id: 3882,
        cidade: 'Cacaulândia',
        estado_id: 21
      },
      {
        id: 3883,
        cidade: 'Campo Novo de Rondônia',
        estado_id: 21
      },
      {
        id: 3884,
        cidade: 'Candeias do Jamari',
        estado_id: 21
      },
      {
        id: 3885,
        cidade: 'Castanheiras',
        estado_id: 21
      },
      {
        id: 3886,
        cidade: 'Chupinguaia',
        estado_id: 21
      },
      {
        id: 3887,
        cidade: 'Cujubim',
        estado_id: 21
      },
      {
        id: 3888,
        cidade: 'Governador Jorge Teixeira',
        estado_id: 21
      },
      {
        id: 3889,
        cidade: 'Itapuã do Oeste',
        estado_id: 21
      },
      {
        id: 3890,
        cidade: 'Ministro Andreazza',
        estado_id: 21
      },
      {
        id: 3891,
        cidade: 'Mirante da Serra',
        estado_id: 21
      },
      {
        id: 3892,
        cidade: 'Monte Negro',
        estado_id: 21
      },
      {
        id: 3893,
        cidade: 'Nova União',
        estado_id: 21
      },
      {
        id: 3894,
        cidade: 'Parecis',
        estado_id: 21
      },
      {
        id: 3895,
        cidade: 'Pimenteiras do Oeste',
        estado_id: 21
      },
      {
        id: 3896,
        cidade: 'Primavera de Rondônia',
        estado_id: 21
      },
      {
        id: 3897,
        cidade: 'São Felipe D´oeste',
        estado_id: 21
      },
      {
        id: 3898,
        cidade: 'São Francisco do Guaporé',
        estado_id: 21
      },
      {
        id: 3899,
        cidade: 'Seringueiras',
        estado_id: 21
      },
      {
        id: 3900,
        cidade: 'Teixeirópolis',
        estado_id: 21
      },
      {
        id: 3901,
        cidade: 'Theobroma',
        estado_id: 21
      },
      {
        id: 3902,
        cidade: 'Urupá',
        estado_id: 21
      },
      {
        id: 3903,
        cidade: 'Vale do Anari',
        estado_id: 21
      },
      {
        id: 3904,
        cidade: 'Vale do Paraíso',
        estado_id: 21
      },
      {
        id: 3905,
        cidade: 'Amajari',
        estado_id: 22
      },
      {
        id: 3906,
        cidade: 'Alto Alegre',
        estado_id: 22
      },
      {
        id: 3907,
        cidade: 'Boa Vista',
        estado_id: 22
      },
      {
        id: 3908,
        cidade: 'Bonfim',
        estado_id: 22
      },
      {
        id: 3909,
        cidade: 'Cantá',
        estado_id: 22
      },
      {
        id: 3910,
        cidade: 'Caracaraí',
        estado_id: 22
      },
      {
        id: 3911,
        cidade: 'Caroebe',
        estado_id: 22
      },
      {
        id: 3912,
        cidade: 'Iracema',
        estado_id: 22
      },
      {
        id: 3913,
        cidade: 'Mucajaí',
        estado_id: 22
      },
      {
        id: 3914,
        cidade: 'Normandia',
        estado_id: 22
      },
      {
        id: 3915,
        cidade: 'Pacaraima',
        estado_id: 22
      },
      {
        id: 3916,
        cidade: 'Rorainópolis',
        estado_id: 22
      },
      {
        id: 3917,
        cidade: 'São João da Baliza',
        estado_id: 22
      },
      {
        id: 3918,
        cidade: 'São Luiz',
        estado_id: 22
      },
      {
        id: 3919,
        cidade: 'Uiramutã',
        estado_id: 22
      },
      {
        id: 3920,
        cidade: 'Aceguá',
        estado_id: 23
      },
      {
        id: 3921,
        cidade: 'Água Santa',
        estado_id: 23
      },
      {
        id: 3922,
        cidade: 'Agudo',
        estado_id: 23
      },
      {
        id: 3923,
        cidade: 'Ajuricaba',
        estado_id: 23
      },
      {
        id: 3924,
        cidade: 'Alecrim',
        estado_id: 23
      },
      {
        id: 3925,
        cidade: 'Alegrete',
        estado_id: 23
      },
      {
        id: 3926,
        cidade: 'Alegria',
        estado_id: 23
      },
      {
        id: 3927,
        cidade: 'Almirante Tamandaré do Sul',
        estado_id: 23
      },
      {
        id: 3928,
        cidade: 'Alpestre',
        estado_id: 23
      },
      {
        id: 3929,
        cidade: 'Alto Alegre',
        estado_id: 23
      },
      {
        id: 3930,
        cidade: 'Alto Feliz',
        estado_id: 23
      },
      {
        id: 3931,
        cidade: 'Alvorada',
        estado_id: 23
      },
      {
        id: 3932,
        cidade: 'Amaral Ferrador',
        estado_id: 23
      },
      {
        id: 3933,
        cidade: 'Ametista do Sul',
        estado_id: 23
      },
      {
        id: 3934,
        cidade: 'André da Rocha',
        estado_id: 23
      },
      {
        id: 3935,
        cidade: 'Anta Gorda',
        estado_id: 23
      },
      {
        id: 3936,
        cidade: 'Antônio Prado',
        estado_id: 23
      },
      {
        id: 3937,
        cidade: 'Arambaré',
        estado_id: 23
      },
      {
        id: 3938,
        cidade: 'Araricá',
        estado_id: 23
      },
      {
        id: 3939,
        cidade: 'Aratiba',
        estado_id: 23
      },
      {
        id: 3940,
        cidade: 'Arroio do Meio',
        estado_id: 23
      },
      {
        id: 3941,
        cidade: 'Arroio do Sal',
        estado_id: 23
      },
      {
        id: 3942,
        cidade: 'Arroio do Padre',
        estado_id: 23
      },
      {
        id: 3943,
        cidade: 'Arroio Dos Ratos',
        estado_id: 23
      },
      {
        id: 3944,
        cidade: 'Arroio do Tigre',
        estado_id: 23
      },
      {
        id: 3945,
        cidade: 'Arroio Grande',
        estado_id: 23
      },
      {
        id: 3946,
        cidade: 'Arvorezinha',
        estado_id: 23
      },
      {
        id: 3947,
        cidade: 'Augusto Pestana',
        estado_id: 23
      },
      {
        id: 3948,
        cidade: 'Áurea',
        estado_id: 23
      },
      {
        id: 3949,
        cidade: 'Bagé',
        estado_id: 23
      },
      {
        id: 3950,
        cidade: 'Balneário Pinhal',
        estado_id: 23
      },
      {
        id: 3951,
        cidade: 'Barão',
        estado_id: 23
      },
      {
        id: 3952,
        cidade: 'Barão de Cotegipe',
        estado_id: 23
      },
      {
        id: 3953,
        cidade: 'Barão do Triunfo',
        estado_id: 23
      },
      {
        id: 3954,
        cidade: 'Barracão',
        estado_id: 23
      },
      {
        id: 3955,
        cidade: 'Barra do Guarita',
        estado_id: 23
      },
      {
        id: 3956,
        cidade: 'Barra do Quaraí',
        estado_id: 23
      },
      {
        id: 3957,
        cidade: 'Barra do Ribeiro',
        estado_id: 23
      },
      {
        id: 3958,
        cidade: 'Barra do Rio Azul',
        estado_id: 23
      },
      {
        id: 3959,
        cidade: 'Barra Funda',
        estado_id: 23
      },
      {
        id: 3960,
        cidade: 'Barros Cassal',
        estado_id: 23
      },
      {
        id: 3961,
        cidade: 'Benjamin Constant do Sul',
        estado_id: 23
      },
      {
        id: 3962,
        cidade: 'Bento Gonçalves',
        estado_id: 23
      },
      {
        id: 3963,
        cidade: 'Boa Vista Das Missões',
        estado_id: 23
      },
      {
        id: 3964,
        cidade: 'Boa Vista do Buricá',
        estado_id: 23
      },
      {
        id: 3965,
        cidade: 'Boa Vista do Cadeado',
        estado_id: 23
      },
      {
        id: 3966,
        cidade: 'Boa Vista do Incra',
        estado_id: 23
      },
      {
        id: 3967,
        cidade: 'Boa Vista do Sul',
        estado_id: 23
      },
      {
        id: 3968,
        cidade: 'Bom Jesus',
        estado_id: 23
      },
      {
        id: 3969,
        cidade: 'Bom Princípio',
        estado_id: 23
      },
      {
        id: 3970,
        cidade: 'Bom Progresso',
        estado_id: 23
      },
      {
        id: 3971,
        cidade: 'Bom Retiro do Sul',
        estado_id: 23
      },
      {
        id: 3972,
        cidade: 'Boqueirão do Leão',
        estado_id: 23
      },
      {
        id: 3973,
        cidade: 'Bossoroca',
        estado_id: 23
      },
      {
        id: 3974,
        cidade: 'Bozano',
        estado_id: 23
      },
      {
        id: 3975,
        cidade: 'Braga',
        estado_id: 23
      },
      {
        id: 3976,
        cidade: 'Brochier',
        estado_id: 23
      },
      {
        id: 3977,
        cidade: 'Butiá',
        estado_id: 23
      },
      {
        id: 3978,
        cidade: 'Caçapava do Sul',
        estado_id: 23
      },
      {
        id: 3979,
        cidade: 'Cacequi',
        estado_id: 23
      },
      {
        id: 3980,
        cidade: 'Cachoeira do Sul',
        estado_id: 23
      },
      {
        id: 3981,
        cidade: 'Cachoeirinha',
        estado_id: 23
      },
      {
        id: 3982,
        cidade: 'Cacique Doble',
        estado_id: 23
      },
      {
        id: 3983,
        cidade: 'Caibaté',
        estado_id: 23
      },
      {
        id: 3984,
        cidade: 'Caiçara',
        estado_id: 23
      },
      {
        id: 3985,
        cidade: 'Camaquã',
        estado_id: 23
      },
      {
        id: 3986,
        cidade: 'Camargo',
        estado_id: 23
      },
      {
        id: 3987,
        cidade: 'Cambará do Sul',
        estado_id: 23
      },
      {
        id: 3988,
        cidade: 'Campestre da Serra',
        estado_id: 23
      },
      {
        id: 3989,
        cidade: 'Campina Das Missões',
        estado_id: 23
      },
      {
        id: 3990,
        cidade: 'Campinas do Sul',
        estado_id: 23
      },
      {
        id: 3991,
        cidade: 'Campo Bom',
        estado_id: 23
      },
      {
        id: 3992,
        cidade: 'Campo Novo',
        estado_id: 23
      },
      {
        id: 3993,
        cidade: 'Campos Borges',
        estado_id: 23
      },
      {
        id: 3994,
        cidade: 'Candelária',
        estado_id: 23
      },
      {
        id: 3995,
        cidade: 'Cândido Godói',
        estado_id: 23
      },
      {
        id: 3996,
        cidade: 'Candiota',
        estado_id: 23
      },
      {
        id: 3997,
        cidade: 'Canela',
        estado_id: 23
      },
      {
        id: 3998,
        cidade: 'Canguçu',
        estado_id: 23
      },
      {
        id: 3999,
        cidade: 'Canoas',
        estado_id: 23
      },
      {
        id: 4000,
        cidade: 'Canudos do Vale',
        estado_id: 23
      },
      {
        id: 4001,
        cidade: 'Capão Bonito do Sul',
        estado_id: 23
      },
      {
        id: 4002,
        cidade: 'Capão da Canoa',
        estado_id: 23
      },
      {
        id: 4003,
        cidade: 'Capão do Cipó',
        estado_id: 23
      },
      {
        id: 4004,
        cidade: 'Capão do Leão',
        estado_id: 23
      },
      {
        id: 4005,
        cidade: 'Capivari do Sul',
        estado_id: 23
      },
      {
        id: 4006,
        cidade: 'Capela de Santana',
        estado_id: 23
      },
      {
        id: 4007,
        cidade: 'Capitão',
        estado_id: 23
      },
      {
        id: 4008,
        cidade: 'Carazinho',
        estado_id: 23
      },
      {
        id: 4009,
        cidade: 'Caraá',
        estado_id: 23
      },
      {
        id: 4010,
        cidade: 'Carlos Barbosa',
        estado_id: 23
      },
      {
        id: 4011,
        cidade: 'Carlos Gomes',
        estado_id: 23
      },
      {
        id: 4012,
        cidade: 'Casca',
        estado_id: 23
      },
      {
        id: 4013,
        cidade: 'Caseiros',
        estado_id: 23
      },
      {
        id: 4014,
        cidade: 'Catuípe',
        estado_id: 23
      },
      {
        id: 4015,
        cidade: 'Caxias do Sul',
        estado_id: 23
      },
      {
        id: 4016,
        cidade: 'Centenário',
        estado_id: 23
      },
      {
        id: 4017,
        cidade: 'Cerrito',
        estado_id: 23
      },
      {
        id: 4018,
        cidade: 'Cerro Branco',
        estado_id: 23
      },
      {
        id: 4019,
        cidade: 'Cerro Grande',
        estado_id: 23
      },
      {
        id: 4020,
        cidade: 'Cerro Grande do Sul',
        estado_id: 23
      },
      {
        id: 4021,
        cidade: 'Cerro Largo',
        estado_id: 23
      },
      {
        id: 4022,
        cidade: 'Chapada',
        estado_id: 23
      },
      {
        id: 4023,
        cidade: 'Charqueadas',
        estado_id: 23
      },
      {
        id: 4024,
        cidade: 'Charrua',
        estado_id: 23
      },
      {
        id: 4025,
        cidade: 'Chiapetta',
        estado_id: 23
      },
      {
        id: 4026,
        cidade: 'Chuí',
        estado_id: 23
      },
      {
        id: 4027,
        cidade: 'Chuvisca',
        estado_id: 23
      },
      {
        id: 4028,
        cidade: 'Cidreira',
        estado_id: 23
      },
      {
        id: 4029,
        cidade: 'Ciríaco',
        estado_id: 23
      },
      {
        id: 4030,
        cidade: 'Colinas',
        estado_id: 23
      },
      {
        id: 4031,
        cidade: 'Colorado',
        estado_id: 23
      },
      {
        id: 4032,
        cidade: 'Condor',
        estado_id: 23
      },
      {
        id: 4033,
        cidade: 'Constantina',
        estado_id: 23
      },
      {
        id: 4034,
        cidade: 'Coqueiro Baixo',
        estado_id: 23
      },
      {
        id: 4035,
        cidade: 'Coqueiros do Sul',
        estado_id: 23
      },
      {
        id: 4036,
        cidade: 'Coronel Barros',
        estado_id: 23
      },
      {
        id: 4037,
        cidade: 'Coronel Bicaco',
        estado_id: 23
      },
      {
        id: 4038,
        cidade: 'Coronel Pilar',
        estado_id: 23
      },
      {
        id: 4039,
        cidade: 'Cotiporã',
        estado_id: 23
      },
      {
        id: 4040,
        cidade: 'Coxilha',
        estado_id: 23
      },
      {
        id: 4041,
        cidade: 'Crissiumal',
        estado_id: 23
      },
      {
        id: 4042,
        cidade: 'Cristal',
        estado_id: 23
      },
      {
        id: 4043,
        cidade: 'Cristal do Sul',
        estado_id: 23
      },
      {
        id: 4044,
        cidade: 'Cruz Alta',
        estado_id: 23
      },
      {
        id: 4045,
        cidade: 'Cruzaltense',
        estado_id: 23
      },
      {
        id: 4046,
        cidade: 'Cruzeiro do Sul',
        estado_id: 23
      },
      {
        id: 4047,
        cidade: 'David Canabarro',
        estado_id: 23
      },
      {
        id: 4048,
        cidade: 'Derrubadas',
        estado_id: 23
      },
      {
        id: 4049,
        cidade: 'Dezesseis de Novembro',
        estado_id: 23
      },
      {
        id: 4050,
        cidade: 'Dilermando de Aguiar',
        estado_id: 23
      },
      {
        id: 4051,
        cidade: 'Dois Irmãos',
        estado_id: 23
      },
      {
        id: 4052,
        cidade: 'Dois Irmãos Das Missões',
        estado_id: 23
      },
      {
        id: 4053,
        cidade: 'Dois Lajeados',
        estado_id: 23
      },
      {
        id: 4054,
        cidade: 'Dom Feliciano',
        estado_id: 23
      },
      {
        id: 4055,
        cidade: 'Dom Pedro de Alcântara',
        estado_id: 23
      },
      {
        id: 4056,
        cidade: 'Dom Pedrito',
        estado_id: 23
      },
      {
        id: 4057,
        cidade: 'Dona Francisca',
        estado_id: 23
      },
      {
        id: 4058,
        cidade: 'Doutor Maurício Cardoso',
        estado_id: 23
      },
      {
        id: 4059,
        cidade: 'Doutor Ricardo',
        estado_id: 23
      },
      {
        id: 4060,
        cidade: 'Eldorado do Sul',
        estado_id: 23
      },
      {
        id: 4061,
        cidade: 'Encantado',
        estado_id: 23
      },
      {
        id: 4062,
        cidade: 'Encruzilhada do Sul',
        estado_id: 23
      },
      {
        id: 4063,
        cidade: 'Engenho Velho',
        estado_id: 23
      },
      {
        id: 4064,
        cidade: 'Entre-ijuís',
        estado_id: 23
      },
      {
        id: 4065,
        cidade: 'Entre Rios do Sul',
        estado_id: 23
      },
      {
        id: 4066,
        cidade: 'Erebango',
        estado_id: 23
      },
      {
        id: 4067,
        cidade: 'Erechim',
        estado_id: 23
      },
      {
        id: 4068,
        cidade: 'Ernestina',
        estado_id: 23
      },
      {
        id: 4069,
        cidade: 'Herval',
        estado_id: 23
      },
      {
        id: 4070,
        cidade: 'Erval Grande',
        estado_id: 23
      },
      {
        id: 4071,
        cidade: 'Erval Seco',
        estado_id: 23
      },
      {
        id: 4072,
        cidade: 'Esmeralda',
        estado_id: 23
      },
      {
        id: 4073,
        cidade: 'Esperança do Sul',
        estado_id: 23
      },
      {
        id: 4074,
        cidade: 'Espumoso',
        estado_id: 23
      },
      {
        id: 4075,
        cidade: 'Estação',
        estado_id: 23
      },
      {
        id: 4076,
        cidade: 'Estância Velha',
        estado_id: 23
      },
      {
        id: 4077,
        cidade: 'Esteio',
        estado_id: 23
      },
      {
        id: 4078,
        cidade: 'Estrela',
        estado_id: 23
      },
      {
        id: 4079,
        cidade: 'Estrela Velha',
        estado_id: 23
      },
      {
        id: 4080,
        cidade: 'Eugênio de Castro',
        estado_id: 23
      },
      {
        id: 4081,
        cidade: 'Fagundes Varela',
        estado_id: 23
      },
      {
        id: 4082,
        cidade: 'Farroupilha',
        estado_id: 23
      },
      {
        id: 4083,
        cidade: 'Faxinal do Soturno',
        estado_id: 23
      },
      {
        id: 4084,
        cidade: 'Faxinalzinho',
        estado_id: 23
      },
      {
        id: 4085,
        cidade: 'Fazenda Vilanova',
        estado_id: 23
      },
      {
        id: 4086,
        cidade: 'Feliz',
        estado_id: 23
      },
      {
        id: 4087,
        cidade: 'Flores da Cunha',
        estado_id: 23
      },
      {
        id: 4088,
        cidade: 'Floriano Peixoto',
        estado_id: 23
      },
      {
        id: 4089,
        cidade: 'Fontoura Xavier',
        estado_id: 23
      },
      {
        id: 4090,
        cidade: 'Formigueiro',
        estado_id: 23
      },
      {
        id: 4091,
        cidade: 'Forquetinha',
        estado_id: 23
      },
      {
        id: 4092,
        cidade: 'Fortaleza Dos Valos',
        estado_id: 23
      },
      {
        id: 4093,
        cidade: 'Frederico Westphalen',
        estado_id: 23
      },
      {
        id: 4094,
        cidade: 'Garibaldi',
        estado_id: 23
      },
      {
        id: 4095,
        cidade: 'Garruchos',
        estado_id: 23
      },
      {
        id: 4096,
        cidade: 'Gaurama',
        estado_id: 23
      },
      {
        id: 4097,
        cidade: 'General Câmara',
        estado_id: 23
      },
      {
        id: 4098,
        cidade: 'Gentil',
        estado_id: 23
      },
      {
        id: 4099,
        cidade: 'Getúlio Vargas',
        estado_id: 23
      },
      {
        id: 4100,
        cidade: 'Giruá',
        estado_id: 23
      },
      {
        id: 4101,
        cidade: 'Glorinha',
        estado_id: 23
      },
      {
        id: 4102,
        cidade: 'Gramado',
        estado_id: 23
      },
      {
        id: 4103,
        cidade: 'Gramado Dos Loureiros',
        estado_id: 23
      },
      {
        id: 4104,
        cidade: 'Gramado Xavier',
        estado_id: 23
      },
      {
        id: 4105,
        cidade: 'Gravataí',
        estado_id: 23
      },
      {
        id: 4106,
        cidade: 'Guabiju',
        estado_id: 23
      },
      {
        id: 4107,
        cidade: 'Guaíba',
        estado_id: 23
      },
      {
        id: 4108,
        cidade: 'Guaporé',
        estado_id: 23
      },
      {
        id: 4109,
        cidade: 'Guarani Das Missões',
        estado_id: 23
      },
      {
        id: 4110,
        cidade: 'Harmonia',
        estado_id: 23
      },
      {
        id: 4111,
        cidade: 'Herveiras',
        estado_id: 23
      },
      {
        id: 4112,
        cidade: 'Horizontina',
        estado_id: 23
      },
      {
        id: 4113,
        cidade: 'Hulha Negra',
        estado_id: 23
      },
      {
        id: 4114,
        cidade: 'Humaitá',
        estado_id: 23
      },
      {
        id: 4115,
        cidade: 'Ibarama',
        estado_id: 23
      },
      {
        id: 4116,
        cidade: 'Ibiaçá',
        estado_id: 23
      },
      {
        id: 4117,
        cidade: 'Ibiraiaras',
        estado_id: 23
      },
      {
        id: 4118,
        cidade: 'Ibirapuitã',
        estado_id: 23
      },
      {
        id: 4119,
        cidade: 'Ibirubá',
        estado_id: 23
      },
      {
        id: 4120,
        cidade: 'Igrejinha',
        estado_id: 23
      },
      {
        id: 4121,
        cidade: 'Ijuí',
        estado_id: 23
      },
      {
        id: 4122,
        cidade: 'Ilópolis',
        estado_id: 23
      },
      {
        id: 4123,
        cidade: 'Imbé',
        estado_id: 23
      },
      {
        id: 4124,
        cidade: 'Imigrante',
        estado_id: 23
      },
      {
        id: 4125,
        cidade: 'Independência',
        estado_id: 23
      },
      {
        id: 4126,
        cidade: 'Inhacorá',
        estado_id: 23
      },
      {
        id: 4127,
        cidade: 'Ipê',
        estado_id: 23
      },
      {
        id: 4128,
        cidade: 'Ipiranga do Sul',
        estado_id: 23
      },
      {
        id: 4129,
        cidade: 'Iraí',
        estado_id: 23
      },
      {
        id: 4130,
        cidade: 'Itaara',
        estado_id: 23
      },
      {
        id: 4131,
        cidade: 'Itacurubi',
        estado_id: 23
      },
      {
        id: 4132,
        cidade: 'Itapuca',
        estado_id: 23
      },
      {
        id: 4133,
        cidade: 'Itaqui',
        estado_id: 23
      },
      {
        id: 4134,
        cidade: 'Itati',
        estado_id: 23
      },
      {
        id: 4135,
        cidade: 'Itatiba do Sul',
        estado_id: 23
      },
      {
        id: 4136,
        cidade: 'Ivorá',
        estado_id: 23
      },
      {
        id: 4137,
        cidade: 'Ivoti',
        estado_id: 23
      },
      {
        id: 4138,
        cidade: 'Jaboticaba',
        estado_id: 23
      },
      {
        id: 4139,
        cidade: 'Jacuizinho',
        estado_id: 23
      },
      {
        id: 4140,
        cidade: 'Jacutinga',
        estado_id: 23
      },
      {
        id: 4141,
        cidade: 'Jaguarão',
        estado_id: 23
      },
      {
        id: 4142,
        cidade: 'Jaguari',
        estado_id: 23
      },
      {
        id: 4143,
        cidade: 'Jaquirana',
        estado_id: 23
      },
      {
        id: 4144,
        cidade: 'Jari',
        estado_id: 23
      },
      {
        id: 4145,
        cidade: 'Jóia',
        estado_id: 23
      },
      {
        id: 4146,
        cidade: 'Júlio de Castilhos',
        estado_id: 23
      },
      {
        id: 4147,
        cidade: 'Lagoa Bonita do Sul',
        estado_id: 23
      },
      {
        id: 4148,
        cidade: 'Lagoão',
        estado_id: 23
      },
      {
        id: 4149,
        cidade: 'Lagoa Dos Três Cantos',
        estado_id: 23
      },
      {
        id: 4150,
        cidade: 'Lagoa Vermelha',
        estado_id: 23
      },
      {
        id: 4151,
        cidade: 'Lajeado',
        estado_id: 23
      },
      {
        id: 4152,
        cidade: 'Lajeado do Bugre',
        estado_id: 23
      },
      {
        id: 4153,
        cidade: 'Lavras do Sul',
        estado_id: 23
      },
      {
        id: 4154,
        cidade: 'Liberato Salzano',
        estado_id: 23
      },
      {
        id: 4155,
        cidade: 'Lindolfo Collor',
        estado_id: 23
      },
      {
        id: 4156,
        cidade: 'Linha Nova',
        estado_id: 23
      },
      {
        id: 4157,
        cidade: 'Machadinho',
        estado_id: 23
      },
      {
        id: 4158,
        cidade: 'Maçambara',
        estado_id: 23
      },
      {
        id: 4159,
        cidade: 'Mampituba',
        estado_id: 23
      },
      {
        id: 4160,
        cidade: 'Manoel Viana',
        estado_id: 23
      },
      {
        id: 4161,
        cidade: 'Maquiné',
        estado_id: 23
      },
      {
        id: 4162,
        cidade: 'Maratá',
        estado_id: 23
      },
      {
        id: 4163,
        cidade: 'Marau',
        estado_id: 23
      },
      {
        id: 4164,
        cidade: 'Marcelino Ramos',
        estado_id: 23
      },
      {
        id: 4165,
        cidade: 'Mariana Pimentel',
        estado_id: 23
      },
      {
        id: 4166,
        cidade: 'Mariano Moro',
        estado_id: 23
      },
      {
        id: 4167,
        cidade: 'Marques de Souza',
        estado_id: 23
      },
      {
        id: 4168,
        cidade: 'Mata',
        estado_id: 23
      },
      {
        id: 4169,
        cidade: 'Mato Castelhano',
        estado_id: 23
      },
      {
        id: 4170,
        cidade: 'Mato Leitão',
        estado_id: 23
      },
      {
        id: 4171,
        cidade: 'Mato Queimado',
        estado_id: 23
      },
      {
        id: 4172,
        cidade: 'Maximiliano de Almeida',
        estado_id: 23
      },
      {
        id: 4173,
        cidade: 'Minas do Leão',
        estado_id: 23
      },
      {
        id: 4174,
        cidade: 'Miraguaí',
        estado_id: 23
      },
      {
        id: 4175,
        cidade: 'Montauri',
        estado_id: 23
      },
      {
        id: 4176,
        cidade: 'Monte Alegre Dos Campos',
        estado_id: 23
      },
      {
        id: 4177,
        cidade: 'Monte Belo do Sul',
        estado_id: 23
      },
      {
        id: 4178,
        cidade: 'Montenegro',
        estado_id: 23
      },
      {
        id: 4179,
        cidade: 'Mormaço',
        estado_id: 23
      },
      {
        id: 4180,
        cidade: 'Morrinhos do Sul',
        estado_id: 23
      },
      {
        id: 4181,
        cidade: 'Morro Redondo',
        estado_id: 23
      },
      {
        id: 4182,
        cidade: 'Morro Reuter',
        estado_id: 23
      },
      {
        id: 4183,
        cidade: 'Mostardas',
        estado_id: 23
      },
      {
        id: 4184,
        cidade: 'Muçum',
        estado_id: 23
      },
      {
        id: 4185,
        cidade: 'Muitos Capões',
        estado_id: 23
      },
      {
        id: 4186,
        cidade: 'Muliterno',
        estado_id: 23
      },
      {
        id: 4187,
        cidade: 'Não-me-toque',
        estado_id: 23
      },
      {
        id: 4188,
        cidade: 'Nicolau Vergueiro',
        estado_id: 23
      },
      {
        id: 4189,
        cidade: 'Nonoai',
        estado_id: 23
      },
      {
        id: 4190,
        cidade: 'Nova Alvorada',
        estado_id: 23
      },
      {
        id: 4191,
        cidade: 'Nova Araçá',
        estado_id: 23
      },
      {
        id: 4192,
        cidade: 'Nova Bassano',
        estado_id: 23
      },
      {
        id: 4193,
        cidade: 'Nova Boa Vista',
        estado_id: 23
      },
      {
        id: 4194,
        cidade: 'Nova Bréscia',
        estado_id: 23
      },
      {
        id: 4195,
        cidade: 'Nova Candelária',
        estado_id: 23
      },
      {
        id: 4196,
        cidade: 'Nova Esperança do Sul',
        estado_id: 23
      },
      {
        id: 4197,
        cidade: 'Nova Hartz',
        estado_id: 23
      },
      {
        id: 4198,
        cidade: 'Nova Pádua',
        estado_id: 23
      },
      {
        id: 4199,
        cidade: 'Nova Palma',
        estado_id: 23
      },
      {
        id: 4200,
        cidade: 'Nova Petrópolis',
        estado_id: 23
      },
      {
        id: 4201,
        cidade: 'Nova Prata',
        estado_id: 23
      },
      {
        id: 4202,
        cidade: 'Nova Ramada',
        estado_id: 23
      },
      {
        id: 4203,
        cidade: 'Nova Roma do Sul',
        estado_id: 23
      },
      {
        id: 4204,
        cidade: 'Nova Santa Rita',
        estado_id: 23
      },
      {
        id: 4205,
        cidade: 'Novo Cabrais',
        estado_id: 23
      },
      {
        id: 4206,
        cidade: 'Novo Hamburgo',
        estado_id: 23
      },
      {
        id: 4207,
        cidade: 'Novo Machado',
        estado_id: 23
      },
      {
        id: 4208,
        cidade: 'Novo Tiradentes',
        estado_id: 23
      },
      {
        id: 4209,
        cidade: 'Novo Xingu',
        estado_id: 23
      },
      {
        id: 4210,
        cidade: 'Novo Barreiro',
        estado_id: 23
      },
      {
        id: 4211,
        cidade: 'Osório',
        estado_id: 23
      },
      {
        id: 4212,
        cidade: 'Paim Filho',
        estado_id: 23
      },
      {
        id: 4213,
        cidade: 'Palmares do Sul',
        estado_id: 23
      },
      {
        id: 4214,
        cidade: 'Palmeira Das Missões',
        estado_id: 23
      },
      {
        id: 4215,
        cidade: 'Palmitinho',
        estado_id: 23
      },
      {
        id: 4216,
        cidade: 'Panambi',
        estado_id: 23
      },
      {
        id: 4217,
        cidade: 'Pantano Grande',
        estado_id: 23
      },
      {
        id: 4218,
        cidade: 'Paraí',
        estado_id: 23
      },
      {
        id: 4219,
        cidade: 'Paraíso do Sul',
        estado_id: 23
      },
      {
        id: 4220,
        cidade: 'Pareci Novo',
        estado_id: 23
      },
      {
        id: 4221,
        cidade: 'Parobé',
        estado_id: 23
      },
      {
        id: 4222,
        cidade: 'Passa Sete',
        estado_id: 23
      },
      {
        id: 4223,
        cidade: 'Passo do Sobrado',
        estado_id: 23
      },
      {
        id: 4224,
        cidade: 'Passo Fundo',
        estado_id: 23
      },
      {
        id: 4225,
        cidade: 'Paulo Bento',
        estado_id: 23
      },
      {
        id: 4226,
        cidade: 'Paverama',
        estado_id: 23
      },
      {
        id: 4227,
        cidade: 'Pedras Altas',
        estado_id: 23
      },
      {
        id: 4228,
        cidade: 'Pedro Osório',
        estado_id: 23
      },
      {
        id: 4229,
        cidade: 'Pejuçara',
        estado_id: 23
      },
      {
        id: 4230,
        cidade: 'Pelotas',
        estado_id: 23
      },
      {
        id: 4231,
        cidade: 'Picada Café',
        estado_id: 23
      },
      {
        id: 4232,
        cidade: 'Pinhal',
        estado_id: 23
      },
      {
        id: 4233,
        cidade: 'Pinhal da Serra',
        estado_id: 23
      },
      {
        id: 4234,
        cidade: 'Pinhal Grande',
        estado_id: 23
      },
      {
        id: 4235,
        cidade: 'Pinheirinho do Vale',
        estado_id: 23
      },
      {
        id: 4236,
        cidade: 'Pinheiro Machado',
        estado_id: 23
      },
      {
        id: 4237,
        cidade: 'Pinto Bandeira',
        estado_id: 23
      },
      {
        id: 4238,
        cidade: 'Pirapó',
        estado_id: 23
      },
      {
        id: 4239,
        cidade: 'Piratini',
        estado_id: 23
      },
      {
        id: 4240,
        cidade: 'Planalto',
        estado_id: 23
      },
      {
        id: 4241,
        cidade: 'Poço Das Antas',
        estado_id: 23
      },
      {
        id: 4242,
        cidade: 'Pontão',
        estado_id: 23
      },
      {
        id: 4243,
        cidade: 'Ponte Preta',
        estado_id: 23
      },
      {
        id: 4244,
        cidade: 'Portão',
        estado_id: 23
      },
      {
        id: 4245,
        cidade: 'Porto Alegre',
        estado_id: 23
      },
      {
        id: 4246,
        cidade: 'Porto Lucena',
        estado_id: 23
      },
      {
        id: 4247,
        cidade: 'Porto Mauá',
        estado_id: 23
      },
      {
        id: 4248,
        cidade: 'Porto Vera Cruz',
        estado_id: 23
      },
      {
        id: 4249,
        cidade: 'Porto Xavier',
        estado_id: 23
      },
      {
        id: 4250,
        cidade: 'Pouso Novo',
        estado_id: 23
      },
      {
        id: 4251,
        cidade: 'Presidente Lucena',
        estado_id: 23
      },
      {
        id: 4252,
        cidade: 'Progresso',
        estado_id: 23
      },
      {
        id: 4253,
        cidade: 'Protásio Alves',
        estado_id: 23
      },
      {
        id: 4254,
        cidade: 'Putinga',
        estado_id: 23
      },
      {
        id: 4255,
        cidade: 'Quaraí',
        estado_id: 23
      },
      {
        id: 4256,
        cidade: 'Quatro Irmãos',
        estado_id: 23
      },
      {
        id: 4257,
        cidade: 'Quevedos',
        estado_id: 23
      },
      {
        id: 4258,
        cidade: 'Quinze de Novembro',
        estado_id: 23
      },
      {
        id: 4259,
        cidade: 'Redentora',
        estado_id: 23
      },
      {
        id: 4260,
        cidade: 'Relvado',
        estado_id: 23
      },
      {
        id: 4261,
        cidade: 'Restinga Seca',
        estado_id: 23
      },
      {
        id: 4262,
        cidade: 'Rio Dos Índios',
        estado_id: 23
      },
      {
        id: 4263,
        cidade: 'Rio Grande',
        estado_id: 23
      },
      {
        id: 4264,
        cidade: 'Rio Pardo',
        estado_id: 23
      },
      {
        id: 4265,
        cidade: 'Riozinho',
        estado_id: 23
      },
      {
        id: 4266,
        cidade: 'Roca Sales',
        estado_id: 23
      },
      {
        id: 4267,
        cidade: 'Rodeio Bonito',
        estado_id: 23
      },
      {
        id: 4268,
        cidade: 'Rolador',
        estado_id: 23
      },
      {
        id: 4269,
        cidade: 'Rolante',
        estado_id: 23
      },
      {
        id: 4270,
        cidade: 'Ronda Alta',
        estado_id: 23
      },
      {
        id: 4271,
        cidade: 'Rondinha',
        estado_id: 23
      },
      {
        id: 4272,
        cidade: 'Roque Gonzales',
        estado_id: 23
      },
      {
        id: 4273,
        cidade: 'Rosário do Sul',
        estado_id: 23
      },
      {
        id: 4274,
        cidade: 'Sagrada Família',
        estado_id: 23
      },
      {
        id: 4275,
        cidade: 'Saldanha Marinho',
        estado_id: 23
      },
      {
        id: 4276,
        cidade: 'Salto do Jacuí',
        estado_id: 23
      },
      {
        id: 4277,
        cidade: 'Salvador Das Missões',
        estado_id: 23
      },
      {
        id: 4278,
        cidade: 'Salvador do Sul',
        estado_id: 23
      },
      {
        id: 4279,
        cidade: 'Sananduva',
        estado_id: 23
      },
      {
        id: 4280,
        cidade: 'Santa Bárbara do Sul',
        estado_id: 23
      },
      {
        id: 4281,
        cidade: 'Santa Cecília do Sul',
        estado_id: 23
      },
      {
        id: 4282,
        cidade: 'Santa Clara do Sul',
        estado_id: 23
      },
      {
        id: 4283,
        cidade: 'Santa Cruz do Sul',
        estado_id: 23
      },
      {
        id: 4284,
        cidade: 'Santa Maria',
        estado_id: 23
      },
      {
        id: 4285,
        cidade: 'Santa Maria do Herval',
        estado_id: 23
      },
      {
        id: 4286,
        cidade: 'Santa Margarida do Sul',
        estado_id: 23
      },
      {
        id: 4287,
        cidade: 'Santana da Boa Vista',
        estado_id: 23
      },
      {
        id: 4288,
        cidade: 'Santana do Livramento',
        estado_id: 23
      },
      {
        id: 4289,
        cidade: 'Santa Rosa',
        estado_id: 23
      },
      {
        id: 4290,
        cidade: 'Santa Tereza',
        estado_id: 23
      },
      {
        id: 4291,
        cidade: 'Santa Vitória do Palmar',
        estado_id: 23
      },
      {
        id: 4292,
        cidade: 'Santiago',
        estado_id: 23
      },
      {
        id: 4293,
        cidade: 'Santo Ângelo',
        estado_id: 23
      },
      {
        id: 4294,
        cidade: 'Santo Antônio do Palma',
        estado_id: 23
      },
      {
        id: 4295,
        cidade: 'Santo Antônio da Patrulha',
        estado_id: 23
      },
      {
        id: 4296,
        cidade: 'Santo Antônio Das Missões',
        estado_id: 23
      },
      {
        id: 4297,
        cidade: 'Santo Antônio do Planalto',
        estado_id: 23
      },
      {
        id: 4298,
        cidade: 'Santo Augusto',
        estado_id: 23
      },
      {
        id: 4299,
        cidade: 'Santo Cristo',
        estado_id: 23
      },
      {
        id: 4300,
        cidade: 'Santo Expedito do Sul',
        estado_id: 23
      },
      {
        id: 4301,
        cidade: 'São Borja',
        estado_id: 23
      },
      {
        id: 4302,
        cidade: 'São Domingos do Sul',
        estado_id: 23
      },
      {
        id: 4303,
        cidade: 'São Francisco de Assis',
        estado_id: 23
      },
      {
        id: 4304,
        cidade: 'São Francisco de Paula',
        estado_id: 23
      },
      {
        id: 4305,
        cidade: 'São Gabriel',
        estado_id: 23
      },
      {
        id: 4306,
        cidade: 'São Jerônimo',
        estado_id: 23
      },
      {
        id: 4307,
        cidade: 'São João da Urtiga',
        estado_id: 23
      },
      {
        id: 4308,
        cidade: 'São João do Polêsine',
        estado_id: 23
      },
      {
        id: 4309,
        cidade: 'São Jorge',
        estado_id: 23
      },
      {
        id: 4310,
        cidade: 'São José Das Missões',
        estado_id: 23
      },
      {
        id: 4311,
        cidade: 'São José do Herval',
        estado_id: 23
      },
      {
        id: 4312,
        cidade: 'São José do Hortêncio',
        estado_id: 23
      },
      {
        id: 4313,
        cidade: 'São José do Inhacorá',
        estado_id: 23
      },
      {
        id: 4314,
        cidade: 'São José do Norte',
        estado_id: 23
      },
      {
        id: 4315,
        cidade: 'São José do Ouro',
        estado_id: 23
      },
      {
        id: 4316,
        cidade: 'São José do Sul',
        estado_id: 23
      },
      {
        id: 4317,
        cidade: 'São José Dos Ausentes',
        estado_id: 23
      },
      {
        id: 4318,
        cidade: 'São Leopoldo',
        estado_id: 23
      },
      {
        id: 4319,
        cidade: 'São Lourenço do Sul',
        estado_id: 23
      },
      {
        id: 4320,
        cidade: 'São Luiz Gonzaga',
        estado_id: 23
      },
      {
        id: 4321,
        cidade: 'São Marcos',
        estado_id: 23
      },
      {
        id: 4322,
        cidade: 'São Martinho',
        estado_id: 23
      },
      {
        id: 4323,
        cidade: 'São Martinho da Serra',
        estado_id: 23
      },
      {
        id: 4324,
        cidade: 'São Miguel Das Missões',
        estado_id: 23
      },
      {
        id: 4325,
        cidade: 'São Nicolau',
        estado_id: 23
      },
      {
        id: 4326,
        cidade: 'São Paulo Das Missões',
        estado_id: 23
      },
      {
        id: 4327,
        cidade: 'São Pedro da Serra',
        estado_id: 23
      },
      {
        id: 4328,
        cidade: 'São Pedro Das Missões',
        estado_id: 23
      },
      {
        id: 4329,
        cidade: 'São Pedro do Butiá',
        estado_id: 23
      },
      {
        id: 4330,
        cidade: 'São Pedro do Sul',
        estado_id: 23
      },
      {
        id: 4331,
        cidade: 'São Sebastião do Caí',
        estado_id: 23
      },
      {
        id: 4332,
        cidade: 'São Sepé',
        estado_id: 23
      },
      {
        id: 4333,
        cidade: 'São Valentim',
        estado_id: 23
      },
      {
        id: 4334,
        cidade: 'São Valentim do Sul',
        estado_id: 23
      },
      {
        id: 4335,
        cidade: 'São Valério do Sul',
        estado_id: 23
      },
      {
        id: 4336,
        cidade: 'São Vendelino',
        estado_id: 23
      },
      {
        id: 4337,
        cidade: 'São Vicente do Sul',
        estado_id: 23
      },
      {
        id: 4338,
        cidade: 'Sapiranga',
        estado_id: 23
      },
      {
        id: 4339,
        cidade: 'Sapucaia do Sul',
        estado_id: 23
      },
      {
        id: 4340,
        cidade: 'Sarandi',
        estado_id: 23
      },
      {
        id: 4341,
        cidade: 'Seberi',
        estado_id: 23
      },
      {
        id: 4342,
        cidade: 'Sede Nova',
        estado_id: 23
      },
      {
        id: 4343,
        cidade: 'Segredo',
        estado_id: 23
      },
      {
        id: 4344,
        cidade: 'Selbach',
        estado_id: 23
      },
      {
        id: 4345,
        cidade: 'Senador Salgado Filho',
        estado_id: 23
      },
      {
        id: 4346,
        cidade: 'Sentinela do Sul',
        estado_id: 23
      },
      {
        id: 4347,
        cidade: 'Serafina Corrêa',
        estado_id: 23
      },
      {
        id: 4348,
        cidade: 'Sério',
        estado_id: 23
      },
      {
        id: 4349,
        cidade: 'Sertão',
        estado_id: 23
      },
      {
        id: 4350,
        cidade: 'Sertão Santana',
        estado_id: 23
      },
      {
        id: 4351,
        cidade: 'Sete de Setembro',
        estado_id: 23
      },
      {
        id: 4352,
        cidade: 'Severiano de Almeida',
        estado_id: 23
      },
      {
        id: 4353,
        cidade: 'Silveira Martins',
        estado_id: 23
      },
      {
        id: 4354,
        cidade: 'Sinimbu',
        estado_id: 23
      },
      {
        id: 4355,
        cidade: 'Sobradinho',
        estado_id: 23
      },
      {
        id: 4356,
        cidade: 'Soledade',
        estado_id: 23
      },
      {
        id: 4357,
        cidade: 'Tabaí',
        estado_id: 23
      },
      {
        id: 4358,
        cidade: 'Tapejara',
        estado_id: 23
      },
      {
        id: 4359,
        cidade: 'Tapera',
        estado_id: 23
      },
      {
        id: 4360,
        cidade: 'Tapes',
        estado_id: 23
      },
      {
        id: 4361,
        cidade: 'Taquara',
        estado_id: 23
      },
      {
        id: 4362,
        cidade: 'Taquari',
        estado_id: 23
      },
      {
        id: 4363,
        cidade: 'Taquaruçu do Sul',
        estado_id: 23
      },
      {
        id: 4364,
        cidade: 'Tavares',
        estado_id: 23
      },
      {
        id: 4365,
        cidade: 'Tenente Portela',
        estado_id: 23
      },
      {
        id: 4366,
        cidade: 'Terra de Areia',
        estado_id: 23
      },
      {
        id: 4367,
        cidade: 'Teutônia',
        estado_id: 23
      },
      {
        id: 4368,
        cidade: 'Tio Hugo',
        estado_id: 23
      },
      {
        id: 4369,
        cidade: 'Tiradentes do Sul',
        estado_id: 23
      },
      {
        id: 4370,
        cidade: 'Toropi',
        estado_id: 23
      },
      {
        id: 4371,
        cidade: 'Torres',
        estado_id: 23
      },
      {
        id: 4372,
        cidade: 'Tramandaí',
        estado_id: 23
      },
      {
        id: 4373,
        cidade: 'Travesseiro',
        estado_id: 23
      },
      {
        id: 4374,
        cidade: 'Três Arroios',
        estado_id: 23
      },
      {
        id: 4375,
        cidade: 'Três Cachoeiras',
        estado_id: 23
      },
      {
        id: 4376,
        cidade: 'Três Coroas',
        estado_id: 23
      },
      {
        id: 4377,
        cidade: 'Três de Maio',
        estado_id: 23
      },
      {
        id: 4378,
        cidade: 'Três Forquilhas',
        estado_id: 23
      },
      {
        id: 4379,
        cidade: 'Três Palmeiras',
        estado_id: 23
      },
      {
        id: 4380,
        cidade: 'Três Passos',
        estado_id: 23
      },
      {
        id: 4381,
        cidade: 'Trindade do Sul',
        estado_id: 23
      },
      {
        id: 4382,
        cidade: 'Triunfo',
        estado_id: 23
      },
      {
        id: 4383,
        cidade: 'Tucunduva',
        estado_id: 23
      },
      {
        id: 4384,
        cidade: 'Tunas',
        estado_id: 23
      },
      {
        id: 4385,
        cidade: 'Tupanci do Sul',
        estado_id: 23
      },
      {
        id: 4386,
        cidade: 'Tupanciretã',
        estado_id: 23
      },
      {
        id: 4387,
        cidade: 'Tupandi',
        estado_id: 23
      },
      {
        id: 4388,
        cidade: 'Tuparendi',
        estado_id: 23
      },
      {
        id: 4389,
        cidade: 'Turuçu',
        estado_id: 23
      },
      {
        id: 4390,
        cidade: 'Ubiretama',
        estado_id: 23
      },
      {
        id: 4391,
        cidade: 'União da Serra',
        estado_id: 23
      },
      {
        id: 4392,
        cidade: 'Unistalda',
        estado_id: 23
      },
      {
        id: 4393,
        cidade: 'Uruguaiana',
        estado_id: 23
      },
      {
        id: 4394,
        cidade: 'Vacaria',
        estado_id: 23
      },
      {
        id: 4395,
        cidade: 'Vale Verde',
        estado_id: 23
      },
      {
        id: 4396,
        cidade: 'Vale do Sol',
        estado_id: 23
      },
      {
        id: 4397,
        cidade: 'Vale Real',
        estado_id: 23
      },
      {
        id: 4398,
        cidade: 'Vanini',
        estado_id: 23
      },
      {
        id: 4399,
        cidade: 'Venâncio Aires',
        estado_id: 23
      },
      {
        id: 4400,
        cidade: 'Vera Cruz',
        estado_id: 23
      },
      {
        id: 4401,
        cidade: 'Veranópolis',
        estado_id: 23
      },
      {
        id: 4402,
        cidade: 'Vespasiano Correa',
        estado_id: 23
      },
      {
        id: 4403,
        cidade: 'Viadutos',
        estado_id: 23
      },
      {
        id: 4404,
        cidade: 'Viamão',
        estado_id: 23
      },
      {
        id: 4405,
        cidade: 'Vicente Dutra',
        estado_id: 23
      },
      {
        id: 4406,
        cidade: 'Victor Graeff',
        estado_id: 23
      },
      {
        id: 4407,
        cidade: 'Vila Flores',
        estado_id: 23
      },
      {
        id: 4408,
        cidade: 'Vila Lângaro',
        estado_id: 23
      },
      {
        id: 4409,
        cidade: 'Vila Maria',
        estado_id: 23
      },
      {
        id: 4410,
        cidade: 'Vila Nova do Sul',
        estado_id: 23
      },
      {
        id: 4411,
        cidade: 'Vista Alegre',
        estado_id: 23
      },
      {
        id: 4412,
        cidade: 'Vista Alegre do Prata',
        estado_id: 23
      },
      {
        id: 4413,
        cidade: 'Vista Gaúcha',
        estado_id: 23
      },
      {
        id: 4414,
        cidade: 'Vitória Das Missões',
        estado_id: 23
      },
      {
        id: 4415,
        cidade: 'Westfalia',
        estado_id: 23
      },
      {
        id: 4416,
        cidade: 'Xangri-lá',
        estado_id: 23
      },
      {
        id: 4417,
        cidade: 'Abdon Batista',
        estado_id: 24
      },
      {
        id: 4418,
        cidade: 'Abelardo Luz',
        estado_id: 24
      },
      {
        id: 4419,
        cidade: 'Agrolândia',
        estado_id: 24
      },
      {
        id: 4420,
        cidade: 'Agronômica',
        estado_id: 24
      },
      {
        id: 4421,
        cidade: 'Água Doce',
        estado_id: 24
      },
      {
        id: 4422,
        cidade: 'Águas de Chapecó',
        estado_id: 24
      },
      {
        id: 4423,
        cidade: 'Águas Frias',
        estado_id: 24
      },
      {
        id: 4424,
        cidade: 'Águas Mornas',
        estado_id: 24
      },
      {
        id: 4425,
        cidade: 'Alfredo Wagner',
        estado_id: 24
      },
      {
        id: 4426,
        cidade: 'Alto Bela Vista',
        estado_id: 24
      },
      {
        id: 4427,
        cidade: 'Anchieta',
        estado_id: 24
      },
      {
        id: 4428,
        cidade: 'Angelina',
        estado_id: 24
      },
      {
        id: 4429,
        cidade: 'Anita Garibaldi',
        estado_id: 24
      },
      {
        id: 4430,
        cidade: 'Anitápolis',
        estado_id: 24
      },
      {
        id: 4431,
        cidade: 'Antônio Carlos',
        estado_id: 24
      },
      {
        id: 4432,
        cidade: 'Apiúna',
        estado_id: 24
      },
      {
        id: 4433,
        cidade: 'Arabutã',
        estado_id: 24
      },
      {
        id: 4434,
        cidade: 'Araquari',
        estado_id: 24
      },
      {
        id: 4435,
        cidade: 'Araranguá',
        estado_id: 24
      },
      {
        id: 4436,
        cidade: 'Armazém',
        estado_id: 24
      },
      {
        id: 4437,
        cidade: 'Arroio Trinta',
        estado_id: 24
      },
      {
        id: 4438,
        cidade: 'Arvoredo',
        estado_id: 24
      },
      {
        id: 4439,
        cidade: 'Ascurra',
        estado_id: 24
      },
      {
        id: 4440,
        cidade: 'Atalanta',
        estado_id: 24
      },
      {
        id: 4441,
        cidade: 'Aurora',
        estado_id: 24
      },
      {
        id: 4442,
        cidade: 'Balneário Arroio do Silva',
        estado_id: 24
      },
      {
        id: 4443,
        cidade: 'Balneário Camboriú',
        estado_id: 24
      },
      {
        id: 4444,
        cidade: 'Balneário Barra do Sul',
        estado_id: 24
      },
      {
        id: 4445,
        cidade: 'Balneário Gaivota',
        estado_id: 24
      },
      {
        id: 4446,
        cidade: 'Bandeirante',
        estado_id: 24
      },
      {
        id: 4447,
        cidade: 'Barra Bonita',
        estado_id: 24
      },
      {
        id: 4448,
        cidade: 'Barra Velha',
        estado_id: 24
      },
      {
        id: 4449,
        cidade: 'Bela Vista do Toldo',
        estado_id: 24
      },
      {
        id: 4450,
        cidade: 'Belmonte',
        estado_id: 24
      },
      {
        id: 4451,
        cidade: 'Benedito Novo',
        estado_id: 24
      },
      {
        id: 4452,
        cidade: 'Biguaçu',
        estado_id: 24
      },
      {
        id: 4453,
        cidade: 'Blumenau',
        estado_id: 24
      },
      {
        id: 4454,
        cidade: 'Bocaina do Sul',
        estado_id: 24
      },
      {
        id: 4455,
        cidade: 'Bombinhas',
        estado_id: 24
      },
      {
        id: 4456,
        cidade: 'Bom Jardim da Serra',
        estado_id: 24
      },
      {
        id: 4457,
        cidade: 'Bom Jesus',
        estado_id: 24
      },
      {
        id: 4458,
        cidade: 'Bom Jesus do Oeste',
        estado_id: 24
      },
      {
        id: 4459,
        cidade: 'Bom Retiro',
        estado_id: 24
      },
      {
        id: 4460,
        cidade: 'Botuverá',
        estado_id: 24
      },
      {
        id: 4461,
        cidade: 'Braço do Norte',
        estado_id: 24
      },
      {
        id: 4462,
        cidade: 'Braço do Trombudo',
        estado_id: 24
      },
      {
        id: 4463,
        cidade: 'Brunópolis',
        estado_id: 24
      },
      {
        id: 4464,
        cidade: 'Brusque',
        estado_id: 24
      },
      {
        id: 4465,
        cidade: 'Caçador',
        estado_id: 24
      },
      {
        id: 4466,
        cidade: 'Caibi',
        estado_id: 24
      },
      {
        id: 4467,
        cidade: 'Calmon',
        estado_id: 24
      },
      {
        id: 4468,
        cidade: 'Camboriú',
        estado_id: 24
      },
      {
        id: 4469,
        cidade: 'Capão Alto',
        estado_id: 24
      },
      {
        id: 4470,
        cidade: 'Campo Alegre',
        estado_id: 24
      },
      {
        id: 4471,
        cidade: 'Campo Belo do Sul',
        estado_id: 24
      },
      {
        id: 4472,
        cidade: 'Campo Erê',
        estado_id: 24
      },
      {
        id: 4473,
        cidade: 'Campos Novos',
        estado_id: 24
      },
      {
        id: 4474,
        cidade: 'Canelinha',
        estado_id: 24
      },
      {
        id: 4475,
        cidade: 'Canoinhas',
        estado_id: 24
      },
      {
        id: 4476,
        cidade: 'Capinzal',
        estado_id: 24
      },
      {
        id: 4477,
        cidade: 'Capivari de Baixo',
        estado_id: 24
      },
      {
        id: 4478,
        cidade: 'Catanduvas',
        estado_id: 24
      },
      {
        id: 4479,
        cidade: 'Caxambu do Sul',
        estado_id: 24
      },
      {
        id: 4480,
        cidade: 'Celso Ramos',
        estado_id: 24
      },
      {
        id: 4481,
        cidade: 'Cerro Negro',
        estado_id: 24
      },
      {
        id: 4482,
        cidade: 'Chapadão do Lageado',
        estado_id: 24
      },
      {
        id: 4483,
        cidade: 'Chapecó',
        estado_id: 24
      },
      {
        id: 4484,
        cidade: 'Cocal do Sul',
        estado_id: 24
      },
      {
        id: 4485,
        cidade: 'Concórdia',
        estado_id: 24
      },
      {
        id: 4486,
        cidade: 'Cordilheira Alta',
        estado_id: 24
      },
      {
        id: 4487,
        cidade: 'Coronel Freitas',
        estado_id: 24
      },
      {
        id: 4488,
        cidade: 'Coronel Martins',
        estado_id: 24
      },
      {
        id: 4489,
        cidade: 'Corupá',
        estado_id: 24
      },
      {
        id: 4490,
        cidade: 'Correia Pinto',
        estado_id: 24
      },
      {
        id: 4491,
        cidade: 'Criciúma',
        estado_id: 24
      },
      {
        id: 4492,
        cidade: 'Cunha Porã',
        estado_id: 24
      },
      {
        id: 4493,
        cidade: 'Cunhataí',
        estado_id: 24
      },
      {
        id: 4494,
        cidade: 'Curitibanos',
        estado_id: 24
      },
      {
        id: 4495,
        cidade: 'Descanso',
        estado_id: 24
      },
      {
        id: 4496,
        cidade: 'Dionísio Cerqueira',
        estado_id: 24
      },
      {
        id: 4497,
        cidade: 'Dona Emma',
        estado_id: 24
      },
      {
        id: 4498,
        cidade: 'Doutor Pedrinho',
        estado_id: 24
      },
      {
        id: 4499,
        cidade: 'Entre Rios',
        estado_id: 24
      },
      {
        id: 4500,
        cidade: 'Ermo',
        estado_id: 24
      },
      {
        id: 4501,
        cidade: 'Erval Velho',
        estado_id: 24
      },
      {
        id: 4502,
        cidade: 'Faxinal Dos Guedes',
        estado_id: 24
      },
      {
        id: 4503,
        cidade: 'Flor do Sertão',
        estado_id: 24
      },
      {
        id: 4504,
        cidade: 'Florianópolis',
        estado_id: 24
      },
      {
        id: 4505,
        cidade: 'Formosa do Sul',
        estado_id: 24
      },
      {
        id: 4506,
        cidade: 'Forquilhinha',
        estado_id: 24
      },
      {
        id: 4507,
        cidade: 'Fraiburgo',
        estado_id: 24
      },
      {
        id: 4508,
        cidade: 'Frei Rogério',
        estado_id: 24
      },
      {
        id: 4509,
        cidade: 'Galvão',
        estado_id: 24
      },
      {
        id: 4510,
        cidade: 'Garopaba',
        estado_id: 24
      },
      {
        id: 4511,
        cidade: 'Garuva',
        estado_id: 24
      },
      {
        id: 4512,
        cidade: 'Gaspar',
        estado_id: 24
      },
      {
        id: 4513,
        cidade: 'Governador Celso Ramos',
        estado_id: 24
      },
      {
        id: 4514,
        cidade: 'Grão Pará',
        estado_id: 24
      },
      {
        id: 4515,
        cidade: 'Gravatal',
        estado_id: 24
      },
      {
        id: 4516,
        cidade: 'Guabiruba',
        estado_id: 24
      },
      {
        id: 4517,
        cidade: 'Guaraciaba',
        estado_id: 24
      },
      {
        id: 4518,
        cidade: 'Guaramirim',
        estado_id: 24
      },
      {
        id: 4519,
        cidade: 'Guarujá do Sul',
        estado_id: 24
      },
      {
        id: 4520,
        cidade: 'Guatambú',
        estado_id: 24
      },
      {
        id: 4521,
        cidade: 'Herval D´oeste',
        estado_id: 24
      },
      {
        id: 4522,
        cidade: 'Ibiam',
        estado_id: 24
      },
      {
        id: 4523,
        cidade: 'Ibicaré',
        estado_id: 24
      },
      {
        id: 4524,
        cidade: 'Ibirama',
        estado_id: 24
      },
      {
        id: 4525,
        cidade: 'Içara',
        estado_id: 24
      },
      {
        id: 4526,
        cidade: 'Ilhota',
        estado_id: 24
      },
      {
        id: 4527,
        cidade: 'Imaruí',
        estado_id: 24
      },
      {
        id: 4528,
        cidade: 'Imbituba',
        estado_id: 24
      },
      {
        id: 4529,
        cidade: 'Imbuia',
        estado_id: 24
      },
      {
        id: 4530,
        cidade: 'Indaial',
        estado_id: 24
      },
      {
        id: 4531,
        cidade: 'Iomerê',
        estado_id: 24
      },
      {
        id: 4532,
        cidade: 'Ipira',
        estado_id: 24
      },
      {
        id: 4533,
        cidade: 'Iporã do Oeste',
        estado_id: 24
      },
      {
        id: 4534,
        cidade: 'Ipuaçu',
        estado_id: 24
      },
      {
        id: 4535,
        cidade: 'Ipumirim',
        estado_id: 24
      },
      {
        id: 4536,
        cidade: 'Iraceminha',
        estado_id: 24
      },
      {
        id: 4537,
        cidade: 'Irani',
        estado_id: 24
      },
      {
        id: 4538,
        cidade: 'Irati',
        estado_id: 24
      },
      {
        id: 4539,
        cidade: 'Irineópolis',
        estado_id: 24
      },
      {
        id: 4540,
        cidade: 'Itá',
        estado_id: 24
      },
      {
        id: 4541,
        cidade: 'Itaiópolis',
        estado_id: 24
      },
      {
        id: 4542,
        cidade: 'Itajaí',
        estado_id: 24
      },
      {
        id: 4543,
        cidade: 'Itapema',
        estado_id: 24
      },
      {
        id: 4544,
        cidade: 'Itapiranga',
        estado_id: 24
      },
      {
        id: 4545,
        cidade: 'Itapoá',
        estado_id: 24
      },
      {
        id: 4546,
        cidade: 'Ituporanga',
        estado_id: 24
      },
      {
        id: 4547,
        cidade: 'Jaborá',
        estado_id: 24
      },
      {
        id: 4548,
        cidade: 'Jacinto Machado',
        estado_id: 24
      },
      {
        id: 4549,
        cidade: 'Jaguaruna',
        estado_id: 24
      },
      {
        id: 4550,
        cidade: 'Jaraguá do Sul',
        estado_id: 24
      },
      {
        id: 4551,
        cidade: 'Jardinópolis',
        estado_id: 24
      },
      {
        id: 4552,
        cidade: 'Joaçaba',
        estado_id: 24
      },
      {
        id: 4553,
        cidade: 'Joinville',
        estado_id: 24
      },
      {
        id: 4554,
        cidade: 'José Boiteux',
        estado_id: 24
      },
      {
        id: 4555,
        cidade: 'Jupiá',
        estado_id: 24
      },
      {
        id: 4556,
        cidade: 'Lacerdópolis',
        estado_id: 24
      },
      {
        id: 4557,
        cidade: 'Lages',
        estado_id: 24
      },
      {
        id: 4558,
        cidade: 'Laguna',
        estado_id: 24
      },
      {
        id: 4559,
        cidade: 'Lajeado Grande',
        estado_id: 24
      },
      {
        id: 4560,
        cidade: 'Laurentino',
        estado_id: 24
      },
      {
        id: 4561,
        cidade: 'Lauro Muller',
        estado_id: 24
      },
      {
        id: 4562,
        cidade: 'Lebon Régis',
        estado_id: 24
      },
      {
        id: 4563,
        cidade: 'Leoberto Leal',
        estado_id: 24
      },
      {
        id: 4564,
        cidade: 'Lindóia do Sul',
        estado_id: 24
      },
      {
        id: 4565,
        cidade: 'Lontras',
        estado_id: 24
      },
      {
        id: 4566,
        cidade: 'Luiz Alves',
        estado_id: 24
      },
      {
        id: 4567,
        cidade: 'Luzerna',
        estado_id: 24
      },
      {
        id: 4568,
        cidade: 'Macieira',
        estado_id: 24
      },
      {
        id: 4569,
        cidade: 'Mafra',
        estado_id: 24
      },
      {
        id: 4570,
        cidade: 'Major Gercino',
        estado_id: 24
      },
      {
        id: 4571,
        cidade: 'Major Vieira',
        estado_id: 24
      },
      {
        id: 4572,
        cidade: 'Maracajá',
        estado_id: 24
      },
      {
        id: 4573,
        cidade: 'Maravilha',
        estado_id: 24
      },
      {
        id: 4574,
        cidade: 'Marema',
        estado_id: 24
      },
      {
        id: 4575,
        cidade: 'Massaranduba',
        estado_id: 24
      },
      {
        id: 4576,
        cidade: 'Matos Costa',
        estado_id: 24
      },
      {
        id: 4577,
        cidade: 'Meleiro',
        estado_id: 24
      },
      {
        id: 4578,
        cidade: 'Mirim Doce',
        estado_id: 24
      },
      {
        id: 4579,
        cidade: 'Modelo',
        estado_id: 24
      },
      {
        id: 4580,
        cidade: 'Mondaí',
        estado_id: 24
      },
      {
        id: 4581,
        cidade: 'Monte Carlo',
        estado_id: 24
      },
      {
        id: 4582,
        cidade: 'Monte Castelo',
        estado_id: 24
      },
      {
        id: 4583,
        cidade: 'Morro da Fumaça',
        estado_id: 24
      },
      {
        id: 4584,
        cidade: 'Morro Grande',
        estado_id: 24
      },
      {
        id: 4585,
        cidade: 'Navegantes',
        estado_id: 24
      },
      {
        id: 4586,
        cidade: 'Nova Erechim',
        estado_id: 24
      },
      {
        id: 4587,
        cidade: 'Nova Itaberaba',
        estado_id: 24
      },
      {
        id: 4588,
        cidade: 'Nova Trento',
        estado_id: 24
      },
      {
        id: 4589,
        cidade: 'Nova Veneza',
        estado_id: 24
      },
      {
        id: 4590,
        cidade: 'Novo Horizonte',
        estado_id: 24
      },
      {
        id: 4591,
        cidade: 'Orleans',
        estado_id: 24
      },
      {
        id: 4592,
        cidade: 'Otacílio Costa',
        estado_id: 24
      },
      {
        id: 4593,
        cidade: 'Ouro',
        estado_id: 24
      },
      {
        id: 4594,
        cidade: 'Ouro Verde',
        estado_id: 24
      },
      {
        id: 4595,
        cidade: 'Paial',
        estado_id: 24
      },
      {
        id: 4596,
        cidade: 'Painel',
        estado_id: 24
      },
      {
        id: 4597,
        cidade: 'Palhoça',
        estado_id: 24
      },
      {
        id: 4598,
        cidade: 'Palma Sola',
        estado_id: 24
      },
      {
        id: 4599,
        cidade: 'Palmeira',
        estado_id: 24
      },
      {
        id: 4600,
        cidade: 'Palmitos',
        estado_id: 24
      },
      {
        id: 4601,
        cidade: 'Papanduva',
        estado_id: 24
      },
      {
        id: 4602,
        cidade: 'Paraíso',
        estado_id: 24
      },
      {
        id: 4603,
        cidade: 'Passo de Torres',
        estado_id: 24
      },
      {
        id: 4604,
        cidade: 'Passos Maia',
        estado_id: 24
      },
      {
        id: 4605,
        cidade: 'Paulo Lopes',
        estado_id: 24
      },
      {
        id: 4606,
        cidade: 'Pedras Grandes',
        estado_id: 24
      },
      {
        id: 4607,
        cidade: 'Penha',
        estado_id: 24
      },
      {
        id: 4608,
        cidade: 'Peritiba',
        estado_id: 24
      },
      {
        id: 4609,
        cidade: 'Pescaria Brava',
        estado_id: 24
      },
      {
        id: 4610,
        cidade: 'Petrolândia',
        estado_id: 24
      },
      {
        id: 4611,
        cidade: 'Piçarras',
        estado_id: 24
      },
      {
        id: 4612,
        cidade: 'Pinhalzinho',
        estado_id: 24
      },
      {
        id: 4613,
        cidade: 'Pinheiro Preto',
        estado_id: 24
      },
      {
        id: 4614,
        cidade: 'Piratuba',
        estado_id: 24
      },
      {
        id: 4615,
        cidade: 'Planalto Alegre',
        estado_id: 24
      },
      {
        id: 4616,
        cidade: 'Pomerode',
        estado_id: 24
      },
      {
        id: 4617,
        cidade: 'Ponte Alta',
        estado_id: 24
      },
      {
        id: 4618,
        cidade: 'Ponte Alta do Norte',
        estado_id: 24
      },
      {
        id: 4619,
        cidade: 'Ponte Serrada',
        estado_id: 24
      },
      {
        id: 4620,
        cidade: 'Porto Belo',
        estado_id: 24
      },
      {
        id: 4621,
        cidade: 'Porto União',
        estado_id: 24
      },
      {
        id: 4622,
        cidade: 'Pouso Redondo',
        estado_id: 24
      },
      {
        id: 4623,
        cidade: 'Praia Grande',
        estado_id: 24
      },
      {
        id: 4624,
        cidade: 'Presidente Castelo Branco',
        estado_id: 24
      },
      {
        id: 4625,
        cidade: 'Presidente Getúlio',
        estado_id: 24
      },
      {
        id: 4626,
        cidade: 'Presidente Nereu',
        estado_id: 24
      },
      {
        id: 4627,
        cidade: 'Princesa',
        estado_id: 24
      },
      {
        id: 4628,
        cidade: 'Quilombo',
        estado_id: 24
      },
      {
        id: 4629,
        cidade: 'Rancho Queimado',
        estado_id: 24
      },
      {
        id: 4630,
        cidade: 'Rio Das Antas',
        estado_id: 24
      },
      {
        id: 4631,
        cidade: 'Rio do Campo',
        estado_id: 24
      },
      {
        id: 4632,
        cidade: 'Rio do Oeste',
        estado_id: 24
      },
      {
        id: 4633,
        cidade: 'Rio Dos Cedros',
        estado_id: 24
      },
      {
        id: 4634,
        cidade: 'Rio do Sul',
        estado_id: 24
      },
      {
        id: 4635,
        cidade: 'Rio Fortuna',
        estado_id: 24
      },
      {
        id: 4636,
        cidade: 'Rio Negrinho',
        estado_id: 24
      },
      {
        id: 4637,
        cidade: 'Rio Rufino',
        estado_id: 24
      },
      {
        id: 4638,
        cidade: 'Riqueza',
        estado_id: 24
      },
      {
        id: 4639,
        cidade: 'Rodeio',
        estado_id: 24
      },
      {
        id: 4640,
        cidade: 'Romelândia',
        estado_id: 24
      },
      {
        id: 4641,
        cidade: 'Salete',
        estado_id: 24
      },
      {
        id: 4642,
        cidade: 'Saltinho',
        estado_id: 24
      },
      {
        id: 4643,
        cidade: 'Salto Veloso',
        estado_id: 24
      },
      {
        id: 4644,
        cidade: 'Sangão',
        estado_id: 24
      },
      {
        id: 4645,
        cidade: 'Santa Cecília',
        estado_id: 24
      },
      {
        id: 4646,
        cidade: 'Santa Helena',
        estado_id: 24
      },
      {
        id: 4647,
        cidade: 'Santa Rosa de Lima',
        estado_id: 24
      },
      {
        id: 4648,
        cidade: 'Santa Rosa do Sul',
        estado_id: 24
      },
      {
        id: 4649,
        cidade: 'Santa Terezinha',
        estado_id: 24
      },
      {
        id: 4650,
        cidade: 'Santa Terezinha do Progresso',
        estado_id: 24
      },
      {
        id: 4651,
        cidade: 'Santiago do Sul',
        estado_id: 24
      },
      {
        id: 4652,
        cidade: 'Santo Amaro da Imperatriz',
        estado_id: 24
      },
      {
        id: 4653,
        cidade: 'São Bernardino',
        estado_id: 24
      },
      {
        id: 4654,
        cidade: 'São Bento do Sul',
        estado_id: 24
      },
      {
        id: 4655,
        cidade: 'São Bonifácio',
        estado_id: 24
      },
      {
        id: 4656,
        cidade: 'São Carlos',
        estado_id: 24
      },
      {
        id: 4657,
        cidade: 'São Cristovão do Sul',
        estado_id: 24
      },
      {
        id: 4658,
        cidade: 'São Domingos',
        estado_id: 24
      },
      {
        id: 4659,
        cidade: 'São Francisco do Sul',
        estado_id: 24
      },
      {
        id: 4660,
        cidade: 'São João do Oeste',
        estado_id: 24
      },
      {
        id: 4661,
        cidade: 'São João Batista',
        estado_id: 24
      },
      {
        id: 4662,
        cidade: 'São João do Itaperiú',
        estado_id: 24
      },
      {
        id: 4663,
        cidade: 'São João do Sul',
        estado_id: 24
      },
      {
        id: 4664,
        cidade: 'São Joaquim',
        estado_id: 24
      },
      {
        id: 4665,
        cidade: 'São José',
        estado_id: 24
      },
      {
        id: 4666,
        cidade: 'São José do Cedro',
        estado_id: 24
      },
      {
        id: 4667,
        cidade: 'São José do Cerrito',
        estado_id: 24
      },
      {
        id: 4668,
        cidade: 'São Lourenço do Oeste',
        estado_id: 24
      },
      {
        id: 4669,
        cidade: 'São Ludgero',
        estado_id: 24
      },
      {
        id: 4670,
        cidade: 'São Martinho',
        estado_id: 24
      },
      {
        id: 4671,
        cidade: 'São Miguel da Boa Vista',
        estado_id: 24
      },
      {
        id: 4672,
        cidade: 'São Miguel do Oeste',
        estado_id: 24
      },
      {
        id: 4673,
        cidade: 'São Pedro de Alcântara',
        estado_id: 24
      },
      {
        id: 4674,
        cidade: 'Saudades',
        estado_id: 24
      },
      {
        id: 4675,
        cidade: 'Schroeder',
        estado_id: 24
      },
      {
        id: 4676,
        cidade: 'Seara',
        estado_id: 24
      },
      {
        id: 4677,
        cidade: 'Serra Alta',
        estado_id: 24
      },
      {
        id: 4678,
        cidade: 'Siderópolis',
        estado_id: 24
      },
      {
        id: 4679,
        cidade: 'Sombrio',
        estado_id: 24
      },
      {
        id: 4680,
        cidade: 'Sul Brasil',
        estado_id: 24
      },
      {
        id: 4681,
        cidade: 'Taió',
        estado_id: 24
      },
      {
        id: 4682,
        cidade: 'Tangará',
        estado_id: 24
      },
      {
        id: 4683,
        cidade: 'Tigrinhos',
        estado_id: 24
      },
      {
        id: 4684,
        cidade: 'Tijucas',
        estado_id: 24
      },
      {
        id: 4685,
        cidade: 'Timbé do Sul',
        estado_id: 24
      },
      {
        id: 4686,
        cidade: 'Timbó',
        estado_id: 24
      },
      {
        id: 4687,
        cidade: 'Timbó Grande',
        estado_id: 24
      },
      {
        id: 4688,
        cidade: 'Três Barras',
        estado_id: 24
      },
      {
        id: 4689,
        cidade: 'Treviso',
        estado_id: 24
      },
      {
        id: 4690,
        cidade: 'Treze de Maio',
        estado_id: 24
      },
      {
        id: 4691,
        cidade: 'Treze Tílias',
        estado_id: 24
      },
      {
        id: 4692,
        cidade: 'Trombudo Central',
        estado_id: 24
      },
      {
        id: 4693,
        cidade: 'Tubarão',
        estado_id: 24
      },
      {
        id: 4694,
        cidade: 'Tunápolis',
        estado_id: 24
      },
      {
        id: 4695,
        cidade: 'Turvo',
        estado_id: 24
      },
      {
        id: 4696,
        cidade: 'União do Oeste',
        estado_id: 24
      },
      {
        id: 4697,
        cidade: 'Urubici',
        estado_id: 24
      },
      {
        id: 4698,
        cidade: 'Urupema',
        estado_id: 24
      },
      {
        id: 4699,
        cidade: 'Urussanga',
        estado_id: 24
      },
      {
        id: 4700,
        cidade: 'Vargeão',
        estado_id: 24
      },
      {
        id: 4701,
        cidade: 'Vargem',
        estado_id: 24
      },
      {
        id: 4702,
        cidade: 'Vargem Bonita',
        estado_id: 24
      },
      {
        id: 4703,
        cidade: 'Vidal Ramos',
        estado_id: 24
      },
      {
        id: 4704,
        cidade: 'Videira',
        estado_id: 24
      },
      {
        id: 4705,
        cidade: 'Vitor Meireles',
        estado_id: 24
      },
      {
        id: 4706,
        cidade: 'Witmarsum',
        estado_id: 24
      },
      {
        id: 4707,
        cidade: 'Xanxerê',
        estado_id: 24
      },
      {
        id: 4708,
        cidade: 'Xavantina',
        estado_id: 24
      },
      {
        id: 4709,
        cidade: 'Xaxim',
        estado_id: 24
      },
      {
        id: 4710,
        cidade: 'Zortéa',
        estado_id: 24
      },
      {
        id: 4711,
        cidade: 'Balneário Rincão',
        estado_id: 24
      },
      {
        id: 4712,
        cidade: 'Amparo de São Francisco',
        estado_id: 25
      },
      {
        id: 4713,
        cidade: 'Aquidabã',
        estado_id: 25
      },
      {
        id: 4714,
        cidade: 'Aracaju',
        estado_id: 25
      },
      {
        id: 4715,
        cidade: 'Arauá',
        estado_id: 25
      },
      {
        id: 4716,
        cidade: 'Areia Branca',
        estado_id: 25
      },
      {
        id: 4717,
        cidade: 'Barra Dos Coqueiros',
        estado_id: 25
      },
      {
        id: 4718,
        cidade: 'Boquim',
        estado_id: 25
      },
      {
        id: 4719,
        cidade: 'Brejo Grande',
        estado_id: 25
      },
      {
        id: 4720,
        cidade: 'Campo do Brito',
        estado_id: 25
      },
      {
        id: 4721,
        cidade: 'Canhoba',
        estado_id: 25
      },
      {
        id: 4722,
        cidade: 'Canindé de São Francisco',
        estado_id: 25
      },
      {
        id: 4723,
        cidade: 'Capela',
        estado_id: 25
      },
      {
        id: 4724,
        cidade: 'Carira',
        estado_id: 25
      },
      {
        id: 4725,
        cidade: 'Carmópolis',
        estado_id: 25
      },
      {
        id: 4726,
        cidade: 'Cedro de São João',
        estado_id: 25
      },
      {
        id: 4727,
        cidade: 'Cristinápolis',
        estado_id: 25
      },
      {
        id: 4728,
        cidade: 'Cumbe',
        estado_id: 25
      },
      {
        id: 4729,
        cidade: 'Divina Pastora',
        estado_id: 25
      },
      {
        id: 4730,
        cidade: 'Estância',
        estado_id: 25
      },
      {
        id: 4731,
        cidade: 'Feira Nova',
        estado_id: 25
      },
      {
        id: 4732,
        cidade: 'Frei Paulo',
        estado_id: 25
      },
      {
        id: 4733,
        cidade: 'Gararu',
        estado_id: 25
      },
      {
        id: 4734,
        cidade: 'General Maynard',
        estado_id: 25
      },
      {
        id: 4735,
        cidade: 'Gracho Cardoso',
        estado_id: 25
      },
      {
        id: 4736,
        cidade: 'Ilha Das Flores',
        estado_id: 25
      },
      {
        id: 4737,
        cidade: 'Indiaroba',
        estado_id: 25
      },
      {
        id: 4738,
        cidade: 'Itabaiana',
        estado_id: 25
      },
      {
        id: 4739,
        cidade: 'Itabaianinha',
        estado_id: 25
      },
      {
        id: 4740,
        cidade: 'Itabi',
        estado_id: 25
      },
      {
        id: 4741,
        cidade: 'Itaporanga D´ajuda',
        estado_id: 25
      },
      {
        id: 4742,
        cidade: 'Japaratuba',
        estado_id: 25
      },
      {
        id: 4743,
        cidade: 'Japoatã',
        estado_id: 25
      },
      {
        id: 4744,
        cidade: 'Lagarto',
        estado_id: 25
      },
      {
        id: 4745,
        cidade: 'Laranjeiras',
        estado_id: 25
      },
      {
        id: 4746,
        cidade: 'Macambira',
        estado_id: 25
      },
      {
        id: 4747,
        cidade: 'Malhada Dos Bois',
        estado_id: 25
      },
      {
        id: 4748,
        cidade: 'Malhador',
        estado_id: 25
      },
      {
        id: 4749,
        cidade: 'Maruim',
        estado_id: 25
      },
      {
        id: 4750,
        cidade: 'Moita Bonita',
        estado_id: 25
      },
      {
        id: 4751,
        cidade: 'Monte Alegre de Sergipe',
        estado_id: 25
      },
      {
        id: 4752,
        cidade: 'Muribeca',
        estado_id: 25
      },
      {
        id: 4753,
        cidade: 'Neópolis',
        estado_id: 25
      },
      {
        id: 4754,
        cidade: 'Nossa Senhora Aparecida',
        estado_id: 25
      },
      {
        id: 4755,
        cidade: 'Nossa Senhora da Glória',
        estado_id: 25
      },
      {
        id: 4756,
        cidade: 'Nossa Senhora Das Dores',
        estado_id: 25
      },
      {
        id: 4757,
        cidade: 'Nossa Senhora de Lourdes',
        estado_id: 25
      },
      {
        id: 4758,
        cidade: 'Nossa Senhora do Socorro',
        estado_id: 25
      },
      {
        id: 4759,
        cidade: 'Pacatuba',
        estado_id: 25
      },
      {
        id: 4760,
        cidade: 'Pedra Mole',
        estado_id: 25
      },
      {
        id: 4761,
        cidade: 'Pedrinhas',
        estado_id: 25
      },
      {
        id: 4762,
        cidade: 'Pinhão',
        estado_id: 25
      },
      {
        id: 4763,
        cidade: 'Pirambu',
        estado_id: 25
      },
      {
        id: 4764,
        cidade: 'Poço Redondo',
        estado_id: 25
      },
      {
        id: 4765,
        cidade: 'Poço Verde',
        estado_id: 25
      },
      {
        id: 4766,
        cidade: 'Porto da Folha',
        estado_id: 25
      },
      {
        id: 4767,
        cidade: 'Propriá',
        estado_id: 25
      },
      {
        id: 4768,
        cidade: 'Riachão do Dantas',
        estado_id: 25
      },
      {
        id: 4769,
        cidade: 'Riachuelo',
        estado_id: 25
      },
      {
        id: 4770,
        cidade: 'Ribeirópolis',
        estado_id: 25
      },
      {
        id: 4771,
        cidade: 'Rosário do Catete',
        estado_id: 25
      },
      {
        id: 4772,
        cidade: 'Salgado',
        estado_id: 25
      },
      {
        id: 4773,
        cidade: 'Santa Luzia do Itanhy',
        estado_id: 25
      },
      {
        id: 4774,
        cidade: 'Santana do São Francisco',
        estado_id: 25
      },
      {
        id: 4775,
        cidade: 'Santa Rosa de Lima',
        estado_id: 25
      },
      {
        id: 4776,
        cidade: 'Santo Amaro Das Brotas',
        estado_id: 25
      },
      {
        id: 4777,
        cidade: 'São Cristóvão',
        estado_id: 25
      },
      {
        id: 4778,
        cidade: 'São Domingos',
        estado_id: 25
      },
      {
        id: 4779,
        cidade: 'São Francisco',
        estado_id: 25
      },
      {
        id: 4780,
        cidade: 'São Miguel do Aleixo',
        estado_id: 25
      },
      {
        id: 4781,
        cidade: 'Simão Dias',
        estado_id: 25
      },
      {
        id: 4782,
        cidade: 'Siriri',
        estado_id: 25
      },
      {
        id: 4783,
        cidade: 'Telha',
        estado_id: 25
      },
      {
        id: 4784,
        cidade: 'Tobias Barreto',
        estado_id: 25
      },
      {
        id: 4785,
        cidade: 'Tomar do Geru',
        estado_id: 25
      },
      {
        id: 4786,
        cidade: 'Umbaúba',
        estado_id: 25
      },
      {
        id: 4787,
        cidade: 'Adamantina',
        estado_id: 26
      },
      {
        id: 4788,
        cidade: 'Adolfo',
        estado_id: 26
      },
      {
        id: 4789,
        cidade: 'Aguaí',
        estado_id: 26
      },
      {
        id: 4790,
        cidade: 'Águas da Prata',
        estado_id: 26
      },
      {
        id: 4791,
        cidade: 'Águas de Lindóia',
        estado_id: 26
      },
      {
        id: 4792,
        cidade: 'Águas de Santa Bárbara',
        estado_id: 26
      },
      {
        id: 4793,
        cidade: 'Águas de São Pedro',
        estado_id: 26
      },
      {
        id: 4794,
        cidade: 'Agudos',
        estado_id: 26
      },
      {
        id: 4795,
        cidade: 'Alambari',
        estado_id: 26
      },
      {
        id: 4796,
        cidade: 'Alfredo Marcondes',
        estado_id: 26
      },
      {
        id: 4797,
        cidade: 'Altair',
        estado_id: 26
      },
      {
        id: 4798,
        cidade: 'Altinópolis',
        estado_id: 26
      },
      {
        id: 4799,
        cidade: 'Alto Alegre',
        estado_id: 26
      },
      {
        id: 4800,
        cidade: 'Alumínio',
        estado_id: 26
      },
      {
        id: 4801,
        cidade: 'Álvares Florence',
        estado_id: 26
      },
      {
        id: 4802,
        cidade: 'Álvares Machado',
        estado_id: 26
      },
      {
        id: 4803,
        cidade: 'Álvaro de Carvalho',
        estado_id: 26
      },
      {
        id: 4804,
        cidade: 'Alvinlândia',
        estado_id: 26
      },
      {
        id: 4805,
        cidade: 'Americana',
        estado_id: 26
      },
      {
        id: 4806,
        cidade: 'Américo Brasiliense',
        estado_id: 26
      },
      {
        id: 4807,
        cidade: 'Américo de Campos',
        estado_id: 26
      },
      {
        id: 4808,
        cidade: 'Amparo',
        estado_id: 26
      },
      {
        id: 4809,
        cidade: 'Analândia',
        estado_id: 26
      },
      {
        id: 4810,
        cidade: 'Andradina',
        estado_id: 26
      },
      {
        id: 4811,
        cidade: 'Angatuba',
        estado_id: 26
      },
      {
        id: 4812,
        cidade: 'Anhembi',
        estado_id: 26
      },
      {
        id: 4813,
        cidade: 'Anhumas',
        estado_id: 26
      },
      {
        id: 4814,
        cidade: 'Aparecida',
        estado_id: 26
      },
      {
        id: 4815,
        cidade: 'Aparecida D´oeste',
        estado_id: 26
      },
      {
        id: 4816,
        cidade: 'Apiaí',
        estado_id: 26
      },
      {
        id: 4817,
        cidade: 'Araçariguama',
        estado_id: 26
      },
      {
        id: 4818,
        cidade: 'Araçatuba',
        estado_id: 26
      },
      {
        id: 4819,
        cidade: 'Araçoiaba da Serra',
        estado_id: 26
      },
      {
        id: 4820,
        cidade: 'Aramina',
        estado_id: 26
      },
      {
        id: 4821,
        cidade: 'Arandu',
        estado_id: 26
      },
      {
        id: 4822,
        cidade: 'Arapeí',
        estado_id: 26
      },
      {
        id: 4823,
        cidade: 'Araraquara',
        estado_id: 26
      },
      {
        id: 4824,
        cidade: 'Araras',
        estado_id: 26
      },
      {
        id: 4825,
        cidade: 'Arco-íris',
        estado_id: 26
      },
      {
        id: 4826,
        cidade: 'Arealva',
        estado_id: 26
      },
      {
        id: 4827,
        cidade: 'Areias',
        estado_id: 26
      },
      {
        id: 4828,
        cidade: 'Areiópolis',
        estado_id: 26
      },
      {
        id: 4829,
        cidade: 'Ariranha',
        estado_id: 26
      },
      {
        id: 4830,
        cidade: 'Artur Nogueira',
        estado_id: 26
      },
      {
        id: 4831,
        cidade: 'Arujá',
        estado_id: 26
      },
      {
        id: 4832,
        cidade: 'Aspásia',
        estado_id: 26
      },
      {
        id: 4833,
        cidade: 'Assis',
        estado_id: 26
      },
      {
        id: 4834,
        cidade: 'Atibaia',
        estado_id: 26
      },
      {
        id: 4835,
        cidade: 'Auriflama',
        estado_id: 26
      },
      {
        id: 4836,
        cidade: 'Avaí',
        estado_id: 26
      },
      {
        id: 4837,
        cidade: 'Avanhandava',
        estado_id: 26
      },
      {
        id: 4838,
        cidade: 'Avaré',
        estado_id: 26
      },
      {
        id: 4839,
        cidade: 'Bady Bassitt',
        estado_id: 26
      },
      {
        id: 4840,
        cidade: 'Balbinos',
        estado_id: 26
      },
      {
        id: 4841,
        cidade: 'Bálsamo',
        estado_id: 26
      },
      {
        id: 4842,
        cidade: 'Bananal',
        estado_id: 26
      },
      {
        id: 4843,
        cidade: 'Barão de Antonina',
        estado_id: 26
      },
      {
        id: 4844,
        cidade: 'Barbosa',
        estado_id: 26
      },
      {
        id: 4845,
        cidade: 'Bariri',
        estado_id: 26
      },
      {
        id: 4846,
        cidade: 'Barra Bonita',
        estado_id: 26
      },
      {
        id: 4847,
        cidade: 'Barra do Chapéu',
        estado_id: 26
      },
      {
        id: 4848,
        cidade: 'Barra do Turvo',
        estado_id: 26
      },
      {
        id: 4849,
        cidade: 'Barretos',
        estado_id: 26
      },
      {
        id: 4850,
        cidade: 'Barrinha',
        estado_id: 26
      },
      {
        id: 4851,
        cidade: 'Barueri',
        estado_id: 26
      },
      {
        id: 4852,
        cidade: 'Bastos',
        estado_id: 26
      },
      {
        id: 4853,
        cidade: 'Batatais',
        estado_id: 26
      },
      {
        id: 4854,
        cidade: 'Bauru',
        estado_id: 26
      },
      {
        id: 4855,
        cidade: 'Bebedouro',
        estado_id: 26
      },
      {
        id: 4856,
        cidade: 'Bento de Abreu',
        estado_id: 26
      },
      {
        id: 4857,
        cidade: 'Bernardino de Campos',
        estado_id: 26
      },
      {
        id: 4858,
        cidade: 'Bertioga',
        estado_id: 26
      },
      {
        id: 4859,
        cidade: 'Bilac',
        estado_id: 26
      },
      {
        id: 4860,
        cidade: 'Birigui',
        estado_id: 26
      },
      {
        id: 4861,
        cidade: 'Biritiba-mirim',
        estado_id: 26
      },
      {
        id: 4862,
        cidade: 'Boa Esperança do Sul',
        estado_id: 26
      },
      {
        id: 4863,
        cidade: 'Bocaina',
        estado_id: 26
      },
      {
        id: 4864,
        cidade: 'Bofete',
        estado_id: 26
      },
      {
        id: 4865,
        cidade: 'Boituva',
        estado_id: 26
      },
      {
        id: 4866,
        cidade: 'Bom Jesus Dos Perdões',
        estado_id: 26
      },
      {
        id: 4867,
        cidade: 'Bom Sucesso de Itararé',
        estado_id: 26
      },
      {
        id: 4868,
        cidade: 'Borá',
        estado_id: 26
      },
      {
        id: 4869,
        cidade: 'Boracéia',
        estado_id: 26
      },
      {
        id: 4870,
        cidade: 'Borborema',
        estado_id: 26
      },
      {
        id: 4871,
        cidade: 'Borebi',
        estado_id: 26
      },
      {
        id: 4872,
        cidade: 'Botucatu',
        estado_id: 26
      },
      {
        id: 4873,
        cidade: 'Bragança Paulista',
        estado_id: 26
      },
      {
        id: 4874,
        cidade: 'Braúna',
        estado_id: 26
      },
      {
        id: 4875,
        cidade: 'Brejo Alegre',
        estado_id: 26
      },
      {
        id: 4876,
        cidade: 'Brodowski',
        estado_id: 26
      },
      {
        id: 4877,
        cidade: 'Brotas',
        estado_id: 26
      },
      {
        id: 4878,
        cidade: 'Buri',
        estado_id: 26
      },
      {
        id: 4879,
        cidade: 'Buritama',
        estado_id: 26
      },
      {
        id: 4880,
        cidade: 'Buritizal',
        estado_id: 26
      },
      {
        id: 4881,
        cidade: 'Cabrália Paulista',
        estado_id: 26
      },
      {
        id: 4882,
        cidade: 'Cabreúva',
        estado_id: 26
      },
      {
        id: 4883,
        cidade: 'Caçapava',
        estado_id: 26
      },
      {
        id: 4884,
        cidade: 'Cachoeira Paulista',
        estado_id: 26
      },
      {
        id: 4885,
        cidade: 'Caconde',
        estado_id: 26
      },
      {
        id: 4886,
        cidade: 'Cafelândia',
        estado_id: 26
      },
      {
        id: 4887,
        cidade: 'Caiabu',
        estado_id: 26
      },
      {
        id: 4888,
        cidade: 'Caieiras',
        estado_id: 26
      },
      {
        id: 4889,
        cidade: 'Caiuá',
        estado_id: 26
      },
      {
        id: 4890,
        cidade: 'Cajamar',
        estado_id: 26
      },
      {
        id: 4891,
        cidade: 'Cajati',
        estado_id: 26
      },
      {
        id: 4892,
        cidade: 'Cajobi',
        estado_id: 26
      },
      {
        id: 4893,
        cidade: 'Cajuru',
        estado_id: 26
      },
      {
        id: 4894,
        cidade: 'Campina do Monte Alegre',
        estado_id: 26
      },
      {
        id: 4895,
        cidade: 'Campinas',
        estado_id: 26
      },
      {
        id: 4896,
        cidade: 'Campo Limpo Paulista',
        estado_id: 26
      },
      {
        id: 4897,
        cidade: 'Campos do Jordão',
        estado_id: 26
      },
      {
        id: 4898,
        cidade: 'Campos Novos Paulista',
        estado_id: 26
      },
      {
        id: 4899,
        cidade: 'Cananéia',
        estado_id: 26
      },
      {
        id: 4900,
        cidade: 'Canas',
        estado_id: 26
      },
      {
        id: 4901,
        cidade: 'Cândido Mota',
        estado_id: 26
      },
      {
        id: 4902,
        cidade: 'Cândido Rodrigues',
        estado_id: 26
      },
      {
        id: 4903,
        cidade: 'Canitar',
        estado_id: 26
      },
      {
        id: 4904,
        cidade: 'Capão Bonito',
        estado_id: 26
      },
      {
        id: 4905,
        cidade: 'Capela do Alto',
        estado_id: 26
      },
      {
        id: 4906,
        cidade: 'Capivari',
        estado_id: 26
      },
      {
        id: 4907,
        cidade: 'Caraguatatuba',
        estado_id: 26
      },
      {
        id: 4908,
        cidade: 'Carapicuíba',
        estado_id: 26
      },
      {
        id: 4909,
        cidade: 'Cardoso',
        estado_id: 26
      },
      {
        id: 4910,
        cidade: 'Casa Branca',
        estado_id: 26
      },
      {
        id: 4911,
        cidade: 'Cássia Dos Coqueiros',
        estado_id: 26
      },
      {
        id: 4912,
        cidade: 'Castilho',
        estado_id: 26
      },
      {
        id: 4913,
        cidade: 'Catanduva',
        estado_id: 26
      },
      {
        id: 4914,
        cidade: 'Catiguá',
        estado_id: 26
      },
      {
        id: 4915,
        cidade: 'Cedral',
        estado_id: 26
      },
      {
        id: 4916,
        cidade: 'Cerqueira César',
        estado_id: 26
      },
      {
        id: 4917,
        cidade: 'Cerquilho',
        estado_id: 26
      },
      {
        id: 4918,
        cidade: 'Cesário Lange',
        estado_id: 26
      },
      {
        id: 4919,
        cidade: 'Charqueada',
        estado_id: 26
      },
      {
        id: 4920,
        cidade: 'Clementina',
        estado_id: 26
      },
      {
        id: 4921,
        cidade: 'Colina',
        estado_id: 26
      },
      {
        id: 4922,
        cidade: 'Colômbia',
        estado_id: 26
      },
      {
        id: 4923,
        cidade: 'Conchal',
        estado_id: 26
      },
      {
        id: 4924,
        cidade: 'Conchas',
        estado_id: 26
      },
      {
        id: 4925,
        cidade: 'Cordeirópolis',
        estado_id: 26
      },
      {
        id: 4926,
        cidade: 'Coroados',
        estado_id: 26
      },
      {
        id: 4927,
        cidade: 'Coronel Macedo',
        estado_id: 26
      },
      {
        id: 4928,
        cidade: 'Corumbataí',
        estado_id: 26
      },
      {
        id: 4929,
        cidade: 'Cosmópolis',
        estado_id: 26
      },
      {
        id: 4930,
        cidade: 'Cosmorama',
        estado_id: 26
      },
      {
        id: 4931,
        cidade: 'Cotia',
        estado_id: 26
      },
      {
        id: 4932,
        cidade: 'Cravinhos',
        estado_id: 26
      },
      {
        id: 4933,
        cidade: 'Cristais Paulista',
        estado_id: 26
      },
      {
        id: 4934,
        cidade: 'Cruzália',
        estado_id: 26
      },
      {
        id: 4935,
        cidade: 'Cruzeiro',
        estado_id: 26
      },
      {
        id: 4936,
        cidade: 'Cubatão',
        estado_id: 26
      },
      {
        id: 4937,
        cidade: 'Cunha',
        estado_id: 26
      },
      {
        id: 4938,
        cidade: 'Descalvado',
        estado_id: 26
      },
      {
        id: 4939,
        cidade: 'Diadema',
        estado_id: 26
      },
      {
        id: 4940,
        cidade: 'Dirce Reis',
        estado_id: 26
      },
      {
        id: 4941,
        cidade: 'Divinolândia',
        estado_id: 26
      },
      {
        id: 4942,
        cidade: 'Dobrada',
        estado_id: 26
      },
      {
        id: 4943,
        cidade: 'Dois Córregos',
        estado_id: 26
      },
      {
        id: 4944,
        cidade: 'Dolcinópolis',
        estado_id: 26
      },
      {
        id: 4945,
        cidade: 'Dourado',
        estado_id: 26
      },
      {
        id: 4946,
        cidade: 'Dracena',
        estado_id: 26
      },
      {
        id: 4947,
        cidade: 'Duartina',
        estado_id: 26
      },
      {
        id: 4948,
        cidade: 'Dumont',
        estado_id: 26
      },
      {
        id: 4949,
        cidade: 'Echaporã',
        estado_id: 26
      },
      {
        id: 4950,
        cidade: 'Eldorado',
        estado_id: 26
      },
      {
        id: 4951,
        cidade: 'Elias Fausto',
        estado_id: 26
      },
      {
        id: 4952,
        cidade: 'Elisiário',
        estado_id: 26
      },
      {
        id: 4953,
        cidade: 'Embaúba',
        estado_id: 26
      },
      {
        id: 4954,
        cidade: 'Embu',
        estado_id: 26
      },
      {
        id: 4955,
        cidade: 'Embu-guaçu',
        estado_id: 26
      },
      {
        id: 4956,
        cidade: 'Emilianópolis',
        estado_id: 26
      },
      {
        id: 4957,
        cidade: 'Engenheiro Coelho',
        estado_id: 26
      },
      {
        id: 4958,
        cidade: 'Espírito Santo do Pinhal',
        estado_id: 26
      },
      {
        id: 4959,
        cidade: 'Espírito Santo do Turvo',
        estado_id: 26
      },
      {
        id: 4960,
        cidade: 'Estrela D´oeste',
        estado_id: 26
      },
      {
        id: 4961,
        cidade: 'Estrela do Norte',
        estado_id: 26
      },
      {
        id: 4962,
        cidade: 'Euclides da Cunha Paulista',
        estado_id: 26
      },
      {
        id: 4963,
        cidade: 'Fartura',
        estado_id: 26
      },
      {
        id: 4964,
        cidade: 'Fernandópolis',
        estado_id: 26
      },
      {
        id: 4965,
        cidade: 'Fernando Prestes',
        estado_id: 26
      },
      {
        id: 4966,
        cidade: 'Fernão',
        estado_id: 26
      },
      {
        id: 4967,
        cidade: 'Ferraz de Vasconcelos',
        estado_id: 26
      },
      {
        id: 4968,
        cidade: 'Flora Rica',
        estado_id: 26
      },
      {
        id: 4969,
        cidade: 'Floreal',
        estado_id: 26
      },
      {
        id: 4970,
        cidade: 'Flórida Paulista',
        estado_id: 26
      },
      {
        id: 4971,
        cidade: 'Florínia',
        estado_id: 26
      },
      {
        id: 4972,
        cidade: 'Franca',
        estado_id: 26
      },
      {
        id: 4973,
        cidade: 'Francisco Morato',
        estado_id: 26
      },
      {
        id: 4974,
        cidade: 'Franco da Rocha',
        estado_id: 26
      },
      {
        id: 4975,
        cidade: 'Gabriel Monteiro',
        estado_id: 26
      },
      {
        id: 4976,
        cidade: 'Gália',
        estado_id: 26
      },
      {
        id: 4977,
        cidade: 'Garça',
        estado_id: 26
      },
      {
        id: 4978,
        cidade: 'Gastão Vidigal',
        estado_id: 26
      },
      {
        id: 4979,
        cidade: 'Gavião Peixoto',
        estado_id: 26
      },
      {
        id: 4980,
        cidade: 'General Salgado',
        estado_id: 26
      },
      {
        id: 4981,
        cidade: 'Getulina',
        estado_id: 26
      },
      {
        id: 4982,
        cidade: 'Glicério',
        estado_id: 26
      },
      {
        id: 4983,
        cidade: 'Guaiçara',
        estado_id: 26
      },
      {
        id: 4984,
        cidade: 'Guaimbê',
        estado_id: 26
      },
      {
        id: 4985,
        cidade: 'Guaíra',
        estado_id: 26
      },
      {
        id: 4986,
        cidade: 'Guapiaçu',
        estado_id: 26
      },
      {
        id: 4987,
        cidade: 'Guapiara',
        estado_id: 26
      },
      {
        id: 4988,
        cidade: 'Guará',
        estado_id: 26
      },
      {
        id: 4989,
        cidade: 'Guaraçaí',
        estado_id: 26
      },
      {
        id: 4990,
        cidade: 'Guaraci',
        estado_id: 26
      },
      {
        id: 4991,
        cidade: 'Guarani D´oeste',
        estado_id: 26
      },
      {
        id: 4992,
        cidade: 'Guarantã',
        estado_id: 26
      },
      {
        id: 4993,
        cidade: 'Guararapes',
        estado_id: 26
      },
      {
        id: 4994,
        cidade: 'Guararema',
        estado_id: 26
      },
      {
        id: 4995,
        cidade: 'Guaratinguetá',
        estado_id: 26
      },
      {
        id: 4996,
        cidade: 'Guareí',
        estado_id: 26
      },
      {
        id: 4997,
        cidade: 'Guariba',
        estado_id: 26
      },
      {
        id: 4998,
        cidade: 'Guarujá',
        estado_id: 26
      },
      {
        id: 4999,
        cidade: 'Guarulhos',
        estado_id: 26
      },
      {
        id: 5000,
        cidade: 'Guatapará',
        estado_id: 26
      },
      {
        id: 5001,
        cidade: 'Guzolândia',
        estado_id: 26
      },
      {
        id: 5002,
        cidade: 'Herculândia',
        estado_id: 26
      },
      {
        id: 5003,
        cidade: 'Holambra',
        estado_id: 26
      },
      {
        id: 5004,
        cidade: 'Hortolândia',
        estado_id: 26
      },
      {
        id: 5005,
        cidade: 'Iacanga',
        estado_id: 26
      },
      {
        id: 5006,
        cidade: 'Iacri',
        estado_id: 26
      },
      {
        id: 5007,
        cidade: 'Iaras',
        estado_id: 26
      },
      {
        id: 5008,
        cidade: 'Ibaté',
        estado_id: 26
      },
      {
        id: 5009,
        cidade: 'Ibirá',
        estado_id: 26
      },
      {
        id: 5010,
        cidade: 'Ibirarema',
        estado_id: 26
      },
      {
        id: 5011,
        cidade: 'Ibitinga',
        estado_id: 26
      },
      {
        id: 5012,
        cidade: 'Ibiúna',
        estado_id: 26
      },
      {
        id: 5013,
        cidade: 'Icém',
        estado_id: 26
      },
      {
        id: 5014,
        cidade: 'Iepê',
        estado_id: 26
      },
      {
        id: 5015,
        cidade: 'Igaraçu do Tietê',
        estado_id: 26
      },
      {
        id: 5016,
        cidade: 'Igarapava',
        estado_id: 26
      },
      {
        id: 5017,
        cidade: 'Igaratá',
        estado_id: 26
      },
      {
        id: 5018,
        cidade: 'Iguape',
        estado_id: 26
      },
      {
        id: 5019,
        cidade: 'Ilhabela',
        estado_id: 26
      },
      {
        id: 5020,
        cidade: 'Ilha Comprida',
        estado_id: 26
      },
      {
        id: 5021,
        cidade: 'Ilha Solteira',
        estado_id: 26
      },
      {
        id: 5022,
        cidade: 'Indaiatuba',
        estado_id: 26
      },
      {
        id: 5023,
        cidade: 'Indiana',
        estado_id: 26
      },
      {
        id: 5024,
        cidade: 'Indiaporã',
        estado_id: 26
      },
      {
        id: 5025,
        cidade: 'Inúbia Paulista',
        estado_id: 26
      },
      {
        id: 5026,
        cidade: 'Ipaussu',
        estado_id: 26
      },
      {
        id: 5027,
        cidade: 'Iperó',
        estado_id: 26
      },
      {
        id: 5028,
        cidade: 'Ipeúna',
        estado_id: 26
      },
      {
        id: 5029,
        cidade: 'Ipiguá',
        estado_id: 26
      },
      {
        id: 5030,
        cidade: 'Iporanga',
        estado_id: 26
      },
      {
        id: 5031,
        cidade: 'Ipuã',
        estado_id: 26
      },
      {
        id: 5032,
        cidade: 'Iracemápolis',
        estado_id: 26
      },
      {
        id: 5033,
        cidade: 'Irapuã',
        estado_id: 26
      },
      {
        id: 5034,
        cidade: 'Irapuru',
        estado_id: 26
      },
      {
        id: 5035,
        cidade: 'Itaberá',
        estado_id: 26
      },
      {
        id: 5036,
        cidade: 'Itaí',
        estado_id: 26
      },
      {
        id: 5037,
        cidade: 'Itajobi',
        estado_id: 26
      },
      {
        id: 5038,
        cidade: 'Itaju',
        estado_id: 26
      },
      {
        id: 5039,
        cidade: 'Itanhaém',
        estado_id: 26
      },
      {
        id: 5040,
        cidade: 'Itaóca',
        estado_id: 26
      },
      {
        id: 5041,
        cidade: 'Itapecerica da Serra',
        estado_id: 26
      },
      {
        id: 5042,
        cidade: 'Itapetininga',
        estado_id: 26
      },
      {
        id: 5043,
        cidade: 'Itapeva',
        estado_id: 26
      },
      {
        id: 5044,
        cidade: 'Itapevi',
        estado_id: 26
      },
      {
        id: 5045,
        cidade: 'Itapira',
        estado_id: 26
      },
      {
        id: 5046,
        cidade: 'Itapirapuã Paulista',
        estado_id: 26
      },
      {
        id: 5047,
        cidade: 'Itápolis',
        estado_id: 26
      },
      {
        id: 5048,
        cidade: 'Itaporanga',
        estado_id: 26
      },
      {
        id: 5049,
        cidade: 'Itapuí',
        estado_id: 26
      },
      {
        id: 5050,
        cidade: 'Itapura',
        estado_id: 26
      },
      {
        id: 5051,
        cidade: 'Itaquaquecetuba',
        estado_id: 26
      },
      {
        id: 5052,
        cidade: 'Itararé',
        estado_id: 26
      },
      {
        id: 5053,
        cidade: 'Itariri',
        estado_id: 26
      },
      {
        id: 5054,
        cidade: 'Itatiba',
        estado_id: 26
      },
      {
        id: 5055,
        cidade: 'Itatinga',
        estado_id: 26
      },
      {
        id: 5056,
        cidade: 'Itirapina',
        estado_id: 26
      },
      {
        id: 5057,
        cidade: 'Itirapuã',
        estado_id: 26
      },
      {
        id: 5058,
        cidade: 'Itobi',
        estado_id: 26
      },
      {
        id: 5059,
        cidade: 'Itu',
        estado_id: 26
      },
      {
        id: 5060,
        cidade: 'Itupeva',
        estado_id: 26
      },
      {
        id: 5061,
        cidade: 'Ituverava',
        estado_id: 26
      },
      {
        id: 5062,
        cidade: 'Jaborandi',
        estado_id: 26
      },
      {
        id: 5063,
        cidade: 'Jaboticabal',
        estado_id: 26
      },
      {
        id: 5064,
        cidade: 'Jacareí',
        estado_id: 26
      },
      {
        id: 5065,
        cidade: 'Jaci',
        estado_id: 26
      },
      {
        id: 5066,
        cidade: 'Jacupiranga',
        estado_id: 26
      },
      {
        id: 5067,
        cidade: 'Jaguariúna',
        estado_id: 26
      },
      {
        id: 5068,
        cidade: 'Jales',
        estado_id: 26
      },
      {
        id: 5069,
        cidade: 'Jambeiro',
        estado_id: 26
      },
      {
        id: 5070,
        cidade: 'Jandira',
        estado_id: 26
      },
      {
        id: 5071,
        cidade: 'Jardinópolis',
        estado_id: 26
      },
      {
        id: 5072,
        cidade: 'Jarinu',
        estado_id: 26
      },
      {
        id: 5073,
        cidade: 'Jaú',
        estado_id: 26
      },
      {
        id: 5074,
        cidade: 'Jeriquara',
        estado_id: 26
      },
      {
        id: 5075,
        cidade: 'Joanópolis',
        estado_id: 26
      },
      {
        id: 5076,
        cidade: 'João Ramalho',
        estado_id: 26
      },
      {
        id: 5077,
        cidade: 'José Bonifácio',
        estado_id: 26
      },
      {
        id: 5078,
        cidade: 'Júlio Mesquita',
        estado_id: 26
      },
      {
        id: 5079,
        cidade: 'Jumirim',
        estado_id: 26
      },
      {
        id: 5080,
        cidade: 'Jundiaí',
        estado_id: 26
      },
      {
        id: 5081,
        cidade: 'Junqueirópolis',
        estado_id: 26
      },
      {
        id: 5082,
        cidade: 'Juquiá',
        estado_id: 26
      },
      {
        id: 5083,
        cidade: 'Juquitiba',
        estado_id: 26
      },
      {
        id: 5084,
        cidade: 'Lagoinha',
        estado_id: 26
      },
      {
        id: 5085,
        cidade: 'Laranjal Paulista',
        estado_id: 26
      },
      {
        id: 5086,
        cidade: 'Lavínia',
        estado_id: 26
      },
      {
        id: 5087,
        cidade: 'Lavrinhas',
        estado_id: 26
      },
      {
        id: 5088,
        cidade: 'Leme',
        estado_id: 26
      },
      {
        id: 5089,
        cidade: 'Lençóis Paulista',
        estado_id: 26
      },
      {
        id: 5090,
        cidade: 'Limeira',
        estado_id: 26
      },
      {
        id: 5091,
        cidade: 'Lindóia',
        estado_id: 26
      },
      {
        id: 5092,
        cidade: 'Lins',
        estado_id: 26
      },
      {
        id: 5093,
        cidade: 'Lorena',
        estado_id: 26
      },
      {
        id: 5094,
        cidade: 'Lourdes',
        estado_id: 26
      },
      {
        id: 5095,
        cidade: 'Louveira',
        estado_id: 26
      },
      {
        id: 5096,
        cidade: 'Lucélia',
        estado_id: 26
      },
      {
        id: 5097,
        cidade: 'Lucianópolis',
        estado_id: 26
      },
      {
        id: 5098,
        cidade: 'Luís Antônio',
        estado_id: 26
      },
      {
        id: 5099,
        cidade: 'Luiziânia',
        estado_id: 26
      },
      {
        id: 5100,
        cidade: 'Lupércio',
        estado_id: 26
      },
      {
        id: 5101,
        cidade: 'Lutécia',
        estado_id: 26
      },
      {
        id: 5102,
        cidade: 'Macatuba',
        estado_id: 26
      },
      {
        id: 5103,
        cidade: 'Macaubal',
        estado_id: 26
      },
      {
        id: 5104,
        cidade: 'Macedônia',
        estado_id: 26
      },
      {
        id: 5105,
        cidade: 'Magda',
        estado_id: 26
      },
      {
        id: 5106,
        cidade: 'Mairinque',
        estado_id: 26
      },
      {
        id: 5107,
        cidade: 'Mairiporã',
        estado_id: 26
      },
      {
        id: 5108,
        cidade: 'Manduri',
        estado_id: 26
      },
      {
        id: 5109,
        cidade: 'Marabá Paulista',
        estado_id: 26
      },
      {
        id: 5110,
        cidade: 'Maracaí',
        estado_id: 26
      },
      {
        id: 5111,
        cidade: 'Marapoama',
        estado_id: 26
      },
      {
        id: 5112,
        cidade: 'Mariápolis',
        estado_id: 26
      },
      {
        id: 5113,
        cidade: 'Marília',
        estado_id: 26
      },
      {
        id: 5114,
        cidade: 'Marinópolis',
        estado_id: 26
      },
      {
        id: 5115,
        cidade: 'Martinópolis',
        estado_id: 26
      },
      {
        id: 5116,
        cidade: 'Matão',
        estado_id: 26
      },
      {
        id: 5117,
        cidade: 'Mauá',
        estado_id: 26
      },
      {
        id: 5118,
        cidade: 'Mendonça',
        estado_id: 26
      },
      {
        id: 5119,
        cidade: 'Meridiano',
        estado_id: 26
      },
      {
        id: 5120,
        cidade: 'Mesópolis',
        estado_id: 26
      },
      {
        id: 5121,
        cidade: 'Miguelópolis',
        estado_id: 26
      },
      {
        id: 5122,
        cidade: 'Mineiros do Tietê',
        estado_id: 26
      },
      {
        id: 5123,
        cidade: 'Miracatu',
        estado_id: 26
      },
      {
        id: 5124,
        cidade: 'Mira Estrela',
        estado_id: 26
      },
      {
        id: 5125,
        cidade: 'Mirandópolis',
        estado_id: 26
      },
      {
        id: 5126,
        cidade: 'Mirante do Paranapanema',
        estado_id: 26
      },
      {
        id: 5127,
        cidade: 'Mirassol',
        estado_id: 26
      },
      {
        id: 5128,
        cidade: 'Mirassolândia',
        estado_id: 26
      },
      {
        id: 5129,
        cidade: 'Mococa',
        estado_id: 26
      },
      {
        id: 5130,
        cidade: 'Moji Das Cruzes',
        estado_id: 26
      },
      {
        id: 5131,
        cidade: 'Mogi Guaçu',
        estado_id: 26
      },
      {
        id: 5132,
        cidade: 'Moji-mirim',
        estado_id: 26
      },
      {
        id: 5133,
        cidade: 'Mombuca',
        estado_id: 26
      },
      {
        id: 5134,
        cidade: 'Monções',
        estado_id: 26
      },
      {
        id: 5135,
        cidade: 'Mongaguá',
        estado_id: 26
      },
      {
        id: 5136,
        cidade: 'Monte Alegre do Sul',
        estado_id: 26
      },
      {
        id: 5137,
        cidade: 'Monte Alto',
        estado_id: 26
      },
      {
        id: 5138,
        cidade: 'Monte Aprazível',
        estado_id: 26
      },
      {
        id: 5139,
        cidade: 'Monte Azul Paulista',
        estado_id: 26
      },
      {
        id: 5140,
        cidade: 'Monte Castelo',
        estado_id: 26
      },
      {
        id: 5141,
        cidade: 'Monteiro Lobato',
        estado_id: 26
      },
      {
        id: 5142,
        cidade: 'Monte Mor',
        estado_id: 26
      },
      {
        id: 5143,
        cidade: 'Morro Agudo',
        estado_id: 26
      },
      {
        id: 5144,
        cidade: 'Morungaba',
        estado_id: 26
      },
      {
        id: 5145,
        cidade: 'Motuca',
        estado_id: 26
      },
      {
        id: 5146,
        cidade: 'Murutinga do Sul',
        estado_id: 26
      },
      {
        id: 5147,
        cidade: 'Nantes',
        estado_id: 26
      },
      {
        id: 5148,
        cidade: 'Narandiba',
        estado_id: 26
      },
      {
        id: 5149,
        cidade: 'Natividade da Serra',
        estado_id: 26
      },
      {
        id: 5150,
        cidade: 'Nazaré Paulista',
        estado_id: 26
      },
      {
        id: 5151,
        cidade: 'Neves Paulista',
        estado_id: 26
      },
      {
        id: 5152,
        cidade: 'Nhandeara',
        estado_id: 26
      },
      {
        id: 5153,
        cidade: 'Nipoã',
        estado_id: 26
      },
      {
        id: 5154,
        cidade: 'Nova Aliança',
        estado_id: 26
      },
      {
        id: 5155,
        cidade: 'Nova Campina',
        estado_id: 26
      },
      {
        id: 5156,
        cidade: 'Nova Canaã Paulista',
        estado_id: 26
      },
      {
        id: 5157,
        cidade: 'Nova Castilho',
        estado_id: 26
      },
      {
        id: 5158,
        cidade: 'Nova Europa',
        estado_id: 26
      },
      {
        id: 5159,
        cidade: 'Nova Granada',
        estado_id: 26
      },
      {
        id: 5160,
        cidade: 'Nova Guataporanga',
        estado_id: 26
      },
      {
        id: 5161,
        cidade: 'Nova Independência',
        estado_id: 26
      },
      {
        id: 5162,
        cidade: 'Novais',
        estado_id: 26
      },
      {
        id: 5163,
        cidade: 'Nova Luzitânia',
        estado_id: 26
      },
      {
        id: 5164,
        cidade: 'Nova Odessa',
        estado_id: 26
      },
      {
        id: 5165,
        cidade: 'Novo Horizonte',
        estado_id: 26
      },
      {
        id: 5166,
        cidade: 'Nuporanga',
        estado_id: 26
      },
      {
        id: 5167,
        cidade: 'Ocauçu',
        estado_id: 26
      },
      {
        id: 5168,
        cidade: 'Óleo',
        estado_id: 26
      },
      {
        id: 5169,
        cidade: 'Olímpia',
        estado_id: 26
      },
      {
        id: 5170,
        cidade: 'Onda Verde',
        estado_id: 26
      },
      {
        id: 5171,
        cidade: 'Oriente',
        estado_id: 26
      },
      {
        id: 5172,
        cidade: 'Orindiúva',
        estado_id: 26
      },
      {
        id: 5173,
        cidade: 'Orlândia',
        estado_id: 26
      },
      {
        id: 5174,
        cidade: 'Osasco',
        estado_id: 26
      },
      {
        id: 5175,
        cidade: 'Oscar Bressane',
        estado_id: 26
      },
      {
        id: 5176,
        cidade: 'Osvaldo Cruz',
        estado_id: 26
      },
      {
        id: 5177,
        cidade: 'Ourinhos',
        estado_id: 26
      },
      {
        id: 5178,
        cidade: 'Ouroeste',
        estado_id: 26
      },
      {
        id: 5179,
        cidade: 'Ouro Verde',
        estado_id: 26
      },
      {
        id: 5180,
        cidade: 'Pacaembu',
        estado_id: 26
      },
      {
        id: 5181,
        cidade: 'Palestina',
        estado_id: 26
      },
      {
        id: 5182,
        cidade: 'Palmares Paulista',
        estado_id: 26
      },
      {
        id: 5183,
        cidade: 'Palmeira D´oeste',
        estado_id: 26
      },
      {
        id: 5184,
        cidade: 'Palmital',
        estado_id: 26
      },
      {
        id: 5185,
        cidade: 'Panorama',
        estado_id: 26
      },
      {
        id: 5186,
        cidade: 'Paraguaçu Paulista',
        estado_id: 26
      },
      {
        id: 5187,
        cidade: 'Paraibuna',
        estado_id: 26
      },
      {
        id: 5188,
        cidade: 'Paraíso',
        estado_id: 26
      },
      {
        id: 5189,
        cidade: 'Paranapanema',
        estado_id: 26
      },
      {
        id: 5190,
        cidade: 'Paranapuã',
        estado_id: 26
      },
      {
        id: 5191,
        cidade: 'Parapuã',
        estado_id: 26
      },
      {
        id: 5192,
        cidade: 'Pardinho',
        estado_id: 26
      },
      {
        id: 5193,
        cidade: 'Pariquera-açu',
        estado_id: 26
      },
      {
        id: 5194,
        cidade: 'Parisi',
        estado_id: 26
      },
      {
        id: 5195,
        cidade: 'Patrocínio Paulista',
        estado_id: 26
      },
      {
        id: 5196,
        cidade: 'Paulicéia',
        estado_id: 26
      },
      {
        id: 5197,
        cidade: 'Paulínia',
        estado_id: 26
      },
      {
        id: 5198,
        cidade: 'Paulistânia',
        estado_id: 26
      },
      {
        id: 5199,
        cidade: 'Paulo de Faria',
        estado_id: 26
      },
      {
        id: 5200,
        cidade: 'Pederneiras',
        estado_id: 26
      },
      {
        id: 5201,
        cidade: 'Pedra Bela',
        estado_id: 26
      },
      {
        id: 5202,
        cidade: 'Pedranópolis',
        estado_id: 26
      },
      {
        id: 5203,
        cidade: 'Pedregulho',
        estado_id: 26
      },
      {
        id: 5204,
        cidade: 'Pedreira',
        estado_id: 26
      },
      {
        id: 5205,
        cidade: 'Pedrinhas Paulista',
        estado_id: 26
      },
      {
        id: 5206,
        cidade: 'Pedro de Toledo',
        estado_id: 26
      },
      {
        id: 5207,
        cidade: 'Penápolis',
        estado_id: 26
      },
      {
        id: 5208,
        cidade: 'Pereira Barreto',
        estado_id: 26
      },
      {
        id: 5209,
        cidade: 'Pereiras',
        estado_id: 26
      },
      {
        id: 5210,
        cidade: 'Peruíbe',
        estado_id: 26
      },
      {
        id: 5211,
        cidade: 'Piacatu',
        estado_id: 26
      },
      {
        id: 5212,
        cidade: 'Piedade',
        estado_id: 26
      },
      {
        id: 5213,
        cidade: 'Pilar do Sul',
        estado_id: 26
      },
      {
        id: 5214,
        cidade: 'Pindamonhangaba',
        estado_id: 26
      },
      {
        id: 5215,
        cidade: 'Pindorama',
        estado_id: 26
      },
      {
        id: 5216,
        cidade: 'Pinhalzinho',
        estado_id: 26
      },
      {
        id: 5217,
        cidade: 'Piquerobi',
        estado_id: 26
      },
      {
        id: 5218,
        cidade: 'Piquete',
        estado_id: 26
      },
      {
        id: 5219,
        cidade: 'Piracaia',
        estado_id: 26
      },
      {
        id: 5220,
        cidade: 'Piracicaba',
        estado_id: 26
      },
      {
        id: 5221,
        cidade: 'Piraju',
        estado_id: 26
      },
      {
        id: 5222,
        cidade: 'Pirajuí',
        estado_id: 26
      },
      {
        id: 5223,
        cidade: 'Pirangi',
        estado_id: 26
      },
      {
        id: 5224,
        cidade: 'Pirapora do Bom Jesus',
        estado_id: 26
      },
      {
        id: 5225,
        cidade: 'Pirapozinho',
        estado_id: 26
      },
      {
        id: 5226,
        cidade: 'Pirassununga',
        estado_id: 26
      },
      {
        id: 5227,
        cidade: 'Piratininga',
        estado_id: 26
      },
      {
        id: 5228,
        cidade: 'Pitangueiras',
        estado_id: 26
      },
      {
        id: 5229,
        cidade: 'Planalto',
        estado_id: 26
      },
      {
        id: 5230,
        cidade: 'Platina',
        estado_id: 26
      },
      {
        id: 5231,
        cidade: 'Poá',
        estado_id: 26
      },
      {
        id: 5232,
        cidade: 'Poloni',
        estado_id: 26
      },
      {
        id: 5233,
        cidade: 'Pompéia',
        estado_id: 26
      },
      {
        id: 5234,
        cidade: 'Pongaí',
        estado_id: 26
      },
      {
        id: 5235,
        cidade: 'Pontal',
        estado_id: 26
      },
      {
        id: 5236,
        cidade: 'Pontalinda',
        estado_id: 26
      },
      {
        id: 5237,
        cidade: 'Pontes Gestal',
        estado_id: 26
      },
      {
        id: 5238,
        cidade: 'Populina',
        estado_id: 26
      },
      {
        id: 5239,
        cidade: 'Porangaba',
        estado_id: 26
      },
      {
        id: 5240,
        cidade: 'Porto Feliz',
        estado_id: 26
      },
      {
        id: 5241,
        cidade: 'Porto Ferreira',
        estado_id: 26
      },
      {
        id: 5242,
        cidade: 'Potim',
        estado_id: 26
      },
      {
        id: 5243,
        cidade: 'Potirendaba',
        estado_id: 26
      },
      {
        id: 5244,
        cidade: 'Pracinha',
        estado_id: 26
      },
      {
        id: 5245,
        cidade: 'Pradópolis',
        estado_id: 26
      },
      {
        id: 5246,
        cidade: 'Praia Grande',
        estado_id: 26
      },
      {
        id: 5247,
        cidade: 'Pratânia',
        estado_id: 26
      },
      {
        id: 5248,
        cidade: 'Presidente Alves',
        estado_id: 26
      },
      {
        id: 5249,
        cidade: 'Presidente Bernardes',
        estado_id: 26
      },
      {
        id: 5250,
        cidade: 'Presidente Epitácio',
        estado_id: 26
      },
      {
        id: 5251,
        cidade: 'Presidente Prudente',
        estado_id: 26
      },
      {
        id: 5252,
        cidade: 'Presidente Venceslau',
        estado_id: 26
      },
      {
        id: 5253,
        cidade: 'Promissão',
        estado_id: 26
      },
      {
        id: 5254,
        cidade: 'Quadra',
        estado_id: 26
      },
      {
        id: 5255,
        cidade: 'Quatá',
        estado_id: 26
      },
      {
        id: 5256,
        cidade: 'Queiroz',
        estado_id: 26
      },
      {
        id: 5257,
        cidade: 'Queluz',
        estado_id: 26
      },
      {
        id: 5258,
        cidade: 'Quintana',
        estado_id: 26
      },
      {
        id: 5259,
        cidade: 'Rafard',
        estado_id: 26
      },
      {
        id: 5260,
        cidade: 'Rancharia',
        estado_id: 26
      },
      {
        id: 5261,
        cidade: 'Redenção da Serra',
        estado_id: 26
      },
      {
        id: 5262,
        cidade: 'Regente Feijó',
        estado_id: 26
      },
      {
        id: 5263,
        cidade: 'Reginópolis',
        estado_id: 26
      },
      {
        id: 5264,
        cidade: 'Registro',
        estado_id: 26
      },
      {
        id: 5265,
        cidade: 'Restinga',
        estado_id: 26
      },
      {
        id: 5266,
        cidade: 'Ribeira',
        estado_id: 26
      },
      {
        id: 5267,
        cidade: 'Ribeirão Bonito',
        estado_id: 26
      },
      {
        id: 5268,
        cidade: 'Ribeirão Branco',
        estado_id: 26
      },
      {
        id: 5269,
        cidade: 'Ribeirão Corrente',
        estado_id: 26
      },
      {
        id: 5270,
        cidade: 'Ribeirão do Sul',
        estado_id: 26
      },
      {
        id: 5271,
        cidade: 'Ribeirão Dos Índios',
        estado_id: 26
      },
      {
        id: 5272,
        cidade: 'Ribeirão Grande',
        estado_id: 26
      },
      {
        id: 5273,
        cidade: 'Ribeirão Pires',
        estado_id: 26
      },
      {
        id: 5274,
        cidade: 'Ribeirão Preto',
        estado_id: 26
      },
      {
        id: 5275,
        cidade: 'Riversul',
        estado_id: 26
      },
      {
        id: 5276,
        cidade: 'Rifaina',
        estado_id: 26
      },
      {
        id: 5277,
        cidade: 'Rincão',
        estado_id: 26
      },
      {
        id: 5278,
        cidade: 'Rinópolis',
        estado_id: 26
      },
      {
        id: 5279,
        cidade: 'Rio Claro',
        estado_id: 26
      },
      {
        id: 5280,
        cidade: 'Rio Das Pedras',
        estado_id: 26
      },
      {
        id: 5281,
        cidade: 'Rio Grande da Serra',
        estado_id: 26
      },
      {
        id: 5282,
        cidade: 'Riolândia',
        estado_id: 26
      },
      {
        id: 5283,
        cidade: 'Rosana',
        estado_id: 26
      },
      {
        id: 5284,
        cidade: 'Roseira',
        estado_id: 26
      },
      {
        id: 5285,
        cidade: 'Rubiácea',
        estado_id: 26
      },
      {
        id: 5286,
        cidade: 'Rubinéia',
        estado_id: 26
      },
      {
        id: 5287,
        cidade: 'Sabino',
        estado_id: 26
      },
      {
        id: 5288,
        cidade: 'Sagres',
        estado_id: 26
      },
      {
        id: 5289,
        cidade: 'Sales',
        estado_id: 26
      },
      {
        id: 5290,
        cidade: 'Sales Oliveira',
        estado_id: 26
      },
      {
        id: 5291,
        cidade: 'Salesópolis',
        estado_id: 26
      },
      {
        id: 5292,
        cidade: 'Salmourão',
        estado_id: 26
      },
      {
        id: 5293,
        cidade: 'Saltinho',
        estado_id: 26
      },
      {
        id: 5294,
        cidade: 'Salto',
        estado_id: 26
      },
      {
        id: 5295,
        cidade: 'Salto de Pirapora',
        estado_id: 26
      },
      {
        id: 5296,
        cidade: 'Salto Grande',
        estado_id: 26
      },
      {
        id: 5297,
        cidade: 'Sandovalina',
        estado_id: 26
      },
      {
        id: 5298,
        cidade: 'Santa Adélia',
        estado_id: 26
      },
      {
        id: 5299,
        cidade: 'Santa Albertina',
        estado_id: 26
      },
      {
        id: 5300,
        cidade: 'Santa Bárbara D´oeste',
        estado_id: 26
      },
      {
        id: 5301,
        cidade: 'Santa Branca',
        estado_id: 26
      },
      {
        id: 5302,
        cidade: 'Santa Clara D´oeste',
        estado_id: 26
      },
      {
        id: 5303,
        cidade: 'Santa Cruz da Conceição',
        estado_id: 26
      },
      {
        id: 5304,
        cidade: 'Santa Cruz da Esperança',
        estado_id: 26
      },
      {
        id: 5305,
        cidade: 'Santa Cruz Das Palmeiras',
        estado_id: 26
      },
      {
        id: 5306,
        cidade: 'Santa Cruz do Rio Pardo',
        estado_id: 26
      },
      {
        id: 5307,
        cidade: 'Santa Ernestina',
        estado_id: 26
      },
      {
        id: 5308,
        cidade: 'Santa fé do Sul',
        estado_id: 26
      },
      {
        id: 5309,
        cidade: 'Santa Gertrudes',
        estado_id: 26
      },
      {
        id: 5310,
        cidade: 'Santa Isabel',
        estado_id: 26
      },
      {
        id: 5311,
        cidade: 'Santa Lúcia',
        estado_id: 26
      },
      {
        id: 5312,
        cidade: 'Santa Maria da Serra',
        estado_id: 26
      },
      {
        id: 5313,
        cidade: 'Santa Mercedes',
        estado_id: 26
      },
      {
        id: 5314,
        cidade: 'Santana da Ponte Pensa',
        estado_id: 26
      },
      {
        id: 5315,
        cidade: 'Santana de Parnaíba',
        estado_id: 26
      },
      {
        id: 5316,
        cidade: 'Santa Rita D´oeste',
        estado_id: 26
      },
      {
        id: 5317,
        cidade: 'Santa Rita do Passa Quatro',
        estado_id: 26
      },
      {
        id: 5318,
        cidade: 'Santa Rosa de Viterbo',
        estado_id: 26
      },
      {
        id: 5319,
        cidade: 'Santa Salete',
        estado_id: 26
      },
      {
        id: 5320,
        cidade: 'Santo Anastácio',
        estado_id: 26
      },
      {
        id: 5321,
        cidade: 'Santo André',
        estado_id: 26
      },
      {
        id: 5322,
        cidade: 'Santo Antônio da Alegria',
        estado_id: 26
      },
      {
        id: 5323,
        cidade: 'Santo Antônio de Posse',
        estado_id: 26
      },
      {
        id: 5324,
        cidade: 'Santo Antônio do Aracanguá',
        estado_id: 26
      },
      {
        id: 5325,
        cidade: 'Santo Antônio do Jardim',
        estado_id: 26
      },
      {
        id: 5326,
        cidade: 'Santo Antônio do Pinhal',
        estado_id: 26
      },
      {
        id: 5327,
        cidade: 'Santo Expedito',
        estado_id: 26
      },
      {
        id: 5328,
        cidade: 'Santópolis do Aguapeí',
        estado_id: 26
      },
      {
        id: 5329,
        cidade: 'Santos',
        estado_id: 26
      },
      {
        id: 5330,
        cidade: 'São Bento do Sapucaí',
        estado_id: 26
      },
      {
        id: 5331,
        cidade: 'São Bernardo do Campo',
        estado_id: 26
      },
      {
        id: 5332,
        cidade: 'São Caetano do Sul',
        estado_id: 26
      },
      {
        id: 5333,
        cidade: 'São Carlos',
        estado_id: 26
      },
      {
        id: 5334,
        cidade: 'São Francisco',
        estado_id: 26
      },
      {
        id: 5335,
        cidade: 'São João da Boa Vista',
        estado_id: 26
      },
      {
        id: 5336,
        cidade: 'São João Das Duas Pontes',
        estado_id: 26
      },
      {
        id: 5337,
        cidade: 'São João de Iracema',
        estado_id: 26
      },
      {
        id: 5338,
        cidade: 'São João do Pau D´alho',
        estado_id: 26
      },
      {
        id: 5339,
        cidade: 'São Joaquim da Barra',
        estado_id: 26
      },
      {
        id: 5340,
        cidade: 'São José da Bela Vista',
        estado_id: 26
      },
      {
        id: 5341,
        cidade: 'São José do Barreiro',
        estado_id: 26
      },
      {
        id: 5342,
        cidade: 'São José do Rio Pardo',
        estado_id: 26
      },
      {
        id: 5343,
        cidade: 'São José do Rio Preto',
        estado_id: 26
      },
      {
        id: 5344,
        cidade: 'São José Dos Campos',
        estado_id: 26
      },
      {
        id: 5345,
        cidade: 'São Lourenço da Serra',
        estado_id: 26
      },
      {
        id: 5346,
        cidade: 'São Luís do Paraitinga',
        estado_id: 26
      },
      {
        id: 5347,
        cidade: 'São Manuel',
        estado_id: 26
      },
      {
        id: 5348,
        cidade: 'São Miguel Arcanjo',
        estado_id: 26
      },
      {
        id: 5349,
        cidade: 'São Paulo',
        estado_id: 26
      },
      {
        id: 5350,
        cidade: 'São Pedro',
        estado_id: 26
      },
      {
        id: 5351,
        cidade: 'São Pedro do Turvo',
        estado_id: 26
      },
      {
        id: 5352,
        cidade: 'São Roque',
        estado_id: 26
      },
      {
        id: 5353,
        cidade: 'São Sebastião',
        estado_id: 26
      },
      {
        id: 5354,
        cidade: 'São Sebastião da Grama',
        estado_id: 26
      },
      {
        id: 5355,
        cidade: 'São Simão',
        estado_id: 26
      },
      {
        id: 5356,
        cidade: 'São Vicente',
        estado_id: 26
      },
      {
        id: 5357,
        cidade: 'Sarapuí',
        estado_id: 26
      },
      {
        id: 5358,
        cidade: 'Sarutaiá',
        estado_id: 26
      },
      {
        id: 5359,
        cidade: 'Sebastianópolis do Sul',
        estado_id: 26
      },
      {
        id: 5360,
        cidade: 'Serra Azul',
        estado_id: 26
      },
      {
        id: 5361,
        cidade: 'Serrana',
        estado_id: 26
      },
      {
        id: 5362,
        cidade: 'Serra Negra',
        estado_id: 26
      },
      {
        id: 5363,
        cidade: 'Sertãozinho',
        estado_id: 26
      },
      {
        id: 5364,
        cidade: 'Sete Barras',
        estado_id: 26
      },
      {
        id: 5365,
        cidade: 'Severínia',
        estado_id: 26
      },
      {
        id: 5366,
        cidade: 'Silveiras',
        estado_id: 26
      },
      {
        id: 5367,
        cidade: 'Socorro',
        estado_id: 26
      },
      {
        id: 5368,
        cidade: 'Sorocaba',
        estado_id: 26
      },
      {
        id: 5369,
        cidade: 'Sud Mennucci',
        estado_id: 26
      },
      {
        id: 5370,
        cidade: 'Sumaré',
        estado_id: 26
      },
      {
        id: 5371,
        cidade: 'Suzano',
        estado_id: 26
      },
      {
        id: 5372,
        cidade: 'Suzanápolis',
        estado_id: 26
      },
      {
        id: 5373,
        cidade: 'Tabapuã',
        estado_id: 26
      },
      {
        id: 5374,
        cidade: 'Tabatinga',
        estado_id: 26
      },
      {
        id: 5375,
        cidade: 'Taboão da Serra',
        estado_id: 26
      },
      {
        id: 5376,
        cidade: 'Taciba',
        estado_id: 26
      },
      {
        id: 5377,
        cidade: 'Taguaí',
        estado_id: 26
      },
      {
        id: 5378,
        cidade: 'Taiaçu',
        estado_id: 26
      },
      {
        id: 5379,
        cidade: 'Taiúva',
        estado_id: 26
      },
      {
        id: 5380,
        cidade: 'Tambaú',
        estado_id: 26
      },
      {
        id: 5381,
        cidade: 'Tanabi',
        estado_id: 26
      },
      {
        id: 5382,
        cidade: 'Tapiraí',
        estado_id: 26
      },
      {
        id: 5383,
        cidade: 'Tapiratiba',
        estado_id: 26
      },
      {
        id: 5384,
        cidade: 'Taquaral',
        estado_id: 26
      },
      {
        id: 5385,
        cidade: 'Taquaritinga',
        estado_id: 26
      },
      {
        id: 5386,
        cidade: 'Taquarituba',
        estado_id: 26
      },
      {
        id: 5387,
        cidade: 'Taquarivaí',
        estado_id: 26
      },
      {
        id: 5388,
        cidade: 'Tarabai',
        estado_id: 26
      },
      {
        id: 5389,
        cidade: 'Tarumã',
        estado_id: 26
      },
      {
        id: 5390,
        cidade: 'Tatuí',
        estado_id: 26
      },
      {
        id: 5391,
        cidade: 'Taubaté',
        estado_id: 26
      },
      {
        id: 5392,
        cidade: 'Tejupá',
        estado_id: 26
      },
      {
        id: 5393,
        cidade: 'Teodoro Sampaio',
        estado_id: 26
      },
      {
        id: 5394,
        cidade: 'Terra Roxa',
        estado_id: 26
      },
      {
        id: 5395,
        cidade: 'Tietê',
        estado_id: 26
      },
      {
        id: 5396,
        cidade: 'Timburi',
        estado_id: 26
      },
      {
        id: 5397,
        cidade: 'Torre de Pedra',
        estado_id: 26
      },
      {
        id: 5398,
        cidade: 'Torrinha',
        estado_id: 26
      },
      {
        id: 5399,
        cidade: 'Trabiju',
        estado_id: 26
      },
      {
        id: 5400,
        cidade: 'Tremembé',
        estado_id: 26
      },
      {
        id: 5401,
        cidade: 'Três Fronteiras',
        estado_id: 26
      },
      {
        id: 5402,
        cidade: 'Tuiuti',
        estado_id: 26
      },
      {
        id: 5403,
        cidade: 'Tupã',
        estado_id: 26
      },
      {
        id: 5404,
        cidade: 'Tupi Paulista',
        estado_id: 26
      },
      {
        id: 5405,
        cidade: 'Turiúba',
        estado_id: 26
      },
      {
        id: 5406,
        cidade: 'Turmalina',
        estado_id: 26
      },
      {
        id: 5407,
        cidade: 'Ubarana',
        estado_id: 26
      },
      {
        id: 5408,
        cidade: 'Ubatuba',
        estado_id: 26
      },
      {
        id: 5409,
        cidade: 'Ubirajara',
        estado_id: 26
      },
      {
        id: 5410,
        cidade: 'Uchoa',
        estado_id: 26
      },
      {
        id: 5411,
        cidade: 'União Paulista',
        estado_id: 26
      },
      {
        id: 5412,
        cidade: 'Urânia',
        estado_id: 26
      },
      {
        id: 5413,
        cidade: 'Uru',
        estado_id: 26
      },
      {
        id: 5414,
        cidade: 'Urupês',
        estado_id: 26
      },
      {
        id: 5415,
        cidade: 'Valentim Gentil',
        estado_id: 26
      },
      {
        id: 5416,
        cidade: 'Valinhos',
        estado_id: 26
      },
      {
        id: 5417,
        cidade: 'Valparaíso',
        estado_id: 26
      },
      {
        id: 5418,
        cidade: 'Vargem',
        estado_id: 26
      },
      {
        id: 5419,
        cidade: 'Vargem Grande do Sul',
        estado_id: 26
      },
      {
        id: 5420,
        cidade: 'Vargem Grande Paulista',
        estado_id: 26
      },
      {
        id: 5421,
        cidade: 'Várzea Paulista',
        estado_id: 26
      },
      {
        id: 5422,
        cidade: 'Vera Cruz',
        estado_id: 26
      },
      {
        id: 5423,
        cidade: 'Vinhedo',
        estado_id: 26
      },
      {
        id: 5424,
        cidade: 'Viradouro',
        estado_id: 26
      },
      {
        id: 5425,
        cidade: 'Vista Alegre do Alto',
        estado_id: 26
      },
      {
        id: 5426,
        cidade: 'Vitória Brasil',
        estado_id: 26
      },
      {
        id: 5427,
        cidade: 'Votorantim',
        estado_id: 26
      },
      {
        id: 5428,
        cidade: 'Votuporanga',
        estado_id: 26
      },
      {
        id: 5429,
        cidade: 'Zacarias',
        estado_id: 26
      },
      {
        id: 5430,
        cidade: 'Chavantes',
        estado_id: 26
      },
      {
        id: 5431,
        cidade: 'Estiva Gerbi',
        estado_id: 26
      },
      {
        id: 5432,
        cidade: 'Abreulândia',
        estado_id: 27
      },
      {
        id: 5433,
        cidade: 'Aguiarnópolis',
        estado_id: 27
      },
      {
        id: 5434,
        cidade: 'Aliança do Tocantins',
        estado_id: 27
      },
      {
        id: 5435,
        cidade: 'Almas',
        estado_id: 27
      },
      {
        id: 5436,
        cidade: 'Alvorada',
        estado_id: 27
      },
      {
        id: 5437,
        cidade: 'Ananás',
        estado_id: 27
      },
      {
        id: 5438,
        cidade: 'Angico',
        estado_id: 27
      },
      {
        id: 5439,
        cidade: 'Aparecida do Rio Negro',
        estado_id: 27
      },
      {
        id: 5440,
        cidade: 'Aragominas',
        estado_id: 27
      },
      {
        id: 5441,
        cidade: 'Araguacema',
        estado_id: 27
      },
      {
        id: 5442,
        cidade: 'Araguaçu',
        estado_id: 27
      },
      {
        id: 5443,
        cidade: 'Araguaína',
        estado_id: 27
      },
      {
        id: 5444,
        cidade: 'Araguanã',
        estado_id: 27
      },
      {
        id: 5445,
        cidade: 'Araguatins',
        estado_id: 27
      },
      {
        id: 5446,
        cidade: 'Arapoema',
        estado_id: 27
      },
      {
        id: 5447,
        cidade: 'Arraias',
        estado_id: 27
      },
      {
        id: 5448,
        cidade: 'Augustinópolis',
        estado_id: 27
      },
      {
        id: 5449,
        cidade: 'Aurora do Tocantins',
        estado_id: 27
      },
      {
        id: 5450,
        cidade: 'Axixá do Tocantins',
        estado_id: 27
      },
      {
        id: 5451,
        cidade: 'Babaçulândia',
        estado_id: 27
      },
      {
        id: 5452,
        cidade: 'Bandeirantes do Tocantins',
        estado_id: 27
      },
      {
        id: 5453,
        cidade: 'Barra do Ouro',
        estado_id: 27
      },
      {
        id: 5454,
        cidade: 'Barrolândia',
        estado_id: 27
      },
      {
        id: 5455,
        cidade: 'Bernardo Sayão',
        estado_id: 27
      },
      {
        id: 5456,
        cidade: 'Bom Jesus do Tocantins',
        estado_id: 27
      },
      {
        id: 5457,
        cidade: 'Brasilândia do Tocantins',
        estado_id: 27
      },
      {
        id: 5458,
        cidade: 'Brejinho de Nazaré',
        estado_id: 27
      },
      {
        id: 5459,
        cidade: 'Buriti do Tocantins',
        estado_id: 27
      },
      {
        id: 5460,
        cidade: 'Cachoeirinha',
        estado_id: 27
      },
      {
        id: 5461,
        cidade: 'Campos Lindos',
        estado_id: 27
      },
      {
        id: 5462,
        cidade: 'Cariri do Tocantins',
        estado_id: 27
      },
      {
        id: 5463,
        cidade: 'Carmolândia',
        estado_id: 27
      },
      {
        id: 5464,
        cidade: 'Carrasco Bonito',
        estado_id: 27
      },
      {
        id: 5465,
        cidade: 'Caseara',
        estado_id: 27
      },
      {
        id: 5466,
        cidade: 'Centenário',
        estado_id: 27
      },
      {
        id: 5467,
        cidade: 'Chapada de Areia',
        estado_id: 27
      },
      {
        id: 5468,
        cidade: 'Chapada da Natividade',
        estado_id: 27
      },
      {
        id: 5469,
        cidade: 'Colinas do Tocantins',
        estado_id: 27
      },
      {
        id: 5470,
        cidade: 'Combinado',
        estado_id: 27
      },
      {
        id: 5471,
        cidade: 'Conceição do Tocantins',
        estado_id: 27
      },
      {
        id: 5472,
        cidade: 'Couto de Magalhães',
        estado_id: 27
      },
      {
        id: 5473,
        cidade: 'Cristalândia',
        estado_id: 27
      },
      {
        id: 5474,
        cidade: 'Crixás do Tocantins',
        estado_id: 27
      },
      {
        id: 5475,
        cidade: 'Darcinópolis',
        estado_id: 27
      },
      {
        id: 5476,
        cidade: 'Dianópolis',
        estado_id: 27
      },
      {
        id: 5477,
        cidade: 'Divinópolis do Tocantins',
        estado_id: 27
      },
      {
        id: 5478,
        cidade: 'Dois Irmãos do Tocantins',
        estado_id: 27
      },
      {
        id: 5479,
        cidade: 'Dueré',
        estado_id: 27
      },
      {
        id: 5480,
        cidade: 'Esperantina',
        estado_id: 27
      },
      {
        id: 5481,
        cidade: 'Fátima',
        estado_id: 27
      },
      {
        id: 5482,
        cidade: 'Figueirópolis',
        estado_id: 27
      },
      {
        id: 5483,
        cidade: 'Filadélfia',
        estado_id: 27
      },
      {
        id: 5484,
        cidade: 'Formoso do Araguaia',
        estado_id: 27
      },
      {
        id: 5485,
        cidade: 'Fortaleza do Tabocão',
        estado_id: 27
      },
      {
        id: 5486,
        cidade: 'Goianorte',
        estado_id: 27
      },
      {
        id: 5487,
        cidade: 'Goiatins',
        estado_id: 27
      },
      {
        id: 5488,
        cidade: 'Guaraí',
        estado_id: 27
      },
      {
        id: 5489,
        cidade: 'Gurupi',
        estado_id: 27
      },
      {
        id: 5490,
        cidade: 'Ipueiras',
        estado_id: 27
      },
      {
        id: 5491,
        cidade: 'Itacajá',
        estado_id: 27
      },
      {
        id: 5492,
        cidade: 'Itaguatins',
        estado_id: 27
      },
      {
        id: 5493,
        cidade: 'Itapiratins',
        estado_id: 27
      },
      {
        id: 5494,
        cidade: 'Itaporã do Tocantins',
        estado_id: 27
      },
      {
        id: 5495,
        cidade: 'Jaú do Tocantins',
        estado_id: 27
      },
      {
        id: 5496,
        cidade: 'Juarina',
        estado_id: 27
      },
      {
        id: 5497,
        cidade: 'Lagoa da Confusão',
        estado_id: 27
      },
      {
        id: 5498,
        cidade: 'Lagoa do Tocantins',
        estado_id: 27
      },
      {
        id: 5499,
        cidade: 'Lajeado',
        estado_id: 27
      },
      {
        id: 5500,
        cidade: 'Lavandeira',
        estado_id: 27
      },
      {
        id: 5501,
        cidade: 'Lizarda',
        estado_id: 27
      },
      {
        id: 5502,
        cidade: 'Luzinópolis',
        estado_id: 27
      },
      {
        id: 5503,
        cidade: 'Marianópolis do Tocantins',
        estado_id: 27
      },
      {
        id: 5504,
        cidade: 'Mateiros',
        estado_id: 27
      },
      {
        id: 5505,
        cidade: 'Maurilândia do Tocantins',
        estado_id: 27
      },
      {
        id: 5506,
        cidade: 'Miracema do Tocantins',
        estado_id: 27
      },
      {
        id: 5507,
        cidade: 'Miranorte',
        estado_id: 27
      },
      {
        id: 5508,
        cidade: 'Monte do Carmo',
        estado_id: 27
      },
      {
        id: 5509,
        cidade: 'Monte Santo do Tocantins',
        estado_id: 27
      },
      {
        id: 5510,
        cidade: 'Palmeiras do Tocantins',
        estado_id: 27
      },
      {
        id: 5511,
        cidade: 'Muricilândia',
        estado_id: 27
      },
      {
        id: 5512,
        cidade: 'Natividade',
        estado_id: 27
      },
      {
        id: 5513,
        cidade: 'Nazaré',
        estado_id: 27
      },
      {
        id: 5514,
        cidade: 'Nova Olinda',
        estado_id: 27
      },
      {
        id: 5515,
        cidade: 'Nova Rosalândia',
        estado_id: 27
      },
      {
        id: 5516,
        cidade: 'Novo Acordo',
        estado_id: 27
      },
      {
        id: 5517,
        cidade: 'Novo Alegre',
        estado_id: 27
      },
      {
        id: 5518,
        cidade: 'Novo Jardim',
        estado_id: 27
      },
      {
        id: 5519,
        cidade: 'Oliveira de Fátima',
        estado_id: 27
      },
      {
        id: 5520,
        cidade: 'Palmeirante',
        estado_id: 27
      },
      {
        id: 5521,
        cidade: 'Palmeirópolis',
        estado_id: 27
      },
      {
        id: 5522,
        cidade: 'Paraíso do Tocantins',
        estado_id: 27
      },
      {
        id: 5523,
        cidade: 'Paranã',
        estado_id: 27
      },
      {
        id: 5524,
        cidade: 'Pau D´arco',
        estado_id: 27
      },
      {
        id: 5525,
        cidade: 'Pedro Afonso',
        estado_id: 27
      },
      {
        id: 5526,
        cidade: 'Peixe',
        estado_id: 27
      },
      {
        id: 5527,
        cidade: 'Pequizeiro',
        estado_id: 27
      },
      {
        id: 5528,
        cidade: 'Colméia',
        estado_id: 27
      },
      {
        id: 5529,
        cidade: 'Pindorama do Tocantins',
        estado_id: 27
      },
      {
        id: 5530,
        cidade: 'Piraquê',
        estado_id: 27
      },
      {
        id: 5531,
        cidade: 'Pium',
        estado_id: 27
      },
      {
        id: 5532,
        cidade: 'Ponte Alta do Bom Jesus',
        estado_id: 27
      },
      {
        id: 5533,
        cidade: 'Ponte Alta do Tocantins',
        estado_id: 27
      },
      {
        id: 5534,
        cidade: 'Porto Alegre do Tocantins',
        estado_id: 27
      },
      {
        id: 5535,
        cidade: 'Porto Nacional',
        estado_id: 27
      },
      {
        id: 5536,
        cidade: 'Praia Norte',
        estado_id: 27
      },
      {
        id: 5537,
        cidade: 'Presidente Kennedy',
        estado_id: 27
      },
      {
        id: 5538,
        cidade: 'Pugmil',
        estado_id: 27
      },
      {
        id: 5539,
        cidade: 'Recursolândia',
        estado_id: 27
      },
      {
        id: 5540,
        cidade: 'Riachinho',
        estado_id: 27
      },
      {
        id: 5541,
        cidade: 'Rio da Conceição',
        estado_id: 27
      },
      {
        id: 5542,
        cidade: 'Rio Dos Bois',
        estado_id: 27
      },
      {
        id: 5543,
        cidade: 'Rio Sono',
        estado_id: 27
      },
      {
        id: 5544,
        cidade: 'Sampaio',
        estado_id: 27
      },
      {
        id: 5545,
        cidade: 'Sandolândia',
        estado_id: 27
      },
      {
        id: 5546,
        cidade: 'Santa fé do Araguaia',
        estado_id: 27
      },
      {
        id: 5547,
        cidade: 'Santa Maria do Tocantins',
        estado_id: 27
      },
      {
        id: 5548,
        cidade: 'Santa Rita do Tocantins',
        estado_id: 27
      },
      {
        id: 5549,
        cidade: 'Santa Rosa do Tocantins',
        estado_id: 27
      },
      {
        id: 5550,
        cidade: 'Santa Tereza do Tocantins',
        estado_id: 27
      },
      {
        id: 5551,
        cidade: 'Santa Terezinha do Tocantins',
        estado_id: 27
      },
      {
        id: 5552,
        cidade: 'São Bento do Tocantins',
        estado_id: 27
      },
      {
        id: 5553,
        cidade: 'São Félix do Tocantins',
        estado_id: 27
      },
      {
        id: 5554,
        cidade: 'São Miguel do Tocantins',
        estado_id: 27
      },
      {
        id: 5555,
        cidade: 'São Salvador do Tocantins',
        estado_id: 27
      },
      {
        id: 5556,
        cidade: 'São Sebastião do Tocantins',
        estado_id: 27
      },
      {
        id: 5557,
        cidade: 'São Valério da Natividade',
        estado_id: 27
      },
      {
        id: 5558,
        cidade: 'Silvanópolis',
        estado_id: 27
      },
      {
        id: 5559,
        cidade: 'Sítio Novo do Tocantins',
        estado_id: 27
      },
      {
        id: 5560,
        cidade: 'Sucupira',
        estado_id: 27
      },
      {
        id: 5561,
        cidade: 'Taguatinga',
        estado_id: 27
      },
      {
        id: 5562,
        cidade: 'Taipas do Tocantins',
        estado_id: 27
      },
      {
        id: 5563,
        cidade: 'Talismã',
        estado_id: 27
      },
      {
        id: 5564,
        cidade: 'Palmas',
        estado_id: 27
      },
      {
        id: 5565,
        cidade: 'Tocantínia',
        estado_id: 27
      },
      {
        id: 5566,
        cidade: 'Tocantinópolis',
        estado_id: 27
      },
      {
        id: 5567,
        cidade: 'Tupirama',
        estado_id: 27
      },
      {
        id: 5568,
        cidade: 'Tupiratins',
        estado_id: 27
      },
      {
        id: 5569,
        cidade: 'Wanderlândia',
        estado_id: 27
      },
      {
        id: 5570,
        cidade: 'Xambioá',
        estado_id: 27
      },


    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('cidade', null, {});

  }
};