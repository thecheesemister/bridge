document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("grid");
    const columns = 50; // Adjust for smaller/larger grid cells
    const rows = Math.ceil(window.innerHeight / (window.innerWidth / columns));

    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < columns * rows; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
        gridContainer.appendChild(cell);
    }
});
