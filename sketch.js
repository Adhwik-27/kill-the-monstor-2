var superhero
var monster 
var bg 

const Engine = matter.Engine
const World = matter.World
const Bodies  = matter.Bodies
const Mouse = matter.Mouse
function preload() {
this.image=superhero.loadImage (" Superhero-02.png");
this.image=monster.loadImage (" Monster-01.png");
this.image = bg.loadimage ("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  ground = new Ground(600,6001200,20);

}

function draw() {
  Ground.display();
  background(0);

}

