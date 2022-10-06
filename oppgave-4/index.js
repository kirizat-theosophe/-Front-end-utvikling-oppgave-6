const klikkOversikt = document.querySelector("#klikkOversikt");
const posisjoner = [];

function lagreKlikk(evt) {
    const p = evt.clientX;
    posisjoner.push(p);
    visKlikk();
}

function visKlikk() {
    klikkOversikt.innerHTML = "";
    for(const posisjon of posisjoner) {
        klikkOversikt.innerHTML += `
            Du klikket på x-posisjon: ${posisjon} <br>
    `          
    }
}


document.addEventListener("click",lagreKlikk);



