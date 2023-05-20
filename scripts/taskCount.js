const taskBacklogCount = document.getElementById("taskBacklogCount");
const spaceForBacklog = document.getElementById('spaceForBacklog');

const updateTaskBacklogCount = () => {
    const taskCount = spaceForBacklog.querySelectorAll('.box').length;
    taskBacklogCount.textContent = taskCount.toString();
};

updateTaskBacklogCount();


const taskReadyCount = document.getElementById("taskReadyCount");
const spaceForReady = document.getElementById('spaceForReady');

const updateTaskReadyCount = () => {
    const taskCount = spaceForReady.querySelectorAll('.box').length;
    taskReadyCount.textContent = taskCount.toString();
};

updateTaskReadyCount();


const taskDoingCount = document.getElementById("taskDoingCount");
const spaceForDoing = document.getElementById('spaceForDoing');

const updateTaskDoingCount = () => {
    const taskCount = spaceForDoing.querySelectorAll('.box').length;
    taskDoingCount.textContent = taskCount.toString();
};

updateTaskDoingCount();