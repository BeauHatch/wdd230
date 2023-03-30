const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humid = document.querySelector('#humid');
const humid2 = document.querySelector('#humid2');
const currentTemp2 = document.querySelector('#current-temp2');
const humid3 = document.querySelector('#humid3');
const currentTemp3 = document.querySelector('#current-temp3');

const weatherIcon2 = document.querySelector('#weather-icon2');
const captionDesc2 = document.querySelector('#figcaption2');
const weatherIcon3 = document.querySelector('#weather-icon3');
const captionDesc3 = document.querySelector('#figcaption3');





const url = 'https://api.openweathermap.org/data/2.5/weather?zip=84096&q=Carlsbad&units=imperial&appid=aede69dbf9ad0aac1e3e64df16bd10e4';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?zip=84096&q=Carlsbad&units=imperial&appid=aede69dbf9ad0aac1e3e64df16bd10e4'
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok){
          const forecastData = await forecastResponse.json();
          displayResults(data,forecastData);

        }

      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch(url);

  function  displayResults(weatherData,forecastData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humid.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
    currentTemp2.innerHTML = `<strong>${forecastData.list[0].main.temp.toFixed(0)}</strong>`;
    humid2.innerHTML = `<strong>${forecastData.list[0].main.humidity.toFixed(0)}</strong>`;
    currentTemp3.innerHTML = `<strong>${forecastData.list[10].main.temp.toFixed(0)}</strong>`;
    humid3.innerHTML = `<strong>${forecastData.list[10].main.humidity.toFixed(0)}</strong>`;

  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    weatherIcon2.setAttribute('src', iconsrc);
    weatherIcon2.setAttribute('alt', desc);
    captionDesc2.textContent = desc;
    weatherIcon3.setAttribute('src', iconsrc);
    weatherIcon3.setAttribute('alt', desc);
    captionDesc3.textContent = desc;

    

    
  }