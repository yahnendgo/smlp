var whenReady = function (){

	$("form, #quest").hide();
	$(".button").hover(function(){
		console.log("hide");
		$("#login").hide();
	},
	function(){
		$("#login").show();
	})

	$("body").click(function() {
		$("form, #quest").slideDown(3000);
	})
};

$(document).ready(whenReady);