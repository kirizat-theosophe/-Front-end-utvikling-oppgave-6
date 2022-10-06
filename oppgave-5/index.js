function spillTone(start, frekvens) {
    const ac = new AudioContext();
    const osc = ac.createOscillator();
    osc.connect(ac.destination);
    
    osc.frequency.value = frekvens;
    
    osc.start(start);
    osc.stop(start + 1);
    
}

const toner = [
  {start: 0, frekvens: 65.41},  
  {start: 1, frekvens: 123.47},  
  {start: 2, frekvens: 110.00},
  {start: 3, frekvens: 110.00},
  {start: 4, frekvens: 87.31},
  {start: 5, frekvens: 82.41},
  {start: 6, frekvens: 73.42},
  {start: 7, frekvens: 65.41},
  {start: 8, frekvens: 123.47},
  {start: 9, frekvens: 110.00},
  {start: 10, frekvens: 98.00},
  {start: 11, frekvens: 110.00},
  {start: 12, frekvens: 123.47},
  {start: 13, frekvens: 41.20},
  {start: 14, frekvens: 65.41},
  {start: 15, frekvens: 123.47},
  {start: 16, frekvens: 110.00},
  {start: 17, frekvens: 82.41},
  {start: 18, frekvens: 82.41},
  {start: 19, frekvens: 87.31},
  {start: 20, frekvens: 82.41},
  {start: 21, frekvens: 73.42},
  {start: 22, frekvens: 65.41},
  {start: 23, frekvens: 123.47},
  {start: 24, frekvens: 65.41},
  {start: 25, frekvens: 110.00}
];

function spillSang() {
    for(const tone of toner) {
        spillTone(tone.start, tone.frekvens);
    }
}

document.onclick = spillSang;