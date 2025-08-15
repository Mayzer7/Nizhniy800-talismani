var mobile = (/iphone|iemobile|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
var swiper_news = '';
if ($(".news-swiper").length > 0) {
    swiper_news = new Swiper('.news-swiper .swiper-container', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        nav: true,
        navigation: {
            nextEl: '.news-swiper .swiper-button-next',
            prevEl: '.news-swiper .swiper-button-prev',
        },
        breakpoints: {
            1280: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2,
            }
        },
        speed: 800
    });
} 
var swiper_events = '';
if ($(".swiper-container_events").length > 0) {
    swiper_events = new Swiper('.swiper-container_events', {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1500,
    
        loop: false,
        autoplay: {
            disableOnInteraction: true,
        },
        nav: true,
        navigation: {
            nextEl: '.swiper-navigation_events .swiper-button-next',
            prevEl: '.swiper-navigation_events .swiper-button-prev',
        }
    });
}
var swiperArticlesSymbol = !1;
$("#articlesNew-symbol").length > 0 && (
    swiperArticlesSymbol = new Swiper("#articlesNew-symbol", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 800,
        loop: false,
        autoplay: {
            disableOnInteraction: true,
        },
        nav: true,
        navigation: {
            nextEl: '.swiper-navigation_articles_symbol .swiper-button-next',
            prevEl: '.swiper-navigation_articles_symbol .swiper-button-prev',
        }
}));

if ($('.item_swiper_container .swiper-slide').length > 1) {
    var swiper_item = new Swiper('.item_swiper_container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        nav: true,
        navigation: {
            nextEl: '.item_swiper_container .swiper-button-next',
            prevEl: '.item_swiper_container .swiper-button-prev',
        },
    });
} else {
    $('.item_swiper_container .swiper-button-prev').remove();
    $('.item_swiper_container .swiper-button-next').remove();
}
if ($('.news2-item_gallery .swiper-slide').length > 1) {
    var swiper_item2 = new Swiper('.news2-item_gallery .swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        nav: true,
        navigation: {
            nextEl: '.news2-item_gallery .swiper-button-next',
                prevEl: '.news2-item_gallery .swiper-button-prev',
            },

            pagination: {
                el: '.news2-item_gallery .swiper-pagination',
                type: 'fraction',
            },
        });

} else {
    $('.news2-item_gallery .swiper-button-prev').remove();
    $('.news2-item_gallery .swiper-button-next').remove();
}
function footermargin() {
    setTimeout(() => {
        if ($(document).width() <= 1440) {
            $(".main__inner").css("margin-bottom", 0);
            $("footer").addClass("nofixed");
    
        } else {
            var foterheight = $("footer").outerHeight();
            $(".main__inner").css("margin-bottom", foterheight - 2);
            $("footer").removeClass("nofixed");
        }
    }, 300);
};

function generalSectionHide() {
    if ((window.innerWidth > 1279) && (window.innerHeight > 699)) {
        if (window.pageYOffset >= (window.innerHeight * 1.5)) {
            $(".main__inner_index .general-section").addClass("hide");
        } else {
            $(".main__inner_index .general-section").removeClass("hide");
        }
    }

}

function headerscroll() {
    if (window.pageYOffset >= 100) {
        $(".pageup.global").addClass("pageup__active");
    } else {
        $(".pageup.global").removeClass("pageup__active");
    }
    if (window.pageYOffset >= 50) {
        if ($('.city-headline').length) {
            $('.city-headline').hide();
        }
        $("header").addClass("scroll");
    } else {
        if ($('.city-headline').length) {
            $('.city-headline').show();
        }
        $("header").removeClass("scroll");
    }
};

$(document).on('click', ".item__menu_mobile", function () {
    let el = $(this);
    if ($(window).scrollTop() < 50) {
        $("header").toggleClass("scroll");
    }
    el.toggleClass("active");
    $(".mobile-menu").toggleClass("active");
    $('html,body').toggleClass('noscroll');
});

