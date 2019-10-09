//Player
var PLAYER = {MON:0, APP:0, BAW:0, MAW:0, GAW:0, RE:0, MS:20, BAN:0, BB:0, BM:0, BG:0, BMS:20};
var PRICE = {BAWP:35, MAWP:45, GAWP:75, SP:30, BBP:30, BMP:60, BGP:90, BP:50, AS:3, BASE:4, RE:10000};
var CURRENTTAB = 0;

function LOAD(){
	PLAYER.MON = localStorage.getItem('playerMON');
	PLAYER.APP = localStorage.getItem('playerAPP');
	PLAYER.BAW = localStorage.getItem('playerBAW');
	PLAYER.MAW = localStorage.getItem('playerMAW');
	PLAYER.GAW = localStorage.getItem('playerGAW');
	PLAYER.RE = localStorage.getItem('playerRE');
	PLAYER.MS = localStorage.getItem('playerMS');
	
	if (PLAYER.MON == undefined){
		PLAYER.MON = 0;
	}
	if (PLAYER.APP == undefined){
		PLAYER.APP = 0;
	}
	if (PLAYER.BAW == undefined){
		PLAYER.BAW = 0;
	}
	if (PLAYER.MAW == undefined){
		PLAYER.MAW = 0;
	}
	if (PLAYER.GAW == undefined){
		PLAYER.GAW = 0;
	}
	if (PLAYER.RE == undefined){
		PLAYER.RE = 0;
	}
	if (PLAYER.MS == undefined){
		PLAYER.MS = 20;
	}
	
	//Strings that are SUPPOST to be Numbers
	var MS = Number(PLAYER.MS),
	MON = Number(PLAYER.MON),
	BAW = Number(PLAYER.BAW),
	MAW = Number(PLAYER.MAW),
	GAW = Number(PLAYER.GAW),
	RE = Number(PLAYER.RE);
	
	//Fixing them
	PLAYER.MS = MS;
	PLAYER.MON = MON;
	PLAYER.BAW = BAW;
	PLAYER.MAW = MAW;
	PLAYER.GAW = GAW;
	PLAYER.RE = RE;
	document.getElementById('REBIRTHS').innerHTML = RE;
	
	PRICE.BAWP = localStorage.getItem('priceBAW');
	PRICE.MAWP = localStorage.getItem('priceMAW');
	PRICE.GAWP = localStorage.getItem('priceGAW');
	PRICE.SP = localStorage.getItem('priceSP');
	var SP = Number(PRICE.SP);
	PRICE.SP = SP;
	
	if (PRICE.BAWP == undefined){
		PRICE.BAWP = 35;
	}
	if (PRICE.MAWP == undefined){
		PRICE.MAWP = 45;
	}
	if (PRICE.GAWP == undefined){
		PRICE.GAWP = 75;
	}
	if (PRICE.SP == undefined || PRICE.SP == 0){
		PRICE.SP = 30;
	}
	
	setTimeout(UPDATE, 2000);
	setTimeout(UPDATE, 1000);
	UPDATE();
	
	setTimeout(PRICECHANGE, 300000); // after 10 minutes change price
	setInterval(BAWWork, 10000); //10 seconds
	setInterval(MAWWork, 8000); //8 seconds
	setInterval(GAWWork, 7500); //7.5 seconds
}

