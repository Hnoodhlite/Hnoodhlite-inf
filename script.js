const terminalOutput = document.getElementById("terminal-output");

const commands = [
    "Loading hnoodh OS...",
    "Initializing system...",
    "Running scripts...",
    "Welcome, hnoodh!"
];

let i = 0;

function typeCommand() {
    if (i < commands.length) {
        terminalOutput.innerHTML += commands[i] + "\n";
        i++;
        setTimeout(typeCommand, 1000);
    }
}

typeCommand();

const closeButton = document.querySelector(".close-btn");
const terminalWindow = document.getElementById("terminal");

closeButton.addEventListener("click", () => {
    terminalWindow.style.display = "none";
});