let choices = {
  1: {
    '50/30/20 rule': { text: "You followed the 50/30/20 rule. You've allocated 50% to your needs, 30% to your wants, and 20% to savings." },
    'Zero-based budget': { text: "You assigned every dollar to a purpose. Your budget is tight but well-managed!" },
    'Save 20%': { text: "You saved 20% and spent the rest. Your savings are growing, but you might want to track your spending more closely." }
  },
  2: {
    'Emergency Fund': { text: "You set up an emergency fund in a high-yield savings account. You're preparing for any unexpected expenses." },
    'Invest': { text: "You invested in stocks. Your potential for growth is high, but so is the risk." },
    'Retirement': { text: "You opened a retirement account. You're saving for the future, and benefiting from potential tax breaks." }
  },
  3: {
    'Accept and Use Responsibly': { text: "You accepted the credit card with a $300 limit and use it responsibly. You're building your credit by paying off the balance in full each month." },
    'Decline': { text: "You declined the credit card offer. You're avoiding credit and living debt-free." },
    'Use Irresponsibly': { text: "You accepted the credit card and maxed it out, paying only the minimum balance. This could hurt your credit score and put you in debt." }
  }
};

let gameProgress = {
  1: "",
  2: "",
  3: ""
};

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
  hideAllSections();
  document.getElementById('scene1').classList.add('active');
}

function hideAllSections() {
  const sections = document.querySelectorAll('.scene');
  sections.forEach(section => section.classList.remove('active'));
}

function makeChoice(scene, choice) {
  gameProgress[scene] = choices[scene][choice].text;
  updateSummary(); // Update the summary with the new choice
  if (scene === 3) {
    document.getElementById('end-screen').classList.add('active');
  } else {
    showScene(scene + 1);
  }
}

function showScene(sceneNumber) {
  hideAllSections();
  const selectedScene = document.getElementById(`scene${sceneNumber}`);
  selectedScene.classList.add('active');
}

function updateSummary() {
  let summaryContainer = document.getElementById('summary-container');
  summaryContainer.innerHTML = ""; // Clear previous summary content
  let summaryText = "<h3>Your Financial Journey:</h3><ul>";
  for (let scene in gameProgress) {
    summaryText += `<li><strong>Scene ${scene}:</strong> ${gameProgress[scene]}</li>`;
  }
  summaryText += "</ul>";
  summaryContainer.innerHTML = summaryText;
}

function showSummary() {
  let summaryText = "Your choices:\n";
  for (let scene in gameProgress) {
    summaryText += `${scene}: ${gameProgress[scene]}\n`;
  }
  alert(summaryText);
}
