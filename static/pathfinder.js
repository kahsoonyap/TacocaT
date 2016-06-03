var button = document.getElementById("submit");

var wall = {type: "wall"};

var block = function(roomName, blockType){
    var room = roomName;
    var type = blockType;
    var north = wall;
    var south = wall;
    var east = wall;
    var west = wall;
    var checked = false;
    
    var getName = function(){
	return room;
    }
    var getType = function(){
	return type;
    }
    var getNorth = function(){
	return north;
    }
    var getSouth = function(){
	return south;
    }
    var getEast = function(){
	return east;
    }
    var getWest = function(){
	return west;
    }
    var isChecked = function(){
	return checked;
    }

    var setNorth = function(blk){
	north = blk;
    }
    var setSouth = function(blk){
	south = blk;
    }
    var setEast = function(blk){
	east = blk;
    }
    var setWest = function(blk){
	west = blk;
    }
    var setChecked = function(bool){
	checked = bool;
    }

    return {
	room: getName,
	type: getType,
	north: getNorth,
	south: getSouth,
	east: getEast,
	west: getWest,
	setNorth: setNorth,
	setSouth: setSouth,
	setEast: setEast,
	setWest: setWest,
	checked: isChecked,
	setChecked: setChecked
    }
}

var pathFinder = function(start, end){
    if (start.room() == end.room()){
	return "why you put the same room?";
    } else {
	if (start.room().substring(0,1) == end.room().substring(0,1)) {
	    return translateToEnglish(roomChecker(start, end)[1], start, end);
	} else {
	    return translateToEnglish(endDifferentFloor(start, end), start, end);
	}
    }
}

var endDifferentFloor = function(start, end){
    var startFloor = start.room().substring(0,1);
    var endFloor = end.room().substring(0,1);
    var startBlock = rooms["stairA" + startFloor];
    var endBlock = rooms["stairA" + endFloor];
    var upOrDown;
    if (endFloor > startFloor) {
	upOrDown = ['up'];
    } else {
	upOrDown = ['down'];
    }
    var finalDirs = upOrDown.concat(roomChecker(start, startBlock)[1]);
    var finalDirs = roomChecker(endBlock, end)[1].concat(finalDirs);
    return finalDirs;
} 

var roomChecker = function(curr, dest){
    if (curr.type == "wall"){
	return [false, []];
    } else {
	if (curr.type() == "room" && curr.room() == dest.room()){
	    console.log("path found");
	    return [true, []];
	} else if (!curr.checked()) {
	    curr.setChecked(true);
	    var n = roomChecker(curr.north(), dest);
	    var s = roomChecker(curr.south(), dest);
	    var e = roomChecker(curr.east(), dest);
	    var w = roomChecker(curr.west(), dest);
	    if (n[0]){
		n[1].push("north");
		return [true, n[1]];
	    } else if (s[0]){
		s[1].push("south");
		return [true, s[1]];
	    } else if (e[0]){
		e[1].push("east");
		return [true, e[1]];
	    } else if (w[0]){
		w[1].push("west");
		return [true, w[1]];
	    }
	}
    }
    return [false, []];
}


var translateToEnglish = function(directions, start, end){
    directions.reverse();
    start = parseInt(start.room()[0]);
    end = parseInt(end.room()[0]);
    numFlights = Math.abs(start - end);
    if (numFlights == 1) {
	numFlights = numFlights + " floor";
    } else {
	numFlights = numFlights + " floors";
    }
    console.log(directions);
    var n = 1;
    var str = "";
    str += n + ". Head " + directions[0] + " and walk forwards<br>";
    n+=1;
    for (var i = 1; i < directions.length; i ++){
	if (directions[i] == "up") {
	    str += n + ". Go " + numFlights + " up the stairs<br>";
	    n+=1;
	} else if (directions[i] == "down") {
	    str += n + ". Go " + numFlights + " down the stairs<br>";
	    n+=1;
	}
	else if (directions[i] != directions[i-1]){
	    str += n + ". Turn " + directions[i] + " and walk forwards<br>";
	    n+=1;
	}
	if (i == directions.length - 1){
	    str += n + ". You're at your room!";
	    n+=1;
	}
    }
    return str;
}

