let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let resetBtn = document.getElementById("reset-btn");
let submitBtn = document.getElementById("num-players-submit-btn");
let scoreBoard = document.getElementById("score-board");

function displayScoreBoardHtml(numPlayers) {
  scoreBoard.innerHTML = '';

  for (let i = 1; i <= numPlayers; i++) {
    let scoreboardHtml = `
      <div>
        <h1>Player ${i} - Mini-golf counter:</h1>
        <h2 id="count-el">0</h2>
        <button onclick="increment()">INCREMENT</button>
        <button onclick="save()">SAVE</button>
        <p>Previous entries: <span id="save-el"></span></p>
        <button onclick="resetPrevious())">RESET</button>
      </div>
    `;
    scoreBoard.innerHTML += scoreboardHtml;
  }
}

submitBtn.addEventListener('click', function() {
  const numPlayersInput = document.getElementById("num-players-input");
  const numPlayers = parseInt(numPlayersInput.value);
  displayScoreBoardHtml(numPlayers);
});






let count = 0;
let countStr = "";




function increment() {
    count += 1;
    countEl.textContent = count;
}
function save() {
    countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0;
    count = 0;
}
function resetPrevious() {
    countStr = "";
    saveEl.textContent = countStr
}