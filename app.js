var minute=0;
var second=0;
var millisecond=0;

var minuteHeading= document.getElementById("minute");
var secondHeading= document.getElementById("second");
var millisecondHeading= document.getElementById("millisecond");
var interval;
var msg;

function timer(){
    millisecond++
    millisecondHeading.innerHTML=millisecond;

    if(millisecond >=100){
    second++
    secondHeading.innerHTML=second;
    millisecond=0;
    }

    if(second>=60){
    minute++
    minuteHeading.innerHTML=minute;
    second=0;
    }
}

function Start(){
interval= setInterval(timer,10)
document.getElementById('Str').disabled = true;
}



function Pause(){
clearInterval(interval)
document.getElementById('Str').disabled = false
}

function Reset(){
minute=0;
second=0;
millisecond=0;
minuteHeading.innerHTML=minute;
secondHeading.innerHTML=second;
millisecondHeading.innerHTML=millisecond;
}


