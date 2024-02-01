// Your code here

document.querySelector("ul").addEventListener("click", function(elem) {
  if(elem.target.classList.contains('fa-trash')) {
    console.log(elem.target.classList);
    elem.target.parentElement.parentElement.remove();
  }
});

document.querySelector('#addToDo').addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span><i class="fa fa-trash"></i></span> ${e.target.value}`;

    document.querySelector('ul').appendChild(listItem);
    e.target.value = '';
  }
});
