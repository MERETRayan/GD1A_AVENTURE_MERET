class Scene2 extends Phaser.Scene{
    constructor(){
        super("Scene2");
    }
    init(data){
    }
    preload(){

        this.load.spritesheet("Perso","Asset/Perso_Aventure.png" , { frameWidth: 25 , frameHeight: 32 });
        this.load.tilemapTiledJSON('Lac', 'Asset/Lac.json');
        this.load.image('Map',"Asset/Asset_Foret.png");
        this.load.spritesheet("Ennemi","Asset/Renard.png", { frameWidth: 32 , frameHeight: 26 });
        this.load.spritesheet("Vie","Asset/life.png" , { frameWidth: 80, frameHeight: 39.5 });
        this.load.spritesheet("NbOeuf","Asset/CompteOeuf.png" , { frameWidth: 32, frameHeight: 26 });

    }

    create(){
       

        const map3 = this.make.tilemap({ key: 'Lac' })
        const tileset = map3.addTilesetImage('Asset_Foret','Map',32,26)
        map3.createStaticLayer('Sol', tileset)
        this.surSol = map3.createStaticLayer('Sur_Sol', tileset)
        this.arbre = map3.createStaticLayer('Arbre_2', tileset)
        player = this.physics.add.sprite(x,y,"Perso");
        player.body.setSize(20,18);
        this.arbre31 =map3.createStaticLayer('Maison', tileset)
        this.tronc3 =map3.createStaticLayer('Tronc', tileset)
        this.arbre32 =map3.createStaticLayer('Arbre', tileset)
        this.sorti12 =map3.createStaticLayer('Sortie', tileset)
        this.bloquage3 =map3.createStaticLayer('Blocage', tileset)
        

        this.sorti12.setCollisionByExclusion(-1, true);
        this.bloquage3.setCollisionByExclusion(-1, true);

        ennemi = this.physics.add.sprite(100,250,"Ennemi");
        ennemi2 = this.physics.add.sprite(1000,500,"Ennemi");

        this.physics.add.collider(player, this.surSol);
        this.physics.add.collider(player, this.sorti12,Sortie12);
        this.physics.add.collider(player, this.bloquage3);
        this.physics.add.collider(player, ennemi,Degat);
        this.physics.add.collider(player, ennemi2,Degat);
        this.physics.add.collider(ennemi,this.blocage);
        this.physics.add.collider(ennemi2,this.blocage);


        cursors = this.input.keyboard.createCursorKeys();
        buttonI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        
        player.setBounce(0.0);
        player.setCollideWorldBounds(true);
        this.cameras.main.startFollow(player);
        this.cameras.main.setBounds(0, 0, 1280, 780);
        this.cameras.main.setZoom(3);
        
        
        vie = this.physics.add.sprite(470,280,"Vie");
        vie.setScrollFactor(0,0);
        nbOeuf = this.physics.add.sprite(560,280,"NbOeuf");
        nbOeuf.setScrollFactor(0,0);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Perso', { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('Perso', { start: 9, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('Perso', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('Perso', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right_Base',
            frames: [ { key: 'Perso', frame: 10 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'left_Base',
            frames: [ { key: 'Perso', frame: 7 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down_Base',
            frames: [ { key: 'Perso', frame: 1 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up_Base',
            frames: [ { key: 'Perso', frame: 4 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'TroisC',
            frames: [ { key: 'Vie', frame: 0 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'DeuxC',
            frames: [ { key: 'Vie', frame: 1 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'UnC',
            frames: [ { key: 'Vie', frame: 2 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'ZeroC',
            frames: [ { key: 'Vie', frame: 3 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '0Oeuf',
            frames: [ { key: 'NbOeuf', frame: 0 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'mob',
            frames: this.anims.generateFrameNumbers('Ennemi', { start: 0, end: 5 }),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: '1Oeuf',
            frames: [ { key: 'NbOeuf', frame: 1 } ],
            frameRate: 10,
            repeat: -1
        });
        tweens = this.tweens.add({
            targets: ennemi,
            x: 250,
            y:250,
            paused: false,
            yoyo: true,
            repeat: -1
        });
        tween = this.tweens.add({
            targets: ennemi2,
            x: 1150,
            y:500,
            paused: false,
            yoyo: true,
            repeat: -1
        });

    }

    update(){
        if (oeuf==true)
        {
            nbOeuf.anims.play("1Oeuf",true);
        }
        else 
        {
            nbOeuf.anims.play("0Oeuf",true);
        }
        if (actuVie==true)
        {
            if (life==2)
            {
                vie.anims.play("DeuxC",true);
            }
            else if (life==1)
            {
                vie.anims.play("UnC",true);
            }
        }
        if (gameOver==true)
        {
            vie.anims.play("ZeroC",true);
            this.physics.pause();
            return;
        }
        if (anim==true)
        {
            ennemi.anims.play("mob",true);
            ennemi2.anims.play("mob",true);
        }

        if(recovery == true){
            timerRecovery = timerRecovery + 1
            if(timerRecovery >= 50){
                recovery = false
                timerRecovery = 0
            }
        }
        
        //Controle Manette 
        
        if (resetCursors==true)
        {
            if (paddleConnected==true)
            {
                paddle.right=false ;
                paddle.left=false ;
                paddle.up=false;
                paddle.down=false;
                paddle.A=false;
            }
            else 
            {
                cursors.right.isDown=false;
                cursors.right.isUp=true;
                cursors.left.isDown=false;
                cursors.left.isUp=true;
                cursors.down.isDown=false;
                cursors.down.isUp=true;
                cursors.up.isDown=false;
                cursors.up.isUp=true;
            }
            resetCursors=false;
        }
        if (paddleConnected==true){
              //Inventaire 

              // Bas
            if (paddle.down){
                player.setVelocityY(speed);
                player.setVelocityX(0);
                bDown=true;
    
                //Diagonale 
                if (paddle.right){
                    player.setVelocityX(speed);
                }
                if (paddle.left){
                    player.setVelocityX(-speed);
                }
                }
            //Droite
            else if (paddle.right){
                player.setVelocityX(speed);
                player.setVelocityY(0);
                bRight=true;
    
                    //Diagonale
                    if (paddle.down){
                        player.setVelocityY(speed);
                        bRight=false;
                        bDown=true;
                    }
                    if (paddle.up){
                        player.setVelocityY(-speed);
                        bRight=false;
                        bUp=true;
                }
    
                }
            //Gauche
            else if (paddle.left){
                player.setVelocityX(-speed);
                player.setVelocityY(0);
                bLeft=true;
    
                //Diagonale
                if (paddle.up){
                    player.setVelocityY(-speed);
                    bLeft=false;
                    bUp=true;
                    }
                if (paddle.down){
                    player.setVelocityY(speed);
                    bDown=false;
                    bUp=true;
                    }
    
                    }
            //Haut
            else if (paddle.up){
                player.setVelocityY(-speed);
                player.setVelocityX(0);
                bUp=true;
                //Diagonale
                    if (paddle.right){
                        player.setVelocityX(speed);
                    }
                    if (paddle.left){
                        player.setVelocityX(-speed);
                }
                }
            //Arret
                else {
                    player.setVelocityX(0);
                    player.setVelocityY(0); 
                    if (bRight==true)
                    {
                        player.anims.play("right_Base",true);
                    } 
                    if (bLeft==true)
                    {
                        player.anims.play("left_Base",true);
                    } 
                    if (bUp==true)
                    {
                        player.anims.play("up_Base",true);
                    } 
                    if (bDown==true)
                    {
                        player.anims.play("down_Base",true);
                    } 
                    bDown=false ;
                    bRight=false ;
                    bLeft=false ;
                    bUp=false ; 
                } 
            }
        //Controle Clavier 
        else {
            //Inventaire 
           
        // Controle Clavier
              // Bas
              if (cursors.down.isDown){
                player.setVelocityY(speed);
                player.setVelocityX(0);
                player.anims.play("down",true);
                bDown=true;
    
                //Diagonale 
                if (cursors.right.isDown){
                    player.setVelocityX(speed);
                    
                }
                if (cursors.left.isDown){
                    player.setVelocityX(-speed);
                }
                }
            //Droite
                else if (cursors.right.isDown){
                player.setVelocityX(speed);
                player.setVelocityY(0);
                player.anims.play("right",true);
                bRight=true;
    
                //Diagonale
                if (cursors.down.isDown){
                    player.setVelocityY(speed);
                    player.anims.play("right",false);
                    player.anims.play("down",true);
                    bRight=false;
                    bDown=true;
                }
                if (cursors.up.isDown){
                    player.setVelocityY(-speed);
                    player.anims.play("right",false);
                    player.anims.play("up",true);
                    bRight=false;
                    bUp=true;

                }
    
                }
            //Gauche
                else if (cursors.left.isDown){
                player.setVelocityX(-speed);
                player.setVelocityY(0);
                player.anims.play("left",true);
                bLeft=true;
                //Diagonale
                if (cursors.up.isDown){
                    player.setVelocityY(-speed);
                    player.anims.play("left",false);
                    player.anims.play("up",true);
                    bLeft=false;
                    bUp=true;

                }
                if (cursors.down.isDown){
                    player.setVelocityY(speed);
                    player.anims.play("left",false);
                    player.anims.play("down",true);
                    bLeft=false;
                    bDown=true;
                }
    
                }
            //Haut
                else if (cursors.up.isDown){
                player.setVelocityY(-speed);
                player.setVelocityX(0);
                player.anims.play("up",true);
                bUp=true;
                //Diagonale
                if (cursors.right.isDown){
                    player.setVelocityX(speed);
                }
                if (cursors.left.isDown){
                    player.setVelocityX(-speed);
                }
                }
            //Arret
                else {
                player.setVelocityX(0);
                player.setVelocityY(0); 
                if (bRight==true)
                {
                    player.anims.play("right_Base",true);
                } 
                if (bLeft==true)
                {
                    player.anims.play("left_Base",true);
                } 
                if (bUp==true)
                {
                    player.anims.play("up_Base",true);
                } 
                if (bDown==true)
                {
                    player.anims.play("down_Base",true);
                } 
                bDown=false ;
                bRight=false ;
                bLeft=false ;
                bUp=false ;
                } 
                if (sceneUnDeux==true)
                {
                    x = 1240;
                    y = 550;
                    sceneUnDeux=false;
                    resetCursors=true;
                    actuVie=true;
                    this.scene.start("Scene1");
                    this.scene.pause("Scene2");
                }
            }
            
        }
}
function Sortie12(){
    sceneUnDeux=true;
}

function Degat() 
    {
        if (life>0 && recovery==false){
            life-=1;
            actuVie=true;
            if (life==2){
                player.setTint(0x8224B8);
                player.setTint(0xF5BAFD);
                player.setTint(0xBADCFD);
                player.setTint(0xBAFDC8);
                player.setTint(0xFABAFD);
                player.setTint(0xFDBAC7);

        }
            if (life==1){
                player.setTint(0x8224B8);
                player.setTint(0xF5BAFD);
                player.setTint(0xBADCFD);
                player.setTint(0xBAFDC8);
                player.setTint(0xFABAFD);
                player.setTint(0xFDBAC7);
        }   
            if (life==0){
                player.setTint(0x8224B8);
                player.setTint(0xF5BAFD);
                player.setTint(0xBADCFD);
                player.setTint(0xBAFDC8);
                player.setTint(0xFABAFD);
                player.setTint(0xFDBAC7);
                gameOver=true;
        }   
    }
    recovery=true;
    }

  