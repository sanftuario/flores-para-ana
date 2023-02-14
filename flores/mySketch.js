var r;
var g;
var b;

var flowers = [];
let flowerNum;

var branches = [];
var butterflySet = [];
var palette;

var fc;

let bg_shader;
let bg;

let resetFlag = false;

let count;
let resizeFlag = false;

var paletteSet = [
[180.78401156275234,74.68377880660476,81.47482319211926],
[200.95695572009322,89.05265968207227,94.24284106054074],
[107.17091188404405,11.547289901876837,181.60565656200544],
[164.595352671148,8.956564867615276,127.36578575315242],
[177.0867981767883,186.81885861744942,240.84022647991452],
[163.69285597243194,102.43289046666727,159.6712438359471],
[213.61712533042473,72.1978418998064,52.60336400084382],
[175.18104690825322,35.6474345171181,209.9597209099132],
[150.47315251526396,45.8596544656814,87.68348327067184],
[207.48983373811376,105.12775084741082,56.13416005473964],
[136.87520349210874,90.17048445393631,177.41282612971895],
[107.402722252707,73.36167220117004,150.39519129150779],
[170.85599900850542,77.61713478695094,11.40035881835685],
[201.15843869123185,82.84587050030157,205.81380771998187],
[159.54665726010774,93.67474406538884,169.08935636939478],
[125.36417069638814,27.84409073338521,173.7814795455485],
[84.52823043914435,146.23695597228487,177.30378978925842],
[209.4113520917184,103.30849494676197,50.467965558136626],
[193.3071619710591,49.51418684450536,0.327328203977999],
[225.1218804663503,142.00397034484655,80.70253924129935],
[189.26451904931253,43.45083795140574,104.64015264321102],
[120.21839419874766,60.38941942987424,131.55543878797994],
[200.24950209969512,99.67791059250627,190.81618707957426],
[228.26773098946637,124.36388402080821,36.70875828552364],
[227.1947945581642,157.69787285577078,4.456507056098081],
[223.29337445887083,190.90920973050666,224.0253920131413],
[197.23215925585453,85.60269255053194,164.21369730840044],
[198.54430288102205,175.88369580768844,219.18788446517232],
[247.49354270320433,159.69783226306484,85.29533189145593],
[194.30437938228852,115.48014446205897,218.6522879677502],
[199.93453932529025,119.91982288938696,162.27306105680367],
[220.6854755467275,148.025179774065,243.47423776913044],
[212.6779694814779,196.45608482016775,127.06923791603103],
[137.16471935012467,66.85761031596887,141.14252279331936],
[155.59607650844936,153.30945091687727,109.8112627808624],
[217.4283342912328,113.31984256929681,80.4842406872573],
[105.57483233021176,24.90541211982978,180.07540052456085],
[218.48826437176928,209.63052415052937,134.75458763055101],
[109.80455189800367,9.074683149932106,18.64841009813963],
[131.97587417265925,128.1342731905587,198.6286497047717],
[225.48191185698693,184.80191592958224,110.32748137635451],
[160.35564963162088,125.01880392102538,60.89571100285653],
[183.22942031083838,158.2146380158704,95.83402786111178],
[197.0773117964088,72.51611631987429,142.68562700302587],
[143.00815254263196,68.99773192594574,127.00364656736345],
[169.789302738587,81.28332850394739,120.75641099419036],
[216.92326703785568,141.36907080965696,39.85352261959146],
[178.3143981647947,59.363795483111026,209.3702960390692],
[111.77120598244454,13.592722144680419,111.18674790743164],
[229.70649611903144,110.77279745929962,152.14657390089107],
[151.46188222297943,104.61180865263098,182.93660168643694],
[126.42606364060128,14.043227526055954,34.39950313030589],
[190.51210778222696,52.40919942873392,180.22707258962436],
[172.16876601183836,127.49968355120681,74.51420227442185],
[106.30915184851854,28.991859582861043,55.51885889392394],
[221.33354597900382,127.17102107373803,23.188870210296983],
[236.36308514671254,133.1735112921448,136.09914761490205],
[225.20194571285276,41.910860366493736,97.14791760967404],
[150.2697168919464,9.088744489267643,25.271760711400354],
[226.5843101584873,118.43125859469558,210.49700922133326],
[197.87992756837247,10.324783320171798,31.63870816215459],
[187.18556977301404,58.85570454404872,40.52858443778547],
[136.09929153191996,22.84625984973184,94.41589734147954],
[166.91370532653528,124.96358708987995,165.6911270868728],
]

