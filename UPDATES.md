# [ATUALIZAÇÕES:](./UPDATES.md#vers%C3%A3o-10---23102023)
## VERSÃO 2.0 - 14/05/2025:
* ✅ Foi adicionada ao site a funcionalidade de prévia de link com título, foto e descrição, permitindo que ao compartilhar o link em redes sociais como WhatsApp, Facebook e Telegram, uma visualização personalizada com informações relevantes e imagem de destaque seja exibida automaticamente. Confira você mesmo! Compartilhe este link em suas redes sociais e veja a prévia personalizada com título, imagem e descrição em ação. Veja:

```
https://valcilda.github.io/TOQUE-MAGICO/index.html
```

---
## VERSÃO 1.9 - 12/05/2025:
* ✅ **Mudanças na página `HOME`**:
    * 🔸 **Fragmentação do JavaScript:** Anteriormente, todo o código JavaScript estava concentrado em um único arquivo: `script.js`. Agora, cada funcionalidade foi separada em arquivos específicos, como: `carousel.js`, `idade.js`, `menu.js` e `validacao.js`.
    * 🔸 **Reorganização completa das imagens:** Antes, as imagens estavam espalhadas em diferentes pastas como `imagens`, `img` e `fotos`, o que dificultava a identificação e o uso. Agora, todas foram renomeadas de forma sequencial (`01.jpg`, `02.jpg`...) e organizadas em diretórios adequados, conforme referenciados no `index.html`, como: `imagens/slides`, `imagens/mercadorias`, `imagens/valcilda` e `imagens/footer`.
* ✅ **Correções de bugs e melhorias gerais foram aplicadas.**
---

## VERSÃO 1.8 - 06/05/2025:
* ✅ **Foi adicionado o arquivo `404.html`**: Se alguém tentar acessar uma URL antiga que não existe mais, será exibida uma página personalizada de erro com a mensagem explicativa e um botão `VOLTAR` para retornar ao site.
* ✅ **Foi adicionado validação de `https`**: Para garantir que os usuários acessem o site corretamente através da página de `ANÚNCIO`, foi implementado um sistema de validação em JavaScript. Esse sistema verifica se o visitante chegou até a página atual por meio da URL específica do `ANÚNCIO`. Se for detectado que o usuário acessou diretamente uma página (ou seja, sem passar pelo `ANÚNCIO`), o site oculta todo o conteúdo usando CSS (`display: none`) e exibe um alerta informando a tentativa de acesso irregular. Em seguida, o usuário é automaticamente redirecionado para a página inicial. A liberação do conteúdo da página só acontece se o script (`validacao.js`) confirmar que o acesso veio de um caminho autorizado.
---

## VERSÃO 1.7 - 05/05/2025:
* ✅ Na página *Home*, o estilo das fontes foi inserido, e o botão **"COMPRAR"** agora se destaca com um visual mais atrativo.
* ✅ Na seção *SOBRE A VALCILDA*: a idade agora é atualizada com base no **dia, mês e ano de nascimento**.
---

## VERSÃO 1.6 - 22/04/2025:
* ✅ Mudança no `header -> menu`: A alteração implementada cria dinamicamente os itens do menu usando JavaScript, preenchendo tanto o menu desktop quanto o móvel a partir de um único conjunto de dados. Isso elimina a duplicação de código HTML, tornando o código mais eficiente e fácil de manter.
* ✅ A atualização no container de imagens `SOBRE A VALCILDA` transformou o antigo layout de foto estática em um carrossel dinâmico de imagens. Agora, em vez de exibir uma única imagem fixa, o carrossel apresenta uma sequência de fotos que se alternam automaticamente a cada 3 segundos. 
---

## VERSÃO 1.5 - 15/04/2025:
* ✅ **Atualizações nos Anúncios:**
  * 🔸 O banner do anúncio foi **redesenhado**, com destaque para a imagem incorporada diretamente no contêiner principal e a exibição do seu próprio `favicon`.
  * 🔸 O anúncio agora conta com uma **contagem regressiva de 10 segundos** antes que o botão de fechar (`X`) seja ativado. Durante esse período, o botão permanece desabilitado.
  * 🔸 Ao clicar em **qualquer área da imagem** (ou no contêiner `.content`), o link do `anúncio` será aberto — com o mesmo efeito do botão `SAIBA MAIS`.
---

## VERSÃO 1.4 - 07/04/2025:
* ✅ Como este site foi feito gratuitamente para minha mãe, adicionei um `modal` com o anúncio da minha página de `Freelancer`, que será exibido após o `spinner` de carregamento. Para acessar a `HOME`, basta clicar no botão `X`.
* ✅ Foi adicionado um botão de `CONTATO`, permitindo que os clientes entrem em contato diretamente com a `VALCILDA`, sem mensagem `predefinida`. Esse recurso foi implementado utilizando o `POP MODAL`.
---

## VERSÃO 1.3 - 27/03/2025:
* ✅ **Novo Layout Redesigned**: Todo o design foi redesenhado com um visual moderno e atraente, utilizando o *MaterializeCSS*, proporcionando uma interface mais clean, intuitiva e responsiva para todos os dispositivos.

