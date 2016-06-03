import sqlite3

DB_NAME = "floorPlans.db"

def get_xy(room):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT x,y FROM rooms WHERE rooms.room='" + str(room) +"';"
    xy = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    return xy

def get_intersection(room, direction):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT " + direction + " FROM rooms WHERE rooms.room='" + str(room) + "';"
    intersection = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    return intersection

def get_staircase(room):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT staircase FROM rooms where rooms.room=" + str(room) + ";"
    staircase = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    return staircase

def get_intersectXY(intersect):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT x,y FROM intersections where intersections.id='" + str(intersect) + "';"
    xy = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    return xy

def get_intersectDirect(intersect, direct):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT " + direct + " FROM intersections where intersections.id='" + str(intersect) + "';"
    direction = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    return direction

