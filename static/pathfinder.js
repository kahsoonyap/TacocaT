var button = document.getElementById("submit");

var wall = {type: function(){return "wall"}};

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
    var setChecked = function(num){
	checked = num;
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
	if (start.room().substring(0,2) == end.room().substring(0,2)) {
	    return translateToEnglish(roomChecker(start, end)[1], start, end);
	} else {
	    return translateToEnglish(endDifferentFloor(start, end), start, end);
	}
    }
}

var endDifferentFloor = function(start, end){
    var startFloor = start.room().substring(0,2);
    var endFloor = end.room().substring(0,2);
    var startRoom = start.room().substring(2,4); 
    var endRoom = end.room().substring(2,4);
    var midPoint = (parseInt(startRoom) + parseInt(endRoom)) / 2;
    var startBlock = start;
    var endBlock = end;
    if (midPoint < 17){
	startBlock = floors[startFloor]["sA" + startFloor];
	endBlock = floors[endFloor]["sA" + endFloor];
    } else if (midPoint < 35 || startFloor == "05" || endFloor == "05"){
	startBlock = floors[startFloor]["sB" + startFloor];
	endBlock = floors[endFloor]["sB" + endFloor];
    } else {
	if (parseInt(startFloor) % 2 == 0){
	    startBlock = floors[startFloor]["sD" + startFloor];
	    endBlock = floors[endFloor]["sD" + endFloor];
	} else {
	    startBlock = floors[startFloor]["sC" + startFloor];
	    endBlock = floors[endFloor]["sC" + endFloor];
	}
    }
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
    if (curr.type() != "wall") {
	console.log(curr.room());
	console.log(curr.checked());
	if (curr.room() == dest.room()){
	    console.log("path found");
	    return [true, [], []];
	} else if (!curr.checked()){
	    curr.setChecked(true);
	    var n = roomChecker(curr.north(), dest);
	    if (n[0]) {
		n[1].push("north");
		n[2].push(curr);
		return [true, n[1], n[2]];
	    } else {
		var s = roomChecker(curr.south(), dest);
		if (s[0]) {
		    s[1].push("south");
		    s[2].push(curr);
		    return [true, s[1], s[2]];
		} else {
		    var e = roomChecker(curr.east(), dest);
		    if (e[0]) {
			e[1].push("east");
			e[2].push(curr)
			return [true, e[1], e[2]];
		    } else {
			var w = roomChecker(curr.west(), dest);
			if (w[0]) {
			    w[1].push("west");
			    w[2].push(curr);
			    return [true, w[1], w[2]];
			} else {
			    return [false, [], []];
			}
		    }
		}
	    }
	}
    }
    return [false, [], []];
}