var bezierFlowerSet = [
    [[261.99,323.60],[258.37,310.12],[246.21,233.20],[267.91,255.88],[288.29,278.56],
        [258.37,310.12],[261.99,323.60]],
    [[261.99,323.60],[263.31,292.04],[242.60,254.89],[266.92,254.57],[294.20,255.88],
        [263.31,292.04],[261.99,323.60]],
    [[268.06,251.14],[271.77,264.11],[242.74,296.84],[263.12,319.08],[284.94,341.93],
        [271.77,264.11],[268.06,251.14]],
    [[284.87,311.02],[317.59,302.05],[315.28,294.52],[322.81,284.67],[331.78,275.11],
        [347.13,269.61],[351.19,271.35],[354.66,273.67],[363.64,279.75],[361.90,291.91],
        [360.45,304.07],[348.87,308.71],[339.60,310.15],[332.36,311.31],[317.88,301.76],
        [284.87,311.02]],

]

var bigFlowerSet = [
    [[355.05,208.23],[346.72,207.85],[326.30,134.47],[332.73,124.26],[342.19,118.96],
        [350.13,141.28],[353.53,141.28],[358.07,141.28],[363.37,116.31],[372.82,123.88],
        [380.77,131.82],[364.88,207.85],[355.05,208.23]],

    [[284.87,311.02],[277.92,303.78],[235.93,315.37],[224.06,314.21],[214.50,313.05],
        [209,299.73],[209.87,295.10],[211.02,291.91],[206.68,280.04],[226.08,272.51],
        [238.54,268.45],[277.92,304.94],[284.87,311.02]],
]

var bezierButterflySet = [
    [[284.87,311.02],[277.92,303.78],[235.93,315.37],[224.06,314.21],[214.50,313.05],
        [209,299.73],[209.87,295.10],[211.02,291.91],[206.68,280.04],[226.08,272.51],
        [238.54,268.45],[277.92,304.94],[284.87,311.02]],
    [[284.87,311.02],[317.59,302.05],[315.28,294.52],[322.81,284.67],[331.78,275.11],
        [347.13,269.61],[351.19,271.35],[354.66,273.67],[363.64,279.75],[361.90,291.91],
        [360.45,304.07],[348.87,308.71],[339.60,310.15],[332.36,311.31],[317.88,301.76],
        [284.87,311.02]],
    [[284.87,311.02],[284.87,311.02],[253.30,327.75],[242.01,380.75]],
    [[284.87,311.02],[284.87,311.02],[342.21,356.13],[328.89,380.45]]
]

function preload(){
		bg = createGraphics(windowWidth,windowHeight,WEBGL);
		bg_shader = bg.createShader(...opShaderSource());
}


function setup() {
    pixelDensity(1);
		frameRate(60);
		// setAttributes({ alpha: true });
		resetCanvas();
}

