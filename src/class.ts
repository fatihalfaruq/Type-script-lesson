/* class adalah sebuah konsep yang 
digunakan untuk membuat objek dengan 
properti dan metode yang sama. Class 
digunakan sebagai sebuah blueprint atau 
cetak biru untuk menciptakan banyak objek 
dengan karakteristik yang sama */

///////////////////////////////////////////////////////////////////////////////////////

// class Hewan {
//   name: string = "kucing";
//   kaki: number = 0;
//   mamalia: boolean = true;
//   bernafas() {
//     console.log(`Hewan ${this.name}sedang bernafas`);
//   }
// }

// const binatang = new Hewan();

// // binatang.name = "kelinci"; //<= untuk merubah
// console.log(binatang);

// cara pemanggilan yang berbeda

// console.log(new Hewan().bernafas()); .bernafas()untuk menampilkan string

///////////////////////////////////////////////////////////////////////////////////////

// class Laptop {
//   merk: string = "thinkpad";
//   warna: string = "hitam";
//   harga: number = 5000000;
//   keterangan() {
//     console.log(
//       `saya mempunyai laptop,${this.merk} ${this.warna} ${this.harga}.`
//     );
//   }
// }
// const spek = new Laptop();
// spek.merk = "acer"; //<=untuk mengganti nama
// console.log(spek);

///////////////////////////////////////////////////////////////////////////////////////

// tugas no 1

// class Mobil {
//   brand: string = "supra";
//   warna: string = "hitam";
//   harga: any = "$10000";
//   keterangan() {
//     console.log(`${this.brand} ${this.warna} ${this.harga}`);
//   }
// }
// const barang1 = new Mobil();
// console.log(barang1);

// class Jam {
//   brand: string = "rolex";
//   warna: string = "ungu";
//   harga: any = "$40000";
//   keterangan() {
//     console.log(`${this.brand} ${this.warna} ${this.harga}`);
//   }
// }
// const barang2 = new Jam();
// console.log(barang2);

// class Handphone {
//   brand: string = "realme";
//   warna: string = "merah";
//   harga: any = "$400";
//   keterangan() {
//     console.log(`${this.brand} ${this.warna} ${this.harga}`);
//   }
// }
// const barang3 = new Handphone();
// console.log(barang3);

// class Sepatu {
//   brand: string = "nike";
//   warna: string = "biru";
//   harga: any = "$4000";
//   keterangan() {
//     console.log(`${this.brand} ${this.warna} ${this.harga}`);
//   }
// }
// const barang4 = new Sepatu();
// console.log(barang4);

// class Powerbank {
//   brand: string = "xiaomi";
//   warna: string = "hijau";
//   harga: any = "$40";
//   keterangan() {
//     console.log(`${this.brand} ${this.warna} ${this.harga}`);
//   }
// }
// const barang5 = new Powerbank();
// console.log(barang5);

///////////////////////////////////////////////////////////////////////////////////////

// tugas no 2

// function introduce(
//   name: string,
//   umur: number,
//   tempat: string,
//   hobby: string
// ): string {
//   const introduction: string = `Nama saya ${name}, umur saya ${umur} tahun, alamat saya di ${tempat}, dan saya punya hobby yaitu ${hobby}!`;
//   return introduction;
// }
// console.log(introduce("fatih", 17, "bekasi", "ngoding"));

///////////////////////////////////////////////////////////////////////////////////////

//tugas no 3

// let Lopjs = [
//   "",
//   "santai",
//   "berkualitas",
//   "ilove coding",
//   "berkualitas",
//   "santai",
//   "berkualitas",
//   "santai",
//   "berkualitas",
//   "ilove coding",
//   "berkualitas",
//   "santai",
//   "berkualitas",
//   "santai",
//   "berkualitas",
//   "ilove coding",
//   "berkualitas",
//   "santai",
//   "berkualitas",
//   "santai",
//   "berkualitas",
// ];
// for (let i = 1; i < Lopjs.length; i++) {
//   document.write(i + " - " + Lopjs[i] + "<br>");
// }

///////////////////////////////////////////////////////////////////////////////////////

//tugas no 4

// let randomNumbers = [
//   19, 65, 86, 4, 100, 56, 92, 41, 80, 30, 22, 35, 72, 74, 78, 27, 21, 83, 23,
//   60, 96, 14, 67, 55, 86, 80, 67, 13, 30, 96, 79, 42, 65, 69, 37, 28, 88, 57,
//   55, 73, 7, 87, 79, 17, 38, 1, 100, 54, 85, 83, 59, 38, 16, 21, 8, 73, 28, 62,
//   1, 18, 12, 21, 33, 87, 9, 57, 39, 10, 55, 45, 32, 66, 52, 36, 92, 79, 79, 31,
//   3, 81, 6, 81, 73, 77, 71, 26, 19, 37, 34, 90, 87, 85, 23, 52, 87, 18, 78, 96,
//   80, 68,
// ];

// let hasil = randomNumbers
//   .filter((a) => a >= 65)
//   .map((b) => b / 2)
//   .filter((c) => c < 40)
//   .map((d) => randomNumbers.length / d)
//   .reduce((aku, dia) => aku / 2 + dia);

// console.log(hasil);

///////////////////////////////////////////////////////////////////////////////////////

// tugas no 5

// const kodeUnix: number[] = [
//   23, 89, 67, 29, 192, 6, 2, 129, 21, 872, 891, 901, 70, 61, 78, 62, 32, 90, 90,
// ];

