import sqlite3

DB_NAME = "map.db"

def get_xy(room):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT x,y FROM rooms WHERE rooms.room=" + room +";"
    xy = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    return xy

def get_intersection(room, direction):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    q = "SELECT " + direction + " FROM rooms WHERE rooms.room=" + room + ";"
    intersection = c.execute(q).fetchall()
    conn.commit()
    conn.close()
    return intersection

def get_staircase(room, direction):
    conn = sqlite3
    
