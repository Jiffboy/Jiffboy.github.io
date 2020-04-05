//----------menu.js----------
autoWahCost = 5;

class Item{
	constructor(cost, title, desc, exit){
		this.cost = cost;
		this.title = title;
		this.description = desc;
		this.exitFunction = exit;
	}
}

function buyAutoWah(){
	autoWahCost = Math.ceil((autoWahCost * 5) / 2.75);
	wahCount = wahCount - menu.getCost('autoWah');
	document.getElementById("stopButton").disabled = false;
	menu.removeItem('autoWah');
	menu.updateCost('autoWah', autoWahCost); 
	menu.addItem('autoWah');
	newAutoEvent();
	menu.refresh();
}

class Menu{
	constructor(){
		this.itemMap = new Map();
		this.fillMap();
		this.currentItems = [];
		this.currentItems.push(this.itemMap.get('autoWah'));
	}
	
	fillMap(){
		var item = new Item(5, 'Auto Wah', 'Adds an additional wah source, wahing an additional 0.5 times per second', buyAutoWah);
		this.itemMap.set('autoWah', item);
	}
	
	refresh(){
		document.getElementById("menu").innerHTML = "";
		this.currentItems.forEach(this.printItem);
	}
	
	printItem(item, index){
		var insert = document.createElement('button');
		var title = document.createElement('p');
		var cost = document.createElement('p');
		title.innerHTML = item.title;
		cost.innerHTML = item.cost;
		insert.appendChild(title);
		insert.appendChild(cost);
		insert.title = item.description;
		insert.onclick = item.exitFunction;
		insert.id = index;
		if(wahCount >= item.cost)
			insert.disabled = false;
		else
			insert.disabled = true;
		document.getElementById("menu").appendChild(insert);
	}
	
	addItem(item){
		this.currentItems.push(this.itemMap.get(item));
	}
	
	removeItem(item){
		var itemToRemove = this.itemMap.get(item);
		for(var i = 0; i < this.currentItems.length; i++){
			if(this.currentItems[i].title == itemToRemove.title){
				this.currentItems.splice(i,1);
				return;
			}
		}
	}
	getCost(item){
		return this.itemMap.get(item).cost;
	}
	
	updateCost(item, cost){
		this.itemMap.get(item).cost = cost;
	}
	
	enableButtons(cost){
		for(var i = 0; i < this.currentItems.length; i++){
			if(this.currentItems[i].cost <= cost)
				document.getElementById(i).disabled = false;
		}
	}
}

//----------clicker.js-----------

var wahCount = 0;
var currentWah = 0;
var autoWahCount = 0;
var timer;
var berserkTimer;
var baseAutoWahTime = 2000;
var autoEnabled = true;
var volume = 0.5;
var berserkMode = false;
var berserkTimeRemaining;
var berserkCooldown = false;
var menu = new Menu();

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
		if(autoWahCount > 0){
			wahEvent();
			timer = setInterval(wahEvent, baseAutoWahTime / autoWahCount);
		}
    }
}

function volumeChangeEvent(){
	volume = this.value / 100;
	if(volume == 0)
		document.getElementById("cowardCallout").innerText = "YOU ARE A COWARD";
	else
		document.getElementById("cowardCallout").innerText = "";
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
	wahAudio.volume = volume;
	wahCount++;
	currentWah++;
	menu.enableButtons(wahCount);
	document.getElementById("totalWah").innerHTML = wahCount;
	if(!volume == 0)
		document.getElementById('waluigiPicture').src='res/waluigiOpen.jpg';
	else
		document.getElementById('waluigiPicture').src='res/waluigi.jpg'
	wahAudio.play();
	wahAudio.onended = wahEnd;
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
    document.getElementById("stopButton").onclick = stopStartEvent;
	document.getElementById("volume").onchange = volumeChangeEvent;
	document.getElementById("berserk").onclick = berserkEvent;
    document.getElementById("wahPerSecond").innerHTML = "0";
	document.getElementById("totalWah").innerHTML = wahCount;
	document.getElementById("stopButton").disabled = true;
	menu.refresh();
}