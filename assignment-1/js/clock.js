const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let name = "";
name = prompt("Please enter your name:", "");
document.getElementById("myName").innerHTML = name;

function showTime(){
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  let day = d.getDay();
  let clock = document.getElementById('myClock');
  clock.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + ` ${weekday[day]}`;
}

setInterval(showTime,1000);