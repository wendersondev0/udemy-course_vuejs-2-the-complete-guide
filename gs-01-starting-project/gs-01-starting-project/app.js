const buttonEl = document.querySelector('button');
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
    const enteredValued = inputEl.value;
    const listItemEl = document.createElement("li");

    listItemEl.textContent = enteredValued;
    listEl.appendChild(listItemEl);

    inputEl.value = '';
}

buttonEl.addEventListener("click", addGoal);