//Update Player Status
var rngCounter = 0;
function UPDATE(){
	rngCounter++;
	
	var MUPD, MUPB, ASUPD, BAW, MAW, GAW, BAWA, MAWA, GAWA, SPBUT;
	//Set things to update
	MUPD = document.getElementById('MONEY');
	MUPB = document.getElementById('CM');
	ASUPD = document.getElementById('APPBAR');
	BAWA = document.getElementById('BAWA');
	MAWA = document.getElementById('MAWA');
	GAWA = document.getElementById('GAWA');
	BAW = document.getElementById('BAWBUT');
	MAW = document.getElementById('MAWBUT');
	GAW = document.getElementById('GAWBUT');
	SP = document.getElementById('SP');
	SPBUT = document.getElementById('SPBUT');
	
	//Stat Updater
	MUPD.innerHTML = PLAYER.MON;
	BAWA.innerHTML = PLAYER.BAW;
	MAWA.innerHTML = PLAYER.MAW;
	GAWA.innerHTML = PLAYER.GAW;
	SP.innerHTML = PRICE.SP;
	
	if (rngCounter >= 15){
		rngCounter = 0;
	}
	
	//Worker / Resource Updater
	if (PLAYER.APP >= 3){
		MUPB.style.backgroundColor = "#393";
		document.getElementById('MONDIV').style.display = "block";
	} else {
		MUPB.style.backgroundColor = "#323639";
	}
	if (PLAYER.MON >= PRICE.BAWP){ //Basic
		BAW.style.backgroundColor = "#c90";
		document.getElementById('BWP').style.display = "block";
	} else {
		BAW.style.backgroundColor = "#323639";
	}
	if (PLAYER.MON >= PRICE.MAWP){ //Average
		MAW.style.backgroundColor = "#00ffff";
		document.getElementById('MWP').style.display = "block";
	} else {
		MAW.style.backgroundColor = "#323639";
	}
	if (PLAYER.MON >= PRICE.GAWP){ //God Tier
		GAW.style.backgroundColor = "#5900b3";
		document.getElementById('GWP').style.display = "block";
	} else {
		GAW.style.backgroundColor = "#323639"
	}
	if (PLAYER.MON >= PRICE.SP){
		SPBUT.style.backgroundColor = "yellow";
	} else {
		SPBUT.style.backgroundColor = "#323639";
	}
	
	//Finish
	if (PLAYER.MON >= 80000){
		document.getElementById('FINISHBUT').style.backgroundColor = "#FFF";
	}
	
	//Storage
	var AUPD = PLAYER.APP / PLAYER.MS * 100; //100,000
	ASUPD.style.width = AUPD + "%";
	document.getElementById('APPSTAT').innerHTML = PLAYER.APP + " out of " + PLAYER.MS;
	if (AUPD >= 95){
		ASUPD.style.backgroundColor = "#f00";
	} else if(AUPD >= 70){
		ASUPD.style.backgroundColor = '#ff0';
	} else {
		ASUPD.style.backgroundColor = "#0f0";
	}
	if (AUPD >= 120){
		PLAYER.APP -= PLAYER.MS;
		PLAYER.MON -= 10;
	}
	
	if (PLAYER.BAW >= 501){
		PLAYER.BAW = 499;
		BAWB();
	}
	if (PLAYER.MAW >= 501){
		PLAYER.MAW = 499;
		MAWB();
	}
	if (PLAYER.GAW >= 501){
		PLAYER.GAW = 499;
		GAWB();
	}
	
	//Show Different tabs
	switch (CURRENTTAB){
		case 1:
			document.getElementById('ACHIEVEMENTS').style.display = 'block';
			document.getElementById('MAIN').style.display = 'none';
			document.getElementById('STATS').style.display = 'none';
			document.getElementById('SETTINGS').style.display = 'none';
			document.getElementById('EXTRAS').style.display = 'none';
			document.getElementById('ACHIEVEMENTBUTTON').style.backgroundColor = '#0F0';
			document.getElementById('MAINBUTTON').style.backgroundColor = '#323639';
			document.getElementById('STATSBUTTON').style.backgroundColor = '#323639';
			document.getElementById('SETTINGSBUTTON').style.backgroundColor = '#323639';
			document.getElementById('EXTRASBUTTON').style.backgroundColor = '#323639';
			break;
		case 2:
			document.getElementById('STATS').style.display = 'block';
			document.getElementById('MAIN').style.display = 'none';
			document.getElementById('ACHIEVEMENTS').style.display = 'none';
			document.getElementById('SETTINGS').style.display = 'none';
			document.getElementById('EXTRAS').style.display = 'none';
			document.getElementById('STATSBUTTON').style.backgroundColor = '#0F0';
			document.getElementById('MAINBUTTON').style.backgroundColor = '#323639';
			document.getElementById('ACHIEVEMENTBUTTON').style.backgroundColor = '#323639';
			document.getElementById('SETTINGSBUTTON').style.backgroundColor = '#323639';
			document.getElementById('EXTRASBUTTON').style.backgroundColor = '#323639';
			break;
		case 3:
			document.getElementById('SETTINGS').style.display = 'block';
			document.getElementById('MAIN').style.display = 'none';
			document.getElementById('STATS').style.display = 'none';
			document.getElementById('ACHIEVEMENTS').style.display = 'none';
			document.getElementById('EXTRAS').style.display = 'none';
			document.getElementById('SETTINGSBUTTON').style.backgroundColor = '#0F0';
			document.getElementById('MAINBUTTON').style.backgroundColor = '#323639';
			document.getElementById('STATSBUTTON').style.backgroundColor = '#323639';
			document.getElementById('ACHIEVEMENTBUTTON').style.backgroundColor = '#323639';
			document.getElementById('EXTRASBUTTON').style.backgroundColor = '#323639';
			break;
		case 4:
			document.getElementById('EXTRAS').style.display = 'block';
			document.getElementById('MAIN').style.display = 'none';
			document.getElementById('STATS').style.display = 'none';
			document.getElementById('SETTINGS').style.display = 'none';
			document.getElementById('ACHIEVEMENTS').style.display = 'none';
			document.getElementById('EXTRASBUTTON').style.backgroundColor = '#0F0';
			document.getElementById('MAINBUTTON').style.backgroundColor = '#323639';
			document.getElementById('STATSBUTTON').style.backgroundColor = '#323639';
			document.getElementById('SETTINGSBUTTON').style.backgroundColor = '#323639';
			document.getElementById('ACHIEVEMENTBUTTON').style.backgroundColor = '#323639';
			break;
		default:
			document.getElementById('MAIN').style.display = 'block';
			document.getElementById('ACHIEVEMENTS').style.display = 'none';
			document.getElementById('STATS').style.display = 'none';
			document.getElementById('SETTINGS').style.display = 'none';
			document.getElementById('EXTRAS').style.display = 'none';
			document.getElementById('MAINBUTTON').style.backgroundColor = '#0F0';
			document.getElementById('ACHIEVEMENTBUTTON').style.backgroundColor = '#323639';
			document.getElementById('STATSBUTTON').style.backgroundColor = '#323639';
			document.getElementById('SETTINGSBUTTON').style.backgroundColor = '#323639';
			document.getElementById('EXTRASBUTTON').style.backgroundColor = '#323639';
	}
	
	var CS = document.getElementById('SPEEDUP').checked;
	var CI = document.getElementById('ISSUES').checked;
	if (CS == false && CI == true){
		setTimeout(UPDATE, 5000);
	}
	if (CI == false && CS == true){
		setTimeout(UPDATE, 300);
	}
	if (CS && CI == true){
		setTimeout(UPDATE, 1000);
	}
	if (CI == false && CS == false){
		setTimeout(UPDATE, 1000);
	}
}
	
