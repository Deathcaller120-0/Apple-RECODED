//Player
var PLAYER = {MON:0, APP:0, HASINV:false, BAW:0, MAW:0, GAW:0, RE:0, MS:20};
var PRICE = {BAWP:35, MAWP:45, GAWP:75, SP:30};

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
	
	PRICE.BAWP = localStorage.getItem('priceBAW');
	PRICE.MAWP = localStorage.getItem('priceMAW');
	PRICE.GAWP = localStorage.getItem('priceGAW');
	PRICE.SP = localStorage.getItem('priceSP');
	
	if (PRICE.BAWP == undefined){
		PRICE.BAWP = 35;
	}
	if (PRICE.MAWP == undefined){
		PRICE.MAWP = 45;
	}
	if (PRICE.GAWP == undefined){
		PRICE.GAWP = 75;
	}
	if (PRICE.SP == undefined){
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
			}, 6000);
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
	var MUPD, MUPB, AUPD, ASUPD, BAW, MAW, GAW, INVEST;
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
	INVEST = document.getElementById('INVEST');
	
	//Stat Updater
	MUPD.innerHTML = PLAYER.MON;
	AUPD.innerHTML = PLAYER.APP;
	BAWA.innerHTML = PLAYER.BAW;
	MAWA.innerHTML = PLAYER.MAW;
	GAWA.innerHTML = PLAYER.GAW;
	SP.innerHTML = PRICE.SP;
	
	//Worker / Resource Updater
	if (PLAYER.MON >= 10 && PLAYER.HASINV == false){
		INVEST.style.backgroundColor = "#0f0";
		document.getElementById('INVEST').style.display = "block";
		document.getElementById('INVINFO').style.display = "block";
	} else {
		INVEST.style.backgroundColor = "#323639";
	}
	if (PLAYER.APP >= 5){
		MUPB.style.backgroundColor = "#393";
		MUPB.style.display = "block";
		document.getElementById('SELLINFO').style.display = "block";
	} else {
		MUPB.style.backgroundColor = "#323639";
	}
	if (PLAYER.MON >= PRICE.BAWP){ //Basic
		BAW.style.backgroundColor = "#c90";
		BAW.style.display = "block";
		document.getElementById('BWP').style.display = "block";
	} else {
		BAW.style.backgroundColor = "#323639";
	}
	if (PLAYER.MON >= PRICE.MAWP){ //Average
		MAW.style.backgroundColor = "#00ffff";
		MAW.style.display = "block";
		document.getElementById('MWP').style.display = "block";
	} else {
		MAW.style.backgroundColor = "#323639";
	}
	if (PLAYER.MON >= PRICE.GAWP){ //God Tier
		GAW.style.backgroundColor = "#5900b3";
		GAW.style.display = "block";
		document.getElementById('GWP').style.display = "block";
	} else {
		GAW.style.backgroundColor = "#323639"
	}
	if (PLAYER.MON >= PRICE.SP){
		SPBUT.style.backgroundColor = "yellow";
	} else {
		SPBUT.style.backgroundColor = "#323639";
	}
	
	//Storage
	AUPD = PLAYER.APP / PLAYER.MS * 100; //100,000
	ASUPD.style.width = AUPD + "%";
	document.getElementById('APPSTAT').innerHTML = PLAYER.APP + " out of " + PLAYER.MS;
	if (AUPD >= 100){
		PLAYER.APP = PLAYER.MS - 6;
		ASUPD.style.backgroundColor = "#f00";
	} else {
		ASUPD.style.backgroundColor = "#0f0";
	}
	
	//Investor
	a();
	function a(){
		if (PLAYER.HASINV == true && PLAYER.APP >= 10){
			PLAYER.APP -= 10;
			PLAYER.MON++;
			if (PLAYER.APP >= 10){
				setTimeout(this, 10);
			}
		}
	}
}

//Saved or !Saved
//setInterval(SAVE, 600000000);
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
	if (PLAYER.APP >= 5){
		PLAYER.APP -= 5;
		PLAYER.MON++;
	}
}
function INVESTOR(){
	if (PLAYER.MON >= 10){
		PLAYER.MON -= 10;
		PLAYER.HASINV = true;
		document.getElementById('INVEST').disabled = true;
		document.getElementById('INVEST').innerHTML = "Investor Hired";
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
		}, 10000); //After 20 sec, app++;
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
		}, 8000); //After 18 sec
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
		}, 7000); //After 16 sec app +2
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
		PRICE.SP += 10;
		PLAYER.MS += 10;
	}
}