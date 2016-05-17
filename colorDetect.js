var map = [];
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var imaged = new Image();
imaged.src= "floor0.jpg";
var draw = function(){
    ctx.drawImage(imaged,0,0,500,500);
    console.log(ctx.getImageData(250,250,5,5));

};
      
ctx.drawImage(imaged,0,0,100,100);
ctx.drawImage(imaged,0,0,100,100);

var button = document.getElementById("button");
button.addEventListener("click", draw);