//Saved or !Saved
setInterval(SAVE, 900000);
var numSave = 0;
function SAVE(){
	localStorage.setItem('playerAPP', PLAYER.APP);
	localStorage.setItem('playerMON', PLAYER.MON);
	localStorage.setItem('playerBAW', PLAYER.BAW);
	localStorage.setItem('playerMAW', PLAYER.MAW);
	localStorage.setItem('playerGAW', PLAYER.GAW);
	localStorage.setItem('priceBAW', PRICE.BAWP);
	localStorage.setItem('priceMAW', PRICE.MAWP);
	localStorage.setItem('priceGAW', PRICE.GAWP);
	localStorage.setItem('playerMS', PLAYER.MS);
	localStorage.setItem('playerRE', PLAYER.RE);
	localStorage.setItem('priceSP', PRICE.SP);
	
	// Hex Save Things
	
	//Encode Hex
	//Vars
	var HexOut = "";
	var HexOutMON = "";
	var HexOutAPP = "";
	var HexOutBAW = "";
	var HexOutMAW = "";
	var HexOutGAW = "";
	var HexOutRE = "";
	var HexOutMS = "";
	var HexOutSP = "";
	var HexOutBAWP = "";
	var HexOutMAWP = "";
	var HexOutGAWP = "";
	var HexOutREP = "";
	
	//Assign Vars
	if (PLAYER.MON >= 0){
		HexOutMON = Number(PLAYER.MON).toString(16);
	} else {HexOutMON = '00000';}
	
	//If vars are too short, make them the correct size
	if (HexOutMON.length < 5){
		switch (HexOutMON.length){
			case 1:
				HexOutMON = "0000" + HexOutMON;
				break;
			case 2:
				HexOutMON = "000" + HexOutMON;
				break;
			case 3:
				HexOutMON = "00" + HexOutMON;
				break;
			case 4:
				HexOutMON = "0" + HexOutMON;
				break;
		}
	} else if (HexOutMON.length >= 6){
		var a = 0;
		var b = HexOutMON.length;
		do {
			a++;
			b--;
		} while (b >= 6)
		HexOutMON = HexOutMON.slice(0, a);
	}	
	//alert(HexOutMON + " MON");
	
	if (PLAYER.APP >= 0){
		HexOutAPP = Number(PLAYER.APP).toString(16);
	} else {HexOutAPP = 0}
	
	if (HexOutAPP.length < 3){
		switch (HexOutAPP.length){
			case 1:
				HexOutAPP = "00" + HexOutAPP;
				break;
			case 2:
				HexOutAPP = "0" + HexOutAPP;
				break;
		}
	} else if (HexOutAPP.length > 4){
		var a = 0;
		var b = HexOutAPP.length;
		do {
			a++;
			b--;
		} while (b >= 4)
		HexOutAPP = HexOutAPP.slice(0, a);
	}
	//alert(HexOutAPP + " APP");
	
	if (PLAYER.BAW >= 0){
		HexOutBAW = Number(PLAYER.BAW).toString(16);
	} else {HexOutBAW = 0}
	
	if (HexOutBAW.length < 3){
		switch (HexOutBAW.length){
			case 1:
				HexOutBAW = "00" + HexOutBAW;
				break;
			case 2:
				HexOutBAW = "0" + HexOutBAW;
				break;
		}
	} else if (HexOutBAW.length >= 4){
		var a = 0;
		var b = HexOutBAW.length;
		do {
			a++;
			b--;
		} while (b >= 4)
		HexOutBAW = HexOutBAW.slice(0, a);
	}
	//alert(HexOutBAW + " BAW");
	
	if (PLAYER.MAW >= 0){
		HexOutMAW = Number(PLAYER.MAW).toString(16);
	} else {HexOutMAW = 0}
	
	if (HexOutMAW.length < 3){
		switch (HexOutMAW.length){
			case 1:
				HexOutMAW = "00" + HexOutMAW;
				break;
			case 2:
				HexOutMAW = "0" + HexOutMAW;
				break;
		}
	} else if (HexOutMAW.length > 4){
		var a = 0;
		var b = HexOutMAW.length;
		do {
			a++;
			b--;
		} while (b >= 4)
		HexOutMAW = HexOutMAW.slice(0, a);
	}
	//alert(HexOutMAW + " MAW");
	if (PLAYER.GAW >= 0){
		HexOutGAW = Number(PLAYER.GAW).toString(16);
	} else {HexOutGAW = 0}
	
	if (HexOutGAW.length < 3){
		switch (HexOutGAW.length){
			case 1:
				HexOutGAW = "00" + HexOutGAW;
				break;
			case 2:
				HexOutGAW = "0" + HexOutGAW;
				break;
		}
	} else if (HexOutGAW.length > 4){
		var a = 0;
		var b = HexOutGAW.length;
		do {
			a++;
			b--;
		} while (b >= 4)
		HexOutGAW = HexOutGAW.slice(0, a);
	}
	//alert(HexOutGAW + " GAW");
	
	if (PLAYER.RE >= 0){
		HexOutRE = Number(PLAYER.RE).toString(16);
	} else {HexOutRE = 0;}
	
	if (HexOutRE.length < 3){
		switch (HexOutRE.length){
			case 1:
				HexOutRE = "00" + HexOutRE;
				break;
			case 2:
				HexOutRE = "0" + HexOutRE;
				break;
		}
	} else if (HexOutRE.length > 4){
		var a = 0;
		var b = HexOutRE.length;
		do {
			a++;
			b--;
		} while (b >= 4)
		HexOutRE = HexOutRE.slice(0, a);
	}
	//alert(HexOutRE + " RE");
	
	if (PLAYER.MS >= 0){
		HexOutMS = Number(PLAYER.MS).toString(16);
	} else {HexOutMS = 0;}
	
	if (HexOutMS.length < 4){
		switch (HexOutMS.length){
			case 1:
				HexOutMS = "000" + HexOutMS;
				break;
			case 2:
				HexOutMS = "00" + HexOutMS;
				break;
			case 3:
				HexOutMS = "0" + HexOutMS;
				break;
		}
	}  else if (HexOutMS.length > 5){
		var a = 0;
		var b = HexOutMS.length;
		do {
			a++;
			b--;
		} while (b >= 5)
		HexOutMS = HexOutMS.slice(0, a);
	}
	//alert(HexOutMS + " MS");
	
	if (PRICE.BAWP >= 0){
		HexOutBAWP = Number(PRICE.BAWP).toString(16);
	} else {HexOutBAWP = 0}
	
	if (HexOutBAWP.length < 3){
		switch (HexOutBAWP.length){
			case 1:
				HexOutBAWP = "00" + HexOutBAWP;
				break;
			case 2:
				HexOutBAWP = "0" + HexOutBAWP;
				break;
		}
	} else if (HexOutBAWP.length > 4){
		var a = 0;
		var b = HexOutBAWP.length;
		do {
			a++;
			b--;
		} while (b >= 4)
		HexOutBAWP = HexOutBAWP.slice(0, a);
	}
	//alert(HexOutBAWP + " BAWP");
	
	if (PRICE.MAWP >= 0){
		HexOutMAWP = Number(PRICE.MAWP).toString(16);
	} else {HexOutMAWP = 0}
	
	if (HexOutMAWP.length < 3){
		switch (HexOutMAWP.length){
			case 1:
				HexOutMAWP = "00" + HexOutMAWP;
				break;
			case 2:
				HexOutMAWP = "0" + HexOutMAWP;
				break;
		}
	} else if (HexOutMAWP.length > 4){
		var a = 0;
		var b = HexOutMAWP.length;
		do {
			a++;
			b--;
		} while (b >= 4)
		HexOutMAWP = HexOutMAWP.slice(0, a);
	}
	//alert(HexOutMAWP + " MAWP");
	
	if (PRICE.GAWP >= 0){
		HexOutGAWP = Number(PRICE.GAWP).toString(16);
	} else {HexOutGAWP = 0}
	
	if (HexOutGAWP.length < 3){
		switch (HexOutGAWP.length){
			case 1:
				HexOutGAWP = "00" + HexOutGAWP;
				break;
			case 2:
				HexOutGAWP = "0" + HexOutGAWP;
				break;
		}
	} else if (HexOutGAWP.length > 4){
		var a = 0;
		var b = HexOutGAWP.length;
		do {
			a++;
			b--;
		} while (b >= 4)
		HexOutGAWP = HexOutGAWP.slice(0, a);
	}
	//alert(HexOutGAWP + " GAWP");
	if (PRICE.SP >= 0){
		HexOutSP = Number(PRICE.SP).toString(16);
	} else {HexOutSP = 0}
	if (HexOutSP.length < 5){
		switch (HexOutSP.length){
			case 1:
				HexOutSP = "0000" + HexOutSP;
				break;
			case 2:
				HexOutSP = "000" + HexOutSP;
				break;
			case 3:
				HexOutSP = "00" + HexOutSP;
				break;
			case 4:
				HexOutSP = "0" + HexOutSP;
				break;
		}
	} else if (HexOutSP.length > 6){
		var a = 0;
		var b = HexOutSP.length;
		do {
			a++;
			b--;
		} while (b >= 6)
		HexOutSP = HexOutSP.slice(0, a);
	}
	//alert(HexOutSP + " SP");
	
	if (PRICE.RE >= 0){
		HexOutREP = PRICE.RE.toString(16);
	} else {HexOutREP = 0;}
	
	if (HexOutREP.length < 5){
		switch (HexOutREP.length){
			case 1:
				HexOutREP = "0000" + HexOutREP;
				break;
			case 2:
				HexOutREP = "000" + HexOutREP;
				break;
			case 3:
				HexOutREP = "00" + HexOutREP;
				break;
			case 4:
				HexOutREP = "0" + HexOutREP;
				break;
		}
	} else if (HexOutREP.length > 6){
		var a = 0;
		var b = HexOutREP.length;
		do {
			a++;
			b--;
		} while (b >= 6)
		HexOutREP = HexOutREP.slice(0, a);
	}
	
	var possibleHex = "0123456789ABCDEF";
	var rng0 = rngCounter; //alert(rng0 + " rng0");
	var rng1;
	if (rngCounter + 3 >= 16){
		rng1 = rngCounter - 3;
	} else {
		rng1 = rngCounter + 3;
	} //alert(rng1 + " rng1");
	
	var h = possibleHex.charAt(rng0); //alert(h);
	var j = possibleHex.charAt(rng1); //alert(j);
	var randChar = h + j; //alert(randChar);
	
	var c = HexOutAPP + HexOutMON + HexOutBAW + HexOutMAW + HexOutGAW + HexOutRE + HexOutMS + HexOutBAWP + HexOutMAWP + randChar + HexOutGAWP + HexOutSP + HexOutREP;
	var HexOut = c.toUpperCase();
	
	var testHex = HexOutAPP + " App - " + HexOutMON + " Mon - " + HexOutBAW + " BAW - " + HexOutMAW + " MAW - " + HexOutGAW + " GAW - " + HexOutRE + " RE - " + HexOutMS + " MS - " + HexOutBAWP + " BAWP - " + HexOutMAWP + " MAWP - " + randChar + " RaCh - " + HexOutGAWP + " GAWP - " + HexOutSP + " SP - " + HexOutREP + " REP";
	
	//alert(testHex);
	//alert(c);
	//alert(HexOut);
	//alert(HexOut.length);
	document.getElementById('OUTHEX').innerHTML = HexOut;
	
	localStorage.setItem('saveFile', HexOut);
	
	var TXT = "Saved Successfully";
	var i = 0;
	setTimeout(a, 20);
	function a(){
		if(i < TXT.length){
			document.getElementById('SAVED').innerHTML += TXT.charAt(i);
			i++;
			setTimeout(a, 100);
		} else {
			setTimeout(function(){
				document.getElementById('SAVED').innerHTML = " ";
			}, 5000);
		}
	}
	if (numSave == 10){
		location.reload(true);
	}
}