var translateToEnglish = function(directions, start, end){
    resetChecked(floors);
    directions.reverse();
    start = parseInt(start.room()[1]);
    end = parseInt(end.room()[1]);
    if (start == 0) {
	start = 10;
    } 
    if (end == 0) {
	end = 10;
    }
    numFlights = Math.abs(start - end);
    relDirs = directionsRelative(directions);
    if (numFlights == 1) {
	numFlights = numFlights + " floor";
    } else {
	numFlights = numFlights + " floors";
    }
    console.log(directions);
    var n = 1;
    var str = "";
    if (relDirs[0] == "dne") {                                          
        if (directions[0] == "up") {
	    str += n + ". After exiting your room, go to the nearest staircase and go " + numFlights + " up the stairs<br>";                      
        } else if (directions[0] == "down") {
	    str += n + ". After exiting your room, go to the nearest staircase and go " + numFlights + " down the stairs<br>";
	} else {
	    str += n + ". After exiting your room, walk forwards<br>";
	}                                                                
        n+= 1;                                                           
    } else {                                                            
        str += n + ". Turn " + relDirs[0] + " after exiting your room and walk forwards<br>";                                                  
        n+=1; 
    }

    for (var i = 1; i < directions.length; i ++){
	if (directions[i] == "up") {
	    str += n + ". Go " + numFlights + " up the stairs<br>";
	    n+=1;
	} else if (directions[i] == "down") {
	    str += n + ". Go " + numFlights + " down the stairs<br>";
	    n+=1;
	}
	else if (directions[i] != directions[i-1] && directions[i] != "up" && directions[i] != "down" && directions[i-1] != "up" && directions[i-1] != "down"){
	    str += n + ". Turn " + relDirs[i-1] + " and walk forwards<br>";
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
    var dirRel = [];
    var i;
    for (i = 0; i < directions.length - 1; i++) {
	switch(directions[i]) {
	case "north":
	    switch(directions[i+1]) {
	    case "north":
		dirRel.push("dne");
		break;
	    case "south":
		dirRel.push("dne");
		break;
	    case "east":
		dirRel.push("right");
		break;
	    case "west":
		dirRel.push("left");
		break;
	    case "up":
		dirRel.push("dne");
		break;
	    case "down":
		dirRel.push("dne");
		break;
	    }
	    break;
	case "south":
	    switch(directions[i+1]) {
	    case "north":
		dirRel.push("dne");
		break;
	    case "south":
		dirRel.push("dne");
		break;
	    case "east":
		dirRel.push("left");
		break;
	    case "west":
		dirRel.push("right");
		break;
	    case "up":
		dirRel.push("dne");
		break;
	    case "down":
		dirRel.push("dne");
		break;
	    }
	    break;
	case "east":
	    switch(directions[i+1]) {
	    case "north":
		dirRel.push("left");
		break;
	    case "south":
		dirRel.push("right");
		break;
	    case "east":
		dirRel.push("dne");
		break;
	    case "west":
		dirRel.push("dne");
		break;
	    case "up":
		dirRel.push("dne");
		break;
	    case "down":
		dirRel.push("dne");
		break;
	    }
	    break;
	case "west":
	    switch(directions[i+1]) {
	    case "north":
		dirRel.push("right");
		break;
	    case "south":
		dirRel.push("left");
		break;
	    case "east":
		dirRel.push("dne");
		break;
	    case "west":
		dirRel.push("dne");
		break;
	    case "up":
		dirRel.push("dne");
		break;
	    case "down":
		dirRel.push("dne");
		break;
	    }
	    break;
	}
	console.log(dirRel);
	console.log(directions[i] + "-->" + directions[i+1]);
	if (dirRel.length == i) {
	    console.log("ok");
	}
    }
    console.log(dirRel);
    return dirRel;
}

var searchByName = function(room){
    if (room.length == 3){
	room = "0" + room;
    }
    if (room.toLowerCase() == "principal's office"){
	return "0107";
    } else if (room.toLowerCase() == "theater"){
	return "0170";
    } else if (room.toLowerCase() == "pool"){
	return "0186";
    } else if (room.toLowerCase() == "attendance"){
	return "0205";
    } else if (room.toLowerCase() == "general office"){
	return "0209";
    } else if (room.toLowerCase() == "mail"){
	return "0211";
    } else if (room.toLowerCase() == "college office"){
	return "0225";
    } else if (room.toLowerCase() == "memorial classroom"){
	return "0229";
    } else if (room.toLowerCase() == "programming office"){
	return "0239";
    } else if (room.toLowerCase() == "guidance" || room.toLowerCase() == "guidance counselor"){
	return "0236";
    } else if(room.toLowerCase() == "su" || room.toLowerCase() == "arista"){
	return "0260";
    } else if(room.toLowerCase() == "school store"){
	return "0262";
    } else if(room.toLowerCase() == "social studies office"){
	return "0302";
    } else if(room.toLowerCase() == "nurse's office"){
	return "0371";
    } else if(room.toLowerCase() == "math office"){
	return "0402";
    } else if(room.toLowerCase() == "robotics"){
	return "0451";
    } else if(room.toLowerCase() == "cafeteria" || room.toLowerCase() == "lunchroom" || room.toLowerCase() == "cafe"){
	return "0540";
    } else if(room.toLowerCase() == "weight room"){
	return "0580";
    } else if(room.toLowerCase() == "physical education office"){
	return "0501";
    } else if(room.toLowerCase() == "teacher's lounge" || room.toLowerCase() == "teacher cafeteria"){
	return "0531";
    } else if(room.toLowerCase() == "english office"){
	return "0601";
    } else if(room.toLowerCase() == "615C"){
	return "0615C";
    } else if(room.toLowerCase() == "dance studio"){
	return "0660";
    } else if(room.toLowerCase() == "library"){
	return "0615";
    } else if(room.toLowerCase() == "615A"){
	return "0615A";
    } else if(room.toLowerCase() == "biology office"){
	return "0701";
    } else if(room.toLowerCase() == "physics office"){
	return "0802";
    } else if(room.toLowerCase() == "chemistry office"){
	return "0904";
    } else if(room.toLowerCase() == "small group"){
	return "0926";
    }
    return room;
}

var returnDirections = function(e) {
    var form = document.getElementById("directions");
    var startRoom = searchByName(form.elements.namedItem("start").value);
    var endRoom = searchByName(form.elements.namedItem("end").value);
    var start =  floors[startRoom.substring(0,2)][startRoom];
    var startFloor = startRoom.substring(0,2);
    var startFloorPic = document.getElementById("startFloor");
    var startFloorPath = "static/floor" + startFloor + ".jpg";
    startFloorPic.setAttribute("src", startFloorPath);
    startFloorPic.setAttribute("height", "500");
    var end = floors[endRoom.substring(0,2)][endRoom];
    var endFloor = endRoom.substring(0,2);
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
    var steps = [];
    try {
	steps = pathFinder(start, end);
    } catch (err){
	steps.push("Room not found");
    }    
    stepsP.innerHTML = steps;
};

var resetChecked = function(data){
    for (var key in data){
	if (data.hasOwnProperty(key)){
	    for (var key1 in data[key]){
		if (data[key].hasOwnProperty(key1)){
		    data[key][key1].setChecked(false);
		}
	    }
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

