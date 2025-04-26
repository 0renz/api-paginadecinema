const { Router } = require('express');
const { rotasDiretores } = require('./rotasDiretores');
const { rotasFilmes } = require('./rotasFilmes');
const { rotasSeries } = require('./rotasSeries');

const rotas = new Router();

rotas.use(rotasDiretores, rotasFilmes, rotasSeries);

module.exports = { rotas };