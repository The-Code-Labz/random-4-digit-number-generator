function generateRandomNumber() {
  return Math.floor(1000 + Math.random() * 9000);
}

function updateRandomNumber() {
  const randomNumberElement = document.getElementById('randomNumber');
  randomNumberElement.textContent = generateRandomNumber();
}

document.addEventListener('DOMContentLoaded', () => {
  updateRandomNumber();
  const refreshButton = document.getElementById('refreshButton');
  refreshButton.addEventListener('click', updateRandomNumber);
});
