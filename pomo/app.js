stop = false;
breakLen = 3;


document.getElementById('time').innerHTML =1 + ":" + 00;
function startTimer() {
  if(stop){
  var presentTime = document.getElementById('time').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    console.log(breakLen);
    document.getElementById('time').innerHTML = 25 + ":" + 00;
    //breakTimer();
    stop = false;
  }
  else{
  document.getElementById('time').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
  }
  }
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
document.getElementById('timer').addEventListener('click',function(event){
  event.preventDefault();  
  stop = stop == false ? true : false;
    startTimer();
});
sessionLen = function(val){
  console.log(stop);
  var sessionTime = parseInt(document.getElementById('session').textContent);
  if(stop!=true){
  if(val=='+'){
    document.getElementById('session').textContent = sessionTime+1;
    document.getElementById('time').innerHTML =String(sessionTime+1) + ":" + 00;
  }else{
    document.getElementById('session').textContent = sessionTime-1;
    document.getElementById('time').innerHTML =String(sessionTime-1) + ":" + 00;
  }
  }
}
reset = function(){
  stop = false;
  document.getElementById('time').innerHTML =25 + ":" + 00;
}