var room = function(roomNum, isRoom){
    var xy; 
    
    var setRoom = function(room){
	this.room = room;
    }

    var setIsRoom = function(isRoom){
	this.isRoom = isRoom;
    }
    
    var getCoords = function(){
	if (this.isRoom){
	    $.when($.get("/coords", {room:""+roomNum}, function(d){
		xy = [parseFloat(JSON.parse(d)[0][0]) ,  parseFloat(JSON.parse(d)[0][1])];
		console.log(xy);
	    })).done(this.xy = xy);
	}
	else{
	    $.get("/intersectXY", {intersect:""+this.room}, function(d){
		xy = [parseFloat(JSON.parse(d)[0][1]), parseFloat(JSON.parse(d)[0][1])];
	    });
	}
    };

    var getIntersect = function(direction){
	if (this.isRoom){
	    $.get("/intersect" , {room:"" + this.room, direction: direction}, function(d){
		if (direction == "left"){
		    this.left = JSON.parse(d)[0][0];
		}
		else if (direction == "right"){
		    this.right = JSON.parse(d)[0][0];
		}
		else if (direction == "up"){
		    this.up = JSON.parse(d)[0][0];
		}
		else {
		    this.down = JSON.parse(d)[0][0];
		}
	    });
	}
	else {
	    $.get("/intersectDirect", {intersect:this.room, direct:direct}, function(d){
		if (direct == "left"){
		    this.left = JSON.parse(d)[0];
		}
		else if (direct == "right"){
		    this.right = JSON.parse(d)[0];
		}
		else if (direct == "up"){
		    this.up = JSON.parse(d)[0];
		}
		else {
		    this.down = JSON.parse(d)[0];
		}
	    });
	}   
    };
    
    return {room: roomNum,
	    isRoom: isRoom,
	    xy: xy,
	    left: 0,
	    right: 0,
	    up: 0,
	    down: 0,
	    setRoom: setRoom,
	    setIsRoom: setIsRoom,
	    getCoords: getCoords,
	    getIntersect: getIntersect
	   };
}
