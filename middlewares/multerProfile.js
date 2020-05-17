const multer = require('multer');

// Vamos exportar nosso módulo multer, o qual vamos executar passando as nossas configurações em um objeto.
module.exports = (multer({
    
    // Como deve ser feito o armazenamento dos arquivos?
   storage: multer.diskStorage({
     
       // Qual deve ser o destino deles?
       destination: (req, file, cb) => {
           
           // Setamos o destino como segundo paramêtro do callback
           cb(null, './public/images/profiles/');
       },
       
       // E como devem se chamar?
       filename: (req, file, cb) => {
           
           // Setamos o nome do arquivo que vai ser salvado no segundo paramêtro
           // Apenas concatenei a data atual com o nome original do arquivo, que a biblioteca nos disponibiliza.
           cb(null, Date.now().toString() + '-' + file.originalname);
           
       }
       
   }), // FIM DA CONFIGURAÇÃO DE ARMAZENAMENTO
}));