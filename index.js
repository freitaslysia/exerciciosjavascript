import express from "express"

const app = express();
app.use(express.json());
const port = 3000;

app.post("/api/exercicio", (req, res) => {
    console.log(req.body)
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = num1 + num2;


    res.status(201).json({ message: `O resultado é ${result}` })
});

app.listen(port, () => {
    console.log(`"Servidor rodando na porta" ${port}`)
});
