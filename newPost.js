var n=document.querySelector("input");
var technology=document.querySelector("textarea");
var description=document.querySelectorAll("textarea")[1];
var submit=document.querySelector(".btn")

function store(){
    var x=n.value+genRandom();
    var val=[
        n.value,
        technology.value,
        description.value,
        x
    ];
    var key="input_"+n.value;
    localStorage.setItem(key,val);
    alert("Applicant Id is "+x);
}
function genRandom(){
    var x=Math.floor(Math.random() * 1000);
    return x;
}