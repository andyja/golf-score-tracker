let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let resetBtn = document.getElementById("reset-btn");
let submitBtn = document.getElementById("num-players-submit-btn");
let scoreBoard = document.getElementById("score-board");
let playerNum = document.getElementById("player-num");
let counts = [];
function displayScoreBoardHtml(numPlayers) {
  scoreBoard.innerHTML = '';
  for (let i = 1; i <= numPlayers; i++) {
    let scoreboardHtml = `
    <div class="eachScore">
      <h1>Player ${i} - Mini-golf counter:</h1>
      <h2 id="count-el-${i}">0</h2>
      <p>Accumulated Score: <span id="accumulated-score-${i}">0</span></p>
      <div>
        <button class="increment-btn" onclick="increment(${i})">INCREMENT</button>
        <button class="decrement-btn" onclick="decrement(${i})">DECREMENT</button>
      </div>
      <div>  
        <button class="save-btn" data-player="${i}">SAVE</button>
      </div>
      <p>Previous entries: <span id="save-el-${i}"></span></p>
      <div>
        <button class="remove-last-btn" onclick="resetPrevious(${i})">REMOVE LAST SCORE</button>
        <p>Accumulated Score: <span id="accumulated-score2-${i}">0</span></p>
      </div>
    </div>
  `;

    scoreBoard.innerHTML += scoreboardHtml;
  }
  playerNum.remove()
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
  
  let accumulatedScoreEl = document.getElementById(`accumulated-score-${playerIndex}`);
  let currentCount = counts[playerIndex] || 0;
  let accumulatedScore = parseInt(accumulatedScoreEl.textContent) + currentCount;
  accumulatedScoreEl.textContent = accumulatedScore;

  counts[playerIndex] = 0;
  countEl.textContent = counts[playerIndex];
}

function resetPrevious(playerIndex) {
  let saveEl = document.getElementById(`save-el-${playerIndex}`);
  let previousEntries = saveEl.textContent.trim().split(' - ');
  previousEntries.pop();
  saveEl.textContent = previousEntries.join(' - ');
}