function scrollmobilemenu() {
    if (window.innerWidth <= 767) {
        if ($(window).scrollTop() >= 50) {
            $(".header__inner").addClass("scroll");
        } else {
            $(".header__inner").removeClass("scroll");
        }
    }
}

function widgetsmall() {
    if ($(document).width() <= 1440) {
        $(document).on('click', ".widget:not(.widget.active)", function (event) {
            let el = $(this);

            if (el.hasClass("active")) { } else {

                $(".grid__right").addClass("active");

                el.addClass("active");
                setTimeout(function () {
                    swiper2.update();
                    swiper3.update();
                }, 400);
            }
        });

        $(document).on('click', ".widget_close", function (event) {

            $(".widget").removeClass("active");
            $(".grid__right").removeClass("active");

        });
    }


};

function addhints() {
    $(".card-line").each(function (index, element) {
        try {
            let el = $(this);

            el.children(".hint").remove();
            el.append('<span class="hint"> Статус: ' + $(el).closest(".card").find(".card-img-top_right").find(".card-img-top__txt").html() + '</span>');
        } catch (error) { }
    });
};

$(document).ready(function () {
    var isIE = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
        isIE = true;
    }

    if (!isIE) {
        AOS.init({
            once: true,
            disable: mobile
        });
    } else {
        $("[data-aos]").removeAttr("data-aos")
    }

    try {
        //
    } catch (exception) { }

    /* search start */

    $(".search-elem").on("click", function (e) {
        if (!$(e.target).hasClass("search-elem-reset")) {
            if (!$(this).hasClass("active")) {
                $(this).addClass("active")
                $(".header__inner_item.mobile-menu.header__new").addClass("search-mode")
                $(this).find(".search-elem-input").focus();

                setTimeout(() => {
                    $(this).find(".search-elem-button").attr("type", "submit");
                }, 100)
            }
        }
    })

    $(".search-elem-reset").on("click", function (e) {
        e.preventDefault();
        let notInHeader = $(this).closest(".search-box").length > 0;
        $(this).closest(".search-elem").find(".search-elem-button").attr("type", "button");
        if (window.innerWidth > 767 && !notInHeader) {
            $(this).closest(".search-elem").trigger("reset").removeClass("active");
            $(this).siblings(".search-elem-input").val("");
            $(".header__inner_item.mobile-menu.header__new").removeClass("search-mode")
        }
        else {
            $(this).closest(".search-elem").trigger("reset");
            $(this).siblings(".search-elem-input").val("");
            $(this).siblings(".search-elem-input").focus();
        }
    })

    /* search end */

    headerscroll();
    setTimeout(function () {
        headerscroll();
    }, 300);

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    //header
    $('header').hover(function () { },
        function () {
            $(".header__additional-layer").slideUp(100);
            setTimeout(function () {
                $(".header__additional-layer_item").fadeOut(0);
            }, 100);
    });
    $(".header__additional-layer_item").fadeOut(0);
    let add_layer = $(".header__additional-layer");
    $('header .menu__items-cont .menu__items_item').hover(function () {
        if (window.innerWidth > 768) {
            $('header .menu__items-cont .menu__items_item').removeClass('active');
            let el = $(this);
    
            if (!el.hasClass('news') && !el.hasClass('poster')) {
                el.addClass('active');
                let data_attr = el.attr("data-layer");
                if ($(".header__additional-layer").is(':hidden')) {
                    $(".header__additional-layer").slideDown(200);
                    $(".header__additional-layer_item[data-layer=" + data_attr + "]").fadeIn(200);
                } else {
                    $(".header__additional-layer_item").not("[data-layer=" + data_attr + "]").hide(0);
                    $(".header__additional-layer_item[data-layer=" + data_attr + "]").fadeIn(200);
                }
            } else {
                $(".header__additional-layer_item").hide(0);
                $(".header__additional-layer").slideUp(200);
            }
        }
    })
    $('header .menu__items-cont .menu__items_item').click(function () {
        if (window.innerWidth < 768) {
            let el = $(this);   
            if (!el.hasClass('news') && !el.hasClass('poster')) {
                let data_attr = el.attr("data-layer");
                if (el.hasClass("active")) {
                    el.removeClass("active");
                    el.find(".header__additional-layer").slideUp(200);
                    setTimeout(function () {
                        el.find(".header__additional-layer").remove();
                    }, 200);
                } else {
                    $(".menu__items_item").removeClass("active");
                    $(".header__additional-layer").remove();
                    el.append(add_layer);
                    $(".header__additional-layer").slideDown(200);
                    $(".header__additional-layer_item").not("[data-layer=" + data_attr + "]").hide(0);
                    $(".header__additional-layer_item[data-layer=" + data_attr + "]").fadeIn(200);
                    el.addClass("active");
                }
            } else {
                const location = $(this).children('a').data('href');
                window.location = location;
            }
        }
    });
    $('header').on('mouseleave', function () {
        $('header .menu__items-cont .menu__items_item').removeClass('active');
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 ) {
            if ($('.menu__items_item').find('.header__additional-layer').length > 0) {
                $('.menu__items_item.active').trigger('click')
                $(".header .grid__content").append(add_layer)
            }
            if ($(".item__menu_mobile").hasClass("active")) {
                $('.item__menu_mobile').trigger('click')
            }
        } else if (window.innerWidth < 768 && $(".menu__items_item").hasClass("active") && !$(".item__menu_mobile").hasClass("active")) {
            $(".menu__items_item.active").removeClass("active");
            $(".header__additional-layer").slideUp(200);
        }
    })
    //utm
    const utm = document.location.search.split("&").toString();
    if (utm) {
        setTimeout(function () {
            switch (utm) {
                case '?direction=Education':
                    $(".showcase_filter").removeClass('active');

                    $("[data-value='Education']").addClass('active');
                    break;

                case '?direction=Events':
                    $(".showcase_filter").removeClass('active');

                    $("[data-value='Events']").addClass('active');
                    break;

                case '?direction=Technologies':
                    $(".showcase_filter").removeClass('active');

                    $("[data-value='Technologies']").addClass('active');
                    break;

                case '?direction=Media':
                    $(".showcase_filter").removeClass('active');

                    $("[data-value='Media']").addClass('active');
                    break;

                case '?direction=Tourism':
                    $(".showcase_filter").removeClass('active');

                    $("[data-value='Tourism']").addClass('active');
                    break;

                case '?direction=Urban':
                    $(".showcase_filter").removeClass('active');

                    $("[data-value='Urban']").addClass('active');
                    break;

                case '?type=PROJECT':
                    $("[data-value='PROJECT']").trigger('click');
                    break;

                case '?type=IDEA':
                    $("[data-value='IDEA']").trigger('click');
                    break;

                default:

                    break
            }
        }, 1000);

    }

    //anchor
    $("a").click(function (e) {
        if ($(this).attr("href") == "" || $(this).attr("href") == "null" || $(this).attr("href") == "undefined" || $(this).attr("href") == "NaN" || $(this).attr("href") === "#") { } else {
            try {
                let elementClick = $(this).attr("href");

                let destination = $(elementClick).offset().top;
                $('html,body').animate({
                    scrollTop: (destination - 90)
                }, 1000);
                return false;
            } catch (e) { }

        }
    });

    //pageup
    function hidePageup() {
        if (window.innerWidth < 1280) {
            $(".pageup.global").hide(0);
        } else {
            $(".pageup.global").show(0);
        }
    }
    $(document).on('click', ".pageup", function () {
        $('html,body').animate({
            scrollTop: (0)
        }, 500);
        return false;

    });
    hidePageup()
    window.addEventListener("resize", hidePageup)

    //input blur
    $("input:not(.datepicker-here, .map-input-box), textarea").hover(function () {
    }, function () {

        $("input[type=text], textarea").on('keyup, keydown, change, input', function () { });
        if ($(this).val().length >= 1) { } else {
            setTimeout(function () {
                $(this).blur();

            }, 1000);
        }

    });

    //vote

    navigator.sayswho = (function () {
        var ua = navigator.userAgent,
            tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
        return M.join(' ');
    })();

    if (navigator.sayswho == 'IE 11.0') {
        $('img.img-ie').each(function () {
            var t = $(this),
                s = 'url(' + t.attr('src') + ')',
                p = t.parent(),
                d = $('<div class="img-ie-cover"></div>');
            t.hide();
            p.append(d);
            d.css({
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'background-image': s
            });
        });
    }

    $(document).on('click', '.tags__item[data-tag]', function (e) {
        $(".tags__item[data-tag]").removeClass("active");
        $(this).addClass("active");
    });

    $(document).on('click', '.tags__item, .content-block__more', function () {
        setTimeout(function () {
            addhints();
        }, 1000);
    });

    //select
    $('.select').each(function () {
        $(this).children('select').css('display', 'none');

        var $current = $(this);

        $(this).find('option').each(function (i) {
            if (i == 0) {
                $current.prepend($('<div>', {
                    class: $current.attr('class').replace(/select/g, 'select__box')
                }));

                var placeholder = $(this).text();
                $current.prepend($('<span>', {
                    class: $current.attr('class').replace(/select/g, 'select__placeholder'),
                    text: placeholder,
                    'data-placeholder': placeholder
                }));

            }

            $current.children('div').append($('<span>', {
                class: $current.attr('class').replace(/select/g, 'select__box__options'),
                text: $(this).text()
            }));
            $current.find('.select__box__options:first-child').addClass("selected");
        });


    });
    $('.select').click(function () {

        if ($(this).hasClass('active')) {

            $(this).removeClass('active');
            $(this).closest("section").removeClass("selsection")


        } else {

            $('.select').removeClass('active');
            $(this).addClass('active');
            $(this).closest("section").addClass("selsection")


        }


    });
    $('.select__box__options').click(function () {
        var txt = $(this).text();
        var index = $(this).index();

        $(this).siblings('.select__box__options').removeClass('selected');
        $(this).addClass('selected');

        var $currentSel = $(this).closest('.select');
        $currentSel.children('.select__placeholder').text(txt);
        $currentSel.children('select').prop('selectedIndex', index).trigger('change');
    });
    $(document).mouseup(function (e) {
        var div = $('.select');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.select').removeClass('active');
        }
    });
    $('.select_checkbox').each(function () {
        $(this).children('select').css('display', 'none');

        var $current = $(this);

        $(this).find('option').each(function (i) {
            if (i == 0) {
                $current.prepend($('<div>', {
                    class: $current.attr('class', "select__checkbox-box")
                }));
            }

            $current.children('div').append($('<div class="checkbox-box__item"> <input type="radio" name="filter" id="filter' + i + '"> <label for="filter' + i + '" class="checkbox__text"> ' + $(this).text() + '  </label> </div>'));
            $current.find('.checkbox-box__item:first-child').addClass("selected");
        });


    });

    $('.checkbox-box__item').click(function () {
        let parent = $(".title__radio");
        var txt = $(this).text();
        var index = $(this).index();

        if (!parent.hasClass("title__checkbox")) {
            $(this).siblings('.checkbox-box__item').removeClass('selected');
            $(this).addClass('selected');
        }

        var $currentSel = $(this).closest('.select_checkbox');
        $currentSel.children('select').prop('selectedIndex', index);
    });

    $(document).on('change', '.checkbox-box__item input', function (e) {

        let el = $(this);
        let wrapper = el.closest(".checkbox-box__item");
        let parent = el.closest(".title__radio");
        let chooseALl = parent.find(".checkbox-box__item-all input");


        if (wrapper.hasClass("checkbox-box__item-all")) {
            parent.find(":not(.checkbox-box__item-all) input").prop("checked", false)
        }
        else if (chooseALl.prop("checked")) {
            chooseALl.prop("checked", false);
            chooseALl.removeAttr("checked");
        }
        else if (wrapper.hasClass("multiselect-field__item")) {
            let sectionWrapper = el.closest(".content-block");
            let elId = el.attr("id");
            let elText = el.siblings("label").text();


            if (el.prop("checked")) {
                sectionWrapper.find(".multiselect__values-list").append(`
            <div class="multiselect__values-item" data-id="${elId}">
                <span class="multiselect__values-name">${elText}</span>
                <div class="multiselect__values-del"></div>
            </div>
            `);
            }

            if (sectionWrapper.find(".multiselect__values .multiselect__values-item").length > 0) {
                sectionWrapper.find(".multiselect__values").addClass("active");
            } else {
                sectionWrapper.find(".multiselect__values").removeClass("active");
            }
        }


    });

    $(document).on('click', '.multiselect__values-item', function (e) {
        let elId = $(this).data("id");
        $("#" + elId).prop("checked", false);
        $("#" + elId).trigger("change");
        $(this).remove();
    });

    $(document).on('click', '.multiselect__values-clear', function (e) {
        $(this).closest('.multiselect-box').find("input").prop("checked", false);
        $('.pp-filters .multiselect__fields').find("input").prop("checked", false);
        $(this).closest('.multiselect-box').find(".multiselect__values-item").remove();
        $(this).closest('.multiselect-box').find(".multiselect__values").removeClass("active");

        $(".js-radio-desktop input, .js-radio-mobil input").prop("checked", false);
        $(".checkbox-box__item-all input").prop("checked", true);

    });

    $('.select__box__options').click(function () {
        var txt = $(this).text();
        var index = $(this).index();

        $(this).siblings('.select__box__options').removeClass('selected');
        $(this).addClass('selected');

        var $currentSel = $(this).closest('.select_tagbox');
        $currentSel.children('select').prop('selectedIndex', index);
    });

    $("input:not([type=file])").on('blur', function (e) {

        $(this).val($(this).val().replace(/\s+/g, ' ').trim());
    });

    $(document).on('touchstart', ".user__profile.authorized .user__profile__photo", function (e) {

        if ($(".item__menu_mobile").hasClass("active")) {
            $(".item__menu_mobile").removeClass("active");
            if ($(".mobile-menu").hasClass("active")) {
                $(".mobile-menu").removeClass("active");
            }
        }

        $('html,body').toggleClass('noscroll');

        let el = $('.user__profile.authorized');
        el.toggleClass("active");

    });

    $(document).on('click', ".mobile-select:not(.active)", function (e) {

        $('html,body').toggleClass('noscroll');

        let el = $(this);
        el.toggleClass("active");

        $(".mobile-select__box").toggleClass("active");

    });

    $(document).on('click', ".mobile-select", function (e) {

        $(".mobile-select__box").addClass("active");
        $('html,body').addClass('noscroll');

    });

    footermargin();
    widgetsmall();
    addhints();
    scrollmobilemenu();

    try {
        $(".textarea_box").append('<div class="textarea_resize"></div> ');
    } catch (e) { }

    $.fn.serializeObject = function () {
        "use strict";

        var result = {};
        var extend = function (i, element) {
            var node = result[element.name];
            if ('undefined' !== typeof node && node !== null) {
                if ($.isArray(node)) {
                    node.push(element.value);
                } else {
                    result[element.name] = [node, element.value];
                }
            } else {
                result[element.name] = element.value;
            }
        };
        $.each(this.serializeArray(), extend);

        return result;
    }
    generalSectionHide();

    $(document).on('click', '.district-switch-btn', function () {

        var el = $(this);
        var th_state = el.attr('data-switch-vote');

        $('.vote-range-wrap').fadeOut(300);
        $('.vote-range-wrap[data-switch-vote="' + th_state + '"]').fadeIn(300);

    });

    $(document).on('click', '.yard-switch-btn', function () {

        var el = $(this);
        var th_state = el.attr('data-switch-yard');

        $('.vote-range-wrap__yard').fadeOut(300);
        $('.vote-range-wrap__yard[data-switch-yard="' + th_state + '"]').fadeIn(300);

    });

    $(document).on('click', '.yardfin-title-switch', function () {

        var el = $(this);
        var th_state = el.attr('data-yardmap');

        $('.yardfin-title-switch').removeClass('active');
        $(this).addClass('active');

        $('.yardfin-content__item').fadeOut(300);
        $('.yardfin-content__item[data-yardmap="' + th_state + '"]').fadeIn(300);

    });

    /* fixed block 800dd */

    $(document).ready(function () {
        /* fixed block 800dd */
        let fixedId = $(".fixed-info-block_desktop").attr("data-fixed");
        let fixedCookie = getCookie(`fixedHide${fixedId}`);
        if (!fixedCookie) {
            $('.fixed-info-block_desktop[data-fixed="' + fixedId + '"]').removeClass("hide");
        } else {
            $('.fixed-info-block_desktop[data-fixed="' + fixedId + '"]').attr("data-hide", "hide");
        }

        $(document).on('click', '.fixed-info-block_desktop .fixed-info-block__close', function (e) {
            e.preventDefault();
            i = $(this).attr("data-fixed");
            document.cookie = `fixedHide${i}="fixed${i}"; path=/;`;
            $('.fixed-info-block_desktop[data-fixed="' + i + '"]').addClass("hide");
            $('.fixed-info-block_desktop[data-fixed="' + fixedId + '"]').attr("data-hide", "hide");
        });

        $(document).on('click', '.fixed-info-block_desktop[data-hide="hide"]', function (e) {
            e.preventDefault();
            i = $(this).attr("data-fixed");
            document.cookie = `fixedHide${i}=null; max-age=-1; expires=-1; path=/;`;
            $('.fixed-info-block_desktop[data-fixed="' + i + '"]').removeClass("hide");
            $('.fixed-info-block_desktop[data-fixed="' + i + '"]').removeAttr("data-hide");
        });

        function fixedBlockMobile() {
            if (window.innerWidth < 768) {
                if ($(window).scrollTop() > 150) {
                    $(".fixed-info-block_mobile").fadeOut(200);
                }
                else {
                    $(".fixed-info-block_mobile").fadeIn(200);
                }
            } else {
                $(".fixed-info-block_mobile").removeAttr("style")
            }

        }
        $(window).scroll(function () {
            fixedBlockMobile();
        });
    });
    /* ecostart */
    var swiperMembers;
    var swiperMembersinit = false;
    var swiperEvents;
    var swiperEventsInit = false;


    function activeMobileSlider() {
        if (window.innerWidth < 767) {
            if (!swiperMembersinit && $('.swiper-container-members').length > 0) {
                swiperMembersinit = true
                swiperMembers = new Swiper('.swiper-container-members', {
                    observer: true,
                    observeParents: true,
                    navigation: {
                        nextEl: '.swiper-navigation-members .swiper-button-next',
                        prevEl: '.swiper-navigation-members .swiper-button-prev',
                    },
                    spaceBetween: 12,
                    slidesPerView: 1,
                    speed: 800,
                    loop: false,
                    breakpoints: {
                        575: {
                            slidesPerView: 2
                        }
                    },
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: true,
                    }
                });
            }
            if (!swiperEventsInit && $('.swiper-container_ecostart-events').length > 0) {
                swiperEventsInit = true
                swiperEvents = new Swiper('.swiper-container_ecostart-events', {
                    observer: true,
                    observeParents: true,
                    navigation: {
                        nextEl: '.swiper-navigation-events .swiper-button-next',
                        prevEl: '.swiper-navigation-events .swiper-button-prev',
                    },
                    slidesPerView: 1,
                    spaceBetween: 20,
                    speed: 800,
                    loop: false,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: true,
                    }
                });
            }
        }
        else {
            if (swiperEventsInit) {
                swiperEvents.destroy(true, true);
                swiperEventsInit = false
            }
            if (swiperMembersinit) {
                swiperMembers.destroy(true, true);
                swiperMembersinit = false
            }
        }
    }

    $(document).ready(function () {
        activeMobileSlider();
    });

    $(window).on("resize", function () {
        activeMobileSlider();
    })
    $(window).on("orientationchange", function () {
        activeMobileSlider();
    })

    /* ecostart end */

    $(".about800-content__video img,.about800-content__video .record-section__button" ).click(function(e){
        $(".about800-content__video iframe").attr("src",$(".about800-content__video").data("src")+"?autoplay=1");
        $(".about800-content__video img").remove();
        $(".about800-content__video .record-section__button").remove();
    });

});

