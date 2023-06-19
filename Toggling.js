//Tony Baker's Assignment 4.1 Event Driven Programming

function start()
{
    //alert("in start")
    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;
}
//The above functions will either disables/enable the start and stop buttons in onclick
function stop()
{
    //alert("in stop")
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}
//The above functions will either disables/enable the start and stop buttons in onclick

// The function below is like the REFRESH f5 button. It will reload the page, resulting in the stopping of the image and relocating to the start position.
 function stopmeme()
{
    window.location.reload()
    
}

//The below function control movement of the image per the px input it is relative to the X and Y axis of the page.
function start()
{
    var currTime = 10;
    var i = 1;
    var change = 50;
    var image = document.getElementById("imgMeme");
    image.style.left= change + "px";
    image.style.top= change + "px";
    

    do
    {
        setTimeout(function() 
    {
            image.style.left= change + "px";
            image.style.top= change + "px";
            document.getElementById("imgMeme").innerHTML = "X:" + image.style.left + "Y:" + image.style.top;
            currTime = currTime - 1;
            change+=50;
    }   , 1000 * i);
    i += 1;
    } while (i < 12);
}
// The above function is the do condition, this controls the amount of px's the image move per the amount of time set. (50px for 10sec.)
