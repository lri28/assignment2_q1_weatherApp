

const apiKey = '90c2cd09c0476e2b29467d12540dff8e'; 
const city = 'Calgary';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const weatherInfo = document.getElementById('weatherInfo');

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        const weatherHtml = `
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
        `;

        weatherInfo.innerHTML = weatherHtml;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        weatherInfo.innerHTML = '<p>Failed to fetch weather data</p>';
    });
