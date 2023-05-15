let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let resetBtn = document.getElementById("reset-btn");
let submitBtn = document.getElementById("num-players-submit-btn");
let scoreBoard = document.getElementById("score-board");
let counts = [];

function displayScoreBoardHtml(numPlayers) {
  scoreBoard.innerHTML = '';
  for (let i = 1; i <= numPlayers; i++) {
    let scoreboardHtml = `
      <div>
        <h1>Player ${i} - Mini-golf counter:</h1>
        <h2 id="count-el-${i}">0</h2>
        <button class="increment-btn" onclick="increment(${i})">INCREMENT</button>
        <button class="decrement-btn" onclick="decrement(${i})">DECREMENT</button>
        <button class="save-btn" data-player="${i}">SAVE</button>
        <p>Previous entries: <span id="save-el-${i}"></span></p>
        <button onclick="resetPrevious(${i})">REMOVE LAST SCORE</button>
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

scoreBoard.addEventListener('click', function(event) {
  if (event.target.classList.contains('save-btn')) {
    const playerIndex = event.target.dataset.player;
    save(playerIndex);
  }
});
function increment(playerId) {
  let countEl = document.getElementById(`count-el-${playerId}`);
  if (!counts[playerId]) {
    counts[playerId] = 0;
  }
  counts[playerId]++;
  let countStr = counts[playerId];
  countEl.textContent = countStr;
}
function decrement(playerId) {
  let countEl = document.getElementById(`count-el-${playerId}`);
  if (!counts[playerId]) {
    counts[playerId] = 0;
  }
  else if (counts[playerId] > 0){
  counts[playerId]--;
  let countStr = counts[playerId];
  countEl.textContent = countStr;
  }
}
function save(playerIndex) {
  let saveEl = document.getElementById(`save-el-${playerIndex}`);
  let countEl = document.getElementById(`count-el-${playerIndex}`);
  let countStr = counts[playerIndex] || 0;
  saveEl.textContent += countStr + " - ";
  counts[playerIndex] = 0;
  countEl.textContent = counts[playerIndex];
}
function resetPrevious(playerIndex) {
  let saveEl = document.getElementById(`save-el-${playerIndex}`);
  let previousEntries = saveEl.textContent.trim().split(' - ');
  previousEntries.pop();
  saveEl.textContent = previousEntries.join(' - ');
}
