const { Router } = require('express');
const { getDiretores, addDiretor, updateDiretor, deleteDiretor, getDiretorPorCodigo } = require('../controllers/diretorController');
const rotasDiretores = new Router();

rotasDiretores.route('/diretor')
   .get(getDiretores)
   .post(addDiretor)
   .put(updateDiretor)


rotasDiretores.route('/diretor/:codigo')
   .get(getDiretorPorCodigo)
   .delete(deleteDiretor)

module.exports = { rotasDiretores };