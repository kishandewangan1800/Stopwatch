const stopwatch = document.getElementById("display");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

let startTime;
let elapsedTime = 0;
let stopWatchInterval;

playButton.addEventListener("click",startStopwatch);
pauseButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click",resetStopwatch);

function timeToString(time){
    let dhr = time/(3600000);
    let hh = Math.floor(dhr);

    let dmn = (dhr-hh)*60;
    let mm = Math.floor(dmn);

    let dsc = (dmn-mm)*60;
    let ss = Math.floor(dsc);

    let msc = (dsc-ss)*1000;
    let mss = Math.floor(msc);

    let formatedHH = hh.toString().padStart(2,0);
    let formatedMM = mm.toString().padStart(2,0);
    let formatedSS = ss.toString().padStart(2,0);
    let formatedMSS = mss.toString().padStart(3,0);

    stopwatch.innerHTML = `${formatedHH}:${formatedMM}:${formatedSS}:${formatedMSS}`



}

function startStopwatch(){
    startTime = Date.now()-elapsedTime;

    stopWatchInterval = setInterval(function printTime(){
        elapsedTime = Date.now()-startTime;
        timeToString(elapsedTime);
    },1)
    showButton("Pause");
}

function stopStopwatch(){
    showButton("Play");
    clearInterval(stopWatchInterval);
}

function resetStopwatch(){
    clearInterval(stopWatchInterval);
    showButton("Play");
    elapsedTime = 0;
    stopwatch.innerHTML = "00:00:00:000"
}

function showButton(btn){
    if(btn==="Pause"){
        playButton.style.display ="none";
        pauseButton.style.display = "block";
    }else{
        playButton.style.display ="block";
        pauseButton.style.display = "none";
    }
}