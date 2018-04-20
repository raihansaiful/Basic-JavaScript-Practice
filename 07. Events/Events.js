// Events

		
		function changeText(id){
			id.innerHTML = 'You Clicked';

			var heading = document.getElementById('heading');
			heading.innerHTML = 'You Clicked!';
		}
		

		
		function showDate(){
			var time = document.getElementById('time');
			time.innerHTML = Date();

		}

		function clearDate(){
			var time = document.getElementById('time');
			time.innerHTML = '';
		}
		
		/*
		<button onmouseout="clearDate()" onmouseover="showDate()">Show Date</button>
		<h1 id="time"></h1>
		*/

		//Event		Description

		/*
		onchange	An HTML element has been changed
		onclick		The user clicks an HTML element
		onmouseover	The user moves the mouse over an HTML element
		onmouseout	The user moves the mouse away from an HTML element
		onkeydown	The user pushes a keyboard key
		onload		The browser has finished loading the page
		*/