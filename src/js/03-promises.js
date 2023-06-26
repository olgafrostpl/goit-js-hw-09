import Notiflix from 'notiflix';

const refs = {
  inputFormData: document.querySelector('.form'),
};
let { inputFormData } = refs;

inputFormData.addEventListener('submit', startCreatePromises);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          )
        );
      } else {
        reject(
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          )
        );
      }
    }, delay);
  });
}

function startCreatePromises(e) {
  e.preventDefault();

  let step = Number(e.currentTarget.step.value);
  let delay = Number(e.currentTarget.delay.value);
  let amount = Number(e.currentTarget.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(success => console.log('✅ Fulfilled promise'))
      .catch(error => console.log('❌ Rejected promise'));
    delay += step;
  }
}
