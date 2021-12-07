$(function () {
    //현재보여지는 비디오를 체크할 변수 만들기
    var showBanner = 0;
    //배너 하나의 너비값 구하기 - 이동거리
    var liWidth = $(".videoBanner>li").width();
    //배너 안에 li 전체를 복사해서
    var obj = $(".videoBanner>li").clone();
    //배너의 마직막에 붙이기
    $(".videoBanner").append(obj);

    //비디오 이동과 회색 비디오 배경이 보이도록
    function moveVideo() {
        $(".videoBanner").stop().animate({
            "margin-left": -20 + (-showBanner * liWidth)
        }, 800)

        $(".videoBanner>li .video").stop().fadeOut(300);
        $(".videoBanner>li").eq(showBanner + 1).children(".video").stop().fadeIn(300);
    }

    // 보여지는개수
    let show = 0;
    let Mbanner=$(".bannerList li ").length;
    
    let obj2 = $(".bannerList li:eq(0)").clone();
    $(".bannerList").append(obj2);

 function BannerS(){
    $(".bannerList").stop().animate({
        marginLeft: -show * 100 +"%"
    },1000)
    $(".circle>li").eq(show).addClass("active").siblings().removeClass("active");
   
}

$(".circle>li").click(function(){
    show=$(this).index();

    BannerS();
})

$(".arrow .Btn .rightBtn_main").on("click", function () {
  if(show == Mbanner-1){
      $(".bannerList").css("margin-left",0);
      show=0;
  }
    show+=1; 

    BannerS();
   
})

$(".arrow .Btn .leftBtn_main").on("click", function () {
    if(show == 0){
      show=Mbanner;
    }
      show-=1; 
     
      BannerS();
     
  })

    // 메인배너
 
    //rightBtn을 클릭하면
    //.videoBanner의 margin-left  값 li하나 크기만큼 왼쪽으 이동
    //-350 + liWidth*1
    //-350 + liWidth*2
    $(".rightBtn").on("click", function () {
        if (showBanner == 3) {
            showBanner = 0;
            $(".videoBanner").css("margin-left", "-350px")
        }
        showBanner++;
        moveVideo();
    })

    //leftBtn
    $(".leftBtn").on("click", function () {
  
        if (showBanner == 0) {
            showBanner = 3;
            $(".videoBanner").css("margin-left", -350 + (-showBanner * liWidth))
        }
        showBanner--;
        moveVideo();
    })

    // setINterval 메인배너
    var bStart = setInterval(function () {
		$(".rightBtn_main").trigger("click");
	}, 4000);

    $(".stop").on("click", function () {
		if ($(this).hasClass("play")) {
            bStart = setInterval(function () {
				$(".rightBtn_main").trigger("click");
			}, 3000);
			$(this).removeClass("play");
		} else {
			clearInterval(bStart);
			$(".stop").addClass("play");
		}
	})

    $(".Best_arrow li").click(function(){
		let arrow = $(this).index();
		console.log(arrow);
        $(".BestWrap .Best_main").stop().animate({
            marginLeft: -arrow * 100 +"%"
        },500)
         $(this).addClass("active").siblings().removeClass("active");
	})

    $(".youList li").click(function(){
        let youList= $(this).index();
        console.log(youList);
      

      $(".thisWrap .this_week").eq(youList).addClass("weekbox").siblings().removeClass("weekbox");
      $(".youList li ").eq(youList).addClass("active").siblings().removeClass("active");
    })

    
   
        
        
       var  $loading = $('#loading');
    

    function loading() {
        $loading.fadeIn();
        setTimeout(function () {
            $loading.fadeOut(1000);
        }, 3000);
    }
    loading();
})
