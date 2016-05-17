var block = function(roomNum){
    var room = roomNum;
    var north;
    var south = "4321";
    var east;
    var west;
    
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
block1.setSouth("asd");
var r601 = block("601");
r601.setSouth(block1);
console.log(r601.south());
