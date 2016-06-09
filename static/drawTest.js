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

var roomDictionary = {"theater1": "170" , "theater2": "270", "pool": "186", "principal": "105", "lunch": "599" , "library": "615", "cafe": "599", "locker": "583", "weight": "580", "su": "260", "union": "260", "nurse" : "371", "senior": "260"}


var svg2 = document.getElementById("map2");
var map2 = document.createElementNS("http://www.w3.org/2000/svg", "image");
map2.setAttribute("height", height);
map2.setAttribute("width", width);
map2.setAttribute("x", 0);
map2.setAttribute("y", 0);
svg2.appendChild(map2);
var loadFloor = function loadFloor(room){
    svg2.height["baseVal"]["value"] = 0;
    svg2.width["baseVal"]["value"] = 0;
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
	while (svg2.childNodes.length > 2){
	    svg2.removeChild(svg2.lastChild);
	}
	holder=[];
	console.log(d);
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
	var twoFloors = false;
	for (i = 0; i < path.length - 1; i++){
	    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	    console.log(path[i])
	    console.log(path[i+1]);
	    if (path[i][0] == "-1"){
		console.log(path[i][1]);
		if (path[i][1] != "10"){
		    map2.setAttributeNS("http://www.w3.org/1999/xlink", "href","../static/floor0" + path[i][1] + ".jpg");
		}
		else{
		    map2.NS("http://www.w3.org/1999/xlink", "href","../static/floor10.jpg");
		}
		svg2.height["baseVal"]["value"] = height;
		svg2.width["baseVal"]["value"] = width;
	    }
	    else{
		if (path[i+1][0] != "-1"){
		    line.setAttribute("x1", path[i][0] * width);
		    line.setAttribute("y1", path[i][1] * height);
		    line.setAttribute("x2", path[i+1][0] * width);
		    line.setAttribute("y2", path[i+1][1] * height);
		    line.setAttribute("stroke", "red");
		    line.setAttribute("stroke-width", 3);
		    if (twoFloors){
			console.log("shouldbehere");
			svg2.appendChild(line);
		    }
		    else{
			svg.appendChild(line);
		    }
		}
	    }
	    if (path[i][0] == "-1"){
		twoFloors = true;
	    }
	}
    });   
}

var sourceInput = document.getElementById("source");
var destInput = document.getElementById("dest");
var button = document.getElementById("button");
button.addEventListener("click", function(e){
    var sourceRoom = sourceInput.value.trim().toLowerCase();
    var destRoom = destInput.value.trim().toLowerCase(); 
    var names = Object.keys(roomDictionary);
    names.forEach(function(name){
	if (sourceRoom.indexOf(name) != -1){
	    sourceRoom = roomDictionary[name];
	}
	if (destRoom.indexOf(name) != -1){
	    destRoom = roomDictionary[name];
	}
    });
    loadFloor(sourceRoom);
    drawPath(sourceRoom, destRoom);
});

$("#source").keyup(function (e) {
    if (e.keyCode == 13) {
	console.log("???");
	var sourceRoom = sourceInput.value.trim().toLowerCase();
	var destRoom = destInput.value.trim().toLowerCase();
	var names = Object.keys(roomDictionary);
	names.forEach(function(name){
	    if (sourceRoom.indexOf(name) != -1){
		sourceRoom = roomDictionary[name];
	    }
	    if (destRoom.indexOf(name) != -1){
		destRoom = roomDictionary[name];
	    }
	});
	loadFloor(sourceRoom);
	drawPath(sourceRoom, destRoom);
    }
});
$("#dest").keyup(function (e) {
    if (e.keyCode == 13) {
	console.log("???");
	var sourceRoom = sourceInput.value.trim().toLowerCase();
	var destRoom = destInput.value.trim().toLowerCase();
	var names = Object.keys(roomDictionary);
	names.forEach(function(name){
	    if (sourceRoom.indexOf(name) != -1){
		sourceRoom = roomDictionary[name];
	    }
	    if (destRoom.indexOf(name) != -1){
	    destRoom = roomDictionary[name];
	    }
	});
	loadFloor(sourceRoom);
	drawPath(sourceRoom, destRoom);
    }
});
