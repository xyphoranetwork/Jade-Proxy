const textOptions = [
    "best static proxy!",
    "originally called emerald.",
    "made by BIW Services!",
    "supercalifragilisticexpialidocious!"
];

function changeText() {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    document.getElementById("dynamic-text").innerText = textOptions[randomIndex];
}

window.onload = changeText;

function submitSearch() {
    const searchQuery = document.getElementById("search-bar").value;
    alert("Searching for: " + searchQuery);
    document.getElementById("search-bar").value = '';
}
