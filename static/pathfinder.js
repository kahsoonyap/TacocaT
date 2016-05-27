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
	return translateToEnglish(roomChecker(start, end)[1]);
    }
}

var roomChecker = function(curr, dest){
    //console.log(curr);
    if (curr.type == "wall"){
	return [false, []];
    } else {
	//console.log(curr.room());
	//console.log(curr.type() == "room" );
	if (curr.type() == "room" && curr.room() == dest.room()){
	    console.log("path found");
	    return [true, []];
	} else if (!curr.checked()) {
	    //console.log("asd");
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


var translateToEnglish = function(directions){
    directions.reverse();
    var n = 1;
    var str = "";
    str += n + ". Head " + directions[0] + " and walk forwards<br>";
    n+=1;
    for (var i = 1; i < directions.length; i ++){
	if (directions[i] != directions[i-1]){
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

var returnDirections = function(e) {
    var form = document.getElementById("directions");
    var floorPic = document.getElementById("floor");
    var start =  rooms[form.elements.namedItem("start").value];
    var end = rooms[form.elements.namedItem("end").value];
    var floor = start.room().substring(0,1);
    console.log(start.room);
    var floorPath = "static/floor" + floor + ".jpg";
    var stepsP = document.getElementById("steps");
    var steps = pathFinder(start, end);
    stepsP.innerHTML = steps;
    floorPic.setAttribute("src", floorPath);
    floorPic.setAttribute("height", "700");
    console.log(start);
    console.log(end);
    resetChecked(rooms);
    resetChecked(blocks);
};

var resetChecked = function(data){
    for (var key in data){
	if (data.hasOwnProperty(key)){
	    //console.log(data[key].checked());
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

block1.setEast(block2);
block2.setEast(block3);
block3.setEast(block4);

block4.setWest(block3);
block3.setWest(block2);
block2.setWest(block1);
