/*
 * para ana
 * @author santuario
 * @date 2023/02/07
 */

//scp -ra /path/to/local/storage user@remote.host:/path/to/copy

/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */



// Font
var geoMidFont
var geoSmallFont;


var theta = 0.0; 

/*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */

function preload() {
  // Backgrund



  // Fonts
  geoMidFont = loadFont('assets/fonts/Geogtq-Md.otf');
  geoSmallFont = loadFont('assets/fonts/Geogtq-Ul.otf');

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  initialize();


}

function draw() {
  

drawInterface();
}

/*
 *****************************************
 *****************************************
 * INITIALIZE METHODS
 *****************************************
 *****************************************
 */

function initialize() {



}

function drawInterface(){
    
    background(255);
    fill(0);
    textAlign(CENTER, CENTER);
    noStroke();
    textFont(geoSmallFont);
    textSize(26*2);
    text('>> flores <<',windowWidth/2, windowHeight/3);
    text('>> para ana <<',windowWidth/2, 2*windowHeight/3);

}




function mousePressed() {
  window.location.href = "https://sanftuario.github.io/flores-para-ana/flores/index.html";
}