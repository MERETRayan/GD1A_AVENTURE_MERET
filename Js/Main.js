

var config = {
    type: Phaser.AUTO,
    width: 1280 ,
    height: 780 , 
    physics: {
        default: 'arcade',
            arcade:{   
                debug:false,
                
            }
            
    },
    input:{gamepad:true},
    scene: [Menu,Scene,Scene2,Controle,Credit,Scene3] ,
};

var game = new Phaser.Game(config);
var buttonI;
var buttonEnter;
var buttonB;
var cursors;

var bg;
var credit;
var controle ;

var menu = true ;
var scene1 = true ;
var scene2 = true ;
var controle1=true;
var credit1=true;

var player ;
var ennemi;
var ennemi2;

var paddleConnected=false ;
var paddle ;

var button = 1;
var button1;
var button2;
var button3;

var base = false ;

var down = false ;
var up = false ;

var resetEnter=false;
var resetB=false;
var resetCursors=false;

var x = 600;
var y = 350;

var camera ;

var bRight = false ;
var bLeft = false ;
var bDown = true ;
var bUp = false  ;

var speed = 300;

var sceneTroisDeux = false ;
var sceneDeuxTrois = false ;
var sceneUnDeux = false ;
var sceneDeuxUn = false ;


var vie = 3; 
var timerRecovery=0;
var recovery=false ;

var tweens;
var tween ;
var anim = true ;