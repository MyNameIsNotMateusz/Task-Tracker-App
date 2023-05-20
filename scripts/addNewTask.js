const addAndRemoveTask = () => {
    const addNewTaskToBacklog = document.querySelector("#addNewTaskToBacklog");
    const spaceForBacklog = document.querySelector("#spaceForBacklog");

    addNewTaskToBacklog.addEventListener("click", () => {
        const uniqueId = generateUniqueId();
        spaceForBacklog.insertAdjacentHTML(
            "beforeend",
            `<div 
            draggable="true"
            ondragstart="dragStart(event)"
            id="${uniqueId}">
            <div class="box">
         <label>Priority</label>
         <select 
         class="backlogPriority">
         <option></option>
         <option>High</option>
         <option>Medium</option>
         <option>Low</option>
         </select>
         <i class="trash fa-solid fa-trash fa-fade" id="trash" data-id="${uniqueId}"></i>
         <textarea></textarea>
         <span>
         <p><label>Deadline:</label></p>
         <i class="fa-regular fa-calendar"></i>
         <select>
         <option></option>
         <option>31</option>
         <option>30</option>
         <option>29</option>
         <option>28</option>
         <option>27</option>
         <option>26</option>
         <option>25</option>
         <option>24</option>
         <option>23</option>
         <option>22</option>
         <option>21</option>
         <option>20</option>
         <option>19</option>
         <option>18</option>
         <option>17</option>
         <option>16</option>
         <option>15</option>
         <option>14</option>
         <option>13</option>
         <option>12</option>
         <option>11</option>
         <option>10</option>
         <option>09</option>
         <option>08</option>
         <option>07</option>
         <option>06</option>
         <option>05</option>
         <option>04</option>
         <option>03</option>
         <option>02</option>
         <option>01</option>
         </select>
         <select>
         <option></option>
         <option>12</option>
         <option>11</option>
         <option>10</option>
         <option>09</option>
         <option>08</option>
         <option>07</option>
         <option>06</option>
         <option>05</option>
         <option>04</option>
         <option>03</option>
         <option>02</option>
         <option>01</option>
         </select>
         <select>
         <option></option>
         <option>2030</option>
         <option>2029</option>
         <option>2028</option>
         <option>2027</option>
         <option>2026</option>
         <option>2025</option>
         <option>2024</option>
         <option>2023</option>
         </select>
         </span>
         </div>
         </div>`
        );

        sortBacklogByPriority();

        updateTaskBacklogCount();


        const trash = document.querySelector(`#trash[data-id="${uniqueId}"]`);
        const spaceToDelete = document.querySelector(`#${uniqueId}`);

        trash.addEventListener("click", () => {
            spaceToDelete.remove();
            updateTaskBacklogCount();
            updateTaskReadyCount();
            updateTaskDoingCount();
        });
    });

    const addNewTaskToReady = document.querySelector("#addNewTaskToReady");
    const spaceForReady = document.querySelector("#spaceForReady");

    addNewTaskToReady.addEventListener("click", () => {
        const uniqueId = generateUniqueId();
        spaceForReady.insertAdjacentHTML(
            "beforeend",
            `<div 
            draggable="true"
            ondragstart="dragStart(event)"
            id="${uniqueId}">
            <div class="box">
         <label>Priority</label>
         <select class="readyPriority">
         <option></option>
         <option>High</option>
         <option>Medium</option>
         <option>Low</option>
         </select>
         <i class="trash fa-solid fa-trash fa-fade" id="trash" data-id="${uniqueId}"></i>
         <textarea></textarea>
         <span>
         <p><label>Deadline:</label></p>
         <i class="fa-regular fa-calendar"></i>
         <select>
         <option></option>
         <option>31</option>
         <option>30</option>
         <option>29</option>
         <option>28</option>
         <option>27</option>
         <option>26</option>
         <option>25</option>
         <option>24</option>
         <option>23</option>
         <option>22</option>
         <option>21</option>
         <option>20</option>
         <option>19</option>
         <option>18</option>
         <option>17</option>
         <option>16</option>
         <option>15</option>
         <option>14</option>
         <option>13</option>
         <option>12</option>
         <option>11</option>
         <option>10</option>
         <option>09</option>
         <option>08</option>
         <option>07</option>
         <option>06</option>
         <option>05</option>
         <option>04</option>
         <option>03</option>
         <option>02</option>
         <option>01</option>
         </select>
         <select>
         <option></option>
         <option>12</option>
         <option>11</option>
         <option>10</option>
         <option>09</option>
         <option>08</option>
         <option>07</option>
         <option>06</option>
         <option>05</option>
         <option>04</option>
         <option>03</option>
         <option>02</option>
         <option>01</option>
         </select>
         <select>
         <option></option>
         <option>2030</option>
         <option>2029</option>
         <option>2028</option>
         <option>2027</option>
         <option>2026</option>
         <option>2025</option>
         <option>2024</option>
         <option>2023</option>
         </select>
         </span>
         </div>
         </div>`
        );

        sortReadyByPriority();
        updateTaskReadyCount();

        const trash = document.querySelector(`#trash[data-id="${uniqueId}"]`);
        const spaceToDelete = document.querySelector(`#${uniqueId}`);

        trash.addEventListener("click", () => {
            spaceToDelete.remove();
            updateTaskBacklogCount();
            updateTaskReadyCount();
            updateTaskDoingCount();
        });


    });

    const addNewTaskToDoing = document.querySelector("#addNewTaskToDoing");
    const spaceForDoing = document.querySelector("#spaceForDoing");

    addNewTaskToDoing.addEventListener("click", () => {
        const uniqueId = generateUniqueId();
        spaceForDoing.insertAdjacentHTML(
            "beforeend",
            `<div 
            draggable="true"
            ondragstart="dragStart(event)"
            id="${uniqueId}">
            <div class="box">
         <label>Priority</label>
         <select
         class="doingPriority">
         <option></option>
         <option>High</option>
         <option>Medium</option>
         <option>Low</option>
         </select>
         <i class="trash fa-solid fa-trash fa-fade" id="trash" data-id="${uniqueId}"></i>
         <textarea></textarea>
         <span>
         <p><label>Deadline:</label></p>
         <i class="fa-regular fa-calendar"></i>
         <select>
         <option></option>
         <option>31</option>
         <option>30</option>
         <option>29</option>
         <option>28</option>
         <option>27</option>
         <option>26</option>
         <option>25</option>
         <option>24</option>
         <option>23</option>
         <option>22</option>
         <option>21</option>
         <option>20</option>
         <option>19</option>
         <option>18</option>
         <option>17</option>
         <option>16</option>
         <option>15</option>
         <option>14</option>
         <option>13</option>
         <option>12</option>
         <option>11</option>
         <option>10</option>
         <option>09</option>
         <option>08</option>
         <option>07</option>
         <option>06</option>
         <option>05</option>
         <option>04</option>
         <option>03</option>
         <option>02</option>
         <option>01</option>
         </select>
         <select>
         <option></option>
         <option>12</option>
         <option>11</option>
         <option>10</option>
         <option>09</option>
         <option>08</option>
         <option>07</option>
         <option>06</option>
         <option>05</option>
         <option>04</option>
         <option>03</option>
         <option>02</option>
         <option>01</option>
         </select>
         <select>
         <option></option>
         <option>2030</option>
         <option>2029</option>
         <option>2028</option>
         <option>2027</option>
         <option>2026</option>
         <option>2025</option>
         <option>2024</option>
         <option>2023</option>
         </select>
         </span>
         </div>
         </div>`
        );

        sortDoingByPriority();
        updateTaskDoingCount();

        const trash = document.querySelector(`#trash[data-id="${uniqueId}"]`);
        const spaceToDelete = document.querySelector(`#${uniqueId}`);

        trash.addEventListener("click", () => {
            spaceToDelete.remove();
            updateTaskBacklogCount();
            updateTaskReadyCount();
            updateTaskDoingCount();
        });
    });
};

const generateUniqueId = () => {
    return `${Math.random().toString(36).substr(2, 9)}`;
};

addAndRemoveTask();

