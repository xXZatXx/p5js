var width = 600;
var barVal = 0;
holding = false;
go = 'right';
scores = [];
spots = [];
main = 0;
maxScore = 10;
fullScore = 0;
bestScores = 0;
barX = width / 2 - 150;
barY = 200;

function setup() {
	createCanvas(600, 600);
	frameRate(60);

	spot = new spot(random(width / 2 - 150 + 25 + 20, width / 2 - 150 + 25 + 250), 225);
	spots.push(spot);

	btn = createButton('Save');
	btn.mousePressed(pressy);
	btn.position(width - 50, 2);

  if(document.cookie != ''){
    console.log('loadigg cookies')
    maxScore = loadCookie('maxScore');
    fullScore = loadCookie('fullScore');
    bestScores = loadCookie('bestScores');
    maxScore = int(maxScore);
    fullScore = int(fullScore);
    bestScores = int(bestScores);
  } else {
    maxScore = 10;
    fullScore = 0;
    bestScores = 0;
  }
}

function draw() {
	background(30, 30, 40);
	mouseOverBar = mouseX >= barX && mouseX <= barX + 300 && mouseY >= barY && mouseY <= barY + 50;

	if (holding == true && mouseOverBar) {
		if (barX + 20 + 5 + barVal + 17.5 < barX + 300 - 10 && go == 'right') {
			barVal += 3;
		} else {
			go = 'left';
		}

		if (barVal >= 0 && go == 'left') {
			barVal -= 3;
		} else {
			go = 'right';
		}
	}

	//BAR
	stroke(100);
	strokeWeight(5);
	fill(155);
	rect(barX, barY, 300, 50, 100);

	spots[0].show();

	//BALL
	ballX = barX + 20 + 5 + barVal;
	ballY = 200 + 20 + 5;
	fill(200);
	stroke(120);
	circle(ballX, ballY, 35);

	stroke(255, 0, 0);
	//point((width/2 - 150) + 20 + 5 + barVal + 17.5, 200 + 20 + 5) #DEBUG

	//points = int(map(barVal, 0, 250, 0, 100))

	yeet = int(map(dist(ballX, ballY, spot.x, spot.y), 0, maxScore, 0, maxScore));

	points = maxScore - yeet; //maxScore - int(dist(ballX, ballY, spot.x, spot.y));
	if (points < 0) {
		points = 0;
	}

	//print(points)

	//Floating scores
	for (let i = 0; i < scores.length; i++) {
		scores[i].update();
		scores[i].show();
		if (scores[i].dead()) {
			scores.splice(i, 1);
		}
	}

	//SCORE
	textAlign(CENTER, CENTER);
	textSize(40);
	fill(255);
	stroke(0);
	text(fullScore, width / 2, height / 2);
}

function mousePressed() {
	if (mouseOverBar) {
		holding = true;
	}
}

function mouseReleased() {
	if (mouseOverBar) {
		holding = false;
		barVal = 0;
		fullScore += points;
		if (points == maxScore) {
			bestScores++;
			scr = new score(mouseX, 200, points, [ 255, 235, 0 ], 40, 3);
			scores.push(scr);
		} else {
			bestScores = 0;
			scr = new score(mouseX, 200, points, [ 225, 225, 0 ], 20, 5);
			scores.push(scr);
		}

		spot.x = random(barX + 25 + 20, barX + 25 + 250);
		spot.y = ballY;
	}
}

//closing
/*
window.onbeforeunload = function() {
	saveCookies([ maxScore, fullScore, bestScores ], [ 'maxScore', 'fullScore', 'bestScores' ], 30);
};
*/

//saving
setInterval(function() {
	saveCookies([ maxScore, fullScore, bestScores ], [ 'maxScore', 'fullScore', 'bestScores' ], 30);
}, 30 * 1000);

//save btn
function pressy() {
	saveCookies([ maxScore, fullScore, bestScores ], [ 'maxScore', 'fullScore', 'bestScores' ], 30);
}
