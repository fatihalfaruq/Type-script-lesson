// for (let a = 5; a <= 30; a++) {
//   if (a % 2 == 1) {
//     document.write(`angka ke ${a} <br>`);
//   }
// }
// document.write("<br>");

///////////////////////////////////////////////////////////////////////////////////////

// for (let i = 2; i <= 20; i++) {
//   document.write(`angka ke ${i} <br>`);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

// pengulangan do dan while confirm
// let x = 5;
// let ulang = confirm("Apakah anda ingin mengulangi-nya?");
// while (ulang) {
//   ulang = confirm("Apakah anda ingin mengulangi-nya?");
//   x++;
// }
// document.write("Jumlah mengulang " + x + " kali");

/////////////////////////////////////////////////////////////////////////////////////////////////////

// let counter = 1;
// do {
//   document.write("Perulangan ke-" + counter + "<br>");
//   counter++;
// } while (confirm("Apakah Anda ingin melanjutkan perulangan?"));

/////////////////////////////////////////////////////////////////////////////////////////////////////

// nomor 1

// for (let y = 0; y <= 10; y++) {
//   for (let x = 0; x <= 10; x++) {
//     if (
//       y == 0 ||
//       y == 10 ||
//       x == 0 ||
//       x == 10 ||
//       y == x ||
//       x + y == 10 ||
//       x == 5 ||
//       y == 5
//     )
//       document.write(" * ");
//     else document.write(" _ ");
//   }
//   document.write("<br>");
// }
// document.write("<br>");

//out put

// * * * * * * * * * * *
// * * _ _ _ * _ _ _ * *
// * _ * _ _ * _ _ * _ *
// * _ _ * _ * _ * _ _ *
// * _ _ _ * * * _ _ _ *
// * * * * * * * * * * *
// * _ _ _ * * * _ _ _ *
// * _ _ * _ * _ * _ _ *
// * _ * _ _ * _ _ * _ *
// * * _ _ _ * _ _ _ * *
// * * * * * * * * * * *

/////////////////////////////////////////////////////////////////////////////////////////////////////

// nomor2

// for (let y = 0; y <= 10; y++) {
//   for (let x = 0; x <= 10; x++) {
//     if (y + x == 5 || x + y == 15 || x - y == 5 || -x - -y == 5)
//       document.write(" * ");
//     else document.write(" _ ");
//   }
//   document.write("<br>");
// }
// document.write("<br>");

//output
// _ _ _ _ _ * _ _ _ _ _
// _ _ _ _ * _ * _ _ _ _
// _ _ _ * _ _ _ * _ _ _
// _ _ * _ _ _ _ _ * _ _
// _ * _ _ _ _ _ _ _ * _
// * _ _ _ _ _ _ _ _ _ *
// _ * _ _ _ _ _ _ _ * _
// _ _ * _ _ _ _ _ * _ _
// _ _ _ * _ _ _ * _ _ _
// _ _ _ _ * _ * _ _ _ _
// _ _ _ _ _ * _ _ _ _ _

/////////////////////////////////////////////////////////////////////////////////////////////////////

// nomor3

// for (let y = 0; y <= 10; y++) {
//   for (let x = 0; x <= 10; x++) {
//     if (y <= x) document.write(" * ");
//     else document.write(" _ ");
//   }
//   document.write("<br>");
// }
// document.write("<br>");

// output

// * * * * * * * * * * *
// _ * * * * * * * * * *
// _ _ * * * * * * * * *
// _ _ _ * * * * * * * *
// _ _ _ _ * * * * * * *
// _ _ _ _ _ * * * * * *
// _ _ _ _ _ _ * * * * *
// _ _ _ _ _ _ _ * * * *
// _ _ _ _ _ _ _ _ * * *
// _ _ _ _ _ _ _ _ _ * *
// _ _ _ _ _ _ _ _ _ _ *

/////////////////////////////////////////////////////////////////////////////////////////////////////

