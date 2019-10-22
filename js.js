//Player
var PLAYER = {MON:0, AP:{B:0, M:0, G:0, MS:20, APP:0}, RE:0, BAN:{B:0, M:0, G:0, BAN:0, MS:20}, PRICE:{AP:{B:35, M:45, G:75, AS:3, SP:30}, BAN:{BBP:30, BMP:60, BGP:90, BS:10, SP:50, BASP:4}, , RE:10000}};
var CURRENTTAB = 0;

function CHANGETAB(){
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

function LOAD(){
	var inSave = localStorage.getItem('saveFile');
	var inJSON = atob(inSave);
	PLAYER = JSON.parse(inJSON);
	
	if (PLAYER.MON == undefined){
		PLAYER.MON = 0;
	}
	if (PLAYER.AP.APP == undefined){
		PLAYER.AP.APP = 0;
	}
	if (PLAYER.AP.B == undefined){
		PLAYER.AP.B = 0;
	}
	if (PLAYER.AP.M == undefined){
		PLAYER.AP.M = 0;
	}
	if (PLAYER.AP.G == undefined){
		PLAYER.AP.G = 0;
	}
	if (PLAYER.RE == undefined){
		PLAYER.RE = 0;
	}
	if (PLAYER.AP.MS == undefined){
		PLAYER.AP.MS = 20;
	}
	if (PLAYER.BAN.B == undefined){
		PLAYER.BAN.B = 0;
	}
	
	if (PLAYER.BAN.M == undefined){
		PLAYER.BAN.M = 0;
	}
	
	if (PLAYER.BAN.G == undefined){
		PLAYER.BAN.G = 0;
	}
	if (PLAYER.BAN.BAN == undefined){
		PLAYER.BAN.BAN = 0;
	}
	
	if (PLAYER.BAN.MS == undefined){
		PLAYER.BAN.MS = 0;
	}
	
	//Strings that are SUPPOST to be Numbers
	var MS = Number(PLAYER.AP.MS),
	MON = Number(PLAYER.MON),
	BAW = Number(PLAYER.AP.B),
	MAW = Number(PLAYER.AP.M),
	GAW = Number(PLAYER.AP.G),
	RE = Number(PLAYER.RE);
	
	//Fixing them
	PLAYER.AP.MS = MS;
	PLAYER.MON = MON;
	PLAYER.AP.B = BAW;
	PLAYER.AP.M = MAW;
	PLAYER.AP.G = GAW;
	PLAYER.RE = RE;
	document.getElementById('REBIRTHS').innerHTML = RE;
	
	PLAYER.PRICE.AP.B = localStorage.getItem('priceBAW');
	PLAYER.PRICE.AP.M = localStorage.getItem('priceMAW');
	PLAYER.PRICE.AP.G = localStorage.getItem('priceGAW');
	PLAYER.PRICE.SP = localStorage.getItem('priceSP');
	var SP = Number(PLAYER.PRICE.SP);
	PLAYER.PRICE.SP = SP;
	
	if (PLAYER.PRICE.AP.B == undefined){
		PLAYER.PRICE.AP.B = 35;
	}
	if (PLAYER.PRICE.AP.M == undefined){
		PLAYER.PRICE.AP.M = 45;
	}
	if (PLAYER.PRICE.AP.G == undefined){
		PLAYER.PRICE.AP.G = 75;
	}
	if (PLAYER.PRICE.SP == undefined || PRICE.SP == 0){
		PLAYER.PRICE.SP = 30;
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
	
	var MUPD, MUPB, ASUPD, BAW, MAW, GAW, BAWA, MAWA, GAWA, SPBUT, BS, REP;
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
	BS = document.getElementById('BS');
	REP = document.getElementById('REP');
	
	//Stat Updater
	MUPD.innerHTML = PLAYER.MON;
	BAWA.innerHTML = PLAYER.AP.B;
	MAWA.innerHTML = PLAYER.AP.M;
	GAWA.innerHTML = PLAYER.AP.G;
	SP.innerHTML = PLAYER.PRICE.SP;
	BS.innerHTML = PLAYER.PRICE.BAN.BS;
	RE.innerHTML = PLAYER.PRICE.RE
	
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
	if (PLAYER.MON >= PLAYER.PRICE.AP.B){ //Basic
		BAW.style.backgroundColor = "#c90";
		document.getElementById('BWP').style.display = "block";
	} else {
		BAW.style.backgroundColor = "#323639";
	}
	if (PLAYER.MON >= PLAYER.PRICE.AP.M){ //Average
		MAW.style.backgroundColor = "#00ffff";
		document.getElementById('MWP').style.display = "block";
	} else {
		MAW.style.backgroundColor = "#323639";
	}
	if (PLAYER.MON >= PLAYER.PRICE.AP.G){ //God Tier
		GAW.style.backgroundColor = "#5900b3";
		document.getElementById('GWP').style.display = "block";
	} else {
		GAW.style.backgroundColor = "#323639"
	}
	if (PLAYER.MON >= PLAYER.PRICE.SP){
		SPBUT.style.backgroundColor = "yellow";
	} else {
		SPBUT.style.backgroundColor = "#323639";
	}
	
	//Finish
	if (PLAYER.MON >= 80000){
		document.getElementById('FINISHBUT').style.backgroundColor = "#FFF";
	}
	
	//Storage
	var AUPD = PLAYER.AP.APP / PLAYER.AP.MS * 100; //100,000
	ASUPD.style.width = AUPD + "%";
	document.getElementById('APPSTAT').innerHTML = PLAYER.AP.APP + " out of " + PLAYER.AP.MS;
	if (AUPD >= 95){
		ASUPD.style.backgroundColor = "#f00";
	} else if(AUPD >= 70){
		ASUPD.style.backgroundColor = '#ff0';
	} else {
		ASUPD.style.backgroundColor = "#0f0";
	}
	if (AUPD >= 120){
		PLAYER.AP.APP -= PLAYER.AP.MS;
		PLAYER.MON -= 10;
	}
	
	//If there are more than 500 Workers, remove extra(s) and lock button
	if (PLAYER.AP.B >= 501){
		PLAYER.AP.B = 499;
		BAWB();
	}
	if (PLAYER.AP.M >= 501){
		PLAYER.AP.M = 499;
		MAWB();
	}
	if (PLAYER.AP.G >= 501){
		PLAYER.AP.G = 499;
		GAWB();
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
	// Save file out	
	var preOutput = JSON.stringify(PLAYER);
	var outBase = btoa(preOutput);
	
	localStorage("SaveFile", outBase);
	
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
	numSave++;
}

//Resources
function SELLAPP(){
	for (var i = 0; i < PLAYER.AP.APP; i++){
		if (PLAYER.AP.APP <= 2){
			break;
		} else {
			PLAYER.AP.APP -= PLAYER.PRICE.AP.AS;
			PLAYER.MON++;
		}
	}
}

function SELLBAN(){
	for (var i = 0; i < PLAYER.BAN.BAN; i++){
		if (PLAYER.BAN.BAN <= 2){
			break;
		} else {
			PLAYER.BAN.BAN -= PLAYER.PRICE.BAN.BASE;
			PLAYER.MON++;
		}
	}
}

function BAWWork(){
	if (PLAYER.AP.B >= 1){
		for (var baws = 0; baws < PLAYER.AP.B; baws++){
			if (PLAYER.AP.APP >= PLAYER.AP.MS - 5){
				break;
			} else {
				PLAYER.AP.APP++;
			}
		}
	}
}
function MAWWork(){
	if (PLAYER.AP.M >= 1){
		for (var maws = 0; maws < PLAYER.AP.M; maws++){
			if (PLAYER.AP.APP >= PLAYER.AP.MS - 5){
				break;
			} else {
				PLAYER.AP.APP++;
			}
		}
	}
}
function GAWWork(){
	if (PLAYER.AP.G >= 1){
		for (var gaws = 0; gaws < PLAYER.AP.G; gaws++){
			if (PLAYER.AP.APP >= PLAYER.AP.MS - 5){
				break;
			} else {
				PLAYER.AP.APP += 2;
			}
		}
	}
}

//Workers
var BC = 30, MC = 25, GC = 20;
function BAWB(){
	if (PLAYER.MON >= PLAYER.PRICE.AP.B && PLAYER.AP.B < 500){
		PLAYER.MON -= PLAYER.PRICE.AP.B;
		PLAYER.AP.B++;
		BC--;
		if (BC == 0){
			BC = 30;
			PLAYER.PRICE.AP.B += 2;
			document.getElementById('BWORKPRICE').innerHTML = PLAYER.PRICE.AP.B;
		}
	}
	if (PLAYER.AP.B >= 500){
		document.getElementById('BAWBUT').innerHTML = "MAXED OUT";
		document.getElementById('BAWBUT').disabled = true;
	}
}
function MAWB(){
	if (PLAYER.MON >= PLAYER.PRICE.AP.M && PLAYER.PLAYER.AP.M < 500){
		PLAYER.MON -= PLAYER.PRICE.AP.M;
		PLAYER.AP.M++;
		MC--;
		if (MC == 0){
			MC = 25;
			PLAYER.PRICE.AP.M += 2;
			document.getElementById('MWORKPRICE').innerHTML = PLAYER.PRICE.AP.M;
		}
	}
	if (PLAYER.AP.M >= 500){
		document.getElementById('MAWBUT').innerHTML = "MAXED OUT";
		document.getElementById('MAWBUT').disabled = true;
	}
}
function GAWB(){
	if (PLAYER.MON >= PLAYER.PRICE.AP.G && PLAYER.AP.G < 500){
		PLAYER.MON -= PLAYER.PRICE.AP.G;
		PLAYER.AP.G++;
		GC--;
		if (GC == 0){
			GC = 20;
			PLAYER.PRICE.AP.G += 2;
			document.getElementById('GWORKPRICE').innerHTML = PLAYER.PRICE.AP.G;
		}
	}
	if (PLAYER.AP.G >= 500){
		document.getElementById('GAWBUT').innerHTML = "MAXED OUT";
		document.getElementById('GAWBUT').disabled = true;
	}
}

//Storage
function SPUP(){
	if (PLAYER.MON >= PLAYER.PRICE.SP){
		PLAYER.MON -= PLAYER.PRICE.AP.SP;
		PLAYER.PRICE.AP.SP += 5;
		PLAYER.AP.MS += 10;
	}
}

function BPUP(){
	if (PLAYER.MON >= PLAYER.PRICE.SP){
		PLAYER.MON -= PLAYER.PRICE.BAN.SP;
		PLAYER.PRICE.BAN.SP += 5;
		PLAYER.BAN.MS += 10;
	}
}

//Rebirth
function REBIRTH(){
	if (PLAYER.MON >= PLAYER.PRICE.RE){
		PLAYER.AP.APP = 0;
		PLAYER.BAN.BAN = 0;
		PLAYER.MON = 0;
		PLAYER.AP.B = 0;
		PLAYER.AP.M = 0;
		PLAYER.AP.G = 0;
		PLAYER.BAN.B = 0;
		PLAYER.BAN.M = 0;
		PLAYER.BAN.G = 0;
		PLAYER.AP.MS = 20;
		PLAYER.PRICE.AP.B = 35 - PLAYER.RE;
		PLAYER.PRICE.AP.M = 45 - PLAYER.RE;
		PLAYER.PRICE.AP.G = 75 - PLAYER.RE;
		PLAYER.PRICE.AP.SP = 30 - PLAYER.RE;
		PLAYER.RE++;
		PLAYER.PRICE.RE += 1000;
		SAVE();
	}
}

//Finish Function
function FINISH(){
	if(PLAYER.MON >= 80000){ //$80,000
		PLAYER.AP.APP = 0;
		PLAYER.MON = 0;
		PLAYER.AP.B = 0;
		PLAYER.AP.M = 0;
		PLAYER.AP.G = 0;
		PLAYER.AP.MS = 20;
		PLAYER.PRICE.AP.B = 35;
		PLAYER.PRICE.AP.M = 45;
		PLAYER.PRICE.AP.G = 75;
		PLAYER.PRICE.SP = 30;
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
	var encodedString = document.getElementById('INHEX').value;
	//alert(encodedString.length);
	
	if (encodedString.length >= 300){
		var a = atob(encodedString);
		var b = JSON.parse(a);
		
		var prompt = confirm("Are you sure you want to do this? This action cannot be undone!");
		if (prompt == true){
			PLAYER = b;
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
		PLAYER.AP.B = 0;
		PLAYER.AP.M = 0;
		PLAYER.AP.G = 0;
		PLAYER.AP.MS = 20;
		PLAYER.PRICE.AP.B = 35;
		PLAYER.PRICE.AP.M = 45;
		PLAYER.PRICE.AP.G = 75;
		PLAYER.PRICE.AP.SP = 30;
		PLAYER.RE = 0;
		SAVE();
	}
}

function PRICECHANGE(){
	var num0 = Math.floor(Math.random() * 15) + 1;
	PLAYER.PRICE.AS = num0;
	document.getElementById('AS').innerHTML = PLAYER.PRICE.AS;
	
	var num1 = Math.floor(Math.random() * 15) + 1;
	PLAYER.PRICE.BASE = num1;
	document.getElementById('BS').innerHTML = PLAYER.PRICE.BASE;
}
