class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }
   
    init(data){
    }
    preload(){
        this.load.image("bg","Asset/Ecran_Titre_2.png");
        this.load.spritesheet("button","Asset/button.png", {frameWidth: 220 , frameHeight: 150 });
        

    }
    create(){

        this.add.text(20, 20, "LOADING GAME .....");
        cursors = this.input.keyboard.createCursorKeys();
        buttonI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        buttonEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        buttonB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
        bg = this.add.image(0, 0, "bg").setOrigin(0, 0);
        button1 = this.physics.add.sprite(60,40,"button").setOrigin(0, 0);
        button2 = this.physics.add.sprite(60,160,"button").setOrigin(0, 0);
        button3 = this.physics.add.sprite(60,280,"button").setOrigin(0, 0);

        this.anims.create({
            key: 'Play_Off',
            frames: [ { key: 'button', frame: 0 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'Play_On',
            frames: [ { key: 'button', frame: 1 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'Controle_Off',
            frames: [ { key: 'button', frame: 2 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'Controle_On',
            frames: [ { key: 'button', frame: 3 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'Credit_Off',
            frames: [ { key: 'button', frame: 4 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'Credit_On',
            frames: [ { key: 'button', frame: 5 } ],
            frameRate: 10,
            repeat: -1
        });

    }
    
    update(){
        //Controle Manette 
        this.input.gamepad.once('connected', function (pad){
            paddleConnected=true;
            paddle=pad;
        });

        if (resetEnter==true)
        {
            
            buttonEnter.isUp=true;
            buttonEnter.isDown=false;
            resetEnter=false;
        }

        if (base==false)
        {
            button1.anims.play('Play_On', true);
            button2.anims.play('Controle_Off', true);
            button3.anims.play('Credit_Off', true);
            base = true ;
        }
        
        if (paddleConnected==true)
        {
        if (paddle.down && button==0 && down==false)
        {
            button=1;
            button1.anims.play('Play_On', true);
            button2.anims.play('Controle_Off', true);
            button3.anims.play('Credit_Off', true);
            down = true ;
        } 
        else if (paddle.down && button==1 && down==false)
        {
            button=2;
            button1.anims.play('Play_Off', true);
            button2.anims.play('Controle_On', true);
            button3.anims.play('Credit_Off', true);
            down = true ;

        }
        else if (paddle.down && button==2 && down==false)
        {
            button=0;
            button1.anims.play('Play_Off', true);
            button2.anims.play('Controle_Off', true);
            button3.anims.play('Credit_On', true);
            down = true ;

        }
        else if (paddle.up && button==1 && up==false)
        {
            button=0;
            button1.anims.play('Play_Off', true);
            button2.anims.play('Controle_Off', true);
            button3.anims.play('Credit_On', true);
            up = true ;

        }
        else if (paddle.up && button==0 && up==false)
        {
            button=2;
            button1.anims.play('Play_Off', true);
            button2.anims.play('Controle_On', true);
            button3.anims.play('Credit_Off', true);
            up = true ;

        }
        else if (paddle.up && button==2 && up==false)
        {
            button=1;
            button1.anims.play('Play_On', true);
            button2.anims.play('Controle_Off', true);
            button3.anims.play('Credit_Off', true);
            up = true ;

        }
        if (paddle.down)
        {
            down=false ;
        }
        if (paddle.up)
        {
            up=false ;
        }

        if (button==1 && paddle.A && menu==true)
        {
            this.scene.start("Scene3");
            this.scene.pause("Menu");
        }
        else if (paddle.A && menu==true && button==2)
        {   
            menu=false;
            resetB=true;
            this.scene.start("Controle");
            this.scene.pause("Menu");
        }
        else if (button==0 && paddle.A && menu==true)
        {
            menu=false;
            resetB=true;
            this.scene.start("Credit");
            this.scene.pause("Menu");
        }

      
        if (paddle.A==false)
        {
            menu = true ;
        }
    }
        else 
        {
        if (cursors.down.isDown && button==0 && down==false)
        {
            button=1;
            button1.anims.play('Play_On', true);
            button2.anims.play('Controle_Off', true);
            button3.anims.play('Credit_Off', true);
            down = true ;
        } 
        else if (cursors.down.isDown && button==1 && down==false)
        {
            button=2;
            button1.anims.play('Play_Off', true);
            button2.anims.play('Controle_On', true);
            button3.anims.play('Credit_Off', true);
            down = true ;

        }
        else if (cursors.down.isDown && button==2 && down==false)
        {
            button=0;
            button1.anims.play('Play_Off', true);
            button2.anims.play('Controle_Off', true);
            button3.anims.play('Credit_On', true);
            down = true ;

        }
        else if (cursors.up.isDown && button==1 && up==false)
        {
            button=0;
            button1.anims.play('Play_Off', true);
            button2.anims.play('Controle_Off', true);
            button3.anims.play('Credit_On', true);
            up = true ;

        }
        else if (cursors.up.isDown && button==0 && up==false)
        {
            button=2;
            button1.anims.play('Play_Off', true);
            button2.anims.play('Controle_On', true);
            button3.anims.play('Credit_Off', true);
            up = true ;

        }
        else if (cursors.up.isDown && button==2 && up==false)
        {
            button=1;
            button1.anims.play('Play_On', true);
            button2.anims.play('Controle_Off', true);
            button3.anims.play('Credit_Off', true);
            up = true ;

        }
        if (cursors.down.isUp)
        {
            down=false ;
        }
        if (cursors.up.isUp)
        {
            up=false ;
        }

        if (button==1 && buttonEnter.isDown && menu==true)
        {
            this.scene.start("Scene3");
            this.scene.pause("Menu");
        }
        else if (buttonEnter.isDown && menu==true && button==2)
        {   
            menu=false;
            resetB=true;
            this.scene.start("Controle");
            this.scene.pause("Menu");
        }
        else if (button==0 && buttonEnter.isDown && menu==true)
        {
            menu=false;
            resetB=true;
            this.scene.start("Credit");
            this.scene.pause("Menu");
        }

      
        if (buttonEnter.isUp )
        {
            menu = true ;
        }
    }  
}
}       

