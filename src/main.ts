// src/main.ts

import './style.css';
import './cardsServices.css';
import './sobreEmpresa.css';
import './contatoEmpresa.css';
import { renderizarCardsServicos } from './cardsServices';
import { renderizarSobre } from './sobreEmpresa';
import { renderizarContato } from './contatoEmpresa';

// Renderiza conteúdos dinâmicos
renderizarSobre('#sobre');
renderizarCardsServicos('.grid-servicos');
renderizarContato('#contato');

// Seleção de elementos
const botoes = document.querySelectorAll<HTMLButtonElement>('.tab-link');
const secoes = document.querySelectorAll<HTMLElement>('.aba-conteudo');

// Função para ativar aba com animação e scroll opcional
function ativarAba(idAlvo: string, deveRolar: boolean = false) {
  botoes.forEach((b) => b.classList.remove('active'));
  secoes.forEach((s) => {
    s.classList.remove('active');
    s.classList.remove('fade-in');
  });

  const botao = document.querySelector<HTMLButtonElement>(
    `.tab-link[data-alvo="${idAlvo}"]`,
  );
  const secao = document.getElementById(idAlvo);

  if (!botao || !secao) return;

  botao.classList.add('active');
  secao.classList.add('active');
  secao.classList.add('fade-in');

  if (deveRolar) {
    secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Navegação pelos botões (sem scroll forçado)
botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const alvo = botao.getAttribute('data-alvo');
    if (!alvo) return;
    ativarAba(alvo, false);
  });
});

// Clique nos cards -> ir para aba de contato COM scroll
const cards = document.querySelectorAll<HTMLAnchorElement>('.card-servico');

cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    event.preventDefault();
    ativarAba('contato', true);
  });
});