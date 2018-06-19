const apromise = new Promise((resolve, reject) => {
  resolve("this is resolved data");
});
apromise.then(data => {
  console.log(data);
});
