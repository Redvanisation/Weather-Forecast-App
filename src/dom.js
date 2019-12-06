/* eslint-disable radix */
import { setVidId, setUnit, getFullDate } from './helpers';
// const call = async () => {
//   const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=new%20york&APPID=19c530a7aaf855f300ff7a9af5be9ac1');
//   const data = await response.json();
//   // return data;
// };

const weatherDetails = (unt) => {
  const theWeather = {
    temperature: null,
    video_id: null,
    unit: setUnit(unt),
  };
  return theWeather;
};

const chosenCity = 'new york';


const getWeather = (vid) => {
  let units = 'metric';
  let apiWeather = '';
  let videoUrl = 'https://api.pexels.com/videos/videos/';
  
  const weather = weatherDetails(units);
  const weatherKey = '19c530a7aaf855f300ff7a9af5be9ac1';
  const videoKey = '563492ad6f9170000100000197f63efc9690455a8a7aac6e15f8cc0f';
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&APPID=${weatherKey}&units=${units}`;

  const city = document.querySelector('#city');
  const today = document.querySelector('#today');
  const tempurature = document.querySelector('#tempurature');
  const icon = document.querySelector('#icon');
  const description = document.querySelector('#description');
  const detailValue1 = document.querySelector('#detail-value-1');
  const detailValue2 = document.querySelector('#detail-value-2');


  fetch(weatherUrl, { mode: 'cors' })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      apiWeather = data.weather[0].main;
      weather.video_id = setVidId(apiWeather);
      videoUrl += weather.video_id;

      // Rendering things:
      city.innerHTML = `${data.name}, <span class="country" id="country">${data.sys.country}</span>`;
      today.textContent = getFullDate();
      tempurature.innerHTML = `${parseInt(data.main.temp)}<span class="unit" id="unit">${weather.unit}</span>`;
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      description.textContent = data.weather[0].description;
      detailValue1.textContent = `${data.main.humidity}%`;
      detailValue2.textContent = data.main.pressure;
      console.log(getFullDate());
      // country.textContent = data.sys.country;
    })
    .then(() => {
      console.log(videoUrl);
      fetch(videoUrl, { mode: 'cors', headers: { Authorization: videoKey } })
        .then((res) => res.json())
        .then((data) => {
          const src = data.video_files[1].link;
          vid.setAttribute('src', src);
        });
    });
};


export { getWeather };