if ($(window).outerWidth() < 1024) {
    $('.tl_event').each(function () {
        $(this).find('.tl_event_image').prependTo($(this));
        $(this).find('.tl_event_title').prependTo($(this));
    });
}

$(document).on('click', '.timeline_item', function () {

    if (!$(this).hasClass('active')) {
        $('.timeline_item').removeClass('active');
        $(this).addClass('active');
       //$('.timeline_inner_i').scrollLeft($(this).offset().left - 15)

        var th_year = $(this).attr('data-year');

        $('.timeline_item[data-year="' + th_year + '"]').addClass('active');

        var year_el = $('.tl_box_year_title[data-year="' + th_year + '"]');
        var year_offset_top = year_el.offset().top - 150

        $('html,body').animate({
            scrollTop: year_offset_top
        }, 500);

    }

});

$(window).scroll(function () {

    if ($('.timeline_wrapper_page').length > 0) {
        var tl_offset = $('.timeline_wrapper_page').offset().top;

        if ($(this).scrollTop() > tl_offset + 150) {

            $('.timeline_wrapper_fixed').addClass('show');
        } else {
            $('.timeline_wrapper_fixed').removeClass('show');

        }

        $('.tl_box_year_title').each(function () {
            var eTop = $(this).offset().top;
            //get the offset top of the element

            if (eTop - $(window).scrollTop() < 155) {
                $('.timeline_item').removeClass('active');

                var th_year = $(this).attr('data-year');

                $('.timeline_item[data-year="' + th_year + '"]').addClass('active');
            }

        })   
        if (document.querySelector('.timeline_item.active')) {
            let diff = document.querySelector('.timeline_item.active').getBoundingClientRect().left - document.querySelector('.timeline_wrapper_fixed .timeline_inner_i').getBoundingClientRect().left;
            document.querySelector('.timeline_wrapper_fixed .timeline_inner_i').scrollLeft = parseInt(document.querySelector('.timeline_wrapper_fixed .timeline_inner_i').scrollLeft + diff)
    
        }
    }
});