function resetCanvas(){
    flowers = [];

    branches = [];
    butterflySet = [];

    createCanvas(windowWidth,windowHeight);
    bg = createGraphics(windowWidth,windowHeight,WEBGL);
    bg_shader = bg.createShader(...opShaderSource());
    resetMatrix();
    pixelDensity(1);
    background(255);
		bg.background(255);

    angleMode(RADIANS);

    //flowerNum = int(random(8,20));
    flowerNum = int(map(mouseX,0,windowWidth,5,30));
    // flowerNum = 20;
    palette = loadColor();
    fc = palette[int(random(palette.length))];
    // fc = color([1.0,0.0,0.0]);

   // var preBranchL = mouseY;
    //var preBranchL = random(200,280);
    var preBranchL = int(map(mouseY,0,windowHeight,5,400));

    for(var i = 0;i < flowerNum;i++){
        branches[i] = new Branch(width/2,height-40/640*windowHeight,preBranchL);
        if (preBranchL + 40 > 280) {
            preBranchL -= random(20,40);
        }else if (preBranchL - 40 < 200) {
            preBranchL += random(20,40);
        }else {
            preBranchL += random([-1,+1])*random(20,40);
        }

        var index = 6;
        if (random(1)<0.5) {
            flowers[i] = new Flower(branches[i].points[index].x,branches[i].points[index].y,random(12,15),fc,random(0.2,0.3));
        }else {
            var hsl = rgbtohsl(red(fc),green(fc),blue(fc));
            var preH = hsl[0];
            hsl[0] = constrain(hsl[0]+randomGaussian(0,20),0,360);
            if (!(preH <= 280 && preH >= 60)) {
                while(hsl[0] <= 280 && hsl[0] >= 60){
                    hsl[0] = constrain(hsl[0]+randomGaussian(0,60),0,360);
                }
            }
            var rgb = hsltorgb(hsl[0],hsl[1],hsl[2]);
            cc = color(rgb[0],rgb[1],rgb[2]);

            flowers[i] = new Flower(branches[i].points[index].x,branches[i].points[index].y,random(12,15),cc,random(0.2,0.3));
        }


    }

    for(var i = 0;i < 4;i++){
        butterflySet.push(calShape(bezierButterflySet,i));
    }
}

function draw() {
    // console.log(frameRate);
    if (mouseIsPressed || resizeFlag){
        resetCanvas();
        bg.background(255);
        frameCount = 1;
        count = 0;
        resizeFlag = false;
    }

    if (frameCount == 1) {
        bg.push();
        bg.shader(bg_shader);
        // bg.background(255);
        bg_shader.setUniform("u_resolution", [width, height]);
        bg_shader.setUniform("u_color", [red(fc)/255.0,green(fc)/255.0,blue(fc)/255.0]);
        bg.rect(0,0,width,height);
        bg.pop();
        image(bg,0,0,width,height);



        let scale_value = 1/430.0*height-0.26744186;
        push();
        translate(width/2,height/2);
        scale(scale_value,scale_value);
        translate(-width/2,-height/2);
        translate(0,-18/43*height+108.1395);

        for (var i = 0; i < branches.length; i++) {
            push();

            var roA = map(flowerNum,8,100,PI/20,PI/6);

            translate(branches[i].points[2].x,branches[i].points[2].y);
            var angle = map(i,0,branches.length-1,-roA,roA);
            rotate(angle);
            translate(-branches[i].points[2].x,-branches[i].points[2].y);
            branches[i].display();
            push();
            flowers[i].display();
            pop();

            pop();
        }

        drawButterfly();
        pop();
        count = 0;
    }

    count += 1;
    //console.log(count);

}



class Flower {
    constructor(tempX,tempY,petalsNum,tempC,tempS) {
        var flowerNum = bezierFlowerSet.length + bigFlowerSet.length;
        this.x = tempX;
        this.y = tempY;
        this.petals = int(petalsNum);
        this.color = tempC;
        this.pardonNum = 100;
        this.size = tempS;

        if (random(1) < 0.7) {
            this.aside = false;
        }else {
            this.aside = true;
        }

        var shapeIndex = int(random(flowerNum));
        if (shapeIndex < bezierFlowerSet.length) {
            this.shape = calShape(bezierFlowerSet,shapeIndex);
        } else {
            this.shape = calShape(bigFlowerSet,shapeIndex-bezierFlowerSet.length);
            this.petals = int(random(8,10));
            if (!this.aside) {
                this.size /= 2;
            }
        }

        if (this.aside) {
            this.rotateA = random(PI/3,PI/2);
            this.petals = int(random(10,12));
            this.rotateAs = random(-PI/4,PI/4);
        }else {
            this.rotateA = TWO_PI;
        }


    }

