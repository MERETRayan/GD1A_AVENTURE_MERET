class Controle extends Phaser.Scene{
    constructor(){
        super("Controle");
}
init(data){
    var deuxieme = false ; 
}
preload(){
    this.load.image("controle","Asset/controle.png");

}
create(){
    buttonB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    controle = this.add.image(0, 0, "controle").setOrigin(0, 0);
}
update(){
    if (resetB==true){
        buttonB.isUp=true;
        buttonB.isDown=false;
        resetB=false;
    }

    
    if (buttonB.isDown && controle1==true)
    {
        controle1=false;
        base=false;
        button=1;
        resetEnter=true;
        this.scene.start("Menu");
        this.scene.pause("Controle");
        
    }
    if (buttonB.isUp)
    {
        controle1 = true ;
    }
}
}