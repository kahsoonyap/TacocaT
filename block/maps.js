floors = {}
floor1 = {};
floor1["0102"] = block("0102", "room")
floor1["0103"] = block("0103", "room")
floor1["0105"] = block("0105", "room")
floor1["0107"] = block("0107", "room")
floor1["0125"] = block("0125", "room")
floor1["0129"] = block("0129", "room")
floor1["0132"] = block("0132", "room")
floor1["0133"] = block("0133", "room")
floor1["0139"] = block("0139", "room")
floor1["0150"] = block("0150", "room")
floor1["0152"] = block("0152", "room")
floor1["0154"] = block("0154", "room")
floor1["0155"] = block("0155", "room")
floor1["0170"] = block("0170", "room")
floor1["0186"] = block("0186", "room")
floor1["sA01"] = block("sA01", "room")
floor1["sB01"] = block("sB01", "room")
floor1["sC01"] = block("sC01", "room")
floor1["sD01"] = block("sD01", "room")
floor1["sE01"] = block("sE01", "room")
floor1["sF01"] = block("sF01", "room")
floor1["b0101"] = block("b0101", "block")
floor1["b0102"] = block("b0102", "block")
floor1["b0103"] = block("b0103", "block")
floor1["b0104"] = block("b0104", "block")
floor1["b0105"] = block("b0105", "block")
floor1["b0106"] = block("b0106", "block")
floor1["b0107"] = block("b0107", "block")
floor1["b0108"] = block("b0108", "block")
floor1["b0109"] = block("b0109", "block")
floor1["b0110"] = block("b0110", "block")
floor1["b0111"] = block("b0111", "block")
floor1["b0112"] = block("b0112", "block")
floor1["b0113"] = block("b0113", "block")
floor1["b0114"] = block("b0114", "block")
floor1["b0115"] = block("b0115", "block")
floor1["b0116"] = block("b0116", "block")
floor1["b0117"] = block("b0117", "block")
floor1["b0118"] = block("b0118", "block")
floor1["b0119"] = block("b0119", "block")
floor1["b0120"] = block("b0120", "block")
floor1["b0121"] = block("b0121", "block")
floor1["b0122"] = block("b0122", "block")
floor1["b0123"] = block("b0123", "block")
floor1["b0124"] = block("b0124", "block")
floor1["b0125"] = block("b0125", "block")
floor1["b0126"] = block("b0126", "block")
floor1["b0127"] = block("b0127", "block")
floor1["b0128"] = block("b0128", "block")
floor1["0102"].setWest(floor1["b0103"]);
floor1["0103"].setWest(floor1["b0101"]);
floor1["0105"].setNorth(floor1["b0101"]);
floor1["0107"].setNorth(floor1["b0126"]);
floor1["0125"].setNorth(floor1["b0112"]);
floor1["0129"].setNorth(floor1["b0113"]);
floor1["0132"].setSouth(floor1["b0114"]);
floor1["0133"].setNorth(floor1["b0115"]);
floor1["0139"].setNorth(floor1["b0127"]);
floor1["0150"].setSouth(floor1["b0121"]);
floor1["0152"].setNorth(floor1["b0120"]);
floor1["0154"].setNorth(floor1["b0119"]);
floor1["0155"].setSouth(floor1["b0116"]);
floor1["0170"].setEast(floor1["b0123"]);
floor1["0186"].setSouth(floor1["b0106"]);
floor1["sA01"].setSouth(floor1["b0103"]);
floor1["sB01"].setSouth(floor1["b0113"]);
floor1["sC01"].setEast(floor1["b0117"]);
floor1["sD01"].setEast(floor1["b0118"]);
floor1["sE01"].setNorth(floor1["b0107"]);
floor1["sF01"].setNorth(floor1["b0110"]);
floor1["b0101"].setNorth(floor1["b0102"]);
floor1["b0102"].setNorth(floor1["b0103"]);
floor1["b0102"].setSouth(floor1["b0101"]);
floor1["b0102"].setWest(floor1["b0126"]);
floor1["b0102"].setEast(floor1["101"]);
floor1["b0103"].setNorth(floor1["sB01"]);
floor1["b0103"].setSouth(floor1["b0102"]);
floor1["b0103"].setWest(floor1["b0104"]);
floor1["b0103"].setEast(floor1["102"]);
floor1["b0104"].setNorth(floor1["b0105"]);
floor1["b0104"].setSouth(floor1["b0126"]);
floor1["b0104"].setEast(floor1["b0103"]);
floor1["b0105"].setSouth(floor1["b0104"]);
floor1["b0105"].setWest(floor1["b0107"]);
floor1["b0105"].setEast(floor1["b0106"]);
floor1["b0106"].setNorth(floor1["0186"]);
floor1["b0106"].setWest(floor1["b0105"]);
floor1["b0107"].setNorth(floor1["b0123"]);
floor1["b0107"].setSouth(floor1["sE01"]);
floor1["b0107"].setWest(floor1["b0108"]);
floor1["b0107"].setEast(floor1["b0105"]);
floor1["b0108"].setSouth(floor1["b0109"]);
floor1["b0108"].setWest(floor1["b0110"]);
floor1["b0108"].setEast(floor1["b0107"]);
floor1["b0109"].setNorth(floor1["b0108"]);
floor1["b0110"].setSouth(floor1["sF01"]);
floor1["b0110"].setEast(floor1["b0108"]);
floor1["b0111"].setNorth(floor1["0170"]);
floor1["b0111"].setSouth(floor1["b0112"]);
floor1["b0111"].setEast(floor1["b0110"]);
floor1["b0112"].setNorth(floor1["b0111"]);
floor1["b0112"].setSouth(floor1["0125"]);
floor1["b0112"].setEast(floor1["b0113"]);
floor1["b0113"].setNorth(floor1["sB01"]);
floor1["b0113"].setSouth(floor1["0129"]);
floor1["b0113"].setWest(floor1["b0114"]);
floor1["b0113"].setEast(floor1["b0112"]);
floor1["b0114"].setNorth(floor1["0132"]);
floor1["b0114"].setWest(floor1["b0128"]);
floor1["b0114"].setEast(floor1["b0113"]);
floor1["b0115"].setSouth(floor1["0133"]);
floor1["b0115"].setWest(floor1["b0116"]);
floor1["b0115"].setEast(floor1["b0128"]);
floor1["b0116"].setNorth(floor1["b0155"]);
floor1["b0116"].setWest(floor1["b0127"]);
floor1["b0116"].setEast(floor1["b0115"]);
floor1["b0117"].setNorth(floor1["b0118"]);
floor1["b0117"].setSouth(floor1["b0127"]);
floor1["b0117"].setWest(floor1["sC01"]);
floor1["b0118"].setSouth(floor1["b0117"]);
floor1["b0118"].setWest(floor1["sD01"]);
floor1["b0118"].setEast(floor1["b0119"]);
floor1["b0119"].setNorth(floor1["0154"]);
floor1["b0119"].setWest(floor1["b0118"]);
floor1["b0119"].setEast(floor1["b0120"]);
floor1["b0120"].setNorth(floor1["0152"]);
floor1["b0120"].setWest(floor1["b0119"]);
floor1["b0120"].setEast(floor1["b0121"]);
floor1["b0121"].setNorth(floor1["0150"]);
floor1["b0121"].setSouth(floor1["b0122"]);
floor1["b0122"].setNorth(floor1["b0121"]);
floor1["b0122"].setSouth(floor1["b0128"]);
floor1["b0123"].setNorth(floor1["b0124"]);
floor1["b0123"].setSouth(floor1["b0107"]);
floor1["b0123"].setWest(floor1["0170"]);
floor1["b0124"].setSouth(floor1["b0123"]);
floor1["b0124"].setWest(floor1["b0125"]);
floor1["b0125"].setSouth(floor1["0170"]);
floor1["b0125"].setEast(floor1["b0124"]);
floor1["b0126"].setNorth(floor1["b0104"]);
floor1["b0126"].setSouth(floor1["0107"]);
floor1["b0126"].setEast(floor1["b0102"]);
floor1["b0127"].setNorth(floor1["b0117"]);
floor1["b0127"].setEast(floor1["b0116"]);
floor1["b0128"].setNorth(floor1["b0122"]);
floor1["b0128"].setWest(floor1["b0115"]);
floor1["b0128"].setEast(floor1["b0114"]);
floors["1"] = floor1;

