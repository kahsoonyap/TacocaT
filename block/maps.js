floors = {}
floor01 = {};
floor01["0101"] = block("0101", "room")
floor01["0102"] = block("0102", "room")
floor01["0103"] = block("0103", "room")
floor01["0105"] = block("0105", "room")
floor01["0107"] = block("0107", "room")
floor01["0125"] = block("0125", "room")
floor01["0129"] = block("0129", "room")
floor01["0132"] = block("0132", "room")
floor01["0133"] = block("0133", "room")
floor01["0139"] = block("0139", "room")
floor01["0150"] = block("0150", "room")
floor01["0152"] = block("0152", "room")
floor01["0154"] = block("0154", "room")
floor01["0155"] = block("0155", "room")
floor01["0170"] = block("0170", "room")
floor01["0186"] = block("0186", "room")
floor01["sA01"] = block("sA01", "room")
floor01["sB01"] = block("sB01", "room")
floor01["sC01"] = block("sC01", "room")
floor01["sD01"] = block("sD01", "room")
floor01["sE01"] = block("sE01", "room")
floor01["sF01"] = block("sF01", "room")
floor01["b0101"] = block("b0101", "block")
floor01["b0102"] = block("b0102", "block")
floor01["b0103"] = block("b0103", "block")
floor01["b0104"] = block("b0104", "block")
floor01["b0105"] = block("b0105", "block")
floor01["b0106"] = block("b0106", "block")
floor01["b0107"] = block("b0107", "block")
floor01["b0108"] = block("b0108", "block")
floor01["b0109"] = block("b0109", "block")
floor01["b0110"] = block("b0110", "block")
floor01["b0111"] = block("b0111", "block")
floor01["b0112"] = block("b0112", "block")
floor01["b0113"] = block("b0113", "block")
floor01["b0114"] = block("b0114", "block")
floor01["b0115"] = block("b0115", "block")
floor01["b0116"] = block("b0116", "block")
floor01["b0117"] = block("b0117", "block")
floor01["b0118"] = block("b0118", "block")
floor01["b0119"] = block("b0119", "block")
floor01["b0120"] = block("b0120", "block")
floor01["b0121"] = block("b0121", "block")
floor01["b0122"] = block("b0122", "block")
floor01["b0123"] = block("b0123", "block")
floor01["b0124"] = block("b0124", "block")
floor01["b0125"] = block("b0125", "block")
floor01["b0126"] = block("b0126", "block")
floor01["b0127"] = block("b0127", "block")
floor01["b0128"] = block("b0128", "block")
floor01["0101"].setWest(floor01["b0102"]);
floor01["0102"].setWest(floor01["b0103"]);
floor01["0103"].setWest(floor01["b0101"]);
floor01["0105"].setNorth(floor01["b0101"]);
floor01["0107"].setNorth(floor01["b0126"]);
floor01["0125"].setNorth(floor01["b0112"]);
floor01["0129"].setNorth(floor01["b0113"]);
floor01["0132"].setSouth(floor01["b0114"]);
floor01["0133"].setNorth(floor01["b0115"]);
floor01["0139"].setNorth(floor01["b0127"]);
floor01["0150"].setSouth(floor01["b0121"]);
floor01["0152"].setNorth(floor01["b0120"]);
floor01["0154"].setNorth(floor01["b0119"]);
floor01["0155"].setSouth(floor01["b0116"]);
floor01["0170"].setEast(floor01["b0123"]);
floor01["0186"].setSouth(floor01["b0106"]);
floor01["sA01"].setSouth(floor01["b0103"]);
floor01["sB01"].setSouth(floor01["b0113"]);
floor01["sC01"].setEast(floor01["b0117"]);
floor01["sD01"].setEast(floor01["b0118"]);
floor01["sE01"].setNorth(floor01["b0107"]);
floor01["sF01"].setNorth(floor01["b0110"]);
floor01["b0101"].setNorth(floor01["b0102"]);
floor01["b0102"].setNorth(floor01["b0103"]);
floor01["b0102"].setSouth(floor01["b0101"]);
floor01["b0102"].setWest(floor01["b0126"]);
floor01["b0102"].setEast(floor01["0101"]);
floor01["b0103"].setNorth(floor01["sB01"]);
floor01["b0103"].setSouth(floor01["b0102"]);
floor01["b0103"].setWest(floor01["b0104"]);
floor01["b0103"].setEast(floor01["0102"]);
floor01["b0104"].setNorth(floor01["b0105"]);
floor01["b0104"].setSouth(floor01["b0126"]);
floor01["b0104"].setEast(floor01["b0103"]);
floor01["b0105"].setSouth(floor01["b0104"]);
floor01["b0105"].setWest(floor01["b0107"]);
floor01["b0105"].setEast(floor01["b0106"]);
floor01["b0106"].setNorth(floor01["0186"]);
floor01["b0106"].setWest(floor01["b0105"]);
floor01["b0107"].setNorth(floor01["b0123"]);
floor01["b0107"].setSouth(floor01["sE01"]);
floor01["b0107"].setWest(floor01["b0108"]);
floor01["b0107"].setEast(floor01["b0105"]);
floor01["b0108"].setSouth(floor01["b0109"]);
floor01["b0108"].setWest(floor01["b0110"]);
floor01["b0108"].setEast(floor01["b0107"]);
floor01["b0109"].setNorth(floor01["b0108"]);
floor01["b0110"].setSouth(floor01["sF01"]);
floor01["b0110"].setEast(floor01["b0108"]);
floor01["b0111"].setNorth(floor01["0170"]);
floor01["b0111"].setSouth(floor01["b0112"]);
floor01["b0111"].setEast(floor01["b0110"]);
floor01["b0112"].setNorth(floor01["b0111"]);
floor01["b0112"].setSouth(floor01["0125"]);
floor01["b0112"].setEast(floor01["b0113"]);
floor01["b0113"].setNorth(floor01["sB01"]);
floor01["b0113"].setSouth(floor01["0129"]);
floor01["b0113"].setWest(floor01["b0114"]);
floor01["b0113"].setEast(floor01["b0112"]);
floor01["b0114"].setNorth(floor01["0132"]);
floor01["b0114"].setWest(floor01["b0128"]);
floor01["b0114"].setEast(floor01["b0113"]);
floor01["b0115"].setSouth(floor01["0133"]);
floor01["b0115"].setWest(floor01["b0116"]);
floor01["b0115"].setEast(floor01["b0128"]);
floor01["b0116"].setNorth(floor01["b0155"]);
floor01["b0116"].setWest(floor01["b0127"]);
floor01["b0116"].setEast(floor01["b0115"]);
floor01["b0117"].setNorth(floor01["b0118"]);
floor01["b0117"].setSouth(floor01["b0127"]);
floor01["b0117"].setWest(floor01["sC01"]);
floor01["b0118"].setSouth(floor01["b0117"]);
floor01["b0118"].setWest(floor01["sD01"]);
floor01["b0118"].setEast(floor01["b0119"]);
floor01["b0119"].setNorth(floor01["0154"]);
floor01["b0119"].setWest(floor01["b0118"]);
floor01["b0119"].setEast(floor01["b0120"]);
floor01["b0120"].setNorth(floor01["0152"]);
floor01["b0120"].setWest(floor01["b0119"]);
floor01["b0120"].setEast(floor01["b0121"]);
floor01["b0121"].setNorth(floor01["0150"]);
floor01["b0121"].setSouth(floor01["b0122"]);
floor01["b0122"].setNorth(floor01["b0121"]);
floor01["b0122"].setSouth(floor01["b0128"]);
floor01["b0123"].setNorth(floor01["b0124"]);
floor01["b0123"].setSouth(floor01["b0107"]);
floor01["b0123"].setWest(floor01["0170"]);
floor01["b0124"].setSouth(floor01["b0123"]);
floor01["b0124"].setWest(floor01["b0125"]);
floor01["b0125"].setSouth(floor01["0170"]);
floor01["b0125"].setEast(floor01["b0124"]);
floor01["b0126"].setNorth(floor01["b0104"]);
floor01["b0126"].setSouth(floor01["0107"]);
floor01["b0126"].setEast(floor01["b0102"]);
floor01["b0127"].setNorth(floor01["b0117"]);
floor01["b0127"].setEast(floor01["b0116"]);
floor01["b0128"].setNorth(floor01["b0122"]);
floor01["b0128"].setWest(floor01["b0115"]);
floor01["b0128"].setEast(floor01["b0114"]);
floors["01"] = floor01;

