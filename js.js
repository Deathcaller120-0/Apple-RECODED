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
var NUPSPEED = setInterval(UPDATE, 1000);
function UPDATE(){
	var CI = document.getElementById('ISSUES').checked;
	if (CI == true){
		clearInterval(NUPSPEED);
		NUPSPEED = setInterval(UPDATE, 5000);
	}
	
	var MUPD, MUPB, AUPD, ASUPD, BAW, MAW, GAW;
	//Set things to update
	MUPD = document.getElementById('MONEY');
	MUPB = document.getElementById('CM');
	AUPD = document.getElementById('APPLES');
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
	AUPD.innerHTML = PLAYER.APP;
	BAWA.innerHTML = PLAYER.BAW;
	MAWA.innerHTML = PLAYER.MAW;
	GAWA.innerHTML = PLAYER.GAW;
	SP.innerHTML = PRICE.SP;
	
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
	AUPD = PLAYER.APP / PLAYER.MS * 100; //100,000
	ASUPD.style.width = AUPD + "%";
	document.getElementById('APPSTAT').innerHTML = PLAYER.APP + " out of " + PLAYER.MS;
	if (AUPD >= 100){
		PLAYER.APP = PLAYER.MS;
		ASUPD.style.backgroundColor = "#f00";
	} else {
		ASUPD.style.backgroundColor = "#0f0";
	}
	if (AUPD >= 100){
		PLAYER.APP -= PLAYER.MS;
		alert("Don't let your storage overfill! Pay attention to your apple amount!");
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
	if (HexOutMON.length != 6){
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
	}
	
	HexOutAPP += PLAYER.APP.toString(16);
	
	if (HexOutAPP.length != 5){
		switch (HexOutAPP.length){
			case 1:
				HexOutAPP = "0000" + HexOutAPP;
				break;
			case 2:
				HexOutAPP = "000" + HexOutAPP;
				break;
			case 3:
				HexOutAPP = "00" + HexOutAPP;
				break;
			case 4:
				HexOutAPP = "0" + HexOutAPP;
				break;
		}
	}
	
	HexOutBAW += PLAYER.BAW.toString(16);
	
	if (HexOutBAW.length != 3){
		switch (HexOutBAW.length){
			case 1:
				HexOutBAW = "00" + HexOutBAW;
				break;
			case 2:
				HexOutBAW = "0" + HexOutBAW;
				break;
		}
	}
	
	HexOutMAW += PLAYER.MAW.toString(16);
	
	if (HexOutMAW.length != 3){
		switch (HexOutMAW.length){
			case 1:
				HexOutMAW = "00" + HexOutMAW;
				break;
			case 2:
				HexOutMAW = "0" + HexOutMAW;
				break;
		}
	}
	
	HexOutGAW += PLAYER.GAW.toString(16);
	
	if (HexOutGAW.length != 3){
		switch (HexOutGAW.length){
			case 1:
				HexOutGAW = "00" + HexOutGAW;
				break;
			case 2:
				HexOutGAW = "0" + HexOutGAW;
				break;
		}
	}
	
	HexOutRE += PLAYER.RE.toString(16);
	
	if (HexOutRE.length != 4){
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
	}
	
	HexOutMS += PLAYER.MS.toString(16);
	
	if (HexOutMS.length != 3){
		switch (HexOutMS.length){
			case 1:
				HexOutMS = "00" + HexOutMS;
				break;
			case 2:
				HexOutMS = "0" + HexOutMS;
				break;
		}
	} 
	
	HexOutBAWP += PRICE.BAWP.toString(16);
	
	if (HexOutBAWP.length != 3){
		switch (HexOutBAWP.length){
			case 1:
				HexOutBAWP = "000" + HexOutBAWP;
				break;
			case 2:
				HexOutBAWP = "00" + HexOutBAWP;
				break;
			case 3:
				HexOutBAWP = "0" + HexOutBAWP;
				break;
		}
	}
	
	HexOutMAWP += PRICE.MAWP.toString(16);
	
	if (HexOutMAWP.length != 3){
		switch (HexOutMAWP.length){
			case 1:
				HexOutMAWP = "000" + HexOutMAWP;
				break;
			case 2:
				HexOutMAWP = "00" + HexOutMAWP;
				break;
			case 3:
				HexOutMAWP = "0" + HexOutMAWP;
				break;
		}
	}
	
	HexOutGAWP += PRICE.GAWP.toString(16);
	
	if (HexOutGAWP.length != 3){
		switch (HexOutGAWP.length){
			case 1:
				HexOutGAWP = "000" + HexOutGAWP;
				break;
			case 2:
				HexOutGAWP = "00" + HexOutGAWP;
				break;
			case 3:
				HexOutGAWP = "0" + HexOutGAWP;
				break;
		}
	}
	
	HexOut = HexOutAPP + HexOutMON + HexOutBAW + HexOutMAW + HexOutGAW + HexOutMS + HexOutMS + HexOutBAWP + HexOutMAWP + HexOutGAWP + HexOutSP;
	//window.alert(HexOut);
	//window.alert(HexOut.length);
	//document.getElementById('OUTHEX').innerHTML = HexOut;
	
	var TXT = "Saved Successfully";
	var i = 0;
	setTimeout(a, 20)
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
	console.log(HexString.length);
	
	if (HexString.length == 38){
		var HexApp = HexString.substr(0,4);
		var HexMon = HexString.substr(5,11);
		var HexBAW = HexString.substr(12,13);
		var HexMAW = HexString.substr(14,16);
		var HexGAW = HexString.substr(17,19);
		var HexRE = HexString.substr(20,22);
		var HexMS = HexString.substr(23,25);
		var HexBAWP = HexString.substr(26,28);
		var HexMAWP = HexString.substr(29,31);
		var HexGAWP = HexString.substr(32,34);
		var HexSP = HexString.substr(35,38);
		
		//Switch to Decimal
		var DecApp = parseInt(HexApp,16);
		var DecMon = parseInt(HexMon,16);
		var DecBAW = parseInt(HexBAW,16);
		var DecMAW = parseInt(HexMAW,16);
		var DecGAW = parseInt(HexGAW,16);
		var DecRE = parseInt(HexRE,16);
		var DecMS = parseInt(HexMS,16);
		var DecBAWP = parseInt(HexBAWP,16);
		var DecMAWP = parseInt(HexMAWP,16);
		var DecGAWP = parseInt(HexGAWP,16);
		var DecSP = parseInt(HexSP,16);
		
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
	} else {alert('Invalid Save! Enter a Valid Save!')}
}

//Reset
function RESET(){
	var a = confirm('Are you sure you want to reset? As this action cannot be undone.');
	if (a == true){
		var PLAYER = {MON:0, APP:0, BAW:0, MAW:0, GAW:0, RE:0, MS:20};
		var PRICE = {BAWP:35, MAWP:45, GAWP:75, SP:30};
		SAVE();
	}
}