floor2 = {};
floor2["0206"] = block("0206", "room")
floor2["0207"] = block("0207", "room")
floor2["0209"] = block("0209", "room")
floor2["0211"] = block("0211", "room")
floor2["0222"] = block("0222", "room")
floor2["0225"] = block("0225", "room")
floor2["0229"] = block("0229", "room")
floor2["0231"] = block("0231", "room")
floor2["0233"] = block("0233", "room")
floor2["0235"] = block("0235", "room")
floor2["0236"] = block("0236", "room")
floor2["0237"] = block("0237", "room")
floor2["0239"] = block("0239", "room")
floor2["0250"] = block("0250", "room")
floor2["0251"] = block("0251", "room")
floor2["0252"] = block("0252", "room")
floor2["0260"] = block("0260", "room")
floor2["0262"] = block("0262", "room")
floor2["0270"] = block("0270", "room")
floor2["0271"] = block("0271", "room")
floor2["0273"] = block("0273", "room")
floor2["0274"] = block("0274", "room")
floor2["0275"] = block("0275", "room")
floor2["0276"] = block("0276", "room")
floor2["sA02"] = block("sA02", "room")
floor2["sB02"] = block("sB02", "room")
floor2["sC02"] = block("sC02", "room")
floor2["sD02"] = block("sD02", "room")
floor2["sE02"] = block("sE02", "room")
floor2["sF02"] = block("sF02", "room")
floor2["b0201"] = block("b0201", "block")
floor2["b0203"] = block("b0203", "block")
floor2["b0204"] = block("b0204", "block")
floor2["b0205"] = block("b0205", "block")
floor2["b0206"] = block("b0206", "block")
floor2["b0207"] = block("b0207", "block")
floor2["b0208"] = block("b0208", "block")
floor2["b0209"] = block("b0209", "block")
floor2["b0210"] = block("b0210", "block")
floor2["b0211"] = block("b0211", "block")
floor2["b0212"] = block("b0212", "block")
floor2["b0213"] = block("b0213", "block")
floor2["b0214"] = block("b0214", "block")
floor2["b0215"] = block("b0215", "block")
floor2["b0216"] = block("b0216", "block")
floor2["b0217"] = block("b0217", "block")
floor2["b0218"] = block("b0218", "block")
floor2["b0219"] = block("b0219", "block")
floor2["b0220"] = block("b0220", "block")
floor2["b0221"] = block("b0221", "block")
floor2["b0222"] = block("b0222", "block")
floor2["b0223"] = block("b0223", "block")
floor2["b0224"] = block("b0224", "block")
floor2["b0225"] = block("b0225", "block")
floor2["b0226"] = block("b0226", "block")
floor2["b0227"] = block("b0227", "block")
floor2["b0228"] = block("b0228", "block")
floor2["b0229"] = block("b0229", "block")
floor2["b0230"] = block("b0230", "block")
floor2["b0231"] = block("b0231", "block")
floor2["0206"].setSouth(floor2["b0201"]);
floor2["0207"].setNorth(floor2["b0203"]);
floor2["0209"].setNorth(floor2["b0204"]);
floor2["0211"].setNorth(floor2["b0205"]);
floor2["0222"].setSouth(floor2["b0218"]);
floor2["0225"].setNorth(floor2["b0217"]);
floor2["0229"].setNorth(floor2["b0219"]);
floor2["0231"].setNorth(floor2["b0220"]);
floor2["0233"].setNorth(floor2["b0221"]);
floor2["0235"].setNorth(floor2["b0222"]);
floor2["0236"].setSouth(floor2["b0223"]);
floor2["0237"].setNorth(floor2["b0223"]);
floor2["0239"].setNorth(floor2["b0224"]);
floor2["0250"].setSouth(floor2["b0226"]);
floor2["0251"].setSouth(floor2["b0228"]);
floor2["0252"].setSouth(floor2["b0229"]);
floor2["0260"].setWest(floor2["b0208"]);
floor2["0262"].setSouth(floor2["b0208"]);
floor2["0270"].setEast(floor2["b0230"]);
floor2["0271"].setEast(floor2["b0213"]);
floor2["0273"].setEast(floor2["b0214"]);
floor2["0274"].setEast(floor2["b0210"]);
floor2["0275"].setEast(floor2["b0211"]);
floor2["0276"].setEast(floor2["b0212"]);
floor2["sA02"].setSouth(floor2["b0203"]);
floor2["sA02"].setWest(floor2["b0206"]);
floor2["sB02"].setSouth(floor2["b0220"]);
floor2["sB02"].setEast(floor2["b0218"]);
floor2["sC02"].setEast(floor2["b0229"]);
floor2["sD02"].setEast(floor2["b0224"]);
floor2["sE02"].setNorth(floor2["b0216"]);
floor2["sF02"].setNorth(floor2["b0231"]);
floor2["b0201"].setNorth(floor2["0206"]);
floor2["b0201"].setSouth(floor2["0205"]);
floor2["b0201"].setWest(floor2["b0203"]);
floor2["b0203"].setNorth(floor2["sA02"]);
floor2["b0203"].setWest(floor2["b0204"]);
floor2["b0203"].setEast(floor2["b0201"]);
floor2["b0204"].setSouth(floor2["0209"]);
floor2["b0204"].setWest(floor2["b0205"]);
floor2["b0204"].setEast(floor2["b0203"]);
floor2["b0205"].setNorth(floor2["b0206"]);
floor2["b0205"].setSouth(floor2["0211"]);
floor2["b0205"].setEast(floor2["b0204"]);
floor2["b0206"].setNorth(floor2["b0207"]);
floor2["b0206"].setSouth(floor2["b0205"]);
floor2["b0206"].setEast(floor2["sA02"]);
floor2["b0207"].setNorth(floor2["b0208"]);
floor2["b0207"].setSouth(floor2["b0206"]);
floor2["b0208"].setNorth(floor2["0262"]);
floor2["b0208"].setSouth(floor2["b0207"]);
floor2["b0208"].setWest(floor2["b0209"]);
floor2["b0208"].setEast(floor2["0260"]);
floor2["b0209"].setNorth(floor2["b0210"]);
floor2["b0209"].setWest(floor2["b0230"]);
floor2["b0209"].setEast(floor2["b0208"]);
floor2["b0210"].setNorth(floor2["b0211"]);
floor2["b0210"].setSouth(floor2["b0209"]);
floor2["b0210"].setWest(floor2["0274"]);
floor2["b0211"].setNorth(floor2["b0212"]);
floor2["b0211"].setSouth(floor2["b0210"]);
floor2["b0211"].setWest(floor2["0275"]);
floor2["b0212"].setNorth(floor2["b0213"]);
floor2["b0212"].setSouth(floor2["b0211"]);
floor2["b0212"].setWest(floor2["0276"]);
floor2["b0213"].setNorth(floor2["b0214"]);
floor2["b0213"].setSouth(floor2["b0212"]);
floor2["b0213"].setWest(floor2["0271"]);
floor2["b0214"].setSouth(floor2["b0213"]);
floor2["b0214"].setWest(floor2["0273"]);
floor2["b0215"].setNorth(floor2["b0230"]);
floor2["b0215"].setSouth(floor2["b0231"]);
floor2["b0216"].setSouth(floor2["sE02"]);
floor2["b0216"].setWest(floor2["b0231"]);
floor2["b0216"].setEast(floor2["b0206"]);
floor2["b0217"].setWest(floor2["b0218"]);
floor2["b0217"].setEast(floor2["b0231"]);
floor2["b0218"].setNorth(floor2["0222"]);
floor2["b0218"].setSouth(floor2["b0219"]);
floor2["b0218"].setWest(floor2["sB02"]);
floor2["b0218"].setEast(floor2["b0217"]);
floor2["b0219"].setNorth(floor2["b0218"]);
floor2["b0219"].setSouth(floor2["0229"]);
floor2["b0219"].setWest(floor2["b0220"]);
floor2["b0219"].setEast(floor2["0225"]);
floor2["b0220"].setSouth(floor2["0231"]);
floor2["b0220"].setWest(floor2["b0221"]);
floor2["b0220"].setEast(floor2["b0219"]);
floor2["b0221"].setNorth(floor2["b0225"]);
floor2["b0221"].setSouth(floor2["0233"]);
floor2["b0221"].setWest(floor2["b0222"]);
floor2["b0221"].setEast(floor2["b0220"]);
floor2["b0222"].setSouth(floor2["0235"]);
floor2["b0222"].setWest(floor2["b0223"]);
floor2["b0222"].setEast(floor2["b0221"]);
floor2["b0223"].setNorth(floor2["0236"]);
floor2["b0223"].setSouth(floor2["0237"]);
floor2["b0223"].setWest(floor2["b0224"]);
floor2["b0223"].setEast(floor2["b0222"]);
floor2["b0224"].setSouth(floor2["0239"]);
floor2["b0224"].setWest(floor2["sD02"]);
floor2["b0224"].setEast(floor2["b0223"]);
floor2["b0225"].setNorth(floor2["b0226"]);
floor2["b0225"].setSouth(floor2["b0221"]);
floor2["b0226"].setNorth(floor2["2250"]);
floor2["b0226"].setSouth(floor2["b0225"]);
floor2["b0226"].setWest(floor2["b0227"]);
floor2["b0227"].setWest(floor2["b0228"]);
floor2["b0227"].setEast(floor2["b0226"]);
floor2["b0228"].setNorth(floor2["0251"]);
floor2["b0228"].setWest(floor2["b0229"]);
floor2["b0228"].setEast(floor2["b0227"]);
floor2["b0229"].setWest(floor2["sC02"]);
floor2["b0229"].setEast(floor2["b0228"]);
floor2["b0230"].setSouth(floor2["b0215"]);
floor2["b0230"].setWest(floor2["0270"]);
floor2["b0230"].setEast(floor2["b0209"]);
floor2["b0231"].setSouth(floor2["sF02"]);
floor2["b0231"].setWest(floor2["b0217"]);
floor2["b0231"].setEast(floor2["b0216"]);
floors["2"] = floor2;

