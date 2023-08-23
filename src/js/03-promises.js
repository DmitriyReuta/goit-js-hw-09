const form = document.querySelector('.form');
const inputDelay = document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');
const buttonSubmit = document.querySelector('button[type="submit"]');


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
  } else {
      reject({ position, delay });
  }
  }, delay);
  })
}
form.addEventListener('submit', function (event) {
  event.preventDefault();
  let delaySome = Number(inputDelay.value);
  let stepSome = Number(inputStep.value);
  let amountSome = Number(inputAmount.value);

  for (let i = 1; i <= amountSome; i++){
  const delay = delaySome + (i - 1) * stepSome;
      createPromise(i, delay)
        .then(result => {
          console.log(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
        })
        .catch(error => {
          console.log(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
        })
}
})