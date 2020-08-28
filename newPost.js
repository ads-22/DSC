var n=document.querySelector("input");
var technology=document.querySelector("textarea");
var description=document.querySelectorAll("textarea")[1];
var submit=document.querySelector(".btn")
// var form=document.querySelector(".new");
// var confirm=document.querySelector(".confirm");

var names=[];
var tech=[];
var desc=[];

submit.addEventListener("click",function(){
    names.push(n.value);
    tech.push(technology.value);
    desc.push(description.value);

/*   form.style.display=none;
    confirm.textContent="Post added succesfully";*/
})
