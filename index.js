var colorArr = ["green" , "red" , "yellow" , "blue"];


var start = false;
var level = 1;
$(document).keydown(function(){
	if(!start) {

		$("h1").html("Level "+level);
		blink();

		start = true;
	}
});
 
var randColorGenerated = []; 
function blink() {
	clickedArr = [];
	$("h1").html("Level "+level);
	var randNum = Math.floor(Math.random()*4);
	var randColor = colorArr[randNum];
	randColorGenerated.push(randColor);
	$("#"+randColor).addClass("pressed");
	setTimeout(function() {
		$("#"+randColor).removeClass("pressed"),100;
	});
	$("#"+randColor).fadeIn(100).fadeOut(100).fadeIn(100);
	var audio = new Audio("sounds/"+randColor+".mp3");
	audio.play();
	console.log(randColorGenerated);
}



var clickedArr = [];
$(".btn").click(function() {

		var clicked = $(this).attr("id");
		clickedArr.push(clicked);
		$("#"+clicked).fadeIn(100).fadeOut(100).fadeIn(100);
		$("#"+clicked).addClass("pressed");
		setTimeout(function() {
			$("#"+clicked).removeClass("pressed"),100;
		});
		var audio = new Audio("sounds/"+clicked+".mp3");
		audio.play();
	
		console.log(clickedArr);
		check(clickedArr.length - 1);

});


function check(lev) {


	if(randColorGenerated[lev] === clickedArr[lev] ) {
		if(clickedArr.length === randColorGenerated.length){
			level++;
			setTimeout(function(){
				blink();
			},1000);
		}
	}
	else {
		var wrong = new Audio("sounds/wrong.mp3");
		wrong.play();
		$("body").addClass("game-over");
		$("h1").html("you loose press any key to start again");
		setTimeout(function() {
			$("body").removeClass("game-over"),200;
		});
		level = 1;
		start = false;
		$(document).keydown(function(){
			if(!start) {

			$("h1").html("Level "+level);
			blink();

			start = true;
		}
		});
		randColorGenerated = [];

	}
}


$(".start").click(function(){
		if(!start) {

		$("h1").html("Level "+level);
		blink();

		start = true;
	}
});
























