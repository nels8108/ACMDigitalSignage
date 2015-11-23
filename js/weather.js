$(document).ready(function() {
  $.simpleWeather({
    location: 'Minneapolis, MN',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});


/*loadWeather("Minneapolis, MN", "");

$(document).ready(function() {
	setInterval(getWeather, 10000);
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
}*/