								/// Certificate animatons ///

var counter = 1;
setInterval(function(){
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if(counter > 7){
		counter = 1;
	}
},5000);
