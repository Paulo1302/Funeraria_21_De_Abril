// src/cardsServices.ts
import './cardsServices.css';

type Servico = {
  titulo: string;
  descricao: string;
  destaque?: string;
};

const servicos: Servico[] = [
  {
    titulo: 'Serviço Funerário Completo',
    descricao:
      'Inclui ornamentação do corpo com flores naturais, coroa de flores, translado, taxas de velório, cemitério e diversos modelos de urnas (caixões), entre outros serviços.',
    destaque: 'Atendimento 24 horas',
  },
  {
    titulo: 'Cremação',
    descricao:
      'Orientação completa à família e encaminhamento para cremação, conforme condições previamente combinadas.',
    destaque: 'Consulte condições',
  },
  {
    titulo: 'Translado Funerário',
    descricao:
      'Translado sério e seguro, com respeito em todo o percurso. Ideal para remoção entre cidades ou estados.',
    destaque: 'Consultar condições',
  },
    {
    titulo: 'Suporte à Família',
    descricao:
      'Suporte completo à família nos momentos mais difíceis, com atendimento humano e acolhedor, organizando todos os detalhes do funeral.',
    destaque: 'Acolhimento dedicado',
  },
  {
    titulo: 'Demais Serviços',
    descricao:
      'Caso precise de um serviço específico ou tenha dúvidas sobre nossa cobertura, nossa equipe está à disposição para orientar você.',
    destaque: 'Atendimento personalizado',
  },
];

export function renderizarCardsServicos(containerSelector: string) {
  const container = document.querySelector<HTMLDivElement>(containerSelector);
  if (!container) return;

  container.innerHTML = servicos
    .map(
      (s) => `
      <div class="card card-servico">
        <div class="card-header">
          <h3>${s.titulo}</h3>
        </div>
        <div class="card-body">
          <p class="card-descricao">${s.descricao}</p>
        </div>
        <div class="card-footer">
          ${s.destaque ? `<span class="preco">${s.destaque}</span>` : ''}
          <a class="card-link" href="#contato">Ver contatos</a>
        </div>
      </div>
    `,
    )
    .join('');
}