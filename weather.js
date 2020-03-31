const weather = document.querySelector(".js-weather") ;

const API_KEY = "293fa0ccfd84823b65894617b3cb7a03";
const COORDS = 'coords';

// 새로고침 없이 데이터를 계속 가져오자!
function getWeather(lat, lng) {
    // 데이터를 가져올 때에는 fetch를 쓴다.
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response) {
            // fetch가 완료되고 난 뒤에 실행될 함수를 여기에 넣으면 된당!
            return response.json()
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature}도씨 @ ${place}`;
        });
    // units format -> format을 바꿔 줄 수 있떵!
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // latitude: latitude,
        // longitude: longitude
        // 아래랑 같은 것임!
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("못햇어요 ㅠ ")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        // getweather
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();