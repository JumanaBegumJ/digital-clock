
function updateClock(){
    var currentDate=new Date();
    var hours=currentDate.getHours();
    var minutes=currentDate.getMinutes();
    var seconds=currentDate.getSeconds();
    var jum='AM';

    if(hours>12){
        hours=hours-12;
        jum="PM"
    }
    minutes=(minutes<10?"0":"")+minutes;
    seconds=(seconds<10?"0":"")+seconds;

    var clock=document.querySelector(".clock");
    clock.textContent=hours+": "+minutes+": "+seconds+"  "+jum;

}
 setInterval(updateClock,1000);
 updateClock();
 