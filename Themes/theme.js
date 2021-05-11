let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('default')
}
else{
	setTheme(theme)
}

let themeDots =  document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++)
	{
		themeDots[i].addEventListener('click', function(){
			let mode = this.dataset.mode
			console.log('option clicked : ', mode)
			setTheme(mode)
		})
	}

function setTheme(mode){
	if(mode == 'default'){
		document.getElementById('theme-style').href = 'style.css'
	}
	
	if(mode == 'pink'){
		document.getElementById('theme-style').href = 'Themes/pink.css'
	}
	
	if(mode == 'green'){
		document.getElementById('theme-style').href = 'Themes/green.css'
	}
	
	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'Themes/blue.css'
	}
	
	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'Themes/purple.css'
	}
	
	localStorage.setItem('theme', mode)
}