floor3 = {};
floor3["0302"] = block("0302", "room")
floor3["0303"] = block("0303", "room")
floor3["0305"] = block("0305", "room")
floor3["0307"] = block("0307", "room")
floor3["0311"] = block("0311", "room")
floor3["0313"] = block("0313", "room")
floor3["0315"] = block("0315", "room")
floor3["0325"] = block("0325", "room")
floor3["0327"] = block("0327", "room")
floor3["0329"] = block("0329", "room")
floor3["0333"] = block("0333", "room")
floor3["0335"] = block("0335", "room")
floor3["0336"] = block("0336", "room")
floor3["0337"] = block("0337", "room")
floor3["0338"] = block("0338", "room")
floor3["0339"] = block("0339", "room")
floor3["0350"] = block("0350", "room")
floor3["0351"] = block("0351", "room")
floor3["0371"] = block("0371", "room")
floor3["0372"] = block("0372", "room")
floor3["0373"] = block("0373", "room")
floor3["0381"] = block("0381", "room")
floor3["0382"] = block("0382", "room")
floor3["sA03"] = block("sA03", "room")
floor3["sB03"] = block("sB03", "room")
floor3["sC03"] = block("sC03", "room")
floor3["sD03"] = block("sD03", "room")
floor3["b0301"] = block("b0301", "block")
floor3["b0302"] = block("b0302", "block")
floor3["b0303"] = block("b0303", "block")
floor3["b0304"] = block("b0304", "block")
floor3["b0305"] = block("b0305", "block")
floor3["b0306"] = block("b0306", "block")
floor3["b0307"] = block("b0307", "block")
floor3["b0308"] = block("b0308", "block")
floor3["b0309"] = block("b0309", "block")
floor3["b0310"] = block("b0310", "block")
floor3["b0311"] = block("b0311", "block")
floor3["b0312"] = block("b0312", "block")
floor3["b0313"] = block("b0313", "block")
floor3["b0314"] = block("b0314", "block")
floor3["b0315"] = block("b0315", "block")
floor3["b0316"] = block("b0316", "block")
floor3["b0317"] = block("b0317", "block")
floor3["b0318"] = block("b0318", "block")
floor3["b0319"] = block("b0319", "block")
floor3["b0320"] = block("b0320", "block")
floor3["b0321"] = block("b0321", "block")
floor3["b0323"] = block("b0323", "block")
floor3["b0324"] = block("b0324", "block")
floor3["b0325"] = block("b0325", "block")
floor3["b0326"] = block("b0326", "block")
floor3["b0327"] = block("b0327", "block")
floor3["b0328"] = block("b0328", "block")
floor3["b0329"] = block("b0329", "block")
floor3["b0330"] = block("b0330", "block")
floor3["0302"].setSouth(floor3["b0301"]);
floor3["0303"].setNorth(floor3["b0301"]);
floor3["0305"].setNorth(floor3["b0302"]);
floor3["0307"].setNorth(floor3["b0303"]);
floor3["0311"].setWest(floor3["b0307"]);
floor3["0313"].setNorth(floor3["b0307"]);
floor3["0315"].setEast(floor3["b0307"]);
floor3["0325"].setWest(floor3["b0310"]);
floor3["0327"].setNorth(floor3["b0310"]);
floor3["0329"].setNorth(floor3["0311"]);
floor3["0333"].setNorth(floor3["0312"]);
floor3["0335"].setNorth(floor3["0313"]);
floor3["0336"].setSouth(floor3["b0313"]);
floor3["0337"].setNorth(floor3["0314"]);
floor3["0338"].setSouth(floor3["b0314"]);
floor3["0339"].setNorth(floor3["b0315"]);
floor3["0350"].setSouth(floor3["b0318"]);
floor3["0351"].setSouth(floor3["b0317"]);
floor3["0371"].setEast(floor3["b0327"]);
floor3["0372"].setEast(floor3["b0329"]);
floor3["0373"].setSouth(floor3["b0329"]);
floor3["0381"].setWest(floor3["b0325"]);
floor3["0382"].setWest(floor3["b0326"]);
floor3["sA03"].setSouth(floor3["b0302"]);
floor3["sA03"].setWest(floor3["b0304"]);
floor3["sB03"].setSouth(floor3["b0310"]);
floor3["sB03"].setEast(floor3["b0309"]);
floor3["sC03"].setEast(floor3["b0315"]);
floor3["sD03"].setEast(floor3["b0317"]);
floor3["b0301"].setNorth(floor3["0302"]);
floor3["b0301"].setSouth(floor3["0303"]);
floor3["b0301"].setWest(floor3["b0302"]);
floor3["b0301"].setEast(floor3["0301"]);
floor3["b0302"].setNorth(floor3["sA03"]);
floor3["b0302"].setSouth(floor3["0305"]);
floor3["b0302"].setWest(floor3["b0303"]);
floor3["b0302"].setEast(floor3["b0301"]);
floor3["b0303"].setSouth(floor3["0307"]);
floor3["b0303"].setWest(floor3["0304"]);
floor3["b0303"].setEast(floor3["0302"]);
floor3["b0304"].setSouth(floor3["b0303"]);
floor3["b0304"].setWest(floor3["b0305"]);
floor3["b0304"].setEast(floor3["sA03"]);
floor3["b0305"].setNorth(floor3["b0324"]);
floor3["b0305"].setWest(floor3["b0306"]);
floor3["b0305"].setEast(floor3["0304"]);
floor3["b0306"].setNorth(floor3["b0308"]);
floor3["b0306"].setSouth(floor3["b0307"]);
floor3["b0306"].setEast(floor3["b0305"]);
floor3["b0307"].setNorth(floor3["b0306"]);
floor3["b0307"].setSouth(floor3["0313"]);
floor3["b0307"].setWest(floor3["0315"]);
floor3["b0307"].setEast(floor3["0311"]);
floor3["b0308"].setWest(floor3["b0309"]);
floor3["b0308"].setEast(floor3["b0306"]);
floor3["b0309"].setNorth(floor3["b0330"]);
floor3["b0309"].setSouth(floor3["b0310"]);
floor3["b0309"].setWest(floor3["sB03"]);
floor3["b0309"].setEast(floor3["b0308"]);
floor3["b0310"].setNorth(floor3["b0306"]);
floor3["b0310"].setSouth(floor3["0327"]);
floor3["b0310"].setWest(floor3["b0311"]);
floor3["b0310"].setEast(floor3["0325"]);
floor3["b0311"].setNorth(floor3["sB03"]);
floor3["b0311"].setSouth(floor3["0329"]);
floor3["b0311"].setWest(floor3["b0312"]);
floor3["b0311"].setEast(floor3["b0310"]);
floor3["b0312"].setSouth(floor3["0333"]);
floor3["b0312"].setWest(floor3["b0311"]);
floor3["b0312"].setEast(floor3["b0313"]);
floor3["b0313"].setNorth(floor3["0336"]);
floor3["b0313"].setSouth(floor3["0335"]);
floor3["b0313"].setWest(floor3["b0314"]);
floor3["b0313"].setEast(floor3["b0312"]);
floor3["b0314"].setNorth(floor3["0338"]);
floor3["b0314"].setSouth(floor3["0337"]);
floor3["b0314"].setWest(floor3["b0315"]);
floor3["b0314"].setEast(floor3["b0313"]);
floor3["b0315"].setNorth(floor3["b0316"]);
floor3["b0315"].setSouth(floor3["0339"]);
floor3["b0315"].setEast(floor3["b0314"]);
floor3["b0316"].setNorth(floor3["b0317"]);
floor3["b0316"].setSouth(floor3["b0315"]);
floor3["b0316"].setWest(floor3["sC03"]);
floor3["b0317"].setNorth(floor3["0351"]);
floor3["b0317"].setSouth(floor3["b0316"]);
floor3["b0317"].setWest(floor3["sD03"]);
floor3["b0317"].setEast(floor3["b0318"]);
floor3["b0318"].setNorth(floor3["0350"]);
floor3["b0318"].setWest(floor3["b0317"]);
floor3["b0318"].setEast(floor3["b0319"]);
floor3["b0319"].setWest(floor3["b0318"]);
floor3["b0319"].setEast(floor3["b0320"]);
floor3["b0320"].setSouth(floor3["b0330"]);
floor3["b0320"].setWest(floor3["b0319"]);
floor3["b0320"].setEast(floor3["b0321"]);
floor3["b0321"].setWest(floor3["b0320"]);
floor3["b0321"].setEast(floor3["b0323"]);
floor3["b0323"].setNorth(floor3["b0325"]);
floor3["b0323"].setSouth(floor3["b0324"]);
floor3["b0323"].setWest(floor3["b0321"]);
floor3["b0324"].setNorth(floor3["b0323"]);
floor3["b0324"].setSouth(floor3["b0305"]);
floor3["b0325"].setNorth(floor3["b0326"]);
floor3["b0325"].setSouth(floor3["b0323"]);
floor3["b0325"].setEast(floor3["0381"]);
floor3["b0326"].setNorth(floor3["b0327"]);
floor3["b0326"].setSouth(floor3["b0325"]);
floor3["b0326"].setEast(floor3["0382"]);
floor3["b0327"].setNorth(floor3["b0328"]);
floor3["b0327"].setSouth(floor3["b0326"]);
floor3["b0327"].setWest(floor3["0371"]);
floor3["b0328"].setNorth(floor3["b0329"]);
floor3["b0328"].setSouth(floor3["b0327"]);
floor3["b0329"].setNorth(floor3["0373"]);
floor3["b0329"].setSouth(floor3["b0328"]);
floor3["b0329"].setWest(floor3["0372"]);
floor3["b0330"].setNorth(floor3["b0320"]);
floor3["b0330"].setSouth(floor3["b0309"]);
floors["3"] = floor3;

