
const blomster = [];

blomster.push("Rose");
blomster.push("Daisy");
blomster.push("Lotus");
blomster.push("Sunflower");
blomster.push("Tulip");

blomster.unshift("Dahlia");

console.log(blomster);

const divBloggere = document.querySelector("#divBloggere");

const bloggere = ["Rose", "Daisy", "Lotus", "Sunflower", "Tulip", "Marigold", "Primrose", "Chrysangthemum", "Hibiscus"];


function skrivUtArray() {
    divBloggere.innerHTML = "";
    for(const blogger of bloggere) {
        divBloggere.innerHTML += `
            <div>${blogger}</div>
        `;
    }    
}

skrivUtArray();

const inpOverskrift = document.querySelector("#inpOverskrift");
const knapp = document.querySelector("#knapp");
const blomsterVarer = document.querySelector("#blomsterVarer");


function lagBlomster(){
    const overskrift = inpOverskrift.value;
    blomsterVarer.innerHTML += `
        <article>
            <h2>${overskrift}</h2>
        </article>
    `;
}

knapp.addEventListener("click", lagBlomster);