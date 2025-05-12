// // const min = document.getElementById("min");
// // const sec = document.getElementById("sec");
// // const milis = document.getElementById("milis");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const button = document.getElementById("button");
let intervalid;
let startTime;
let currentTime = new Date();
let minet = currentTime.getMinutes();
let secound = currentTime.getSeconds();
let milisecound = currentTime.getMilliseconds();
play.addEventListener("click", () => {
  play.style.display = "none";
  startTime = Date.now();
  stop.style.display = "block";
  Watch();
});
function Watch() {
  intervalid = setInterval(() => {
    let currentTime = new Date();
    let minet = currentTime.getMinutes();
    let secound = currentTime.getSeconds();
    let milisecound = currentTime.getMilliseconds();
    document.getElementById("min").innerHTML = minet;
    document.getElementById("sec").innerHTML = secound;
    document.getElementById("milis").innerHTML = milisecound;
  }, 10);
}
stop.addEventListener("click", () => {
  clearInterval(intervalid);
  stop.style.display = "none";
  play.style.display = "block";
});
