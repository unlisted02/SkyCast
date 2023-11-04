import { apiKeys } from "../config";

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';

export async function getWeather(city, metric = 'metric') {
    const response = await fetch(`${baseURL}${city}&units=${metric}&APPID=${apiKeys.apiKeyWeather}`);
    const data = await response.json();
    return data;
}

export async function getForecast(city, metric = 'metric') {
    const response = await fetch(`${forcastURL}${city}&units=${metric}&APPID=${apiKeys.apiKeyWeather}`);
    const data = await response.json();
    return data.list;
}

async function getWeatherAndForecast(city) {
    const weather = await getWeather(city);
    const forecast = await getForecast(city);
    return [weather, forecast];
}

export async function fetchWeatheData(city) {
    try {
        const [weatherData, forecastData] = await getWeatherAndForecast(city);

        // Handle weather data
        const state = weatherData.weather[0].main;
        const temp = Math.ceil(weatherData.main.temp);

        // Handle forecast data
        let maxTemp = Math.round(forecastData[0].main.temp);
        let minTemp = Math.round(forecastData[0].main.temp);

        for (const res of forecastData) {
            if (new Date().toLocaleDateString('en-GB') === new Date(res.dt_txt).toLocaleDateString('en-GB')) {
                maxTemp = res.main.temp > maxTemp ? Math.round(res.main.temp) : maxTemp;
                minTemp = res.main.temp < minTemp ? Math.round(res.main.temp) : minTemp;
            }
        }

        return { state: state, temp: temp, maxTemp: maxTemp, minTemp: minTemp };
    } catch (err) {
        console.log(err);
    }
}

export async function fetchWeatherDetail(city) {
    const [weather, forecast] = await getWeatherAndForecast(city);

    const daysInfo = [];
    const state = weather.weather[0].main;
    const temp = Math.ceil(Number(weather.main.temp));
    const hum = weather.main.humidity;
    const wind = Math.round(Math.round(weather.wind.speed));

    const dates = new Map();
    for (const res of forecast) {
        const date = new Date(res.dt_txt).toDateString().split(' ')[0];
        if (dates.get(date)) {
            dates.get(date).counter += 1;
            dates.get(date).temp += res.main.temp;
        } else {
            dates.set(date, {
                state: res.weather[0].main,
                temp: res.main.temp,
                counter: 1
            });
        }
    }

    dates.forEach((value) => {
        value.temp = Math.round(value.temp / value.counter);
    });

    dates.delete(Object.keys(dates)[0]);

    let dayObj = {
        name: '',
        counter: 0,
        state: '',
        temp: 0,
    };

    dates.forEach((value, key) => {
        dayObj.name = key;
        dayObj.counter = value.counter;
        dayObj.state = value.state;
        dayObj.temp = Math.round(value.temp);

        daysInfo.push(dayObj);

        dayObj = {
            name: '',
            counter: 0,
            state: '',
            temp: 0,
        };
    });

    return { state: state, temp: temp, hum: hum, wind: wind, daysInfo: daysInfo }
}


async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    return countries;
}

export async function populateCapitals() {
    const capitals = [];

    const countries = await getCountries();

    countries.forEach((country) => {
        if (country.capital) {
            capitals.push(country.capital[0]);
        }
    });

    capitals.sort();
    return capitals;
}