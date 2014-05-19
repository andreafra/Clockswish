var clockswish = function(){
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
//var currentSeconds = currentTime.getSeconds();
if(currentHours < 10)
{
currentHours= "0" + currentHours;
}
if(currentMinutes < 10) 
{
currentMinutes="0" + currentMinutes;
}

var myName = currentHours +":"+ currentMinutes /*+":"+ currentSeconds*/;

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);

if(10 < 3)
{
    bubbleShape = 'square';
}
else
{
    bubbleShape = 'circle';
}

bounceBubbles();
};
clockswish();
//window.setInterval(clockswish(), 60000)
