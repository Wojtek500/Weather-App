let key = '0740d6c682f02150e4f6782cdd585f27';
let input = document.getElementsByClassName('cityName');
const button = document.querySelector(".check");
let dest = document.querySelector('.respond');
let iconDest = document.querySelector('.icon');
let rainDest = document.querySelector('.respond2')

let resolve1 = function(fullfilled){
    return fullfilled.json()
}
let resolve2 = function(fullfilled){
    console.log(fullfilled)
    const temp = fullfilled.main.temp - 273.15
    const wind = fullfilled.wind.speed
    console.log(wind)
    const rain = fullfilled.weather['0'].main
    return dest.innerHTML = `<div class='up'>
        <div class='one'> ${Math.floor(temp)}°C</div>
        <div class='two'>wind: ${wind} m/s</div>
        <div class='three'>${rain}</div>
        </div>`
}
let download = function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input[0].value + '&APPID=' + key)
    .then(resolve1)
    .then(resolve2)
    .then(setIcon)
}
button.addEventListener('click', download)

function setIcon() {
    iconDest.innerHTML = ""
    var storm = document.createElement('img')
    var sun = document.createElement('img')
    var rain = document.createElement('img')
    var clouds = document.createElement('img')
    var fog = document.createElement('img')
    var blueSun = document.createElement('img')
    sun.setAttribute('src', 'photo/sun3.png')
    sun.setAttribute('width', '50px')
    sun.setAttribute('height', '50px')
    rain.setAttribute('src', 'photo/rain.jpg')
    rain.setAttribute('width', '50px')
    rain.setAttribute('height', '50px')
    clouds.setAttribute('src', 'photo/cloud.jpg')
    clouds.setAttribute('width', '50px')
    clouds.setAttribute('height', '50px')
    fog.setAttribute('src', 'photo/fog.jpg')
    fog.setAttribute('width', '50px')
    fog.setAttribute('height', '50px')
    storm.setAttribute('src', 'photo/storm.jpg')
    storm.setAttribute('width', '50px')
    storm.setAttribute('height', '50px')
    blueSun.setAttribute('src', 'photo/blueSun.png')
    blueSun.setAttribute('width', '50px')
    blueSun.setAttribute('height', '50px')
    console.log(dest.children[0].children[2].textContent)
    
    if (dest.children[0].children[2].textContent == 'Fog' || dest.children[0].children[2].textContent == 'Haze'){
        return iconDest.appendChild(fog)
    }
    else if (dest.children[0].children[2].textContent == 'Clouds'){
        return iconDest.appendChild(clouds)
    }
    else if (dest.children[0].children[2].textContent == 'Thunderstorm') {
        return iconDest.appendChild(storm)
    }
    else if (dest.children[0].children[2].textContent == 'Rain' || dest.children[0].children[2].textContent == 'Drizzle'){
        return iconDest.appendChild(rain)
    }
    else if (dest.children[0].children[0].textContent.substr(0, dest.children[0].children[0].textContent.length - 2) > 0) {
        return iconDest.appendChild(sun)
    } 
    else if (dest.children[0].children[0].textContent.substr(0, dest.children[0].children[0].textContent.length - 2) <= 0) {
        return iconDest.appendChild(blueSun)
    }
    else {
        return iconDest.innerHTML = 'something went wrong'
    }
}

// function cleaner(){
//     return iconDest.innerHTML = ""
// }

