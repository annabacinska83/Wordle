async function readFile() {
    const response = await fetch('./slova.txt');
    const content = await response.text();
    return content;
}

async function main() {
    const fileContent = await readFile();
    const words = fileContent.split("\n");

    let row = 0;
    let col = 0; 

    document.addEventListener("keyup", function (el) {
        getNthColInRow(row, col).querySelector("h1").innerText = el.key;

        col++;
        
        if (col >= 5) {
            if (row >= 5) {
                alert("game over");
            }

            row++;
            col = 0;
        }
    });
}

function getNthColInRow(row, n) {
    return (document.querySelectorAll(".row")[row]).querySelectorAll(".cell")[n];
}

document.addEventListener("DOMContentLoaded", function () {
    main();
});