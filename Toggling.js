function start()
{
    alert("in start")
    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;
}

function stop()
{
alert("in stop");
document.getElementById("stopButton").disabled = true;
document.getElementById("startButton").disabled = false;
}

