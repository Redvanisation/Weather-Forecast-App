const getData = (url, methods) => {
  fetch(`${url}`, methods)
    .then((res) => res.json());
    // .then((data) => console.log(data));
};

const setVidId = (val) => {
  // eslint-disable-next-line default-case
  switch (val) {
    case 'Thunderstorm':
      localStorage.setItem(val, [val, '854541']);
      break;
    case 'Drizzle':
      localStorage.setItem(val, [val, '856281']);
      break;
    case 'Rain':
      localStorage.setItem(val, [val, '856281']);
      break;
    case 'Snow':
      localStorage.setItem(val, [val, '857032']);
      break;
    case 'Clear':
      localStorage.setItem(val, [val, '857041']);
      break;
    case 'Clouds':
      localStorage.setItem(val, [val, '855507']);
      break;
    // default:
    //   vr = '855507';
  }
};


export {
  getData,
  setVidId,
};
