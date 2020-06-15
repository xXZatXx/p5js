/*function createCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	var expires = 'expires=' + d.toUTCString();
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function readCookie(cname) {
	var name = cname + '=';
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

function saveCookies(cookiesArr, cookiesNames, ex) {
	console.log('saving...', cookiesArr.length);
	for (let i = 0; i < cookiesArr.length; i++) {
		console.log(cookiesArr[i]);
		if (cookiesArr[i] == 'NaN' || cookiesArr[i] == 'Undifined') {
			if (cookieNames[i] == 'maxScore') {
				cookieArr[i] = 10;
			} else {
				cookiesArr[i] = 0;
			}
		}
		createCookie(cookiesNames[i], cookiesArr[i], ex);
	}

	//createCookie('fullScore', fullScore, '30');
	//createCookie('bestScores', bestScores, '30');
	console.log('saved');

	//if(maxScore == '' || maxScore == 'NaN'){maxScore = 0;}
	//if(fullScore == '' || fullScore == 'NaN'){fullScore = 0;}
	//if(bestScores == '' || bestScores == 'NaN'){bestScores = 0;}
}

function loadCookie(cname) {
	cookName = cname;
	cookie = readCookie(cname);
	console.log(cookName);
	if (cookie != parseInt(cookie, 10)) {
		if (cname == 'maxScore') {
			cookie = 10;
			return cookie;
		} else {
			cookie = 0;
			return cookie;
		}
	}
	return cookie;
}
*/

function saveVar(variable, variableName) {
    localStorage.setItem(variableName, JSON.stringify(variable));
}

function loadVar(variableName) {
    return JSON.parse(localStorage.getItem(variableName));
}