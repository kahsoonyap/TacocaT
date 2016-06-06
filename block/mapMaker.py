def fileReader(fileName, dic):
    s = ""
    inStream = open(fileName, "r")
    a = inStream.readlines()
    inStream.close()
    b = []
    for i in a:
        b.append(i.split(","))
    for j in b:
        if (len(j[0]) == 3):
            s+= dic + '["0' + j[0] + '"] = block("0' + j[0] + '", "' + j[2] + '")\n'
        else:
            s+= dic + '["' + j[0] + '"] = block("' + j[0] + '", "' + j[2] + '")\n'
    for k in b:
        if (k[3] != ""):
            if (len(k[3]) == 3):
                if (len(k[0]) == 3):
                    s+= dic + '["0' + k[0] + '"].setNorth(' + dic + '["0' + k[3] + '"]);\n'
                else:
                    s+= dic + '["' + k[0] + '"].setNorth(' + dic + '["0' + k[3] + '"]);\n'
            else:
                if (len(k[0]) == 3):
                    s+= dic + '["0' + k[0] + '"].setNorth(' + dic + '["' + k[3] + '"]);\n'
                else:
                    s+= dic + '["' + k[0] + '"].setNorth(' + dic + '["' + k[3] + '"]);\n'
        if (k[4] != ""):
            if (len(k[4]) == 3):
                if (len(k[0]) == 3):
                    s+= dic + '["0' + k[0] + '"].setSouth(' + dic + '["0' + k[4] + '"]);\n'
                else:
                    s+= dic + '["' + k[0] + '"].setSouth(' + dic + '["0' + k[4] + '"]);\n'
            else:
                if (len(k[0]) == 3):
                    s+= dic + '["0' + k[0] + '"].setSouth(' + dic + '["' + k[4] + '"]);\n'
                else:
                    s+= dic + '["' + k[0] + '"].setSouth(' + dic + '["' + k[4] + '"]);\n'
        if (k[5] != ""):
            if (len(k[5]) == 3):
                if (len(k[0]) == 3):
                    s+= dic + '["0' + k[0] + '"].setWest(' + dic + '["0' + k[5] + '"]);\n'
                else:
                    s+= dic + '["' + k[0] + '"].setWest(' + dic + '["0' + k[5] + '"]);\n'
            else:
                if (len(k[0]) == 3):
                    s+= dic + '["0' + k[0] + '"].setWest(' + dic + '["' + k[5] + '"]);\n'
                else:
                    s+= dic + '["' + k[0] + '"].setWest(' + dic + '["' + k[5] + '"]);\n'
        if (k[6] != "\r\n"):
            if (len(k[6]) == 3):
                if (len(k[0]) == 3):
                    s+= dic + '["0' + k[0] + '"].setEast(' + dic + '["0' + k[6] + '"]);\n'
                else:
                    s+= dic + '["' + k[0] + '"].setEast(' + dic + '["0' + k[6] + '"]);\n'
            else:
                if (len(k[0]) == 3):
                    s+= dic + '["0' + k[0] + '"].setEast(' + dic + '["' + k[6] + '"]);\n'
                else:
                    s+= dic + '["' + k[0] + '"].setEast(' + dic + '["' + k[6][:-1] + '"]);\n'
    return s


print 'floors = {}'
for i in range(10, 11):
    print 'floor' + str(i) + ' = {};'
    print fileReader('floor' + str(i) + '.csv', 'floor' + str(i))
    print 'floors["' + str(i) + '"] = floor' + str(i) + ';'
