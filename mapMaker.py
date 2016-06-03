def fileReader(fileName, dic):
    s = ""
    inStream = open(fileName, "r")
    a = inStream.readlines()
    inStream.close()
    b = []
    for i in a:
        b.append(i.split(","))
    b = b[1:len(b)]
    for j in b:
        s+= dic + '["' + j[0] + '"] = block("' + j[0] + '", "' + j[2] + '")\n'
    for k in b:
        if (k[3] != ""):
            s+= dic + '["' + k[0] + '"].setNorth(' + dic + '["' + k[3] + '"]);\n'
        if (k[4] != ""):
            s+= dic + '["' + k[0] + '"].setSouth(' + dic + '["' + k[4] + '"]);\n'
        if (k[5] != ""):
            s+= dic + '["' + k[0] + '"].setWest(' + dic + '["' + k[5] + '"]);\n'
        if (k[6] != "\n"):
            s+= dic + '["' + k[0] + '"].setEast(' + dic + '["' + k[6][:-1] + '"]);\n'
    return s

#print fileReader("rooms.csv", "floor6")
