var svg = document.getElementById("map");
var height = Math.floor(screen.height * .6 / 2) * 2;
var width = Math.floor (screen.width * .44 / 2) * 2;
svg.height["baseVal"]["value"] = height;
svg.width["baseVal"]["value"] = width;
var map = document.createElementNS("http://www.w3.org/2000/svg", "image");
svg.appendChild(map);
var wrongRoom = document.getElementById("wrongRoom");

var roomDictionary = {"theater1": "170" , "theater2": "270", "pool": "186", "principal": "105", "lunch": "599" , "library": "615", "cafe": "599", "locker": "583", "weight": "580", "su": "260", "union": "260", "nurse" : "371", "senior": "260", "bridge": "299", "scan": "299", "dub": "299", "guid": "235", "college": "225", "social": "301", "3flgym": "380", "thirdflgym": "380","thirdfloorgym": "380", "3floorgym": "380", "3rdfloorgym": "380", "3rdflgym": "380" , "attend": "299"};
var loadFloor = function loadFloor(room){
    $.get("/getFloor", {room: room}, function(d){
	if (svg.childNodes.length > 2){
	    svg.removeChild(svg.lastChild);
	}
	wrongRoom.innerHTML = "";
	if (d == '"null"'){
	    wrongRoom.innerHTML = "Invalid Input";
	}
	else{
	    d = d.substring(1,d.length-1)
	    if (d != "10"){
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

var xTheSpot = function xTheSpot(room){
    $.get("/getXY", {room:room}, function(d){
	d = d.substring(1,d.length-1);
	d = d.split(", ");
	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute( "cx",d[0] * width);
	circle.setAttribute( "cy", d[1] * height);
	circle.setAttribute( "r", 7);
	circle.setAttribute( "fill", "rgb(0,171,243)");
	circle.setAttribute( "stroke", "rgb(0,171,243)");
	svg.appendChild(circle);
    });
}

var input = document.getElementById("search");
var button = document.getElementById("button");
button.addEventListener("click", function(e){
    var room = input.value.trim().toLowerCase().replace(/ /g, "");
    var names = Object.keys(roomDictionary);
    names.forEach(function(name){
	if (room.indexOf(name) != -1){
	    room = roomDictionary[name];
	}
    });
    loadFloor(room);
    xTheSpot(room);
});

$("#search").keyup(function (e) {
    if (e.keyCode == 13) {
	var room = input.value.trim().toLowerCase().replace(/ /g, "");
	var names = Object.keys(roomDictionary);
	names.forEach(function(name){
	    if (room.indexOf(name) != -1){
		room = roomDictionary[name];
	    }
	});
	loadFloor(room);
	xTheSpot(room);
    }
});
