function addClass(className) {
    document.documentElement.classList.add(className);
}
var avif = new Image();
avif.src =
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
avif.onload = function () {
    addClass("avif");
};
avif.onerror = function () {
    check_webp_feature(function (isSupported) {
        if (isSupported) {
            return addClass("webp");
        }
        return addClass("fallback");
    });
};
function check_webp_feature(callback) {
    var img = new Image();
    img.onload = function () {
        var result = img.width > 0 && img.height > 0;
        callback(result);
    };
    img.onerror = function () {
        callback(false);
    };
    img.src =
        "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
}

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

$(".menu a, .scroll a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    tops = top - 80;
    $('body,html').animate({ scrollTop: tops }, 1500);
});

$('a[href="' + this.location.pathname + '"]').parent().addClass('header-fixed');
// что бы класс не пропадал

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

const popupLinks = document.querySelectorAll('.modal-window');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");
const popupCloseIcon = document.querySelectorAll('.close-popup');
let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.modal'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.modal.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.modal__inner')) {
                popupClose(e.target.closest('.modal'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);

}
function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.modal.open');
        popupClose(popupActive);
    }
});