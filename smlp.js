var whenReady = function (){

	$(".button").hover(function(){
		console.log("hide");
		$("#login").hide();
	}, function(){
		$("#login").show();
	})


function submit(){
	console.log("submit");
	var password=document.getElementById("ptext").value;
	var username=document.getElementById("text").value;
	if (password == "WeRuleTheWorld!!!"){
		console.log(username);
		return false;
	} else {
		console.log("else");
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


}

$(document).ready(whenReady);
