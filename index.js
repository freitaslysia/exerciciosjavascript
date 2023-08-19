import express from "express"
import { somar } from './exercicios/um.js';
import { multi } from './exercicios/dois.js';
import { div } from './exercicios/tres.js';
import { grau } from './exercicios/quatro.js';

const app = express();
app.use(express.json());
const port = 3000;

app.post("/api/exercicio", (req, res) => {
    const result = somar(req.body.num1, req.body.num2)
    res.status(201).json({ 
        message: `resultado ${result}` })
});

app.post("/api/exercicio2", (req, res) => {
    const result = multi(req.body.valorHora, req.body.horasTrab)
    res.status(201).json({ 
        message: `O trabalhador deverá receber ao final do mês: ${result}` })
});

app.post("/api/exercicio3", (req, res) => {
    const result = div(req.body.peso1, req.body.peso2, req.body.peso3, req.body.peso4, req.body.peso5)
    res.status(201).json({ 
        message: `O peso médio das 5 pessoas é: ${result}` })
});

app.post("/api/exercicio4", (req, res) => {
    const result = grau(req.body.celsius, req.body.fahrenheit)
    res.status(201).json({ 
        message: `A temperatura Celsius para Fahrenheit é: ${result}` })
});





















app.listen(port, () => {
    console.log(`"Servidor rodando na porta" ${port}`)
});
