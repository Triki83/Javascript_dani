
console.log("Moj JavaScript program");

const dani = [
    "Ponedjeljak",
    "Utorak",
    "Srijeda",
    "Četvrtak",
    "Petak",
    "Subota",
    "Nedjelja"
];

console.log(dani);


const datum = new Date();
const brojDana = datum.getDay();

console.log("Broj dana u tjednu:", brojDana);
 
const danas = brojDana === 0 ? 7 : brojDana;

console.log("Danas je " + dani[danas - 1] + ".");

if (danas === 6 || danas === 7) {
    console.log("Ovo je neradni dan.");
} else {
    console.log("Ovo je radni dan.");
}

if (danas === 1) {
    console.log("Ja najviše volim JS od svih programskih jezika");
} else if (danas === 4) {
    console.log("Mali petak!");
} else if (danas === 5) {
    console.log("Vikend na Vidiku!");
}


const unos = prompt("Unesi broj dana od 1 do 17:");
const broj = Number(unos);


if (broj >= 1 && broj <= 17 && Number.isInteger(broj)) {
    const indeks = (broj - 1) % 7;
    const dan = dani[indeks];

    console.log("Naziv dana:", dan);

    if (indeks === 5 || indeks === 6) {
        console.log("Ovo je neradni dan.");
    } else {
        console.log("Ovo je radni dan.");
    }

    if (dan === "Ponedjeljak") {
        console.log("Ja najviše volim JS od svih programskih jezika");
    } else if (dan === "Četvrtak") {
        console.log("Mali petak!");
    } else if (dan === "Petak") {
        console.log("Vikend na Vidiku!");
    }
} else {
    console.log("Pogreška: unesi cijeli broj od 1 do 17.");
}



