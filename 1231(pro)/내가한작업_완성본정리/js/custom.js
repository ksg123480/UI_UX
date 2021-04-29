$(document).ready(function(){
	
	//페이지 로딩 시 제일 상단으로 스크롤 이동
	$("body,html").stop().animate({"scrollTop":0},1500,"swing");	

	$(window).scroll(function(){
		
		//변수 scroll에 현재 화면을 스크롤한 거리의 수치를 저장
		var scroll = $(this).scrollTop();		
					
		for(var i=0; i<5; i++){
			//스크롤값과 박스의 z축 연동	
			$("section>article").eq(i).css({"transform":"translateZ("   + ((-5000*i)+scroll) +  "px)"});	
			//특정 스크롤 구간에서 스크롤 네비게이션과 박스 활성화
			if(scroll>=i*5000&&scroll<(i+1)*5000){
				$(".scrollNavi li").removeClass();
				$(".scrollNavi li").eq(i).addClass("on");
				$("article").removeClass();				
				$("article").eq(i).addClass("on");
			};
		};	
		
	});
	
	
	//스크롤 네비게이션 클릭 시 스크롤 이동
	$(".scrollNavi li").on("click",function(){
		var a = $(this).index();	
		$("body,html").stop().animate({"scrollTop":5000*a},1500,"swing");		
	});		
	
	//화면에서 마우스 무브 시 박스안의 콘텐츠 움직이기
	//바디에서 마우스의 움직임 이벤트가 발생하면.. 이미지 위치값을 마우스 커서의 위치값과 연동
		//기존 마우스움직임 좌표값에 임의의 값을 나눔, 나누는 값이 클수록 적은 영역을 움직이게 된다.
		//기존 마우스좌표값을 적용하면 너무 넓은 영역을 움직이게 되므로 임의의 값으로 나눈뒤에 빼는 방식을 사용한다
		//값을 빼주면 마우스와 같은 방향으로 움직이고, 더해주면 반대방향으로 움직인다.
	$("body").on("mousemove",function(e){
		var posX = e.pageX/100;
		var posY = e.pageY/150;		
		
		//이미지의 기존 좌표값에서 마우스의 좌표값을 빼거나 더함
		$(".obj11").css({"left":-270-posX , "bottom":-100-posY });
		$(".obj12").css({"right":-593+posX , "top":-85+posY });
		$(".obj13").css({"left":-100+posX , "bottom":-70+posY });
		
		$(".obj21").css({"right":-710-posX , "bottom":-420-posY });
		$(".obj22").css({"right":-60+posX , "bottom":-100+posY });
		
		$(".obj31").css({"right":110-posX , "bottom":70-posY });
		$(".obj32").css({"left":100-posX , "bottom":-180+posY });
		
		$(".obj41").css({"left":350+posX , "bottom":-150-posY });
		$(".obj42").css({"right":167+posX , "top":-255-posY });
		$(".obj43").css({"right":-150+posX , "bottom":-120+posY });
		
		$(".obj51").css({"left":-480-posX , "bottom":-190-posY });
		$(".obj52").css({"right":30+posX , "top":170-posY });
		$(".obj53").css({"left":150+posX , "bottom":50-posY });
		$(".obj54").css({"left":500+posX , "bottom":-100-posY });			
	});
	

});















