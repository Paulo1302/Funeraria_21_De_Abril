import gmailIcon from "./img/contatos/gmail.jpg";
import whatsappIcon from "./img/contatos/whatsapp.jpg";

export function renderizarContato(selector: string) {
  const secao = document.querySelector<HTMLElement>(selector);
  if (!secao) return;

  secao.innerHTML = `
    <h2 class="titulo-secao">Contatos e Localização</h2>

    <div class="contato-grid">
      <div class="contato-info">

        <div class="info-bloco">
          <h3>Endereço</h3>
          <p>
            <a
              href="https://maps.app.goo.gl/Fro58bHS5tDNukVf8"
              target="_blank"
              rel="noopener noreferrer"
              class="link-endereco"
            >
              Rua Aurino Correa Lima, n°37, Centro, Glória do Goitá-PE
            </a>
          </p>
        </div>

        <div class="info-bloco">
          <h3>Telefones</h3>
          <p>
            <span class="icone icone-telefone">📞</span>
            <a href="tel:+558136581163">(81) 99926-2736</a>
          </p>
          <p>
            <img src="${whatsappIcon}" alt="WhatsApp" class="icone-contato" />
            <a href="https://wa.me/5581999262736" target="_blank" class="link-whatsapp">
              +55 (81) 9 9926-2736
            </a>
          </p>
        </div>

        <div class="info-bloco">
          <h3>E-mails</h3>
          <p>
            <img src="${gmailIcon}" alt="E-mail" class="icone-contato" />
            <a href="mailto:paulofernandocb@hotmail.com">paulofernandocb@hotmail.com</a>
          </p>
          <p>
            <img src="${gmailIcon}" alt="E-mail" class="icone-contato" />
            <a href="mailto:pf59980@gmail.com">pf59980@gmail.com</a>
          </p>
        </div>
      </div>

      <div class="mapa-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.996786176928!2d-35.29372079999999!3d-7.999267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aba99ca29440d5%3A0xbd2a7a3d14bcf02!2sFUNER%C3%81RIA%2021%20DE%20ABRIL!5e0!3m2!1spt-BR!2sbr!4v1769544857344!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style="border: 0;"
          allowfullscreen=""
          loading="lazy">
        </iframe>
      </div>
    </div>
  `;
}