// document.write("<br>");
// for (let i = 0; i <= 10; i++) {
//   for (let j = 0; j <= 10; j++) {
//     if (j + i <= 10 || i <= j) {
//       document.write(" * ");
//     } else {
//       document.write(" _ ");
//     }
//   }
//   document.write("<br>");
// }

//output

// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * _ * * * * *
// * * * * _ _ _ * * * *
// * * * _ _ _ _ _ * * *
// * * _ _ _ _ _ _ _ * *
// * _ _ _ _ _ _ _ _ _ *

/////////////////////////////////////////////////////////////////////////////////////////////////////

// document.write("ulang <br>".repeat(100));

/////////////////////////////////////////////////////////////////////////////////////////////////////

// foreach

// with foreach

// let makanan = ["magelangan", "soto", "nasipadang", "bakso"];
// makanan.forEach(function (makan) {
//   document.write(makan + "<br>");
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////

// with for

// let makanan = ["magelangan", "soto", "nasipadang", "bakso"];
// for (let i = 0; i < makanan.length; i++) {
//   document.write(i + ". " + makanan[i] + "<br>");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

// menambahkan data array
// cara1
// let fruits: any = ["apel", "jeruk", "manggis"];
// fruits[3] = "semangka";
// document.write(fruits);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// cara 2 Push()
// let products = ["senter", "radio", "antena", "obeng"];
// fruits.push("pir", "melon");
// document.write(fruits);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// cara menambahkan
// buah.unshift("jeruk");

/////////////////////////////////////////////////////////////////////////////////////////////////////

// menghapus data array
// cara 1
// delete fruits[2];
// document.write(fruits);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// cara 2
// fruits.pop(0);
// document.write(fruits);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// cara 3
// fruits.shift(2);
// console.log(fruits);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// cara 4
// fruits.splice(2, 1);
// document.write("<br>", fruits);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// mengubah isi array
// let bahasa: any = ["javascript", "kotlin", "java", "php", "phyton"];
// bahasa[4] = "c++";
// document.write(bahasa);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// menthod array
// filter
// const angka: any = [90, 20, 18, 14, 9, 2, 50, 2];
// const filteredarray = angka.filter((item: any) => {
//   return item > 18;
// });
// document.write(filteredarray);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// let buah: any[] = ["mangga", "apel", "jambu"];
// let tahun: any[] = [2022, 2023, 2024];
// let gabung = buah.concat(tahun);
// console.log(gabung);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// buah.push("rambutan");
// buah.unshift("jeruk");
// buah.push("rambutan");
// buah.splice(0, 2);
// buah.shift();
// buah.pop();
// console.log(buah);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//  no 1

// for (let y = 0; y <= 10; y++) {
//   for (let x = 0; x <= 10; x++) {
//     if (y >= x) document.write(" * ");
//     else document.write(" _ ");
//   }
//   document.write("<br>");
// }
// document.write("<br>");

/////////////////////////////////////////////////////////////////////////////////////////////////////

// no 4
// let animal: string[] = [
//   "lion",
//   "elephant",
//   "squirrel",
//   "eagle",
//   "zebra",
//   "tiger",
// ];
// animal.pop();
// animal.shift();
// console.log(animal);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// no 5
// let santri: any = [
//   "yusuf",
//   "Fatih",
//   "Fajar",
//   "El Ghifari",
//   "Faqih",
//   "Ramdhan",
//   "David",
//   "Juhadi",
//   "A Faqih",
//   "Hilmi",
//   "Rafi",
// ];
// santri.sort();
// console.log(santri);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// no 6
// let mobile: string[] = ["A Faqih", "David", "El Ghifari", "Fajar", "Faqih"];

// let backend: string[] = ["Arga", "Ramdhan", "Luqman", "Andaru", "Aldimas"];

// let gabung = mobile.concat(backend);

// console.log(gabung);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// no 7
// const fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];
// fruits.toString();
// console.log(fruits);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// no 8
// let animals: string[] = [
//   "lion",
//   "elephant",
//   "squirrel ",
//   "eagle",
//   "zebra",
//   "tiger",
// ];
// animals.splice(2, 3);
// console.log(animals);

/////////////////////////////////////////////////////////////////////////////////////////////////////
