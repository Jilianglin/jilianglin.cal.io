var x = document.getElementById("num7").value;
z=11;
x++;
console.log(x);
console.log(z);
   
function textdisplay(){
    var y = document.getElementById("output").value;
    y++;
    console.log(y);
    document.getElementById("output").value++;
}
function cleardisplay(){
    var m = document.getElementById("output");
    console.log(m.value);
    document.getElementById("output").value=0;
}

