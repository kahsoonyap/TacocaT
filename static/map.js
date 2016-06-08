var svg = document.getElementById("maps");

var height = Math.floor(screen.height * .6 / 2) * 2;
var width = Math.floor (screen.width * .44 / 2) * 2;
svg.height["baseVal"]["value"] = height;
svg.width["baseVal"]["value"] = width;

var bigMap = document.getElementById("bigMap");
var bH = Math.floor(screen.height * .15/2) *2;
var bW = Math.floor(screen.width * .7/ 2) * 2;
bigMap.height["baseVal"]["value"] = bH;
bigMap.width["baseVal"]["value"] = bW;

var bMaps = [];

var map = document.createElementNS("http://www.w3.org/2000/svg", "image");
map.setAttributeNS("http://www.w3.org/1999/xlink", "href","../static/floor01.jpg");
map.setAttribute("height", height);
map.setAttribute("width",width);
map.setAttribute("x",0);
map.setAttribute("y", 0);
svg.appendChild(map);


for (var i = 0; i < 10; i++){
    var mm = document.createElementNS("http://www.w3.org/2000/svg", "image");
    if (i != 9){
	mm.setAttributeNS("http://www.w3.org/1999/xlink", "href", "../static/floor0"+(i+1)+".jpg");
    }
    else {
	mm.setAttributeNS("http://www.w3.org/1999/xlink", "href", "../static/floor10.jpg");
    }
    mm.setAttribute("height", bH);
    mm.setAttribute("width",bW/4);
    mm.setAttribute("x", i * bW/4);
    mm.setAttribute("y", 0);
    bMaps.push(mm);
    mm.onclick = function(){
	var mapNum = this.href["baseVal"];
	map.setAttributeNS("http://www.w3.org/1999/xlink", "href",mapNum);
	
    };
     bigMap.appendChild(bMaps[i]);
};


var left = document.createElementNS("http://www.w3.org/2000/svg", "image");
var right = document.createElementNS("http://www.w3.org/2000/svg", "image");
left.setAttributeNS("http://www.w3.org/1999/xlink", "href","../static/arrow0.jpg");
right.setAttributeNS("http://www.w3.org/1999/xlink", "href","../static/arrow1.jpg");
left.setAttribute("width" , bW/20);
left.setAttribute("height", bH);
right.setAttribute("width" , bW/20);
right.setAttribute("height", bH);
left.setAttribute("x", 0);
left.setAttribute("y", 0);
right.setAttribute("x", bW - bW/20);
right.setAttribute("y", 0);
bigMap.appendChild(left);
bigMap.appendChild(right);




var transit;
var moving = false;
function slideMap(event){
    var keyCode = event.keyCode;
    switch (keyCode){
    case 39:
	if (bMaps[0].x["baseVal"]["value"] <= bW/2 - bW/8){
	    for (i = 0; i < 10; i++){
		bMaps[i].x["baseVal"]["value"] += 10;
	    }
	}
        break;
    case 37:
	if (bMaps[bMaps.length -1].x["baseVal"]["value"] >= bW/2 + bW/8){
	    for (i = 0; i <10; i++){
		bMaps[i].x["baseVal"]["value"] -= 10;
	    }
	}
	break;
    }
};

right.onclick =function(){
    if (bMaps[0].x["baseVal"]["value"] <= bW/2 - bW/4){
	for (i = 0; i < 10; i++){
	    bMaps[i].x["baseVal"]["value"] += bW/4;
	}
    }
};
left.onclick = function(){
    if (bMaps[bMaps.length - 1].x["baseVal"]["value"] >= bW/2 + bW/8){
	for (i = 0; i <10; i++){
	    bMaps[i].x["baseVal"]["value"] -= bW/4;
	}
    }
};

document.addEventListener("keydown", slideMap, false);

coor = d3.select("maps")
         .on("mousedown",function(){
	     console.log(d3.mouse(this));
	 })

var svg2=d3.select("#maps")
          .on("mousedown", function(){
	      console.log(d3.mouse(this));
	  });
