
var SplashState = function() 
{
    this.prototype = BaseState;
}

SplashState.prototype.load = function() 
{
}

SplashState.prototype.unload = function() 
{
}

SplashState.prototype.update = function(dt) 
{
    if( keyboard.isKeyDown( keyboard.KEY_ENTER ) == true)
    {
        stateManager.switchState(new GameRun());
    }
}

SplashState.prototype.draw = function() 
{
    var splashimg = document.createElement("img");
    splashimg.src = "assets/Splash_Screen.png"
    context.drawImage(splashimg, 0, 0)
}