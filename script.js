document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("grid");
    const columns = 10; // Number of grid lines (adjustable)
    const rows = Math.ceil(window.innerHeight / (window.innerWidth / columns));

    // Set grid styling dynamically
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    // Create intersection dots
    for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= columns; c++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");

            // Position the dot at intersections
            dot.style.left = `${(c / columns) * 100}%`;
            dot.style.top = `${(r / rows) * 100}%`;

            // Click to toggle red dot
            dot.addEventListener("click", () => {
                dot.classList.toggle("active");
            });

            gridContainer.appendChild(dot);
        }
    }
});
