
function setTime(){
    const date = new Date();
    
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var system = hour>=12? 'pm':'am';

    if(hour == 0){
        hour = 12;
    }
    if(hour>12){
        hour = hour-12;
    }
    if(min<10){
        min = '0'+min;
    }
    if(sec<10){
        sec = '0'+sec;
    }

    document.getElementById('hour').innerText = hour;
    document.getElementById('min').innerText = min;
    document.getElementById('sec').innerText = sec;
    document.getElementById('system').innerText = system;
}

setTime()
setInterval(setTime,1000);