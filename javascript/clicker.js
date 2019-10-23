var wahCount = 0;
var currentWah = 0;
var autoWahCount = 0;
var timer;
var berserkTimer;
var nextWah = 5;
var baseAutoWahTime = 2000;
var autoEnabled = true;
var cowardMode = false;
var berserkMode = false;
var berserkTimeRemaining;
var berserkCooldown = false;

function wahEvent(){
	if(berserkMode){
		playBerserkWah(5);
	}
	else{
		playWah();
	}
}

function newAutoEvent(){
    autoWahCount++;
    clearInterval(timer);
    if(autoEnabled){
		wahEvent();
        timer = setInterval(wahEvent, baseAutoWahTime / autoWahCount);
    }
    document.getElementById("wahPerSecond").innerHTML = getWahPerSecond();
    nextWah = Math.ceil((nextWah * 5) / 2.75);
    document.getElementById("nextWah").innerHTML = nextWah;
    if(!(wahCount >= nextWah)){
        document.getElementById("autoWahButton").disabled = true;
    }
}

function stopStartEvent(){
    if(autoEnabled){
        autoEnabled = false;
        document.getElementById("stopButton").innerText = "Start";
        document.getElementById("wahPerSecond").innerHTML = "0";
        clearInterval(timer);
    }
    else{
        autoEnabled = true;
        document.getElementById("stopButton").innerText = "Stop";
        document.getElementById("wahPerSecond").innerHTML = getWahPerSecond();
        timer = setInterval(wahEvent, baseAutoWahTime / autoWahCount);
    }
}

function cowardEvent(){
	if(!cowardMode){
		cowardMode = true;
		document.getElementById("cowardCallout").innerText = "YOU ARE A COWARD";
	}
	else{
		cowardMode = false;
		document.getElementById("cowardCallout").innerText = "";
	}
}

function berserkEvent(){
	if(!berserkMode){
		berserkMode = true;
		berserkTimeRemaining = 20;
		berserkTimer = setInterval(berserkCountdown, 1000);
	}
}

function playWah(){
	var wahAudio = new Audio("res/wah.mp3");
	wahCount++;
	currentWah++;
    if(wahCount >= nextWah){
        document.getElementById("autoWahButton").disabled = false;
    }
	document.getElementById("totalWah").innerHTML = wahCount;
	document.getElementById('waluigiPicture').src='res/waluigiOpen.jpg';
    if(!cowardMode){
	    wahAudio.play();
	    wahAudio.onended = wahEnd;
    }
    else{
        wahEnd();
    }
}

function playBerserkWah(wahsToPlay){
	for(i = 0; i < wahsToPlay; i++){
		setTimeout(playWah, 100*i);
	}
}

function wahEnd(){
	currentWah--;
	if(currentWah == 0){
		document.getElementById('waluigiPicture').src='res/waluigi.jpg'
	}
}

function berserkCountdown(){
	berserkTimeRemaining--;
	document.getElementById("berserkTime").innerHTML = " (" + berserkTimeRemaining.toString() + ")";
	if(berserkTimeRemaining <= 0){
		clearInterval(berserkTimer);
		document.getElementById("berserkTime").innerHTML = "";
		if(!berserkCooldown){
			document.getElementById("wahButton").onclick = wahEvent;
			document.getElementById("berserk").disabled = true;
			berserkTimeRemaining = 120;
			berserkTimer = setInterval(berserkCountdown, 1000);
			berserkCooldown = true;
			berserkMode = false;
		}
		else{
			berserkCooldown = false;
			document.getElementById("berserk").disabled = false;
		}
	}
}


function getWahPerSecond(){
    return (1 / ((baseAutoWahTime / autoWahCount) / 1000)).toString();
}

window.onload = function() {
	document.getElementById("wahButton").onclick = wahEvent;
    document.getElementById("autoWahButton").onclick = newAutoEvent;
    document.getElementById("stopButton").onclick = stopStartEvent;
    document.getElementById("cowardButton").onclick = cowardEvent;
	document.getElementById("berserk").onclick = berserkEvent;
    document.getElementById("autoWahButton").disabled = true;
    document.getElementById("wahPerSecond").innerHTML = "0";
    document.getElementById("nextWah").innerHTML = nextWah;
	document.getElementById("totalWah").innerHTML = wahCount;
}
