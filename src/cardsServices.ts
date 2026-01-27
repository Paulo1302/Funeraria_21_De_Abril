// src/cardsServicos.ts

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
      'Orientação completa à família e encaminhamento para cremação, conforme condições previamente combinadas (consulte nossa equipe).',
    destaque: 'Consulte condições',
  },
  {
    titulo: 'Translado Funerário',
    descricao:
      'Translado sério e seguro, com respeito em todo o percurso. Ideal para remoção entre cidades ou estados, de acordo com as condições contratadas.',
    destaque: 'Consultar condições',
  },
  {
    titulo: 'Atendimento e Suporte à Família',
    descricao:
      'Suporte completo à família nos momentos mais difíceis, com acolhimento, orientação e organização de todos os detalhes do funeral.',
    destaque: 'Suporte completo',
  },
  {
    titulo: 'Demais Serviços',
    descricao:
      'Precisa de um serviço específico ou tem alguma dúvida sobre nossa cobertura? Fale com nossa equipe para um atendimento personalizado.',
    destaque: 'Entre em contato',
  },
];

export function renderizarCardsServicos(containerSelector: string) {
  const container = document.querySelector<HTMLDivElement>(containerSelector);
  if (!container) return;

  container.innerHTML = servicos
    .map(
      (s) => `
      <div class="card">
        <h3>${s.titulo}</h3>
        <p>${s.descricao}</p>
        ${
          s.destaque
            ? `<span class="preco">${s.destaque}</span>`
            : ''
        }
      </div>
    `,
    )
    .join('');
}