function display(value){
    document.querySelector(".display").value += value;
}
function clearScreen(){
    document.querySelector(".display").value="";
}
function calculate(){
    let p=document.querySelector(".display").value;
    let q=eval(p);
    document.querySelector(".display").value=q;
}