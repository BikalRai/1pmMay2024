// $(document).ready(
// 	$("body").css("backgroundColor", "red")
// );

// $("body").css("backgroundColor", "black");

// $(".h1").css("color", "blue");

$(".h1").css({
	backgroundColor: "blue",
	color: "cyan",
	fontSize: "5rem"
});

$("#btn1").click(function() {
	$("p").css("fontSize", "2rem");
});

$("#btn2").click(function() {
	$("p").addClass("my-class")
});

$("#btn3").click(function() {
	$("p").removeClass("my-class");
});

$("#btn4").click(function() {
	$("p").toggleClass("my-class");
});


$("h3").css({
	backgroundColor: "black",
	color: "white"
});


// fade
$("#fout").click(function() {
	$("h3").fadeOut(2000);
});

$("#fin").click(function() {
	$("h3").fadeIn(2000);
});

$("#ftoggle").click(function() {
	$("h3").fadeToggle(2000);
});


//  slide
$("#slideup").click(function() {
	$("h3").slideUp(2000);
});

$("#slidedown").click(function() {
	$("h3").slideDown(2000);
});

$("#slidetoggle").click(function() {
	$("h3").slideToggle(2000);
});


$("#stop").click(function() {
	$("h3").stop();
});

$("#mul").click(function() {
	$("h3").fadeOut().fadeIn(1000).slideUp(5000).slideDown(2000);
})
