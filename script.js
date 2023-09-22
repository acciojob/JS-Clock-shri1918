// Get references to the clock hands
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function updateClock() {
  const now = new Date();

  // Get the current time in hours, minutes, and seconds
  const hours = now.getHours() % 12; // 12-hour format
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the angles for the clock hands
  const hourAngle = (360 / 12) * hours + (360 / 12) * (minutes / 60);
  const minAngle = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secondAngle = (360 / 60) * seconds;

  // Apply rotations to the clock hands
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minHand.style.transform = `rotate(${minAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the initial clock state
updateClock();
