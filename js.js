//Player
var PLAYER = {MON:10, APP:0, WORK:0};

//Game Objects
var CHARACTER;

//Game
function GAMESTART(){
	GAME.start();
	CHARACTER = new component(30, 30, "red", 10, 120);
}

var GAME = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 900;
		this.canvas.height = 900;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 20);
		window.addEventListener('keydown', function (e) {
			GAME.keys = (GAME.keys || []);
			GAME.keys[e.keyCode] = (e.type == "keydown");
		})
		window.addEventListener('keyup', function (e) {
			GAME.keys[e.keyCode] = (e.type == "keydown");            
		})
	},
	clear : function(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
};

//Spawn Player
function component(width, height, color, x, y) {
    this.gamearea = GAME;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = GAME.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

//Clear area where player IS NOT
function updateGameArea() {
    GAME.clear();
    CHARACTER.speedX = 0;
    CHARACTER.speedY = 0;    
    if (GAME.keys && GAME.keys[37]) {CHARACTER.speedX = -1; }
    if (GAME.keys && GAME.keys[39]) {CHARACTER.speedX = 1; }
    if (GAME.keys && GAME.keys[38]) {CHARACTER.speedY = -1; }
    if (GAME.keys && GAME.keys[40]) {CHARACTER.speedY = 1; }
    CHARACTER.newPos();    
    CHARACTER.update();
}