
function setTime(){
    const date = new Date();
    
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if(hour == 0){
        hour = 12;
    }
    if(hour>12){
        hour = hour-12;
    }

    document.getElementById('hour').innerText = hour;
    document.getElementById('min').innerText = min;
    document.getElementById('sec').innerText = sec;

}

setTime()
setInterval(setTime,1000);