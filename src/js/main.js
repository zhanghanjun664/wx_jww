//分享弹窗
function xj_share() {
	var toast = '';
	toast += '<div class="share">'+
			'<div class="top">'+
				'<img src="../../img/share.png" />'+
			'</div>'+
			'<div class="button">'+
				'<img src="../../img/btn_know.png" />'+
			'</div>'+
		'</div>';
	$("body").append(toast)
	$(".share").fadeIn(300);
	$(".button img").on("click", function() {
		$(".share").fadeOut(300, function() {
			$(this).remove()
		});
	});
}

//调用
xj_share();
