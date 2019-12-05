// import { getData } from './helpers';
// const call = async () => {
//   const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=new%20york&APPID=19c530a7aaf855f300ff7a9af5be9ac1');
//   const data = await response.json();
//   // return data;
// };

const city = 'new york';

const vidId = '1730394';


const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=19c530a7aaf855f300ff7a9af5be9ac1`;

const videoUrl = `https://api.pexels.com/videos/videos/${vidId}`;

const call = () => {
  fetch(weatherUrl, { mode: 'cors' })
  .then(res => res.json());
};

const pexels = (vid) => {
  fetch(videoUrl, { mode: 'cors', headers: { Authorization: '563492ad6f9170000100000197f63efc9690455a8a7aac6e15f8cc0f' } })
    .then((res) => res.json())
    .then((data) => {
      const src = data.video_files[3].link;
      vid.setAttribute('src', src);
    });
};


export { call, pexels };
