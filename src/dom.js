/* eslint-disable arrow-parens */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
/* eslint-disable radix */
import {
  setVidId, setUnit, getFullDate, kiloToMile, fetchVid,
} from './helpers';


const weatherKey = '19c530a7aaf855f300ff7a9af5be9ac1';
const videoKey = '563492ad6f9170000100000197f63efc9690455a8a7aac6e15f8cc0f';

const search = document.querySelector('#search');
const searchIcon = document.querySelector('#search-icon');
const city = document.querySelector('#city');
const today = document.querySelector('#today');
const icon = document.querySelector('#icon');
const description = document.querySelector('#description');
const detailValue1 = document.querySelector('#detail-value-1');
const detailValue2 = document.querySelector('#detail-value-2');

const weatherDetails = (unt) => {
  const theWeather = {
    temperature: null,
    video_id: null,
    unit: setUnit(unt),
  };
  return theWeather;
};

const video = document.querySelector('#video');
const tempurature = document.querySelector('#tempurature');

let chosenCity = 'new york';
let units = 'metric';


const getWeather = (vid, wCity = 'new york') => {
  const weather = weatherDetails(units);
  let apiWeather = '';
  let videoUrl = 'https://api.pexels.com/videos/videos/';
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${wCity}&APPID=${weatherKey}&units=${units}`;


  fetch(weatherUrl, { mode: 'cors' })
    .then(res => res.json())
    .then((data) => {
      apiWeather = data.weather[0].main;
      weather.video_id = setVidId(apiWeather);
      videoUrl += weather.video_id;

      // Rendering things:
      city.innerHTML = `${data.name}, <span class="country" id="country">${data.sys.country}</span>`;
      today.textContent = getFullDate();
      tempurature.innerHTML = `${parseInt(data.main.temp)}<span class="unit" id="unit">${weather.unit}</span>`;
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      description.textContent = data.weather[0].description;
      detailValue1.innerHTML = `${data.main.humidity} <span class="details-unit">%</span>`;
      detailValue2.innerHTML = `${parseInt(data.wind.speed)} <span class="details-unit">${kiloToMile(weather.unit, 'C', 'kmH', 'mpH')}</span>`;
    })
    .then(() => {
      fetchVid(videoUrl, videoKey, vid);
    })
    .catch(() => alert('Please enter a valid city and reload!'));
};


tempurature.addEventListener('click', () => {
  if (units !== 'metric') {
    units = 'metric';
  } else {
    units = 'imperial';
  }
  getWeather(video, chosenCity);
});

search.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    chosenCity = search.value;
    getWeather(video, chosenCity);
  }
});

searchIcon.addEventListener('click', () => {
  chosenCity = search.value;
  getWeather(video, chosenCity);
});


export default getWeather;
