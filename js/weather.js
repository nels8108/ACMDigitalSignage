loadWeather("Minneapolis, MN", "");

$(document).ready(function() {
	setInterval(getWeather, 100000);
});

function loadWeather(location, woeid){
	$.simpleWeather({
		location: location,
		woeid: woeid,
		unit: 'f',
		success: function(weather){
			city = weather.city;
			temp = weather.temp+'&deg;';
			wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">';
			wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
			humidity = weather.humidity + ' %';
			
			$(".location").text(city);
			$(".temperature").html(temp);
			$(".climage_bg").html(wcode);
			$(".windspeed").html(wind);
			$(".humidity").text(humidity);
		},
		
		error.function(error){
			$(".error").html('<p>' + error + '</p>');
		}
	});
}