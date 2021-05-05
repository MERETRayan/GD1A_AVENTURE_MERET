class Credit extends Phaser.Scene{
    constructor(){
        super("Credit");
}
init(data){
    var deuxieme = false ; 
}
preload(){
    this.load.image("credit","Asset/credit.png");

}
create(){
    buttonB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    credit = this.add.image(0, 0, "credit").setOrigin(0, 0);
}
update(){
    if (resetB==true){
        buttonB.isUp=true;
        buttonB.isDown=false;
        resetB=false;
    }

    
    if (buttonB.isDown && credit1==true)
    {
        credit1=false;
        base=false;
        button=1;
        resetEnter=true;
        this.scene.start("Menu");
        this.scene.pause("Credit");
        
    }
    if (buttonB.isUp)
    {
        credit1 = true ;
    }
}
}