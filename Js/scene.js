class Scene extends Phaser.Scene{
    constructor(){
        super("Scene1");
    }
    init(data){
    }
    preload(){

        this.load.image("bg1","Asset/p.jpg");
        this.load.spritesheet("Perso","Asset/Perso_Aventure.png" , { frameWidth: 25 , frameHeight: 32 });
        this.load.spritesheet("Vie","Asset/life.png" , { frameWidth: 80, frameHeight: 39.5 });
        this.load.spritesheet("NbOeuf","Asset/CompteOeuf.png" , { frameWidth: 32, frameHeight: 26 });
        this.load.tilemapTiledJSON('Foret', 'Asset/Foret.json');
        this.load.image('Map',"Asset/Asset_Foret.png");
        this.load.image('Egg',"Asset/Oeuf.png");
        this.load.image("Barriere","Asset/Barriere.png");
        
    }

    create(){
       

        const map = this.make.tilemap({ key: 'Foret' })
        const tileset = map.addTilesetImage('Sans titre-2','Map',32,26)
        map.createStaticLayer('sol', tileset)
        this.surSol = map.createStaticLayer('sur_Sol', tileset)
        this.arbre = map.createStaticLayer('Arbre', tileset)
        player = this.physics.add.sprite(x,y,"Perso");
        player.body.setSize(20,18);
        this.arbreD =map.createStaticLayer('Arbre_2', tileset)
        this.tronc =map.createStaticLayer('Tronc', tileset)
        this.arbreT =map.createStaticLayer('Arbre_3', tileset)
        this.sorti =map.createStaticLayer('Sorti', tileset)
        this.sortiD =map.createStaticLayer('Sorti_2', tileset)
        this.sortiT =map.createStaticLayer('Sorti_3', tileset)
        this.eau =map.createStaticLayer('Eau', tileset)
        this.bloquage =map.createStaticLayer('Bloquage', tileset)

        egg = this.physics.add.sprite(1000,100,"Egg");
        barriere = this.physics.add.staticGroup();
        barriere1 = barriere.create(1260,550,"Barriere");
        this.surSol.setCollisionByExclusion(-1, true);
        this.sorti.setCollisionByExclusion(-1, true);
        this.sortiT.setCollisionByExclusion(-1, true);
        this.bloquage.setCollisionByExclusion(-1, true);

        ennemi = this.physics.add.sprite(200,90,"Ennemi");
        ennemi2 = this.physics.add.sprite(390,400,"Ennemi");

        this.physics.add.collider(player, this.surSol);
        this.physics.add.collider(player, this.sorti,Sortie23);
        this.physics.add.collider(player, this.sortiT,Sortie21);
        this.physics.add.collider(player, this.bloquage);
        this.physics.add.collider(player, egg,RamasseOeuf);
        this.physics.add.collider(player, ennemi,Degat);
        this.physics.add.collider(player, ennemi2,Degat);
        this.physics.add.collider(ennemi,this.blocage);
        this.physics.add.collider(ennemi2,this.blocage);
        this.physics.add.collider(player,barriere,openBarriere);


        cursors = this.input.keyboard.createCursorKeys();
        buttonI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        
        
        vie = this.physics.add.sprite(470,280,"Vie");
        vie.setScrollFactor(0,0);
        nbOeuf = this.physics.add.sprite(560,280,"NbOeuf");
        nbOeuf.setScrollFactor(0,0);
       

        player.setBounce(0.0);
        player.setCollideWorldBounds(true);
        this.cameras.main.startFollow(player);
        this.cameras.main.setBounds(0, 0, 1280, 780);
        this.cameras.main.setZoom(3);
        
        
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
            key: '1Oeuf',
            frames: [ { key: 'NbOeuf', frame: 1 } ],
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
        tweens = this.tweens.add({
            targets: ennemi,
            x: 350,
            y:90,
            paused: false,
            yoyo: true,
            repeat: -1
        });
        tween = this.tweens.add({
            targets: ennemi2,
            x: 540,
            y:400,
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
            actuVie=false;
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
        //Controle Manette 
        if(recovery == true){
            timerRecovery = timerRecovery + 1
            if(timerRecovery >= 50){
                recovery = false
                timerRecovery = 0
            }
        }


        
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
            if (buttonI.isDown)
            {
            }
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
                if (sceneDeuxTrois==true )
                {
                    x = 200;
                    y = 40;
                    actuVie=true;
                    sceneDeuxTrois=false;
                    resetCursors=true;
                    this.scene.start("Scene3");
                    this.scene.pause("Scene1");
                }
                else if (sceneDeuxUn==true && barriere==false )
                {
                    barriere1.disableBody(true,true),
                    oeuf=false,
                    x = 40;
                    y = 300;
                    actuVie=true;
                    sceneDeuxUn=false;
                    resetCursors=true;
                    this.scene.start("Scene2");
                    this.scene.pause("Scene1");
                }

            }
            
        }
}
function Sortie23(){
    sceneDeuxTrois=true;
}
function Sortie21(){
    sceneDeuxUn=true;
}

function Degat(player,ennemie) 
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
    recovery=true
    }

    function RamasseOeuf()
    {
        egg.disableBody(true,true);
        oeuf = true ;
        oeufnb = 1 ;
    }

    function openBarriere()
    {
        if(oeuf==true)
        {
            barriere=false;
        }
    }