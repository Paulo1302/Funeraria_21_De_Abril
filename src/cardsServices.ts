// src/cardsServices.ts
import './cardsServices.css';

type Servico = {
  titulo: string;
  descricao: string;
  destaque?: string;
  rotuloLink?: string;
  link?: string;
};

const servicos: Servico[] = [
  {
    titulo: 'Serviço Funerário Completo',
    descricao:
      'Inclui ornamentação do corpo com flores naturais, coroa de flores, translado, taxas de velório, cemitério e diversos modelos de urnas (caixões), entre outros serviços.',
    destaque: 'Atendimento 24 horas',
    rotuloLink: 'Falar com nossa equipe',
    link: 'https://wa.me/5581999262736',
  },
  {
    titulo: 'Cremação',
    descricao:
      'Orientação completa à família e encaminhamento para cremação, conforme condições previamente combinadas.',
    destaque: 'Consulte condições',
    rotuloLink: 'Ver detalhes na seção de contato',
    link: '#contato',
  },
  {
    titulo: 'Translado Funerário',
    descricao:
      'Translado sério e seguro, com respeito em todo o percurso. Ideal para remoção entre cidades ou estados.',
    destaque: 'Consultar condições',
    rotuloLink: 'Tirar dúvidas sobre translado',
    link: '#contato',
  },
  {
    titulo: 'Suporte à Família',
    descricao:
      'Suporte completo à família nos momentos mais difíceis, com atendimento humano e acolhedor.',
    destaque: 'Suporte completo',
    rotuloLink: 'Fale com nosso atendimento',
    link: '#contato',
  },
  {
    titulo: 'Demais Serviços',
    descricao:
      'Precisa de um serviço específico ou tem dúvidas sobre nossa cobertura? Fale com nossa equipe.',
    destaque: 'Entre em contato',
    rotuloLink: 'Ver contatos completos',
    link: '#contato',
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
        ${s.destaque ? `<span class="preco">${s.destaque}</span>` : ''}
        ${
          s.link && s.rotuloLink
            ? `<a class="card-link" href="${s.link}" ${
                s.link.startsWith('http')
                  ? 'target="_blank" rel="noopener noreferrer"'
                  : ''
              }>${s.rotuloLink}</a>`
            : ''
        }
      </div>
    `,
    )
    .join('');
}