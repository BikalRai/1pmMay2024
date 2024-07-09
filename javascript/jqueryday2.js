// .animate()

$("#btnright").click(function() {
	$(".box").animate({
		left: "400px"
	}, 5000)
}) 

$("#btnleft").click(function() {
	$(".box").animate({
		left: "0px"
	}, 1000)
}) 

$("#multimove").click(function() {
	var myBox = $('.box');

	myBox.animate({
		left: "500px"
	}, 2000)

	myBox.animate({
		left: "500px",
		top: "200px"
	}, 1000)

	myBox.animate({
		left: "0",
		top: "200px"
	}, 10000)

	myBox.animate({
		left: "0px",
		top:"0px"
	}, 3000)

})

// .append() adds to the end

$("#add").click(function() {
	$("ul").append("<li>New List Item</li>");
})

$("#remove").click(function() {
	$("ul").remove();
})

$("#empty").click(function() {
	$("ul").empty();
})

console.log($("#add").text());
$("#add").text("Add list element");

$(".box").html("<h1>something</h1>");