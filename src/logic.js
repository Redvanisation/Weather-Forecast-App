import { setVidId } from './helpers';
// const call = async () => {
//   const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=new%20york&APPID=19c530a7aaf855f300ff7a9af5be9ac1');
//   const data = await response.json();
//   // return data;
// };

// const setVid = (val) => {
//   if (val === 'Thunderstorm') {
//     return vidId = '854541';
//   } else if (val === 'Drizzle') {
//     return vidId = '856281';
//   } else if (val === 'Rain') {
//     return vidId = '856281';
//   } else if (val === 'Snow') {
//     return vidId = '857032';
//   } else if (val === 'Clear') {
//     return vidId = '857041';
//   } else if (val === 'Clouds') {
//     return vidId = '855507';
//   }
// };

const weatherDetails = () => {
  const theWeather = {
    temperature: null,
    video_id: null,
  };
  return theWeather;
};

const city = 'setif';


let apiWeather = '';


const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=19c530a7aaf855f300ff7a9af5be9ac1&units=metric`;


const call = (vid) => {
  const weather = weatherDetails();
  let videoUrl = 'https://api.pexels.com/videos/videos/';
  
  fetch(weatherUrl, { mode: 'cors' })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      apiWeather = data.weather[0].main;
      weather.video_id = setVidId(apiWeather);
      videoUrl += setVidId(apiWeather);
    // return videoUrl;
    // return vidId = localStorage.getItem(apiWeather);
      fetch(videoUrl, { mode: 'cors', headers: { Authorization: '563492ad6f9170000100000197f63efc9690455a8a7aac6e15f8cc0f' } })
        .then((res) => res.json())
        .then((data) => {
          const src = data.video_files[1].link;
          vid.setAttribute('src', src);
          // console.log(data);
        });
  });

};



export { call };
