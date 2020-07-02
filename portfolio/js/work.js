$(document).ready(function(){

    // Spinner Loading

    $(window).on("load" , function(){

        $(".loading-overlay").fadeOut();

        $("body").css("overflow","auto")
        

    })

    // adjust header-nav

    $('.nav-button').click(function(){

        $(this).toggleClass('visable')

        if ($(this).hasClass('visable')) {

            $('.line:first-child').css({
            "transform" : "rotate(45deg)" ,
            "margin-bottom" : "0"
        })

            $('.line:last-child').css({
                "transform" : "rotate(-45deg)" ,
                "margin-bottom" : "0"
            })

            $('.header-nav').css({
                "transform" : "perspective(200px) rotateX(0deg) scale(1.0)" ,
                "opacity" : "1",
                "visibility": "Visible"
                
            })

        }

        else{

            $('.line:first-child').css({
                "transform" : "rotate(0deg)" ,
                "margin-bottom" : "5px"
            })
    
            $('.line:last-child').css({
                "transform" : "rotate(0deg)" ,
            })

            $('.header-nav').css({
                "transform" : "perspective(200px) rotateX(-15deg) scale(0.75)" ,
                "opacity" : "0",
                "visibility": "hidden"
                
            })
        }
    })

    // add active class on navbar

    $('.navbar-nav li a').click(function(e){

        e.preventDefault()

        $(this).addClass('active').parent().siblings().find('a').removeClass('active')

    })

    // Modal Img

    var modal = $("#myModal") ,

        modalImg = $("#img01") ,

        icon = $(".hover-elem .arrow") ;

    icon.click(function(){

        modal.css({
            "opacity" : "1",

            "visibility" : "visible"

        });

        modalImg.attr("src" , $(this).data("src"));
        
    });
    
    // close modal

    modal.click(function(){

        modal.css({

            "opacity" : "0",

            "visibility" : "hidden"

        });

    });

    // stopPropagation at modalImg

    modalImg.click(function(e){

        e.stopPropagation();
    })


    // filter

    $(".work-filter a").click(function(){

        var value = $(this).data("filter");

        if(value == "all"){

            $(".box img").fadeIn();

        }
        else{

            $(".box img").not("." + value).fadeOut()

            $(".box img").filter("." + value).fadeIn()

        }

    })

})