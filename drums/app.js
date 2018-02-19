window.addEventListener('keydown',function(e){

    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    key.innerHTML = "playng";
    key.classList.add('playing');
    console.log(key);
});

const keys = document.querySelectorAll("button");
keys.forEach(function(val){
        var x = val.dataset.key;
        val.addEventListener('transitionend',function(e){
                if(e.propertyName != "transform") return;
                this.classList.remove('playing');
                this.innerHTML = String.fromCharCode(x);
                //console.log(e);
        });
});
console.log(keys);