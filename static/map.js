var svg = document.getElementById("maps");
var height = Math.floor(screen.height * .7 / 2) * 2;
var width = Math.floor (screen.width * .5 / 2) * 2;
svg.height["baseVal"]["value"] = height;
svg.width["baseVal"]["value"] = width;

var bigMap = document.getElementById("bigMap");
var bH = Math.floor(screen.height * .15/2) *2;
var bW = Math.floor(screen.width * .7/ 2) * 2;
bigMap.height["baseVal"]["value"] = bH;
bigMap.width["baseVal"]["value"] = bW;

var bMaps = [];

var maps = [];
for (var i = 0; i < 10; i++){
    var m = document.createElementNS("http://www.w3.org/2000/svg", "image");
    m.setAttributeNS("http://www.w3.org/1999/xlink", "href","..static/floor"+i+".jpg");
    m.setAttribute("height", height);
    m.setAttribute("width",width);
    m.setAttribute("x", i * (width + 100));
    m.setAttribute("y", 0);
    maps.push(m);
    svg.appendChild(maps[i]);
};

var left = document.createElementNS("http://www.w3.org/2000/svg", "image");
var right = document.createElementNS("http://www.w3.org/2000/svg", "image");
left.setAttributeNS("http://www.w3.org/1999/xlink", "href","arrow0.jpg");
right.setAttributeNS("http://www.w3.org/1999/xlink", "href","arrow1.jpg");
left.setAttribute("width" , width/20);
left.setAttribute("height", height);
right.setAttribute("width" , width/20);
right.setAttribute("height", height);
left.setAttribute("x", 0);
left.setAttribute("y", 0 - 50);
right.setAttribute("x", width -width/20);
right.setAttribute("y", 0 - 50);
svg.appendChild(left);
svg.appendChild(right);

var transit;
var moving = false;
function slideMap(event){
    var keyCode = event.keyCode;
    switch (keyCode){
    case 39:
	if (maps[maps.length - 1].x["baseVal"]["value"] != 0 && !moving){
	    moving = true;
	    transit =  setInterval(function(){ 
		maps.forEach(function(m){
		    m.x["baseVal"]["value"] -= 2;
		});
		if (m.x["baseVal"]["value"]% (width+100) == 0){
		    clearInterval(transit);
		    moving = false;
		};
	    }, 1/100);
	}
        break;
    case 37:
	if (maps[0].x["baseVal"]["value"] != 0 && !moving){
	    moving = true;
	    transit =  setInterval(function(){ 
		maps.forEach(function(m){
		    m.x["baseVal"]["value"] += 2;
		});
		if (m.x["baseVal"]["value"]%(width+100) == 0){
		    clearInterval(transit);
		    moving = false;
		};
	    }, 1/100);
	}
	break;
    }
};

right.onclick =function(){
    if (maps[maps.length - 1].x["baseVal"]["value"] != 0 && !moving){
	moving = true;
	transit =  setInterval(function(){ 
	    maps.forEach(function(m){
		m.x["baseVal"]["value"] -= 2;
	    });
		if (m.x["baseVal"]["value"]% (width+100) == 0){
		    clearInterval(transit);
		    moving = false;
		};
	}, 1/100);
    }
};
left.onclick = function(){
    if (maps[0].x["baseVal"]["value"] != 0 && !moving){
	moving = true;
	transit =  setInterval(function(){ 
	    maps.forEach(function(m){
		m.x["baseVal"]["value"] += 2;
	    });
	    if (m.x["baseVal"]["value"]%(width+100) == 0){
		clearInterval(transit);
		moving = false;
	    };
	}, 1/100);
    }
};
for (var i = 0; i < 10; i++){
    var mm = document.createElementNS("http://www.w3.org/2000/svg", "image");
    mm.setAttributeNS("http://www.w3.org/1999/xlink", "href", "floor"+i+".jpg");
    mm.setAttribute("height", bH);
    mm.setAttribute("width",bW/4);
    mm.setAttribute("x", i * bW/4);
    mm.setAttribute("y", 0);
    bMaps.push(mm);
    mm.onclick = function(){
	var mapNum = parseInt(this.href["baseVal"][5]);
	if( maps[mapNum].x["baseVal"]["value"] > 0 && !moving){
	    moving = true;
	    transit = setInterval(function(){
		for (var j = 0; j <10; j++){
		    maps[j].x["baseVal"]["value"] -= 2;
		}
		if (maps[mapNum].x["baseVal"]["value"] == 0){
		    clearInterval(transit);
		    moving = false;
		}
	    });
	}
	else if (maps[mapNum].x["baseVal"]["value"] < 0 && !moving){
	    moving = true;
	    transit = setInterval(function(){
		for (var j = 0; j <10; j++){
		    maps[j].x["baseVal"]["value"] += 2;
		}
		if (maps[mapNum].x["baseVal"]["value"] == 0){
		    clearInterval(transit);
		    moving = false;
		}
	    });
	}
    };
     bigMap.appendChild(bMaps[i]);
};
document.addEventListener("keyup", slideMap, false);
