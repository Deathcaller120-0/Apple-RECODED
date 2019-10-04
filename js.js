//Player
var PLAYER = {MON:0, APP:0, BAW:0, MAW:0, GAW:0, RE:0, MS:20};
var PRICE = {BAWP:35, MAWP:45, GAWP:75, SP:30};
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
	
	if (PLAYER.BAW >= 1){
		var ph1 = PLAYER.BAW;
		setInterval(function(){
			setInterval(function(){
				PLAYER.APP++;
			}, 10000);
			ph1--;
			if (ph1 <= 0){
				clearInterval(this);
			}
		}, 1000);
	}
	if (PLAYER.MAW >= 1){
		var ph2 = PLAYER.MAW;
		setInterval(function(){
			setInterval(function(){
				PLAYER.APP++;
			}, 8000);
			ph2--;
			if (ph2 <= 0){
				clearInterval(this);
			}
		}, 1000);
	}
	if (PLAYER.GAW >= 1){
		var ph3 = PLAYER.GAW;
		setInterval(function(){
			setInterval(function(){
				PLAYER.APP += 2;
			}, 7000);
			ph3--;
			if (ph3 <= 0){
				clearInterval(this);
			}
		}, 1000);
	}
	
	UPDATE();
}

//Update Player Status
var rngCounter = 0;
function UPDATE(){
	rngCounter++;
	var CI = document.getElementById('ISSUES').checked;
	if (CI == true){
		setTimeout(UPDATE, 5000);
	}
	var CS = document.getElementById('SPEEDUP').checked;
	if (CS == true){
		setTimeout(UPDATE, 500);
	}
	if (CI && CS == false){
		setTimeout(UPDATE, 1000);
	}
	
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
	
	if (rngCounter >= 6){
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
	if (AUPD >= 100){
		PLAYER.APP = PLAYER.MS;
		ASUPD.style.backgroundColor = "#f00";
	} else {
		ASUPD.style.backgroundColor = "#0f0";
	}
	if (AUPD >= 120){
		PLAYER.APP -= PLAYER.MS;
		PLAYER.MON -= 10;
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
}
	
//Saved or !Saved
setInterval(SAVE, 600000000);
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
	
	//Assign Vars
	HexOutMON += PLAYER.MON.toString(16);
	
	//If vars are too short, make them the correct size
	if (HexOutMON.length < 6){
		switch (HexOutMON.length){
			case 1:
				HexOutMON = "00000" + HexOutMON;
				break;
			case 2:
				HexOutMON = "0000" + HexOutMON;
				break;
			case 3:
				HexOutMON = "000" + HexOutMON;
				break;
			case 4:
				HexOutMON = "00" + HexOutMON;
				break;
			case 5:
				HexOutMON = "0" + HexOutMON;
				break;
		}
	} else if (HexOutMON.length >= 7){
		var a = 0;
		var b = HexOutMON.length;
		do {
			a++;
			b--;
		} while (b >= 7)
		HexOutMON = HexOutMON.slice(0, a);
	}
    alert(HexOutMON + " MON");
	
	HexOutAPP += PLAYER.APP.toString(16);
	
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
	alert(HexOutAPP + " APP");
	HexOutBAW += PLAYER.BAW.toString(16);
	
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
	alert(HexOutBAW + " BAW");
	HexOutMAW += PLAYER.MAW.toString(16);
	
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
	alert(HexOutMAW + " MAW");
	HexOutGAW += PLAYER.GAW.toString(16);
	
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
	alert(HexOutGAW + " GAW");
	HexOutRE += PLAYER.RE.toString(16);
	
	if (HexOutRE.length < 4){
		switch (HexOutRE.length){
			case 1:
				HexOutRE = "000" + HexOutRE;
				break;
			case 2:
				HexOutRE = "00" + HexOutRE;
				break;
			case 3:
				HexOutRE = "0" + HexOutRE;
				break;
		}
	} else if (HexOutRE.length > 5){
		var a = 0;
		var b = HexOutRE.length;
		do {
			a++;
			b--;
		} while (b >= 5)
		HexOutRE = HexOutRE.slice(0, a);
	}
	alert(HexOutRE + " RE");
	HexOutMS += PLAYER.MS.toString(16);
	
	if (HexOutMS.length < 3){
		switch (HexOutMS.length){
			case 1:
				HexOutMS = "00" + HexOutMS;
				break;
			case 2:
				HexOutMS = "0" + HexOutMS;
				break;
		}
	}  else if (HexOutMS.length > 4){
		var a = 0;
		var b = HexOutMS.length;
		do {
			a++;
			b--;
		} while (b >= 4)
		HexOutMS = HexOutMS.slice(0, a);
	}
	alert(HexOutMS + " MS");
	HexOutBAWP += PRICE.BAWP.toString(16);
	
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
	alert(HexOutBAWP + " BAWP");
	HexOutMAWP += PRICE.MAWP.toString(16);
	
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
	alert(HexOutMAWP + " MAWP");
	HexOutGAWP += PRICE.GAWP.toString(16);
	
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
	alert(HexOutGAWP + " GAWP");
	HexOutSP = PRICE.SP.toString(16);
	
	if (HexOutSP.length < 5){
		switch (HexOutSP.length){
			case 1:
				HexOutSP = "0000" + HexOutSP
				break;
			case 2:
				HexOutSP = "000" + HexOutSP
				break;
			case 3:
				HexOutSP = "00" + HexOutSP
				break;
			case 4:
				HexOutSP = "0" + HexOutSP
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
	var possibleHex = "ABCDEF";
	var rng0 = rngCounter; //alert(rng0 + " rng0");
	var rng1 = rngCounter + 3;//alert(rng1 + " rng1");
	
	var e = possibleHex.charAt(rng0); //alert(e);
	var d = possibleHex.charAt(rng0); //alert(d);
	var randChar = a + b; //alert(randChar);
	
	var c = HexOutAPP + HexOutMON + HexOutBAW + HexOutMAW + HexOutGAW + HexOutMS + HexOutMS + HexOutBAWP + HexOutMAWP + randChar + HexOutGAWP + HexOutSP;
	var HexOut = c.toUpperCase();
	//alert(c);
	//alert(HexOut);
	//alert(HexOut.length);
	document.getElementById('OUTHEX').innerHTML = HexOut;
	
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
	if (PLAYER.APP >= 3){
		PLAYER.APP -= 3;
		PLAYER.MON++;
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
		}
		setInterval(function(){
			PLAYER.APP++;
		}, 10000); //After 10 sec, app++;
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
		}
		setInterval(function(){
			PLAYER.APP++;
		}, 8000); //After 8 sec, app++
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
		}
		setInterval(function(){
			PLAYER.APP += 2;
		}, 7000); //After 7 sec, app +2
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

//Finish Function
function FINISH(){
	if(PLAYER.MON >= 80000){ //$80,000
		PLAYER.APP = 0;
		PLAYER.MON = 0;
		PLAYER.BAW = 0;
		PLAYER.MAW = 0;
		PLAYER.GAW = 0;
		PLAYER.MS = 20;
		PLAYER.RE++;
		SAVE();
		setTimeout(function(){location.reload()},2000);
	} else {
		alert('You Need More Money. Try again later.')
	}
}

//Cheats
function CSUBMIT(){
	var IN = document.getElementById('CHEATIN').value;
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
	var HexString = document.getElementById('INHEX').value;
	alert(HexString.length);
	
	if (HexString.length == 40){
		var HexApp = HexString.substr(0,3);//alert(HexApp + '-' + HexApp.length + ' - 1');
		var HexMon = HexString.substr(3,6);//alert(HexMon + '-' + HexMon.length + ' - 2');
		var HexBAW = HexString.substr(9,3);//alert(HexBAW + '-' + HexBAW.length + ' - 3');
		var HexMAW = HexString.substr(12,3);//alert(HexMAW + '-' + HexMAW.length + ' - 4');
		var HexGAW = HexString.substr(15,3);//alert(HexGAW + '-' + HexGAW.length + ' - 5');
		var HexRE = HexString.substr(18,4);//alert(HexRE + '-' + HexRE.length + ' - 6');
		var HexMS = HexString.substr(22,3);//alert(HexMS + '-' + HexMS.length + ' - 7');
		var HexBAWP = HexString.substr(25,3);//alert(HexBAWP + '-' + HexBAWP.length + ' - 8');
		var HexMAWP = HexString.substr(28,3);//alert(HexMAWP + '-' + HexMAWP.length + ' - 9');
		//Random 2 char string here
        var HexGAWP = HexString.substr(33,3);//alert(HexGAWP + '-' + HexGAWP.length + ' - 10');
		var HexSP = HexString.substr(36,5);//alert(HexSP + '-' + HexSP.length + ' - 11');
		
		//Switch to Decimal
		var DecApp = parseInt(HexApp,16);//alert(DecApp + "-" + HexApp + ' - 1');
		var DecMon = parseInt(HexMon,16);//alert(DecMon + "-" + HexMon + ' - 2');
		var DecBAW = parseInt(HexBAW,16);//alert(DecBAW + "-" + HexBAW + ' - 3');
		var DecMAW = parseInt(HexMAW,16);//alert(DecMAW + "-" + HexMAW + ' - 4');
		var DecGAW = parseInt(HexGAW,16);//alert(DecGAW + "-" + HexGAW + ' - 5');
		var DecRE = parseInt(HexRE,16);//alert(DecRE + "-" + HexRE + ' - 6');
		var DecMS = parseInt(HexMS,16);//alert(DecMS + "-" + HexMS + ' - 7');
		var DecBAWP = parseInt(HexBAWP,16);//alert(DecBAWP + "-" + HexBAWP + ' - 8');
		var DecMAWP = parseInt(HexMAWP,16);//alert(DecMAWP + "-" + HexMAWP + ' - 9');
		var DecGAWP = parseInt(HexGAWP,16);//alert(DecGAWP + "-" + HexGAWP + ' - 10');
		var DecSP = parseInt(HexSP,16);//alert(DecSP + "-" + HexSP + ' - 11');
		
		var prompt = confirm("Are you sure you want to do this? This action cannot be undone!");
		if (prompt == true){
			PLAYER.APP = DecApp;
			PLAYER.MON = DecMon;
			PLAYER.RE = DecRE;
			PLAYER.MS = DecMS;
			PLAYER.BAW = DecBAWP;
			PLAYER.MAW = DecMAWP;
			PLAYER.GAW = DecGAWP;
			PRICE.SP = DecSP;
			SAVE();
		}
	} else {alert('Invalid Save! Enter a Valid Save!');}
}

//Reset
function RESET(){
	var a = confirm('Are you sure you want to reset? As this action cannot be undone.');
	if (a == true){
		PLAYER.MON = 0;
		PLAYER.APP = 0;
		PLAYER.BAW = 0; 
		PLAYER.MAW = 0; 
		PLAYER.GAW = 0; 
		PLAYER.RE = 0; 
		PLAYER.MS = 20;
		PRICE.BAWP = 35;
		PRICE.MAWP = 45; 
		PRICE.GAWP = 75; 
		PRICE.SP = 30;
		SAVE();
	}
}