floor4 = {};
floor4["0402"] = block("0402", "room")
floor4["0403"] = block("0403", "room")
floor4["0404"] = block("0404", "room")
floor4["0405"] = block("0405", "room")
floor4["0407"] = block("0407", "room")
floor4["0408"] = block("0408", "room")
floor4["0411"] = block("0411", "room")
floor4["0413"] = block("0413", "room")
floor4["0427"] = block("0427", "room")
floor4["0429"] = block("0429", "room")
floor4["0431"] = block("0431", "room")
floor4["0433"] = block("0433", "room")
floor4["0435"] = block("0435", "room")
floor4["0436"] = block("0436", "room")
floor4["0437"] = block("0437", "room")
floor4["0439"] = block("0439", "room")
floor4["0440"] = block("0440", "room")
floor4["0450"] = block("0450", "room")
floor4["0451"] = block("0451", "room")
floor4["0453"] = block("0453", "room")
floor4["sA04"] = block("sA04", "room")
floor4["sB04"] = block("sB04", "room")
floor4["sC04"] = block("sC04", "room")
floor4["sD04"] = block("sD04", "room")
floor4["b0401"] = block("b0401", "block")
floor4["b0402"] = block("b0402", "block")
floor4["b0403"] = block("b0403", "block")
floor4["b0404"] = block("b0404", "block")
floor4["b0405"] = block("b0405", "block")
floor4["b0406"] = block("b0406", "block")
floor4["b0407"] = block("b0407", "block")
floor4["b0408"] = block("b0408", "block")
floor4["b0409"] = block("b0409", "block")
floor4["b0410"] = block("b0410", "block")
floor4["b0411"] = block("b0411", "block")
floor4["b0412"] = block("b0412", "block")
floor4["b0413"] = block("b0413", "block")
floor4["b0414"] = block("b0414", "block")
floor4["b0415"] = block("b0415", "block")
floor4["b0416"] = block("b0416", "block")
floor4["b0417"] = block("b0417", "block")
floor4["b0418"] = block("b0418", "block")
floor4["b0419"] = block("b0419", "block")
floor4["b0420"] = block("b0420", "block")
floor4["b0421"] = block("b0421", "block")
floor4["b0422"] = block("b0422", "block")
floor4["b0423"] = block("b0423", "block")
floor4["b0424"] = block("b0424", "block")
floor4["b0425"] = block("b0425", "block")
floor4["0402"].setWest(floor4["b0401"]);
floor4["0403"].setNorth(floor4["b0403"]);
floor4["0404"].setSouth(floor4["b0401"]);
floor4["0405"].setNorth(floor4["b0403"]);
floor4["0407"].setNorth(floor4["b0404"]);
floor4["0408"].setSouth(floor4["b0423"]);
floor4["0411"].setNorth(floor4["b0407"]);
floor4["0413"].setNorth(floor4["b0408"]);
floor4["0427"].setNorth(floor4["b0425"]);
floor4["0429"].setNorth(floor4["b0410"]);
floor4["0431"].setNorth(floor4["b0411"]);
floor4["0433"].setNorth(floor4["b0412"]);
floor4["0435"].setNorth(floor4["b0413"]);
floor4["0436"].setSouth(floor4["b0413"]);
floor4["0437"].setNorth(floor4["b0414"]);
floor4["0439"].setNorth(floor4["b0415"]);
floor4["0440"].setSouth(floor4["b0414"]);
floor4["0450"].setSouth(floor4["b0418"]);
floor4["0451"].setSouth(floor4["b0419"]);
floor4["0453"].setNorth(floor4["b0417"]);
floor4["sA04"].setSouth(floor4["b0402"]);
floor4["sA04"].setWest(floor4["b0405"]);
floor4["sB04"].setSouth(floor4["b0411"]);
floor4["sB04"].setEast(floor4["b0409"]);
floor4["sC04"].setEast(floor4["b0417"]);
floor4["sD04"].setEast(floor4["b0415"]);
floor4["b0401"].setNorth(floor4["0404"]);
floor4["b0401"].setSouth(floor4["0401"]);
floor4["b0401"].setEast(floor4["0402"]);
floor4["b0402"].setNorth(floor4["sA04"]);
floor4["b0402"].setWest(floor4["b0403"]);
floor4["b0402"].setEast(floor4["b0401"]);
floor4["b0403"].setSouth(floor4["0405"]);
floor4["b0403"].setWest(floor4["b0404"]);
floor4["b0403"].setEast(floor4["b0402"]);
floor4["b0404"].setSouth(floor4["0407"]);
floor4["b0404"].setEast(floor4["b0403"]);
floor4["b0405"].setNorth(floor4["b0406"]);
floor4["b0405"].setSouth(floor4["b0403"]);
floor4["b0405"].setWest(floor4["b0407"]);
floor4["b0405"].setEast(floor4["sA04"]);
floor4["b0406"].setNorth(floor4["b0423"]);
floor4["b0406"].setSouth(floor4["b0405"]);
floor4["b0407"].setSouth(floor4["0411"]);
floor4["b0407"].setWest(floor4["b0408"]);
floor4["b0407"].setEast(floor4["b0405"]);
floor4["b0408"].setSouth(floor4["0413"]);
floor4["b0408"].setWest(floor4["b0409"]);
floor4["b0408"].setEast(floor4["b0407"]);
floor4["b0409"].setNorth(floor4["b0424"]);
floor4["b0409"].setSouth(floor4["b0410"]);
floor4["b0409"].setWest(floor4["sB04"]);
floor4["b0409"].setEast(floor4["b0408"]);
floor4["b0410"].setNorth(floor4["b0409"]);
floor4["b0410"].setSouth(floor4["0429"]);
floor4["b0410"].setWest(floor4["b0411"]);
floor4["b0410"].setEast(floor4["b0425"]);
floor4["b0411"].setNorth(floor4["sB04"]);
floor4["b0411"].setSouth(floor4["0431"]);
floor4["b0411"].setWest(floor4["b0412"]);
floor4["b0411"].setEast(floor4["b0410"]);
floor4["b0412"].setSouth(floor4["0433"]);
floor4["b0412"].setWest(floor4["b0413"]);
floor4["b0412"].setEast(floor4["b0411"]);
floor4["b0413"].setNorth(floor4["0435"]);
floor4["b0413"].setSouth(floor4["0436"]);
floor4["b0413"].setWest(floor4["b0414"]);
floor4["b0413"].setEast(floor4["b0412"]);
floor4["b0414"].setNorth(floor4["0440"]);
floor4["b0414"].setSouth(floor4["0437"]);
floor4["b0414"].setWest(floor4["b0415"]);
floor4["b0414"].setEast(floor4["b0413"]);
floor4["b0415"].setNorth(floor4["b0416"]);
floor4["b0415"].setSouth(floor4["0439"]);
floor4["b0415"].setEast(floor4["b0414"]);
floor4["b0416"].setNorth(floor4["b0417"]);
floor4["b0416"].setSouth(floor4["b0415"]);
floor4["b0416"].setWest(floor4["sD04"]);
floor4["b0417"].setNorth(floor4["0453"]);
floor4["b0417"].setSouth(floor4["b0416"]);
floor4["b0417"].setWest(floor4["sC04"]);
floor4["b0417"].setEast(floor4["b0418"]);
floor4["b0418"].setNorth(floor4["0450"]);
floor4["b0418"].setWest(floor4["b0417"]);
floor4["b0418"].setEast(floor4["b0419"]);
floor4["b0419"].setNorth(floor4["0451"]);
floor4["b0419"].setWest(floor4["b0418"]);
floor4["b0419"].setEast(floor4["0420"]);
floor4["b0420"].setWest(floor4["b0419"]);
floor4["b0420"].setEast(floor4["b0421"]);
floor4["b0421"].setSouth(floor4["b0424"]);
floor4["b0421"].setWest(floor4["b0420"]);
floor4["b0421"].setEast(floor4["b0422"]);
floor4["b0422"].setWest(floor4["b0421"]);
floor4["b0422"].setEast(floor4["b0423"]);
floor4["b0423"].setSouth(floor4["b0406"]);
floor4["b0423"].setWest(floor4["b0422"]);
floor4["b0424"].setNorth(floor4["b0421"]);
floor4["b0424"].setSouth(floor4["b0409"]);
floor4["b0425"].setSouth(floor4["0427"]);
floor4["b0425"].setWest(floor4["b0410"]);
floors["4"] = floor4;

