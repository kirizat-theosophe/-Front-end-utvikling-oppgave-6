const boks = document.querySelector("#boks");
const tallene = [];

for(let tall=10; tall<=100; tall++) {
    tallene.push(tall);
}

let i = 0;

function endreBredde() {
    if(i >= tallene.length) {
        i = 0;
    }

    const bredde = tallene[i];

    boks.style.width = bredde + "px";

    i++;
}

setInterval(endreBredde, 50);