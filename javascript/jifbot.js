String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function loadCommands(){
	var json = JSON.parse(JSON.stringify(jifBotCommands));
	
	for(var i = 0; i < json.length; i++){
		var item = document.createElement('div');
		var head = document.createElement('h2');
		head.innerHTML = json[i].command;
		item.appendChild(head);
		if("alias" in json[i]){
			var alias = document.createElement('p');
			alias.innerHTML = "(" + json[i].alias.replaceAll(",",", ") + ")";
			item.appendChild(alias);
		}
	    var desc = document.createElement('p');
		desc.innerHTML = json[i].description.replaceAll("\n","<br>").replaceAll("```","<br>");
		item.appendChild(desc);
		document.getElementById("commands").appendChild(item);
	}
}

window.onload = function() {
	loadCommands();
}