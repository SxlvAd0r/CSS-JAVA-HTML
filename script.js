window.addEventListener("DOMContentLoaded", () => {
  alert("Bem-vindo ao meu perfil!");
});
 
// Contador de cliques (só existe na página index.html)
const botao = document.getElementById("botao-contador");
 
if (botao) {
  let cliques = 0;
 
  botao.addEventListener("click", () => {
    cliques++;
    botao.textContent = "Cliquei " + cliques + " vezes";
  });
}
 
// Desafio extra: destaca a aba ativa na navbar consoante a página atual
const linksNav = document.querySelectorAll("nav a");
const paginaAtual = window.location.pathname.split("/").pop();
 
linksNav.forEach((link) => {
  if (link.getAttribute("href") === paginaAtual) {
    link.classList.add("active");
  }
});