    display(){
        translate(this.x,this.y);
        scale(this.size);
        translate(-this.x,-this.y);


        for(var j = 0;j < this.petals-1;j++){
            push();
            translate(this.x,this.y);
            rotate(map(j,0,this.petals-1,0,this.rotateA));
            translate(-this.x,-this.y);

            translate(this.x,this.y);
            if (this.aside) {
                scale(randomGaussian(1,0.05));
            }else {
                scale(randomGaussian(1,0.03));
            }
            translate(-this.x,-this.y);

            if (this.aside) {
                translate(this.x,this.y);
                rotate(this.rotateAs);
                translate(-this.x,-this.y);
            }

            for(var i = 0;i < this.pardonNum;i++){
                push();
                var s = (this.pardonNum-i)/this.pardonNum;
                var a = constrain(map(i,50,this.pardonNum,0,100),0,100);
                translate(this.x,this.y);
                scale(s);
                translate(-this.x,-this.y);

                this.color.setAlpha(a);

                noStroke();
                fill(this.color);

                beginShape();
                vertex(this.x,this.y);

                for(var k = 1;k < this.shape.length;k+=3){
                    bezierVertex(this.shape[k].x+this.x,this.shape[k].y+this.y,
                                 this.shape[k+1].x+this.x,this.shape[k+1].y+this.y,
                                this.shape[k+2].x+this.x,this.shape[k+2].y+this.y,)
                }

                endShape();
                pop();
            }

            translate(this.x,this.y);
            if (this.aside) {
                scale(randomGaussian(1,0.05));
            }else {
                scale(randomGaussian(1,0.02));
            }
            translate(-this.x,-this.y);

            beginShape();
            this.color.setAlpha(100);
            fill(this.color);
            noStroke();
            vertex(this.x,this.y);

            for(var k = 1;k < this.shape.length;k+=3){
                bezierVertex(this.shape[k].x+this.x,this.shape[k].y+this.y,
                             this.shape[k+1].x+this.x,this.shape[k+1].y+this.y,
                            this.shape[k+2].x+this.x,this.shape[k+2].y+this.y,)
            }

            endShape();
            pop();
        }
    }
}

class Point {
    constructor(tempX,tempY) {
        this.x = tempX;
        this.y = tempY;
    }
}


function calShape(arrSet,i) {
    var points = [];
    for(var j = 0;j < arrSet[i].length;j++){
        points.push(new Point(arrSet[i][j][0]-arrSet[i][0][0],
            arrSet[i][j][1]-arrSet[i][0][1]));
    }

    return points;
}


class Branch {
    constructor(tempX,tempY,tempL) {
        this.x = tempX;
        this.y = tempY;
        this.l = tempL;

        this.points = [];
        this.num = 6;

        this.points.push(new Point(this.x,this.y));

        for(var i = 0;i < this.num;i++){
            this.points.push(new Point(randomGaussian(this.x,map(i,0,this.num-1,0,5)),this.y-this.l/this.num*i+randomGaussian(0,5)));
        }

        this.points = this.points.sort(function (a, b) {
        return b.y - a.y;
        })
    }

    display(){
        push();
        noFill();
        stroke(75,87,62,random(100,255));
        strokeWeight(6);
        for(var i = 1;i < this.points.length;i++){
            strokeWeight(6-6/this.points.length*i);
            line(this.points[i-1].x,this.points[i-1].y,this.points[i].x,this.points[i].y);
        }
        pop();
    }
}


