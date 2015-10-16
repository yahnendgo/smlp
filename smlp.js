var whenReady = function (){

	$(".button").hover(function(){
		console.log("hide");
		$("#login").hide();
	},
	function(){
		$("#login").show();
	})
}

$(document).ready(whenReady);