let intervalId;
let seconds;
let minuites;
let hours;

function continuebreak() {  
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("pause").disabled = false;
    document.getElementById("resume").disabled = false;

    intervalId = setInterval(() => {
                if(seconds < 59) {
                    seconds++;
                    document.getElementById("seconds").innerHTML ="<h2>"+seconds+"</h2>";
                } else {
                    seconds=0;
                    minuites++;
                    if(minuites<60){
                        document.getElementById("minuites").innerHTML="<h2>"+seconds+"</h2>";
                    }else{
                        minuites=0;
                        hours++;
                        document.getElementById("hours").innerHTML="<h2>"+seconds+"</h2>";
        
                    }
                }
            }, 1000);
}

function stop() {
    clearInterval(intervalId);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("pause").disabled = true;
    document.getElementById("resume").disabled = true;
}

function start() {
    hours = 0;
    minuites = 0;
    seconds = 0;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minuites").innerText = minuites;
    document.getElementById("seconds").innerText = seconds;
    continuebreak();
}

function pause() {
    document.getElementById("stop").disabled = true;
    document.getElementById("pause").disabled = true;
    document.getElementById("resume").disabled = false;
    clearInterval(intervalId);
}

function resume() {
    continuebreak();
}







