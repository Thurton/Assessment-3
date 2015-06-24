var GameRun = function() 
{
	this.prototype = BaseState;
}

GameRun.prototype.load = function() 
{
}

GameRun.prototype.unload = function() 
{
}

GameRun.prototype.update = function(dt)
{
}

GameRun.prototype.draw = function() 
{
}

var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;
var LAYER_COUNT = 2;
var LAYER_BACKGROUND = 0;
var LAYER_ENEMIES = 1;
var MAP = {tw: 25, th: 283};
var TILE = 35;
var TILESET_TILE = TILE * 1;
var TILESET_PADDING = 2;
var TILESET_SPACING = 2;
var TILESET_COUNT_X = 25;
var TILESET_COUNT_Y = 283;
var tileset = document.createElement("img");
tileset.src = "assets/Level1_BG.jpg";
var cells = [];
var enemies = [];
var bullets = [];
var worldOffsetX = 0;
var score = 0;
var lives = 03;
var Health_Lives = document.createElement("img");
var fps = 0;
var fpsCount = 0;
var fpsTime = 0;
var player = new Player();
var keyboard = new Keyboard();

function cellAtPixelCoord(layer, x,y)
{
    if(x<0 || x>SCREEN_WIDTH || y<0)
        return 1;
    if(y>SCREEN_HEIGHT)
        return 0;
    return cellAtTileCoord(layer, pixelToTile(x), pixelToTile(y));
};

function cellAtTileCoord(layer, tx, ty)
{
    if(tx<0 || tx>=MAP.tw || ty<0)
        return 1;
    if(ty>=MAP.th)
        return 0;
    return cells[layer][ty][tx];
};

function tileToPixel(tile)
{
    return tile * TILE;
};

function pixelToTile(pixel)
{
    return Math.floor(pixel/TILE);
};

function bound(value, min, max)
{
    if(value < min)
        return min;
    if(value > max)
        return max;
    return value;
}

function drawMap()
{
    var startX = -1;
    var maxTiles = Math.floor(SCREEN_WIDTH / TILE) + 4;
    var tileX = pixelToTile (player.position.x);
    var offsetX = TILE + Math.floor(player.position.x%TILE);
    
    startX = tileX - Math.floor(maxTiles / 2);
    
    if(startX < -1)
    {
        startX = 0;
        offsetX = 0;
    }
    if(startX > MAP.tw - maxTiles)
    {
        startX = MAP.tw - maxTiles + 1;
        offsetX = TILE;
    }
    
    worldOffsetX = startX * TILE + offsetX;
    
     for( var layerIdx=0; layerIdx < LAYER_COUNT; layerIdx++ )
     {
         for( var y = 0; y < level1.layers[layerIdx].height; y++ )
         {
             var idx = y * level1.layers[layerIdx].width + startX;
             for( var x = startX; x < startX + maxTiles; x++ )
             {
                 if( level1.layers[layerIdx].data[idx] != 0 )
                 {
                     // the tiles in the Tiled map are base 1 (meaning a value of 0 means no tile),
                     // so subtract one from the tileset id to get the correct tile
                     var tileIndex = level1.layers[layerIdx].data[idx] - 1;
                     var sx = TILESET_PADDING + (tileIndex % TILESET_COUNT_X) *
                    (TILESET_TILE + TILESET_SPACING);
                     var sy = TILESET_PADDING + (Math.floor(tileIndex / TILESET_COUNT_Y)) *
                    (TILESET_TILE + TILESET_SPACING);
                     context.drawImage(tileset, sx, sy, TILESET_TILE, TILESET_TILE,
                    (x-startX)*TILE - offsetX, (y-1)*TILE, TILESET_TILE, TILESET_TILE);
                 }
                idx++;
             }
         }
     }
}

function addEnemies() {
    enemies.splice(0,enemies.length);
    idx = 0;
    for(var y = 0; y < level1.layers[LAYER_OBJECT_ENEMIES].height; y++) {
        for(var x = 0; x < level1.layers[LAYER_OBJECT_ENEMIES].width; x++) {
            if(level1.layers[LAYER_OBJECT_ENEMIES].data[idx] != 0) {
            var px = tileToPixel(x);
            var py = tileToPixel(y);
            var e = new Enemy(px,py);
            enemies.push(e);
            }
        idx++;
        }
    }
}

function initialize() {
    for(var layerIdx = 0; layerIdx < LAYER_COUNT; layerIdx++) {
        cells[layerIdx] = [];
        var idx = 0;
        for(var y = 0; y < level1.layers[layerIdx].height; y++) {
            cells[layerIdx][y] = [];
            for(var x = 0; x < level1.layers[layerIdx].width; x++) {
                if(level1.layers[layerIdx].data[idx] != 0) {
                    cells[layerIdx][y][x] = 1;
                    cells[layerIdx][y-1][x-1] = 1;
                    cells[layerIdx][y-1][x+1] = 1;
                    cells[layerIdx][y][x+1] = 1;
                }
                else if(cells[layerIdx][y][x] != 1) {
                    cells[layerIdx][y][x] = 0;
                }
                idx++;
            }
        }
    }
	
	musicBackground = new Howl(
    {
        urls: ["assets/Game_Music.ogg"],
        loop: true,
        buffer: true,
        volume:0.2,
        onend: function() {
            musicBackground.play()
        }
    });
	
	addEnemies();
}

function Run()
{
	 drawMap();
	 player.draw();
	 
	 //update the frame counter
	 fpsTime += deltaTime;
	 fpsCount++;
	 if(fpstime >= 1)
	 {
		 fpsTime -= 1;
		 fps = fpsCOunt;
		 fpsCOunt = 0;
	 }
	 
	//FPS
	 context.fillStyle = "#f00";
	 context.font = "12px Arial";
	 context.fillText("FPS: " + fps, 5, 20, 100);
	 
	//SCORE
	 context.fillStyle = "yellow";
	 context.font= "20px Arial";
	 var scoreText = "SCORE: " + score;
	 context.fillText(scoreText, SCREEN_WIDTH - 827, 660);
	 
    //LIFE COUNTER
	 for(var i=0; i<lives; i++)
	 {
	 // 10 is the distance from the top of context
	 // 20 is the gap between the lives icons
		 context.drawImage (heartImage, 200*i, 660);
	 } 

}