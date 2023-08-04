

const trustCasey = new Swiper('.trustCasey', {
    slidesPerView: 3,
    loop: true,
    loopedslides: 3,
    centeredSlides: true,
    // spaceBetween: 30,
    // slidesPerView: 2,
    // grid: {
    //     rows: 2,
    // },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {

    //     // 1200: {
    //     //     slidesPerView: 4,
    //     // },

    //     // 992: {
    //     //     slidesPerView: 3,

    //     // },

    //     769: {
    //         slidesPerView: 2,
    //     },

    //     578: {
    //         slidesPerView: 1,
    //     },
    // },
});
const galleryCasey = new Swiper('.galleryCasey', {
    slidesPerView: 3,
    loop: true,
    loopedslides: 1,
    // centeredSlides: true,
    // spaceBetween: 30,
    // slidesPerView: 2,
    // grid: {
    //     rows: 2,
    // },
    autoplay: {
        delay: 5000,
    },

    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    // breakpoints: {

    //     // 1200: {
    //     //     slidesPerView: 4,
    //     // },

    //     // 992: {
    //     //     slidesPerView: 3,

    //     // },

    //     769: {
    //         slidesPerView: 2,
    //     },

    //     578: {
    //         slidesPerView: 1,
    //     },
    // },
});


// $('.menu__btn, .menu a').on('click', function () {
//     $('.menu__btn,.menu__items').toggleClass('menu__items--active');
//     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
// });

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

