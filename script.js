// script.js

document.getElementById('start-btn').addEventListener('click', () => {
  switchScene('start-screen', 'scene-budgeting');
});

const optionButtons = document.querySelectorAll('.option');
optionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const currentScene = btn.closest('.scene').id;
    const nextScene = btn.getAttribute('data-next');
    switchScene(currentScene, nextScene);
  });
});

function switchScene(currentId, nextId) {
  document.getElementById(currentId).classList.remove('active');
  document.getElementById(nextId).classList.add('active');
}
