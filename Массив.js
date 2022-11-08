let massiv = [];
let m = 0;
let n = 100;
let count = 100;

for ( let i = m; i < count; ++i ) {
    massiv.push( Math.round(Math.random() * n) ); //длина массива
}

console.log(massiv);