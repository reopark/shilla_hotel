$(function () {

    // 초기 상태 : 한국만 보이기
    $('.group_right').hide();
    $('.group_right[data-area="한국"]').show();

    // 왼쪽 탭 클릭
    $('.group_left .item').on('click', function () {
        const area = $(this).data('area'); // 한국 / 중국 / 베트남

        // 왼쪽 탭 active 처리
        $('.group_left .item').removeClass('active');
        $(this).addClass('active');

        // 오른쪽 영역 전환
        $('.group_right').hide();
        $('.group_right[data-area="' + area + '"]').show();
    });

    // 왼쪽 리스트 토글
    $('.dining .dining_list_wrap .list_search .left').on('click', function(e) {
        e.stopPropagation(); // document 클릭 방지
        // 클릭이 내부 탭(item)과 겹치면 이벤트 전파 막기
        if ($(e.target).closest('.group_left .item').length) return;

        $('.dining .dining_list_wrap .list_search .left .hotel_content').toggle();
        $('.dining .dining_list_wrap .list_search .left .hotel_multi i').toggleClass('rotate');
    });

    // 다른 영역 클릭 시 호텔 선택 창 닫기 , i태그 rotate 삭제
    $(document).on('click', function () {
        $('.dining .dining_list_wrap .list_search .left .hotel_content').stop().fadeOut();
        $('.dining .dining_list_wrap .list_search .left .hotel_multi i').removeClass('rotate');
    });
});


