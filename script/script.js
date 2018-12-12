let elementsLeft = new Array();
let elementsRight = new Array();

window.addEventListener("load", () => {
	let rightWindow = document.getElementById("right-wrapper");
	let leftWindow = document.getElementById("left-wrapper");
	let namesLeft = [
		"Müller Stefan",
		"Trauner Lukas",
		"Hochhauser Felix",
		"Lengauer Valentin",
		"Schnell Nikolaus",
		"Scholl Sebastian",
		"Dorfinger Jonas",
    "Wiesinger Jonas",
		"Edlinger Philipp",
		"Ecker Quirin"
	];

	let namesRight = [
		"Reichenfelser Ramona",
		"Schrattenecker Flora",
		"Pamminger Victoria",
		"Seiringer Julia",
		"Mair Paula",
		"Zopf Jonas",
		"Zauner Alexander",
		"Schein Cornelia",
		"Putz Simon",
		"Noah Fassbender"
	];

	for(let i = 0; i < namesLeft.length; i++) {
		elementsLeft[i] = document.createElement("div");
		elementsLeft[i].classList.add("entry");
		elementsLeft[i].textContent = namesLeft[i];
		elementsLeft[i].addEventListener("click", clickManager);
		leftWindow.appendChild(elementsLeft[i]);
	}

	for(let i = 0; i < namesRight.length; i++) {
		elementsRight[i] = document.createElement("div");
		elementsRight[i].classList.add("entry");
		elementsRight[i].textContent = namesRight[i];
		elementsRight[i].addEventListener("click", clickManager);
		rightWindow.appendChild(elementsRight[i]);
	}
});
window.onload = () => {
	document.getElementById("left").addEventListener("click", () => {
		let rightWindow = document.getElementById("right-wrapper");
		let leftWindow = document.getElementById("left-wrapper");

		moveElements(rightWindow, leftWindow)
	});

	document.getElementById("right").addEventListener("click", () => {
		let rightWindow = document.getElementById("right-wrapper");
		let leftWindow = document.getElementById("left-wrapper");

		moveElements(leftWindow, rightWindow)
	});
}

function moveElements(sourceWindow, destinationWindow) {
	let sourceElements = sourceWindow.children;
	let currentElement = 0;
	while(currentElement < sourceElements.length) {
		let c = sourceElements[currentElement];
		if (c.classList.contains("selected")) {
			destinationWindow.appendChild(c);
			c.classList.toggle("selected");
		} else {
			currentElement++;
		}
	}
}

function clickManager() {
	this.classList.toggle("selected");
}
