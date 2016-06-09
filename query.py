import sqlite3
import math
import json

DB_NAME = "floorPlans.db"

def getXY(room ,floor):
    if (room < 100):
        return getIntersectXY(room, floor)
    else:
        return getRoomXY(room, floor)

def getFloorOf(room):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT floor FROM rooms where rooms.room='" + str(room) + "';"
    floor = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    if not floor:
        return "null"
    else:
        floor = str(list(floor[0])[0])
        return floor
    

def getRoomXY(room, floor):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT x,y FROM rooms WHERE rooms.room='" + str(room) +"' and rooms.floor='" + str(floor) + "';"
    xy = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    if not xy:
        return "null"
    else:
        xy = list(xy[0])
        xy = [float(xy[0]) , float(xy[1])]
        return xy

def getIntersect(room, direction, floor):
    if (room < 100):
        return getIntersectDirect(room, direction, floor)
    else:
        return getRoomIntersect(room, direction, floor)


def getRoomIntersect(room, direction, floor):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT " + direction + " FROM rooms WHERE rooms.room='" + str(room) + "' and rooms.floor='" + str(floor) + "';"
    intersection = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    if not intersection:
        return "null"
    else:
        intersection = str(list(intersection[0])[0])
        return intersection

def getStaircases(floor):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT room FROM rooms where CAST(rooms.room as 'decimal') >= 1100 and rooms.floor='" +  str(floor) + "';"
    staircase = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    fixed = [int(list(a)[0]) for a in staircase]
    return fixed

def getIntersectXY(intersect, floor):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT x,y FROM intersections where intersections.id='" + str(intersect) + "' and intersections.floor='" + str(floor) + "';"
    xy = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    xy = list(xy[0])
    xy = [float(xy[0]) , float(xy[1])]
    return xy

def getIntersectDirect(intersect, direct, floor):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT " + direct + " FROM intersections where intersections.id='" + str(intersect) + "' and intersections.floor='"+ str(floor) + "';"
    direction = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    direction = str(list(direction[0])[0])
    return direction

def distance(x,y):
    return math.sqrt( math.pow((x[0]-y[0]),2) + math.pow((x[1]-y[1]),2))