floor02 = {};
floor02["0205"] = block("0205", "room")
floor02["0206"] = block("0206", "room")
floor02["0207"] = block("0207", "room")
floor02["0209"] = block("0209", "room")
floor02["0211"] = block("0211", "room")
floor02["0222"] = block("0222", "room")
floor02["0225"] = block("0225", "room")
floor02["0229"] = block("0229", "room")
floor02["0231"] = block("0231", "room")
floor02["0233"] = block("0233", "room")
floor02["0235"] = block("0235", "room")
floor02["0236"] = block("0236", "room")
floor02["0237"] = block("0237", "room")
floor02["0239"] = block("0239", "room")
floor02["0250"] = block("0250", "room")
floor02["0251"] = block("0251", "room")
floor02["0252"] = block("0252", "room")
floor02["0260"] = block("0260", "room")
floor02["0262"] = block("0262", "room")
floor02["0270"] = block("0270", "room")
floor02["0271"] = block("0271", "room")
floor02["0273"] = block("0273", "room")
floor02["0274"] = block("0274", "room")
floor02["0275"] = block("0275", "room")
floor02["0276"] = block("0276", "room")
floor02["sA02"] = block("sA02", "room")
floor02["sB02"] = block("sB02", "room")
floor02["sC02"] = block("sC02", "room")
floor02["sD02"] = block("sD02", "room")
floor02["sE02"] = block("sE02", "room")
floor02["sF02"] = block("sF02", "room")
floor02["b0201"] = block("b0201", "block")
floor02["b0203"] = block("b0203", "block")
floor02["b0204"] = block("b0204", "block")
floor02["b0205"] = block("b0205", "block")
floor02["b0206"] = block("b0206", "block")
floor02["b0207"] = block("b0207", "block")
floor02["b0208"] = block("b0208", "block")
floor02["b0209"] = block("b0209", "block")
floor02["b0210"] = block("b0210", "block")
floor02["b0211"] = block("b0211", "block")
floor02["b0212"] = block("b0212", "block")
floor02["b0213"] = block("b0213", "block")
floor02["b0214"] = block("b0214", "block")
floor02["b0215"] = block("b0215", "block")
floor02["b0216"] = block("b0216", "block")
floor02["b0217"] = block("b0217", "block")
floor02["b0218"] = block("b0218", "block")
floor02["b0219"] = block("b0219", "block")
floor02["b0220"] = block("b0220", "block")
floor02["b0221"] = block("b0221", "block")
floor02["b0222"] = block("b0222", "block")
floor02["b0223"] = block("b0223", "block")
floor02["b0224"] = block("b0224", "block")
floor02["b0225"] = block("b0225", "block")
floor02["b0226"] = block("b0226", "block")
floor02["b0227"] = block("b0227", "block")
floor02["b0228"] = block("b0228", "block")
floor02["b0229"] = block("b0229", "block")
floor02["b0230"] = block("b0230", "block")
floor02["b0231"] = block("b0231", "block")
floor02["0205"].setNorth("b0201");
floor02["0206"].setSouth(floor02["b0201"]);
floor02["0207"].setNorth(floor02["b0203"]);
floor02["0209"].setNorth(floor02["b0204"]);
floor02["0211"].setNorth(floor02["b0205"]);
floor02["0222"].setSouth(floor02["b0218"]);
floor02["0225"].setNorth(floor02["b0217"]);
floor02["0229"].setNorth(floor02["b0219"]);
floor02["0231"].setNorth(floor02["b0220"]);
floor02["0233"].setNorth(floor02["b0221"]);
floor02["0235"].setNorth(floor02["b0222"]);
floor02["0236"].setSouth(floor02["b0223"]);
floor02["0237"].setNorth(floor02["b0223"]);
floor02["0239"].setNorth(floor02["b0224"]);
floor02["0250"].setSouth(floor02["b0226"]);
floor02["0251"].setSouth(floor02["b0228"]);
floor02["0252"].setSouth(floor02["b0229"]);
floor02["0260"].setWest(floor02["b0208"]);
floor02["0262"].setSouth(floor02["b0208"]);
floor02["0270"].setEast(floor02["b0230"]);
floor02["0271"].setEast(floor02["b0213"]);
floor02["0273"].setEast(floor02["b0214"]);
floor02["0274"].setEast(floor02["b0210"]);
floor02["0275"].setEast(floor02["b0211"]);
floor02["0276"].setEast(floor02["b0212"]);
floor02["sA02"].setSouth(floor02["b0203"]);
floor02["sA02"].setWest(floor02["b0206"]);
floor02["sB02"].setSouth(floor02["b0220"]);
floor02["sB02"].setEast(floor02["b0218"]);
floor02["sC02"].setEast(floor02["b0229"]);
floor02["sD02"].setEast(floor02["b0224"]);
floor02["sE02"].setNorth(floor02["b0216"]);
floor02["sF02"].setNorth(floor02["b0231"]);
floor02["b0201"].setNorth(floor02["0206"]);
floor02["b0201"].setSouth(floor02["0205"]);
floor02["b0201"].setWest(floor02["b0203"]);
floor02["b0203"].setNorth(floor02["sA02"]);
floor02["b0203"].setWest(floor02["b0204"]);
floor02["b0203"].setEast(floor02["b0201"]);
floor02["b0204"].setSouth(floor02["0209"]);
floor02["b0204"].setWest(floor02["b0205"]);
floor02["b0204"].setEast(floor02["b0203"]);
floor02["b0205"].setNorth(floor02["b0206"]);
floor02["b0205"].setSouth(floor02["0211"]);
floor02["b0205"].setEast(floor02["b0204"]);
floor02["b0206"].setNorth(floor02["b0207"]);
floor02["b0206"].setSouth(floor02["b0205"]);
floor02["b0206"].setEast(floor02["sA02"]);
floor02["b0207"].setNorth(floor02["b0208"]);
floor02["b0207"].setSouth(floor02["b0206"]);
floor02["b0208"].setNorth(floor02["0262"]);
floor02["b0208"].setSouth(floor02["b0207"]);
floor02["b0208"].setWest(floor02["b0209"]);
floor02["b0208"].setEast(floor02["0260"]);
floor02["b0209"].setNorth(floor02["b0210"]);
floor02["b0209"].setWest(floor02["b0230"]);
floor02["b0209"].setEast(floor02["b0208"]);
floor02["b0210"].setNorth(floor02["b0211"]);
floor02["b0210"].setSouth(floor02["b0209"]);
floor02["b0210"].setWest(floor02["0274"]);
floor02["b0211"].setNorth(floor02["b0212"]);
floor02["b0211"].setSouth(floor02["b0210"]);
floor02["b0211"].setWest(floor02["0275"]);
floor02["b0212"].setNorth(floor02["b0213"]);
floor02["b0212"].setSouth(floor02["b0211"]);
floor02["b0212"].setWest(floor02["0276"]);
floor02["b0213"].setNorth(floor02["b0214"]);
floor02["b0213"].setSouth(floor02["b0212"]);
floor02["b0213"].setWest(floor02["0271"]);
floor02["b0214"].setSouth(floor02["b0213"]);
floor02["b0214"].setWest(floor02["0273"]);
floor02["b0215"].setNorth(floor02["b0230"]);
floor02["b0215"].setSouth(floor02["b0231"]);
floor02["b0216"].setSouth(floor02["sE02"]);
floor02["b0216"].setWest(floor02["b0231"]);
floor02["b0216"].setEast(floor02["b0206"]);
floor02["b0217"].setWest(floor02["b0218"]);
floor02["b0217"].setEast(floor02["b0231"]);
floor02["b0218"].setNorth(floor02["0222"]);
floor02["b0218"].setSouth(floor02["b0219"]);
floor02["b0218"].setWest(floor02["sB02"]);
floor02["b0218"].setEast(floor02["b0217"]);
floor02["b0219"].setNorth(floor02["b0218"]);
floor02["b0219"].setSouth(floor02["0229"]);
floor02["b0219"].setWest(floor02["b0220"]);
floor02["b0219"].setEast(floor02["0225"]);
floor02["b0220"].setSouth(floor02["0231"]);
floor02["b0220"].setWest(floor02["b0221"]);
floor02["b0220"].setEast(floor02["b0219"]);
floor02["b0221"].setNorth(floor02["b0225"]);
floor02["b0221"].setSouth(floor02["0233"]);
floor02["b0221"].setWest(floor02["b0222"]);
floor02["b0221"].setEast(floor02["b0220"]);
floor02["b0222"].setSouth(floor02["0235"]);
floor02["b0222"].setWest(floor02["b0223"]);
floor02["b0222"].setEast(floor02["b0221"]);
floor02["b0223"].setNorth(floor02["0236"]);
floor02["b0223"].setSouth(floor02["0237"]);
floor02["b0223"].setWest(floor02["b0224"]);
floor02["b0223"].setEast(floor02["b0222"]);
floor02["b0224"].setSouth(floor02["0239"]);
floor02["b0224"].setWest(floor02["sD02"]);
floor02["b0224"].setEast(floor02["b0223"]);
floor02["b0225"].setNorth(floor02["b0226"]);
floor02["b0225"].setSouth(floor02["b0221"]);
floor02["b0226"].setNorth(floor02["2250"]);
floor02["b0226"].setSouth(floor02["b0225"]);
floor02["b0226"].setWest(floor02["b0227"]);
floor02["b0227"].setWest(floor02["b0228"]);
floor02["b0227"].setEast(floor02["b0226"]);
floor02["b0228"].setNorth(floor02["0251"]);
floor02["b0228"].setWest(floor02["b0229"]);
floor02["b0228"].setEast(floor02["b0227"]);
floor02["b0229"].setWest(floor02["sC02"]);
floor02["b0229"].setEast(floor02["b0228"]);
floor02["b0230"].setSouth(floor02["b0215"]);
floor02["b0230"].setWest(floor02["0270"]);
floor02["b0230"].setEast(floor02["b0209"]);
floor02["b0231"].setSouth(floor02["sF02"]);
floor02["b0231"].setWest(floor02["b0217"]);
floor02["b0231"].setEast(floor02["b0216"]);
floors["02"] = floor02;

