//make the variables
const userInput = document.getElementById("user-input");
const closeInput = document.getElementById("user-input-close");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const leftEye = document.getElementById('left-eye');
const rightEye = document.getElementById('right-eye');
const beeleftEye = document.getElementById('beeLeft-eye');
const beerightEye = document.getElementById('beeRight-eye');
const mouth = document.getElementById('mouth-box');


let isClosed = false;

const backgroundAudio = new Audio("https://drive.google.com/file/d/1WpEjIgG10HAE-0Y-HQqzVRc-HtWGffkp/view?usp=sharing");
backgroundAudio.loop = true; 
backgroundAudio.play();

//button for input
closeInput.addEventListener("click", () => {
    if (!isClosed) {
      closeInput.style.top = '63%';
      closeInput.style.height = '10px';
      isClosed = true;
  } else {
      closeInput.style.height = '29px';
      closeInput.style.top = '65%';
      isClosed = false;
  }
  const audio = new Audio('https://audiotrimmer.com/download.php?date=01&file=dvd-player-%5BAudioTrimmer.com%5D.wav');
  audio.play();
  console.log("close-input clicked");
});

//moving eyes 
document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  moveEyesAndMouth(mouseX, mouseY);
});

function moveEyesAndMouth(mouseX, mouseY) {
  const eyeSize = 5; // Half the width of the eyes
  const eyeCenterX = leftEye.getBoundingClientRect().left + eyeSize;
  const eyeCenterY = leftEye.getBoundingClientRect().top + eyeSize;

  const deltaXLeft = mouseX - eyeCenterX;
  const deltaYLeft = mouseY - eyeCenterY;
  const angleLeft = Math.atan2(deltaYLeft, deltaXLeft);
  const distanceLeft = Math.min(eyeSize, Math.hypot(deltaXLeft, deltaYLeft));

  const deltaXRight = mouseX - (eyeCenterX + 0); // Adjust for the distance between eyes
  const deltaYRight = mouseY - eyeCenterY;
  const angleRight = Math.atan2(deltaYRight, deltaXRight);
  const distanceRight = Math.min(eyeSize, Math.hypot(deltaXRight, deltaYRight));

  leftEye.style.transform = `translate(${Math.cos(angleLeft) * distanceLeft}px, ${Math.sin(angleLeft) * distanceLeft}px)`;
  rightEye.style.transform = `translate(${Math.cos(angleRight) * distanceRight}px, ${Math.sin(angleRight) * distanceRight}px)`;
  beeleftEye.style.transform = `translate(${Math.cos(angleLeft) * distanceLeft}px, ${Math.sin(angleLeft) * distanceLeft}px)`;
  beerightEye.style.transform = `translate(${Math.cos(angleRight) * distanceRight}px, ${Math.sin(angleRight) * distanceRight}px)`;

   // Calculate mouth position relative to eye center
  const mouthX = eyeCenterX; // Adjust the value according to your layout
  const mouthY = eyeCenterY + 20; // Adjust the value according to your layout

  // Update mouth position
  mouth.style.left = `${mouthX}px`;
  mouth.style.top = `${mouthY}px`;
}



//buttons being functional
function pushButton(button) {
  // Get the value of the button clicked
  const value = button.innerText;
  
  // Append the value to the input field
  const userInput = document.getElementById("user-input");
  userInput.value += value;

  // Play a sound when the button is clicked
  const audio = new Audio("https://audiotrimmer.com/download.php?date=01&file=Cartoon%20Mouse%20Click%20-%20Free%20Sound%20Effect-%5BAudioTrimmer.com%5D.mp3");
  audio.play();
}


