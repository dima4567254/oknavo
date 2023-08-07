

// для плайсхолдера
// // let buttonModal4 = document.querySelector('.form__input');
// let buttonModal4 = document.querySelector('.form__input');
// let attr = buttonModal4.getAttribute("data-mask");
// console.log(attr);


// 00: 25: 48.958 с
var $pagingInfo = $('.paging-info');
var $teamSlider = $('.team-slider');

$teamSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    var prefix = i < 10 ? '0' : '';
    var prefixAll = slick.slideCount < 10 ? '0' : '';
    $pagingInfo.html('<span class="current">' + prefix + i + '</span>' + '' + '<span class="total">' + prefixAll + slick.slideCount + '</span>');
});


// buttonModal4.addEventListener('click', () => {
//     // var el = document.getElementById("username");
//     buttonModal4.placeholder = "+38 (___) ___-__-__";
// });

// function newAtt() {
//     var el = document.getElementById("username");
//     el.placeholder = "newAttr";
// };

// const trustCasey = new Swiper('.trustCasey', {
//     slidesPerView: 3,
//     loop: true,
//     loopedslides: 3,
//     centeredSlides: true,
//     // spaceBetween: 30,
//     // slidesPerView: 2,
//     // grid: {
//     //     rows: 2,
//     // },
//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     // breakpoints: {

//     //     // 1200: {
//     //     //     slidesPerView: 4,
//     //     // },

//     //     // 992: {
//     //     //     slidesPerView: 3,

//     //     // },

//     //     769: {
//     //         slidesPerView: 2,
//     //     },

//     //     578: {
//     //         slidesPerView: 1,
//     //     },
//     // },
// });
// const galleryCasey = new Swiper('.galleryCasey', {
//     slidesPerView: 3,
//     loop: true,
//     loopedslides: 1,
//     // centeredSlides: true,
//     // spaceBetween: 30,
//     // slidesPerView: 2,
//     // grid: {
//     //     rows: 2,
//     // },
//     autoplay: {
//         delay: 5000,
//     },

//     navigation: {
//         nextEl: ".swiper-next",
//         prevEl: ".swiper-prev",
//     },
//     // breakpoints: {

//     //     // 1200: {
//     //     //     slidesPerView: 4,
//     //     // },

//     //     // 992: {
//     //     //     slidesPerView: 3,

//     //     // },

//     //     769: {
//     //         slidesPerView: 2,
//     //     },

//     //     578: {
//     //         slidesPerView: 1,
//     //     },
//     // },
// });


$('.header__btn, .menu a').on('click', function () {
    $('.header__menu ').toggleClass('header__menu--active');
    // для крестика и для меню и что бы закрывалось меню после выбора сcылки
});
$('.header__btn').on('click', function () {
    $('.header__btn ').toggleClass('active');
    // для крестика и для меню и что бы закрывалось меню после выбора сcылки
});
$('.header__btn').on('click', function () {
    $('.header__btn ').toggleClass('close');
    // для крестика и для меню и что бы закрывалось меню после выбора сcылки
});
//
// ,
// $(function () {
//     let header = $('.header');

//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 690) {
//             header.addClass('header-fixed');
//         } else {
//             header.removeClass('header-fixed');
//         }
//     });
// });

// $(".menu a").on("click", function (event) {
//     event.preventDefault();
//     var id = $(this).attr('href'),
//         top = $(id).offset().top;
//     $('body,html').animate({ scrollTop: top }, 1500);
// });


/*	$(".menu a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    /*для закрыть меню*/
/*
          $('.menu__btn').on('click', function () {
              $('.menu__items').toggleClass('menu__items--active');
          });
          $('.menu__btn').on('click', function () {
              $('.menu__btn').toggleClass('active');
          });
       
        $('.home__slider').slick({
            dots: true,
            arrows: false,
             responsive: [


                 {
                     breakpoint: 1150,
                     settings: {
                         slidesToShow: 4,
                     }
                 },
                 {
                     breakpoint: 1000,
                     settings: {
                         slidesToShow: 3,
                     }
                 },
                 {
                     breakpoint: 620,
                     settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                     }
                 },
             ]
        });
       
       
       */
// Overlay
// $('.trust__items').slick({
//     // slidesToShow: 3,  /* количество слайдов на показ*/
//     // slidesToScroll: 1,
//     // centerMode: true,
//     // centerPadding: "15px",
// });

$('.gallery__items').slick({
    slidesToShow: 3,  /* количество слайдов на показ*/
    slidesToScroll: 1,
    // centerPadding: "15px",
    // centerMode: true,
    // prevArrow: '<button type="button" aria-label="Previous" role="button" class="slick-arrow slick-arrow--prev">Prev</button>',
    // nextArrow: '<button type="button" aria-label="Next" role="button" class="slick-arrow slick-arrow--next">Next</button>',
});
// дотсы
$(".gallerys--overlay .js-slick").slick({
    // variableWidth: true,
    dots: true,
    prevArrow: '<button type="button" aria-label="Previous" role="button" class="slick-arrow slick-arrow--prev">Prev</button>',
    nextArrow: '<button type="button" aria-label="Next" role="button" class="slick-arrow slick-arrow--next">Next</button>',
    // centerMode: true,
    // slidesToShow: 3,  /* количество слайдов на показ*/
    // slidesToScroll: 3,
    // centerPadding: "15%",
    customPaging: function (slider, i) {
        var current = i + 1;
        current = current < 10 ? "0" + current : current;

        var total = slider.slideCount;
        total = total < 10 ? "0" + total : total;

        return (
            '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
			<span class="slick-dots-current">' + current + '</span>\
			<span class="slick-dots-separator"></span>\
			<span class="slick-dots-total">' + total + '</span>\
		</button>'
        );
    }
});

// // Carousel
// слик
$(".gallerys--carousel .js-slick").slick({
    variableWidth: true,
    dots: true,
    slidesToShow: 3,  /* количество слайдов на показ*/
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: '<button type="button" aria-label="Prev" role="button" class="slick-arrow slick-arrow--prev">Prev</button>',
    nextArrow: '<button type="button" aria-label="Next" role="button" class="slick-arrow slick-arrow--next">NEXT</button>',
    customPaging: function (slider, i) {
        var current = i + 1;
        current = current < 10 ? "0" + current : current;

        var total = slider.slideCount;
        total = total < 10 ? "0" + total : total;

        return (
            '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
			<span class="slick-dots-current">' + current + '</span>\
			<span class="slick-dots-separator"></span>\
			<span class="slick-dots-total">' + total + '</span>\
		</button>'
        );
    }
});