floor03 = {};
floor03["0301"] = block("0301", "room")
floor03["0302"] = block("0302", "room")
floor03["0303"] = block("0303", "room")
floor03["0305"] = block("0305", "room")
floor03["0307"] = block("0307", "room")
floor03["0311"] = block("0311", "room")
floor03["0313"] = block("0313", "room")
floor03["0315"] = block("0315", "room")
floor03["0325"] = block("0325", "room")
floor03["0327"] = block("0327", "room")
floor03["0329"] = block("0329", "room")
floor03["0333"] = block("0333", "room")
floor03["0335"] = block("0335", "room")
floor03["0336"] = block("0336", "room")
floor03["0337"] = block("0337", "room")
floor03["0338"] = block("0338", "room")
floor03["0339"] = block("0339", "room")
floor03["0350"] = block("0350", "room")
floor03["0351"] = block("0351", "room")
floor03["0371"] = block("0371", "room")
floor03["0372"] = block("0372", "room")
floor03["0373"] = block("0373", "room")
floor03["0381"] = block("0381", "room")
floor03["0382"] = block("0382", "room")
floor03["sA03"] = block("sA03", "room")
floor03["sB03"] = block("sB03", "room")
floor03["sC03"] = block("sC03", "room")
floor03["sD03"] = block("sD03", "room")
floor03["b0301"] = block("b0301", "block")
floor03["b0302"] = block("b0302", "block")
floor03["b0303"] = block("b0303", "block")
floor03["b0304"] = block("b0304", "block")
floor03["b0305"] = block("b0305", "block")
floor03["b0306"] = block("b0306", "block")
floor03["b0307"] = block("b0307", "block")
floor03["b0308"] = block("b0308", "block")
floor03["b0309"] = block("b0309", "block")
floor03["b0310"] = block("b0310", "block")
floor03["b0311"] = block("b0311", "block")
floor03["b0312"] = block("b0312", "block")
floor03["b0313"] = block("b0313", "block")
floor03["b0314"] = block("b0314", "block")
floor03["b0315"] = block("b0315", "block")
floor03["b0316"] = block("b0316", "block")
floor03["b0317"] = block("b0317", "block")
floor03["b0318"] = block("b0318", "block")
floor03["b0319"] = block("b0319", "block")
floor03["b0320"] = block("b0320", "block")
floor03["b0321"] = block("b0321", "block")
floor03["b0323"] = block("b0323", "block")
floor03["b0324"] = block("b0324", "block")
floor03["b0325"] = block("b0325", "block")
floor03["b0326"] = block("b0326", "block")
floor03["b0327"] = block("b0327", "block")
floor03["b0328"] = block("b0328", "block")
floor03["b0329"] = block("b0329", "block")
floor03["b0330"] = block("b0330", "block")
floor03["0301"].setWest(floor03["b0301"]);
floor03["0302"].setSouth(floor03["b0301"]);
floor03["0303"].setNorth(floor03["b0301"]);
floor03["0305"].setNorth(floor03["b0302"]);
floor03["0307"].setNorth(floor03["b0303"]);
floor03["0311"].setWest(floor03["b0307"]);
floor03["0313"].setNorth(floor03["b0307"]);
floor03["0315"].setEast(floor03["b0307"]);
floor03["0325"].setWest(floor03["b0310"]);
floor03["0327"].setNorth(floor03["b0310"]);
floor03["0329"].setNorth(floor03["0311"]);
floor03["0333"].setNorth(floor03["0312"]);
floor03["0335"].setNorth(floor03["0313"]);
floor03["0336"].setSouth(floor03["b0313"]);
floor03["0337"].setNorth(floor03["0314"]);
floor03["0338"].setSouth(floor03["b0314"]);
floor03["0339"].setNorth(floor03["b0315"]);
floor03["0350"].setSouth(floor03["b0318"]);
floor03["0351"].setSouth(floor03["b0317"]);
floor03["0371"].setEast(floor03["b0327"]);
floor03["0372"].setEast(floor03["b0329"]);
floor03["0373"].setSouth(floor03["b0329"]);
floor03["0381"].setWest(floor03["b0325"]);
floor03["0382"].setWest(floor03["b0326"]);
floor03["sA03"].setSouth(floor03["b0302"]);
floor03["sA03"].setWest(floor03["b0304"]);
floor03["sB03"].setSouth(floor03["b0310"]);
floor03["sB03"].setEast(floor03["b0309"]);
floor03["sC03"].setEast(floor03["b0315"]);
floor03["sD03"].setEast(floor03["b0317"]);
floor03["b0301"].setNorth(floor03["0302"]);
floor03["b0301"].setSouth(floor03["0303"]);
floor03["b0301"].setWest(floor03["b0302"]);
floor03["b0301"].setEast(floor03["0301"]);
floor03["b0302"].setNorth(floor03["sA03"]);
floor03["b0302"].setSouth(floor03["0305"]);
floor03["b0302"].setWest(floor03["b0303"]);
floor03["b0302"].setEast(floor03["b0301"]);
floor03["b0303"].setSouth(floor03["0307"]);
floor03["b0303"].setWest(floor03["0304"]);
floor03["b0303"].setEast(floor03["0302"]);
floor03["b0304"].setSouth(floor03["b0303"]);
floor03["b0304"].setWest(floor03["b0305"]);
floor03["b0304"].setEast(floor03["sA03"]);
floor03["b0305"].setNorth(floor03["b0324"]);
floor03["b0305"].setWest(floor03["b0306"]);
floor03["b0305"].setEast(floor03["0304"]);
floor03["b0306"].setNorth(floor03["b0308"]);
floor03["b0306"].setSouth(floor03["b0307"]);
floor03["b0306"].setEast(floor03["b0305"]);
floor03["b0307"].setNorth(floor03["b0306"]);
floor03["b0307"].setSouth(floor03["0313"]);
floor03["b0307"].setWest(floor03["0315"]);
floor03["b0307"].setEast(floor03["0311"]);
floor03["b0308"].setWest(floor03["b0309"]);
floor03["b0308"].setEast(floor03["b0306"]);
floor03["b0309"].setNorth(floor03["b0330"]);
floor03["b0309"].setSouth(floor03["b0310"]);
floor03["b0309"].setWest(floor03["sB03"]);
floor03["b0309"].setEast(floor03["b0308"]);
floor03["b0310"].setNorth(floor03["b0306"]);
floor03["b0310"].setSouth(floor03["0327"]);
floor03["b0310"].setWest(floor03["b0311"]);
floor03["b0310"].setEast(floor03["0325"]);
floor03["b0311"].setNorth(floor03["sB03"]);
floor03["b0311"].setSouth(floor03["0329"]);
floor03["b0311"].setWest(floor03["b0312"]);
floor03["b0311"].setEast(floor03["b0310"]);
floor03["b0312"].setSouth(floor03["0333"]);
floor03["b0312"].setWest(floor03["b0311"]);
floor03["b0312"].setEast(floor03["b0313"]);
floor03["b0313"].setNorth(floor03["0336"]);
floor03["b0313"].setSouth(floor03["0335"]);
floor03["b0313"].setWest(floor03["b0314"]);
floor03["b0313"].setEast(floor03["b0312"]);
floor03["b0314"].setNorth(floor03["0338"]);
floor03["b0314"].setSouth(floor03["0337"]);
floor03["b0314"].setWest(floor03["b0315"]);
floor03["b0314"].setEast(floor03["b0313"]);
floor03["b0315"].setNorth(floor03["b0316"]);
floor03["b0315"].setSouth(floor03["0339"]);
floor03["b0315"].setEast(floor03["b0314"]);
floor03["b0316"].setNorth(floor03["b0317"]);
floor03["b0316"].setSouth(floor03["b0315"]);
floor03["b0316"].setWest(floor03["sC03"]);
floor03["b0317"].setNorth(floor03["0351"]);
floor03["b0317"].setSouth(floor03["b0316"]);
floor03["b0317"].setWest(floor03["sD03"]);
floor03["b0317"].setEast(floor03["b0318"]);
floor03["b0318"].setNorth(floor03["0350"]);
floor03["b0318"].setWest(floor03["b0317"]);
floor03["b0318"].setEast(floor03["b0319"]);
floor03["b0319"].setWest(floor03["b0318"]);
floor03["b0319"].setEast(floor03["b0320"]);
floor03["b0320"].setSouth(floor03["b0330"]);
floor03["b0320"].setWest(floor03["b0319"]);
floor03["b0320"].setEast(floor03["b0321"]);
floor03["b0321"].setWest(floor03["b0320"]);
floor03["b0321"].setEast(floor03["b0323"]);
floor03["b0323"].setNorth(floor03["b0325"]);
floor03["b0323"].setSouth(floor03["b0324"]);
floor03["b0323"].setWest(floor03["b0321"]);
floor03["b0324"].setNorth(floor03["b0323"]);
floor03["b0324"].setSouth(floor03["b0305"]);
floor03["b0325"].setNorth(floor03["b0326"]);
floor03["b0325"].setSouth(floor03["b0323"]);
floor03["b0325"].setEast(floor03["0381"]);
floor03["b0326"].setNorth(floor03["b0327"]);
floor03["b0326"].setSouth(floor03["b0325"]);
floor03["b0326"].setEast(floor03["0382"]);
floor03["b0327"].setNorth(floor03["b0328"]);
floor03["b0327"].setSouth(floor03["b0326"]);
floor03["b0327"].setWest(floor03["0371"]);
floor03["b0328"].setNorth(floor03["b0329"]);
floor03["b0328"].setSouth(floor03["b0327"]);
floor03["b0329"].setNorth(floor03["0373"]);
floor03["b0329"].setSouth(floor03["b0328"]);
floor03["b0329"].setWest(floor03["0372"]);
floor03["b0330"].setNorth(floor03["b0320"]);
floor03["b0330"].setSouth(floor03["b0309"]);
floors["03"] = floor03;

