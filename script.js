//your code here
window.onload = function () {
  var hourHand = document.getElementById('hour-hand');
  var minuteHand = document.getElementById('minute-hand');
  var secondHand = document.getElementById('second-hand');

  function rotateClockHands() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var hourRotation = (hours % 12) * 30 + (minutes / 2);
    var minuteRotation = minutes * 6 + (seconds / 10);
    var secondRotation = seconds * 6;

    hourHand.style.transform = 'rotate(' + hourRotation + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteRotation + 'deg)';
    secondHand.style.transform = 'rotate(' + secondRotation + 'deg)';
  }

  setInterval(rotateClockHands, 1000);
};