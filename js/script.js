$(document).ready(function() {
    console.log('Coded by Bartłomiej Tuchowski'); //Signature.
 
   //Getting current position.
   if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position) {
           var lat = position.coords.latitude;
           var lon = position.coords.longitude;
           console.log('latitude: ' + lat + ' longitude: ' + lon);
       
           //Api varible depended from position.
           var api = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&' + 'lon=' + lon;
           var newContent = "";
           
           //Getting JSON from api.
           $.getJSON (api, function (json) {
               //Adding scale pieces function.
               function addPiece(counter) {
                   newContent="";
                   for (var e = 0; e < 1; e++) {
                       for (var i = 0; i < counter; i++) {
                           newContent += '<div class="scale-piece">' + '</div>';
                        }
                        newContent += '<div class="container__center-circle">' + '</div>';
                    }
                }
     
                //Whole JSON content below
                $(".container__position").html(json.name + ', ' + json.sys.country);
                newContent += '<img src="' + json.weather[0].icon + '"'; //adding current weather conditions image.
                newContent += ' alt="Current weather image"' + '/>'; //adding alt if img not loaded.
                document.getElementById("container__current-weather-img").innerHTML= newContent;
                $(".container__conditions").html(json.weather[0].description); //updating text weather description.
                $(".container__temperature-degrees").html(json.main.temp + '<sup> o</sup>' + 'C'); //updating current temp.
                //Temperature scale.
                if (json.main.temp) {
                    if (json.main.temp <= -7) {
                        addPiece(1);
                    } else if (json.main.temp <= 0 && json.main.temp > -7 ) {
                        addPiece(2);
                    } else if (json.main.temp <= 7 && json.main.temp > 0) {
                        addPiece(3);
                    } else if (json.main.temp <= 14 && json.main.temp > 7) {
                        addPiece(4);
                    } else if (json.main.temp <= 21 && json.main.temp > 14) {
                        addPiece(5);
                    } else if (json.main.temp <= 28 && json.main.temp > 21) {
                        addPiece(6);
                    } else if (json.main.temp <= 35 && json.main.temp > 28) {
                        addPiece(7);
                    } else if (json.main.temp > 35) {
                        addPiece(8);
                    }
                    document.getElementById("container__temperature-scale").innerHTML= newContent;
                }
                $(".container__pressure-degrees").html(json.main.pressure + ' hPa'); //Updating current pressure.
                //Pressure scale.
                if (json.main.pressure) {
                    if (json.main.pressure <= 950) {
                        addPiece(1);
                    } else if (json.main.pressure <= 980 && json.main.pressure > 950 ) {
                        addPiece(2);
                    } else if (json.main.pressure <= 1000  && json.main.pressure > 980) {
                        addPiece(3);
                    } else if (json.main.pressure <= 1020 && json.main.pressure > 1000) {
                        addPiece(4);
                    } else if (json.main.pressure <= 1030 && json.main.pressure > 1020) {
                        addPiece(5);
                    } else if (json.main.pressure <= 1040 && json.main.pressure > 1030) {
                        addPiece(6);
                    } else if (json.main.pressure <= 1050 && json.main.pressure > 1040) {
                        addPiece(7);
                    } else if (json.main.pressure > 1050) {
                        addPiece(8);
                    }
                    document.getElementById("container__pressure-scale").innerHTML= newContent;
                }
                $(".container__wind-speed").html(json.wind.speed + ' m/s'); //updating current wind speed.
                //Wind scale.
                if (json.wind.speed) {
                    if (json.wind.speed <= 1.5) {
                        addPiece(1);
                    } else if (json.wind.speed <= 3.3 && json.wind.speed > 1.5 ) {
                        addPiece(2);
                    } else if (json.wind.speed <= 5.5 && json.wind.speed > 3.3) {
                        addPiece(3);
                    } else if (json.wind.speed <= 8 && json.wind.speed > 5.5) {
                        addPiece(4);
                    } else if (json.wind.speed <= 12 && json.wind.speed > 8) {
                        addPiece(5);
                    } else if (json.wind.speed <= 17 && json.wind.speed > 12) {
                        addPiece(6);
                    } else if (json.wind.speed <= 25 && json.wind.speed > 17) {
                        addPiece(7);
                    } else if (json.wind.speed > 25) {
                        addPiece(8);
                    }
                    document.getElementById("container__wind-scale").innerHTML= newContent;
                }
                //Changing units.
                var changer = true;
                $(".container__units-button").click(function() {
                    if (changer == true) {
                        $(".container__temperature-degrees").html(json.main.temp * 9/5 + 32 + '<sup> o</sup>' + 'F');
                        $(".container__pressure-degrees").html(json.main.pressure/1000 + ' bar');
                        $(".container__wind-speed").html(Math.floor(json.wind.speed * 3.6) + ' km/h');
                        changer = false;
                    } else if (changer == false) {
                        $(".container__temperature-degrees").html(json.main.temp + '<sup> o</sup>' + 'C');
                        $(".container__pressure-degrees").html(json.main.pressure + ' hPa');
                        $(".container__wind-speed").html(json.wind.speed + ' m/s');
                        changer = true;
                    }
                });
            });
        });
    }
    //Footer buttons.
    $(".codepen").click(function() {
        window.open("https://codepen.io/Milthir/#");
    });
 
    $(".github").click(function() {
        window.open("https://github.com/Fjollsfinn");
    });
 
    $(".facebook").click(function() {
        window.open("https://www.facebook.com/bartlomiej.tuchowski");
    });
});