



function add (){

  var name = document.getElementById("name").value;
  var game = document.getElementById("game").value;
  var ulist =  document.getElementById("list");
  if (name === "" || game === ""){
    alert("Field empty");
    return add
  }
  var list1 = document.createElement("li");
  var list2 = document.createElement("span");
  var button =  document.createElement("button");
  button.setAttribute("id","butt");
  button.innerText = "Delete";
  button.onclick = function (){
    alert("Do you want to delete this entry?");
    ulist.removeChild(list1);

  };
  list2.setAttribute("id","span");
  list1.setAttribute("id","lis");
  list2.innerText = game ;
  list1.innerText = name ;
  list2.appendChild(button);
  list1.appendChild(list2);
  ulist.appendChild(list1);




  document.getElementById("name").value= null;
  document.getElementById("game").value= null;



  console.log(list1);
  console.log(list2);

}

