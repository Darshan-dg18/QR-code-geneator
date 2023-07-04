let input = document.querySelector(".form input");
let button = document.querySelector(".form button");
let qrImage = document.querySelector(".qrImage img");




button.addEventListener("click", function()  {
     

     let data = input.value;
     if (data.length >0){
    let imgSrc = " https://api.qrserver.com/v1/create-qr-code/?size=120x120&data="+data;

      qrImage.src = imgSrc;
     }
     })
    
   