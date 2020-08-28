var n=document.querySelector("input");
var technology=document.querySelectorAll("textarea")[1];
var notes=document.querySelector("textarea");
var submit=document.querySelector(".btn")

function store(){
    var x=n.value+genRandom();
    var val=[
        n.value,
        notes.value,
        technology.value,
        x
    ];
    var key="name_"+n.value;
    var key2="tech_"+technology.value;
    localStorage.setItem(key,val);
    localStorage.setItem(key2,val);
    alert("Applicant Id is "+x);
};
function genRandom(){
    var x=Math.floor(Math.random() * 1000);
    return x;
}
