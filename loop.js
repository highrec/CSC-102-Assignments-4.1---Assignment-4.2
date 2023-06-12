function superFly()
{
    mySound = new sound("Curtis_Mayfield_Think.mp3")
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
var currTime = 10;
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
{
alert ("For Loop")
var currTime = 0;
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
{
    window.location.reload();
    //reloading the webpage the song will stop
}






