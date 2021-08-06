var bg1, bookSI, cupI, dustbinI, lampI, plantI;
function preload(){
    bg1= loadImage("bg1.jpg");
    bookSI= loadImage("book set.jpg");
    cupI= loadImage("cup.jpg");
    dustbinI= loadImage("dustbin.jpg");
    lampI= loadImage("lamp.jpg");
    plantI= loadImage("plant.jpg");
}

function setup(){
createCanvas(800,800);
}

function draw(){
    background(bg1);
    textSize(20);
    fill("red")
    text("x: "+mouseX,100,50)
    text("y: "+mouseY,100,100)
/*    //dustbin
    x=60-116
    y=602-700
lamp
x=675-727
y=488-598
plant
x=504-530
y=285-382
book
x=570-610
y=298-383
cup
x=644-660
y=585-596
    */
}
function mousePressed(){
    x=mouseX
    y= mouseY
    
    if(x> 675 ||x<116)
    {
        if(y>488 ||y<700)
        {
            lamp=createSprite(675,488);
            lamp = addImage(lampI);
        }
    }
    if(x> 60 ||x<727)
    {
        if(y>602 ||y<598)
        {
            dustbin=createSprite(60,602);
            dustbin = addImage(dustbinI);
        }
    }
    if(x> 504 ||x<530)
    {
        if(y>285 ||y<382)
        {
            plant=createSprite(504,285);
            plant = addImage(plantI);
        }
    }
    if(x> 570 ||x<610)
    {
        if(y>298 ||y<383)
        {
            bookS=createSprite(570,298);
            bookS = addImage(bookSI);
        }
    }
    if(x> 644 ||x<660)
    {
        if(y>585 ||y<596)
        {
            cup=createSprite(644,585);
            cup = addImage(cupI);
        }
    }
}