//Resources
function SELLAPP(){
	for (var i = 0; i < PLAYER.APP; i++){
		if (PLAYER.APP <= 2){
			break;
		} else {
			PLAYER.APP -= PRICE.AS;
			PLAYER.MON++;
		}
	}
}

function SELLBAN(){
	for (var i = 0; i < PLAYER.BAN; i++){
		if (PLAYER.BAN <= 2){
			break;
		} else {
			PLAYER.BAN -= PRICE.BASE;
			PLAYER.MON++;
		}
	}
}

function BAWWork(){
	if (PLAYER.BAW >= 1){
		for (var baws = 0; baws < PLAYER.BAW; baws++){
			if (PLAYER.APP >= PLAYER.MS - 5){
				break;
			} else {
				PLAYER.APP++;
			}
		}
	}
}
function MAWWork(){
	if (PLAYER.MAW >= 1){
		for (var maws = 0; maws < PLAYER.MAW; maws++){
			if (PLAYER.APP >= PLAYER.MS - 5){
				break;
			} else {
				PLAYER.APP++;
			}
		}
	}
}
function GAWWork(){
	if (PLAYER.GAW >= 1){
		for (var gaws = 0; gaws < PLAYER.GAW; gaws++){
			if (PLAYER.APP >= PLAYER.MS - 5){
				break;
			} else {
				PLAYER.APP += 2;
			}
		}
	}
}