// const hasil: number = kodeUnix
//   .map((a: number) => a - 50)
//   .map((b: number) => b + kodeUnix.length)
//   .filter((c: number) => c < 20)
//   .reduce((aku: number, dia: number) => aku + dia);

// console.log(hasil);

///////////////////////////////////////////////////////////////////////////////////////

// class Hewan {
//   nama: string = "ikan";
//   umur: number = 7;

//   constructor(nama: string, umur: number) {
//     this.nama = nama;
//     this.umur = umur;
//   }
// }
// const kucing = new Hewan("kucing", 2);
// const burung = new Hewan("burung", 2);
// console.log(burung);
// console.log(kucing);

///////////////////////////////////////////////////////////////////////////////////////

/*Constructor di TypeScript digunakan untuk 
menginisialisasi nilai properti dalam objek 
saat objek dibuat dari sebuah class*/

///////////////////////////////////////////////////////////////////////////////////////

// class Divisi {
//   user: string;
//   umur: number;
//   divisi: string;
//   constructor(user: string, umur: number, divisi: string) {
//     this.user = user;
//     this.umur = umur;
//     this.divisi = divisi;
//   }
// }
// const data = new Divisi("fatih", 10, "mobile");
// console.log(data);

///////////////////////////////////////////////////////////////////////////////////////

// cara ke 2 menggunakan public

// class Divisi {
//   constructor(
//     public user: string,
//     public umur: number,
//     public divisi: string
//   ) {}
// }
// const data = new Divisi("fatih", 10, "mobile");
// console.log(data);

///////////////////////////////////////////////////////////////////////////////////////

//inheritance(pewarisan)

// class Hewan1 {
//   nama: string = "tikus";
//   umur: number = 5;
// }

// class Hewan2 extends Hewan1 {
//   warna: string = "putih";
// }
// console.log(new Hewan2());

///////////////////////////////////////////////////////////////////////////////////////

// class Santri {
//   nama: string = "ucup";
//   umur: number = 3;
//   divisi: string = "mobile";
// }

// class Ket extends Santri {
//   perke() {
//     console.log(
//       `halo nama saya ${this.nama} umur ${this.umur} divisi ${this.divisi}`
//     );
//   }
// }
// console.log(new Ket().perke());

///////////////////////////////////////////////////////////////////////////////////////

//super

// class hewan {
//   nama: string;
//   kaki: number;

//   constructor(nama: string, kaki: number) {
//     this.nama = nama;
//     this.kaki = kaki;
//   }
// }

// // child class
// class katak extends hewan {
//   beracun: boolean;

//   constructor(nama: string, kaki: number, beracun: boolean) {
//     super(nama, kaki);
//     this.beracun = beracun;
//   }
// }

// const katak1 = new katak("hewan", 5, true);
// console.log(katak1);

///////////////////////////////////////////////////////////////////////////////////////

//visibility

/*adalah aksebilitasi dari properti */

///////////////////////////////////////////////////////////////////////////////////////

// nomor 1

// class person {
//   name: string = "John";
//   age: number = 30;
//   gender: string = "male";
// }

// class person1 extends person {
//   introduce() {
//     console.log(
//       `Hi, my name is ${this.name}, I'm ${this.age} years old, and I identify as ${this.gender}.`
//     );
//   }
// }

// console.log(new person1().introduce());

///////////////////////////////////////////////////////////////////////////////////////

//nomor 2

// class Animal {
//   name: string = "";
//   isMammal = true;
// }

// class Ape extends Animal {
//   yell() {
//     console.log(`Auooo`);
//   }
// }
// console.log(new Ape().yell());

// class Frog extends Animal {
//   jump() {
//     console.log(`hop hop`);
//   }
// }
// console.log(new Frog().jump());

///////////////////////////////////////////////////////////////////////////////////////

//nomor 3

// class Animal {
//   name: string = "";
//   age: number = 0;
//   isMammal: boolean = true;
//   constructor(name: string, age: number, isMammal: boolean) {
//     this.name = name;
//     this.age = age;
//     this.isMammal = isMammal;
//   }
// }

// class Rabbit extends Animal {
//   eat() {
//     console.log(`${this.name} sedang makan ${this.isMammal}`);
//   }
// }

// const myrabbit = new Rabbit("Labi", 2, true);
// myrabbit.eat();

// class Eagle extends Animal {
//   fly() {
//     console.log(`${this.name} sedang terbang ${this.isMammal}`);
//   }
// }

// const myEagle = new Eagle("Elo", 4, false);
// myEagle.fly();

///////////////////////////////////////////////////////////////////////////////////////

//nomor 4

// class Circle {
//   private _radius: number;

//   constructor() {
//     this._radius = 10;
//   }

//   get radius(): number {
//     return this._radius;
//   }

//   set radius(value: number) {
//     this._radius = value / 2;
//   }
// }

// const myCircle = new Circle();

// console.log(myCircle.radius);

// myCircle.radius = 20;

// console.log(myCircle.radius);

///////////////////////////////////////////////////////////////////////////////////////

//nomor 5

// function syncFunction() {
//   console.log("Before");
//   console.log("Hello World!");
//   console.log("After");
// }

// syncFunction();

// function asyncFunction() {
//   console.log("Before");

//   setTimeout(() => {
//     console.log("Hello World!");
//   }, 1000);

//   console.log("After");
// }

// asyncFunction();

///////////////////////////////////////////////////////////////////////////////////////