function drawButterfly() {
    var x_all = 0;
    var y_all = 0;
    var butterc = fc;
    var lineDelta = map(flowerNum,8,100,3,8);

    for(var i = 0;i < branches.length;i++){
        x_all += branches[i].points[2].x;
        y_all += branches[i].points[2].y;
    }

    x_all /= branches.length;
    y_all /= branches.length;

    for(var i = 0;i < branches.length;i++){
        push();
        butterc.setAlpha(120);
        stroke(butterc);
        strokeWeight(3);
        noFill();
        var deltaY = map(i,0,branches.length-1,-5,5)+randomGaussian(0,2);
        line(x_all-lineDelta,y_all + deltaY,x_all+lineDelta,y_all+deltaY);

        pop();
    }

    push();
    var butternum = 1000;

    for(var i = 0;i < butternum;i++){
        var s = (butternum-i)/butternum/2;
        var a = constrain(map(i,0,butternum,0,200),0,random(200));
        push();
        translate(x_all,y_all);
        scale(s);
        translate(-x_all,-y_all);

        noFill();
        strokeWeight(1);
        butterc.setAlpha(a);
        stroke(butterc);

        beginShape();
        vertex(x_all,y_all);

        for(var k = 1;k < butterflySet[0].length;k+=3){
            bezierVertex(butterflySet[0][k].x+x_all,butterflySet[0][k].y+y_all,
                         butterflySet[0][k+1].x+x_all,butterflySet[0][k+1].y+y_all,
                        butterflySet[0][k+2].x+x_all,butterflySet[0][k+2].y+y_all)
        }

        endShape();

        beginShape();
        vertex(x_all,y_all);

        for(var k = 1;k < butterflySet[1].length;k+=3){
            bezierVertex(butterflySet[1][k].x+x_all,butterflySet[1][k].y+y_all,
                         butterflySet[1][k+1].x+x_all,butterflySet[1][k+1].y+y_all,
                        butterflySet[1][k+2].x+x_all,butterflySet[1][k+2].y+y_all)
        }

        endShape();

        bezier(x_all,y_all,x_all,y_all,butterflySet[2][2].x+x_all,butterflySet[2][2].y+y_all,
            butterflySet[2][3].x+x_all,butterflySet[2][3].y+y_all);

        bezier(x_all,y_all,x_all,y_all,butterflySet[3][2].x+x_all,butterflySet[3][2].y+y_all,
            butterflySet[3][3].x+x_all,butterflySet[3][3].y+y_all);
        pop();
    }

}

function loadColor() {
    var palette = [];
    for (var i = 0; i < paletteSet.length; i++) {
        palette[i] = color(paletteSet[i][0],paletteSet[i][1],paletteSet[i][2]);
    }

    return palette;
}

function rgbtohsl(r,g,b){
	r=r/255;
	g=g/255;
	b=b/255;

	var min=Math.min(r,g,b);
	var max=Math.max(r,g,b);
	var l=(min+max)/2;
	var difference = max-min;
	var h,s,l;
	if(max==min){
		h=0;
		s=0;
	}else{
		s=l>0.5?difference/(2.0-max-min):difference/(max+min);
		switch(max){
			case r: h=(g-b)/difference+(g < b ? 6 : 0);break;
			case g: h=2.0+(b-r)/difference;break;
			case b: h=4.0+(r-g)/difference;break;
		}
		h=Math.round(h*60);
	}
	s=Math.round(s*100);
	l=Math.round(l*100);
	return [h,s,l];
}

function hsltorgb(h,s,l){
	var h=h/360;
	var s=s/100;
	var l=l/100;
	var rgb=[];

	if(s==0){
		rgb=[Math.round(l*255),Math.round(l*255),Math.round(l*255)];
	}else{
		var q=l>=0.5?(l+s-l*s):(l*(1+s));
		var p=2*l-q;
		var tr=rgb[0]=h+1/3;
		var tg=rgb[1]=h;
		var tb=rgb[2]=h-1/3;
		for(var i=0; i<rgb.length;i++){
			var tc=rgb[i];
			if(tc<0){
				tc=tc+1;
			}else if(tc>1){
				tc=tc-1;
			}
			switch(true){
				case (tc<(1/6)):
					tc=p+(q-p)*6*tc;
					break;
				case ((1/6)<=tc && tc<0.5):
					tc=q;
					break;
				case (0.5<=tc && tc<(2/3)):
					tc=p+(q-p)*(4-6*tc);
					break;
				default:
					tc=p;
					break;
			}
			rgb[i]=Math.round(tc*255);
		}
	}

	return rgb;
}

function keyPressed() {
    if (key == 's'){
        saveCanvas('myCanvas', 'jpg');
    }else if (key == 'r') {
        resetFlag = true;
    }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resizeFlag = true;
}


function mousePressed() {
    
}