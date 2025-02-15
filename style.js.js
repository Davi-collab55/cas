document.addEventListener("DOMContentLoaded", function(){

   
    document.getElementById("bt").addEventListener("click", function (){
let mail = document.getElementById("em").value;

let snha = document.getElementById("sn").value;

let ms = document.getElementById("er");

 

    if(mail && snha){
        window.open("https://www.youtube.com/results?search_query=como+fazer+um+site+com+javascript" , '_blank');
    }else {
   ms.style.color = "red" ;
   ms.innerHTML = "por favor precha os campus";

   setTimeout(() => {
    ms.innerHTML = " ";

   }, 3000)

}




});







});