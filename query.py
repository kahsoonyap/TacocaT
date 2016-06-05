import sqlite3
import math
import json

DB_NAME = "floorPlans.db"

def getXY(room):
    if (room < 100):
        return getIntersectXY(room)
    else:
        return getRoomXY(room)


def getRoomXY(room):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT x,y FROM rooms WHERE rooms.room='" + str(room) +"';"
    xy = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    xy = list(xy[0])
    xy = [float(xy[0]) , float(xy[1])]
    return xy

def getIntersect(room, direction):
    if (room < 100):
        return getIntersectDirect(room, direction)
    else:
        return getRoomIntersect(room, direction)


def getRoomIntersect(room, direction):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT " + direction + " FROM rooms WHERE rooms.room='" + str(room) + "';"
    intersection = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    intersection = str(list(intersection[0])[0])
    return intersection

def getStaircase(room):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT staircase FROM rooms where rooms.room=" + str(room) + ";"
    staircase = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    return staircase

def getIntersectXY(intersect):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT x,y FROM intersections where intersections.id='" + str(intersect) + "';"
    xy = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    xy = list(xy[0])
    xy = [float(xy[0]) , float(xy[1])]
    return xy

def getIntersectDirect(intersect, direct):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT " + direct + " FROM intersections where intersections.id='" + str(intersect) + "';"
    direction = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    direction = str(list(direction[0])[0])
    return direction

def distance(x,y):
    return math.sqrt( math.pow((x[0]-y[0]),2) + math.pow((x[1]-y[1]),2))

def findPath(source, dest):
    sourceXY = getXY(source)
    destXY = getXY(dest)
    distToDest = distance(sourceXY, destXY)
    coords = [sourceXY]
    prevDirect = ""
    while(distance(sourceXY, destXY) > 0):
        distToDest = distance(sourceXY, destXY)
        left = getIntersect(source, "left")
        if (left != "null"):
            left = int(left)
            leftXY = getXY(left)
        right = getIntersect(source, "right")
        if (right != "null"):
            right = int(right)
            rightXY = getXY(right)
        up = getIntersect(source, "up")
        if (up != "null"):
            up = int(up)
            upXY = getXY(up)
        down = getIntersect(source, "down")
        if (down != "null"):
            down = int(down)
            downXY = getXY(down)
        if (math.fabs(sourceXY[1] - destXY[1])/ sourceXY[1] < .1):
            if (sourceXY[0] > destXY[0]):
                if (left != "null"):
                    if (distance(leftXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                elif (up != "null"):
                    if (distance(upXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                elif (down != "null"):
                    if (distance(downXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                else:
                    coords.append(destXY)
                    source = dest
                    sourceXY = destXY
                    return coords
            else:
                if (right != "null"):
                    if (distance(rightXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                elif (up != "null"):
                    if (distance(upXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                elif (down != "null"):
                    if (distance(downXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                else:
                    coords.append(destXY)
                    source = dest
                    sourceXY = destXY
                    return coords
        elif (math.fabs(sourceXY[0] - destXY[0])/ sourceXY[0] < .1):
            if (sourceXY[1] > destXY[1]):
                if (up != "null"):
                    if (distance(upXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                elif (left != "null"):
                    if (distance(leftXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                elif (right != "null"):
                    if (distance(rightXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                else:
                    coords.append(destXY)
                    source = dest
                    sourceXY = destXY
                    return coords
            else:
                if (down != "null"):
                    if (distance(upXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                elif (left != "null"):
                    if (distance(leftXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                elif (right != "null"):
                    if (distance(rightXY, sourceXY) > distToDest):
                        coords.append(destXY)
                        source = dest
                        sourceXY = destXY
                        return coords
                else:
                    coords.append(destXY)
                    source = dest
                    sourceXY = destXY
                    return coords
        if (math.fabs(sourceXY[0] - destXY[0]) > math.fabs(sourceXY[1] - destXY[1])):
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
                    coords.append(leftXY)
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
    
