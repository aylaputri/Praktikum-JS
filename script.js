// soal A1
const btnNav = document.querySelector('.btn-nav');
// harusnya .btn-nav bukan .btn-nav-salah karena di file css nya gada yg .btn-nav-salah

btnNav.addEventListener('click', function(e) {
  e.preventDefault();
  alert('Selamat datang di TaskFlow!');
});

// soal A2
const heading = document.querySelector('.hero-text h1');
// document.getElementById bukan pake itu tapi pake document.querySelector soalnya dia pake class bukan id 
// dia bukan hero-heading tapi pake .hero-text h1 karena di file css nya gada class hero-heading

heading.innerText = 'TaskFlow – Solusi Tim Modern';

//Soal A3
const cards = document.querySelectorAll('.feature-card');
// .feature-cards harusnya gapake s karena di html css gada s nya

let total = 0;
for (let i = 0; i < cards.length; i++) {
  total++;
}
// jadinya ga pake = karena kalo pake = dia udah kebaca 1
console.log('Jumlah fitur: ' + total);

// BUILDDDDDDDDDDDD

// Soal B1
const btnPri = document.querySelector('.btn-primary');

btnPri.addEventListener('click', function() {

    btnPri.innerText = 'Mendaftar...'
    btnPri.style.backgroundColor = '#94a3b8';

    setTimeout(() => {
        btnPri.innerText = 'Coba gratis 14 hari';
        btnPri.style.backgroundColor = '';
    }, 2000);
})

// soal B2
const allCards = document.querySelectorAll('.feature-card');

//  forEach buat ngasih event listener ke setiap kartu
allCards.forEach(card => {
    card.addEventListener('click', function() {
        
        // hapus class active dr smua kartu nya supaya cuma satu kartu yg aktif pd satu waktu
        allCards.forEach(c => c.classList.remove('active'));

        // tambah class active ke kartu yang baru diklik
        this.classList.add('active');
    });
});

// soal B3
const input = document.getElementById('review-input');
const btn = document.getElementById('review-btn');
const msg = document.getElementById('review-msg');

btn.addEventListener('click', function() {

  const text = input.value.trim();

  if (text === '') {
    msg.innerText = 'Ulasan tidak boleh kosong.';
    msg.style.color = '#ef4444';
  }
  else if (text.length < 10) {
    msg.innerText = 'Ulasan terlalu singkat. Minimal 10 karakter.';
    msg.style.color = '#f97316';
  }
  else {
    msg.innerText = 'Ulasan berhasil dikirim! Terima kasih.';
    msg.style.color = '#22c55e';

    // input kosong
    input.value = '';
  }

});