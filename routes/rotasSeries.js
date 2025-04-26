const { Router } = require('express');
const { getSeries, addSerie, updateSerie, deleteSerie, getSeriePorCodigo } = require('../controllers/serieController');
const rotasSeries = new Router();

rotasSeries.route('/serie')
   .get(getSeries)
   .post(addSerie)
   .put(updateSerie)

rotasSeries.route('/serie/:codigo')
   .get(getSeriePorCodigo)
   .delete(deleteSerie)

module.exports = { rotasSeries };