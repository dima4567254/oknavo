$('.header__btn, .menu a, .menu__button').on('click', function () {
    $('.header__menu, .header__btn').toggleClass('active');
    // открыть меню и закрыть меню
    // что бы закрывалось меню после выбора сcылки
    // убирает кнопку
    // убирает класс с кнопки
});

$(function () {
    let header = $('.header');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            header.addClass('header-fixed');
        } else {
            header.removeClass('header-fixed');
        }
    });
});

$(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    tops = top - 80;
    $('body,html').animate({ scrollTop: tops }, 1500);
});

$('.gallery__items').slick({
    slidesToShow: 3,  
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

// дотсы
$(".gallerys--overlay").slick({
    dots: true,
    prevArrow: '<button type="button" aria-label="Previous" role="button" class="slick-arrow slick-arrow--prev">Prev</button>',
    nextArrow: '<button type="button" aria-label="Next" role="button" class="slick-arrow slick-arrow--next">Next</button>',
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

// слик
$(".trust__slider").slick({
    dots: true,
    slidesToShow: 3,  
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
    },
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            // 480
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

const modalWindow = document.querySelector('.modal');
let elements = document.querySelectorAll('.modal-window');

for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
    elements[i].addEventListener('click', function () {  /*при клике на элемент */
        if (modalWindow.classList.contains('modal-open')) {
            modalWindow.classList.remove('modal-open');
        } else {
            modalWindow.classList.add('modal-open');
        }
        document.onkeydown = function (event) {
            if (event.keyCode == 27) {
                modalWindow.classList.remove('modal-open');
            }
        }
    })
}

// close modal
$('.modal').click(function () {
    var select = $('.modal__form');
    if ($(event.target).closest(select).length)
        return;
    $('.modal').toggleClass('modal-open');
    $(document).unbind('click');
    event.stopPropagation();
});