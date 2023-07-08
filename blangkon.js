// kerangka library sederhana yang berisi kumpulan fungsi yang biasa digunakan untuk kebutuhan aplikasi 
// Creator Angga Kurniawan Tim Kokitindo.com & Tim IT Berl
// Versi 0.001 di mulai tgl 07-07-2023

// fungsi format number
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
console.log(formatNumber(10000));

// fungsi format rupiah
function formatRupiah(num) {
  return 'Rp.'+num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
console.log(formatRupiah(10000));

// fungsi ajax rest api get & post & put 
var xhr = new XMLHttpRequest();
// sample penggunaan
function LoadDataTest(id){
    // memanggil data dengan ajax 
    var url = 'https://xxxxx.com/dev?id=' + id;
    xhr.onreadystatechange = function(){
        console.log(this.xxxx);
    };
    xhr.open("GET", url, true);
    xhr.send();
}
