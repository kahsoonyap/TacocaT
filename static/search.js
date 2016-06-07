var svg = document.getElementById("map");
var height = Math.floor(screen.height * .6 / 2) * 2;
var width = Math.floor (screen.width * .44 / 2) * 2;
svg.height["baseVal"]["value"] = height;
svg.width["baseVal"]["value"] = width;
var map = document.createElementNS("http://www.w3.org/2000/svg", "image");
svg.appendChild(map);

var loadFloor = function loadFloor(room){
    $.get("/getFloor", {room: room}, function(d){
	if (svg.childNodes.length > 2){
	    svg.removeChild(svg.lastChild);
	}
	if (d != "null"){
	    d = d.substring(1,d.length-1)
	    if (d != "10"){
		map.setAttributeNS("http://www.w3.org/1999/xlink", "href","../static/floor" + d.toString() + ".jpg");
	    }
	    else{
		map.setAttributeNS("http://www.w3.org/1999/xlink", "href","../static/floor10.jpg");
	    }
	    map.setAttribute("height", height);
	    map.setAttribute("width",width);
	    map.setAttribute("x",0);
	    map.setAttribute("y", 0);
	}
    });
}

var xTheSpot = function xTheSpot(room){
    $.get("/getXY", {room:room}, function(d){
	d = d.substring(1,d.length-1);
	d = d.split(", ");
	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute( "cx",d[0] * width);
	circle.setAttribute( "cy", d[1] * height);
	circle.setAttribute( "r", 3);
	circle.setAttribute( "fill", "red");
	circle.setAttribute( "stroke", "red");
	svg.appendChild(circle);
    });
}

var input = document.getElementById("search");
var button = document.getElementById("button");
button.addEventListener("click", function(e){
    	var room = input.value;
	loadFloor(room);
	xTheSpot(room);
});

$("#search").keyup(function (e) {
    if (e.keyCode == 13) {
        var room = input.value;
	loadFloor(room);
	xTheSpot(room);
    }
});
