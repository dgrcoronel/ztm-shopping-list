var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var list = document.querySelectorAll("li");
var del = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value + " "));
	li.addEventListener("click", toggle);
	li.appendChild(button);
	button.innerHTML = "X";
	button.addEventListener("click", deleteListElement);
	ol.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggle() {
	this.classList.toggle("done");
}

function deleteListElement(e) {
	e.target.parentNode.remove();
	console.log(this);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (var i=0; i < list.length; i++) {
	list[i].addEventListener("click", toggle);
	del[i].addEventListener("click", deleteListElement);
}

