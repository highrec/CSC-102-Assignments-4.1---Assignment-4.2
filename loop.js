function superFly()
{
    mySound = new sound("Curtis_Mayfield_Think.mp3")
    //mySound is a variable. 
    mySound.play();
  
}

function sound(src)
{
// the above funtion is a sound function. Do not change it//
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play();
    }
}

function doloop() 
{
alert ("do loop")
//The doloop alert will appear when before the code functioins
var currTime = 10;
//// var stands for variable. currTime = 0 means that the current time wil start at 10 
var i = 1;
do
{
  setTimeout(function()
  {
  document.getElementById("timer").innerHTML = "time elapsed do loop =" + currTime;
  currTime =  currTime - 1;
  }, 1000 * i);
  i += 1;
} while (i <12)
//The while loop function checks to see if the count is less than 12
}

function whileloop() 
{
alert ("while loop")
var currTime = 0;
var i = 1;
while (i <12)
 
{
  setTimeout(function()
{
  document.getElementById("timer").innerHTML = "time elapsed while loop =" + currTime;
  currTime =  currTime + 1;
  }, 1000 * i);
  i += 1;
};
}

function forloop() 
//the funtion above is a forloop function 
{
alert ("For Loop")
var currTime = 0;
// var stands for variable. currTime = 0 means that the current time wil start at 0 
var i = 1;
for(i = 1; i <12; i++)
{
  setTimeout(function()
  {
  document.getElementById("timer").innerHTML = "time elapsed for loop =" + currTime;
  currTime =  currTime + 1;
  }, 1000 * i);
 
};

}


function terminateSong()
//This function is programmed to terminate the song
{
    window.location.reload();
    //reloading the webpage the song will stop
}






