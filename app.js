const colors = ["#ff00ff", "#ba55d3", "#c71585", "#ff69b4", "#9932cc"];
const mainText = document.querySelector(".mainText");
const mainButton = document.querySelector(".mainButton");

const height = document.body.clientHeight;
const width = document.body.clientWidth;

let cond = 0;
let yeahCount = 0;

mainButton.addEventListener("mouseover", bigButton);
mainButton.addEventListener("mouseleave", smallButton);


function bigButton() {
	mainButton.classList.add("bigButton");
}

function smallButton() {
	mainButton.classList.remove("bigButton");
}

function congrats(element) {
	element.remove();
	let c = document.createElement("div");
	c.classList.add("congrats");
	c.innerHTML = "СТО УРОВ И ПОЗДРАВЛЕНИЙ!";
	document.querySelector(".container").append(c);
	let cTimerId = setInterval(moveCongrats, 100);
	let tTimerId = setInterval(textShadow, 500);
	let yTimerId = setInterval(yeah, 800);
}

function textShadow() {
	if (mainText.classList.contains("pinkShadow")){
		mainText.classList.remove("pinkShadow");
		mainText.classList.add("blueShadow");
	} else if (mainText.classList.contains("blueShadow")){
		mainText.classList.remove("blueShadow");
		mainText.classList.add("pinkShadow");
	} else {
		mainText.classList.add("pinkShadow");
	}
}

function moveCongrats() {
	let c = document.querySelector(".congrats");
	switch (cond){
	case 0:
		c.style.padding = "3px 0px 0px 0px"
		cond = 1;
		break;

	case 1:
		c.style.padding = "3px 3px 0px 0px"
		cond = 2;
		break;

	case 2:
		c.style.padding = "0px 3px 3px 0px"
		cond = 3;
		break;

	case 3:
		c.style.padding = "0px 0px 3px 0px"
		cond = 0;
		break;
	}	
}

function yeah() {
	if (yeahCount < 50){
		let y = document.createElement('span');
		y.classList.add("yeah")
		
		let x = Math.floor(Math.random() * (width - 200)) + 100;
		y.style.left = `${x}px`;

		x = Math.floor(Math.random() * (height - 400)) + 300;	
		y.style.top = `${x}px`;

		y.innerHTML = "УР!!!"

		x = Math.floor(Math.random() * colors.length);
		y.style.color = colors[x];
		document.body.append(y);
		yeahCount++;
	} else {
		clearInterval(yTimerId);
	}
}