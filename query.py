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
    coords = []
    while(distance(sourceXY, destXY) > 0):
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
        if (math.fabs(sourceXY[0] - destXY[0]) > math.fabs(sourceXY[1] - destXY[1]) and (left != "null" or right != "null")):
            if (sourceXY[0] > destXY[0]):
                if (distance(sourceXY, leftXY) < distToDest):
                    coords.append(leftXY)
                    source = left
                    sourceXY = leftXY
                else:
                    coords.append(destXY)
                    sourceXY = destXY
                    source = dest
            else:
                if (distance(sourceXY, rightXY) < distToDest):
                    coords.append(rightXY)
                    source = right
                    source = rightXY
                else:
                    coords.append(destXY)
                    source = dest
                    sourceXY = destXY
        else:
            if (sourceXY[1] > destXY[1]):
                if (distance(sourceXY, upXY) < distToDest):
                    coords.append(upXY)
                    source = up
                    source = upXY
                else:
                    coords.append(destXY)
                    sourceXY = destXY
                    source = dest
            else:
                if (distance(sourceXY, downXY) < distToDest):
                    coords.append(downXY)
                    source = down
                    source = downXY
                else:
                    coords.append(destXY)
                    source = dest
                    sourceXY = destXY
    return coords
    
print findPath(102,150)