floor04 = {};
floor04["0401"] = block("0401", "room")
floor04["0402"] = block("0402", "room")
floor04["0403"] = block("0403", "room")
floor04["0404"] = block("0404", "room")
floor04["0405"] = block("0405", "room")
floor04["0407"] = block("0407", "room")
floor04["0408"] = block("0408", "room")
floor04["0411"] = block("0411", "room")
floor04["0413"] = block("0413", "room")
floor04["0427"] = block("0427", "room")
floor04["0429"] = block("0429", "room")
floor04["0431"] = block("0431", "room")
floor04["0433"] = block("0433", "room")
floor04["0435"] = block("0435", "room")
floor04["0436"] = block("0436", "room")
floor04["0437"] = block("0437", "room")
floor04["0439"] = block("0439", "room")
floor04["0440"] = block("0440", "room")
floor04["0450"] = block("0450", "room")
floor04["0451"] = block("0451", "room")
floor04["0453"] = block("0453", "room")
floor04["sA04"] = block("sA04", "room")
floor04["sB04"] = block("sB04", "room")
floor04["sC04"] = block("sC04", "room")
floor04["sD04"] = block("sD04", "room")
floor04["b0401"] = block("b0401", "block")
floor04["b0402"] = block("b0402", "block")
floor04["b0403"] = block("b0403", "block")
floor04["b0404"] = block("b0404", "block")
floor04["b0405"] = block("b0405", "block")
floor04["b0406"] = block("b0406", "block")
floor04["b0407"] = block("b0407", "block")
floor04["b0408"] = block("b0408", "block")
floor04["b0409"] = block("b0409", "block")
floor04["b0410"] = block("b0410", "block")
floor04["b0411"] = block("b0411", "block")
floor04["b0412"] = block("b0412", "block")
floor04["b0413"] = block("b0413", "block")
floor04["b0414"] = block("b0414", "block")
floor04["b0415"] = block("b0415", "block")
floor04["b0416"] = block("b0416", "block")
floor04["b0417"] = block("b0417", "block")
floor04["b0418"] = block("b0418", "block")
floor04["b0419"] = block("b0419", "block")
floor04["b0420"] = block("b0420", "block")
floor04["b0421"] = block("b0421", "block")
floor04["b0422"] = block("b0422", "block")
floor04["b0423"] = block("b0423", "block")
floor04["b0424"] = block("b0424", "block")
floor04["b0425"] = block("b0425", "block")
floor04["0401"].setNorth(floor04["b0401"]);
floor04["0402"].setWest(floor04["b0401"]);
floor04["0403"].setNorth(floor04["b0403"]);
floor04["0404"].setSouth(floor04["b0401"]);
floor04["0405"].setNorth(floor04["b0403"]);
floor04["0407"].setNorth(floor04["b0404"]);
floor04["0408"].setSouth(floor04["b0423"]);
floor04["0411"].setNorth(floor04["b0407"]);
floor04["0413"].setNorth(floor04["b0408"]);
floor04["0427"].setNorth(floor04["b0425"]);
floor04["0429"].setNorth(floor04["b0410"]);
floor04["0431"].setNorth(floor04["b0411"]);
floor04["0433"].setNorth(floor04["b0412"]);
floor04["0435"].setNorth(floor04["b0413"]);
floor04["0436"].setSouth(floor04["b0413"]);
floor04["0437"].setNorth(floor04["b0414"]);
floor04["0439"].setNorth(floor04["b0415"]);
floor04["0440"].setSouth(floor04["b0414"]);
floor04["0450"].setSouth(floor04["b0418"]);
floor04["0451"].setSouth(floor04["b0419"]);
floor04["0453"].setNorth(floor04["b0417"]);
floor04["sA04"].setSouth(floor04["b0402"]);
floor04["sA04"].setWest(floor04["b0405"]);
floor04["sB04"].setSouth(floor04["b0411"]);
floor04["sB04"].setEast(floor04["b0409"]);
floor04["sC04"].setEast(floor04["b0417"]);
floor04["sD04"].setEast(floor04["b0415"]);
floor04["b0401"].setNorth(floor04["0404"]);
floor04["b0401"].setSouth(floor04["0401"]);
floor04["b0401"].setEast(floor04["0402"]);
floor04["b0402"].setNorth(floor04["sA04"]);
floor04["b0402"].setWest(floor04["b0403"]);
floor04["b0402"].setEast(floor04["b0401"]);
floor04["b0403"].setSouth(floor04["0405"]);
floor04["b0403"].setWest(floor04["b0404"]);
floor04["b0403"].setEast(floor04["b0402"]);
floor04["b0404"].setSouth(floor04["0407"]);
floor04["b0404"].setEast(floor04["b0403"]);
floor04["b0405"].setNorth(floor04["b0406"]);
floor04["b0405"].setSouth(floor04["b0403"]);
floor04["b0405"].setWest(floor04["b0407"]);
floor04["b0405"].setEast(floor04["sA04"]);
floor04["b0406"].setNorth(floor04["b0423"]);
floor04["b0406"].setSouth(floor04["b0405"]);
floor04["b0407"].setSouth(floor04["0411"]);
floor04["b0407"].setWest(floor04["b0408"]);
floor04["b0407"].setEast(floor04["b0405"]);
floor04["b0408"].setSouth(floor04["0413"]);
floor04["b0408"].setWest(floor04["b0409"]);
floor04["b0408"].setEast(floor04["b0407"]);
floor04["b0409"].setNorth(floor04["b0424"]);
floor04["b0409"].setSouth(floor04["b0410"]);
floor04["b0409"].setWest(floor04["sB04"]);
floor04["b0409"].setEast(floor04["b0408"]);
floor04["b0410"].setNorth(floor04["b0409"]);
floor04["b0410"].setSouth(floor04["0429"]);
floor04["b0410"].setWest(floor04["b0411"]);
floor04["b0410"].setEast(floor04["b0425"]);
floor04["b0411"].setNorth(floor04["sB04"]);
floor04["b0411"].setSouth(floor04["0431"]);
floor04["b0411"].setWest(floor04["b0412"]);
floor04["b0411"].setEast(floor04["b0410"]);
floor04["b0412"].setSouth(floor04["0433"]);
floor04["b0412"].setWest(floor04["b0413"]);
floor04["b0412"].setEast(floor04["b0411"]);
floor04["b0413"].setNorth(floor04["0435"]);
floor04["b0413"].setSouth(floor04["0436"]);
floor04["b0413"].setWest(floor04["b0414"]);
floor04["b0413"].setEast(floor04["b0412"]);
floor04["b0414"].setNorth(floor04["0440"]);
floor04["b0414"].setSouth(floor04["0437"]);
floor04["b0414"].setWest(floor04["b0415"]);
floor04["b0414"].setEast(floor04["b0413"]);
floor04["b0415"].setNorth(floor04["b0416"]);
floor04["b0415"].setSouth(floor04["0439"]);
floor04["b0415"].setEast(floor04["b0414"]);
floor04["b0416"].setNorth(floor04["b0417"]);
floor04["b0416"].setSouth(floor04["b0415"]);
floor04["b0416"].setWest(floor04["sD04"]);
floor04["b0417"].setNorth(floor04["0453"]);
floor04["b0417"].setSouth(floor04["b0416"]);
floor04["b0417"].setWest(floor04["sC04"]);
floor04["b0417"].setEast(floor04["b0418"]);
floor04["b0418"].setNorth(floor04["0450"]);
floor04["b0418"].setWest(floor04["b0417"]);
floor04["b0418"].setEast(floor04["b0419"]);
floor04["b0419"].setNorth(floor04["0451"]);
floor04["b0419"].setWest(floor04["b0418"]);
floor04["b0419"].setEast(floor04["0420"]);
floor04["b0420"].setWest(floor04["b0419"]);
floor04["b0420"].setEast(floor04["b0421"]);
floor04["b0421"].setSouth(floor04["b0424"]);
floor04["b0421"].setWest(floor04["b0420"]);
floor04["b0421"].setEast(floor04["b0422"]);
floor04["b0422"].setWest(floor04["b0421"]);
floor04["b0422"].setEast(floor04["b0423"]);
floor04["b0423"].setSouth(floor04["b0406"]);
floor04["b0423"].setWest(floor04["b0422"]);
floor04["b0424"].setNorth(floor04["b0421"]);
floor04["b0424"].setSouth(floor04["b0409"]);
floor04["b0425"].setSouth(floor04["0427"]);
floor04["b0425"].setWest(floor04["b0410"]);
floors["04"] = floor04;

