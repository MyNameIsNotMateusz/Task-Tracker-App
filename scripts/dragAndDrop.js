const dragStart = (event) => {
    const taskId = event.target.id;
    event.dataTransfer.setData("text/plain", taskId);
    event.target.style.opacity = "0.2";
    event.dataTransfer.effectAllowed = "move";
};

const dragOver = (event) => {
    event.preventDefault();
};

const drop = (event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");
    const task = document.getElementById(taskId);

    const target = event.currentTarget.closest("#containerBacklog, #containerReady, #containerDoing");

    const spaceMap = {
        containerBacklog: "spaceForBacklog",
        containerReady: "spaceForReady",
        containerDoing: "spaceForDoing",
      };

    if (target) {
        const targetId = target.id;
        const targetSpace = document.getElementById(spaceMap[targetId]);
        targetSpace.appendChild(task);
    } else {
        console.log("No target found!");
    }

    task.style.opacity = "1";

    updateTaskBacklogCount();
    updateTaskReadyCount();
    updateTaskDoingCount();
};




