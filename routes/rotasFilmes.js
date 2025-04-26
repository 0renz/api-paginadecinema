const { Router } = require('express');
const { getFilmes, addFilme, updateFilme, deleteFilme, getFilmePorCodigo } = require('../controllers/filmeController');
const rotasFilmes = new Router();

rotasFilmes.route('/filme')
   .get(getFilmes)
   .post(addFilme)
   .put(updateFilme)

rotasFilmes.route('/filme/:codigo')
   .get(getFilmePorCodigo)
   .delete(deleteFilme)

module.exports = { rotasFilmes };