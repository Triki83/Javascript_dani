
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

