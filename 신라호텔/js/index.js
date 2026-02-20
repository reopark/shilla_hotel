$(function () {

    // header 영역에 있으면 on 유지
    $('header .header_bottom').mouseenter(function () {
        $('header').addClass('on');
    });

    $('header .header_bottom').mouseleave(function () {
        $('header').removeClass('on');
        $('.bg').stop().slideUp();
        $('header .header_bottom .container').stop().slideUp();
    });

    // 각 메뉴 hover
    $('header .header_bottom .bottom_list').mouseenter(function () {
        $(this).find('.container').stop().slideDown();

        if ($(this).find('.sub').length > 0) {
            $('.bg').stop().slideDown();
        }
    });

    $('header .header_bottom .bottom_list').mouseleave(function () {
        $(this).find('.container').stop().slideUp();

        if ($(this).find('.sub').length > 0) {
            $('.bg').stop().slideUp();
        }
    });

});

$(function() {
    $('header .drop_down>a').click(function(e) {
        e.preventDefault();  
        
        const $parent = $(this).parent();

        // 다른 drop_down 닫기
        $('header .drop_down').not($parent).removeClass('open');

        // 현재 drop_down 토글
        $parent.toggleClass('open');
    });
})


// main
$(function() {
    const $hotels = $('.main .main_offer article .offersearch.hotel .hotels');
    const $hotelsearch = $('.main .main_offer .hotelsearch');
    const $peoples = $('.main .main_offer article .offersearch.group .people');
    const $peoplesearch = $('.main .main_offer .peoplesearch');
    const $x_btn = $('.peoplesearch .people_top i');

    // 호텔 선택 클릭 → 호텔 검색 열기
    $hotels.on('click', function (e) {
        e.stopPropagation(); // document 클릭 방지
        $hotelsearch.stop().fadeIn();
        $peoplesearch.stop().fadeOut();
    });

    // 호텔 검색 영역 클릭 시 닫히지 않게
    $hotelsearch.on('click', function (e) {
        e.stopPropagation();
    });

    // 다른 영역 클릭 시 호텔 검색 닫기, peoplesearch 영역 닫기
    $(document).on('click', function () {
        $hotelsearch.stop().fadeOut();
        $peoplesearch.stop().fadeOut();
    });

    // group 클릭 -> peoplesearch 열기
    $peoples.on('click', function(e) {
        e.stopPropagation();
        $peoplesearch.stop().fadeIn();
        $hotelsearch.stop().fadeOut();
    })

    // peoplesearch 영역 클릭시 닫히지 않게
    $peoplesearch.on('click', function (e) {
        e.stopPropagation();
    });

    // peoplesearch 영역 안에 x버튼 클릭시 닫기
    $x_btn.on('click', function(e) {
        e.stopPropagation();
        $peoplesearch.stop().fadeOut();
    })

})

$(function() {
    // 초기값 0
    $('.peoplesearch ._num').text(0);
    $('.adult_number, kid_number').text(0);


    // plus 버튼
    $('.peoplesearch').on('click', '.plus', function() {
        const $people = $(this).closest('._people');
        const $num = $people.find('._num');

        let count = parseInt($num.text(), 10);
        
        const max = $people.hasClass('_adult') ? 4 : 5;

        if (count < max) {
            count++;
            $num.text(count);
            number($people, count);
        }
    })

    // minus 버튼
    $('.peoplesearch').on('click', '.minus', function() {
        const $people = $(this).closest('._people');
        const $num = $people.find('._num');

        let count = parseInt($num.text(), 10);

        if (count > 0) {
            count--;
            $num.text(count);
            number($people, count);
        }
    })

    function number($people, count) {
        if ($people.hasClass('_adult')) {
            $('.adult_number').text(count);
        } else if ($people.hasClass('_kid')) {
            $('.kid_number').text(count);
        }
    }
})

// 해더 스크롤 다운 처리 
$(function() {
    $(window).scroll(function() {
        header_low()
    })
    function header_low() {
        scrolls = $(window).scrollTop()
        if(scrolls > 30) {
            $('header').addClass('down')
        }else {
            $('header').removeClass('down')
        }
    }
})

// section1
$(function() {
    $(document).on('click', '.section1 .section_title .title2 li', function () {
        $('.section1 .section_title .title2 li').removeClass('active')
        $(this).addClass('active')

        i = $(this).index()

    $('.section1 .container_wrap').css({opacity: 0, pointerEvents: 'none'})
    $('.section1 .container_wrap').eq(i).css({opacity: 1, pointerEvents: 'auto', zIndex: 1})
    });

    var swiper = new Swiper('.section1 .container_wrap', {
        loop : true,
        spaceBetween : 30,

        slidesPerView: 3,
        autoplay: {
            delay: 10000,
        },
        navigation : {
            nextEl: ".section1 .next",
            prevEl: ".section1 .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            1000: {
                slidesPerView: 3
            }
        },
    });
})

