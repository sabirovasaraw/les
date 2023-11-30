let modal = document.getElementById('modal')
let openBox = document.getElementById('open')
let closeBox = document.getElementById('close')

openBox.onclick = function(){
modal.style.display = 'block'
}
 closeBox.onclick = function(){
    modal.style.display = 'none'
 }
 
window.onclick = function(e) {
    if(e.target == modal){
        modal.style.display = 'none'
    };

} 









