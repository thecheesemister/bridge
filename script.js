document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("grid");
    const rows = 10;
    const cols = 10;

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
        gridContainer.appendChild(cell);
    }
});
