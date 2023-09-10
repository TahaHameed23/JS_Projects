function updateValue(operation) {
    let n = parseInt(document.querySelector(".no").innerHTML);
    switch (operation) {
        case "increment":
            document.querySelector(".no").innerHTML = n + 1;
            break;
        case "decrement":
            document.querySelector(".no").innerHTML = n - 1;
            break;
        case "reset":
            document.querySelector(".no").innerHTML = 0;
            break;
    }
}

document.querySelector('.incre').addEventListener("click", () => {
    updateValue("increment");
});

document.querySelector('.decre').addEventListener("click", () => {
    updateValue("decrement");
});

document.querySelector('.reset').addEventListener("click", () => {
    updateValue("reset");
});
