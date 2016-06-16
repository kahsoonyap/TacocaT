import sqlite3
import math
import json
import os.path
DB_NAME = os.path.dirname(__file__) + "/floorPlans.db"

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
    numRecur = 0
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
    coords = []
    if (dest == 273 and source==1500):
        coords = [sourceXY]
        coords.append(destXY)
        return coords
    elif (source == 427):
        coords = [sourceXY]
        source = 4
        sourceXY = getXY(4, 4)
    elif (dest == 239):
        if (destFloor == sourceFloor):
            dest = source
            source = 239
            destXY = sourceXY
            sourceXY = getXY(239, 2)
            destFloor = sourceFloor
            sourceFloor = 2
    elif (source == 507):
        coords = [sourceXY]
        source = 8
        sourceXY = getXY(8,5)
    elif (source == 525):
        coords = [sourceXY]
        source = 0
        sourceXY = getXY(0,5)
    elif (source == 407):
        coords = [sourceXY]
        source = 9
        sourceXY = getXY(9,4)
    elif (dest == 273):
        if (destFloor == sourceFloor):
            dest = source
            source = 273
            destXY = sourceXY
            sourceXY = getXY(273, 2)
            destFloor = sourceFloor
            sourceFloor = 2
    elif (dest == 373):
        if (destFloor == sourceFloor):
            dest = source
            source = 373
            destXY = sourceXY
            sourceXY = getXY(373, 3)
            destFloor = sourceFloor
            sourceFloor = 3
    elif (dest == 371):
        if (destFloor == sourceFloor):
            dest = source
            source = 371
            destXY = sourceXY
            sourceXY = getXY(371, 3)
            destFloor = sourceFloor
            sourceFloor = 3
    elif (dest == 372):
        if (destFloor == sourceFloor):
            dest = source
            source = 372
            destXY = sourceXY
            sourceXY = getXY(372, 3)
            destFloor = sourceFloor
            sourceFloor = 3
    distToDest = distance(sourceXY, destXY)
    coords.append(sourceXY)
    prevDirect = ""
    while(distance(sourceXY, destXY) > 0 and numRecur < 100):
        print source
        numRecur+=1
        if (source == 9 and dest > 408 and dest < 500):
            source = 8
            sourceXY = getXY(8, 4)
            coords.append(sourceXY)
        elif (source == 6 and dest == 273):
            coords.append(destXY)
            return coords
        elif (source == 5 and dest == 371):
            coords.append(destXY)
            return coords
        elif (source == 5 and dest == 372):
            coords.append(destXY)
            return coords
        elif (source == 5 and dest == 373):
            coords.append(destXY)
            return coords
        elif (source == 5 and dest == 313):
            source = 7
            sourceXY = getXY(7 , 3)
            coords.append(sourceXY)
        elif (source == 5 and dest == 311):
            source = 7
            sourceXY = getXY(7 , 3)
            coords.append(sourceXY)
        elif (source == 5 and dest == 315):
            source = 7
            sourceXY = getXY(7 , 3)
            coords.append(sourceXY)
        elif (source == 6 and dest == 507):
            source = 7
            sourceXY = getXY(7,5)
            coords.append(sourceXY)
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
            if (sourceXY[0] > destXY[0]):
                if (left != "null" and prevDirect != "left"):
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
                elif ((up != "null" and prevDirect != "up") or (down != "null" and prevDirect != "down")):
                    if (sourceXY[1] > destXY[1]):
                        if (up!= "null" and prevDirect != "up"):
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
                        if (down!= "null" and prevDirect != "down"):
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
                        if (down!= "null" and prevDirect != "down"):
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
                        if (up!= "null" and prevDirect != "up"):
                            print "ln 282 should work"
                            if (distance(upXY, sourceXY) > distToDest):
                                coords.append(destXY)
                                source = dest
                                sourceXY = destXY
                                return coords
                            else:
                                print "289 here"
                                coords.append(upXY)
                                source = up
                                sourceXY = upXY
                                prevDirect = "down"
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
                elif ((up != "null" and prevDirect != "up") or (down != "null" and prevDirect != "down")):
                    if (sourceXY[1] > destXY[1]):
                        if (up!= "null" and prevDirect !="up"):
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
                        if (down!= "null" and prevDirect != "down"):
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
                        if (down!= "null" and prevDirect != "down"):
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
                        if (up!= "null" and prevDirect != "up"):
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
                elif ((left != "null" and prevDirect != "left") or (right != "null" and prevDirect != "right")):
                    if (sourceXY[0] > destXY[1]):
                        if (left != "null" and prevDirect != "left"):
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
                        if (left != "null" and prevDirect != "left"):
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
                else:
                    coords.append(destXY)
                    source = dest
                    sourceXY = destXY
                    return coords
            else:
                if (down != "null" and prevDirect != "down"):
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
                elif ((left != "null" and prevDirect != "left") or (right != "null" and prevDirect != "right")):
                    if (sourceXY[0] > destXY[1]):
                        if (left != "null" and prevDirect != "left"):
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
                        if (left != "null" and prevDirect != "left"):
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
                elif ((up != "null" and prevDirect != "up") or (down!= "null" and prevDirect != "down")):
                    if (sourceXY[1] > destXY[1]):
                        if (up != "null" and prevDirect != "up"):
                            coords.append(upXY)
                            source = up
                            sourceXY = upXY
                            prevDirect = "down"
                        if (down != "null" and prevDirect != "down"):
                            coords.append(downXY)
                            source = down
                            sourceXY = downXY
                            prevDirect =  "up"
                    else :
                        if (down != "null" and prevDirect != "down"):
                            coords.append(downXY)
                            source = down
                            sourceXY = downXY
                            prevDirect =  "up"                        
                        if (up != "null" and prevDirect != "up"):
                            coords.append(upXY)
                            source = up
                            sourceXY = upXY
                            prevDirect = "down"
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
                elif ((up != "null" and prevDirect != "up") or (down!= "null" and prevDirect != "down")):
                    if (sourceXY[1] > destXY[1]):
                        if (up != "null" and prevDirect != "up"):
                            coords.append(upXY)
                            source = up
                            sourceXY = upXY
                            prevDirect = "down"
                        if (down != "null" and prevDirect != "down"):
                            coords.append(downXY)
                            source = down
                            sourceXY = downXY
                            prevDirect =  "up"
                    else :
                        if (down != "null" and prevDirect != "down"):
                            coords.append(downXY)
                            source = down
                            sourceXY = downXY
                            prevDirect =  "up"                        
                        if (up != "null" and prevDirect != "up"):
                            coords.append(upXY)
                            source = up
                            sourceXY = upXY
                            prevDirect = "down"
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
                elif ((left != "null" and prevDirect != "left") or (right!= "null" and prevDirect != "right")):
                    if (sourceXY[0] < destXY[0]):
                        if (left!="null" and prevDirect != "left"):
                            coords.append(leftXY)
                            source = left
                            sourceXY = leftXY
                            prevDirect = "right"
                        if (right != "null" and prevDirect != "right"):
                            coords.append(rightXY)
                            source = right
                            sourceXY = rightXY
                            prevDirect =  "left"
                    else:
                        if (right != "null" and prevDirect != "right"):
                            coords.append(rightXY)
                            source = right
                            sourceXY = rightXY
                            prevDirect =  "left"  
                        if (left!="null" and prevDirect != "left"):
                            coords.append(leftXY)
                            source = left
                            sourceXY = leftXY
                            prevDirect = "right"
                else:
                    if (down!="null"):
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
                elif ((left != "null" and prevDirect != "left") or (right!= "null" and prevDirect != "right")):
                    if (sourceXY[0] > destXY[0]):
                        if (left!="null" and prevDirect != "left"):
                            coords.append(leftXY)
                            source = left
                            sourceXY = leftXY
                            prevDirect = "right"
                        if (right != "null" and prevDirect != "right"):
                            coords.append(rightXY)
                            source = right
                            sourceXY = rightXY
                            prevDirect =  "left"
                    else:
                        if (right != "null" and prevDirect != "right"):
                            coords.append(rightXY)
                            source = right
                            sourceXY = rightXY
                            prevDirect =  "left"  
                        if (left!="null" and prevDirect != "left"):
                            coords.append(leftXY)
                            source = left
                            sourceXY = leftXY
                            prevDirect = "right"
                else:
                    coords.append(upXY)
                    source = up
                    sourceXY = upXY
                    prevDirect = "down"
    return coords
    
