// IF
const nama = "NurFaizi";

if (nama === "NurFaizi") {
  console.log("NurFaizi");
}
// ELSE
a = prompt( "PILIH NOMOR  1-5 Untuk Makanan Favorit Dan 5-10 Untuk Hobi")

if (a >= 5 ) {
  console.log("Hobi");
} else{
  console.log("Makanan Favorit");
}
//NESTED IF
no = prompt("Masukan Nomor Makanan 5-10 Dan Untuk Hobi Nomor 1-5");

if (no >= 5 && no <= 10) {
  if (no > 6) {
    console.log("Nasi Goreng");
  } else {
    console.log("Mie Goreng");
  }
} else if (no < 5) {
  console.log("Futsal");
} else {
  console.log("Main Games");
}