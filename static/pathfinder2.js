var button = document.getElementById("button");

//"default block"
var wall = {type: function(){return "wall"}};

//block class
var block = function(roomName, blockType){
    //variables
    var room = roomName;
    var type = blockType;
    var north = wall;
    var south = wall;
    var east = wall;
    var west = wall;
    var checked = false;
    
    //get methods
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

    //set methods
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

//wrapper function
var pathFinder = function(start, end){  
    if (start == end){
	return ["Please enter two different rooms"];
    } else {
	//if the first room and the second room are on the same floor
	if (start.room().substring(0,2) == end.room().substring(0,2)) {
	    var roomCheckerRes = roomChecker(start, end);
	    return translateToEnglish(roomCheckerRes[1], roomCheckerRes[2], start, end);
	} else {
	    var endDifferentFloorRes = endDifferentFloor(start, end);
	    return translateToEnglish(endDifferentFloorRes[0], endDifferentFloorRes[1], start, end);
	}
    }
}

var endDifferentFloor = function(start, end){
    //first two numbers are the floor of the room
    var startFloor = start.room().substring(0,2);
    var endFloor = end.room().substring(0,2);
    //third and fourth numbers are the room bumber
    var startRoom = start.room().substring(2,4); 
    var endRoom = end.room().substring(2,4);
    var startBlock = start;
    var endBlock = end;
    //attempt at finding the closest staircase
    //use different stairs based on the results
    var midPoint = (parseInt(startRoom) + parseInt(endRoom)) / 2;
    if (midPoint < 17){
	startBlock = floors[startFloor]["sA" + startFloor];
	endBlock = floors[endFloor]["sA" + endFloor];
    } else if (midPoint < 35 || startFloor == "05" || endFloor == "05"){
	startBlock = floors[startFloor]["sB" + startFloor];
	endBlock = floors[endFloor]["sB" + endFloor];
    } else {
	if (parseInt(startFloor) <= 4 && parseInt(startFloor) % 2 == 1){
	    startBlock = floors[startFloor]["sC" + startFloor];
	    endBlock = floors[endFloor]["sC" + endFloor];
	} else {
	    startBlock = floors[startFloor]["sD" + startFloor];
	    endBlock = floors[endFloor]["sD" + endFloor];
	}
    }
    var upOrDown;
    if (endFloor > startFloor) {
	upOrDown = ['up'];
    } else {
	upOrDown = ['down'];
    }
    var roomCheckerStartRes = roomChecker(start, startBlock);
    var roomCheckerEndRes =  roomChecker(endBlock, end);
    var finalDirs = upOrDown.concat(roomCheckerStartRes[1]);
    var finalDirs = roomCheckerEndRes[1].concat(finalDirs);
    var finalPathArray = roomCheckerEndRes[2].concat(roomCheckerStartRes[2]);
    //console.log(finalPathArray);
    var ret = [];
    ret.push(finalDirs);
    ret.push(finalPathArray);
    //console.log(ret[1]);
    return ret;
} 

//recursively find path from curr to dest
//does not guarantee shortest path
//may be differnt path than visual method
//prioritizes north -> south -> east -> west
//returns a list with three elements
//[boolean, [list of directions], [list of blocks passed]]
var roomChecker = function(curr, dest){
    //as long as curr is not a wall
    if (curr.type() != "wall") {
	//check to see if curr is the target room
	if (curr.room() == dest.room()){
	    console.log("path found");
	    return [true, [], []];
	//otherwise if curr hasn't been checked yet
	} else if (!curr.checked()){
	    //toggle checked to true
	    curr.setChecked(true);
	    //check if northern path works
	    var n = roomChecker(curr.north(), dest);
	    if (n[0]) {
		n[1].push("north");
		n[2].push(curr);
		return [true, n[1], n[2]];
	    } else {
		//check if southern path works
		var s = roomChecker(curr.south(), dest);
		if (s[0]) {
		    s[1].push("south");
		    s[2].push(curr);
		    return [true, s[1], s[2]];
		} else {
		    //check if eastern path works
		    var e = roomChecker(curr.east(), dest);
		    if (e[0]) {
			e[1].push("east");
			e[2].push(curr)
			return [true, e[1], e[2]];
		    } else {
			//check if western path works
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

//convert list into some kind of english
var translateToEnglish = function(directions, pathArray, start, end){
    resetChecked(floors);
    directions.reverse();
    pathArray.reverse();
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
    var pathArrayRooms = [];
    var i;
    for (i = 0; i < pathArray.length; i++) {
	pathArrayRooms[i] = pathArray[i].room();
    }
    console.log(directions);
    console.log(pathArrayRooms);
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
	var currBlock = pathArray[i];
	var currBlockName = pathArrayRooms[i];
	if (directions[i] == "up") {
	    str += n + ". Go " + numFlights + " up the stairs<br>";
	    n+=1;
	} else if (directions[i] == "down") {
	    str += n + ". Go " + numFlights + " down the stairs<br>";
	    n+=1;
	}
	else if (directions[i] != directions[i-1] && directions[i] != "up" && directions[i] != "down" && directions[i-1] != "up" && directions[i-1] != "down" && i < directions.length - 1 && i != 1){
	    var roomNear = "none";
	    console.log(currBlock.room());
	    if (directions[i+1] == "up" || directions[i+1] == "down") {
		if (currBlock.north().room().substring(0,1) == "s") {
		    roomNear = currBlock.north().room();
		}
		else if (currBlock.south().room().substring(0,1) == "s") {
		    roomNear = currBlock.south().room();
		}
		else if (currBlock.east().room().substring(0,1) == "s") {
		    roomNear = currBlock.east().room();
		}
		else if (currBlock.west().room().substring(0,1) == "s") {
		    roomNear = currBlock.west().room();
		}
	    }
	    else if (currBlock.north().type() == "room"){
		roomNear = currBlock.north().room();
	    }
	    else if (currBlock.south().type() == "room"){
		roomNear = currBlock.south().room();
	    }
	    else if (currBlock.east().type() == "room"){
		roomNear = currBlock.east().room();
	    }
	    else if (currBlock.west().type() == "room"){
		roomNear = currBlock.west().room();
	    }
	    if (roomNear.substring(0, 1) == "0") {
		roomNear = roomNear.substring(1);
	    }
	    roomNear = "room " + roomNear;
	    if (roomNear.substring(5, 7) == "sA") {
		roomNear = "the eastern stairwell";
	    }
	    if (roomNear.substring(5, 7) == "sB") {
		roomNear = "the central stairwell";
	    }
	    if (roomNear.substring(5, 7) == "sD") {
		roomNear = "the hudson stairwell";
	    }
	    if (directions[i+1] == "up" || directions[i+1] == "down") {
		str += n + ". Turn " + relDirs[i-1] + " into " + roomNear + "<br>";
	    }
	    else if (roomNear != "room none") {
		str += n + ". Turn " + relDirs[i-1] + " near " + roomNear + " and walk forwards<br>";
	    } else {
		str += n + ". Turn " + relDirs[i-1] + " at the next intersection and walk forwards<br>";
	    }
	    n+=1;
	}

	else if (directions[i - 1] == "up" || directions[i - 1] == "down") {
	    str += n + ". After exiting stairwell, head " + relDirs[i-1] + " and walk forwards<br>";
	    n+=1;
	}
	else if (i == directions.length - 1){
	    if (relDirs[i-1] == "dne") {
		str += n + ". Your room should be straight ahead!";
	    } else {
		str += n + ". Your room should be on your " + relDirs[i-1] + "!";
	    }
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
	case "up":
	    switch(directions[i+1]) {
	    case "north":
		dirRel.push("north");
		break;
	    case "south":
		dirRel.push("south");
		break;
	    case "east":
		dirRel.push("east");
		break;
	    case "west":
		dirRel.push("west");
		break;
	    case "up":
		dirRel.push("dne");
		break;
	    case "down":
		dirRel.push("dne");
		break;
	    }
	    break;
	case "down":
	    switch(directions[i+1]) {
	    case "north":
		dirRel.push("north");
		break;
	    case "south":
		dirRel.push("south");
		break;
	    case "east":
		dirRel.push("east");
		break;
	    case "west":
		dirRel.push("west");
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

//take user input and translate it into our format
var searchByName = function(room){
    if (room == "599"){
	room = "540";
    }
    if (room == "616"){
	room == "0615A";
    }
    if (room.length == 3){
	room = "0" + room;
    }/*
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
    } else if(room.toLowerCase() == "615c"){
	return "0615C";
    } else if(room.toLowerCase() == "dance studio"){
	return "0660";
    } else if(room.toLowerCase() == "library"){
	return "0615";
    } else if(room.toLowerCase() == "615a"){
	return "0615A";
    } else if(room.toLowerCase() == "biology office"){
	return "0701";
    } else if(room.toLowerCase() == "physics office"){
	return "0802";
    } else if(room.toLowerCase() == "chemistry office"){
	return "0904";
    } else if(room.toLowerCase() == "small group"){
	return "0926";
    }*/
    return room;
}

//takes input and adds directions to the page
var returnDirections = function(source, dest) {
    console.log("this should trigger");
    var stepsP = document.getElementById("steps");
    var steps = [];
    try {
	//var form = document.getElementById("directions");
	//convert input into our format
	var startRoom = searchByName(source);
	console.log(startRoom);
	//form.elements.namedItem("start").value = "";
	var endRoom = searchByName(dest);
	console.log(endRoom);
	//form.elements.namedItem("end").value = "";
	//find the room in the dictionary and get the image
	var start =  floors[startRoom.substring(0,2)][startRoom];
	/*var startFloor = startRoom.substring(0,2);
	var startFloorPic = document.getElementById("startFloor");
	var startFloorPath = "static/floor" + startFloor + ".jpg";
	startFloorPic.setAttribute("src", startFloorPath);
	startFloorPic.setAttribute("height", "500");*/
	var end = floors[endRoom.substring(0,2)][endRoom];
	console.log(start);
	console.log(end);
	/*var endFloor = endRoom.substring(0,2);
	var endFloorPic = document.getElementById("endFloor");
	var endFloorPath = "static/floor" + endFloor + ".jpg";
	//if not the same floor display two different images
	if (startFloor != endFloor) {
	    endFloorPic.setAttribute("src", endFloorPath);
	    endFloorPic.setAttribute("height", "500");
	    console.log(start.room);
	} else {
	    endFloorPic.setAttribute("src", "");
	}*/
	steps = pathFinder(start, end);
    } catch (err){
	steps.push("Room not found");
    }
    stepsP.innerHTML = steps;
};

//resets checked value in all blocks back to false
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


