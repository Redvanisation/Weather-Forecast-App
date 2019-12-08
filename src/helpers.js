/* eslint-disable default-case */
const getData = (url, methods) => {
  fetch(`${url}`, methods)
    .then((res) => res.json());
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
  const year = date.getFullYear();
  const day = date.getDate();

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const wkDay = days[date.getDay()];
  const currentDate = `${wkDay}, ${day} ${month}`;

  return currentDate;
};

const unitSwitcher = (unit, val1, val2) => {
  if (unit !== val1) {
    unit = val1;
  } else {
    unit = val2;
  }
  return unit;
};

const findMatches = (wordToMatch, cities) => {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.match(regex);
  });
};

const timeout = async (ms) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
};

const setVidId = (val) => {
  // switch (val) {
  //   case 'Thunderstorm':
  //     localStorage.setItem(val, '854541');
  //     break;
  //   case 'Drizzle':
  //     localStorage.setItem(val, '856281');
  //     break;
  //   case 'Rain':
  //     localStorage.setItem(val, '856281');
  //     break;
  //   case 'Snow':
  //     localStorage.setItem(val, '857032');
  //     break;
  //   case 'Clear':
  //     localStorage.setItem(val, '857041');
  //     break;
  //   case 'Clouds':
  //     localStorage.setItem(val, '855507');
  //     break;
  //   // default:
  //   //   vr = '855507';
  // }
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

const changeCity = (vr, value, method, elem) => {
  vr = value;
  return method(elem);
};

export {
  getData,
  setVidId,
  setUnit,
  getFullDate,
  unitSwitcher,
  findMatches,
  changeCity,
  timeout,
};