floor05 = {};
floor05["0501"] = block("0501", "room")
floor05["0502"] = block("0502", "room")
floor05["0503"] = block("0503", "room")
floor05["0505"] = block("0505", "room")
floor05["0507"] = block("0507", "room")
floor05["0511"] = block("0511", "room")
floor05["0513"] = block("0513", "room")
floor05["0525"] = block("0525", "room")
floor05["0531"] = block("0531", "room")
floor05["0540"] = block("0540", "room")
floor05["0580"] = block("0580", "room")
floor05["0583"] = block("0583", "room")
floor05["0584"] = block("0584", "room")
floor05["sA05"] = block("sA05", "room")
floor05["sB05"] = block("sB05", "room")
floor05["b0501"] = block("b0501", "block")
floor05["b0502"] = block("b0502", "block")
floor05["b0503"] = block("b0503", "block")
floor05["b0504"] = block("b0504", "block")
floor05["b0505"] = block("b0505", "block")
floor05["b0506"] = block("b0506", "block")
floor05["b0507"] = block("b0507", "block")
floor05["b0508"] = block("b0508", "block")
floor05["b0509"] = block("b0509", "block")
floor05["b0510"] = block("b0510", "block")
floor05["b0511"] = block("b0511", "block")
floor05["b0512"] = block("b0512", "block")
floor05["b0513"] = block("b0513", "block")
floor05["b0514"] = block("b0514", "block")
floor05["b0515"] = block("b0515", "block")
floor05["b0516"] = block("b0516", "block")
floor05["b0517"] = block("b0517", "block")
floor05["b0518"] = block("b0518", "block")
floor05["0501"].setWest(floor05["b0501"]);
floor05["0502"].setSouth(floor05["b0501"]);
floor05["0503"].setNorth(floor05["b0502"]);
floor05["0505"].setNorth(floor05["b0503"]);
floor05["0507"].setEast(floor05["b0503"]);
floor05["0511"].setWest(floor05["b0506"]);
floor05["0513"].setEast(floor05["b0506"]);
floor05["0525"].setWest(floor05["b0509"]);
floor05["0531"].setNorth(floor05["b0510"]);
floor05["0540"].setEast(floor05["b0510"]);
floor05["0580"].setWest(floor05["b0514"]);
floor05["0583"].setWest(floor05["b0515"]);
floor05["0584"].setWest(floor05["b0516"]);
floor05["sA05"].setSouth(floor05["b0502"]);
floor05["sA05"].setWest(floor05["b0504"]);
floor05["sB05"].setSouth(floor05["b0510"]);
floor05["sB05"].setEast(floor05["b0508"]);
floor05["b0501"].setNorth(floor05["0502"]);
floor05["b0501"].setSouth(floor05["0501"]);
floor05["b0501"].setWest(floor05["b0502"]);
floor05["b0502"].setNorth(floor05["sA05"]);
floor05["b0502"].setSouth(floor05["0503"]);
floor05["b0502"].setWest(floor05["b0503"]);
floor05["b0502"].setEast(floor05["b0501"]);
floor05["b0503"].setNorth(floor05["b0504"]);
floor05["b0503"].setSouth(floor05["0505"]);
floor05["b0503"].setWest(floor05["0507"]);
floor05["b0503"].setEast(floor05["b0502"]);
floor05["b0504"].setNorth(floor05["b0513"]);
floor05["b0504"].setSouth(floor05["b0503"]);
floor05["b0504"].setWest(floor05["b0505"]);
floor05["b0504"].setEast(floor05["sA05"]);
floor05["b0505"].setSouth(floor05["b0506"]);
floor05["b0505"].setWest(floor05["b0507"]);
floor05["b0505"].setEast(floor05["b0504"]);
floor05["b0506"].setNorth(floor05["b0505"]);
floor05["b0506"].setWest(floor05["0513"]);
floor05["b0506"].setEast(floor05["0511"]);
floor05["b0507"].setWest(floor05["b0508"]);
floor05["b0507"].setEast(floor05["b0505"]);
floor05["b0508"].setNorth(floor05["b05011"]);
floor05["b0508"].setSouth(floor05["b0509"]);
floor05["b0508"].setWest(floor05["sB05"]);
floor05["b0508"].setEast(floor05["b0507"]);
floor05["b0509"].setNorth(floor05["b0508"]);
floor05["b0509"].setWest(floor05["b0510"]);
floor05["b0509"].setEast(floor05["0525"]);
floor05["b0510"].setNorth(floor05["sB05"]);
floor05["b0510"].setSouth(floor05["0531"]);
floor05["b0510"].setWest(floor05["0540"]);
floor05["b0510"].setEast(floor05["b0509"]);
floor05["b0511"].setNorth(floor05["b0518"]);
floor05["b0511"].setSouth(floor05["b0508"]);
floor05["b0512"].setWest(floor05["b0518"]);
floor05["b0512"].setEast(floor05["b0517"]);
floor05["b0513"].setNorth(floor05["b0517"]);
floor05["b0513"].setSouth(floor05["b0504"]);
floor05["b0514"].setNorth(floor05["b0515"]);
floor05["b0514"].setSouth(floor05["b0513"]);
floor05["b0514"].setEast(floor05["0580"]);
floor05["b0515"].setNorth(floor05["b0516"]);
floor05["b0515"].setSouth(floor05["b0514"]);
floor05["b0515"].setEast(floor05["0583"]);
floor05["b0516"].setSouth(floor05["b0515"]);
floor05["b0516"].setEast(floor05["0584"]);
floor05["b0517"].setNorth(floor05["b0513"]);
floor05["b0517"].setSouth(floor05["b0513"]);
floor05["b0517"].setWest(floor05["b0512"]);
floor05["b0518"].setSouth(floor05["b0511"]);
floor05["b0518"].setEast(floor05["b0512"]);
floors["05"] = floor05;

