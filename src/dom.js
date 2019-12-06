import { setVidId } from './helpers';
// const call = async () => {
//   const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=new%20york&APPID=19c530a7aaf855f300ff7a9af5be9ac1');
//   const data = await response.json();
//   // return data;
// };

const weatherDetails = () => {
  const theWeather = {
    temperature: null,
    video_id: null,
  };
  return theWeather;
};

const city = 'jakarta';


const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=19c530a7aaf855f300ff7a9af5be9ac1&units=metric`;


const getWeather = (vid) => {
  let apiWeather = '';
  const weather = weatherDetails();
  let videoUrl = 'https://api.pexels.com/videos/videos/';


  fetch(weatherUrl, { mode: 'cors' })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      apiWeather = data.weather[0].main;
      weather.video_id = setVidId(apiWeather);
      videoUrl += weather.video_id;
    })
    .then(() => {
      console.log(videoUrl);
      fetch(videoUrl, { mode: 'cors', headers: { Authorization: '563492ad6f9170000100000197f63efc9690455a8a7aac6e15f8cc0f' } })
        .then((res) => res.json())
        .then((data) => {
          const src = data.video_files[1].link;
          vid.setAttribute('src', src);
        });
    });
};


export { getWeather };
