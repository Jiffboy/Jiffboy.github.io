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
	menu.updateCost('autoWah', autoWahCost); 
	newAutoEvent();
	menu.refresh();
}

function buyBerserkMode(){
	wahCount = wahCount - menu.getCost('berserkMode');
	menu.removeItem('berserkMode');
	menu.refresh();
	var buff = new Buff('berserkMode', function() {berserkMode = true}, function() {berserkMode = false}, 20, 120);
	buffBar.addBuff(buff, 'Berserk Mode');
}

class Menu{
	constructor(){
		this.itemMap = new Map();
		this.fillMap();
		this.currentItems = [];
		this.currentItems.push(this.itemMap.get('autoWah'));
		this.currentItems.push(this.itemMap.get('berserkMode'));
	}
	
	fillMap(){
		var item = new Item(5, 'Auto Wah', 'Adds an additional wah source, wahing an additional 0.5 times per second', buyAutoWah);
		this.itemMap.set('autoWah', item);
		var item = new Item(100, 'Berserk Mode', '', buyBerserkMode);
		this.itemMap.set('berserkMode', item);
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

//----------buff.js----------

class BuffBar{
	constructor(){
		this.buffMap = new Map();
	}
	
	addBuff(buff, title){
		var insert = document.createElement('button');
		var buttonCounter = document.createElement('div');
		insert.innerHTML = title;
		insert.appendChild(buttonCounter);
		insert.addEventListener('click', function(){
			buffBar.executeBuff(buff.id);
		});
		document.getElementById("buffs").appendChild(insert);
		buff.setButton(insert);
		this.buffMap.set(buff.id, buff);
	}
	
	executeBuff(id){
		this.buffMap.get(id).execute();
	}
	
	countdownBuff(id){
		//please don't ask about this, I don't want to talk about it
		try{
			this.buffMap.get(id).countdown();
		}
		catch{
			this.buffBar.buffMap.get(id).countdown();
		}
	}
}

class Buff{
	constructor(id, start, end, time, cooldown){
		this.id = id;
		this.startFunc = start;
		this.endFunc = end;
		this.runTime = time;
		this.cooldown = cooldown;
		this.isExecuting = false;
	}
	
	setButton(button){
		this.button = button;
	}
	
	execute(){
		if(!this.isExecuting){
			this.timeRemaining = this.runTime;
			this.isExecuting = true;
			this.startFunc();
			this.timer = setInterval(buffBar.countdownBuff, 1000, this.id);
		}
	}
	
	countdown(){
		this.timeRemaining--;
		this.button.children[0].innerHTML = " (" + this.timeRemaining.toString() + ")";
		if(this.timeRemaining <= 0){
			this.button.children[0].innerHTML = "";
			if(this.isExecuting){
				this.button.disabled = true;
				this.isExecuting = false;
				this.timeRemaining = this.cooldown;
				this.endFunc();
			}
			else{
				this.button.disabled = false;
				clearInterval(this.timer);
			}
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
var buffBar = new BuffBar();

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

function getWahPerSecond(){
    return (1 / ((baseAutoWahTime / autoWahCount) / 1000)).toString();
}

window.onload = function() {
	document.getElementById("wahButton").onclick = wahEvent;
    document.getElementById("stopButton").onclick = stopStartEvent;
	document.getElementById("volume").onchange = volumeChangeEvent;
    document.getElementById("wahPerSecond").innerHTML = "0";
	document.getElementById("totalWah").innerHTML = wahCount;
	document.getElementById("stopButton").disabled = true;
	menu.refresh();
}