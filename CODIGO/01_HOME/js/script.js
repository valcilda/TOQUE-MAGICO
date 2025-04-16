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
  
$(document).ready(function(){
    $(".button-collapse").sideNav(); 
    $('.slider').slider();     
});  

document.getElementById("idade").textContent = new Date().getFullYear() - 1976;
