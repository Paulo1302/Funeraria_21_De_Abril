// src/main.ts
import './style.css';
import './cardsServices.css';
import { renderizarCardsServicos } from './cardsServices';

// Renderizar cards na seção de serviços
renderizarCardsServicos('.grid-servicos');

// Seleção de elementos com Tipagem Forte
const botoes = document.querySelectorAll<HTMLButtonElement>('.tab-link');
const secoes = document.querySelectorAll<HTMLElement>('.aba-conteudo');

// Lógica de Troca de Abas
botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const alvo = botao.getAttribute('data-alvo');

    // Remove classe active de todos os botões e seções
    botoes.forEach((b) => b.classList.remove('active'));
    secoes.forEach((s) => s.classList.remove('active'));

    // Adiciona a classe active ao botão selecionado
    botao.classList.add('active');

    // Ativa a seção correspondente ao atributo data-alvo
    const secaoAtiva = document.getElementById(alvo || '');
    if (secaoAtiva) {
      secaoAtiva.classList.add('active');
    }
  });
});