floor06 = {};
floor06["0601"] = block("0601", "room")
floor06["0615"] = block("0615", "room")
floor06["0615A"] = block("0615A", "room")
floor06["0615C"] = block("0615C", "room")
floor06["0627"] = block("0627", "room")
floor06["0629"] = block("0629", "room")
floor06["0635"] = block("0635", "room")
floor06["0636"] = block("0636", "room")
floor06["0638"] = block("0638", "room")
floor06["0639"] = block("0639", "room")
floor06["0640"] = block("0640", "room")
floor06["0660"] = block("0660", "room")
floor06["0680"] = block("0680", "room")
floor06["sA06"] = block("sA06", "room")
floor06["sB06"] = block("sB06", "room")
floor06["sD06"] = block("sD06", "room")
floor06["b0601"] = block("b0601", "block")
floor06["b0602"] = block("b0602", "block")
floor06["b0603"] = block("b0603", "block")
floor06["b0604"] = block("b0604", "block")
floor06["b0605"] = block("b0605", "block")
floor06["b0606"] = block("b0606", "block")
floor06["b0607"] = block("b0607", "block")
floor06["b0608"] = block("b0608", "block")
floor06["b0609"] = block("b0609", "block")
floor06["b0610"] = block("b0610", "block")
floor06["b0611"] = block("b0611", "block")
floor06["b0612"] = block("b0612", "block")
floor06["b0613"] = block("b0613", "block")
floor06["b0614"] = block("b0614", "block")
floor06["0601"].setWest(floor06["b0601"]);
floor06["0615"].setNorth(floor06["b0606"]);
floor06["0615A"].setNorth(floor06["b0610"]);
floor06["0615C"].setNorth(floor06["b0601"]);
floor06["0627"].setNorth(floor06["b0611"]);
floor06["0629"].setNorth(floor06["b0612"]);
floor06["0635"].setNorth(floor06["b0613"]);
floor06["0636"].setSouth(floor06["b0612"]);
floor06["0638"].setSouth(floor06["b0613"]);
floor06["0639"].setNorth(floor06["b0614"]);
floor06["0640"].setSouth(floor06["b0614"]);
floor06["0660"].setWest(floor06["b0605"]);
floor06["0680"].setSouth(floor06["b0605"]);
floor06["sA06"].setSouth(floor06["b0602"]);
floor06["sA06"].setWest(floor06["b0603"]);
floor06["sB06"].setSouth(floor06["b0610"]);
floor06["sB06"].setEast(floor06["b0607"]);
floor06["sD06"].setEast(floor06["b0614"]);
floor06["b0601"].setEast(floor06["0601"]);
floor06["b0601"].setSouth(floor06["0615C"]);
floor06["b0602"].setNorth(floor06["sA06"]);
floor06["b0602"].setWest(floor06["b0603"]);
floor06["b0602"].setEast(floor06["b0601"]);
floor06["b0603"].setNorth(floor06["b0604"]);
floor06["b0603"].setSouth(floor06["b0602"]);
floor06["b0603"].setWest(floor06["b0606"]);
floor06["b0603"].setEast(floor06["sA06"]);
floor06["b0604"].setNorth(floor06["b0605"]);
floor06["b0604"].setSouth(floor06["b0603"]);
floor06["b0605"].setNorth(floor06["0680"]);
floor06["b0605"].setSouth(floor06["b0604"]);
floor06["b0605"].setEast(floor06["0660"]);
floor06["b0606"].setSouth(floor06["0615"]);
floor06["b0606"].setWest(floor06["b0607"]);
floor06["b0606"].setEast(floor06["b0603"]);
floor06["b0607"].setNorth(floor06["b0608"]);
floor06["b0607"].setSouth(floor06["b0609"]);
floor06["b0607"].setWest(floor06["sB06"]);
floor06["b0607"].setEast(floor06["b0606"]);
floor06["b0608"].setSouth(floor06["b0607"]);
floor06["b0609"].setNorth(floor06["b0607"]);
floor06["b0609"].setWest(floor06["b0610"]);
floor06["b0610"].setNorth(floor06["sB06"]);
floor06["b0610"].setSouth(floor06["0615A"]);
floor06["b0610"].setWest(floor06["b0611"]);
floor06["b0610"].setEast(floor06["b0609"]);
floor06["b0611"].setSouth(floor06["0627"]);
floor06["b0611"].setWest(floor06["b0612"]);
floor06["b0611"].setEast(floor06["b0610"]);
floor06["b0612"].setNorth(floor06["0636"]);
floor06["b0612"].setSouth(floor06["0629"]);
floor06["b0612"].setWest(floor06["b0613"]);
floor06["b0612"].setEast(floor06["b0611"]);
floor06["b0613"].setNorth(floor06["0638"]);
floor06["b0613"].setSouth(floor06["0635"]);
floor06["b0613"].setWest(floor06["b0614"]);
floor06["b0613"].setEast(floor06["b0612"]);
floor06["b0614"].setNorth(floor06["0640"]);
floor06["b0614"].setSouth(floor06["0639"]);
floor06["b0614"].setWest(floor06["sD06"]);
floor06["b0614"].setEast(floor06["b0613"]);
floors["06"] = floor06;

floor07 = {};
floor07["0701"] = block("0701", "block")
floor07["0702"] = block("0702", "block")
floor07["0703"] = block("0703", "room")
floor07["0704"] = block("0704", "room")
floor07["0705"] = block("0705", "room")
floor07["0707"] = block("0707", "room")
floor07["0709"] = block("0709", "room")
floor07["0715"] = block("0715", "room")
floor07["0717"] = block("0717", "room")
floor07["0726"] = block("0726", "room")
floor07["0727"] = block("0727", "room")
floor07["0729"] = block("0729", "room")
floor07["0731"] = block("0731", "room")
floor07["0735"] = block("0735", "room")
floor07["0736"] = block("0736", "room")
floor07["0737"] = block("0737", "room")
floor07["0738"] = block("0738", "room")
floor07["0739"] = block("0739", "room")
floor07["0740"] = block("0740", "room")
floor07["sA07"] = block("sA07", "room")
floor07["sB07"] = block("sB07", "room")
floor07["sD07"] = block("sD07", "room")
floor07["b0701"] = block("b0701", "block")
floor07["b0702"] = block("b0702", "block")
floor07["b0703"] = block("b0703", "block")
floor07["b0704"] = block("b0704", "block")
floor07["b0705"] = block("b0705", "block")
floor07["b0706"] = block("b0706", "block")
floor07["b0707"] = block("b0707", "block")
floor07["b0708"] = block("b0708", "block")
floor07["b0709"] = block("b0709", "block")
floor07["b0710"] = block("b0710", "block")
floor07["b0711"] = block("b0711", "block")
floor07["b0712"] = block("b0712", "block")
floor07["b0713"] = block("b0713", "block")
floor07["b0714"] = block("b0714", "block")
floor07["b0715"] = block("b0715", "block")
floor07["b0716"] = block("b0716", "block")
floor07["0701"].setWest(floor07["b0701"]);
floor07["0702"].setSouth(floor07["b0701"]);
floor07["0703"].setNorth(floor07["b0701"]);
floor07["0704"].setSouth(floor07["b0702"]);
floor07["0705"].setNorth(floor07["b0702"]);
floor07["0707"].setNorth(floor07["b0703"]);
floor07["0709"].setNorth(floor07["b0704"]);
floor07["0715"].setWest(floor07["b0707"]);
floor07["0717"].setEast(floor07["b0707"]);
floor07["0726"].setSouth(floor07["b0713"]);
floor07["0727"].setNorth(floor07["b0711"]);
floor07["0729"].setNorth(floor07["b0712"]);
floor07["0731"].setNorth(floor07["b0713"]);
floor07["0735"].setNorth(floor07["b0714"]);
floor07["0736"].setSouth(floor07["b0714"]);
floor07["0737"].setNorth(floor07["b0715"]);
floor07["0738"].setSouth(floor07["b0715"]);
floor07["0739"].setNorth(floor07["b0716"]);
floor07["0740"].setSouth(floor07["b0716"]);
floor07["sA07"].setNorth(floor07["b0703"]);
floor07["sA07"].setWest(floor07["b0705"]);
floor07["sB07"].setSouth(floor07["b0712"]);
floor07["sB07"].setEast(floor07["b0709"]);
floor07["sD07"].setEast(floor07["b0716"]);
floor07["b0701"].setNorth(floor07["0702"]);
floor07["b0701"].setSouth(floor07["0703"]);
floor07["b0701"].setWest(floor07["b0702"]);
floor07["b0701"].setEast(floor07["0701"]);
floor07["b0702"].setNorth(floor07["0704"]);
floor07["b0702"].setSouth(floor07["0705"]);
floor07["b0702"].setWest(floor07["b0703"]);
floor07["b0702"].setEast(floor07["b0701"]);
floor07["b0703"].setNorth(floor07["sA07"]);
floor07["b0703"].setSouth(floor07["0707"]);
floor07["b0703"].setWest(floor07["b0704"]);
floor07["b0703"].setEast(floor07["b0702"]);
floor07["b0704"].setNorth(floor07["b0705"]);
floor07["b0704"].setSouth(floor07["0709"]);
floor07["b0704"].setEast(floor07["b0703"]);
floor07["b0705"].setNorth(floor07["b0706"]);
floor07["b0705"].setSouth(floor07["b0704"]);
floor07["b0705"].setWest(floor07["b0708"]);
floor07["b0705"].setEast(floor07["sA07"]);
floor07["b0706"].setSouth(floor07["b0706"]);
floor07["b0707"].setNorth(floor07["b0708"]);
floor07["b0707"].setWest(floor07["0717"]);
floor07["b0707"].setEast(floor07["0715"]);
floor07["b0708"].setWest(floor07["b0709"]);
floor07["b0708"].setEast(floor07["b0705"]);
floor07["b0709"].setNorth(floor07["b0710"]);
floor07["b0709"].setSouth(floor07["b0711"]);
floor07["b0709"].setWest(floor07["sB07"]);
floor07["b0709"].setEast(floor07["b0708"]);
floor07["b0710"].setSouth(floor07["b0709"]);
floor07["b0711"].setNorth(floor07["b0709"]);
floor07["b0711"].setSouth(floor07["0727"]);
floor07["b0711"].setWest(floor07["b0712"]);
floor07["b0712"].setNorth(floor07["sB07"]);
floor07["b0712"].setSouth(floor07["0729"]);
floor07["b0712"].setEast(floor07["b0711"]);
floor07["b0713"].setNorth(floor07["0726"]);
floor07["b0713"].setSouth(floor07["0731"]);
floor07["b0713"].setWest(floor07["b0714"]);
floor07["b0713"].setEast(floor07["b0712"]);
floor07["b0714"].setNorth(floor07["0736"]);
floor07["b0714"].setSouth(floor07["0735"]);
floor07["b0714"].setWest(floor07["b0715"]);
floor07["b0714"].setEast(floor07["b0713"]);
floor07["b0715"].setNorth(floor07["0738"]);
floor07["b0715"].setSouth(floor07["0737"]);
floor07["b0715"].setWest(floor07["b0716"]);
floor07["b0715"].setEast(floor07["b0714"]);
floor07["b0716"].setNorth(floor07["0740"]);
floor07["b0716"].setSouth(floor07["0739"]);
floor07["b0716"].setWest(floor07["sD07"]);
floor07["b0716"].setEast(floor07["b0715"]);
floors["07"] = floor07;

