
// form 
function isValidForm(form) {
    isValid = true;
    var REX_IS_NUMBER = new RegExp('^[0-9]*$');
    var REX_LOWERCASE = new RegExp('(?=.*[a-z])');
    var REX_UPPERCASE = new RegExp('(?=.*[A-Z])');
    var REX_NUMBER = new RegExp('(?=.*[0-9])');
    var REX_SPECIAL = new RegExp('(?=.[!@#\$%\^&])');
    var REX_INTERGER = new RegExp('^[0-9]*$');
    var REX_PHONE = new RegExp('^(0|84)[0-9]*$');
    var REX_EMAIL = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var REX_URL = new RegExp(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i);


    form.forEach(function (input) {
        var value = $(input.name).val();
        input.validators.forEach(function (validator) {
            switch (validator) {
                case 'required':
                    if (value === '') {
                        isValid = false;
                    }
                    break;
                case 'isNumber':
                    if (REX_IS_NUMBER.test(value) === false) {
                        isValid = false;
                    }
                    break;
                case 'min':
                    if (+value < input.min) {
                        isValid = false;
                    }
                    break;
                case 'max':
                    if (+value > input.max) {
                        isValid = false;
                    }
                    break;
                case 'minLength':
                    if (value.length < input.minLength) {
                        isValid = false;
                    }
                    break;
                case 'maxLength':
                    if (value.length > input.maxLength) {
                        isValid = false;
                    }
                    break;
                case 'email':
                    if (REX_EMAIL.test(value) === false) {
                        isValid = false;
                    }
                    break;
            }
        });
    });

    return isValid;
}
function validateForm($submit, form) {

    function updateView() {
        $($submit).attr("disabled", !isValidForm(form));
    }

    var arrElement = [];
    form.forEach(function (element) {
        arrElement.push(element.name);
    });

    $(arrElement.join(",")).on("change keyup", function () {
        updateView();
    });
    updateView();
}


let MenuToggleMB = function () {
    $('.header-menu__mb').click(function () {
        $(this).toggleClass('active')
        $('.header-menu__nav').toggleClass('active')
    })
}

function goToByScroll(link) {

    let space = 0
    switch (link) {
        case 'dangky':
            space = -100
            break;
        case 'lienhe':
            space = 800
            break;
        default:
            space = 70
            break;
    }

    $('html,body').animate({
        scrollTop: $("#" + link).offset().top + space,
    }, 'slow');

    $('.header-menu__mb').removeClass('active')
    $('.header-menu__nav ').removeClass('active')

}

let Menu = function () {

    // on click menu header 
    $('.header-menu__nav a').click(function (e) {

        let isBlock = $(this).attr('href').indexOf('#')

        if (isBlock != -1) { //true : is block

            e.preventDefault();

            let link = $(this).attr('link')

            $('.header-menu__nav a').removeClass('active');
            $('.header-menu__nav a[link="' + link + '"]').addClass('active');


            if (link != '' && link != undefined) {
                goToByScroll(link);
            }
        }

    })
}

let Home5ValidateForm = function () {
    var form = [{
        name: '.home5Name',
        validators: ['required']
    }, {
        name: '.home5Phone',
        validators: ['required', 'isNumber'],
        // minLength: 10,
        // maxLength: 10,
    }, {
        name: '.home5Email',
        validators: []
    }]
    var $submit = ".home5__form button";
    validateForm($submit, form);
}

let GotoForm = function () {
    $('#home2_to_form').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $(".home5").offset().top - 150
        }, 1000);
    });
}

let MenuScrollFixed = function () {
    let headerHeight = $('.header').height()
    let windowHeight = $(window).scrollTop()
    if (windowHeight > (headerHeight + 10)) {
        $('.header').addClass('fixed')
    } else {
        $('.header').removeClass('fixed')
    }
}


// home 
$(".block1__slider .block1__img").hide()
$(".block1__slider .block1__img:first-child").show()
let sliderBlock1 = function () {
    if ($(".block1__slider").length === 0) {
        return false
    }

    $(".block1__slider .block1__img").show()
    $(".block1__slider").not('.slick-initialized').slick({
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    });
}

let sliderBlock3 = function () {
    if ($(".block3__tab-slider").length === 0) {
        return false
    }

    $(".block3__tab-slider").not('.slick-initialized').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        centerMode: true,
        slidesToScroll: 1,
        infinite: true,
    });
}
let sliderBlock4 = function () {
    if ($(".block4__slider").length === 0) {
        return false
    }

    $(".block4__slider").not('.slick-initialized').slick({
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $('.block4 .slick-prev'),
        nextArrow: $('.block4 .slick-next'),
    });
}
let sliderBlock5 = function () {
    if ($(".block5__slider").length === 0) {
        return false
    }

    $(".block5__slider").not('.slick-initialized').slick({
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $('.block5 .slick-prev'),
        nextArrow: $('.block5 .slick-next'),
    });
}
let sliderBlock6 = function () {
    if ($(".block6__slider").length === 0) {
        return false
    }

    $(".block6__slider").not('.slick-initialized').slick({
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $('.block6 .slick-prev'),
        nextArrow: $('.block6 .slick-next'),
    });
}
let sliderBlock8 = function () {
    if ($(".block8__slider").length === 0) {
        return false
    }

    $(".block8__slider").not('.slick-initialized').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        prevArrow: $('.block8 .slick-prev'),
        nextArrow: $('.block8 .slick-next'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
        ]
    });
}

$(window).on("load", function () {
    // common 
    $('.loading').removeClass('active')
    new WOW().init();
    MenuToggleMB()
    GotoForm()
    Menu()


    // slider on tab 
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        if ($(".product2__item").length > 1) {
            $(".product2__slider").slick('resize');
        }
    })

    // goto block when onLoad 
    let temp = location.href.indexOf('#')
    if (temp != -1) {
        let link = location.hash.split('#')[1];
        goToByScroll(link);

        setTimeout(function () {
            $('.header-menu__nav a').removeClass('active');
            $('.header-menu__nav a[link=' + link + ']').addClass('active');
        }, 1000)
    }


    sliderBlock1()
    sliderBlock3()
    sliderBlock4()
    sliderBlock5()
    sliderBlock6()
    sliderBlock8()

    Home5ValidateForm()
});



var sections = $('section')
    , nav_text = $('.header-menu__nav')
    , nav_height = nav_text.outerHeight();

let activeMenuOnScroll = function () {
    var cur_pos = $(this).scrollTop();
    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav_text.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav_text.find('a[link="' + $(this).attr('id') + '"]').addClass('active');
        }
    });
}

$(window).on("scroll", function () {

    // fixed menu 
    MenuScrollFixed()

    // active menu 
    activeMenuOnScroll()

});

$(window).on("resize", function () { });