$('.cocoen').cocoen();

/* Histori drug */

var x, left, down;

$(".timeline_inner_i").mousedown(function (e) {
    e.preventDefault();
    down = true;
    x = e.pageX;
    left = $(this).scrollLeft();
});

$("body").mousemove(function (e) {
    if (down) {
        var newX = e.pageX;
        $(".timeline_inner_i").scrollLeft(left - newX + x);
        $(".timeline_inner_i").addClass('dragging')

    }
});

$("body").mouseup(function (e) {
    e.preventDefault;
    down = false;
    $(".timeline_inner_i").removeClass('dragging')
});

$('.timeline_prev').click(function () {
    $('.timeline_inner_i').animate({
        scrollLeft: '-=500'
    }, 300);
})
$('.timeline_next').click(function () {
    $('.timeline_inner_i').animate({
        scrollLeft: '+=500'
    }, 300);

})

$(document).on('click', '.title-switch[data-switch]', function (e) {

    var el = $(this);
    var th_dc = el.attr('data-switch');

    $(".content-block-switch__item[data-switch]").fadeOut(300);
    $('.content-block-switch__item[data-switch="' + th_dc + '"]').fadeIn(300);

    $(".title-switch[data-switch]").removeClass("active");
    $(this).addClass("active");

});

/* Coockie */