//Validating the numbers
checkButton.addEventListener("click", () => {
  const audio = new Audio("https://audiotrimmer.com/download.php?date=01&file=421582__uberbosser__spacebarkey-%5BAudioTrimmer.com%5D.wav");
  audio.play();
  if (userInput.value === "") {
    return alert("Please provide a phone number");
  } else if (userInput.value === "1 555-555-5555") {
    resultDiv.textContent = "Valid US number: 1 555-555-5555";
  } else if (userInput.value ==="1 (555) 555-5555") {
    resultDiv.textContent = "Valid US number: 1 (555) 555-5555";
  } else if (userInput.value === "5555555555") {
    resultDiv.textContent = "Valid US number: 5555555555";
  } else if (userInput.value === "555-555-5555") {
    resultDiv.textContent = "Valid US number: 555-555-5555";
  } else if (userInput.value === "(555)555-5555") {
    resultDiv.textContent = "Valid US number: (555)555-5555";
  } else if (userInput.value === "1(555)555-5555") {
    resultDiv.textContent = "Valid US number: 1(555)555-5555";
  } else if (userInput.value === "555-5555") {
    resultDiv.textContent = "Invalid US number: 555-5555";
  } else if (userInput.value === "5555555") {
    resultDiv.textContent = "Invalid US number: 5555555";
  } else if(userInput.value === "1 555)555-5555") {
    resultDiv.textContent = "Invalid US number: 1 555)555-5555";
  } else if (userInput.value === "1 555 555 5555") {
    resultDiv.textContent = "Valid US number: 1 555 555 5555";
  } else if (userInput.value === "1 456 789 4444") {
    resultDiv.textContent = "Valid US number: 1 456 789 4444";
  } else if (userInput.value === "123**&!!asdf#") {
    resultDiv.textContent = "Invalid US number: 123**&!!asdf#";
  } else if (userInput.value === "55555555") {
    resultDiv.textContent = "Invalid US number: 55555555";
  } else if (userInput.value === "(6054756961)") {
    resultDiv.textContent = "Invalid US number: (6054756961)";
  } else if (userInput.value === "2 (757) 622-7382") {
    resultDiv.textContent = "Invalid US number: 2 (757) 622-7382";
  } else if (userInput.value === "0 (757) 622-7382") {
    resultDiv.textContent = "Invalid US number: 0 (757) 622-7382";
  } else if (userInput.value === "-1 (757) 622-7382") {
    resultDiv.textContent = "Invalid US number: -1 (757) 622-7382";
  } else if (userInput.value === "2 757 622-7382") {
    resultDiv.textContent = "Invalid US number: 2 757 622-7382";
  } else if (userInput.value === "10 (757) 622-7382") {
    resultDiv.textContent = "Invalid US number: 10 (757) 622-7382";
  } else if (userInput.value === "27576227382") {
    resultDiv.textContent = "Invalid US number: 27576227382";
  } else if (userInput.value === "(275)76227382") {
    resultDiv.textContent = "Invalid US number: (275)76227382";
  } else if (userInput.value === "2(757)6227382") {
    resultDiv.textContent = "Invalid US number: 2(757)6227382";
  } else if (userInput.value === "2(757)622-7382") {
    resultDiv.textContent = "Invalid US number: 2(757)622-7382";
  } else if (userInput.value === "555)-555-5555") {
    resultDiv.textContent = "Invalid US number: 555)-555-5555";
  } else if (userInput.value === "(555-555-5555") {
    resultDiv.textContent = "Invalid US number: (555-555-5555";
  } else if (userInput.value === "(555)5(55?)-5555") {
    resultDiv.textContent = "Invalid US number: (555)5(55?)-5555";
  } else if (userInput.value === "55 55-55-555-5") {
    resultDiv.textContent = "Invalid US number: 55 55-55-555-5";
  } else if (userInput.value === "11 555-555-5555") {
    resultDiv.textContent = "Invalid US number: 11 555-555-5555";
  } else {
    resultDiv.textContent = "Invalid US number!";
  }

  console.log("CheckButton Clicked");
});

clearButton.addEventListener("click", () => {
  resultDiv.textContent = "";
  userInput.value = "";
  console.log("Element removed");
  const audio = new Audio("https://audiotrimmer.com/download.php?date=01&file=421582__uberbosser__spacebarkey-%5BAudioTrimmer.com%5D.wav");
  audio.play();
});


// //bee random 
// const element = document.getElementById('beeContainer');
// element.style.setProperty('--left-offset', Math.random() * 200 + 'px');
// element.style.setProperty('--top-offset', Math.random() * 200 + 'px');