const getData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });

  return promise;
};

getData().then(data => console.log(data));
