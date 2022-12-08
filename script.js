const toggle=document.querySelector('.toggle');
const bnw=document.getElementById('bnw');
const bodyEl=document.querySelector('body')

toggle.addEventListener('click', function(){
    
    toggle.classList.toggle('active');
    bodyEl.classList.toggle('active')
    let message=bnw.textContent
    if(message===`dark mode`){
        bnw.textContent=`light mode`
    } else{
        bnw.textContent=`dark mode`
    }  
})