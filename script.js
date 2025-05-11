// JavaScript Function #1
function chooseOption(option) {
  let message = "";

  if (option === "save") {
    message = "Great! You’ve built an emergency fund and reduced stress.";
  } else if (option === "spend") {
    message = "Oops! Now you're short when unexpected expenses hit.";
  } else if (option === "invest") {
    message = "Smart! Investing early helps grow your money over time.";
  }

  // JavaScript Function #2
  updateResult(message);
}

// JavaScript Function #3
function updateResult(text) {
  const result = document.getElementById("result");
  result.textContent = text;
}
