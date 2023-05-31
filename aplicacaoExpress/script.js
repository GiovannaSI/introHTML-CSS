const express = require("express");
const app = express();

let contador = 0;
let incrementar1 = 0;
let incrementar5 = 0;

app.get("/contador", function (req, res) {
  res.send(`Valor atual do contador: ${ contador }`);
});

app.get("/incrementar1", function (req, res) {
  contador += 1;
  incrementar1 += 1;
  res.send(`Valor do contador após incrementar 1: ${ contador }`);
});

app.get("/incrementar5", function (req, res) {
  contador += 5;
  incrementar5 += 5;
  res.send(`Valor docontador após incrementar 5: ${ contador }`);
});

app.get('/relatorio', (req, res) => {
  const relatorio = {
    valorAtual: contador,
    incrementar1: incrementar1,
    incrementar5, incrementar5
  };
  res.json(relatorio);
});

app.get('/modificarcontador/:valor', (req, res) => {
  const newValue = parseInt(req.params.valor);
  contador = newValue;
  res.send(`Contador modificado para: ${ contador }`);
});

app.listen(3000, function(){
  console.log("Aplicação Express iniciada na porta 3000")
});