//Workers
var BC = 30, MC = 25, GC = 20;
function BAWB(){
	if (PLAYER.MON >= PRICE.BAWP && PLAYER.BAW <= 500){
		PLAYER.MON -= PRICE.BAWP;
		PLAYER.BAW++;
		BC--;
		if (BC == 0){
			BC = 30;
			PRICE.BAWP += 2;
			document.getElementById('BWORKERPRICE').innerHTML = PRICE.BAWP;
		}
	}
	if (PLAYER.BAW >= 500){
		document.getElementById('BAWBUT').innerHTML = "MAXED OUT";
		document.getElementById('BAWBUT').disabled = true;
	}
}
function MAWB(){
	if (PLAYER.MON >= PRICE.MAWP && PLAYER.MAW <= 500){
		PLAYER.MON -= PRICE.MAWP;
		PLAYER.MAW++;
		MC--;
		if (MC == 0){
			MC = 25;
			PRICE.MAWP += 2;
			document.getElementById('MWORKERPRICE').innerHTML = PRICE.MAWP;
		}
	}
	if (PLAYER.MAW >= 500){
		document.getElementById('MAWBUT').innerHTML = "MAXED OUT";
		document.getElementById('MAWBUT').disabled = true;
	}
}
function GAWB(){
	if (PLAYER.MON >= PRICE.GAWP && PLAYER.GAW <= 500){
		PLAYER.MON -= PRICE.GAWP;
		PLAYER.GAW++;
		GC--;
		if (GC == 0){
			GC = 20;
			PRICE.GAWP += 2;
			document.getElementById('GWORKERPRICE').innerHTML = PRICE.GAWP;
		}
	}
	if (PLAYER.GAW >= 500){
		document.getElementById('GAWBUT').innerHTML = "MAXED OUT";
		document.getElementById('GAWBUT').disabled = true;
	}
}

