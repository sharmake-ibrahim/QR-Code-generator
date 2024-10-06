

const QRCode_Generator = ()=> {

        const inputText = document.getElementById('input');
        const img = document.querySelector(" img")
        const Button = document.querySelector(".btn-primary");

       

        inputText.addEventListener("keypress", (event)=> {
            event.key === "Enter" ? displayQR_Code() : ""
        })

        


        

       
      const  displayQR_Code = ()=> {
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText;
        img.classList.add("show");
        inputText.value = "";
        
      }

        Button.addEventListener("click", ()=> {
            displayQR_Code();
            
        });
}

QRCode_Generator()