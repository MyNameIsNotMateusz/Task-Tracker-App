const sortBacklogByPriority = () => {
  const selectElements = Array.from(document.querySelectorAll(".backlogPriority"));

  const divData = selectElements.map((selectElement) => {
    const priority = selectElement.value;
    const id = selectElement.closest(".box").parentElement.id;
    return { id, priority };
  });

  const priorityValues = {
    Low: 1,
    Medium: 2,
    High: 3,
    "": 4,
  };

  divData.sort((a, b) => {
    const priorityA = priorityValues[a.priority];
    const priorityB = priorityValues[b.priority];
    return priorityB - priorityA;
  });

  const spaceForBacklog = document.getElementById("spaceForBacklog");
  divData.forEach((data) => {
    const div = document.getElementById(data.id);
    spaceForBacklog.appendChild(div);
  });
};
spaceForBacklog.addEventListener("change", (event) => {
  if (event.target.classList.contains("backlogPriority")) {
    sortBacklogByPriority();
  };
});


const sortReadyByPriority = () => {
  const selectElements = Array.from(document.querySelectorAll(".readyPriority"));

  const divData = selectElements.map((selectElement) => {
    const priority = selectElement.value;
    const id = selectElement.closest(".box").parentElement.id;
    return { id, priority };
  });

  const priorityValues = {
    Low: 1,
    Medium: 2,
    High: 3,
    "": 4,
  };

  divData.sort((a, b) => {
    const priorityA = priorityValues[a.priority];
    const priorityB = priorityValues[b.priority];
    return priorityB - priorityA;
  });

  const spaceForReady = document.getElementById("spaceForReady");
  divData.forEach((data) => {
    const div = document.getElementById(data.id);
    spaceForReady.appendChild(div);
  });
};
spaceForReady.addEventListener("change", (event) => {
  if (event.target.classList.contains("readyPriority")) {
    sortReadyByPriority();
  };
});


const sortDoingByPriority = () => {
  const selectElements = Array.from(document.querySelectorAll(".doingPriority"));

  const divData = selectElements.map((selectElement) => {
    const priority = selectElement.value;
    const id = selectElement.closest(".box").parentElement.id;
    return { id, priority };
  });

  const priorityValues = {
    Low: 1,
    Medium: 2,
    High: 3,
    "": 4,
  };

  divData.sort((a, b) => {
    const priorityA = priorityValues[a.priority];
    const priorityB = priorityValues[b.priority];
    return priorityB - priorityA;
  });

  const spaceForDoing = document.getElementById("spaceForDoing");
  divData.forEach((data) => {
    const div = document.getElementById(data.id);
    spaceForDoing.appendChild(div);
  });
};
spaceForDoing.addEventListener("change", (event) => {
  if (event.target.classList.contains("doingPriority")) {
    sortDoingByPriority();
  };
});