/*
$(function() {
    const $itemlist = $('.item_list');       // item 목록
    const $items = $itemlist.find('.item');  // 각 item
    const $pagination = $('.pagination_item'); // 페이지 번호
    const $prev = $('.prev');                
    const $next = $('.next');
    const $tabs = $('.dining_list li');      // 상단 필터 탭
    const itempage = 9;                  // 한 페이지에 보여줄 item 수

    let currentPage = 1;                      // 현재 페이지
    let filteredData = [];                    // 필터 적용된 데이터 저장

    // 샘플 데이터 
    const diningData = [
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "서울신라호텔", 
            title: "레스토랑", 
            name: "라연", 
            type: "한식", 
            location: "23층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab2/1.png", 
            hotel: "제주신라호텔", 
            title: "레스토랑", 
            name: "하노데", 
            type: "일식", 
            location: "3층", 
            phone: "164-735-5339" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "서울신라호텔", 
            title: "레스토랑", 
            name: "콘티넨탈", 
            type: "양식", 
            location: "23층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 광화문", 
            title: "레스토랑", 
            name: "신라스테이 광화문 cafe", 
            type: "뷔페", 
            location: "8층", 
            phone: "02-6060-1234" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "서울신라호텔", 
            title: "레스토랑", 
            name: "아리아께", 
            type: "일식", 
            location: "2층", 
            phone: "012-2151-1124" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "서울신라호텔", 
            title: "레스토랑", 
            name: "팔선", 
            type: "중식", 
            location: "2층", 
            phone: "022-23626-2352" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "서울신라호텔", 
            title: "레스토랑", 
            name: "더 파크뷰", 
            type: "한식", 
            location: "1층", 
            phone: "012-4442-1251" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "서울신라호텔", 
            title: "라운지 & 바", 
            name: "더 라이브러리", 
            type: "라운지 & 바", 
            location: "1층", 
            phone: "02-2221-5516" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "서울신라호텔", 
            title: "라운지 & 바", 
            name: "더 디스틸러스 라이브러리", 
            type: "라운지 & 바", 
            location: "1층", 
            phone: "02-3473-8568" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "서울신라호텔", 
            title: "라운지 & 바", 
            name: "더 이그제큐티브 라운지", 
            type: "라운지", 
            location: "23층", 
            phone: "02-1241-7807" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "서울신라호텔", 
            title: "베이커리", 
            name: "패스트리 부티크", 
            type: "베이커리", 
            location: "1층", 
            phone: "02-6237-6946" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "제주신라호텔", 
            title: "레스토랑", 
            name: "올 데이 다이닝", 
            type: "뷔페", 
            location: "3층", 
            phone: "02-3727-2362" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "제주신라호텔", 
            title: "라운지 & 바", 
            name: "바당", 
            type: "라운지", 
            location: "6층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "제주신라호텔", 
            title: "라운지 & 바", 
            name: "올래 바", 
            type: "바", 
            location: "6층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "제주신라호텔", 
            title: "라운지 & 바", 
            name: "풀사이드 바", 
            type: "바", 
            location: "6층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "제주신라호텔", 
            title: "베이커리", 
            name: "패스트리 부티크", 
            type: "베이커리", 
            location: "6층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라모노그램 서안", 
            title: "레스토랑", 
            name: "다이닝 M", 
            type: "뷔페", 
            location: "1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라모노그램 서안", 
            title: "레스토랑", 
            name: "라향", 
            type: "한식", 
            location: "2층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라모노그램 서안", 
            title: "레스토랑", 
            name: "쯔웨이", 
            type: "광동 요리", 
            location: "2층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라모노그램 서안", 
            title: "라운지 & 바", 
            name: "로비 라운지", 
            type: "라운지", 
            location: "1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라모노그램 다낭", 
            title: "레스토랑", 
            name: "다이닝 M", 
            type: "뷔페", 
            location: "본관 B1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라모노그램 다낭", 
            title: "레스토랑", 
            name: "비스트로 M", 
            type: "뷔페", 
            location: "레지던스 1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라모노그램 다낭", 
            title: "라운지 & 바", 
            name: "바 M", 
            type: "바", 
            location: "본관 1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라모노그램 다낭", 
            title: "라운지 & 바", 
            name: "풀 바", 
            type: "바", 
            location: "야외 풀사이드", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 마포", 
            title: "레스토랑", 
            name: "신라스테이 마포 cafe", 
            type: "뷔페", 
            location: "2층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 서대문", 
            title: "레스토랑", 
            name: "신라스테이 서대문 cafe", 
            type: "뷔페", 
            location: "지하 1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 역삼", 
            title: "레스토랑", 
            name: "신라스테이 역삼 cafe", 
            type: "뷔페", 
            location: "3층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 서초", 
            title: "레스토랑", 
            name: "신라스테이 서초 cafe", 
            type: "뷔페", 
            location: "3층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 구로", 
            title: "레스토랑", 
            name: "신라스테이 구로 cafe", 
            type: "뷔페", 
            location: "2층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 삼성", 
            title: "레스토랑", 
            name: "신라스테이 삼성 cafe", 
            type: "뷔페", 
            location: "20층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 동탄", 
            title: "레스토랑", 
            name: "신라스테이 동탄 cafe", 
            type: "뷔페", 
            location: "7층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 천안", 
            title: "레스토랑", 
            name: "신라스테이 천안 cafe", 
            type: "뷔페", 
            location: "3층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 전주", 
            title: "레스토랑", 
            name: "신라스테이 전주 cafe", 
            type: "뷔페", 
            location: "1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 울산", 
            title: "레스토랑", 
            name: "신라스테이 울산 cafe", 
            type: "뷔페",  
            location: "2층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 해운대", 
            title: "레스토랑", 
            name: "신라스테이 해운대 cafe", 
            type: "뷔페", 
            location: "2층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 서부산", 
            title: "레스토랑", 
            name: "신라스테이 서부산 cafe", 
            type: "뷔페", 
            location: "3층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 여수", 
            title: "레스토랑", 
            name: "신라스테이 여수 cafe", 
            type: "뷔페", 
            location: "7층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "신라스테이 플러스 이호테우", 
            title: "레스토랑", 
            name: "신라스테이 플러스 이호테우 cafe", 
            type: "뷔페", 
            location: "", 
            phone: "02-2230-3367" 
        }
    ];

    // 페이지 랜더링
    function renderPage(page, data = filteredData){
        currentPage = page;

        const start = (page-1) * itempage;
        const end = start + itempage;
        const pageData = data.slice(start,end);

        $items.each(function(index){
            const $item = $(this);
            const dataitem = pageData[index];

            if(dataitem){  // 데이터가 있으면 보여주기
                $item.show();
                $item.find('img').attr('src', dataitem.img);
                $item.find('._hotel').text(dataitem.hotel);
                $item.find('._title').text(dataitem.title);
                $item.find('._name').text(dataitem.name);

                $item.find('.intro_txt1').text("타입");
                $item.find('.intro_text').eq(0).find('._intro_txt').text(dataitem.type);

                $item.find('.intro_txt3').text("위치");
                $item.find('.intro_text').eq(1).find('._intro_txt').text(dataitem.location);

                $item.find('.intro_txt5').text("예약 문의");
                $item.find('.intro_text').eq(2).find('._intro_txt').text(dataitem.phone);
            } else {   // 데이터 없으면 숨기기
                $item.hide();
            }
        });

        // active 클래스 갱신
        $pagination.removeClass('active');
        $pagination.eq(page-1).addClass('active');
    }

    // 페이지 번호 클릭
    $pagination.each(function(index){
        $(this).on('click', function(e){
            e.preventDefault();
            renderPage(index+1);
        });
    });

    // prev 클릭
    $prev.on('click', function(e){
        e.preventDefault();
        if(currentPage > 1) renderPage(currentPage-1,filteredData);
    });

    // next 클릭
    $next.on('click', function(e){
        e.preventDefault();
        const totalPages = Math.ceil(filteredData.length / itempage);
        if(currentPage < totalPages) renderPage(currentPage+1,filteredData);
    });

    // 상단 탭 클릭
    $tabs.on('click', function() {
        $tabs.removeClass('on');
        $(this).addClass('on');

        const type = $(this).data('type').toString().trim();
        filteredData = type === 'all' ? diningData : diningData.filter(d => d.title.toString().trim() === type);

        renderPage(1, filteredData);
    });
    
    // 초기 상태
    filteredData = diningData;  // 처음에는 전체 데이터
    renderPage(1, filteredData);
});*/



