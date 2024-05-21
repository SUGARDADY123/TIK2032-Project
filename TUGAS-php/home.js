// Ambil elemen teks yang akan diubah animasinya
const text = document.querySelector('.content h1');
const textContent = text.textContent;
const textLength = textContent.length;
let index = 0;

// Mulai animasi
function animateText() {
    // Jika sudah mencapai akhir teks, mulai dari awal lagi
    if (index === textLength) {
        index = 0;
    }

    // Ambil teks yang sudah diubah dan tambahkan satu huruf berikutnya
    const animatedText = textContent.slice(0, index + 1);

    // Ubah teks pada elemen
    text.textContent = animatedText;

    // Tambah index untuk karakter berikutnya
    index++;

    // Atur interval untuk animasi, disesuaikan dengan kecepatan animasi yang diinginkan
    setTimeout(animateText, 100); // Ubah 100 menjadi nilai yang sesuai dengan kecepatan animasi yang diinginkan
}

// Panggil fungsi untuk memulai animasi
animateText();
