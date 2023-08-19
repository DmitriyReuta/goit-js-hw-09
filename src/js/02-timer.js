import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const datetimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const selected = selectedDates[0];
      if (new Date() > selected) {
          startBtn.disabled = true;
        alert("Please choose a date in the future")
      } else {
          startBtn.disabled = false;
          startBtn.addEventListener('click', () => {
              const intervalId = setInterval(clearIntervalFoo, 1000);
              function clearIntervalFoo() {
                  const currentTime = selected - new Date();
             if (currentTime <= 0) {
                 clearInterval(intervalId);
                 return
                  }
                  const { days, hours, minutes, seconds } = convertMs(currentTime);
        addZero(days, hours, minutes, seconds);
         }
          })

      }
      
    },
};

// function countdown() {
//     const currentTime = new Date();
//     }

flatpickr(datetimePicker, options)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

function addZero(days, hours, minutes, seconds) {
    dataDays.textContent = addLeadingZero(days);
    dataHours.textContent = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = addLeadingZero(seconds);
}
// startBtn.addEventListener('click', () => {
// })