floor5 = {};
floor5["0502"] = block("0502", "room")
floor5["0503"] = block("0503", "room")
floor5["0505"] = block("0505", "room")
floor5["0507"] = block("0507", "room")
floor5["0511"] = block("0511", "room")
floor5["0513"] = block("0513", "room")
floor5["0525"] = block("0525", "room")
floor5["0531"] = block("0531", "room")
floor5["0540"] = block("0540", "room")
floor5["0580"] = block("0580", "room")
floor5["0583"] = block("0583", "room")
floor5["0584"] = block("0584", "room")
floor5["sA05"] = block("sA05", "room")
floor5["sB05"] = block("sB05", "room")
floor5["b0501"] = block("b0501", "block")
floor5["b0502"] = block("b0502", "block")
floor5["b0503"] = block("b0503", "block")
floor5["b0504"] = block("b0504", "block")
floor5["b0505"] = block("b0505", "block")
floor5["b0506"] = block("b0506", "block")
floor5["b0507"] = block("b0507", "block")
floor5["b0508"] = block("b0508", "block")
floor5["b0509"] = block("b0509", "block")
floor5["b0510"] = block("b0510", "block")
floor5["b0511"] = block("b0511", "block")
floor5["b0512"] = block("b0512", "block")
floor5["b0513"] = block("b0513", "block")
floor5["b0514"] = block("b0514", "block")
floor5["b0515"] = block("b0515", "block")
floor5["b0516"] = block("b0516", "block")
floor5["b0517"] = block("b0517", "block")
floor5["b0518"] = block("b0518", "block")
floor5["0502"].setSouth(floor5["b0501"]);
floor5["0503"].setNorth(floor5["b0502"]);
floor5["0505"].setNorth(floor5["b0503"]);
floor5["0507"].setEast(floor5["b0503"]);
floor5["0511"].setWest(floor5["b0506"]);
floor5["0513"].setEast(floor5["b0506"]);
floor5["0525"].setWest(floor5["b0509"]);
floor5["0531"].setNorth(floor5["b0510"]);
floor5["0540"].setEast(floor5["b0510"]);
floor5["0580"].setWest(floor5["b0514"]);
floor5["0583"].setWest(floor5["b0515"]);
floor5["0584"].setWest(floor5["b0516"]);
floor5["sA05"].setSouth(floor5["b0502"]);
floor5["sA05"].setWest(floor5["b0504"]);
floor5["sB05"].setSouth(floor5["b0510"]);
floor5["sB05"].setEast(floor5["b0508"]);
floor5["b0501"].setNorth(floor5["0502"]);
floor5["b0501"].setSouth(floor5["0501"]);
floor5["b0501"].setWest(floor5["b0502"]);
floor5["b0502"].setNorth(floor5["sA05"]);
floor5["b0502"].setSouth(floor5["0503"]);
floor5["b0502"].setWest(floor5["b0503"]);
floor5["b0502"].setEast(floor5["b0501"]);
floor5["b0503"].setNorth(floor5["b0504"]);
floor5["b0503"].setSouth(floor5["0505"]);
floor5["b0503"].setWest(floor5["0507"]);
floor5["b0503"].setEast(floor5["b0502"]);
floor5["b0504"].setNorth(floor5["b0513"]);
floor5["b0504"].setSouth(floor5["b0503"]);
floor5["b0504"].setWest(floor5["b0505"]);
floor5["b0504"].setEast(floor5["sA05"]);
floor5["b0505"].setSouth(floor5["b0506"]);
floor5["b0505"].setWest(floor5["b0507"]);
floor5["b0505"].setEast(floor5["b0504"]);
floor5["b0506"].setNorth(floor5["b0505"]);
floor5["b0506"].setWest(floor5["0513"]);
floor5["b0506"].setEast(floor5["0511"]);
floor5["b0507"].setWest(floor5["b0508"]);
floor5["b0507"].setEast(floor5["b0505"]);
floor5["b0508"].setNorth(floor5["b05011"]);
floor5["b0508"].setSouth(floor5["b0509"]);
floor5["b0508"].setWest(floor5["sB05"]);
floor5["b0508"].setEast(floor5["b0507"]);
floor5["b0509"].setNorth(floor5["b0508"]);
floor5["b0509"].setWest(floor5["b0510"]);
floor5["b0509"].setEast(floor5["0525"]);
floor5["b0510"].setNorth(floor5["sB05"]);
floor5["b0510"].setSouth(floor5["0531"]);
floor5["b0510"].setWest(floor5["0540"]);
floor5["b0510"].setEast(floor5["b0509"]);
floor5["b0511"].setNorth(floor5["b0518"]);
floor5["b0511"].setSouth(floor5["b0508"]);
floor5["b0512"].setWest(floor5["b0518"]);
floor5["b0512"].setEast(floor5["b0517"]);
floor5["b0513"].setNorth(floor5["b0517"]);
floor5["b0513"].setSouth(floor5["b0504"]);
floor5["b0514"].setNorth(floor5["b0515"]);
floor5["b0514"].setSouth(floor5["b0513"]);
floor5["b0514"].setEast(floor5["0580"]);
floor5["b0515"].setNorth(floor5["b0516"]);
floor5["b0515"].setSouth(floor5["b0514"]);
floor5["b0515"].setEast(floor5["0583"]);
floor5["b0516"].setSouth(floor5["b0515"]);
floor5["b0516"].setEast(floor5["0584"]);
floor5["b0517"].setNorth(floor5["b0513"]);
floor5["b0517"].setSouth(floor5["b0513"]);
floor5["b0517"].setWest(floor5["b0512"]);
floor5["b0518"].setSouth(floor5["b0511"]);
floor5["b0518"].setEast(floor5["b0512"]);
floors["5"] = floor5;

