const getData = (url, methods) => {
  fetch(`${url}`, methods)
    .then((res) => res.json())
    // .then((data) => console.log(data));
};


export {
  getData,
};
