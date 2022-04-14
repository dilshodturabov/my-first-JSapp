let countEl = document.getElementById("count-el");
let saveEl = document.getElementById('save-el');
let count = 1;

function increment() {
    countEl.innerText = count++;
}

function save() {
    // saveEl.innerText+=countEl.innerText+` - `;
    saveEl.textContent+=countEl.innerText+` - `;
    
    count = 1;
    countEl.innerText = 0;
}