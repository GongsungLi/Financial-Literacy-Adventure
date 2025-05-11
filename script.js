// script.js

// Start the game by showing the first scene
document.getElementById('start-btn').addEventListener('click', () => {
  switchScene('start-screen', 'scene-budgeting');
});

// Handle option button clicks and move to the next scene
const optionButtons = document.querySelectorAll('.option');
optionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const currentScene = btn.closest('.scene').id;
    const nextScene = btn.getAttribute('data-next');
    const response = btn.getAttribute('data-response');
    
    // Show the response for the current scene
    const responseElement = document.getElementById(`response-${currentScene.split('-')[1]}`);
    responseElement.textContent = response;

    // Move to the next scene
    switchScene(currentScene, nextScene);
  });
});

// Function to switch between scenes
function switchScene(currentId, nextId) {
  document.getElementById(currentId).classList.remove('active');
  document.getElementById(nextId).classList.add('active');
}
