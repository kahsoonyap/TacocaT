var map = [];
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var imaged = new Image();
//imaged.crossOrigin = "anonymous";
imaged.src= "floor0.jpg";
ctx.fillStyle = "red";
var draw = function(){
    ctx.drawImage(imaged,0,0,500,500);
    console.log(ctx.getImageData(250,250,5,5));
    ctx.fillRect(250,250,1,1);
    console.log(ctx.getImageData(250,250,5,5));
};
      

var button = document.getElementById("button");
button.addEventListener("click", draw);
