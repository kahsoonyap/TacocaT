var deadEnd = {room: "0"};

var block = function(roomNum, blockType){
    var room = roomNum;
    var north = deadEnd;
    var south = deadEnd;
    var east = deadEnd;
    var west = deadEnd;
    var type = blockType;
    
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
    
    return {
	room: getName(),
	type: getType(),
	north: getNorth,
	south: getSouth,
	east: getEast,
	west: getWest,
	setNorth: setNorth,
	setSouth: setSouth,
	setEast: setEast,
	setWest: setWest
    }
}

var pathFinder = function(start, end){
    var counter = 0;
    var direction = "";
    var currentBlock = start;
    if (start.room < end.room){
	direction = "east";
    } else if (start.room > end.room){
	direction = "west";
    } else {
	console.log("something is wrong if we get here");
    }
    var changeDirection = function(){
	if (currentBlock.north().type == 0 && direction != "north"){
	    direction = "north";
	} else if (currentBlock.south().type == 0 && direction != "south"){
	    direction = "south";
	} else if (currentBlock.east().type == 0 && direction != "east"){
	    direction = "east";
	} else if (currentBlock.west().type == 0 && direction != "west"){
	    direction = "west";
	} else { 
	    console.log("weird dead end");
	}
	console.log(currentBlock.room);
    }
    var walkStraight = function(){
	var directions = ["north", "south", "east", "west"]
	var ind = 0;
	if (currentBlock.room != end.room) {
	    console.log("currentBlock: " + currentBlock.room + " end: " + end.room);
	    while (currentBlock[direction]().room != "0"){
		console.log("directon: " + direction);
		console.log(currentBlock[direction]().room);
		for (ind = 0; ind < 4; ind++) {
		    if (currentBlock[directions[ind]]().room == end.room){
			currentBlock = currentBlock[dir]();
			console.log("reached " + currentBlock.room);
			return;
		    }
		}
		currentBlock = currentBlock[direction]();
	    }
	    changeDirection();
	    walkStraight();
	}
    }
    walkStraight();
}

var block1 = block("block1", 0);
var block2 = block("block2", 0);
var block3 = block("block3", 0);
var block4 = block("block4", 0);
var block5 = block("block5", 0);
var block6 = block("block6", 0);
var block7 = block("block7", 0);
var block8 = block("block8", 0);
var block9 = block("block9", 0);
var block10 = block("block10", 0);
var r601 = block("601", 1);
var r602 = block("602", 1);
var r603 = block("603", 1);
var r604 = block("604", 1);
var r605 = block("605", 1);
var r606 = block("606", 1);
var r607 = block("607", 1);
var r608 = block("608", 1);
var r609 = block("609", 1);
var r640 = block("640", 1);

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

