/* eslint-disable default-case */
const getData = (url, methods) => {
  fetch(`${url}`, methods)
    .then((res) => res.json());
    // .then((data) => console.log(data));
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
      // break;
    case 'Drizzle':
      return '856281';
      // break;
    case 'Rain':
      return '856281';
      // break;
    case 'Snow':
      return '857032';
      // break;
    case 'Clear':
      return '857041';
      // break;
    case 'Clouds':
      return '855507';
      // break;
    // default:
    //   vr = '855507';
  }
};


export {
  getData,
  setVidId,
};
