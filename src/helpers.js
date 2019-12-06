/* eslint-disable default-case */
const getData = (url, methods) => {
  fetch(`${url}`, methods)
    .then((res) => res.json());
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


export {
  getData,
  setVidId,
};
