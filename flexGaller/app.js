const query = document.querySelectorAll('.panels');
function open(){
    this.classList.toggle('open');
}
function openActive(e){
        //console.log(e.propertyName)
        if(e.propertyName == 'flex-grow'){
            this.classList.toggle('open-active');
        }
}
query.forEach(p => {
    p.addEventListener('click',open);
    p.addEventListener('transitionend',openActive);
});