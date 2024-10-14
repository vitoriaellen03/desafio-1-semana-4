// Dynamic cards
document.addEventListener("DOMContentLoaded", function () {
    const tasks = {
        toDo: [
            {
                priority: "High",
                date: "Oct 16, 24",
                description: "Create app",
                tags: ["IT", "JS", "NS", "LC", "GM"]
            },
            {
                priority: "Mid",
                date: "Oct 09, 24",
                description: "Train for the project",
                tags: ["NS", "GM"]
            },
            {
                priority: "Low",
                date: "Oct 06, 24",
                description: "Make popcorn",
                tags: ["GM"]
            }
        ],
        inProgress: [
            {
                priority: "High",
                date: "Oct 08, 24",
                description: "Debug error",
                tags: ["IT", "JS", "NS", "LC", "GM"]
            }
        ],
        complete: [
            {
                priority: "Low",
                date: "Apr 02, 21",
                description: "Eat a sandwich",
                tags: ["GM"]
            },
            {
                priority: "Mid",
                date: "Jan 28, 86",
                description: "Drink water",
                tags: ["GM"]
            }
        ]
    };

    const tagColors = {
        IT: "#801E8F",
        JS: "#2E4B83",
        NS: "#D92B93",
        LC: "#1A712D",
        GM: "#AF4A00"
    };

    function createCard(task) {
        const card = document.createElement("div");
        card.classList.add("kanban-card");

        card.innerHTML = `
        <div class="group">
            <p class="${task.priority.toLowerCase()} priority">${task.priority}</p> 
            <p class="date">${task.date}</p>
        </div>

        <div class="group">
        <p class="text task-desc">${task.description}</p>
        </div>

        <div class="group">
            <div class="close">
                <div class="line line1"></div>
                <div class="line line2"></div>
            </div>
            <div class="tags">
                ${task.tags.map(tag => `<span style="background-color: ${tagColors[tag]};">${tag}</span>`).join('')}
            </div>
        </div>
        `;

        return card;
    }

    // Preencher as colunas com as tarefas
    const toDoContainer = document.getElementById("to-do-cards");
    const inProgressContainer = document.getElementById("in-progress-cards");
    const completeContainer = document.getElementById("complete-cards");

    tasks.toDo.forEach(task => {
        toDoContainer.appendChild(createCard(task));
    });

    tasks.inProgress.forEach(task => {
        inProgressContainer.appendChild(createCard(task));
    });

    tasks.complete.forEach(task => {
        completeContainer.appendChild(createCard(task));
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const kanbanBoard = document.querySelector('.kanban-board');

    let isDragging = false;
    let startX, scrollLeft;

    // Para mouse
    kanbanBoard.addEventListener('mousedown', (e) => {
        isDragging = true;
        kanbanBoard.classList.add('active');
        startX = e.pageX - kanbanBoard.offsetLeft;
        scrollLeft = kanbanBoard.scrollLeft;
    });

    kanbanBoard.addEventListener('mouseleave', () => {
        isDragging = false;
        kanbanBoard.classList.remove('active');
    });

    kanbanBoard.addEventListener('mouseup', () => {
        isDragging = false;
        kanbanBoard.classList.remove('active');
    });

    kanbanBoard.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - kanbanBoard.offsetLeft;
        const walk = (x - startX) * 2;
        kanbanBoard.scrollLeft = scrollLeft - walk;
    });

    // Para toque em dispositivos móveis
    kanbanBoard.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - kanbanBoard.offsetLeft;
        scrollLeft = kanbanBoard.scrollLeft;
    });

    kanbanBoard.addEventListener('touchend', () => {
        isDragging = false;
    });

    kanbanBoard.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - kanbanBoard.offsetLeft;
        const walk = (x - startX) * 2;
        kanbanBoard.scrollLeft = scrollLeft - walk;
    });
});
