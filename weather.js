var callBackGetSuccess= function(data) {
	console.log("Weather data : ", data);
	//alert("Weather data in " +data.name + " : temperature = " + data.main.temp);
	
	var kelvin = data.main.temp;
	var fahrenheit = 0;
	//var celcius = (fahrenheit -32)*(5/9);
	var celcius = (kelvin - 273.15);

	
	var arrondi = celcius*100;          
	arrondi = Math.round(arrondi); // 556
	arrondi = arrondi/100;         // 5.56
	
	var element = document.getElementById("weather_zone");
	element.innerHTML="At the moment, the temperature in " + data.name + " is : " + arrondi + " degree Celsius";
}



function buttonClickGet() {
	
	var town = document.getElementById("town").value;
	var url="https://api.openweathermap.org/data/2.5/weather?q="+town+"&APPID=a15539bece1d4d14d330c6e6cc4f7bad";
	
	$.get(url, callBackGetSuccess).done(function() {
		
	})
	.fail(function() {
		alert("error");
	})
	.always(function() {
		
	});
}

