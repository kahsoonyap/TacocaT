var svg = document.getElementById("map");
var height = Math.floor(screen.height * .7 / 2) * 2;
var width = Math.floor (screen.width * .5 / 2) * 2;
svg.height["baseVal"]["value"] = height;
svg.width["baseVal"]["value"] = width;
var map = document.createElementNS("http://www.w3.org/2000/svg", "image");
map.setAttributeNS("http://www.w3.org/1999/xlink", "href","./static/floor1.jpg");
map.setAttribute("height", height);
map.setAttribute("width",width);
map.setAttribute("x",0);
map.setAttribute("y", 0);
svg.appendChild(map);
var holder = $("#map");

var getCoords = function getCoords(room, store){
    var xy;
    $.get("/coords", {room:""+room}, function(d){
	holder.val([parseFloat(JSON.parse(d)[0][0]), parseFloat(JSON.parse(d)[0][1])]) ;
	
    });
    xy = holder.val();
    xy[0] = parseFloat(xy[0]);
    xy[1] = parseFloat(xy[1]);
    console.log(xy);
    return xy;
};


var getIntersect = function getIntersect(room,direction){
    var intersection;
    $.get("/intersect" , {room:"" + room, direction: direction}, function(d){
	if (direction == "left"){
	    holder.val(JSON.parse(d)[0][0]);
	}
	else if (direction == "right"){
	    holder.val(JSON.parse(d)[0][0]);
	}
	else if (direction == "up"){
	    holder.val(JSON.parse(d)[0][0]);
	}
	else {
	    holder.val(JSON.parse(d)[0][0]);
	}
    });
    intersection = parseInt(holder.val());
    return intersection;
};
/*
  var staircase;
  var getStairCase = function getStairCase(room){
  $.get("/stairs", {room:room}, function(d){
  staircase = JSON.parse(d).staircase[0];
  });
  };*/
var getIntersectXY = function getIntersectXY(intersect){
    var xy;
    $.get("/intersectXY", {intersect:""+intersect}, function(d){
	var temp = JSON.parse(d);
	holder.val([parseFloat(temp[0][1]), parseFloat(temp[0][1])]);
    });
    xy = holder.val();
    xy[0] = parseFloat(xy[0]);
    xy[1] = parseFloat(xy[1]);
    return xy;
};

var getIntersectDirect = function getIntersectDirect(intersect, direct){
    var intersection;
    $.get("/intersectDirect", {intersect:""+intersect, direct:direct}, function(d){
	if (direct == "left"){
	    holder.val(JSON.parse(d)[0]);
	}
	else if (direct == "right"){
	    holder.val(JSON.parse(d)[0]);
	}
	else if (direct == "up"){
	    holder.val(JSON.parse(d)[0]);
	}
	else {
	    holder.val(JSON.parse(d)[0]);
	}
    });
    intersection = parseInt(holder.val());
    return intersection;
};


var drawDirect = function drawDirect(source, dest){

    var sourceXY = getCoords(source);
    var destXY = getCoords(dest);
    var left = getIntersect(source, "left");
    var right = getIntersect(source,"right");;
    var up = getIntersect(source, "up");
    var down = getIntersect(source, "down");
    console.log(sourceXY);
    console.log(destXY);
    var minDist = 10000000000000000000000000000000000000;
    var closestXY;
    var distToDest = Math.sqrt( Math.pow((sourceXY[0] -  destXY[0]), 2) + Math.pow((sourceXY[1] -  destXY[1]), 2) );
    if (!isNaN(left)){
	var leftXY = getIntersectXY(left);
	var dist =  Math.sqrt( Math.pow(leftXY[0] -  destXY[0], 2) + Math.pow(leftXY[1] -  destXY[1], 2) );
	if (minDist > dist){
	    minDist = dist;
	    closestXY = leftXY;
	};
    };
    if (!isNaN(right)){
	var rightXY = getIntersectXY(right);
	var dist =  Math.sqrt( Math.pow(rightXY[0] -  destXY[0], 2) + Math.pow(rightXY[1] -  destXY[1], 2));
	if (minDist > dist){
	    minDist = dist;
	    closestXY = rightXY;
	};
    };
    if (!isNaN(up)){
	var upXY = getIntersectXY(up);
	var dist =  Math.sqrt(Math.pow(upXY[0] -  destXY[0], 2) + Math.pow(upXY[1] -  destXY[1], 2));
	if (minDist > dist){
	    minDist = dist;
	    closestXY = upXY;
	};
    };
    if (!isNaN(down)){
	var downXY = getIntersectXY(down);
	var dist =  Math.sqrt(Math.pow(downXY[0] -  destXY[0], 2) + Math.pow(downXY[1] -  destXY[1], 2));
	if (minDist > dist){
	    minDist = dist;
	    closestXY = downXY;
	};
    };
    console.log(minDist);
    console.log(distToDest);
    while (distToDest > minDist){
	console.log(distToDest);
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	path.setAttribute("x1", sourceXY[0]);
	path.setAttribute("y1", sourceXY[1]);
	path.setAttribute("x2", closetXY[0]);
	path.setAttribute("y2", closetXY[1]);
	path.setAttribute("stroke", "red");
	path.setAttribute("stroke-width", 3);
	svg.appendChild(path);
	sourceXY = closestXY;
	left = getIntersectDirect(source, "left");
	right = getIntersectDirect(source,"right");
	up = getIntersectDirect(source, "up");
	down = getIntersectDirect(source, "down");
	distToDest = Math.sqrt( Math.pow(sourceXY[0] -  destXY[0], 2) + Math.pow(sourceXY[1] -  destXY[1], 2) );
	if (!isNaN(left)){
	    var leftXY = getIntersectXY(left);
	    var dist =  Math.sqrt( Math.pow(leftXY[0] -  destXY[0], 2) + Math.pow(leftXY[1] -  destXY[1], 2) );
	    if (minDist > dist){
		minDist = dist;
		closestXY = leftXY;
	    };
	};
	if (!isNaN(right)){
	    var rightXY = getIntersectXY(right);
	    var dist =  Math.sqrt( Math.pow(rightXY[0] -  destXY[0], 2) + Math.pow(rightXY[1] -  destXY[1], 2));
	    if (minDist > dist){
		minDist = dist;
		closestXY = rightXY;
	    };
	};
	if (!isNaN(up)){
	    var upXY = getIntersectXY(up);
	    var dist =  Math.sqrt(Math.pow(upXY[0] -  destXY[0], 2) + Math.pow(upXY[1] -  destXY[1], 2));
	    if (minDist > dist){
		minDist = dist;
		closestXY = upXY;
	    };
	};
	if (!isNaN(down)){
	    var downXY = getIntersectXY(down);
	    var dist =  Math.sqrt(Math.pow(downXY[0] -  destXY[0], 2) + Math.pow(downXY[1] -  destXY[1], 2));
	    if (minDist > dist){
		minDist = dist;
		closestXY = downXY;
	    };
	};
    };/*
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    console.log(sourceXY);
    console.log(destXY);
    path.setAttribute("x1", sourceXY[0]);
    path.setAttribute("y1", sourceXY[1]);
    path.setAttribute("x2", destXY[0]);
    path.setAttribute("y2", destXY[1]);
    path.setAttribute("stroke", "red");
    path.setAttribute("stroke-width", 3);
    svg.appendChild(path);*/
};
    
drawDirect("107","125");