floor6 = {};
floor6["0615"] = block("0615", "room")
floor6["0615A"] = block("0615A", "room")
floor6["0615C"] = block("0615C", "room")
floor6["0627"] = block("0627", "room")
floor6["0629"] = block("0629", "room")
floor6["0635"] = block("0635", "room")
floor6["0636"] = block("0636", "room")
floor6["0638"] = block("0638", "room")
floor6["0639"] = block("0639", "room")
floor6["0640"] = block("0640", "room")
floor6["0660"] = block("0660", "room")
floor6["0680"] = block("0680", "room")
floor6["sA06"] = block("sA06", "room")
floor6["sB06"] = block("sB06", "room")
floor6["sD06"] = block("sD06", "room")
floor6["b0601"] = block("b0601", "block")
floor6["b0602"] = block("b0602", "block")
floor6["b0603"] = block("b0603", "block")
floor6["b0604"] = block("b0604", "block")
floor6["b0605"] = block("b0605", "block")
floor6["b0606"] = block("b0606", "block")
floor6["b0607"] = block("b0607", "block")
floor6["b0608"] = block("b0608", "block")
floor6["b0609"] = block("b0609", "block")
floor6["b0610"] = block("b0610", "block")
floor6["b0611"] = block("b0611", "block")
floor6["b0612"] = block("b0612", "block")
floor6["b0613"] = block("b0613", "block")
floor6["b0614"] = block("b0614", "block")
floor6["0615"].setNorth(floor6["b0606"]);
floor6["0615A"].setNorth(floor6["b0610"]);
floor6["0615C"].setNorth(floor6["b0601"]);
floor6["0627"].setNorth(floor6["b0611"]);
floor6["0629"].setNorth(floor6["b0612"]);
floor6["0635"].setNorth(floor6["b0613"]);
floor6["0636"].setSouth(floor6["b0612"]);
floor6["0638"].setSouth(floor6["b0613"]);
floor6["0639"].setNorth(floor6["b0614"]);
floor6["0640"].setSouth(floor6["b0614"]);
floor6["0660"].setWest(floor6["b0605"]);
floor6["0680"].setSouth(floor6["b0605"]);
floor6["sA06"].setSouth(floor6["b0602"]);
floor6["sA06"].setWest(floor6["b0603"]);
floor6["sB06"].setSouth(floor6["b0610"]);
floor6["sB06"].setEast(floor6["b0607"]);
floor6["sD06"].setEast(floor6["b0614"]);
floor6["b0601"].setEast(floor6["0601"]);
floor6["b0602"].setNorth(floor6["sA06"]);
floor6["b0602"].setWest(floor6["b0603"]);
floor6["b0602"].setEast(floor6["b0601"]);
floor6["b0603"].setNorth(floor6["b0604"]);
floor6["b0603"].setSouth(floor6["b0602"]);
floor6["b0603"].setWest(floor6["b0606"]);
floor6["b0603"].setEast(floor6["sA06"]);
floor6["b0604"].setNorth(floor6["b0605"]);
floor6["b0604"].setSouth(floor6["b0603"]);
floor6["b0605"].setNorth(floor6["0680"]);
floor6["b0605"].setSouth(floor6["b0604"]);
floor6["b0605"].setEast(floor6["0660"]);
floor6["b0606"].setSouth(floor6["0615"]);
floor6["b0606"].setWest(floor6["b0607"]);
floor6["b0606"].setEast(floor6["b0603"]);
floor6["b0607"].setNorth(floor6["b0608"]);
floor6["b0607"].setSouth(floor6["b0609"]);
floor6["b0607"].setWest(floor6["sB06"]);
floor6["b0607"].setEast(floor6["b0606"]);
floor6["b0608"].setSouth(floor6["b0607"]);
floor6["b0609"].setNorth(floor6["b0607"]);
floor6["b0609"].setWest(floor6["b0610"]);
floor6["b0610"].setNorth(floor6["sB06"]);
floor6["b0610"].setWest(floor6["b0611"]);
floor6["b0610"].setEast(floor6["b0609"]);
floor6["b0611"].setSouth(floor6["0627"]);
floor6["b0611"].setWest(floor6["b0612"]);
floor6["b0611"].setEast(floor6["b0610"]);
floor6["b0612"].setNorth(floor6["0636"]);
floor6["b0612"].setSouth(floor6["0629"]);
floor6["b0612"].setWest(floor6["b0613"]);
floor6["b0612"].setEast(floor6["b0611"]);
floor6["b0613"].setNorth(floor6["0638"]);
floor6["b0613"].setSouth(floor6["0635"]);
floor6["b0613"].setWest(floor6["b0614"]);
floor6["b0613"].setEast(floor6["b0612"]);
floor6["b0614"].setNorth(floor6["0640"]);
floor6["b0614"].setSouth(floor6["0639"]);
floor6["b0614"].setWest(floor6["sD06"]);
floor6["b0614"].setEast(floor6["b0613"]);
floors["6"] = floor6;