//Storage
function SPUP(){
	if (PLAYER.MON >= PRICE.SP){
		PLAYER.MON -= PRICE.SP;
		PRICE.SP += 5;
		PLAYER.MS += 10;
	}
}

function BPUP(){
	if (PLAYER.MON >= PRICE.BP){
		PLAYER.MON -= PRICE.BP;
		PRICE.BP += 5;
		PLAYER.BMS += 10;
	}
}

//Rebirth
function REBIRTH(){
	if (PLAYER.MON >= PRICE.RE){
		PLAYER.APP = 0;
		PLAYER.BAN = 0;
		PLAYER.MON = 0;
		PLAYER.BAW = 0;
		PLAYER.MAW = 0;
		PLAYER.GAW = 0;
		PLAYER.BB = 0;
		PLAYER.BM = 0;
		PLAYER.BG = 0;
		PLAYER.MS = 20;
		PRICE.BAWP = 35 - PLAYER.RE;
		PRICE.MAWP = 45 - PLAYER.RE;
		PRICE.GAWP = 75 - PLAYER.RE;
		PRICE.SP = 30 - PLAYER.RE;
		PLAYER.RE++;
		PRICE.RE += 1000;
		SAVE();
	}
}

//Finish Function
function FINISH(){
	if(PLAYER.MON >= 80000){ //$80,000
		PLAYER.APP = 0;
		PLAYER.MON = 0;
		PLAYER.BAW = 0;
		PLAYER.MAW = 0;
		PLAYER.GAW = 0;
		PLAYER.MS = 20;
		PRICE.BAWP = 35;
		PRICE.MAWP = 45;
		PRICE.GAWP = 75;
		PRICE.SP = 30;
		PLAYER.RE++;
		SAVE();
		setTimeout('location.reload(true)',2000);
	} else {
		alert('You Need More Money. Try again later.')
	}
}

