async function readFile() {
    const response = await fetch('./slova.txt');
    const content = await response.text();
    return content;
}

async function main() {
    const fileContent = await readFile();
    
    const words = fileContent.split("\n");
}

document.addEventListener("DOMContentLoaded", function () {
    main();
});