function calculate(){
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
  
    const result = +num1 + +num2
    console.log(result)
}
function printtableOnHtml(){  
    let getNumber = document.querySelector("#table").value
     document.querySelector("#result").innerHTML =  "";
    for(let a =1; a <=10 ;a++){
document.querySelector("#result").innerHTML +=` ${getNumber} x ${a} =  $ { a * getNumber}<br/>` 
  }}