function GetInfo() {

	var newName = document.getElementById("cityInput");
	var cityName = document.getElementById("cityName");
	cityName.innerHTML = "--" + newName.value + "--";

	fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + newName.value + '&appid=c950e7eb751bc2ec4f7d521861f3c7ee')
		.then(response => response.json())
		.then(data => {
			//Getting the min and max values for each day
			for (i = 0; i < 5; i++) {
				document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1) + "°";

			}

			for (i = 0; i < 5; i++) {
				document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
			}


			//Getting Weather Icons
			for (i = 0; i < 5; i++) {
				document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" +
					data.list[i].weather[0].icon
					+ ".png";
			}

			console.log(data)


		})

		.catch(err => alert("Error: Please try again"))
}