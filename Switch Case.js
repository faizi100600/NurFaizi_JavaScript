// SWITCH CASE
var pm = 2;
pm=prompt("Pilih Jenis Kelamin Laki-Laki (1) Dan Perempuan (2) ")
switch(pm){
    case '1':
        console.log("Laki-laki")
        break;
    case '2':
        console.log("Perempuan");
        break;
    default:
        console.log("Hanya ada 2 pilihan");
}