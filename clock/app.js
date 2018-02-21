const second = document.querySelector('.seconds');
const hour = document.querySelector('.hours');
const  minute = document.querySelector('.minutes');

function setPos(){
    const date = new Date();
    var degrees;
    var seconds = date.getSeconds();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    //console.log(seconds);
    degrees = (seconds/60) * 360 ;
    second.setAttribute('style',`transform:rotate(${degrees}deg)`);
    degrees = (minutes/60) * 360 ;
    minute.setAttribute('style',`transform:rotate(${degrees}deg)`);
    degrees = (hours/12) * 360 ;
    hour.setAttribute('style',`transform:rotate(${degrees}deg)`);
}
setInterval(setPos,1000);
