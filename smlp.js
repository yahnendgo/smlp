var whenReady = function (){

	$("form, #quest, #rejected").hide();
	$(".button").hover(function(){
		$("#login").hide();
	}, function(){
		$("#login").show();
	})


function submit(){
	var password=document.getElementById("ptext").value;
	var username=document.getElementById("text").value;
	if (password == "WeRuleTheWorld!!!"){
		console.log(username);
		return false;
	} else {
		$("#rejected").show();
		$('#fuckery').hide(500).show(500).hide(500).show(500).hide(500).show(500).hide(500).show(500).hide(500).show(500);
		return false;
	}
	return false;
}

	// $("button").onClick(function(){
	// 	if (".ptext" == "WeRuleTheWorld!!!") {
	// 		console.log("input.Username");
	// 	} else {
	// 		$("body").hide(10000);
	// 		<a>.fadeIn()
	// }
	// 	});

	$("#login-form").submit(submit)


	$("body").click(function() {
		$("form, #quest").slideDown(3000);

	});
}
$(document).ready(whenReady);
