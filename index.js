$(document).ready(function(){
	newGrid(16);

$("#regular").click(function(){
	$("#container").empty();
	var size=prompt("How many squares per side do you want in the new grid?",16);
	size=parseInt(size);
	newGrid(size);
});

$("#random").click(function(){
	$("#container").empty();
var size2=prompt("How many squares per side do you want in the new grid?",16);
size2=parseInt(size2);
	newGrid(size2);
	$(".square").hover(function(){
	var r=getRandom();
	var g=getRandom();
	var b=getRandom();
		$(this).css({"background-color":"rgb(" + r + "," + g + "," + b + ")"});
		
	});


});
});


function newGrid(num){
	var h=$("#container").height();
	var sqr=h/num;
	var squares=num*num;
	var txt=" ";
	for(var i=0;i<squares;i++)
	{
		txt +="<div class='square'></div>";
	}

	$("#container").append(txt);
	$(".square").width(sqr);
	$(".square").height(sqr);

	$(".square").hover(function(){
		$(this).toggleClass("color");
	});

}

function getRandom(){
	var color= Math.floor(Math.random() * 256);
	color=parseInt(color);
	return color;

}

	
	