floor08 = {};
floor08["0801"] = block("0801", "room")
floor08["0802"] = block("0802", "room")
floor08["0803"] = block("0803", "room")
floor08["0804"] = block("0804", "room")
floor08["0807"] = block("0807", "room")
floor08["0809"] = block("0809", "room")
floor08["0811"] = block("0811", "room")
floor08["0815"] = block("0815", "room")
floor08["0817"] = block("0817", "room")
floor08["0826"] = block("0826", "room")
floor08["0827"] = block("0827", "room")
floor08["0829"] = block("0829", "room")
floor08["0833"] = block("0833", "room")
floor08["0835"] = block("0835", "room")
floor08["0836"] = block("0836", "room")
floor08["0837"] = block("0837", "room")
floor08["0838"] = block("0838", "room")
floor08["0839"] = block("0839", "room")
floor08["0840"] = block("0840", "room")
floor08["sA08"] = block("sA08", "room")
floor08["sB08"] = block("sB08", "room")
floor08["sD08"] = block("sD08", "room")
floor08["b0801"] = block("b0801", "block")
floor08["b0802"] = block("b0802", "block")
floor08["b0803"] = block("b0803", "block")
floor08["b0804"] = block("b0804", "block")
floor08["b0805"] = block("b0805", "block")
floor08["b0806"] = block("b0806", "block")
floor08["b0807"] = block("b0807", "block")
floor08["b0808"] = block("b0808", "block")
floor08["b0809"] = block("b0809", "block")
floor08["b0810"] = block("b0810", "block")
floor08["b0811"] = block("b0811", "block")
floor08["b0812"] = block("b0812", "block")
floor08["b0813"] = block("b0813", "block")
floor08["b0814"] = block("b0814", "block")
floor08["b0815"] = block("b0815", "block")
floor08["b0816"] = block("b0816", "block")
floor08["b0817"] = block("b0817", "block")
floor08["b0818"] = block("b0818", "block")
floor08["0801"].setWest(floor08["b0801"]);
floor08["0802"].setSouth(floor08["b0801"]);
floor08["0803"].setNorth(floor08["b0801"]);
floor08["0804"].setSouth(floor08["b0802"]);
floor08["0807"].setNorth(floor08["b0802"]);
floor08["0809"].setNorth(floor08["b0803"]);
floor08["0811"].setEast(floor08["b0803"]);
floor08["0815"].setNorth(floor08["b0808"]);
floor08["0817"].setEast(floor08["b0808"]);
floor08["0826"].setSouth(floor08["b0813"]);
floor08["0827"].setEast(floor08["b0812"]);
floor08["0829"].setNorth(floor08["b0813"]);
floor08["0833"].setNorth(floor08["b0814"]);
floor08["0835"].setNorth(floor08["b0815"]);
floor08["0836"].setSouth(floor08["b0814"]);
floor08["0837"].setNorth(floor08["b0816"]);
floor08["0838"].setSouth(floor08["b0815"]);
floor08["0839"].setNorth(floor08["b0817"]);
floor08["0840"].setSouth(floor08["b0816"]);
floor08["sA08"].setSouth(floor08["b0819"]);
floor08["sA08"].setWest(floor08["b0805"]);
floor08["sB08"].setSouth(floor08["b0818"]);
floor08["sB08"].setEast(floor08["b0809"]);
floor08["sD08"].setEast(floor08["b0817"]);
floor08["b0801"].setNorth(floor08["0802"]);
floor08["b0801"].setSouth(floor08["0803"]);
floor08["b0801"].setWest(floor08["b0802"]);
floor08["b0801"].setEast(floor08["0801"]);
floor08["b0802"].setNorth(floor08["0804"]);
floor08["b0802"].setWest(floor08["b0819"]);
floor08["b0802"].setEast(floor08["b0801"]);
floor08["b0803"].setNorth(floor08["b0804"]);
floor08["b0803"].setSouth(floor08["0809"]);
floor08["b0803"].setWest(floor08["0811"]);
floor08["b0803"].setEast(floor08["0807"]);
floor08["b0804"].setNorth(floor08["b0805"]);
floor08["b0804"].setSouth(floor08["b0803"]);
floor08["b0804"].setEast(floor08["b0819"]);
floor08["b0805"].setNorth(floor08["b0806"]);
floor08["b0805"].setSouth(floor08["b0804"]);
floor08["b0805"].setWest(floor08["b0807"]);
floor08["b0805"].setEast(floor08["sA08"]);
floor08["b0806"].setSouth(floor08["b0805"]);
floor08["b0807"].setSouth(floor08["b0808"]);
floor08["b0807"].setWest(floor08["b0809"]);
floor08["b0807"].setEast(floor08["b0805"]);
floor08["b0808"].setNorth(floor08["b0807"]);
floor08["b0808"].setSouth(floor08["0815"]);
floor08["b0808"].setWest(floor08["0817"]);
floor08["b0809"].setNorth(floor08["b0810"]);
floor08["b0809"].setSouth(floor08["b0811"]);
floor08["b0809"].setWest(floor08["sB08"]);
floor08["b0809"].setEast(floor08["b0807"]);
floor08["b0810"].setSouth(floor08["b0809"]);
floor08["b0811"].setNorth(floor08["b0809"]);
floor08["b0811"].setSouth(floor08["b0812"]);
floor08["b0811"].setWest(floor08["b0818"]);
floor08["b0812"].setNorth(floor08["b0811"]);
floor08["b0812"].setWest(floor08["0827"]);
floor08["b0813"].setNorth(floor08["0826"]);
floor08["b0813"].setSouth(floor08["0829"]);
floor08["b0813"].setWest(floor08["b0814"]);
floor08["b0813"].setEast(floor08["b0818"]);
floor08["b0814"].setNorth(floor08["0836"]);
floor08["b0814"].setSouth(floor08["0833"]);
floor08["b0814"].setWest(floor08["b0815"]);
floor08["b0814"].setEast(floor08["b0813"]);
floor08["b0815"].setNorth(floor08["0838"]);
floor08["b0815"].setSouth(floor08["0835"]);
floor08["b0815"].setWest(floor08["b0816"]);
floor08["b0815"].setEast(floor08["b0814"]);
floor08["b0816"].setNorth(floor08["0840"]);
floor08["b0816"].setSouth(floor08["0837"]);
floor08["b0816"].setWest(floor08["b0817"]);
floor08["b0816"].setEast(floor08["b0815"]);
floor08["b0817"].setSouth(floor08["0839"]);
floor08["b0817"].setWest(floor08["sD08"]);
floor08["b0817"].setEast(floor08["b0816"]);
floor08["b0818"].setNorth(floor08["sB08"]);
floor08["b0818"].setWest(floor08["b0813"]);
floor08["b0818"].setEast(floor08["b0811"]);
floors["08"] = floor08;

