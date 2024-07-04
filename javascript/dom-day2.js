// classList: add, remove, toggle

const myPara = document.querySelector("p");
myPara.classList.add("class1");

const myH1 = document.querySelector("h1");
myH1.classList.remove("class2");

// creating an element
const myDiv = document.createElement("div");
console.log(myDiv);

// after creation, i have to add: append -> appendChild

const bodyEl = document.querySelector("body");

bodyEl.appendChild(myDiv);

const divEl = document.querySelector(".div1");
const myNewPara = document.createElement("p");
myNewPara.textContent = "Adding some text";
divEl.appendChild(myNewPara);

// event handling
// syntax: element.addEventListener("event", function() {
	//code
//})

// e.g: button.addEventListener("click", function(){})

// event example using event with on

function btnClick() {
	myH1.classList.toggle("class2");
}

// event using addEventListener
const myBtn1 = document.getElementById("btn1");
myBtn1.addEventListener("mouseover", function() {
	myH1.classList.toggle("class2");
})

const mySpan = document.querySelector("#span");
console.log(mySpan.parentElement.parentElement);

document.querySelector("body").addEventListener("keydown", function(event) {
	keyPressed(event); 
});

const keyPressed = function(event) {
	console.log(event.key)
}