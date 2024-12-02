function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("숫자가 아닙니다.");
      }
    }, 3000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);

    return add10(result);
  })
  .then((result) => {
    console.log(result);

    return add10(result);
  })
  .then((result) => {
    console.log(result);
  });

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch(() => {
//     console.log("숫자가아닙니다.");
//   });
