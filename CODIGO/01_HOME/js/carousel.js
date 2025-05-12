$(document).ready(function () {
    $(".button-collapse").sideNav();
    $(".slider").slider();

    var totalImages = 9;
    var carousel = $("#carousel");
    for (var i = 1; i <= totalImages; i++) {
        carousel.append('<img src="./imagens/valcilda/' + i + '.jpg" alt="VALCILDA ' + i + '">');
    }

    $("#carousel img:eq(0)").addClass("ativo").show();

    setInterval(slideFunction, 3000);

    function slideFunction() {
        var currentImage = $(".ativo");
        var nextImage = currentImage.next();

        if (nextImage.length) {
            currentImage.fadeOut().removeClass("ativo");
            nextImage.fadeIn().addClass("ativo");
        } 

        else {
            currentImage.fadeOut().removeClass("ativo");
            $("#carousel img:eq(0)").fadeIn().addClass("ativo");
        }
    }
});