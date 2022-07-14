var submitBtn = document.querySelector('.submit');
var codeInput = document.querySelector('.code-input');

submitBtn.addEventListener('click' , function(){
    if(codeInput.value === "1234"){
        window.location.href = "exam1.html";
    }
    else{
        const wrongPass = document.getElementById('wrong-pass');
        
        if(wrongPass.classList.contains("disapear")){
            wrongPass.classList.toggle("disapear");
        }
        else{
            return
        }
    }
});