let taskList = ["3 Litre Su İç", "Ödevleri Yap", "En Az 3 Saat Kodlama Yap", "Yemek Yap", "50 Sayfa Kitap Oku"];
localStorage.setItem("taskList", JSON.stringify(taskList));

window.addEventListener('load', (event) => {
  loadList();
});

function loadList(){
  let ul = document.getElementById("list");
  ul.innerHTML = "";
  let list = JSON.parse(localStorage.getItem("taskList"));
  list.map((item, index) => {
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("x"));
    span.className = "close";
    span.setAttribute("onclick", `removeFromTodoList(event, ${index})`);
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    li.appendChild(span);
    li.setAttribute("onclick", `taskIsDidOrNot(event)`);
    ul.appendChild(li);
  });
}

function removeFromTodoList(event, index){
  let list = JSON.parse(localStorage.getItem("taskList"));
  list = list.filter((item, i)=>index!==i);
  localStorage.setItem("taskList", JSON.stringify(list));
  loadList();
}

function taskIsDidOrNot(event){
  let item = event.target;
  if(item.className == "checked"){
    item.className = "";
  }else{
    item.className = "checked";
  }
}

function newElement() {
  let taskInput = document.getElementById("task");
  let task = taskInput.value.trim();
  if (task === "") {
    $('.toast.error').toast('show');
  } else {
    let list = JSON.parse(localStorage.getItem("taskList"));
    list.push(task);
    localStorage.setItem("taskList", JSON.stringify(list));
    loadList();
    $('.toast.success').toast('show');
  }
  taskInput.value = "";
}