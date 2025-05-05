document.addEventListener("DOMContentLoaded", function() {
    const menuItems = [
      { texto: "Localização", link: "../02_LOCALIZACAO/index.html" },
      { texto: "Preços", link: "../03_PRECOS/index.html" },
      { texto: "Sobre", link: "../04_SOBRE/index.html" },
      { texto: "Contato", link: "../05_CONTATO/index.html" }
    ];

    const desktopMenu = document.getElementById("menu-desktop");
    const mobileMenu = document.getElementById("mobile-demo");

    menuItems.forEach(item => {
      const liDesktop = document.createElement("li");
      const aDesktop = document.createElement("a");
      aDesktop.href = item.link;
      aDesktop.textContent = item.texto;
      liDesktop.appendChild(aDesktop);
      desktopMenu.appendChild(liDesktop);

      const liMobile = liDesktop.cloneNode(true); 
      mobileMenu.appendChild(liMobile);
    });

    const elems = document.querySelectorAll('.button-collapse');
    M.Sidenav.init(elems);
  });

$(document).ready(function() {
  var totalImages = 9;
  var carousel = $('#carousel');
  for (var i = 1; i <= totalImages; i++) {
      carousel.append('<img src="./img/' + i + '.jpg" alt="VALCILDA ' + i + '">');
  }

  $('#carousel img:eq(0)').addClass("ativo").show();

  setInterval(slideFunction, 3000);

  function slideFunction() {
      var currentImage = $('.ativo');
      var nextImage = currentImage.next();

      if (nextImage.length) {
          currentImage.fadeOut().removeClass("ativo");
          nextImage.fadeIn().addClass("ativo");
      } 
      else {
          currentImage.fadeOut().removeClass("ativo");
          $('#carousel img:eq(0)').fadeIn().addClass("ativo");
      }
  }
});

$(document).ready(function(){
    $(".button-collapse").sideNav(); 
    $('.slider').slider();     
});  

const dataNascimentoStr = "09/10/1976"; 
function calcularIdade(dataNascimentoStr) {
  const [dia, mes, ano] = dataNascimentoStr.split("/").map(Number);
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const dataAniversarioEsteAno = new Date(anoAtual, mes - 1, dia); 

  let idade = anoAtual - ano;
  if (hoje < dataAniversarioEsteAno) {
    idade -= 1;
  }

  return idade;
}

document.addEventListener("DOMContentLoaded", () => {
  const idade = calcularIdade(dataNascimentoStr);
  document.getElementById("idade").textContent = idade;
});