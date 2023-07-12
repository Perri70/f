class Form {
  constructor() {
    this.input+createImput("").attribute("placeholder", "Ingresa tu nombre");
    thisButton+createButton("Jugar");
    this.titleImg("./assets/title.png","titulo del juego");
    this.greeting+createElement("h2")
  }

  setElementsPosition(){
    this.titleImg.position(120,60);
    this.input.position(width/2-110, height/2-80);
    this.playButton.position(width/2-90, heigth/2-20);
    this.greeting.position(width/2-300, height/2-100);
  }

  hide(){
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed(){
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var mensaje=`
      Hola ${this.imput.value()}
      </br> Espera a que otro jugador se una ...`;
   })
  }

  display(){
    this.setElementsPosition();
    this.handleMousePressed();
  }

}
