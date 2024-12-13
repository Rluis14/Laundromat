// Select all machines
const machines = document.querySelectorAll('.machine');
const message = document.getElementById('message');

// Function declarations
function startWashing(machine) {
    machine.dataset.status = 'washing';
    message.textContent = `${machine.textContent} is now washing!`;
    setTimeout(() => finishWashing(machine), 5000); // Simulate washing time
}

function finishWashing(machine) {
    machine.dataset.status = 'done';
    message.textContent = `${machine.textContent} is done! Ready for pickup.`;
}

// Function expression
const resetMachine = function(machine) {
    machine.dataset.status = 'idle';
    message.textContent = `${machine.textContent} is reset and ready to use.`;
};

// Arrow function
const handleMachineClick = (event) => {
    const machine = event.target;
    const status = machine.dataset.status;

    if (status === 'idle') {
        startWashing(machine);
    } else if (status === 'done') {
        resetMachine(machine);
    } else {
        message.textContent = `${machine.textContent} is already washing. Please wait.`;
    }
};

// Attach event listeners to machines
machines.forEach((machine) => {
    machine.addEventListener('click', handleMachineClick);
});
