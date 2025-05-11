let choices = []; // Array to track player's choices

// Start the game and transition to the first scene
document.getElementById("start-btn").addEventListener("click", function () {
  document.getElementById("start-screen").classList.remove("active");
  document.getElementById("scene-budgeting").classList.add("active");
});

// Handle user's choice in each scene
const options = document.querySelectorAll('.option');
options.forEach(option => {
  option.addEventListener('click', function () {
    const nextScene = option.getAttribute('data-next');
    const response = option.getAttribute('data-response');
    const responseElementId = 'response-' + nextScene.split('-')[1]; // Dynamically generate response ID
    
    // Show the feedback for this choice
    document.getElementById(responseElementId).textContent = response;

    // Move to the next scene
    setTimeout(() => {
      document.getElementById(nextScene).classList.add('active');
      document.getElementById('scene-budgeting').classList.remove('active');
      document.getElementById('scene-credit').classList.remove('active');
      document.getElementById('scene-saving').classList.remove('active');
      
      // Track the player's choice
      choices.push(response);
    }, 1000); // Delay for a second before moving to next scene
  });
});

// Function to show the "See How You Did" button
function showSummary() {
  let summaryText = "Here's how you did:\n\n";
  
  // Create the summary text based on the player's choices
  choices.forEach((choice, index) => {
    summaryText += `Choice ${index + 1}: ${choice}\n\n`;
  });

  // Display the summary text
  document.getElementById("summary-text").textContent = summaryText;
  
  // Transition to the summary screen
  document.getElementById("end-screen").classList.remove("active");
  document.getElementById("summary-screen").classList.add("active");
}

// Function to restart the game
function restartGame() {
  // Reset everything for a fresh start
  choices = [];
  document.getElementById("summary-screen").classList.remove("active");
  document.getElementById("start-screen").classList.add("active");
}
