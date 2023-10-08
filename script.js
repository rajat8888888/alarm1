


let display=document.querySelector(".clock");
let text=document.querySelector("#text");
let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
const audio=new Audio('audio/mixkit-alert-alarm-1005.wav');
audio.loop=true;

let alarmTime=null;
let alarmTimeout=null;
function updateTime(){
let date=new Date();
let hours=formateTime(date.getHours());
let minuts=formateTime(date.getMinutes());
let second=formateTime(date.getSeconds());

let time=hours+":"+minuts+":"+second;
display.innerText=time;
}

setInterval(updateTime,1000);

function formateTime(time){
    if(time<10){
        return "0"+time
    }
    return time
}


function setAlarmTime(value){
alarmTime=value;
}

function setAlarm(){
  
    if(alarmTime){
        const current=new Date();
        const timeToAlarm=new Date(alarmTime);
        if(timeToAlarm>current){
             text.innerText=`Alarm is ${alarmTime}` 
             btn1.style.backgroundColor = "green";
             btn2.style.backgroundColor = "rgb(85, 82, 47)";
            const timeout=timeToAlarm.getTime()-current.getTime();
            alarmTimeout=setTimeout(function(){
                audio.play();
            },timeout)
        }
        else{
            text.innerText="Check your time"
        }
    }
}

function clearAlarm(){
    if(alarmTime){
    audio.pause();
      text.innerText="Alarm is Off"
      btn2.style.backgroundColor = "red";
      btn1.style.backgroundColor = "aliceblue";
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
       
    }
}
}