var cookieName = location.host;
var cookieValue = "Cookies policy accepted";
var cookiePath = "/";
var cookieExpire = 180;

function Trim(strValue) {
    return strValue.replace(/^\s+|\s+$/g, '');
}

function getCookie(cookieName) {
    var result = false;
    if (document.cookie) {
        var mycookieArray = document.cookie.split(';');
        for (i = 0; i < mycookieArray.length; i++) {
            var mykeyValue = mycookieArray[i].split('=');
            if (Trim(mykeyValue[0]) == cookieName) result = mykeyValue[1];
        }
    }
    return result;
}

function setCookie(cname, cvalue, cexpire, cpath) {
    var d = new Date();
    d.setTime(d.getTime() + (cexpire * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=" + cpath + ";";
}

if (!getCookie(location.host) || getCookie(location.host) == '') {
    $('.cookie_message').addClass('show');
}

$('.cookie_message_close').click(function (event) {
    event.preventDefault();
    setCookie(cookieName, cookieValue, cookieExpire, cookiePath);
    $('.cookie_message').remove();

});

$('.c_box_title.c_box_title_caret').click(function () {
    $(this).toggleClass('active');
    $(this).parent().find('.c_box_text_spoiler').slideToggle(300);
});


$(document).on('click', '.search-button__ico_toggle:not(.already-active)', function () {
    $(this).toggleClass('active');
});
$('.js-action-search-clear').click(function () {
    $('.search-button__ico_toggle').removeClass('active');
    $(this).closest(".search-button__panel").find("#search-input").val("");
});

$('.search-button-panel input').on('keyup', function () {
    var $this = $(this),
        val = $this.val();
    if (val.length >= 1) {
        $('.search-button__cross').addClass('active');
    } else {
        $('.search-button__cross').removeClass('active');
    }
});

$(window).scroll(function () {
    scrollmobilemenu();
    generalSectionHide();
    headerscroll();
    var docH = (document.body.scrollHeight > document.body.offsetHeight) ? document.body.scrollHeight : document.body.offsetHeight;
    if ($(window).scrollTop() > docH - 1000) {
        $('.pageup.global').removeClass('pageup__active');
    }
});

function mobileLinkParser() {
    if (window.innerWidth < 768) {
        $(".menu__items_item[data-layer]").each(function (index, element) {
            let linkHref = $(element).find("a").attr("href");
            $(element).find("a").attr("data-href", linkHref);
            $(element).find("a").removeAttr("href");
        });
    } else {
        $(".menu__items_item[data-layer]").each(function (index, element) {
            let linkHref = $(element).find("a").attr("data-href");
            $(element).find("a").attr("href", linkHref);
            $(element).find("a").removeAttr("data-href");
        });
    }
}

mobileLinkParser();

$(window).on('resize', function () {

    mobileLinkParser();

    footermargin();
    widgetsmall();
    scrollmobilemenu();
    AOS.refresh();
});

/* Policy-warning-accordeon */
try {
    $(function () {
        if ($('.policy__warning-head').length) {
            $('.policy__warning-head').on('click', function () {
                $(this).toggleClass('active').next().slideToggle();
            });
        }
    });
} catch (e) { }
