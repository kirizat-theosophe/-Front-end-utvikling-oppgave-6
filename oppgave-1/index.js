
const fisketyper = ["Karpe","Gullfisk","Gjedde","Siamesisk","Guppy","Gjørs","Gjedde"];

fisketyper.unshift("Torsk", "Laks");

fisketyper.push("Gjeddesdsds");
fisketyper.push("Europeisk");

fisketyper.pop();
fisketyper.shift();

fisketyper.splice(3, 2);

console.log(fisketyper);
