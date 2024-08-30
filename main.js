let MenuScreen = document.getElementById('MenuScreen');
let MainScreen = document.getElementById('MainScreen');
let ScoreScreen = document.getElementById('ScoreScreen');
let ScoreScreenImage = document.getElementById('bgimgth');
let Output = document.getElementById('output');
let Replay = document.getElementById('replay'); 
let Aboutbtn = document.getElementById('aboutbtn');
let About = document.getElementById('about');
let Aboutclose = document.getElementById('closeabout');

let screen = document.getElementById('screen');
let np1 = document.getElementById('np1');
let np2 = document.getElementById('np2');
let np3 = document.getElementById('np3');
let np4 = document.getElementById('np4');
let np5 = document.getElementById('np5');
let np6 = document.getElementById('np6');
let np7 = document.getElementById('np7');
let np8 = document.getElementById('np8');
let np9 = document.getElementById('np9');
let np0 = document.getElementById('np0');
let play = document.getElementById('bgbtn');
let user_input = '';
let attempt = 10;
let randomNum; // Declare randomNum variable

function blk_dis(sec1, sec2) {
  sec1.style.display = 'none';
  sec2.style.display = 'block';
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumber() {
  randomNum = String(randomNumber(100, 999)); // Generate a new random number
}

function gameLogic(userInput) {
  const input = String(userInput);
  let clues = [];

  if (input === randomNum) return "Unlocked";
  if (input.length !== 3 || isNaN(input)) return "Oh no";

  for (let i = 0; i < randomNum.length; i++) {
    if (input[i] === randomNum[i]) {
      clues.push("C");
    } else if (randomNum.includes(input[i])) {
      clues.push("N");
    } else {
      clues.push("X");
    }
  }

  clues.sort();
  return clues.join(" ");
}

function disableButtons() {
  np1.style.pointerEvents = 'none';
  np2.style.pointerEvents = 'none';
  np3.style.pointerEvents = 'none';
  np4.style.pointerEvents = 'none';
  np5.style.pointerEvents = 'none';
  np6.style.pointerEvents = 'none';
  np7.style.pointerEvents = 'none';
  np8.style.pointerEvents = 'none';
  np9.style.pointerEvents = 'none';
  np0.style.pointerEvents = 'none';
}

function enableButtons() {
  np1.style.pointerEvents = 'auto';
  np2.style.pointerEvents = 'auto';
  np3.style.pointerEvents = 'auto';
  np4.style.pointerEvents = 'auto';
  np5.style.pointerEvents = 'auto';
  np6.style.pointerEvents = 'auto';
  np7.style.pointerEvents = 'auto';
  np8.style.pointerEvents = 'auto';
  np9.style.pointerEvents = 'auto';
  np0.style.pointerEvents = 'auto';
}

function displayNum(value) {
  if (user_input.length < 3) {
    user_input += String(value);
    screen.innerHTML = user_input;

    if (user_input.length === 3) {
      const result = gameLogic(user_input);
      screen.innerHTML = result;
      attempt--;

      if (result === "Unlocked") {
        blk_dis(MainScreen, ScoreScreen);
        ScoreScreenImage.style.backgroundImage = "url('imgth2.png')";
        Output.innerHTML = "Your Mission Is Successful";
        Output.style.backgroundColor = "green";
        disableButtons();
      } else if (attempt <= 0) {
        blk_dis(MainScreen, ScoreScreen);
        ScoreScreenImage.style.backgroundImage = "url('imgth1.png')";
        Output.innerHTML = "You Lost, you are under arrest";
        Output.style.backgroundColor = "red";
        disableButtons();
      }

      // Clear input for next round
      user_input = '';
    }
  }
}

play.addEventListener('click', () => {
  blk_dis(MenuScreen, MainScreen);
  generateRandomNumber(); // Generate random number at the start
});

np1.addEventListener('click', () => displayNum(1));
np2.addEventListener('click', () => displayNum(2));
np3.addEventListener('click', () => displayNum(3));
np4.addEventListener('click', () => displayNum(4));
np5.addEventListener('click', () => displayNum(5));
np6.addEventListener('click', () => displayNum(6));
np7.addEventListener('click', () => displayNum(7));
np8.addEventListener('click', () => displayNum(8));
np9.addEventListener('click', () => displayNum(9));
np0.addEventListener('click', () => displayNum(0));

Replay.addEventListener('click', () => {
  blk_dis(ScoreScreen, MenuScreen);
  attempt = 10; // Reset attempts
  enableButtons(); // Re-enable buttons
  generateRandomNumber(); // Generate a new random number for replay
  screen.innerHTML = ''; // Clear the screen display
});

Aboutbtn.addEventListener('click', ()=> {
    if (About.style.display !== 'block') {
        About.style.display = 'block'
    }
})

Aboutclose.addEventListener('click', () => {
    if (About.style.display !== 'none') {
        About.style.display = 'none'
    }
})

/*

*/