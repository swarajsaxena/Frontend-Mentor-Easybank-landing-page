const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector("#overlay");

hamburger.addEventListener('click', () => {
    
    if( hamburger.classList.contains('open') ){
        
        hamburger.classList.remove('open')
        overlay.classList.remove('overlay')
    }
    else{
        hamburger.classList.add('open')
        overlay.classList.add('overlay');
    }
});