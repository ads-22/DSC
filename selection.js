var n=document.querySelector("input");
function store(){
    var a= localStorage.getItem("name_"+n.value);
    if ( a ==null){
        a=localStorage.getItem("tech_"+n.value)
        if (a==null) {            
            alert("User Does Not Exist !!");
            refresh();
        }
    }
    // var keylist=keys(n);
    // for (let index = 0; index < keylist.length; index++) {
    //     const e = keylist[index];
    //     adding(e);
    // }
    adding(a);
};

function adding(applicant) {
    
    var arr=applicant.split(",");
    for (let index = 0,y=0; index < arr.length; index++,y++) {
        const x = arr[index];
        var z="NAME : ";
        if(y==1){
            z="NOTES : ";
        }else if(y==2){
            z="TECHNOLOGY : ";
        }else{
            z="ID : ";
        }
        $("ul").append("<li> "+z+x+"</li>");
        z="NAME : ";
    }
}
function refresh() {
    //n.textContent="";
    location.reload(true);
}
// function keys(n){
//     var keyList=[];
//     for ( var i = 0, len = localStorage.length; i < len; i++ ) {
//         var m=(localStorage.key( i ));
//         if (m=="name_"+n.value || m=="tech_"+n.value) {            
//             m=localStorage.getItem(m);
//             keyList.push(m);
//         }
//     }
//     return keyList;
// }