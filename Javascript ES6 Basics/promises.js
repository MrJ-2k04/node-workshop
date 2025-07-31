const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
};

getData().then(data => console.log(data));