floor09 = {};
floor09["0901"] = block("0901", "room")
floor09["0902"] = block("0902", "room")
floor09["0903"] = block("0903", "room")
floor09["0907"] = block("0907", "room")
floor09["0909"] = block("0909", "room")
floor09["0911"] = block("0911", "room")
floor09["0913"] = block("0913", "room")
floor09["0925"] = block("0925", "room")
floor09["0926"] = block("0926", "room")
floor09["0927"] = block("0927", "room")
floor09["0931"] = block("0931", "room")
floor09["0935"] = block("0935", "room")
floor09["0936"] = block("0936", "room")
floor09["0938"] = block("0938", "room")
floor09["0939"] = block("0939", "room")
floor09["0940"] = block("0940", "room")
floor09["sA09"] = block("sA09", "room")
floor09["sB09"] = block("sB09", "room")
floor09["sD09"] = block("sD09", "room")
floor09["b0901"] = block("b0901", "block")
floor09["b0902"] = block("b0902", "block")
floor09["b0903"] = block("b0903", "block")
floor09["b0904"] = block("b0904", "block")
floor09["b0905"] = block("b0905", "block")
floor09["b0906"] = block("b0906", "block")
floor09["b0907"] = block("b0907", "block")
floor09["b0908"] = block("b0908", "block")
floor09["b0909"] = block("b0909", "block")
floor09["b0910"] = block("b0910", "block")
floor09["b0911"] = block("b0911", "block")
floor09["b0912"] = block("b0912", "block")
floor09["b0913"] = block("b0913", "block")
floor09["b0914"] = block("b0914", "block")
floor09["b0915"] = block("b0915", "block")
floor09["b0916"] = block("b0916", "block")
floor09["b0917"] = block("b0917", "block")
floor09["b0918"] = block("b0918", "block")
floor09["b0919"] = block("b0919", "block")
floor09["0901"].setWest(floor09["b0901"]);
floor09["0902"].setSouth(floor09["b0901"]);
floor09["0903"].setNorth(floor09["b0901"]);
floor09["0907"].setEast(floor09["b0915"]);
floor09["0909"].setWest(floor09["b0906"]);
floor09["0911"].setNorth(floor09["b0911"]);
floor09["0913"].setEast(floor09["b0913"]);
floor09["0925"].setEast(floor09["b0925"]);
floor09["0926"].setSouth(floor09["b0911"]);
floor09["0927"].setNorth(floor09["b0911"]);
floor09["0931"].setNorth(floor09["b0912"]);
floor09["0935"].setNorth(floor09["b0913"]);
floor09["0936"].setSouth(floor09["b0912"]);
floor09["0938"].setSouth(floor09["b0913"]);
floor09["0939"].setNorth(floor09["b0914"]);
floor09["0940"].setSouth(floor09["b0914"]);
floor09["sA09"].setSouth(floor09["b0902"]);
floor09["sA09"].setWest(floor09["b0917"]);
floor09["sB09"].setSouth(floor09["b0919"]);
floor09["sB09"].setEast(floor09["b0909"]);
floor09["sD09"].setEast(floor09["b0914"]);
floor09["b0901"].setNorth(floor09["0902"]);
floor09["b0901"].setSouth(floor09["0903"]);
floor09["b0901"].setWest(floor09["b0902"]);
floor09["b0901"].setEast(floor09["0903"]);
floor09["b0902"].setNorth(floor09["sA09"]);
floor09["b0902"].setWest(floor09["b0916"]);
floor09["b0902"].setEast(floor09["b0901"]);
floor09["b0903"].setSouth(floor09["b0917"]);
floor09["b0904"].setWest(floor09["b0905"]);
floor09["b0904"].setEast(floor09["b0917"]);
floor09["b0905"].setSouth(floor09["b0906"]);
floor09["b0905"].setWest(floor09["b0907"]);
floor09["b0905"].setEast(floor09["b0904"]);
floor09["b0906"].setNorth(floor09["b0905"]);
floor09["b0906"].setSouth(floor09["0911"]);
floor09["b0906"].setWest(floor09["0913"]);
floor09["b0906"].setEast(floor09["0909"]);
floor09["b0907"].setWest(floor09["b0909"]);
floor09["b0907"].setEast(floor09["b0905"]);
floor09["b0908"].setSouth(floor09["b0909"]);
floor09["b0909"].setNorth(floor09["b0908"]);
floor09["b0909"].setSouth(floor09["b09010"]);
floor09["b0909"].setWest(floor09["sB09"]);
floor09["b0909"].setEast(floor09["b0907"]);
floor09["b0910"].setNorth(floor09["b0909"]);
floor09["b0910"].setSouth(floor09["b0918"]);
floor09["b0910"].setWest(floor09["b0919"]);
floor09["b0911"].setNorth(floor09["0926"]);
floor09["b0911"].setSouth(floor09["0927"]);
floor09["b0911"].setWest(floor09["b0912"]);
floor09["b0911"].setEast(floor09["b0919"]);
floor09["b0912"].setNorth(floor09["0936"]);
floor09["b0912"].setSouth(floor09["0931"]);
floor09["b0912"].setWest(floor09["b0913"]);
floor09["b0912"].setEast(floor09["b0911"]);
floor09["b0913"].setNorth(floor09["0938"]);
floor09["b0913"].setSouth(floor09["b0935"]);
floor09["b0913"].setWest(floor09["b0914"]);
floor09["b0913"].setEast(floor09["b0912"]);
floor09["b0914"].setNorth(floor09["0940"]);
floor09["b0914"].setSouth(floor09["0939"]);
floor09["b0914"].setWest(floor09["sD09"]);
floor09["b0914"].setEast(floor09["b0913"]);
floor09["b0915"].setNorth(floor09["b0916"]);
floor09["b0915"].setWest(floor09["0907"]);
floor09["b0916"].setNorth(floor09["b0917"]);
floor09["b0916"].setSouth(floor09["b0915"]);
floor09["b0916"].setEast(floor09["b0902"]);
floor09["b0917"].setNorth(floor09["b0903"]);
floor09["b0917"].setSouth(floor09["b0916"]);
floor09["b0917"].setWest(floor09["b0904"]);
floor09["b0917"].setEast(floor09["sA09"]);
floor09["b0918"].setNorth(floor09["b0910"]);
floor09["b0918"].setWest(floor09["0925"]);
floor09["b0919"].setNorth(floor09["sB09"]);
floor09["b0919"].setWest(floor09["b0911"]);
floor09["b0919"].setEast(floor09["b0910"]);
floors["09"] = floor09;

floor10 = {};
floor10["1001"] = block("1001", "room")
floor10["1004"] = block("1004", "room")
floor10["1006"] = block("1006", "room")
floor10["1007"] = block("1007", "room")
floor10["1009"] = block("1009", "room")
floor10["1010"] = block("1010", "room")
floor10["1017"] = block("1017", "room")
floor10["1024"] = block("1024", "room")
floor10["1025"] = block("1025", "room")
floor10["1033"] = block("1033", "room")
floor10["1039"] = block("1039", "room")
floor10["sA10"] = block("sA10", "room")
floor10["sB10"] = block("sB10", "room")
floor10["b1001"] = block("b1001", "block")
floor10["b1002"] = block("b1002", "block")
floor10["b1003"] = block("b1003", "block")
floor10["b1004"] = block("b1004", "block")
floor10["b1005"] = block("b1005", "block")
floor10["b1006"] = block("b1006", "block")
floor10["b1007"] = block("b1007", "block")
floor10["b1008"] = block("b1008", "block")
floor10["b1009"] = block("b1009", "block")
floor10["b1010"] = block("b1010", "block")
floor10["b1011"] = block("b1011", "block")
floor10["1001"].setNorth(floor10["b1001"]);
floor10["1004"].setSouth(floor10["b1001"]);
floor10["1006"].setSouth(floor10["b1003"]);
floor10["1007"].setNorth(floor10["b1004"]);
floor10["1009"].setNorth(floor10["b1005"]);
floor10["1010"].setSouth(floor10["b1006"]);
floor10["1017"].setNorth(floor10["b1007"]);
floor10["1024"].setNorth(floor10["b1008"]);
floor10["1025"].setSouth(floor10["b1009"]);
floor10["1033"].setNorth(floor10["b1011"]);
floor10["1039"].setEast(floor10["b1011"]);
floor10["sA10"].setSouth(floor10["b1002"]);
floor10["sB10"].setSouth(floor10["b1010"]);
floor10["b1001"].setNorth(floor10["1004"]);
floor10["b1001"].setSouth(floor10["1001"]);
floor10["b1001"].setWest(floor10["b1002"]);
floor10["b1002"].setNorth(floor10["sA10"]);
floor10["b1002"].setWest(floor10["b1003"]);
floor10["b1002"].setEast(floor10["b1001"]);
floor10["b1003"].setNorth(floor10["1006"]);
floor10["b1003"].setSouth(floor10["b1004"]);
floor10["b1003"].setEast(floor10["b1002"]);
floor10["b1004"].setNorth(floor10["b1003"]);
floor10["b1004"].setSouth(floor10["1007"]);
floor10["b1004"].setWest(floor10["b1005"]);
floor10["b1005"].setSouth(floor10["1009"]);
floor10["b1005"].setWest(floor10["b1006"]);
floor10["b1005"].setEast(floor10["b1004"]);
floor10["b1006"].setNorth(floor10["1010"]);
floor10["b1006"].setWest(floor10["b1007"]);
floor10["b1006"].setEast(floor10["b1005"]);
floor10["b1007"].setSouth(floor10["1017"]);
floor10["b1007"].setWest(floor10["b1008"]);
floor10["b1007"].setEast(floor10["b1006"]);
floor10["b1008"].setNorth(floor10["b1009"]);
floor10["b1008"].setSouth(floor10["1025"]);
floor10["b1008"].setEast(floor10["b1007"]);
floor10["b1009"].setNorth(floor10["1024"]);
floor10["b1009"].setSouth(floor10["b1008"]);
floor10["b1009"].setWest(floor10["b1010"]);
floor10["b1010"].setNorth(floor10["sB10"]);
floor10["b1010"].setWest(floor10["b1011"]);
floor10["b1010"].setEast(floor10["b1009"]);
floor10["b1011"].setSouth(floor10["1033"]);
floor10["b1011"].setWest(floor10["1039"]);
floor10["b1011"].setEast(floor10["b1010"]);
floors["10"] = floor10;
