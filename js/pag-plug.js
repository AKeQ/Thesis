$(document).ready(function() {
	$('#ch4-p1').load("html/ch4.html #ch4-1",function(){
		$("#ch4-1 a.gallery").prettyPhoto({
			animation_speed:'normal',
			theme:'facebook',
			opacity: 0.80,
			show_title: true,
			social_tools:false
		});
	});
	$('#ch5-sub1-1').load("html/ch5.html #ch5-1-1",function(){
		$("#ch5-1-1 a.gallery").prettyPhoto({
			animation_speed:'normal',
			theme:'facebook',
			opacity: 0.80,
			show_title: true,
			social_tools:false
		});
	});
	$('#ch5-sub1-2').load("html/ch5.html #ch5-1-2");
	$('#ch5-sub1-3').load("html/ch5.html #ch5-1-3",function(){
		$("#ch5-1-3 a.gallery").prettyPhoto({
			animation_speed:'normal',
			theme:'facebook',
			opacity: 0.80,
			show_title: true,
			social_tools:false
		});
	});
	
	$("#ch4-paginate").paginate({
	count 		: 3,
	start 		: 1,
	display     : 2,
	border					: true,
	border_color			: '#fff',
	text_color  			: '#fff',
	background_color    	: 'black',
	border_hover_color		: '#ccc',
	text_hover_color  		: '#000',
	background_hover_color	: '#fff',
	images					: false,
	mouse					: 'press',
	onChange     			:
		function(page){
			$('._current','#ch4').removeClass('_current').hide();
			$('#ch4-paginate').hide();
			$('#ch4-p'+page).addClass('_current').delay(200).queue(
				function(nxt){
					$('#ch4-p'+page).load("html/ch4.html #ch4-"+page,
						function(){
							$(this).fadeIn('slow');
							$('#ch4-paginate').show();
							$("#ch4-"+page+" a.gallery").prettyPhoto({
								animation_speed:'normal',
								theme:'facebook',
								opacity: 0.80,
								show_title: true,
								social_tools:false
							});
						});
					nxt();
				});
		}
	});
});