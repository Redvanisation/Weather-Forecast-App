/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable no-confusing-arrow */
/* eslint-disable default-case */
const setVidId = (val) => {
  switch (val) {
    case 'Thunderstorm':
      return '854541';
    case 'Drizzle':
      return '856281';
    case 'Rain':
      return '856281';
    case 'Snow':
      return '857032';
    case 'Clear':
      return '857041';
    case 'Clouds':
      return '855679';
  }
};

const setUnit = (val) => {
  switch (val) {
    case 'imperial':
      return 'F';
    case 'metric':
      return 'C';
  }
};

const getFullDate = () => {
  const date = new Date();
  const day = date.getDate();

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const wkDay = days[date.getDay()];
  const currentDate = `${wkDay}, ${day} ${month}`;

  return currentDate;
};

const kiloToMile = (mainUnt, secondUnt, unt1, unt2) => mainUnt === secondUnt ? unt1 : unt2;

const fetchVid = async (url, vidKey, elem) => {
  try {
    const getVid = await fetch(url, { mode: 'cors', headers: { Authorization: vidKey } });
    const response = await getVid.json();
    if (response) {
      const src = response.video_files[1].link;
      elem.setAttribute('src', src);
    }
  } catch (err) {
    alert('Error loading the background video! Wait for a while then retry please!');
  }
};


export {
  setVidId,
  setUnit,
  getFullDate,
  kiloToMile,
  fetchVid,
};