$(function() {
    const $itemlist = $('.item_list');       // item 목록
    const $items = $itemlist.find('.item');  // 각 item
    const $prev = $('.prev');                
    const $next = $('.next');
    const $tabs = $('.dining_list li');      // 상단 탭
    const itempage = 9;                      // 한 페이지에 보여줄 item 수

    let currentPage = 1;                     // 현재 페이지
    let filteredData = [];                   // 필터링된 데이터

    // 샘플 데이터 
    const diningData = [
        { 
            img: "img/sec4/tab1/5.png", 
            hotel: "서울신라호텔", 
            title: "레스토랑", 
            name: "라연", 
            type: "한식", 
            location: "23층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/bar/1.jpg", 
            hotel: "서울신라호텔", 
            title: "라운지 & 바", 
            name: "더 라이브러리", 
            type: "라운지 & 바", 
            location: "1층", 
            phone: "02-2221-5516" 
        },
        { 
            img: "img/sec4/tab1/3.png", 
            hotel: "서울신라호텔", 
            title: "레스토랑", 
            name: "아리아께", 
            type: "일식", 
            location: "2층", 
            phone: "012-2151-1124" 
        },
        { 
            img: "img/sec4/tab1/2.png", 
            hotel: "서울신라호텔", 
            title: "레스토랑", 
            name: "팔선", 
            type: "중식", 
            location: "2층", 
            phone: "022-23626-2352" 
        },
        { 
            img: "img/sec4/tab1/1.png", 
            hotel: "서울신라호텔", 
            title: "레스토랑", 
            name: "더 파크뷰", 
            type: "한식", 
            location: "1층", 
            phone: "012-4442-1251" 
        },
        { 
            img: "img/sec4/tab1/bar/2.jpg", 
            hotel: "서울신라호텔", 
            title: "라운지 & 바", 
            name: "더 디스틸러스 라이브러리", 
            type: "라운지 & 바", 
            location: "1층", 
            phone: "02-3473-8568" 
        },
        { 
            img: "img/sec4/tab1/bar/3.jpg", 
            hotel: "서울신라호텔", 
            title: "라운지 & 바", 
            name: "더 이그제큐티브 라운지", 
            type: "라운지", 
            location: "23층", 
            phone: "02-1241-7807" 
        },
        { 
            img: "img/sec4/tab1/bakery/1.jpg", 
            hotel: "서울신라호텔", 
            title: "베이커리", 
            name: "패스트리 부티크", 
            type: "베이커리", 
            location: "1층", 
            phone: "02-6237-6946" 
        },
        { 
            img: "img/sec4/tab2/2.png", 
            hotel: "제주신라호텔", 
            title: "레스토랑", 
            name: "올 데이 다이닝", 
            type: "뷔페", 
            location: "3층", 
            phone: "02-3727-2362" 
        },
        { 
            img: "img/sec4/tab1/bar/1.jpg", 
            hotel: "제주신라호텔", 
            title: "라운지 & 바", 
            name: "바당", 
            type: "라운지", 
            location: "6층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab2/1.png", 
            hotel: "제주신라호텔", 
            title: "레스토랑", 
            name: "하노데", 
            type: "일식", 
            location: "3층", 
            phone: "164-735-5339" 
        },
        { 
            img: "img/sec4/tab1/4.png", 
            hotel: "서울신라호텔", 
            title: "레스토랑", 
            name: "콘티넨탈", 
            type: "양식", 
            location: "23층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/1/1.png", 
            hotel: "신라스테이 광화문", 
            title: "레스토랑", 
            name: "신라스테이 광화문 cafe", 
            type: "뷔페", 
            location: "8층", 
            phone: "02-6060-1234" 
        },
        { 
            img: "img/sec4/tab1/bar/1.jpg", 
            hotel: "제주신라호텔", 
            title: "라운지 & 바", 
            name: "올래 바", 
            type: "바", 
            location: "6층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/bar/1.jpg", 
            hotel: "제주신라호텔", 
            title: "라운지 & 바", 
            name: "풀사이드 바", 
            type: "바", 
            location: "6층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab1/bakery/1.jpg", 
            hotel: "제주신라호텔", 
            title: "베이커리", 
            name: "패스트리 부티크", 
            type: "베이커리", 
            location: "6층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab4/xian/1.png", 
            hotel: "신라모노그램 서안", 
            title: "레스토랑", 
            name: "다이닝 M", 
            type: "뷔페", 
            location: "1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab4/xian/2.png", 
            hotel: "신라모노그램 서안", 
            title: "레스토랑", 
            name: "라향", 
            type: "한식", 
            location: "2층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab4/xian/3.png", 
            hotel: "신라모노그램 서안", 
            title: "레스토랑", 
            name: "쯔웨이", 
            type: "광동 요리", 
            location: "2층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab4/xian/bar/1.png", 
            hotel: "신라모노그램 서안", 
            title: "라운지 & 바", 
            name: "로비 라운지", 
            type: "라운지", 
            location: "1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab4/danang/1.jpg", 
            hotel: "신라모노그램 다낭", 
            title: "레스토랑", 
            name: "다이닝 M", 
            type: "뷔페", 
            location: "본관 B1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab4/danang/2.jpg", 
            hotel: "신라모노그램 다낭", 
            title: "레스토랑", 
            name: "비스트로 M", 
            type: "뷔페", 
            location: "레지던스 1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab4/danang/bar/1.jpg", 
            hotel: "신라모노그램 다낭", 
            title: "라운지 & 바", 
            name: "바 M", 
            type: "바", 
            location: "본관 1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab4/danang/bar/2.jpg", 
            hotel: "신라모노그램 다낭", 
            title: "라운지 & 바", 
            name: "풀 바", 
            type: "바", 
            location: "야외 풀사이드", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/1/2.png", 
            hotel: "신라스테이 마포", 
            title: "레스토랑", 
            name: "신라스테이 마포 cafe", 
            type: "뷔페", 
            location: "2층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/1/3.png", 
            hotel: "신라스테이 서대문", 
            title: "레스토랑", 
            name: "신라스테이 서대문 cafe", 
            type: "뷔페", 
            location: "지하 1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/2/1.png", 
            hotel: "신라스테이 역삼", 
            title: "레스토랑", 
            name: "신라스테이 역삼 cafe", 
            type: "뷔페", 
            location: "3층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/2/2.png", 
            hotel: "신라스테이 서초", 
            title: "레스토랑", 
            name: "신라스테이 서초 cafe", 
            type: "뷔페", 
            location: "3층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/2/3.png", 
            hotel: "신라스테이 구로", 
            title: "레스토랑", 
            name: "신라스테이 구로 cafe", 
            type: "뷔페", 
            location: "2층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/2/4.png", 
            hotel: "신라스테이 삼성", 
            title: "레스토랑", 
            name: "신라스테이 삼성 cafe", 
            type: "뷔페", 
            location: "20층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/3/1.png", 
            hotel: "신라스테이 동탄", 
            title: "레스토랑", 
            name: "신라스테이 동탄 cafe", 
            type: "뷔페", 
            location: "7층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/3/2.png", 
            hotel: "신라스테이 천안", 
            title: "레스토랑", 
            name: "신라스테이 천안 cafe", 
            type: "뷔페", 
            location: "3층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/3/3.png", 
            hotel: "신라스테이 전주", 
            title: "레스토랑", 
            name: "신라스테이 전주 cafe", 
            type: "뷔페", 
            location: "1층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/3/4.png", 
            hotel: "신라스테이 울산", 
            title: "레스토랑", 
            name: "신라스테이 울산 cafe", 
            type: "뷔페",  
            location: "2층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/3/5.png", 
            hotel: "신라스테이 해운대", 
            title: "레스토랑", 
            name: "신라스테이 해운대 cafe", 
            type: "뷔페", 
            location: "2층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/3/6.png", 
            hotel: "신라스테이 서부산", 
            title: "레스토랑", 
            name: "신라스테이 서부산 cafe", 
            type: "뷔페", 
            location: "3층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/3/7.png", 
            hotel: "신라스테이 여수", 
            title: "레스토랑", 
            name: "신라스테이 여수 cafe", 
            type: "뷔페", 
            location: "7층", 
            phone: "02-2230-3367" 
        },
        { 
            img: "img/sec4/tab3/3/8.png", 
            hotel: "신라스테이 플러스 이호테우", 
            title: "레스토랑", 
            name: "신라스테이 플러스 이호테우 cafe", 
            type: "뷔페", 
            location: "", 
            phone: "02-2230-3367" 
        }
    ];

    // 페이지 렌더링
    function renderPage(page, data){
        currentPage = page;

        const start = (page-1) * itempage;
        const end = start + itempage;
        const pageData = data.slice(start, end);

        $items.each(function(index){
            const $item = $(this);
            const itemData = pageData[index];

            if(itemData){
                $item.show();
                $item.find('img').attr('src', itemData.img);
                $item.find('._hotel').text(itemData.hotel);
                $item.find('._title').text(itemData.title);
                $item.find('._name').text(itemData.name);

                $item.find('.intro_txt1').text("타입");
                $item.find('.intro_text').eq(0).find('._intro_txt').text(itemData.title);

                $item.find('.intro_txt3').text("위치");
                $item.find('.intro_text').eq(1).find('._intro_txt').text(itemData.location);

                $item.find('.intro_txt5').text("예약 문의");
                $item.find('.intro_text').eq(2).find('._intro_txt').text(itemData.phone);
            } else {
                $item.hide();
            }
        });

        // pagination active 갱신
        $('.pagination_item').removeClass('active');
        $('.pagination_item').eq(page-1).addClass('active');
    }

    // pagination 생성
    function generatePagination(data){
        const totalPages = Math.ceil(data.length / itempage);
        const $paginationWrapper = $('.pagination');

        // 기존 페이지 번호 삭제
        $paginationWrapper.find('.pagination_item').remove();

        // 새로운 페이지 번호 생성
        for(let i=1; i<=totalPages; i++){
            const $page = $(`<a href="#" class="pagination_item">${i}</a>`);
            if(i === 1) $page.addClass('active');
            $page.insertBefore($paginationWrapper.find('.next'));
        }

        // 클릭 이벤트
        $paginationWrapper.find('.pagination_item').off('click').on('click', function(e){
            e.preventDefault();
            const page = Number($(this).text());
            renderPage(page, filteredData);
        });
    }

    // prev 클릭
    $prev.on('click', function(e){
        e.preventDefault();
        if(currentPage > 1){
            renderPage(currentPage-1, filteredData);
        }
    });

    // next 클릭
    $next.on('click', function(e){
        e.preventDefault();
        const totalPages = Math.ceil(filteredData.length / itempage);
        if(currentPage < totalPages){
            renderPage(currentPage+1, filteredData);
        }
    });

    // 상단 탭 클릭 (title 기준)
    $tabs.on('click', function() {
        $tabs.removeClass('on');
        $(this).addClass('on');

        const type = $(this).data('type');
        filteredData = diningData.filter(d => type === 'all' || d.title === type);

        generatePagination(filteredData);
        renderPage(1, filteredData);
    });

    // 초기 화면 (전체)
    filteredData = diningData;
    generatePagination(filteredData);
    renderPage(1, filteredData);
});