var directionsRelative = function(directions){
    var dirRel;
    var i;
    for (i = 0; i < directions.length; i++) {
	switch(directions[i]) {
	case "north":
	    switch(directions[i+1]) {
	    case "north":
		break;
	    case "south":
		break;
	    case "east":
		break;
	    case "west";
		break;
	    }
	    break;
	case "north":
	    switch(directions[i+1]) {
	    case "north":
		break;
	    case "south":
		break;
	    case "east":
		break;
	    case "west";
		break;
	    }
	    break;
	case "east":
	    switch(directions[i+1]) {
	    case "north":
		break;
	    case "south":
		break;
	    case "east":
		break;
	    case "west";
		break;
	    }
	    break;
	case "south":
	    switch(directions[i+1]) {
	    case "north":
		break;
	    case "south":
		break;
	    case "east":
		break;
	    case "west";
		break;
	    }
	    break;
	}
    }
}

var returnDirections = function(e) {
    var form = document.getElementById("directions");
    var start =  rooms[form.elements.namedItem("start").value];
    var startFloor = start.room().substring(0,1);
    var startFloorPic = document.getElementById("startFloor");
    var startFloorPath = "static/floor" + startFloor + ".jpg";
    startFloorPic.setAttribute("src", startFloorPath);
    startFloorPic.setAttribute("height", "500");
    var end = rooms[form.elements.namedItem("end").value];
    var endFloor = end.room().substring(0,1);
    var endFloorPic = document.getElementById("endFloor");
    var endFloorPath = "static/floor" + endFloor + ".jpg";
    if (startFloor != endFloor) {
	endFloorPic.setAttribute("src", endFloorPath);
	endFloorPic.setAttribute("height", "500");
	console.log(start.room);
    } else {
	endFloorPic.setAttribute("src", "");
    }
    var stepsP = document.getElementById("steps");
    var steps = pathFinder(start, end);
    stepsP.innerHTML = steps;
    //console.log(start);
    //console.log(end);
    resetChecked(rooms);
    resetChecked(blocks);
};

var resetChecked = function(data){
    for (var key in data){
	if (data.hasOwnProperty(key)){
	    data[key].setChecked(false);
	}
    }
}

button.addEventListener('click', returnDirections);

var block1 = block("block1", "hall");
var block2 = block("block2", "hall");
var block3 = block("block3", "hall");
var block4 = block("block4", "hall");

var r601 = block("601", "room");
var r602 = block("602", "room");
var r603 = block("603", "room");
var r640 = block("640", "room");

var rooms = {}
rooms["601"] = r601;
rooms["602"] = r602;
rooms["603"] = r603;
rooms["640"] = r640;
rooms["stairA6"] = block("stairA6", "room");
rooms["stairA5"] = block("stairA5", "room");
rooms["540"] = block("540", "room");
var blocks = {}
blocks["1"] = block1;
blocks["2"] = block2;
blocks["3"] = block3;
blocks["4"] = block4;

r601.setSouth(block1);
block1.setNorth(r601);
r640.setNorth(block4);
block4.setSouth(r640);

r602.setSouth(block2);
block2.setNorth(r602);
r603.setWest(block4);
block4.setEast(r603);

block4.setNorth(rooms.stairA6);
rooms.stairA6.setSouth(block4);
rooms["540"].setEast(rooms.stairA5);
rooms.stairA5.setWest(rooms["540"]);

block1.setEast(block2);
block2.setEast(block3);
block3.setEast(block4);

block4.setWest(block3);
block3.setWest(block2);
block2.setWest(block1);
