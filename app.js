// ? 1.İstifadəçinin daxil etdiyi adın neçə simvoldan ibarət olduğunu tapın.

// let ad = prompt("adınızı daxil edin:");


// let aduzunluğu = ad.length;


// console.log("daxil etdiyiniz ad " + aduzunluğu + " herfden ibaretdir.");

// ? 2.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvol varmı ?.



// let ilktext = prompt("Texti daxil edin:");
// let ikinciSimvol = prompt("Textin icinde axtardiginiz simvolu daxil edin:");


// let ikinciSimvolVar = ilktext.includes(ikinciSimvol);


// if (ikinciSimvolVar) {
//     console.log("İlk textin içinde " + ikinciSimvol + " simvolü vardir.");
// } else {
//     console.log("İlk textin içinde " + ikinciSimvol + " yoxdur.");
// }

// ? 3.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla başlayırmı ?.


// let ilkSoz = prompt("ilk sözü daxil edin:");
// let ikinciSimvol = prompt("Sozde axtardiginiz ikinci simvolü daxil edin:");


// let yoxlama = ilkSoz.startsWith(ikinciSimvol);


// if (yoxlama) {
//     console.log("İlk söz, " + ikinciSimvol + " ile başlayir.");
// } else {
//     console.log("İlk söz, " + ikinciSimvol + " ile baslamir.");
// }

// ? 4.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi ?.


// let ilkSoz = prompt("Zəhmət olmasa ilk sözü daxil edin:");
// let ikinciSimvol = prompt("Zəhmət olmasa yoxlamaq istədiyiniz ikinci simvolu daxil edin:");


// let sonyoxlama = ilkSoz.endsWith(ikinciSimvol);


// if (sonyoxlama) {
//     console.log("İlk söz, " + ikinciSimvol + " simvolu ilə bitir.");
// } else {
//     console.log("İlk söz, " + ikinciSimvol + " simvolu ilə bitmir.");
// }

// ? 5.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvolun index`ini tapın

// const soz = prompt("Bir soz daxil edin:");
// const ikinciSimvol = prompt("İkinci simvolu daxil edin:");

// const index = soz.indexOf(ikinciSimvol);

// if (index !== -1) {
//     console.log(`${ikinciSimvol} simvolunun indeksi: ${index}`);
// } else {
//     console.log("İkinci simvol tapılmadı.");
// }

// ? 6.İstifadəçinin daxil etdiyi sözün böyük hərf olub olmadığını tapın.

// const soz = prompt("Bir soz daxil edin:");

// if (soz === soz.toUpperCase()) {
//     console.log("Daxil edilən söz böyük hərflə yazılıb.");
// } else {
//     console.log("Daxil edilən söz böyük hərflə yazılmayıb.");
// }


