
function setTime(){
    var hour = document.getElementById('hour');
    var min = document.getElementById('min');
    var sec = document.getElementById('sec');

    const date = new Date();

    hour.innerText = date.getHours();
    min.innerText = date.getMinutes();
    sec.innerText = date.getSeconds();

}

setTime()
setInterval(setTime,1000);