* ✅ **Novas Seções**:
    * 🔸 [**Home**:](https://github.com/VILHALVA/SITE-DE-MATERIALIZECSS) A página "Home" que você compartilhou é a página principal de um site chamado "TOQUE MÁGICO". Ela foi criada utilizando HTML e a biblioteca Materialize para garantir um design responsivo e moderno. A estrutura inclui:

        1. **Cabeçalho (Header)**: Contém um menu de navegação com links para páginas de "Localização", "Preços" e "Sobre". O logo "TOQUE MÁGICO" está presente, e o menu é adaptável para dispositivos móveis.

        2. **Slider**: Uma galeria de imagens com legendas que destacam os produtos e serviços, como adesivos exclusivos, materiais de alta qualidade e acessórios.

        3. **Principais Mercadorias**: Exibe três produtos destacados - películas, adesivos e pedrarias - com links de compra via WhatsApp.

        4. **Mais Vendidos**: Uma lista de produtos populares com imagens, títulos e breves descrições. Esses produtos são mostrados em uma coleção de itens que ajudam a atrair o interesse dos visitantes.

        5. **Sobre a Valcilda**: Uma seção sobre a empreendedora Valcilda Martins das Neves, com uma foto e uma descrição de seu negócio e sua paixão por oferecer acessórios exclusivos para unhas.

        6. **Rodapé (Footer)**: Links para as redes sociais de Valcilda, como Facebook, Instagram, WhatsApp e GitHub, além de um crédito de criação para "VILHALVA".

    * 🔸 **Localização**: Agora ficou ainda mais simples encontrar o nosso endereço e chegar até nós! Criamos uma seção de **Localização** no nosso site, onde você pode ver todas as informações necessárias para nos visitar, incluindo: **Endereço Completo e Coordenadas Geográficas**:  
    Agora, também fornecemos a **latitude** e **longitude** exatas para que você possa nos localizar com precisão. Além disso, para facilitar ainda mais a sua visita, incluímos um link direto para o **Google Maps**, onde você pode visualizar a localização interativamente e traçar a melhor rota até o nosso endereço. Clique no botão **VER NO GOOGLE MAPS** e abra o mapa diretamente no seu navegador. E se precisar voltar, temos um botão de **voltar** fácil de acessar, permitindo que você retorne à página anterior com um simples clique.
    * 🔸 **Preços**: Agora, em nosso site, você pode conferir facilmente todos os **produtos** que oferecemos, com uma tabela organizada e de fácil visualização. Para sua comodidade, dividimos os preços em duas seções:

        1. **Preços Regulares**: Onde você encontra os produtos com seus valores detalhados.
        2. **Preços no Atacado**: Uma seção especial para compras em maior quantidade, oferecendo condições exclusivas para compras acima de um valor específico.

        Além disso, incluímos um botão para **voltar** à página anterior, facilitando a navegação no site.

    * 🔸 [**Sobre**:](https://github.com/VILHALVA/COLLAGE-ARTISTICA) Na nossa página "Sobre", você descobrirá mais sobre o **projeto "Acessórios para Adesivos de Unhas"**, criado para trazer soluções inovadoras e facilitar a aplicação de adesivos de unhas. O projeto tem como objetivo transformar essa tarefa em uma experiência prática, rápida e profissional, proporcionando ferramentas especializadas para todos os que buscam qualidade e eficiência. Além disso, incluímos uma galeria de imagens inspiradoras dos materiais que utilizamos, oferecendo uma visão do que está por trás dos nossos produtos. A navegação é intuitiva e você pode facilmente retornar à página anterior com um clique em **"Voltar"**.
---

## VERSÃO 1.2 - 26/03/2025:
* ✅ O arquivo `UPDATES.md` foi lançado.  
* ✅ Todos os arquivos foram reorganizados em seus respectivos diretórios: `./CODIGO/01_HOME`, `./CODIGO/02_PRECOS`, `./CODIGO/03_CARROCEL` e `./CODIGO/04_PORTFOLIO`.  
* ✅ O arquivo `./index.html` foi criado e renomeado exclusivamente para redirecionamento à página inicial do site.  
* ✅ Como o arquivo principal foi renomeado de `INDEX.html` para `index.html`, a URL do site foi alterada para [https://valcilda.github.io/TOQUE-MAGICO/index.html](https://valcilda.github.io/TOQUE-MAGICO/index.html).  
* ✅ Todos os links externos agora abrem em uma nova aba com `target="_blank"`.
* ✅ Foram adicionadas imagens locais ao `FOOTER`, exibidas no rodapé das redes sociais na página inicial. 
* ✅ Correções de bugs e pequenas melhorias implementadas.  
---

## VERSÃO 1.1 - 16/11/2023:
* ✅ Foi adicionado um menu de cabeçalho no início, com diversas opções de navegação.  
* ✅ A página de slides foi criada, apresentando as 10 melhores fotos utilizando Bootstrap.  
* ✅ A nova página de tabelas foi adicionada, tornando-as responsivas. Com isso, a tabela de preços foi removida da página inicial.  
* ✅ Foi criada a página de portfólio, semelhante à página inicial, porém com um novo design.  
* ✅ Correções de bugs e pequenas melhorias implementadas.  
---

## VERSÃO 1.0 - 23/10/2023:
* ✅ No dia 23/10/2023, criei um site para minha mãe – uma página dedicada ao portfólio do trabalho dela. Fiz isso gratuitamente, mas, caso fosse para outra pessoa, cobraria R$ 500. Utilizei apenas HTML e CSS e hospedei o site em um serviço gratuito.
