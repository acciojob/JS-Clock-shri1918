function updateClock() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  var hourHand = document.getElementByClassName('hand hour-hand');
  var minHand = document.getElementByClassName('hand min-hand');
  var secondHand = document.getElementByClassName('hand second-hand');

  // Calculate the rotation angles for the clock hands
  var hourRotation = 30 * (hour % 12) + minute / 2; // Each hour is 30 degrees, and each minute adds 0.5 degrees
  var minuteRotation = 6 * minute + second / 10; // Each minute is 6 degrees, and each second adds 0.1 degrees
  var secondRotation = 6 * second; // Each second is 6 degrees

  // Apply the rotation using CSS transform
  hourHand.style.transform = 'rotate(' + hourRotation + 'deg)';
  minuteHand.style.transform = 'rotate(' + minuteRotation + 'deg)';
  secondHand.style.transform = 'rotate(' + secondRotation + 'deg)';
}

// Call the updateClock function every second to keep the clock hands updated
setInterval(updateClock, 1000);