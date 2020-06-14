String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function loadCommands(){
	var json = JSON.parse(JSON.stringify(jifBotCommands));
	var commandMap = new Map();
	
	for(var i = 0; i < json.length; i++){
		if(json[i].category == "Hidden"){
			continue;
		}
		else if(commandMap.has(json[i].category)){
			commandMap.get(json[i].category).push(i);
		}
		else{
			commandMap.set(json[i].category, [i]);
		}
	}
	for (const [cat, list] of commandMap.entries()) {
		var category = document.createElement('h1');
		category.innerHTML = cat;
		document.getElementById("commands").appendChild(category);
		for(var i=0; i < list.length; i++){
			var item = document.createElement('div');
			var head = document.createElement('h2');
			head.innerHTML = json[list[i]].command;
			item.appendChild(head);
			if("alias" in json[list[i]]){
				var alias = document.createElement('p');
				alias.innerHTML = "(" + json[list[i]].alias.replaceAll(",",", ") + ")";
				item.appendChild(alias);
			}
			var desc = document.createElement('p');
			text = json[list[i]].description.replaceAll("\n","<br>").replaceAll("```","<br>");
			index = text.indexOf("Usage:");
			desc.innerHTML = text.substr(0,index);
			desc.innerHTML += '<span style="color:#ffe199;">' + text.substr(index) + "</span>"
			item.appendChild(desc);
			document.getElementById("commands").appendChild(item);
		}
	}
}

window.onload = function() {
	loadCommands();
}