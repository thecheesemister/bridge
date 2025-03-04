document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("grid");
    const columns = 20; // Number of grid columns
    const rows = 20; // Number of grid rows

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const cellWidth = screenWidth / columns;
    const cellHeight = screenHeight / rows;

    // Create vertical and horizontal grid lines
    for (let i = 0; i <= columns; i++) {
        const line = document.createElement("div");
        line.classList.add("grid-line");
        line.style.position = "absolute";
        line.style.left = `${(i / columns) * 100}%`;
        line.style.top = "0";
        line.style.width = "1px";
        line.style.height = "100%";
        gridContainer.appendChild(line);
    }
    for (let i = 0; i <= rows; i++) {
        const line = document.createElement("div");
        line.classList.add("grid-line");
        line.style.position = "absolute";
        line.style.top = `${(i / rows) * 100}%`;
        line.style.left = "0";
        line.style.height = "1px";
        line.style.width = "100%";
        gridContainer.appendChild(line);
    }

    // Create clickable intersection dots
    for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= columns; c++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");

            // Position the dot at intersection points
            dot.style.left = `${c * cellWidth}px`;
            dot.style.top = `${r * cellHeight}px`;

            // Click to toggle red dot
            dot.addEventListener("click", () => {
                dot.classList.toggle("active");
            });

            document.body.appendChild(dot);
        }
    }
});
