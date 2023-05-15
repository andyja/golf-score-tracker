let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let resetBtn = document.getElementById("reset-btn");
let submitBtn = document.getElementById("num-players-submit-btn");
let scoreBoard = document.getElementById("score-board");
let count = 0;

function displayScoreBoardHtml(numPlayers) {
  scoreBoard.innerHTML = '';

  for (let i = 1; i <= numPlayers; i++) {
    let scoreboardHtml = `
      <div>
        <h1>Player ${i} - Mini-golf counter:</h1>
        <h2 id="count-el-${i}">0</h2>
        <button onclick="increment(${i})">INCREMENT</button>
        <button class="save-btn" data-player="${i}">SAVE</button>
        <p>Previous entries: <span id="save-el-${i}"></span></p>
        <button onclick="resetPrevious(${i})">RESET</button>
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

function save(playerIndex) {
  console.log("Save clicked for Player", playerIndex);

  let saveEl = document.getElementById("save-el-${i}");  
}
function increment(playerId) {
  let countEl = document.getElementById(`count-el-${playerId}`);
  let saveEl = document.getElementById(`save-el-${playerId}`);

  count++;
  let countStr = count + " - ";
  countEl.innerText = countStr;

  console.log(count);
}






// let count = 0;
// let countStr = "";





// function save() {
//     countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0;
//     count = 0;
// }
// function resetPrevious() {
//     countStr = "";
//     saveEl.textContent = countStr
// }