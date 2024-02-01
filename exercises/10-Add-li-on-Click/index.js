let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let ulElem = document.querySelector("ul")
	let liElem = document.createElement("li")
	liElem.innerHTML = "Forth element";
	ulElem.appendChild(liElem);
});
