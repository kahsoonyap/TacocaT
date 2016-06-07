var svg = document.getElementById("map");
var height = Math.floor(screen.height * .6 / 2) * 2;
var width = Math.floor (screen.width * .44 / 2) * 2;
svg.height["baseVal"]["value"] = height;
svg.width["baseVal"]["value"] = width;
var map = document.createElementNS("http://www.w3.org/2000/svg", "image");
map.setAttribute("height", height);
map.setAttribute("width",width);
map.setAttribute("x",0);
map.setAttribute("y", 0);
svg.appendChild(map);

var loadFloor = function loadFloor(room){
    $.get("/getFloor", {room: room}, function(d){
	while (svg.childNodes.length > 2){
	    svg.removeChild(svg.lastChild);
	}
	if (d != "null"){
	    d = d.substring(1,d.length-1)
	    if (d != 10){
		map.setAttributeNS("http://www.w3.org/1999/xlink", "href","../static/floor0" + d.toString() + ".jpg");
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

var drawPath = function drawPath(source, dest){
    $.get("/drawPath", {source:source, dest:dest}, function(d){
	holder=[]
	fixed=d.substring(1,d.length-1);
	console.log(fixed);
	while (fixed.indexOf('[')!=-1 || fixed.indexOf(']')!=-1){ 
	    fixed=fixed.replace("["," ");
	    fixed=fixed.replace("]"," ");
	}
	console.log(fixed);
	fixed=fixed.split(", ");
	console.log(fixed);
	for (i=0;i<fixed.length;i++){
	    fixed[i]=fixed[i].replace(" ","");
	}
	console.log(fixed);
	path=[]
	for (i=0;i<fixed.length-1;i+=2){
	    holder=[fixed[i],fixed[i+1]];
	    path.push(holder);
	}
	console.log(path);
	i = 0;	   
	for (i = 0; i < path.length - 1; i++){
	    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	    console.log(path[i] + path[i+1]);
	    line.setAttribute("x1", path[i][0] * width);
	    line.setAttribute("y1", path[i][1] * height);
	    line.setAttribute("x2", path[i+1][0] * width);
	    line.setAttribute("y2", path[i+1][1] * height);
	    line.setAttribute("stroke", "red");
	    line.setAttribute("stroke-width", 3);
	    svg.appendChild(line);
	}
    });   
}

var sourceInput = document.getElementById("source");
var destInput = document.getElementById("dest");
var button = document.getElementById("button");
button.addEventListener("click", function(e){
    var sourceRoom = sourceInput.value;
    var destRoom = destInput.value;
    loadFloor(sourceRoom);
    drawPath(sourceRoom, destRoom);
});

$("#source").keyup(function (e) {
    if (e.keyCode == 13) {
	console.log("???");
	var sourceRoom = sourceInput.value;
	var destRoom = destInput.value;
	loadFloor(sourceRoom);
	drawPath(sourceRoom, destRoom);
    }
});
$("#dest").keyup(function (e) {
    if (e.keyCode == 13) {
	console.log("???");
	var sourceRoom = sourceInput.value;
	var destRoom = destInput.value;
	loadFloor(sourceRoom);
	drawPath(sourceRoom, destRoom);
    }
});
