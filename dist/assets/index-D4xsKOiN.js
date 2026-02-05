(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m=[{titulo:"Serviço Funerário Completo",descricao:"Inclui ornamentação do corpo com flores naturais, coroa de flores, translado, taxas de velório, cemitério e diversos modelos de urnas (caixões), entre outros serviços.",destaque:"Atendimento 24 horas"},{titulo:"Cremação",descricao:"Orientação completa à família e encaminhamento para cremação, conforme condições previamente combinadas.",destaque:"Consultar condições"},{titulo:"Translado Funerário",descricao:"Translado sério e seguro, com respeito em todo o percurso. Ideal para remoção entre cidades ou estados.",destaque:"Consultar condições"},{titulo:"Suporte à Família",descricao:"Suporte completo à família nos momentos mais difíceis, com atendimento humano e acolhedor.",destaque:"Acolhimento dedicado"},{titulo:"Demais Serviços",descricao:"Caso precise de um serviço específico ou tenha dúvidas sobre nossa cobertura, nossa equipe está à disposição para orientar você.",destaque:"Atendimento personalizado"}];function u(a){const o=document.querySelector(a);o&&(o.innerHTML=m.map(s=>`
      <a class="card-servico" href="#contato">
        <div class="card-conteudo">
          <div class="card-header">
            <h3>${s.titulo}</h3>
          </div>
          <div class="card-body">
            <p class="card-descricao">${s.descricao}</p>
          </div>
          <div class="card-footer">
            ${s.destaque?`<span class="preco">${s.destaque}</span>`:""}
          </div>
        </div>

        <div class="card-overlay">
          <span class="card-overlay-text">Ver contatos</span>
        </div>
      </a>
    `).join(""))}const p="/Funeraria_21_De_Abril/assets/fachada-D-Jor9Rb.jpg",f="/Funeraria_21_De_Abril/assets/veiculos--dIyPgk2.jpg",h="/Funeraria_21_De_Abril/assets/interior-0ewzih9B.jpg",t={titulo:"Dignidade e Respeito desde 1940",subtitulo:"Segunda geração familiar dedicada ao amparo de sua família com humanidade e tradição.",historia:`Fundada em 1940, a Funerária 21 de Abril consolidou-se como um pilar de confiança em Glória do Goitá. 
               Hoje, sob a gestão da segunda geração da família, mantemos o compromisso de oferecer um suporte 
               integral e humanizado. O Santuário Paz nasceu com o propósito de ser um refúgio acolhedor nos momentos mais 
               difíceis, contando com salas climatizadas e atendimento especializado 24 horas.`,missao:`Com mais de 80 anos de história, compreendemos que o momento da despedida exige profunda empatia. 
             Nosso foco é garantir que cada família receba um atendimento que verdadeiramente entende a complexidade 
             e a dor da transição.`,fachada:`Seguindo a mesma linha de integridade desde 1940, nossa fachada representa um legado de dedicação. Sua estrutura foi pensada 
              para garantir a discrição e o respeito solene que sua família merece, honrando a história que construímos ao longo dos anos.`,veiculos:`Contamos com uma frota moderna e própria composta por três veículos, oferecendo um serviço de transporte disponível 24h para 
                garantir que cada detalhe do traslado seja conduzido com agilidade e proteção absoluta.`,interior:`Nosso espaço interno reflete um acolhimento autêntico e rústico. Dispomos de um amplo mostruário de urnas no local, facilitando 
                a escolha da família em um ambiente espaçoso e naturalmente ventilado, focado na funcionalidade e no respeito ao momento.`};function v(a){const o=document.querySelector(a);o&&(o.innerHTML=`
        <div class="banner">
            <h1>${t.titulo}</h1>
            <p>${t.subtitulo}</p>
        </div>

        <article class="conteudo-descritivo">
            <h2>Nossa História</h2>
            <p>${t.historia}</p>

            <h2>Compromisso e Tradição</h2>
            <p>${t.missao}</p>

            <div class="bloco-anuncio">
                <h2>Tradição que Acolhe</h2>
                <p>${t.fachada}</p>
                <img src="${p}" alt="Fachada" class="img-sobre-projeto">
            </div>

            <div class="bloco-anuncio">
                <h2>Prontidão e Segurança</h2>
                <p>${t.veiculos}</p>
                <img src="${f}" alt="Veículos" class="img-sobre-projeto">
            </div>

            <div class="bloco-anuncio">
                <h2>O Conforto da Serenidade</h2>
                <p>${t.interior}</p>
                <img src="${h}" alt="Interior" class="img-sobre-projeto">
            </div>
        </article>
    `)}const n="/Funeraria_21_De_Abril/assets/gmail-CTbYwguu.jpg",g="/Funeraria_21_De_Abril/assets/whatsapp-BSEvifw2.jpg";function b(a){const o=document.querySelector(a);o&&(o.innerHTML=`
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
            <a href="tel:+558136581163">(81) 3658-1163</a>
          </p>
          <p>
            <img src="${g}" alt="WhatsApp" class="icone-contato" />
            <a href="https://wa.me/5581999262736" target="_blank" class="link-whatsapp">
              +55 (81) 9 9926-2736
            </a>
          </p>
        </div>

        <div class="info-bloco">
          <h3>E-mails</h3>
          <p>
            <img src="${n}" alt="E-mail" class="icone-contato" />
            <a href="mailto:paulofernandocb@hotmail.com">paulofernandocb@hotmail.com</a>
          </p>
          <p>
            <img src="${n}" alt="E-mail" class="icone-contato" />
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
  `)}v("#sobre");u(".grid-servicos");b("#contato");const d=document.querySelectorAll(".tab-link"),y=document.querySelectorAll(".aba-conteudo");function l(a,o=!1){d.forEach(e=>e.classList.remove("active")),y.forEach(e=>{e.classList.remove("active"),e.classList.remove("fade-in")});const s=document.querySelector(`.tab-link[data-alvo="${a}"]`),i=document.getElementById(a);!s||!i||(s.classList.add("active"),i.classList.add("active"),i.classList.add("fade-in"),o&&i.scrollIntoView({behavior:"smooth",block:"start"}))}d.forEach(a=>{a.addEventListener("click",()=>{const o=a.getAttribute("data-alvo");o&&l(o,!1)})});function q(){document.querySelectorAll(".card-servico").forEach(o=>{o.addEventListener("click",s=>{s.preventDefault(),l("contato",!0)})})}setTimeout(()=>{q()},100);
