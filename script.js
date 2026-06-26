// ===================================================================
// SCRIPT.JS
// Todas as funções de JavaScript do site. Cada uma é chamada direto
// no HTML, usando onclick="..." ou onmouseover="...". Esse é o jeito
// mais simples de usar JavaScript: a função só "faz alguma coisa"
// quando é chamada por um evento (um clique, passar o mouse, etc).
//
// O mesmo arquivo é usado nas 4 páginas. Cada função só funciona se
// o elemento que ela precisa existir na página atual - por isso não
// dá erro mesmo usando um único arquivo para todo o site.
// ===================================================================

// -------------------------------------------------------------------
// FUNÇÃO: mostrar uma legenda ao passar o mouse sobre a imagem
// Usada na página Inicial.
// Chamada pela imagem: onmouseover="mostrarLegenda()"
// -------------------------------------------------------------------
function mostrarLegenda() {
  var legenda = document.getElementById("legendaImagem");
  legenda.innerHTML = "Desenvolver para a web é escrever código que vira uma página real, visível para qualquer pessoa com acesso à internet.";
}

// -------------------------------------------------------------------
// FUNÇÃO: apagar a legenda quando o mouse sai da imagem
// Usada na página Inicial.
// Chamada pela imagem: onmouseout="esconderLegenda()"
// -------------------------------------------------------------------
function esconderLegenda() {
  var legenda = document.getElementById("legendaImagem");
  legenda.innerHTML = "";
}

// -------------------------------------------------------------------
// FUNÇÃO: trocar a cor de um texto quando ele é clicado
// Usada na página Sobre a Disciplina.
// Chamada por um texto: onclick="trocarCor(this)"
// -------------------------------------------------------------------
function trocarCor(elemento) {
  if (elemento.style.color === "green") {
    elemento.style.color = "black";
  } else {
    elemento.style.color = "green";
  }
}

// -------------------------------------------------------------------
// FUNÇÃO: mostrar a data e a hora atual
// Usada na página Sobre a Disciplina.
// Chamada por um botão: onclick="mostrarDataHora()"
// -------------------------------------------------------------------
function mostrarDataHora() {
  var agora = new Date(); // cria um objeto com a data/hora exatas de agora
  var caixa = document.getElementById("caixaDataHora");
  caixa.innerHTML = "Agora são: " + agora.toLocaleString("pt-BR");
}

// -------------------------------------------------------------------
// FUNÇÃO: mostrar uma explicação ao clicar em um item de lista
// Usada na página Conteúdos Estudados (recurso interativo principal).
// Chamada por cada item: onclick="mostrarExplicacao('texto aqui')"
// -------------------------------------------------------------------
function mostrarExplicacao(texto) {
  var caixa = document.getElementById("caixaExplicacao");
  caixa.innerHTML = texto;
}

// -------------------------------------------------------------------
// FUNÇÃO: contar quantas vezes um botão foi clicado
// Usada na página Conteúdos Estudados.
// Chamada pelo botão: onclick="contarClique()"
// -------------------------------------------------------------------
var quantidadeCliques = 0; // variável "global", guarda o total de cliques

function contarClique() {
  quantidadeCliques = quantidadeCliques + 1;
  var contador = document.getElementById("contadorCliques");
  contador.innerHTML = "Você clicou " + quantidadeCliques + " vez(es) neste botão.";
}

// -------------------------------------------------------------------
// FUNÇÃO: mostrar ou esconder um texto ("ver mais / ver menos")
// Usada na página Conteúdos Estudados.
// Chamada por um link: onclick="alternarTexto()"
// -------------------------------------------------------------------
function alternarTexto() {
  var texto = document.getElementById("textoExtra");

  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}

// -------------------------------------------------------------------
// FUNÇÃO: validar o formulário de contato antes de enviar
// Usada na página Contato.
// Chamada pelo formulário: onsubmit="return validarFormulario()"
// -------------------------------------------------------------------
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
