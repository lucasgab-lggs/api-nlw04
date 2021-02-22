import express from 'express';

const app = express();

/**
 * MÉTODOS HTTP:
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração Específica
 */

 app.get("/", (request, response) => {
    return response.send("Hello World!")
 });

 app.post("/", (request, response) => {
     return response.send("Dados gravados com sucesso!")
 })

app.listen(3334, () => console.log("Server is running!"));