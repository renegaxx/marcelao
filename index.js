var pdf = require("html-pdf");
var fs = require("fs");

var nomeDoUsuario = "Renan Costa Santos";
var curso = "Desenvolvimento de Sistemas";
var categoria = "TI";

// Corrija o caminho da imagem aqui
var logoSenai = "data:image/png;base64," + fs.readFileSync("img/logosenas.png", 'base64');

var conteudo = `
<style>
  p {
    font-size: 18px;
    font-family: 'Verdana', sans-serif;
  }
  .conteudo1 {
    text-align: center;
  }
  .conteudo1 h1 {
    font-family: 'Verdana', sans-serif;
    font-size: 22px;
  }
  .cursos {
    display: flex;
    justify-content: space-around; /* Coloca os cursos um do lado do outro */
    align-items: flex-start;
    gap: 40px; /* Espaçamento entre os cursos */
    margin-top: 20px;
  }
  .curso {
    text-align: center;
  }
  .esquerda {
    margin-left: 20px;
  }
  .esquerda p {
    color: #a0a0a0;
  }
  .nota {
    font-size: 16px;
    color: blue;
  }
  img {
    width: 100px;
    margin-bottom: 20px;
  }
</style>

<div class="conteudo1">
  <img src="${logoSenai}" alt="Logo SENAI" />
  <h1>Boletim Escolar - Turma 3A</h1>
</div>

<hr>

<div class='esquerda'>
  <p><strong>Nome:</strong> ${nomeDoUsuario}</p>
  <p><strong>Curso:</strong> ${curso}</p>
  <p><strong>Categoria:</strong> ${categoria}</p>
</div>

<div class='conteudo1'>
  <h1>Resultados</h1>
  <div class='cursos'>
    <div class="curso">
      <h2>Desenvolvimento de Sistemas</h2>
      <p class="nota">Nota: 7.4</p>
    </div>
    <div class="curso">
      <h2>Banco de Dados</h2>
      <p class="nota">Nota: 8.0</p>
    </div>
    <div class="curso">
      <h2>Redes</h2>
      <p class="nota">Nota: 6.5</p>
    </div>
    <div class="curso">
      <h2>Projeto Integrador</h2>
      <p class="nota">Nota: 9.0</p>
    </div>
  </div>
</div>
`;

pdf.create(conteudo, {}).toFile("./boletim_escolar.pdf", (err, res) => {
    if (err) {
        console.log("Um erro aconteceu: ", err);
    } else {
        console.log("PDF gerado com sucesso:", res);
    }
});
