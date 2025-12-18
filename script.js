// Data destinasi (simulasi database)
const destinations = [
  {
    id: 1,
    name: "Pantai Liang",
    location: "Ambon",
    description: "Pantai pasir putih dengan ombak tenang, cocok untuk keluarga dan snorkeling.",
    image: "pantai-hanimua-liang.jpg",
    basePrice: 4000000,
    duration: 4
  },
  {
    id: 2,
    name: "Gunung Binaiya",
    location: "Pulau Seram",
    description: "Gunung tertinggi di Maluku, cocok untuk pendaki pemula hingga ahli. Pemandangan alam yang menakjubkan.",
    image: "foto-gunung-binaiya.jpg",
    basePrice: 6000000,
    duration: 6
  },
  {
    id: 3,
    name: "Pulau Ora",
    location: "Maluku Tengah",
    description: "Sering disebut 'Maldives-nya Indonesia'. Air jernih, pasir putih, dan resort eksklusif.",
    image: "ora.jpg",
    basePrice: 5000000,
    duration: 5
  },
  {
    id: 4,
    name: "Benteng Amsterdam",
    location: "Ambon",
    description: "Situs sejarah peninggalan Belanda dengan pemandangan Teluk Ambon yang indah.",
    image: "benteng-amsterdam-peningalan-belanda.jpg",
    basePrice: 2500000,
    duration: 3
  },
  {
    id: 5,
    name: "Banda Neira",
    location: "Ambon",
    description: "Perpaduan memukau antara sejarah kolonial belanda ( Benteng Belgica, Rumah Persinghan Bung Hatta, Istana Mini) dan ( Keindahan Bawah Laut)",
    image: "banda-naira.jpg",
    basePrice: 7000000,
    duration: 5
  },
  {
    id: 6,
    name: "pantai jikumarasa",
    location: "kabupaten buru (kota namlea)",
    description: "keindahan alam yang memukau, Pantai dengan gradasi warna biru air yang jernih serta pantai pasir putih yang sangat indah dipadu dengan pohon Cemara yang tumbuh disekitar pantai",
    image: "pantai-jikumarasa.jpg",
    basePrice: 3000000,
    duration: 5
  },
   {
    id: 7,
    name: "Batu Yadin",
    location: "kabupaten kepulauan tanimbar ( desa olilit lama)",
    description: "keindahan alam yang memukau, perpaduan air laut yang jernih dan bebatuan yang indah bak surga jatuh ke bemi",
    image: "batu-yadin.jpg",
    basePrice: 700000,
    duration: 7
  },
    {
    id: 7,
    name: "Pintu Kota",
    location: "kota ambon ( pantai nusaniwe )",
    description: "karang yang berlubang mirip seperti pintu, dan pemandagan  laut banda yang indah bisa kamu sisikan dari kerang ini, langit biru, hamparan kerang di tepi pantai yang indah",
    image: "pintu-kota.jpg",
    basePrice: 2500000,
    duration: 4
  },
  {
    id: 8,
    name: "Air Putri Waiyoho",
    location: "Seram Barat (dusun waiyoho)",
    description: "keindahan alam yang menyejukkan mata dipadu dengan airnya jernih mengalir langsung dari bebatuan alam",
    image: "air-putri-waiyoho.jpg",
    basePrice: 7000000,
    duration: 5
  },
  {
    id: 9,
    name: "Lubang Buaya Morella",
    location: "Desa Morella",
    description: "menyimpan keindahan bawah laut yang menakjubkan, ikan dan kerang masih asli palung - palung hingga gua yang menganga ada di bawah permukaan laut",
    image: "lubang-buaya.jpg",
    basePrice: 2500000,
    duration: 4
  },
  {
    id: 10,
    name: " Benteng VOC",
    location: "Kabupaten Buru (Desa Kaiely)",
    description: "Salah satu peninggalan kolonial Belanda yakni Benteng VOC ",
    image: "benteng-voc-pengingalan-belanda.jpg",
    basePrice: 2000000,
    duration: 5
  },
   {
    id: 11,
    name: "Pulau tuban",
    location: "Seram Bagian Barat, kecamatan kepulauan manipa ( desa negeri luhutuban)",
    description: "pasir putih yang bersih sepanjang pantai, pohon mangrove yang tumbuh di sepanjang pantai dan keindahan bawah dasar laut berupa ikan dan lamun dapat memanjakan mata",
    image: "pulau-tuban.jpg",
    basePrice: 7000000,
    duration: 7
  },
  {
    id: 12,
    name: "selat valentine",
    location: "seram bagian barat ( pulau buano dan pulau pua)",
    description: "Selat Valentine dengan keindahan yang menakjubkan laut yang biru dan hijau nya gunung",
    image: "selat-valintine.jpg",
    basePrice: 5000000,
    duration: 6
  },
  {
    id: 13,
    name: "Pantai Ngurtafur",
    location: "maluku tenggara ( kepulauan kei )",
    description: "Ngurtafur merupakan pasir timbul yang memanjang sekitar 2 kilometer apabila air laut surut, Sehingga membelah lautan menjadi dua bagian. ",
    image: "Pantai-Ngurtafur.jpg",
    basePrice: 7000000,
    duration: 7
  },








];

// Nomor WhatsApp admin Anda (ganti dengan nomor Anda)
const ADMIN_WHATSAPP = "62895361160020"; // Format: 628xxx

// Render destinasi
function renderDestinations() {
  const container = document.getElementById('destinations-list');
  container.innerHTML = destinations.map(dest => `
    <div class="card">
      <img src="${dest.image}" alt="${dest.name}">
      <div class="card-content">
        <h3>${dest.name}</h3>
        <p><strong>Lokasi:</strong> ${dest.location}</p>
        <p>${dest.description}</p>
        <p><strong>Harga:</strong> Rp ${dest.basePrice.toLocaleString('id-ID')} / orang</p>
        <p><strong>Durasi:</strong> ${dest.duration} hari</p>
        <button class="btn book-btn" data-id="${dest.id}">Hitung Biaya</button>
      </div>
    </div>
  `).join('');
}

// Buka modal booking
function openBookingModal(destId) {
  const dest = destinations.find(d => d.id == destId);
  if (!dest) return;

  document.getElementById('booking-dest-name').textContent = dest.name;
  document.getElementById('booking-title').textContent = `Pesan: ${dest.name}`;
  
  const participantsInput = document.getElementById('participants');
  const totalCostEl = document.getElementById('total-cost');

  function updateCost() {
    const total = dest.basePrice * participantsInput.value;
    totalCostEl.textContent = total.toLocaleString('id-ID');
  }

  participantsInput.addEventListener('input', updateCost);
  updateCost();

  // Simpan destinasi saat ini
  window.currentBooking = { dest, participants: 1 };

  document.getElementById('booking-modal').classList.remove('hidden');
}

// Kirim ke WhatsApp
function sendToWhatsApp() {
  const dest = window.currentBooking?.dest;
  const participants = document.getElementById('participants').value;
  if (!dest) return;

  const total = dest.basePrice * participants;
  const message = `Halo, saya ingin memesan tour ke *${dest.name}* untuk ${participants} orang. Total biaya: Rp ${total.toLocaleString('id-ID')}. Mohon konfirmasi.`;

  const url = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Tutup modal
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('booking-modal').classList.add('hidden');
});

// Event listeners
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('book-btn')) {
    openBookingModal(e.target.dataset.id);
  }
});

document.getElementById('whatsapp-btn').addEventListener('click', sendToWhatsApp);

// Inisialisasi
renderDestinations();