floor7 = {};
floor7["0702"] = block("0702", "block")
floor7["0703"] = block("0703", "room")
floor7["0704"] = block("0704", "room")
floor7["0705"] = block("0705", "room")
floor7["0707"] = block("0707", "room")
floor7["0709"] = block("0709", "room")
floor7["0715"] = block("0715", "room")
floor7["0717"] = block("0717", "room")
floor7["0726"] = block("0726", "room")
floor7["0727"] = block("0727", "room")
floor7["0729"] = block("0729", "room")
floor7["0731"] = block("0731", "room")
floor7["0735"] = block("0735", "room")
floor7["0736"] = block("0736", "room")
floor7["0737"] = block("0737", "room")
floor7["0738"] = block("0738", "room")
floor7["0739"] = block("0739", "room")
floor7["0740"] = block("0740", "room")
floor7["sA07"] = block("sA07", "room")
floor7["sB07"] = block("sB07", "room")
floor7["sD07"] = block("sD07", "room")
floor7["b0701"] = block("b0701", "block")
floor7["b0702"] = block("b0702", "block")
floor7["b0703"] = block("b0703", "block")
floor7["b0704"] = block("b0704", "block")
floor7["b0705"] = block("b0705", "block")
floor7["b0706"] = block("b0706", "block")
floor7["b0707"] = block("b0707", "block")
floor7["b0708"] = block("b0708", "block")
floor7["b0709"] = block("b0709", "block")
floor7["b0710"] = block("b0710", "block")
floor7["b0711"] = block("b0711", "block")
floor7["b0712"] = block("b0712", "block")
floor7["b0713"] = block("b0713", "block")
floor7["b0714"] = block("b0714", "block")
floor7["b0715"] = block("b0715", "block")
floor7["b0716"] = block("b0716", "block")
floor7["0702"].setSouth(floor7["b0701"]);
floor7["0703"].setNorth(floor7["b0701"]);
floor7["0704"].setSouth(floor7["b0702"]);
floor7["0705"].setNorth(floor7["b0702"]);
floor7["0707"].setNorth(floor7["b0703"]);
floor7["0709"].setNorth(floor7["b0704"]);
floor7["0715"].setWest(floor7["b0707"]);
floor7["0717"].setEast(floor7["b0707"]);
floor7["0726"].setSouth(floor7["b0713"]);
floor7["0727"].setNorth(floor7["b0711"]);
floor7["0729"].setNorth(floor7["b0712"]);
floor7["0731"].setNorth(floor7["b0713"]);
floor7["0735"].setNorth(floor7["b0714"]);
floor7["0736"].setSouth(floor7["b0714"]);
floor7["0737"].setNorth(floor7["b0715"]);
floor7["0738"].setSouth(floor7["b0715"]);
floor7["0739"].setNorth(floor7["b0716"]);
floor7["0740"].setSouth(floor7["b0716"]);
floor7["sA07"].setNorth(floor7["b0703"]);
floor7["sA07"].setWest(floor7["b0705"]);
floor7["sB07"].setSouth(floor7["b0712"]);
floor7["sB07"].setEast(floor7["b0709"]);
floor7["sD07"].setEast(floor7["b0716"]);
floor7["b0701"].setNorth(floor7["0702"]);
floor7["b0701"].setSouth(floor7["0703"]);
floor7["b0701"].setWest(floor7["b0702"]);
floor7["b0701"].setEast(floor7["0701"]);
floor7["b0702"].setNorth(floor7["0704"]);
floor7["b0702"].setSouth(floor7["0705"]);
floor7["b0702"].setWest(floor7["b0703"]);
floor7["b0702"].setEast(floor7["b0701"]);
floor7["b0703"].setNorth(floor7["sA07"]);
floor7["b0703"].setSouth(floor7["0707"]);
floor7["b0703"].setWest(floor7["b0704"]);
floor7["b0703"].setEast(floor7["b0702"]);
floor7["b0704"].setNorth(floor7["b0705"]);
floor7["b0704"].setSouth(floor7["0709"]);
floor7["b0704"].setEast(floor7["b0703"]);
floor7["b0705"].setNorth(floor7["b0706"]);
floor7["b0705"].setSouth(floor7["b0704"]);
floor7["b0705"].setWest(floor7["b0708"]);
floor7["b0705"].setEast(floor7["sA07"]);
floor7["b0706"].setSouth(floor7["b0706"]);
floor7["b0707"].setNorth(floor7["b0708"]);
floor7["b0707"].setWest(floor7["0717"]);
floor7["b0707"].setEast(floor7["0715"]);
floor7["b0708"].setWest(floor7["b0709"]);
floor7["b0708"].setEast(floor7["b0705"]);
floor7["b0709"].setNorth(floor7["b0710"]);
floor7["b0709"].setSouth(floor7["b0711"]);
floor7["b0709"].setWest(floor7["sB07"]);
floor7["b0709"].setEast(floor7["b0708"]);
floor7["b0710"].setSouth(floor7["b0709"]);
floor7["b0711"].setNorth(floor7["b0709"]);
floor7["b0711"].setSouth(floor7["0727"]);
floor7["b0711"].setWest(floor7["b0712"]);
floor7["b0712"].setNorth(floor7["sB07"]);
floor7["b0712"].setSouth(floor7["0729"]);
floor7["b0712"].setEast(floor7["b0711"]);
floor7["b0713"].setNorth(floor7["0726"]);
floor7["b0713"].setSouth(floor7["0731"]);
floor7["b0713"].setWest(floor7["b0714"]);
floor7["b0713"].setEast(floor7["b0712"]);
floor7["b0714"].setNorth(floor7["0736"]);
floor7["b0714"].setSouth(floor7["0735"]);
floor7["b0714"].setWest(floor7["b0715"]);
floor7["b0714"].setEast(floor7["b0713"]);
floor7["b0715"].setNorth(floor7["0738"]);
floor7["b0715"].setSouth(floor7["0737"]);
floor7["b0715"].setWest(floor7["b0716"]);
floor7["b0715"].setEast(floor7["b0714"]);
floor7["b0716"].setNorth(floor7["0740"]);
floor7["b0716"].setSouth(floor7["0739"]);
floor7["b0716"].setWest(floor7["sD07"]);
floor7["b0716"].setEast(floor7["b0715"]);
floors["7"] = floor7;

floor8 = {};
floor8["0802"] = block("0802", "room")
floor8["0803"] = block("0803", "room")
floor8["0804"] = block("0804", "room")
floor8["0807"] = block("0807", "room")
floor8["0809"] = block("0809", "room")
floor8["0811"] = block("0811", "room")
floor8["0815"] = block("0815", "room")
floor8["0817"] = block("0817", "room")
floor8["0826"] = block("0826", "room")
floor8["0827"] = block("0827", "room")
floor8["0829"] = block("0829", "room")
floor8["0833"] = block("0833", "room")
floor8["0835"] = block("0835", "room")
floor8["0836"] = block("0836", "room")
floor8["0837"] = block("0837", "room")
floor8["0838"] = block("0838", "room")
floor8["0839"] = block("0839", "room")
floor8["0840"] = block("0840", "room")
floor8["sA08"] = block("sA08", "room")
floor8["sB08"] = block("sB08", "room")
floor8["sD08"] = block("sD08", "room")
floor8["b0801"] = block("b0801", "block")
floor8["b0802"] = block("b0802", "block")
floor8["b0803"] = block("b0803", "block")
floor8["b0804"] = block("b0804", "block")
floor8["b0805"] = block("b0805", "block")
floor8["b0806"] = block("b0806", "block")
floor8["b0807"] = block("b0807", "block")
floor8["b0808"] = block("b0808", "block")
floor8["b0809"] = block("b0809", "block")
floor8["b0810"] = block("b0810", "block")
floor8["b0811"] = block("b0811", "block")
floor8["b0812"] = block("b0812", "block")
floor8["b0813"] = block("b0813", "block")
floor8["b0814"] = block("b0814", "block")
floor8["b0815"] = block("b0815", "block")
floor8["b0816"] = block("b0816", "block")
floor8["b0817"] = block("b0817", "block")
floor8["b0818"] = block("b0818", "block")
floor8["0802"].setSouth(floor8["b0801"]);
floor8["0803"].setNorth(floor8["b0801"]);
floor8["0804"].setSouth(floor8["b0802"]);
floor8["0807"].setNorth(floor8["b0802"]);
floor8["0809"].setNorth(floor8["b0803"]);
floor8["0811"].setEast(floor8["b0803"]);
floor8["0815"].setNorth(floor8["b0808"]);
floor8["0817"].setEast(floor8["b0808"]);
floor8["0826"].setSouth(floor8["b0813"]);
floor8["0827"].setEast(floor8["b0812"]);
floor8["0829"].setNorth(floor8["b0813"]);
floor8["0833"].setNorth(floor8["b0814"]);
floor8["0835"].setNorth(floor8["b0815"]);
floor8["0836"].setSouth(floor8["b0814"]);
floor8["0837"].setNorth(floor8["b0816"]);
floor8["0838"].setSouth(floor8["b0815"]);
floor8["0839"].setNorth(floor8["b0817"]);
floor8["0840"].setSouth(floor8["b0816"]);
floor8["sA08"].setSouth(floor8["b0819"]);
floor8["sA08"].setWest(floor8["b0805"]);
floor8["sB08"].setSouth(floor8["b0818"]);
floor8["sB08"].setEast(floor8["b0809"]);
floor8["sD08"].setEast(floor8["b0817"]);
floor8["b0801"].setNorth(floor8["0802"]);
floor8["b0801"].setSouth(floor8["0803"]);
floor8["b0801"].setWest(floor8["b0802"]);
floor8["b0801"].setEast(floor8["0801"]);
floor8["b0802"].setNorth(floor8["0804"]);
floor8["b0802"].setWest(floor8["b0819"]);
floor8["b0802"].setEast(floor8["b0801"]);
floor8["b0803"].setNorth(floor8["b0804"]);
floor8["b0803"].setSouth(floor8["0809"]);
floor8["b0803"].setWest(floor8["0811"]);
floor8["b0803"].setEast(floor8["0807"]);
floor8["b0804"].setNorth(floor8["b0805"]);
floor8["b0804"].setSouth(floor8["b0803"]);
floor8["b0804"].setEast(floor8["b0819"]);
floor8["b0805"].setNorth(floor8["b0806"]);
floor8["b0805"].setSouth(floor8["b0804"]);
floor8["b0805"].setWest(floor8["b0807"]);
floor8["b0805"].setEast(floor8["sA08"]);
floor8["b0806"].setSouth(floor8["b0805"]);
floor8["b0807"].setSouth(floor8["b0808"]);
floor8["b0807"].setWest(floor8["b0809"]);
floor8["b0807"].setEast(floor8["b0805"]);
floor8["b0808"].setNorth(floor8["b0807"]);
floor8["b0808"].setSouth(floor8["0815"]);
floor8["b0808"].setWest(floor8["0817"]);
floor8["b0809"].setNorth(floor8["b0810"]);
floor8["b0809"].setSouth(floor8["b0811"]);
floor8["b0809"].setWest(floor8["sB08"]);
floor8["b0809"].setEast(floor8["b0807"]);
floor8["b0810"].setSouth(floor8["b0809"]);
floor8["b0811"].setNorth(floor8["b0809"]);
floor8["b0811"].setSouth(floor8["b0812"]);
floor8["b0811"].setWest(floor8["b0818"]);
floor8["b0812"].setNorth(floor8["b0811"]);
floor8["b0812"].setWest(floor8["0827"]);
floor8["b0813"].setNorth(floor8["0826"]);
floor8["b0813"].setSouth(floor8["0829"]);
floor8["b0813"].setWest(floor8["b0814"]);
floor8["b0813"].setEast(floor8["b0818"]);
floor8["b0814"].setNorth(floor8["0836"]);
floor8["b0814"].setSouth(floor8["0833"]);
floor8["b0814"].setWest(floor8["b0815"]);
floor8["b0814"].setEast(floor8["b0813"]);
floor8["b0815"].setNorth(floor8["0838"]);
floor8["b0815"].setSouth(floor8["0835"]);
floor8["b0815"].setWest(floor8["b0816"]);
floor8["b0815"].setEast(floor8["b0814"]);
floor8["b0816"].setNorth(floor8["0840"]);
floor8["b0816"].setSouth(floor8["0837"]);
floor8["b0816"].setWest(floor8["b0817"]);
floor8["b0816"].setEast(floor8["b0815"]);
floor8["b0817"].setSouth(floor8["0839"]);
floor8["b0817"].setWest(floor8["sD08"]);
floor8["b0817"].setEast(floor8["b0816"]);
floor8["b0818"].setNorth(floor8["sB08"]);
floor8["b0818"].setWest(floor8["b0813"]);
floor8["b0818"].setEast(floor8["b0811"]);
floors["8"] = floor8;