//Cheats
function CSUBMIT(){
	var INsmall = document.getElementById('CHEATIN').value;
	var IN = INsmall.toUpperCase();
	switch (IN){
		case "1800MON":
			PLAYER.MON -= 10;
			alert('NO MONEY FOR YOU');
			break;
		case "HELP":
			document.getElementById('HELPBOX').style.display = "block";
			break;
		case "RESET":
			RESET();
			break;
		default:
			alert("ERROR: '" + IN + "' Is not a valid cheat");
	}
}

//Load Hex
function EXLOAD(){
	//debugger;
	var HexString = document.getElementById('INHEX').value;
	//alert(HexString.length);
	
	//Maxed Out Save Game = 000000001F41F41F4FFFFFFF0000069000000000
	
	if (HexString.length >= 40){
		var Hex0App = HexString.substr(0,3);//alert(HexApp + '-' + HexApp.length + ' - 1 - APP');
		var Hex1Mon = HexString.substr(3,5);//alert(HexMon + '-' + HexMon.length + ' - 2 - MON');
		var Hex2BAW = HexString.substr(8,3);//alert(HexBAW + '-' + HexBAW.length + ' - 3 - BAW');
		var Hex3MAW = HexString.substr(11,3);//alert(HexMAW + '-' + HexMAW.length + ' - 4 - MAW');
		var Hex4GAW = HexString.substr(14,3);//alert(HexGAW + '-' + HexGAW.length + ' - 5 - GAW');
		var Hex5RE = HexString.substr(17,3);//alert(HexRE + '-' + HexRE.length + ' - 6 - RE');
		var Hex6MS = HexString.substr(20,4);//alert(HexMS + '-' + HexMS.length + ' - 7 - MS');
		var Hex7BAWP = HexString.substr(24,3);//alert(HexBAWP + '-' + HexBAWP.length + ' - 8 - BAWP');
		var Hex8MAWP = HexString.substr(27,3);//alert(HexMAWP + '-' + HexMAWP.length + ' - 9 - MAWP');
		//Random 2 char string here
		var Hex9GAWP = HexString.substr(32,3);//alert(HexGAWP + '-' + HexGAWP.length + ' - 10 - GAWP');
		var HexASP = HexString.substr(35,5);//alert(HexSP + '-' + HexSP.length + ' - 11 - SP');
		var HexBREP = HexString.substr(41);
		
		var testHexIn = Hex0App + " App - " + Hex1Mon + " Mon - " + Hex2BAW + " BAW - " + Hex3MAW + " MAW - " + Hex4GAW + " GAW - " + Hex5RE + " RE - " +  Hex6MS + " MS - " + Hex7BAWP + " BAWP - " + Hex8MAWP + " MAWP - " + Hex9GAWP + " GAWP - " + HexASP  + " SP - " + HexBREP + " REP";
		//alert(testHexIn);
		
		//Switch to Decimal
		var DecApp = parseInt(Hex0App,16);//alert(DecApp + "-" + HexApp + ' - 1 APP');
		var DecMon = parseInt(Hex1Mon,16);//alert(DecMon + "-" + HexMon + ' - 2 MON');
		var DecBAW = parseInt(Hex2BAW,16);//alert(DecBAW + "-" + HexBAW + ' - 3 BAW');
		var DecMAW = parseInt(Hex3MAW,16);//alert(DecMAW + "-" + HexMAW + ' - 4 MAW');
		var DecGAW = parseInt(Hex4GAW,16);//alert(DecGAW + "-" + HexGAW + ' - 5 GAW');
		var DecRE = parseInt(Hex5RE,16);//alert(DecRE + "-" + HexRE + ' - 6 RE');
		var DecMS = parseInt(Hex6MS,16);//alert(DecMS + "-" + HexMS + ' - 7 MS');
		var DecBAWP = parseInt(Hex7BAWP,16);//alert(DecBAWP + "-" + HexBAWP + ' - 8 BAWP');
		var DecMAWP = parseInt(Hex8MAWP,16);//alert(DecMAWP + "-" + HexMAWP + ' - 9 MAWP');
		var DecGAWP = parseInt(Hex9GAWP,16);//alert(DecGAWP + "-" + HexGAWP + ' - 10 GAWP');
		var DecSP = parseInt(HexASP,16);//alert(DecSP + "-" + HexSP + ' - 11 SP');
		var DecREP = parceInt(HexBREP,16);
		
		var prompt = confirm("Are you sure you want to do this? This action cannot be undone!");
		if (prompt == true){
			PLAYER.APP = Number(DecApp);
			PLAYER.MON = Number(DecMon);
			PLAYER.RE = Number(DecRE);
			PLAYER.MS = Number(DecMS);
			PLAYER.BAW = Number(DecBAW);
			PLAYER.MAW = Number(DecMAW);
			PLAYER.GAW = Number(DecGAW);
			PRICE.SP = Number(DecSP);
			PRICE.BAWP = Number(DecBAWP);
			PRICE.MAWP = Number(DecMAWP);
			PRICE.GAWP = Number(DecGAWP);
			PRICE.RE = Number(DecREP);
			SAVE();
		}
	} else {alert('Invalid Save! Enter a Valid Save!');}
}

//Reset
function RESET(){
	var a = confirm('Are you sure you want to reset? As this action cannot be undone.');
	if (a == true){
		PLAYER.APP = 0;
		PLAYER.MON = 0;
		PLAYER.BAW = 0;
		PLAYER.MAW = 0;
		PLAYER.GAW = 0;
		PLAYER.MS = 20;
		PRICE.BAWP = 35;
		PRICE.MAWP = 45;
		PRICE.GAWP = 75;
		PRICE.SP = 30;
		PLAYER.RE = 0;
		SAVE();
	}
}

function PRICECHANGE(){
	var num0 = Math.floor(Math.random() * 15) + 1;
	PRICE.AS = num0;
	document.getElementById('AS').innerHTML = PRICE.AS;
	
	var num1 = Math.floor(Math.random() * 15) + 1;
	PRICE.BASE = num1;
	document.getElementById('BS').innerHTML = PRICE.BASE;
}
