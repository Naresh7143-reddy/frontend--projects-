const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "a27d30edfa6845919d061ad9bb15d383";

async function weather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();

    if (data.cod === "404") {
        alert("City not found!");
        return;
    }

    console.log(data);

    // update UI
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humd-percentage").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-percentage").innerHTML = data.wind.speed + " km/h";

    // update weather icon dynamically
    const weatherIcon = document.querySelector(".weather-icon");
    const condition = data.weather[0].main.toLowerCase();

    if (condition === "clouds") {
        weatherIcon.src = "clouds.png";
    } else if (condition === "mist") {
        weatherIcon.src = "mist.png";
    } else if (condition === "rain") {
        weatherIcon.src = "rain.png";
    } else if (condition === "snow") {
        weatherIcon.src = "snow.png";
    } else if (condition === "clear") {
        weatherIcon.src = "sun.webp";
    } else {
        weatherIcon.src = "sun.webp"; // fallback
    }
}

const searchBtn = document.querySelector(".search-btn");
const cityInput = document.querySelector(".city-input");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        weather(city);
    }
});


cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const city = cityInput.value.trim();
        if (city) {
            weather(city);
        }
    }
});
