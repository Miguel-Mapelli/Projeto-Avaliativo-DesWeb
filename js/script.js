
// SCRIPT.JS

/*
   FUNÇÃO: mostrar uma legenda ao passar o mouse sobre a imagem
   Usada na página Inicial.
   Chamada pela imagem: onmouseover="mostrarLegenda()"
*/
function mostrarLegenda() {
  var legenda = document.getElementById("legendaImagem");
  legenda.innerHTML = "Desenvolver para a web é escrever código que vira uma página real, visível para qualquer pessoa com acesso à internet.";
}

/*
   FUNÇÃO: apagar a legenda quando o mouse sai da imagem
   Usada na página Inicial */
function esconderLegenda() {
  var legenda = document.getElementById("legendaImagem");
  legenda.innerHTML = "";
}


/* FUNÇÃO: trocar a cor de um texto quando ele é clicado
   Usada na página Sobre a Disciplina */
function trocarCor(elemento) {
  if (elemento.style.color === "green") {
    elemento.style.color = "black";
  } else {
    elemento.style.color = "green";
  }
}

/* FUNÇÃO: mostrar a data e a hora atual
   Usada na página Sobre a Disciplina. */
function mostrarDataHora() {
  var agora = new Date(); // cria um objeto com a data/hora exatas de agora
  var caixa = document.getElementById("caixaDataHora");
  caixa.innerHTML = "Agora são: " + agora.toLocaleString("pt-BR");
}

/* FUNÇÃO: mostrar uma explicação ao clicar em um item de lista
   Usada na página Conteúdos Estudados (recurso interativo principal). */
function mostrarExplicacao(texto) {
  var caixa = document.getElementById("caixaExplicacao");
  caixa.innerHTML = texto;
}

/* FUNÇÃO: contar quantas vezes um botão foi clicado
   Usada na página Conteúdos Estudados. */

var quantidadeCliques = 0; // variável "global", guarda o total de cliques

function contarClique() {
  quantidadeCliques = quantidadeCliques + 1;
  var contador = document.getElementById("contadorCliques");
  contador.innerHTML = "Você clicou " + quantidadeCliques + " vez(es) neste botão.";
}

/* FUNÇÃO: mostrar ou esconder um texto ("ver mais / ver menos")
   Usada na página Conteúdos Estudados. */
function alternarTexto() {
  var texto = document.getElementById("textoExtra");

  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}

/* FUNÇÃO: validar o formulário de contato antes de enviar
   Usada na página Contato. */
function validarFormulario() {
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  var aviso = document.getElementById("avisoFormulario");

  // .trim() remove espaços em branco do início/fim
  if (nome.trim().length < 3) {
    aviso.innerHTML = "<strong>Atenção:</strong> digite um nome com pelo menos 3 letras.";
    aviso.style.color = "red";
    return false; // impede o formulário de ser enviado
  }

  if (mensagem.trim().length < 10) {
    aviso.innerHTML = "<strong>Atenção:</strong> escreva uma mensagem com pelo menos 10 letras.";
    aviso.style.color = "red";
    return false;
  }

  aviso.innerHTML = "Mensagem enviada com sucesso! Obrigado, " + nome.trim() + ".";
  aviso.style.color = "green";

  return false;
}
