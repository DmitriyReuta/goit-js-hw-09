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
buttonSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  let delaySome = Number(inputDelay.value);
  let stepSome = Number(inputStep.value);
  let amountSome = Number(inputAmount.value);
  let currentPosition = 1;


  function processPromise() {
  if (currentPosition <= amountSome) {
    const delay = delaySome + (currentPosition - 1) * stepSome;
    createPromise(currentPosition, delay)
      .then(result => {
        console.log(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
      })
      .catch(error => {
        console.log(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
      })
      .finally(() => {
        delaySome +=stepSome;
        currentPosition++;
        processPromise();
      });
    }
  } 
  processPromise();
})