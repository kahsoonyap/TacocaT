var svg = document.getElementById("map");
var height = Math.floor(screen.height * .7 / 2) * 2;
var width = Math.floor (screen.width * .5 / 2) * 2;
svg.height["baseVal"]["value"] = height;
svg.width["baseVal"]["value"] = width;
var map = document.createElementNS("http://www.w3.org/2000/svg", "image");
map.setAttributeNS("http://www.w3.org/1999/xlink", "href","../static/floor1.jpg");
map.setAttribute("height", height);
map.setAttribute("width",width);
map.setAttribute("x",0);
map.setAttribute("y", 0);
svg.appendChild(map);

var getCoords = function getCoords(room){
    var xy = [];
    $.get("/coords", {room:room}, function(d){
	var temp = JSON.parse(d);
	xy.push(temp.x);
	xy.push(temp.y);
    });
    return xy;
};

var getIntersect = function getIntersect(room,direction){
    var intersect;
    $.get("/intersect" , {room:room, direction: direction}, function(d){
	if (direction == "left"){
	    intersect = JSON.parse(d).left;
	}
	else if (direction == "right"){
	    intersect = JSON.parse(d).right;
	}
	else if (direction == "up"){
	    intersect = JSON.parse(d).up;
	}
	else {
	    intersect = JSON.parse(d).down;
	}
    });
    return intersect;
};

var getStairCase = function getStairCase(room){
    var staircase;
    $.get("/stairs", {room:room}, function(d){
	staircase = JSON.parse(d).staircase;
    });
    return staircase;
};

var getIntersectXY = function getIntersectXY(intersect){
    var xy =[];
    $.get("/intersectXY", {intersect:intersect}, function(d){
	var temp = JSON.parse(d);
	xy.push(temp.x);
	xy.push(temp.y);
    });
    return xy;
};

var getIntersectDirect = function getIntersectDirect(intersect, direct){
    var intersection;
    $.get("/intersectDirect", {intersect:intersect, direct:direct}, function(d){
	if (direct == "left"){
	    intersection = JSON.parse(d).left;
	}
	else if (direct == "right"){
	    intersection = JSON.parse(d).right;
	}
	else if (direct == "up"){
	    intersection = JSON.parse(d).up;
	}
	else {
	    intersection = JSON.parse(d).down;
	}
    });
    return intersection;
};

/*
var drawDirect = function drawDirect(source, dest){
    var sourceXY = getCoords(source);
    var destXY = getCoords(dest);
    var left = getIntersect(source, "left");
    var right = getIntersect(source,"right");
    var up = getIntersect(source, "up");
    var down = getIntersect(source, "down");
    var minDist = 10000000000000000000000000000000000000;
    var closestXY;
    var distToDest = Math.sqrt( Math.pow(sourceXY[0] -  destXY[0], 2) + Math.pow(sourceXY[1] -  destXY[1], 2) );
    if (left != "null"){
	var leftXY = getIntersectXY(left);
	var dist =  Math.sqrt( Math.pow(leftXY[0] -  destXY[0], 2) + Math.pow(leftXY[1] -  destXY[1], 2) );
	if (minDist > dist){
	    minDist = dist;
	    closestXY = leftXY;
	};
    };
    if (right != "null"){
	var rightXY = getIntersectXY(right);
    	var dist =  Math.sqrt( Math.pow(rightXY[0] -  destXY[0], 2) + Math.pow(rightXY[1] -  destXY[1], 2));
	if (minDist > dist){
	    minDist = dist;
	    closestXY = rightXY;
	};
    };
    if (up != "null"){
	var upXY = getIntersectXY(up);
    	var dist =  Math.sqrt(Math.pow(upXY[0] -  destXY[0], 2) + Math.pow(upXY[1] -  destXY[1], 2));
	if (minDist > dist){
	    minDist = dist;
	    closestXY = upXY;
	};
    };
    if (down != "null"){
	var downXY = getIntersectXY(down);
    	var dist =  Math.sqrt(Math.pow(downXY[0] -  destXY[0], 2) + Math.pow(downXY[1] -  destXY[1], 2));
	if (minDist > dist){
	    minDist = dist;
	    closestXY = downXY;
	};
    };
    while (distToDest > minDist){
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	path.setAttribute("x1", sourceXY[0]);
	path.setAttribute("y1", sourceXY[1]);
	path.setAttribute("x2", closetXY[0]);
	path.setAttribute("y2", closetXY[1]);
	*/