def findPath(source, dest):
    source = int(source)
    dest = int(dest)
    destFloor = getFloorOf(dest)
    if (source >= 1100):
        sourceFloor = destFloor
    else:
        sourceFloor = getFloorOf(source)
    sourceXY = getXY(source,sourceFloor)
    destXY = getXY(dest,destFloor)
    if sourceFloor == "null" or destFloor == "null":
        return "Invalid rooms"
    if sourceFloor != destFloor:
        destStairs = getStaircases(destFloor)
        sourceStairs = getStaircases(sourceFloor)
        allStairs = [x for x in destStairs if x in sourceStairs]
        stairXYSource = [getXY(x,sourceFloor) for x in allStairs]
        stairXYDest = [getXY(x, destFloor) for x in allStairs]
        distances = []
        for i in range(0, len(stairXYSource)):
            distances.append(distance(sourceXY, stairXYSource[i]) + distance(destXY, stairXYDest[i]))
        bestStaircase = allStairs[distances.index(min(distances))]
        return findPath(bestStaircase,source) + [[-1, int(destFloor)]] + findPath(bestStaircase, dest) 
    if (dest == 239):
        if (destFloor == sourceFloor):
            dest = source
            source = 239
            destXY = sourceXY
            sourceXY = getXY(239, 2)
            destFloor = sourceFloor
            sourceFloor = 2
    distToDest = distance(sourceXY, destXY)
    coords = [sourceXY]
    prevDirect = ""
    print str(source) + " 129"
    print str(dest) + " 130"
    while(distance(sourceXY, destXY) > 0):
        print str(source) + " " + str(dest) + " 132"
        if (source == 6 and dest == 273):
            coords.append(destXY)
            return coords
        distToDest = distance(sourceXY, destXY)
        left = getIntersect(source, "left",sourceFloor)
        if (left != "null"):
            left = int(left)
            leftXY = getXY(left,sourceFloor)
        right = getIntersect(source, "right",sourceFloor)
        if (right != "null"):
            right = int(right)
            rightXY = getXY(right,sourceFloor)
        up = getIntersect(source, "up",sourceFloor)
        if (up != "null"):
            up = int(up)
            upXY = getXY(up,sourceFloor)
        down = getIntersect(source, "down",sourceFloor)
        if (down != "null"):
            down = int(down)
            downXY = getXY(down,sourceFloor)
        if (math.fabs(sourceXY[1] - destXY[1])/ sourceXY[1] < .1):
            print "this should happen ln 143 " + str(source) 
            if (sourceXY[0] > destXY[0]):
                if (left != "null" and prevDirect != "left"):
                    if (distance(leftXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                    else:
                        print "this should go thru 152"
                        coords.append(leftXY)
                        source = left
                        sourceXY = leftXY
                        prevDirect = "right"
                elif (up != "null" and prevDirect != "up"):
                    if (distance(upXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                    else:
                        coords.append(upXY)
                        source = up
                        sourceXY = upXY
                        prevDirect = "down"
                elif (down != "null" and prevDirect != "down"):
                    if (distance(downXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                    else:
                        coords.append(downXY)
                        source = down
                        sourceXY = downXY
                        prevDirect = "up"
                else:
                    coords.append(destXY)
                    source = dest
                    sourceXY = destXY
                    return coords
            else:
                if (right != "null" and prevDirect != "right"):
                    if (distance(rightXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                    else:
                        coords.append(rightXY)
                        source = right
                        sourceXY = rightXY
                        prevDirect = "left"
                elif (up != "null" and prevDirect != "up"):
                    if (distance(upXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                    else:
                        coords.append(upXY)
                        source = up
                        sourceXY = upXY
                        prevDirect = "down"
                elif (down != "null" and prevDirect != "down"):
                    if (distance(downXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                    else:
                        coords.append(downXY)
                        source = down
                        sourceXY = downXY
                        prevDirect = "up"
                else:
                    coords.append(destXY)
                    source = dest
                    sourceXY = destXY
                    return coords
        elif (math.fabs(sourceXY[0] - destXY[0])/ sourceXY[0] < .1):
            if (sourceXY[1] > destXY[1]):
                if (up != "null" and prevDirect != "up"):
                    if (distance(upXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                    else:
                        coords.append(upXY)
                        source = up
                        sourceXY = upXY
                        prevDirect = "down"
                elif (left != "null" and prevDirect != "left"):
                    if (distance(leftXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                    else:
                        coords.append(leftXY)
                        source = left
                        sourceXY = leftXY
                        prevDirect = "right"
                elif (right != "null" and prevDirect != "right"):
                    if (distance(rightXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                    else:
                        coords.append(rightXY)
                        source = right
                        sourceXY = rightXY
                        prevDirect = "left"
                else:
                    coords.append(destXY)
                    source = dest
                    sourceXY = destXY
                    return coords
            else:
                print "ln 275"
                if (down != "null" and prevDirect != "down"):
                    if (distance(downXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                    else:
                        print "ln 283"
                        coords.append(downXY)
                        source = down
                        sourceXY = downXY
                        prevDirect = "up"
                elif (left != "null" and prevDirect != "left"):
                    if (distance(leftXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                    else:
                        coords.append(leftXY)
                        source = left
                        sourceXY = leftXY
                        prevDirect = "right"
                elif (right != "null" and prevDirect != "right"):
                    if (distance(rightXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                    else:
                        coords.append(leftXY)
                        source = left
                        sourceXY = leftXY
                        prevDirect = "right"
                else:
                    coords.append(destXY)
                    source = dest
                    sourceXY = destXY
                    return coords
        elif (math.fabs(sourceXY[0] - destXY[0]) > math.fabs(sourceXY[1] - destXY[1])):
            if (sourceXY[0] > destXY[0]):
                if (left != "null" and prevDirect != "left"):
                    coords.append(leftXY)
                    source = left
                    sourceXY = leftXY
                    prevDirect = "right"
                elif (up != "null" and prevDirect != "up"):
                    coords.append(upXY)
                    source = up
                    sourceXY = upXY
                    prevDirect = "down"
                elif (down!= "null" and prevDirect != "down"):
                    coords.append(downXY)
                    source = down
                    sourceXY = downXY
                    prevDirect =  "up"
                else:
                    coords.append(rightXY)
                    source = right
                    sourceXY = rightXY
                    prevDirect = "left"
            else:
                if (right != "null" and prevDirect != "right"):
                    coords.append(rightXY)
                    source = right
                    sourceXY = rightXY
                    prevDirect = "left"
                elif (up != "null" and prevDirect != "up"):
                    coords.append(upXY)
                    source = up
                    sourceXY = upXY
                    prevDirect = "down"
                elif (down!= "null" and prevDirect != "down"):
                    coords.append(downXY)
                    source = down
                    sourceXY = downXY
                    prevDirect =  "up"
                else:
                    coords.append(leftXY)
                    source = left
                    sourceXY = leftXY
                    prevDirect = "right"
        else:
            if (sourceXY[1] > destXY[1]):  
                if (up != "null" and prevDirect != "up"):
                    coords.append(upXY)
                    source = up
                    sourceXY = upXY
                    prevDirect = "down"
                elif (left != "null" and prevDirect != "left"):
                    coords.append(leftXY)
                    source = left
                    sourceXY = leftXY
                    prevDirect = "right"
                elif (right!= "null" and prevDirect != "right"):
                    coords.append(rightXY)
                    source = right
                    sourceXY = rightXY
                    prevDirect =  "left"
                else:
                    coords.append(downXY)
                    source = down
                    sourceXY = downXY
                    prevDirect = "up"
            else:
                if (down != "null" and prevDirect != "down"):
                    coords.append(downXY)
                    source = down
                    sourceXY = downXY
                    prevDirect = "up"
                elif (left != "null" and prevDirect != "left"):
                    coords.append(leftXY)
                    source = left
                    sourceXY = leftXY
                    prevDirect = "right"
                elif (right!= "null" and prevDirect != "right"):
                    coords.append(rightXY)
                    source = right
                    sourceXY = rightXY
                    prevDirect =  "left"
                else:
                    coords.append(upXY)
                    source = up
                    sourceXY = upXY
                    prevDirect = "down"
    return coords
    
