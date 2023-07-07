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
