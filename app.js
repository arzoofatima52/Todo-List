
// ----------list items-------
// list.setAttribute('class', 'list')
var list = document.getElementById('todo-list') 


// ---------adding to list -----------
function addlist(){

    var li = document.createElement("li");
    var inputValue = document.getElementById("list-item").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.setAttribute('class', 'btnli')
    if (inputValue === '') {
      alert("Please fill the space");
    } else {
      document.getElementById("todo-list").appendChild(li);
    }
    document.getElementById("list-item").value = "";
    

    // -------edit button-------
    var editbtn = document.createElement('button')
    var editnode = document.createTextNode('Edit')
    editbtn.appendChild(editnode)
    editbtn.setAttribute('class', 'btne')
    editbtn.setAttribute('onclick' , 'editItem(this)')
    li.appendChild(editbtn)

    // ---------delete button-----------

    var delbtn = document.createElement('button')
    var btnnode = document.createTextNode('Delete')
    delbtn.appendChild(btnnode)
    delbtn.setAttribute('class', 'btnd')
    delbtn.setAttribute('onclick','deleteitem(this)')
    li.appendChild(delbtn) 


}

function editItem(element){
    var v = element.parentNode.firstChild.nodeValue
    var edit = prompt("Enter updated value ", element.parentNode.firstChild.nodeValue )
    element.parentNode.firstChild.nodeValue = edit
}

function deleteitem(element){
    element.parentNode.remove()
}

function alldel(){
    list.innerHTML = ""
}
if(list.innerHTML == ""){
    alert("Please fill the space first")
}