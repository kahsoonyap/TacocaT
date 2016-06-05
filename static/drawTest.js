var svg = document.getElementById("map");
var height = Math.floor(screen.height * .7 / 2) * 2;
var width = Math.floor (screen.width * .5 / 2) * 2;
svg.height["baseVal"]["value"] = height;
svg.width["baseVal"]["value"] = width;
var map = document.createElementNS("http://www.w3.org/2000/svg", "image");
map.setAttributeNS("http://www.w3.org/1999/xlink", "href","./static/floor1.jpg");
map.setAttribute("height", height);
map.setAttribute("width",width);
map.setAttribute("x",0);
map.setAttribute("y", 0);
svg.appendChild(map);


var drawPath = function drawPath(source, dest){
    $.get("/drawPath", {source:source, dest:dest}, function(d){
	for (i = 0; i < d.length - 1; i++){
	    d = d[1,d.length]
	    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	    line.setAttribute("x1", d[i][0] * width);
	    line.setAttribute("y1", d[i][1] * height);
	    line.setAttribute("x2", d[i+1][0] * width);
	    line.setAttribute("y2", d[i+1][1] * height);
	    line.setAttribute("stroke", "red");
	    line.setAttribute("stroke-width", 3);
	    svg.appendChild(line);
	}
    });
}