floor9 = {};
floor9["0902"] = block("0902", "room")
floor9["0903"] = block("0903", "room")
floor9["0907"] = block("0907", "room")
floor9["0909"] = block("0909", "room")
floor9["0911"] = block("0911", "room")
floor9["0913"] = block("0913", "room")
floor9["0925"] = block("0925", "room")
floor9["0926"] = block("0926", "room")
floor9["0927"] = block("0927", "room")
floor9["0931"] = block("0931", "room")
floor9["0935"] = block("0935", "room")
floor9["0936"] = block("0936", "room")
floor9["0938"] = block("0938", "room")
floor9["0939"] = block("0939", "room")
floor9["0940"] = block("0940", "room")
floor9["sA09"] = block("sA09", "room")
floor9["sB09"] = block("sB09", "room")
floor9["sD09"] = block("sD09", "room")
floor9["b0901"] = block("b0901", "block")
floor9["b0902"] = block("b0902", "block")
floor9["b0903"] = block("b0903", "block")
floor9["b0904"] = block("b0904", "block")
floor9["b0905"] = block("b0905", "block")
floor9["b0906"] = block("b0906", "block")
floor9["b0907"] = block("b0907", "block")
floor9["b0908"] = block("b0908", "block")
floor9["b0909"] = block("b0909", "block")
floor9["b0910"] = block("b0910", "block")
floor9["b0911"] = block("b0911", "block")
floor9["b0912"] = block("b0912", "block")
floor9["b0913"] = block("b0913", "block")
floor9["b0914"] = block("b0914", "block")
floor9["b0915"] = block("b0915", "block")
floor9["b0916"] = block("b0916", "block")
floor9["b0917"] = block("b0917", "block")
floor9["b0918"] = block("b0918", "block")
floor9["b0919"] = block("b0919", "block")
floor9["0902"].setSouth(floor9["b0901"]);
floor9["0903"].setNorth(floor9["b0901"]);
floor9["0907"].setEast(floor9["b0915"]);
floor9["0909"].setWest(floor9["b0906"]);
floor9["0911"].setNorth(floor9["b0911"]);
floor9["0913"].setEast(floor9["b0913"]);
floor9["0925"].setEast(floor9["b0925"]);
floor9["0926"].setSouth(floor9["b0911"]);
floor9["0927"].setNorth(floor9["b0911"]);
floor9["0931"].setNorth(floor9["b0912"]);
floor9["0935"].setNorth(floor9["b0913"]);
floor9["0936"].setSouth(floor9["b0912"]);
floor9["0938"].setSouth(floor9["b0913"]);
floor9["0939"].setNorth(floor9["b0914"]);
floor9["0940"].setSouth(floor9["b0914"]);
floor9["sA09"].setSouth(floor9["b0902"]);
floor9["sA09"].setWest(floor9["b0917"]);
floor9["sB09"].setSouth(floor9["b0919"]);
floor9["sB09"].setEast(floor9["b0909"]);
floor9["sD09"].setEast(floor9["b0914"]);
floor9["b0901"].setNorth(floor9["0902"]);
floor9["b0901"].setSouth(floor9["0903"]);
floor9["b0901"].setWest(floor9["b0902"]);
floor9["b0901"].setEast(floor9["0903"]);
floor9["b0902"].setNorth(floor9["sA09"]);
floor9["b0902"].setWest(floor9["b0916"]);
floor9["b0902"].setEast(floor9["b0901"]);
floor9["b0903"].setSouth(floor9["b0917"]);
floor9["b0904"].setWest(floor9["b0905"]);
floor9["b0904"].setEast(floor9["b0917"]);
floor9["b0905"].setSouth(floor9["b0906"]);
floor9["b0905"].setWest(floor9["b0907"]);
floor9["b0905"].setEast(floor9["b0904"]);
floor9["b0906"].setNorth(floor9["b0905"]);
floor9["b0906"].setSouth(floor9["0911"]);
floor9["b0906"].setWest(floor9["0913"]);
floor9["b0906"].setEast(floor9["0909"]);
floor9["b0907"].setWest(floor9["b0909"]);
floor9["b0907"].setEast(floor9["b0905"]);
floor9["b0908"].setSouth(floor9["b0909"]);
floor9["b0909"].setNorth(floor9["b0908"]);
floor9["b0909"].setSouth(floor9["b09010"]);
floor9["b0909"].setWest(floor9["sB09"]);
floor9["b0909"].setEast(floor9["b0907"]);
floor9["b0910"].setNorth(floor9["b0909"]);
floor9["b0910"].setSouth(floor9["b0918"]);
floor9["b0910"].setWest(floor9["b0919"]);
floor9["b0911"].setNorth(floor9["0926"]);
floor9["b0911"].setSouth(floor9["0927"]);
floor9["b0911"].setWest(floor9["b0912"]);
floor9["b0911"].setEast(floor9["b0919"]);
floor9["b0912"].setNorth(floor9["0936"]);
floor9["b0912"].setSouth(floor9["0931"]);
floor9["b0912"].setWest(floor9["b0913"]);
floor9["b0912"].setEast(floor9["b0911"]);
floor9["b0913"].setNorth(floor9["0938"]);
floor9["b0913"].setSouth(floor9["b0935"]);
floor9["b0913"].setWest(floor9["b0914"]);
floor9["b0913"].setEast(floor9["b0912"]);
floor9["b0914"].setNorth(floor9["0940"]);
floor9["b0914"].setSouth(floor9["0939"]);
floor9["b0914"].setWest(floor9["sD09"]);
floor9["b0914"].setEast(floor9["b0913"]);
floor9["b0915"].setNorth(floor9["b0916"]);
floor9["b0915"].setWest(floor9["0907"]);
floor9["b0916"].setNorth(floor9["b0917"]);
floor9["b0916"].setSouth(floor9["b0915"]);
floor9["b0916"].setEast(floor9["b0902"]);
floor9["b0917"].setNorth(floor9["b0903"]);
floor9["b0917"].setSouth(floor9["b0916"]);
floor9["b0917"].setWest(floor9["b0904"]);
floor9["b0917"].setEast(floor9["sA09"]);
floor9["b0918"].setNorth(floor9["b0910"]);
floor9["b0918"].setWest(floor9["0925"]);
floor9["b0919"].setNorth(floor9["sB09"]);
floor9["b0919"].setWest(floor9["b0911"]);
floor9["b0919"].setEast(floor9["b0910"]);
floors["9"] = floor9;
