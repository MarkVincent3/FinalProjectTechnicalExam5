
const agents = [
  {
    "agent": "Jett",
    "clues": [
      "The opponent used an ability that allows them to dash through the air.",
      "The opponent used an ultimate that rains down daggers from the sky.",
      "The opponent played aggressively, often engaging in close-quarters combat."
    ]
  },
  {
    "agent": "Sova",
    "clues": [
      "The opponent used an ability that sends out a drone that reveals enemy locations.",
      "The opponent used an ultimate that sends out a massive arrow that marks all enemies in its path.",
      "The opponent played cautiously, using their abilities to gather information before engaging."
    ]
  },
  {
    "agent": "Cypher",
    "clues": [
      "The opponent used an ability that traps enemies in a cage.",
      "The opponent used an ultimate that creates a zone where enemies cannot use their abilities.",
      "The opponent played defensively, using their abilities to control the battlefield and prevent enemies from advancing."
    ]
  },
  {
    "agent": "Raze",
    "clues": [
      "The opponent used an ability that launches a rocket that can damage multiple enemies.",
      "The opponent used an ultimate that deploys a boom bot that automatically seeks out and damages enemies.",
      "The opponent played aggressively, using their abilities to clear out enemy positions and push through defenses."
    ]
  },
  {
    "agent": "Omen",
    "clues": [
      "The opponent used an ability that allows them to teleport to a specific location.",
      "The opponent used an ultimate that sends out a wave that briefly teleports all enemies to a different location.",
      "The opponent played strategically, using their abilities to gain the upper hand in positioning and surprise their opponents."
    ]
  }
]

let currentAgent;
let attempts = 3;

function startGame() {
  let randomAgentIndex = Math.floor(Math.random() * agents.length);
  currentAgent = agents[randomAgentIndex];
  attempts = 3;

  displayClues();
}

function displayClues() {
  let cluesDiv = document.getElementById("clues");
  cluesDiv.innerHTML = "<h2>Clues:</h2>";
  currentAgent.clues.forEach((clue) => {
    cluesDiv.innerHTML += "<p>" + clue + "</p>";
  });
}

function getClueDescription(clue) {
    switch (clue.type) {
        case "ability":
            return `The opponent used an ability: ${clue.description}`;
        case "ultimate":
            return `The opponent used an ultimate: ${clue.description}`;
        case "playstyle":
            return `The opponent played: ${clue.description}`;
        default:
            return "Unknown clue type";
    }
}

function checkGuess() {
    let guess = document.getElementById("guess").value.toLowerCase();
    let feedback = document.getElementById("feedback");

    if (guess === currentAgent.agent.toLowerCase()) {
        feedback.innerHTML = `Congratulations! You guessed correctly. It was ${currentAgent.agent}!`;
    } else {
        attempts--;
        if (attempts > 0) {
            feedback.innerHTML = `Incorrect guess. Try again! Attempts left: ${attempts}`;
        } else {
            feedback.innerHTML = `Out of attempts! The undisclosed agent was ${currentAgent.agent}.`;
            startGame(); // Start a new round
        }
    }
    document.getElementById("guess").value = ""; // Clear the input field
}
// Starting the game on page load
window.onload = startGame;
