$(document).ready(function(){
    $("#logotipo").on("mouseenter",function(){
        $("#banner h1").addClass("efeito");
    }).on("mouseout",function(){
        $("#banner h1").removeClass("efeito");
    });

    $("#input-search").on("focus", function(){
        $("li.search").addClass("ativo");
    }).on("blur", function(){
        $("li.search").removeClass("ativo");
    });

    $(".thumbnails").owlCarousel({
        loop: true,
        // margin: 20,
        // nav: true,
        // navText: ["Anterior","Próximo"],
        responsive: {
            0:{
                item: 1
            },
            
            480:{
                item: 3
            },

            768:{
                item: 4
            },

            1200:{
                item: 6
            }


        }
    });
});