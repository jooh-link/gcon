$(function(){
	
	//탭메뉴
	$('.news').tabs({
		event: "mouseover"
	});
	
	$('.notice').tabs({
		event: "mouseover"
	});
	
	$('.calendar').tabs({
		event: "click"
	});
	
	//캘린더 - 날짜 클릭시 강조 효과
	$('.calendar .date_tab li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
	
	//Back to Top 버튼
	var $btnTop = $('.btn_top');
	
	$(window).scroll(function(){
		if($(this).scrollTop() >= 600){
			$btnTop.fadeIn();
		} else {
			$btnTop.fadeOut();
		}
	});
	
	$btnTop.click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop:0},300);
	});
	
	//비디오 - 섬네일 목록 클릭하면 영상 바꾸기
	var $thumbList = $('.video .thumb-list li');
	var $iframe = $('.video .ytb iframe');
	
	$thumbList.click(function(e){
		e.preventDefault();
		
		var index = $(this).index();
		var video = $iframe.eq(index);
		video.addClass('active').siblings($iframe).removeClass('active');
	});
});





















