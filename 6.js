var deadEnd = {room: "0"};

var block = function(roomNum){
    var room = roomNum;
    var north = deadEnd;
    var south = deadEnd;
    var east = deadEnd;
    var west = deadEnd;
    
    var getName = function(){
	return room;
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
    console.log("path finder");
    if (start.room < end.room){
	console.log("lower room");
	direction = "east";
	console.log(direction);
    } else if (start.room > end.room){
	direction = "west";
    } else {
	console.log("something is wrong if we get here");
    }
    var walkStraight = function(){
	counter ++;
	console.log("walkStraight call");
	console.log(currentBlock[direction]().room != "0");
	while (currentBlock[direction]().room != "0"){
	    console.log("start loop");
	    console.log(currentBlock[direction]());
	    if (currentBlock[direction]().room == end.room){
		console.log("room found");
		return
	    }
	    console.log("restarting loop");
	    console.log(currentBlock[direction]());
	    currentBlock = currentBlock[direction]();
	}
	console.log("finshed while loop");
	if (currentBlock.north().room != "0" && direction != "south"){
	    direction = "north";
	    currentBlock = currentBlock.north();
	} else if (currentBlock.south().room != "0" && direction != "north"){
	    direction = "south";
	    currentBlock = currentBlock.south();
	} else if (currentBlock.east().room != "0" && direction != "west"){
	    direction = "east";
	    console.log("should be east");
	    currentBlock = currentBlock.east();
	} else if (currentBlock.west().room != "0" && direction != "east"){
	    direction = "west";
	    currentBlock = currentBlock.west();
	} else {
	    console.log("weird dead end");
	}
	if (currentBlock.room == end.room){
	    console.log("room found");
	    return
	}
	console.log(direction);
	console.log("one cycle");
	console.log(currentBlock.room);
	if (counter != 4){
	    walkStraight();
	}
    }
    walkStraight();
}

var block1 = block("block1");
var block2 = block("block2");
var block3 = block("block3");
var block4 = block("block4");
var block5 = block("block5");
var block6 = block("block6");
var block7 = block("block7");
var block8 = block("block8");
var block9 = block("block9");
var block10 = block("block10");
var r601 = block("601");
var r602 = block("602");
var r603 = block("603");
var r604 = block("604");
var r605 = block("605");
var r606 = block("606");
var r607 = block("607");
var r608 = block("608");
var r609 = block("609");
var r640 = block("640");

r601.setSouth(block1);
block1.setNorth(r601);
r640.setNorth(block3);
block3.setSouth(r640);

block1.setEast(block2);
block2.setEast(block3);
/*block3.setEast(block4);
block4.setEast(block5);
block5.setEast(block6);
block6.setEast(block7);
block7.setEast(block8);
block8.setEast(block9);
block9.setEast(block10);
*/
/*
block10.setWest(block9);
block9.setWest(block8);
block8.setWest(block7);
block7.setWest(block6);
block6.setWest(block5);
block5.setWest(block4);
block4.setWest(block3);
*/
block3.setWest(block2);
block2.setWest(block1);

