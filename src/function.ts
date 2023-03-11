///////////////////////////////////////////////////////////////////////////////////////

// function biasa

// function myfunction(a: number, b: number) {
//   return a + b;
// }
// console.log(myfunction(10, 5));

///////////////////////////////////////////////////////////////////////////////////////

// anonymous/expresion function

// let pungsi = function (a: number, b: number) {
//   return a + b;
// };
// console.log(pungsi(5, 5));

///////////////////////////////////////////////////////////////////////////////////////

//arrow function

//let fungsi = () => console.log("hello cuy");
// fungsi();

///////////////////////////////////////////////////////////////////////////////////////

// menghitung luas persegi panjang dengan function

// let panjang: any = prompt("masukan angka");
// let lebar: any = prompt("masukan angka");
// let tinggi: any = prompt("masukan angka");

// function volumebalok(panjang: any, lebar: any, tinggi: any) {
//   return panjang * lebar * tinggi;
// }
// alert(volumebalok(panjang, lebar, tinggi));

///////////////////////////////////////////////////////////////////////////////////////

//penulisan function dengan return

// function hello() {
//   return "fulan";
// }
// console.log(hello());

// function sapa(nama: string): void {
//   console.log(`Halo, ${nama}!`);
// }
// sapa("Budi"); // Output: "Halo, Budi!"

///////////////////////////////////////////////////////////////////////////////////////

//function jika tidak ada return memakai void

///////////////////////////////////////////////////////////////////////////////////////

// function jalankan() {
//   alert("mantap");
// }

///////////////////////////////////////////////////////////////////////////////////////

// function jalankan() {
//   console.log(document.getElementById("para"));
// }

///////////////////////////////////////////////////////////////////////////////////////

// let paragraf = document.getElementById("para");
// paragraf.innerHTML = "ssskonros";

///////////////////////////////////////////////////////////////////////////////////////

// function salken(name: string) {
//   alert(`Hello, ${name}!`);
// }

// salken("John");

///////////////////////////////////////////////////////////////////////////////////////

// function myFunction() {
//   alert("Hello, world!");
// }
// myFunction();

///////////////////////////////////////////////////////////////////////////////////////

//menggunakan arrow function

// const angkabaru = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let angkabaruw = angkabaru.filter((a) => a > 3);
// console.log(angkabaruw);

///////////////////////////////////////////////////////////////////////////////////////

//menggunakan function biasa

// const angkabaru = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let angkabaruf = angkabaru.filter(function (b) {
//   return b < 4;
// });
// console.log(angkabaruf);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Map

//kalikan semua angka dengan 2

// const angkabaru = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let angkabaru2 = angkabaru.map((b) => b * 2);
// console.log(`hasil dari map:${angkabaru2}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//reduce

//dengan kurung kurawal

// const angkabaru = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let angkabaru3 = angkabaru.reduce((akumulasi, nilaisekarang) => {
//   return akumulasi + nilaisekarang;
// });
// console.log(angkabaru3);

// tanpa kurung kurawal

// const angkabaru = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let angkabaru1 = angkabaru.reduce(
//   (akumulasi, nilaisekarang) => akumulasi * nilaisekarang,
//   10
// );

/////////////////////////////////////////////////////////////////////////////////////////////////////

//menthod chaining

// const angkabaru = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let hasil = angkabaru
//   .filter((a) => a > 5)
//   .map((a) => a * 3)
//   .reduce((z, x) => z + x, 10);
// console.log(hasil);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//tugas no 1

// const angkabaru = [52, 95, 55, 67, 79, 44, 30, 97, 84];
// let angkabaruf = angkabaru.filter(function (b) {
//   return b < 60;
// });
// console.log(angkabaruf);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//tugas no 2

// let listDesa = [
//   "arman",
//   "argodadi,sedayu",
//   "argomulyo,sedayu",
//   "argorejo,sedayu",
//   "argosari",
//   "bangunjiwo,kasihan",
//   "banguntapan,banguntapan",
//   "bantul,bantul",
//   "baturetno,banguntapan",
//   "bawuran,pleret",
//   "canden,jetis",
//   "caturharjo,pandak",
//   "cetan srigandi",
// ];
// for (let i = 1; i < listDesa.length; i++) {
//   document.write(i + ". " + listDesa[i] + "<br>");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

// tugas no 3

// function luaspersegipanjang(a: number, b: number) {
//   return a * b;
// }
// var nilaya = Number(prompt("masukan panjang!"));
// var nilayb = Number(prompt("masukan lebar!"));
// var jumlah = luaspersegipanjang(nilaya, nilayb);
// alert(jumlah);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//tugas no 4

/////////////////////////////////////////////////////////////////////////////////////////////////////
