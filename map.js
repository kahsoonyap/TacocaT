var svg = document.getElementById("maps");
var maps = [];
for (var i = 0; i < 4; i++){
    var m = document.createElementNS("http://www.w3.org/2000/svg", "image");
    m.setAttributeNS("http://www.w3.org/1999/xlink", "href","floor"+i+".jpg");
    m.setAttribute("height", 800);
    m.setAttribute("width",1000);
    m.setAttribute("x", i * 1100);
    m.setAttribute("y", 0);
    maps.push(m);
    svg.appendChild(maps[i]);
};

function onKeyUp(event){
    var keyCode = event.keycode;
    switch (keyCode){
    case 37:
	maps.forEach(function(m){
	    console.log(m.attr("x"));
	    m.setAttribute("x", m.attr("x") + 1100);
	});
        break;
    case 39:
	maps.forEach(function(m){
	    m.setAttribute("x", m.attr("x") - 1100);
	});
	break;
    }
};

document.addEventListener("keyup", onKeyUp, false);
