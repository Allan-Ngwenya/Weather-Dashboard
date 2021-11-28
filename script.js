function GetInfo() {

	var newName = document.getElementById("cityInput");
	var cityName = document.getElementById("cityName");
	cityName.innerHTML = "--" + newName.value + "--";

	fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + newName.value + '&appid=c950e7eb751bc2ec4f7d521861f3c7ee')
		.then(response => response.json())
		.then(data => { }
