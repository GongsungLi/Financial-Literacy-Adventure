let choices = {
  1: {
    '50/30/20': { text: "Used the 50/30/20 rule. Great budgeting!", correct: true },
    'SpendAll': { text: "Spent everything. That's not sustainable!", correct: false }
  },
  2: {
    'SaveEmergency': { text: "Saved in an emergency fund. Smart choice!", correct: true },
    'SpendShoes': { text: "You bought fancy shoes. Now you're broke!", correct: false }
  },
  3: {
    'UseResponsibly': { text: "Used credit responsibly. Your score improves!", correct: true },
    'MaxOut': { text: "You maxed out your card. That hurts your credit!", correct: false }
  }
};

let gameProgress = {};

function hideAllSections() {
  document.querySelectorAll('.scene').forEach(sec => sec.classList.remove('active'));
}

function showHome() {
  hideAllSections();
  document.getElementById('start-screen').classList.add('active');
}

function showAbout() {
  hideAllSections();
  document.getElementById('about').classList.add('active');
}

function showResources() {
  hideAllSections();
  document.getElementById('resources').classList.add('active');
}

function startGame() {
  gameProgress = {};
  hideAllSections();
  document.getElementById('scene1').classList.add('active');
}

function makeChoice(scene, option) {
  const selected = choices[scene][option];
  gameProgress[`Scene ${scene}`] = selected.text;

  if (!selected.correct) {
    showEndScreen(`You made a poor financial choice in Scene ${scene}.`);
  } else {
    if (scene === 3) {
      showEndScreen("You completed the adventure! Here's how you did:");
    } else {
      goToScene(scene + 1);
    }
  }
}

function goToScene(num) {
  hideAllSections();
  document.getElementById(`scene${num}`).classList.add('active');
}

function showEndScreen(message) {
  hideAllSections();
  const summary = document.getElementById('summary-container');
  summary.innerHTML = `<p>${message}</p><ul>`;
  for (let scene in gameProgress) {
    summary.innerHTML += `<li>${scene}: ${gameProgress[scene]}</li>`;
  }
  summary.innerHTML += `</ul>`;
  document.getElementById('end-screen').classList.add('active');
}

function restartGame() {
  gameProgress = {};
  showHome();
}
