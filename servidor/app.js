import express from "express";
import path from "path";
import url from "url";

const app = express();

const caminhoAtual = url.fileURLToPath(import.meta.url);
console.log(caminhoAtual)
const diretorioPublico = path.join(caminhoAtual, "../..", "client", "public");
console.log(diretorioPublico)
app.use(express.static(diretorioPublico));



export default app;