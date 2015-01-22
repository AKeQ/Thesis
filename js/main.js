$(document).ready(function(){
	// 隱藏全部文章
	$('ul.navigation li a').each(function(){
		$($(this).attr('href')).hide();
	});
	// 預設顯示第一個Nav
	var _showNav = 0;
	var $defaultLi = $('ul.navigation li').eq(_showNav).addClass('active');
	$($defaultLi.find('a').attr('href')).show();
	// 點擊 Nav
	$('ul.navigation li a').click(function() {
		var $this = $(this),
			_clickNav = $this.attr('href');
		var _node_Par = $this.parent();
		var _node_gPar = $this.parent().parent();

		if(_node_gPar.is('.navigation')){ // 判斷是否點擊第一層選項

			if(_clickNav == '#ch5'){ // 擁有子選單

				//顯示第一層子選單
				$this.siblings('ul').stop().slideToggle();
				$this.siblings('ul').find('li').children('ul').stop().slideUp(); // 收起第二層子選單
				//
				_node_Par.addClass('active').siblings('.active').removeClass('active'); // li

				$(_clickNav).stop(false, true).fadeIn();
/*
				$(_clickNav).find('div').filter(function() {
					var element = $(this);
					if(element.css('display') == 'block'){
						flag = false;
					}
				});
*/
				return false;
			}else{
				_node_Par.siblings().find('ul').stop().slideUp(); // 收起擁有子選單的 Nav
				_node_Par.addClass('active').siblings('.active').removeClass('active'); // li
				$(_clickNav).stop(false, true).fadeIn().siblings().hide();
				//將兄弟元素中，擁有子選單中的選項文章都隱藏
				_node_Par.siblings().find('ul li > a ').each(function(){
					$($(this).attr('href')).hide();
				});
				return false;
			}
		}else{
			var _nodeLayer1 = $this.closest('ul').parent().find('a').attr('href');

			if(_nodeLayer1 == "#ch5"){ // 判斷祖節點是否為 #ch5
				if(_node_Par.children('ul').length == 0){ // 若節點下，沒有子選單 -> sub2
					_node_Par.siblings().children('ul').stop().slideUp(); // 收起擁有子選單的 Nav
					_node_Par.parentsUntil('.navigation').removeClass('active');
					$(_nodeLayer1).siblings().hide();
					$(_clickNav).stop(false, true).fadeIn().siblings().hide();
					//將兄弟元素中，擁有子選單中的選項文章都隱藏
					$(_node_Par).siblings().find('ul li > a ').each(function(){
						$($(this).attr('href')).hide();
					});
					return false;
				}else{ // 若節點下，有子選單 -> sub1

					$this.siblings('ul').stop().slideToggle();//顯示第二層子選單
					_node_Par.addClass('active').siblings('.active').removeClass('active'); // li
					_node_Par.parentsUntil('.navigation').removeClass('active');
					$(_clickNav).stop(false, true).fadeIn();
					/*var flag = $(_clickNav).find('div').filter(function() {
						var element = $(this);
						if(element.css('display') == 'block'){
							return true;
						}
					});
					if(!flag){
						$(_clickNav).find('div').hide();
					}*/
					return false;
				}
			}else{
				_node_Par.addClass('active').siblings('.active').removeClass('active');
				_node_Par.parentsUntil('.navigation').removeClass('active');
				$(_clickNav).stop(false, true).fadeIn().siblings().hide();
				$(_nodeLayer1).siblings().hide();
				console.log($(_nodeLayer1).siblings());
				$("#ch5").siblings().hide();
				return false;
			}
		}
	}).find('a').focus(function(){
		this.blur();
	});
	$("#view a.gallery").prettyPhoto({
		animation_speed:'normal',
		theme:'facebook',
		opacity: 0.80,
		show_title: true,
		social_tools:false
		});
	$("a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed:'normal',
		theme:'facebook',
		opacity: 0.80,
		show_title: true,
		social_tools:false,
		modal: true,
		
	});
});
