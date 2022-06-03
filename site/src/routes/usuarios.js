var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/requisitar", function (req, res) {
    usuarioController.requisitar(req, res);
});

router.get("/requisitar_mapa", function (req, res) {
    usuarioController.requisitar_mapa(req, res);
});

router.get("/requisitar_arma", function (req, res) {
    usuarioController.requisitar_arma(req, res);
});

router.get("/requisitar_funcao", function (req, res) {
    usuarioController.requisitar_funcao(req, res);
});

router.get("/requisitar_pontuacao", function (req, res) {
    usuarioController.requisitar_pontuacao(req, res);
});

router.post("/atualizar_pontuacao", function (req, res) {
    usuarioController.atualizar_pontuacao(req, res);
});

module.exports = router;