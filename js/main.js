$(document).ready(function () {

  // Spinner Loading

  $(window).on("load", function () {

    $(".loading-overlay").fadeOut();

    $("body").css("overflow", "auto")


  })

  // change header height

  $('.header').height($(window).height());

  // adjust header-nav

  $('.nav-button').click(function () {

    $(this).toggleClass('visable')

    if ($(this).hasClass('visable')) {

      $('.line:first-child').css({
        "transform": "rotate(45deg)",
        "margin-bottom": "0"
      })

      $('.line:last-child').css({
        "transform": "rotate(-45deg)",
        "margin-bottom": "0"
      })

      $('.header-nav').css({
        "transform": "perspective(200px) rotateX(0deg) scale(1.0)",
        "opacity": "1",
        "visibility": "Visible"

      })

    }

    else {

      $('.line:first-child').css({
        "transform": "rotate(0deg)",
        "margin-bottom": "5px"
      })

      $('.line:last-child').css({
        "transform": "rotate(0deg)",
      })

      $('.header-nav').css({
        "transform": "perspective(200px) rotateX(-15deg) scale(0.75)",
        "opacity": "0",
        "visibility": "hidden"

      })
    }
  })

  // navbar

  $('.navigation a , .nested-nav a , .header-title a').click(function (e) {

    e.preventDefault();

    // change background and tittle

    var bg = $(this).data('bg');

    var text = $(this).data('text');

    $(".bg").css("background-image", "url(" + bg + ")");

    $('.fixed-title h1').text(text)

    // smoth scroll to element

    $('html,body').animate({

      scrollTop: $('#' + $(this).data('scroll')).offset().top - 20

    }, 1000)
  });

  // add active class on navbar

  $('.navbar-nav li a').click(function () {

    $(this).addClass('active').parent().siblings().find('a').removeClass('active')

  })

  // sync links & background with it's section

  $(window).scroll(function () {

    $('.block').each(function () {

      if ($(window).scrollTop() > $(this).offset().top - 130) {

        var blockID = $(this).attr('id');

        $('.navigation a').removeClass('active')

        $('.navigation a[data-scroll="' + blockID + '"]').addClass('active');

      }
    });

    if ($('.navigation a').hasClass('active'))

      $('.navigation a.active').each(function () {

        var bg = $(this).data('bg');

        var text = $(this).data('text');

        $(".bg").css("background-image", "url(" + bg + ")");

        $('.fixed-title h1').text(text)

      })


  })

  // calling counter plugin

  $('.timer').countTo()

  // show the inner achivement
  $(function () {

    $('.achiv-inner').first().animate({
      height: '100%'
    });

    $('.achiv-head').click(function () {

      $(this).next().show().animate({ height: '100%' }, 600).siblings(".achiv-inner").animate({ height: 0 }, 500)

    });
  });

  // slider service

  var sliderItem = $('.slider-item').length

  var itemWidth = $('.slider-item').width()

  $('.slider-stage').css("width", sliderItem * itemWidth + sliderItem * 18 + "px")

  $('.service .right').click(function () {

    $('.slider-stage').css("transform", "translateX( -" + itemWidth + "px)")

  })

  $('.service .left').click(function () {

    $('.slider-stage').css("transform", "translateX(0px)")

  })

  // Modal Img

  var modal = $("#myModal"),

    modalImg = $("#img01"),

    icon = $(".inner-hover .fa-arrows-alt-v");

  icon.click(function () {

    modal.css({

      "opacity": "1",

      "visibility": "visible"

    });

    modalImg.attr("src", $(this).data("src"));

  });

  // close modal

  modal.click(function () {

    modal.css({

      "opacity": "0",

      "visibility": "hidden"

    });

  });

  // stopPropagation at modalImg

  modalImg.click(function (e) {

    e.stopPropagation();
  })

  // Animated Progress

  $(window).scroll(function () {

    if ($(window).scrollTop() >= $('.service').offset().top + 520) {

      $('.progress span').each(function () {

        $(this).animate({

          width: $(this).data('progress')

        }, 1500)

      })

      $('.skill-bar-title .perc').each(function () {

        $(this).animate({

          left: $(this).data('perc')

        }, 1500)

      })

    }

  })

  // clints Slider


  var slide = $(".slide"),

    slideWidth = slide.width(),

    i = 0;

  $(".slides").css("width", slideWidth * slide.length)

  $(".clints .right").click(function () {

    if (i < slide.length - 1) i++

    else if (i == slide.length - 1) i = 0

    slide.eq(0).css("margin-left", "-" + i * slideWidth + "px")

  })

  $(".clints .left").click(function () {

    if (i == 0) i = slide.length - 1

    else if (i > 0) i--

    slide.eq(0).css("margin-left", "-" + i * slideWidth + "px")

  })


});