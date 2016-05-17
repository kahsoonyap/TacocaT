var block = function(roomNum){
    var room = roomNum;
    var north = 0;
    var south = 0;
    var east = 0;
    var west = 0;
    
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
	room: room,
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
var block11 = block("block11");
var block12 = block("block12");
var block13 = block("block13");
var block14 = block("block14");
var block15 = block("block15");
var block16 = block("block16");
var r601 = block("601");
var r602 = block("602");
var r603 = block("603");
var r604 = block("604");
var r605 = block("605");
var r606 = block("606");
var r607 = block("607");
var r608 = block("608");
var r609 = block("609");
var r6010 = block("6010");
var r6011 = block("6011");
var r6012 = block("6012");
var r6013 = block("6013");
var r6014 = block("6014");
var r6015 = block("6015");
var r6016 = block("6016");

r601.setSouth(block1);
block1.setNorth(r601);

block1.setEast(block2);
block2.setEast(block3);
block3.setEast(block4);
block4.setEast(block5);
block5.setEast(block6);
block6.setEast(block7);
block7.setEast(block8);
block8.setEast(block9);
block9.setEast(block10);

block10.setWest(block9);
block9.setWest(block8);
block8.setWest(block7);
block7.setWest(block6);
block6.setWest(block5);
block5.setWest(block4);
block4.setWest(block3);
block3.setWest(block2);
block2.setWest(block1);