// section3
$(function () {
    var swiper3 = new Swiper('.section3 .event_swiper', {
        loop : true,
        slidesPerView: 5,
        autoplay: {
            delay: 8000,
        },

        breakpoints: {
            0: {
                slidesPerView: 'auto',
                spaceBetween : 30,
                centeredSlides: false,
            },
            1000: {
                slidesPerView: 5,
                centeredSlides: true
            }
        },
    });
})
/*$(function() {
    const $container = $('.section3 .container');
    const $item = $('.section3 .item');

    let index = 3;

    function slide() {

        $item.removeClass('large').addClass('small');

        const $activeItem = $item.eq(index).removeClass('small').addClass('large');
        const itemWidth = 370 + 30;
        const activeWidth = $activeItem.outerWidth();
        const containerWidth = $('.section3').outerWidth();

        const offset = (index * itemWidth) - (containerWidth / 2) + (activeWidth / 2);

        $container.css({
            transform: `translateX(-${offset}px)`
        });
    }

    slide();

    setInterval(() => {
        index++;
        if (index >= $item.length) index = 0;
        slide();
    }, 5000);
});*/


// section4 tab
$(function() {
    $(document).on('click', '.section4 .container .left .title_tab ul li', function (e) {
        e.preventDefault();

        // 왼쪽 탭 on 처리
        $('.section4 .container .left .title_tab ul li').removeClass('on');
        $(this).addClass('on');

        const target = $(this).find('a').attr('href');

        // tab 전환
        $('.section4 .container .right .tab').removeClass('active');
        const $activetab = $(target).addClass('active');

        // 해당 tab의 첫 list / item 자동 on
        $activetab.find('.list').removeClass('on').first().addClass('on');
        $activetab.find('.tab_img .item').removeClass('on').first().addClass('on');
    });
})

// section4 right list
$(function() {
    $(document).on('click', '.section4 .container .right .tab .list_wrap .img_list .list', function (e) {
        e.preventDefault();

        // on 처리
        $('.section4 .container .right .tab .list_wrap .img_list .list').removeClass('on');
        $(this).addClass('on');

        // 클릭한 a의 href 값 가져오기
        let target = $(this).find('a').attr('href');

        // 모든 tab item 숨기기
        $('.section4 .container .right .tab .tab_img .item').removeClass('on');

        // 해당 tab item 만 보여주기
        $(target).addClass('on');
    });
})


// section4 right btn
$(function() {
    $(document).on('click', '.section4 .container .right .tab3 .btn', function (e) {
        e.preventDefault();
    
        // btn_on 처리
        $('.section4 .container .right .tab3 .btn').removeClass('btn_on');
        $(this).addClass('btn_on');

        const target = $(this).data('target');

        // _img 전환
        const $tab3 = $('.section4 .container .right .tab3');
        $tab3.find('._img').removeClass('active');
        const $activeImg = $tab3.find(target).addClass('active');

        // 🔥 이 부분이 핵심
        // 해당 _img 안에서만 list / item 초기화
        $activeImg.find('.list').removeClass('on').first().addClass('on');
        $activeImg.find('.tab_img .item').removeClass('on').first().addClass('on');
    });
})


// 반응형일때
$(function() {
    $(document).on('click', 'header .header_top .language', function(e) {
        e.preventDefault();

        $('header .header_top .language .sub_ul').show()
        $('.bg1').show()
    })


    $(document).on('click', '.bg1', function(e) {
        $(this).hide()
        $('header .header_top .language .sub_ul').hide()
    })  

    // sub_list on
    $(document).on('click', 'header .header_top .language .sub_ul .sub_list', function(e) {
        e.preventDefault();

        $('header .header_top .language .sub_ul .sub_list').removeClass('on');
        $(this).addClass('on')
    })
})

// section5
$(function() {
    let sec5Swiper;

    function sec5SwiperInit() {
        const winW = window.innerWidth;

        if (winW <= 1000 && !sec5Swiper) {
            sec5Swiper = new Swiper('.sec5-swiper', {
                slidesPerView: 'auto',
                spaceBetween: 20,
                speed: 600,
            });
        }

        if (winW > 1000 && sec5Swiper) {
            sec5Swiper.destroy(true, true);
            sec5Swiper = undefined;
        }
    }

    window.addEventListener('load', sec5SwiperInit);
    window.addEventListener('resize', sec5SwiperInit);
})



// m_menu
$(function () {
    $('.ham').on('click', function () {
        $('.m_menu').css({ transform: 'translateX(0)'});
        $('body').addClass('menu_open');
    });

    $('.m_menu .m_menu_top>i').on('click', function() {
        $('.m_menu').css({ transform: 'translateX(-100%)'});
        $('body').removeClass('menu_open');
    })

    $(document).on('click', '.m_menu_top .language', function (e) {
        const $sub_ul = $(this).find('.sub_ul');
        e.preventDefault();
        
        $(this).toggleClass('open')
        $sub_ul.toggle();
    });



    $(document).on('click', '.m_menu .list .m_list a', function (e) {
        const $li = $(this).parent('.m_list');
        const $sub = $li.children('.sub');

        // sub가 없으면 그냥 링크 이동 (토글 X)
        if ($sub.length === 0) return;

        e.preventDefault();

        if ($li.hasClass('open')) {
        // 닫기
        $li.removeClass('active'); // 바로 border 복구

        $sub.stop().slideUp(300, function () {
            $li.removeClass('open');
        });
    } else {
        // 열기
        $li.addClass('active'); // 클릭 즉시 border 제거

        $sub.stop().slideDown(300, function () {
            $li.addClass('open');
        });
    }
    });
});


// footer
$(function() {
    $('footer .footer_bottom .m_footer_bottom a').on('click', function() {
        $(this).toggleClass('rotate')
        $('footer .footer_bottom .m_footer_bottom .cont').toggle()
    })
})