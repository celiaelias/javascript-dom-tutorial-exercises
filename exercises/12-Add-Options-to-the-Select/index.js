let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here

let myString = document.getElementById("mySelect");
for (let i = 0; i < countries.length; i++) {
	let elem = document.createElement("option")
	elem.value = countries[i]
	elem.innerHTML = countries[i]
	myString.appendChild(elem);
	
}

myString.addEventListener("change", function(item) {
    alert(item.target.value);
	console.log(item);
	console.log(this.value);
});
