
// ======================================
// OSMIRA - SISTEM NAVIGASI DAN KIDNEY 101
// Bahasa: Indonesia
// ======================================

const homePage = document.getElementById("homePage");
const contentPage = document.getElementById("contentPage");

const contentTitle = document.getElementById("contentTitle");
const contentDescription = document.getElementById("contentDescription");
const contentBody = document.getElementById("contentBody");

const backButton = document.getElementById("backButton");

// ======================================
// DATA MENU
// ======================================

const pages = {

  kidney101: {
    title: "Kidney 101",
    description: "Mari mengenal ginjal dan cara kerjanya."
  },

  disease: {
    title: "AKI & CKD",
    description: "Kenali penyakit ginjal akut dan kronis."
  },

  checkup: {
    title: "Pemeriksaan Ginjal",
    description: "Kenali pemeriksaan untuk menilai kesehatan ginjal."
  },

  scanner: {
    title: "Deteksi Risiko",
    description: "Kenali faktor risiko penyakit ginjal."
  },

  prevention: {
    title: "Pencegahan",
    description: "Mulai kebiasaan sehat untuk melindungi ginjal."
  },

  quiz: {
    title: "Zona Kuis",
    description: "Uji pengetahuanmu tentang kesehatan ginjal."
  }

};

// ======================================
// DATA KIDNEY 101
// ======================================

const anatomyData = {

  cortex: {
    title: "Korteks Ginjal",
    description:
      "Korteks merupakan lapisan terluar ginjal. Bagian ini mengandung glomerulus serta sebagian besar tubulus kontortus proksimal dan distal.",
    function:
      "Berperan dalam proses filtrasi darah dan reabsorpsi serta sekresi zat di tubulus."
  },

  medulla: {
    title: "Medula Ginjal",
    description:
      "Medula merupakan bagian dalam ginjal yang tersusun atas piramida ginjal.",
    function:
      "Mengandung lengkung Henle dan duktus kolektivus yang berperan dalam pemekatan urine."
  },

  pelvis: {
    title: "Pelvis Renalis",
    description:
      "Pelvis renalis merupakan rongga berbentuk corong yang mengumpulkan urine dari kaliks ginjal.",
    function:
      "Menyalurkan urine menuju ureter sebelum akhirnya menuju kandung kemih."
  },

  artery: {
    title: "Arteri Renalis",
    description:
      "Arteri renalis merupakan pembuluh darah yang membawa darah dari aorta menuju ginjal.",
    function:
      "Menyediakan darah yang akan diproses dan disaring oleh ginjal."
  },

  vein: {
    title: "Vena Renalis",
    description:
      "Vena renalis merupakan pembuluh darah yang membawa darah keluar dari ginjal menuju vena kava inferior.",
    function:
      "Mengalirkan darah yang telah melewati proses pemrosesan di ginjal."
  },

  ureter: {
    title: "Ureter",
    description:
      "Ureter merupakan saluran yang menghubungkan pelvis renalis dengan kandung kemih.",
    function:
      "Mengalirkan urine dari ginjal menuju kandung kemih."
  }

};

// ======================================
// TAMPILAN KIDNEY 101
// ======================================

function renderKidney101() {


  contentBody.innerHTML = `

    <div class="education-section">

      <div class="education-card">
        <span class="section-label">MENGENAL GINJAL</span>

        <h3>Apa itu ginjal?</h3>

        <p>
          Ginjal merupakan sepasang organ berbentuk seperti
          kacang yang terletak di bagian belakang rongga
          perut, di kedua sisi tulang belakang.
        </p>

        <p>
          Ginjal memiliki peran penting dalam menyaring
          darah, membuang zat sisa metabolisme, serta
          mempertahankan keseimbangan cairan dan elektrolit
          dalam tubuh.
        </p>

        <div class="fact-box">
          <strong>Fakta menarik!</strong>
          <p>
            Setiap ginjal normal umumnya memiliki sekitar
            satu juta nefron sebagai unit fungsionalnya.
          </p>
        </div>
      </div>

      <div class="education-card">

        <span class="section-label">01 • ANATOMI GINJAL</span>

        <h3>Kenali bagian-bagian ginjal</h3>

        <p>
          Tekan salah satu bagian berikut untuk mengetahui
          struktur dan fungsinya.
        </p>

        <div class="anatomy-layout">

          <div class="kidney-shape">
  <img
  src="https://s3-us-west-2.amazonaws.com/courses-images-archive-read-only/wp-content/uploads/sites/403/2015/04/21031841/2610_The_Kidney.jpg"
  alt="Anatomi potongan melintang ginjal manusia"
  class="kidney-anatomy-image"
  onerror="this.alt='Gambar anatomi ginjal gagal dimuat'; this.style.display='none';"
>
</div>

          <div class="anatomy-buttons">

            <button class="anatomy-button"
              data-anatomy="cortex">
              Korteks
            </button>

            <button class="anatomy-button"
              data-anatomy="medulla">
              Medula
            </button>

            <button class="anatomy-button"
              data-anatomy="pelvis">
              Pelvis renalis
            </button>

            <button class="anatomy-button"
              data-anatomy="artery">
              Arteri renalis
            </button>

            <button class="anatomy-button"
              data-anatomy="vein">
              Vena renalis
            </button>

            <button class="anatomy-button"
              data-anatomy="ureter">
              Ureter
            </button>

          </div>

        </div>

        <div id="anatomyDetail" class="detail-box">
          <strong>Pilih bagian ginjal</strong>
          <p>
            Informasi anatomi akan muncul di sini.
          </p>
        </div>

      </div>

      <div class="education-card">

        <span class="section-label">02 • FUNGSI GINJAL</span>

        <h3>Apa saja fungsi ginjal?</h3>

        <div class="function-list">

          <div class="function-item">
            <span>💧</span>
            <div>
              <strong>Mengatur keseimbangan cairan</strong>
              <p>Mengatur jumlah air dalam tubuh melalui urine.</p>
            </div>
          </div>

          <div class="function-item">
            <span>⚖️</span>
            <div>
              <strong>Mengatur elektrolit</strong>
              <p>Menjaga keseimbangan natrium, kalium, dan mineral lainnya.</p>
            </div>
          </div>

          <div class="function-item">
            <span>🧪</span>
            <div>
              <strong>Membuang zat sisa metabolisme</strong>
              <p>Mengeluarkan kreatinin, urea, dan zat sisa lainnya.</p>
            </div>
          </div>

          <div class="function-item">
            <span>🩸</span>
            <div>
              <strong>Membantu mengatur tekanan darah</strong>
              <p>Melalui sistem renin-angiotensin-aldosteron.</p>
            </div>
          </div>

          <div class="function-item">
            <span>🫁</span>
            <div>
              <strong>Mengatur keseimbangan asam-basa</strong>
              <p>Membantu mempertahankan pH darah melalui pengaturan ion hidrogen dan bikarbonat.</p>
            </div>
          </div>

          <div class="function-item">
            <span>🦴</span>
            <div>
              <strong>Mengaktifkan vitamin D</strong>
              <p>Mengubah vitamin D menjadi bentuk aktif yang membantu penyerapan kalsium.</p>
            </div>
          </div>

          <div class="function-item">
            <span>❤️</span>
            <div>
              <strong>Menghasilkan eritropoietin</strong>
              <p>Merangsang sumsum tulang untuk memproduksi sel darah merah.</p>
            </div>
          </div>

        </div>

      </div>

      <div class="education-card">

        <span class="section-label">03 • PROSES FILTRASI</span>

        <h3>Bagaimana ginjal menyaring darah?</h3>

        <p>
          Ginjal menyaring darah melalui rangkaian proses
          filtrasi, reabsorpsi, dan sekresi.
        </p>

        <div class="filtration-steps">

          <div class="filtration-step">
            <span class="step-number">1</span>
            <div>
              <strong>Darah masuk ke ginjal</strong>
              <p>Darah memasuki ginjal melalui arteri renalis.</p>
            </div>
          </div>

          <div class="filtration-step">
            <span class="step-number">2</span>
            <div>
              <strong>Filtrasi glomerulus</strong>
              <p>Air dan zat terlarut kecil melewati membran filtrasi menuju kapsula Bowman.</p>
            </div>
          </div>

          <div class="filtration-step">
            <span class="step-number">3</span>
            <div>
              <strong>Reabsorpsi tubulus</strong>
              <p>Air dan zat yang masih dibutuhkan tubuh diserap kembali ke dalam darah.</p>
            </div>
          </div>

          <div class="filtration-step">
            <span class="step-number">4</span>
            <div>
              <strong>Sekresi tubulus</strong>
              <p>Zat tertentu dipindahkan dari darah ke dalam tubulus.</p>
            </div>
          </div>

          <div class="filtration-step">
            <span class="step-number">5</span>
            <div>
              <strong>Urine dikeluarkan</strong>
              <p>Urine mengalir melalui duktus kolektivus, pelvis renalis, ureter, dan menuju kandung kemih.</p>
            </div>
          </div>

        </div>

        <div class="fact-box">
          <strong>Ingat!</strong>
          <p>
            Filtrasi terjadi di korpuskulum renalis,
            sedangkan reabsorpsi dan sekresi berlangsung
            sepanjang bagian tubulus nefron.
          </p>
        </div>

      </div>

      <div class="education-card">

        <span class="section-label">04 • UNIT FUNGSIONAL</span>

        <h3>Mengenal nefron</h3>

        <p>
          Nefron merupakan unit struktural dan fungsional
          ginjal yang bertanggung jawab dalam pembentukan urine.
        </p>
<div class="nephron-image-box">
  <img
    src="https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/3047/2018/03/26185446/2611_Blood_Flow_in_the_Nephron.jpg"
    alt="Ilustrasi struktur nefron"
    class="nephron-anatomy-image"
  >
</div>
        <div class="nephron-list">

          <div class="nephron-item">
            <strong>1. Glomerulus</strong>
            <p>Anyaman kapiler tempat darah difiltrasi.</p>
          </div>

          <div class="nephron-item">
            <strong>2. Kapsula Bowman</strong>
            <p>Menampung hasil filtrasi dari glomerulus.</p>
          </div>

          <div class="nephron-item">
            <strong>3. Tubulus Proksimal</strong>
            <p>Tempat sebagian besar reabsorpsi air dan zat terlarut berlangsung.</p>
          </div>

          <div class="nephron-item">
            <strong>4. Lengkung Henle</strong>
            <p>Membantu membentuk gradien osmotik untuk pemekatan urine.</p>
          </div>

          <div class="nephron-item">
            <strong>5. Tubulus Distal</strong>
            <p>Berperan dalam pengaturan elektrolit dan keseimbangan asam-basa.</p>
          </div>

          <div class="nephron-item">
            <strong>6. Duktus Kolektivus</strong>
            <p>Mengatur konsentrasi akhir urine dan menyalurkannya ke arah papila ginjal.</p>
          </div>

        </div>

      </div>

      <div class="education-card">

        <span class="section-label">05 • MENGENAL GLOMERULUS</span>

        <h3>Apa itu glomerulus?</h3>

        <p>
          Glomerulus merupakan anyaman kapiler yang berada
          di dalam kapsula Bowman. Bagian ini menjadi tempat
          terjadinya filtrasi plasma darah.
        </p>

        <h4>Membran filtrasi glomerulus</h4>
<div class="glomerulus-image-box">
  <img
    src="https://ars.els-cdn.com/content/image/1-s2.0-S0065242321000627-f01-01-9780323988490.jpg"
    alt="Ilustrasi sawar filtrasi glomerulus"
    class="glomerulus-anatomy-image"
  >
</div>
        <div class="filtration-barrier">

          <div>Endotel kapiler berfenestra</div>
          <div>Membran basal glomerulus</div>
          <div>Podosit dan celah filtrasi</div>

        </div>

        <p>
          Struktur tersebut memungkinkan air dan molekul
          kecil melewati penghalang filtrasi, sementara
          sebagian besar sel darah dan protein besar
          tertahan di dalam sirkulasi.
        </p>

        <div class="fact-box">
          <strong>Hal yang perlu diingat</strong>
          <p>
            Albumin normalnya hanya melewati membran
            filtrasi dalam jumlah sangat kecil.
            Peningkatan albumin urine dapat menjadi
            tanda kerusakan ginjal.
          </p>
        </div>

      </div>

    </div>

  `;

  // AKTIFKAN TOMBOL ANATOMI

  document.querySelectorAll("[data-anatomy]").forEach(button => {

    button.addEventListener("click", () => {

      const key = button.dataset.anatomy;
      const item = anatomyData[key];

      document.querySelectorAll("[data-anatomy]")
        .forEach(btn => btn.classList.remove("selected"));

      button.classList.add("selected");

      document.getElementById("anatomyDetail").innerHTML = `
        <strong>${item.title}</strong>
        <p>${item.description}</p>
        <p><b>Fungsi:</b> ${item.function}</p>
      `;

    });

  });

}
function renderAkiCkd() {
  const content = document.getElementById("contentBody");

  content.innerHTML = `
    <section class="education-section">
      <div class="section-heading">
        <span class="eyebrow">MENGENAL PENYAKIT GINJAL</span>
        <h2>AKI & CKD</h2>
        <p>
          Kenali perbedaan cedera ginjal akut dan penyakit ginjal kronis,
          mulai dari penyebab hingga klasifikasinya.
        </p>
      </div>

      <div class="education-card">
        <h3>Apa itu AKI?</h3>
        <p>
          <strong>Acute Kidney Injury (AKI)</strong> atau cedera ginjal akut
          adalah penurunan fungsi ginjal yang terjadi secara cepat dalam
          hitungan jam hingga hari. Kondisi ini dapat menyebabkan
          penumpukan zat sisa metabolisme dan gangguan keseimbangan
          cairan maupun elektrolit.
        </p>
        <h4>Penyebab AKI</h4>
        <ul>
          <li><strong>Prerenal:</strong> berkurangnya aliran darah ke ginjal,
          misalnya akibat dehidrasi, perdarahan, atau syok.</li>
          <li><strong>Intrinsik:</strong> kerusakan jaringan ginjal,
          misalnya akibat nekrosis tubular akut atau glomerulonefritis.</li>
          <li><strong>Postrenal:</strong> hambatan aliran urine,
          misalnya akibat batu saluran kemih atau pembesaran prostat.</li>
        </ul>
      </div>

      <div class="education-card">
        <h3>Apa itu CKD?</h3>
        <p>
          <strong>Chronic Kidney Disease (CKD)</strong> atau penyakit ginjal
          kronis adalah kelainan struktur atau fungsi ginjal yang
          berlangsung selama minimal 3 bulan dan memiliki dampak
          terhadap kesehatan.
        </p>
        <h4>Penyebab dan faktor risiko CKD</h4>
        <ul>
          <li>Diabetes melitus.</li>
          <li>Hipertensi yang tidak terkontrol.</li>
          <li>Glomerulonefritis.</li>
          <li>Penyakit ginjal herediter, seperti penyakit ginjal polikistik.</li>
          <li>Obstruksi saluran kemih yang berlangsung lama.</li>
          <li>Riwayat cedera ginjal akut.</li>
        </ul>
      </div>

      <div class="education-card">
        <h3>Bagaimana proses terjadinya?</h3>
        <div class="pathway-box">
          <h4>AKI</h4>
          <div class="pathway-step">Pencetus akut</div>
          <div class="pathway-arrow">↓</div>
          <div class="pathway-step">Aliran darah, jaringan, atau aliran urine terganggu</div>
          <div class="pathway-arrow">↓</div>
          <div class="pathway-step">Laju filtrasi glomerulus menurun</div>
          <div class="pathway-arrow">↓</div>
          <div class="pathway-step">Kreatinin dan zat sisa metabolisme meningkat</div>
        </div>

        <div class="pathway-box">
          <h4>CKD</h4>
          <div class="pathway-step">Kerusakan ginjal menetap</div>
          <div class="pathway-arrow">↓</div>
          <div class="pathway-step">Kehilangan nefron secara progresif</div>
          <div class="pathway-arrow">↓</div>
          <div class="pathway-step">Nefron yang tersisa mengalami peningkatan beban kerja</div>
          <div class="pathway-arrow">↓</div>
          <div class="pathway-step">Fungsi filtrasi ginjal semakin menurun</div>
        </div>
        <p class="small-note">
          Gambaran ini merupakan penyederhanaan mekanisme penyakit.
          Proses sebenarnya dapat berbeda bergantung pada penyebabnya.
        </p>
      </div>

      <div class="education-card">
        <h3>Gejala yang dapat muncul</h3>
        <div class="two-column-info">
          <div>
            <h4>AKI</h4>
            <ul>
              <li>Jumlah urine berkurang.</li>
              <li>Pembengkakan.</li>
              <li>Mual atau muntah.</li>
              <li>Lemas atau sesak napas pada kondisi tertentu.</li>
            </ul>
          </div>
          <div>
            <h4>CKD</h4>
            <ul>
              <li>Sering tanpa gejala pada tahap awal.</li>
              <li>Mudah lelah.</li>
              <li>Pembengkakan pada kaki.</li>
              <li>Perubahan pola berkemih.</li>
              <li>Mual, gatal, atau sesak pada tahap lanjut.</li>
            </ul>
          </div>
        </div>
        <p class="small-note">
          Gejala tidak selalu muncul dan tidak cukup untuk memastikan
          diagnosis. Pemeriksaan medis tetap diperlukan.
        </p>
      </div>

      <div class="education-card">
        <h3>Perbedaan AKI dan CKD</h3>
        <div class="comparison-table">
          <div class="comparison-row comparison-header">
            <span>Aspek</span><span>AKI</span><span>CKD</span>
          </div>
          <div class="comparison-row">
            <span>Awitan</span><span>Cepat</span><span>Bertahap</span>
          </div>
          <div class="comparison-row">
            <span>Durasi</span><span>Jam hingga hari</span><span>Minimal 3 bulan</span>
          </div>
          <div class="comparison-row">
            <span>Perjalanan</span><span>Dapat pulih, menetap, atau berlanjut</span>
            <span>Sering progresif</span>
          </div>
          <div class="comparison-row">
            <span>Contoh penyebab</span><span>Dehidrasi berat, sepsis, obstruksi akut</span>
            <span>Diabetes, hipertensi, penyakit ginjal kronis</span>
          </div>
        </div>
      </div>

      <div class="education-card">
        <h3>Klasifikasi AKI menurut KDIGO</h3>
        <p>
          Stadium AKI ditentukan berdasarkan kreatinin serum
          <strong>atau</strong> jumlah urine. Jika kedua kriteria berbeda,
          gunakan stadium yang lebih berat.
        </p>
        <div class="comparison-table">
          <div class="comparison-row comparison-header">
            <span>Stadium</span><span>Kreatinin serum</span><span>Produksi urine</span>
          </div>
          <div class="comparison-row">
            <span>1</span><span>1,5–1,9 kali nilai dasar atau naik ≥0,3 mg/dL</span>
            <span>&lt;0,5 mL/kg/jam selama 6–12 jam</span>
          </div>
          <div class="comparison-row">
            <span>2</span><span>2,0–2,9 kali nilai dasar</span>
            <span>&lt;0,5 mL/kg/jam selama ≥12 jam</span>
          </div>
          <div class="comparison-row">
            <span>3</span><span>3 kali nilai dasar, atau ≥4,0 mg/dL, atau memulai terapi pengganti ginjal</span>
            <span>&lt;0,3 mL/kg/jam selama ≥24 jam atau tidak ada urine ≥12 jam</span>
          </div>
        </div>
        <p class="small-note">
          Kriteria tambahan stadium 3 pada pasien berusia di bawah 18 tahun:
          eGFR menurun hingga &lt;35 mL/menit/1,73 m².
        </p>
      </div>

      <div class="education-card">
        <h3>Klasifikasi CKD menurut KDIGO</h3>
        <p>
          Kategori G menunjukkan tingkat filtrasi ginjal atau eGFR.
        </p>
        <div class="comparison-table">
          <div class="comparison-row comparison-header">
            <span>Kategori</span><span>eGFR (mL/menit/1,73 m²)</span><span>Keterangan</span>
          </div>
          <div class="comparison-row"><span>G1</span><span>≥90</span><span>Normal atau tinggi</span></div>
          <div class="comparison-row"><span>G2</span><span>60–89</span><span>Menurun ringan</span></div>
          <div class="comparison-row"><span>G3a</span><span>45–59</span><span>Menurun ringan–sedang</span></div>
          <div class="comparison-row"><span>G3b</span><span>30–44</span><span>Menurun sedang–berat</span></div>
          <div class="comparison-row"><span>G4</span><span>15–29</span><span>Menurun berat</span></div>
          <div class="comparison-row"><span>G5</span><span>&lt;15</span><span>Gagal ginjal</span></div>
        </div>

        <h4>Kategori albuminuria</h4>
        <div class="comparison-table">
          <div class="comparison-row comparison-header">
            <span>Kategori</span><span>ACR urine</span><span>Makna</span>
          </div>
          <div class="comparison-row"><span>A1</span><span>&lt;30 mg/g</span><span>Normal–sedikit meningkat</span></div>
          <div class="comparison-row"><span>A2</span><span>30–300 mg/g</span><span>Meningkat sedang</span></div>
          <div class="comparison-row"><span>A3</span><span>&gt;300 mg/g</span><span>Meningkat berat</span></div>
        </div>
        <div class="fact-box">
          <strong>Ingat!</strong>
          <p>
            G1 atau G2 saja belum berarti seseorang mengalami CKD.
            Harus ada penanda kerusakan ginjal lain yang menetap
            minimal 3 bulan.
          </p>
        </div>
      </div>

      <div class="education-card">
        <h3>Kapan harus mencari pertolongan?</h3>
        <p>
          Segera periksakan diri jika jumlah urine menurun drastis,
          muncul pembengkakan disertai sesak napas, penurunan kesadaran,
          atau kondisi memburuk dengan cepat.
        </p>
        <p class="small-note">
          OSMIRA merupakan media edukasi dan bukan pengganti diagnosis
          atau konsultasi dengan tenaga kesehatan.
        </p>
      </div>

      <div class="education-card source-card">
        <h3>Sumber pembelajaran</h3>
        <p>KDIGO Clinical Practice Guideline for Acute Kidney Injury (2012).</p>
        <a href="https://kdigo.org/guidelines/acute-kidney-injury/" target="_blank" rel="noopener">
          Buka pedoman KDIGO AKI
        </a>
        <p>KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD.</p>
        <a href="https://kdigo.org/guidelines/ckd-evaluation-and-management/" target="_blank" rel="noopener">
          Buka pedoman KDIGO CKD
        </a>
      </div>
    </section>
  `;
}

function renderCheckup() {
  const content = document.getElementById("contentBody");

  content.innerHTML = `
    <div class="content-body-card">
      <h3>🔬 Pemeriksaan Kesehatan Ginjal</h3>
      <p>
        Pemeriksaan ginjal membantu menilai kemampuan ginjal
        dalam menyaring darah, membuang zat sisa, dan
        mempertahankan keseimbangan tubuh.
      </p>
    </div>

    <div class="content-body-card">
      <h3>1. Ureum</h3>
      <p>
        Ureum merupakan produk sisa metabolisme protein yang
        dibuang melalui ginjal.
      </p>
      <p><strong>Tujuan:</strong> Membantu menilai fungsi ginjal,
      bersama pemeriksaan klinis dan laboratorium lainnya.</p>
    </div>

    <div class="content-body-card">
      <h3>2. Kreatinin Serum</h3>
      <p>
        Kreatinin adalah produk sisa metabolisme otot yang
        dikeluarkan melalui ginjal.
      </p>
      <p><strong>Makna klinis:</strong> Peningkatan kreatinin
      dapat menunjukkan penurunan fungsi filtrasi ginjal,
      tetapi harus diinterpretasikan sesuai kondisi pasien.</p>
    </div>

    <div class="content-body-card">
      <h3>3. Estimated Glomerular Filtration Rate (eGFR)</h3>
      <p>
        eGFR adalah perkiraan laju filtrasi glomerulus yang
        menggambarkan kemampuan ginjal menyaring darah.
      </p>
      <p><strong>Kategori eGFR:</strong></p>

      <table>
        <tr><th>Kategori</th><th>Nilai (mL/min/1,73 m²)</th></tr>
        <tr><td>G1</td><td>≥ 90</td></tr>
        <tr><td>G2</td><td>60–89</td></tr>
        <tr><td>G3a</td><td>45–59</td></tr>
        <tr><td>G3b</td><td>30–44</td></tr>
        <tr><td>G4</td><td>15–29</td></tr>
        <tr><td>G5</td><td>&lt; 15</td></tr>
      </table>

      <p>
        Catatan: kategori G1 dan G2 saja belum cukup untuk
        menetapkan penyakit ginjal kronis (PGK) tanpa adanya
        penanda kerusakan ginjal lainnya.
      </p>
    </div>

    <div class="content-body-card">
      <h3>4. Urinalisis</h3>
      <p>
        Pemeriksaan urine untuk mendeteksi kelainan seperti
        protein, darah, glukosa, leukosit, dan sedimen urine.
      </p>
      <p><strong>Manfaat:</strong> Membantu mendeteksi tanda
      gangguan ginjal maupun saluran kemih.</p>
    </div>

    <div class="content-body-card">
      <h3>5. Urine Albumin-to-Creatinine Ratio (uACR)</h3>
      <p>
        uACR mengukur jumlah albumin dalam urine dibandingkan
        dengan kreatinin urine. Pemeriksaan ini membantu
        mendeteksi kerusakan ginjal.
      </p>

      <table>
        <tr><th>Kategori</th><th>Nilai (mg/g)</th></tr>
        <tr><td>A1</td><td>&lt; 30</td></tr>
        <tr><td>A2</td><td>30–&lt;300</td></tr>
        <tr><td>A3</td><td>≥ 300</td></tr>
      </table>
    </div>

    <div class="content-body-card">
      <h3>6. Ultrasonografi (USG) Ginjal</h3>
      <p>
        Pemeriksaan pencitraan untuk melihat ukuran, bentuk,
        struktur ginjal, serta kemungkinan kelainan seperti
        hidronefrosis, kista, atau batu ginjal.
      </p>
    </div>

    <div class="content-body-card">
      <h3>7. Biopsi Ginjal</h3>
      <p>
        Prosedur pengambilan sampel jaringan ginjal untuk
        pemeriksaan mikroskopis.
      </p>
      <p><strong>Indikasi:</strong> Dilakukan pada kondisi
      tertentu ketika diperlukan untuk menentukan jenis
      penyakit ginjal atau membantu menetapkan terapi.</p>
    </div>

    <div class="content-body-card">
      <h3>💡 Hal yang Perlu Diingat</h3>
      <p>
        Diagnosis penyakit ginjal kronis tidak ditentukan
        hanya dari satu kali pemeriksaan kreatinin atau eGFR.
        Kelainan harus dinilai berdasarkan riwayat, kondisi
        klinis, dan bukti kelainan ginjal yang menetap
        setidaknya selama 3 bulan.
      </p>
    </div>
  `;
}

function renderScanner() {
  const content = document.getElementById("contentBody");

  content.innerHTML = `
    <div class="content-body-card">
      <h3>🩺 Kidney Risk Scanner</h3>
      <p>
        Kenali faktor-faktor yang dapat meningkatkan risiko
        penyakit ginjal. Pilih kondisi yang sesuai dengan dirimu.
      </p>
      <p><strong>Petunjuk:</strong> Pilih semua faktor yang kamu miliki,
      kemudian tekan tombol periksa.
      </p>
    </div>

    <div class="content-body-card">
      <h3>Faktor Risiko</h3>

      <label class="risk-option">
        <input type="checkbox" name="kidneyRisk" value="diabetes">
        <span>Diabetes melitus</span>
      </label>

      <label class="risk-option">
        <input type="checkbox" name="kidneyRisk" value="hypertension">
        <span>Tekanan darah tinggi (hipertensi)</span>
      </label>

      <label class="risk-option">
        <input type="checkbox" name="kidneyRisk" value="cardiovascular">
        <span>Riwayat penyakit jantung atau pembuluh darah</span>
      </label>

      <label class="risk-option">
        <input type="checkbox" name="kidneyRisk" value="family">
        <span>Memiliki anggota keluarga dengan penyakit ginjal</span>
      </label>

      <label class="risk-option">
        <input type="checkbox" name="kidneyRisk" value="obesity">
        <span>Berat badan berlebih atau obesitas</span>
      </label>

      <label class="risk-option">
        <input type="checkbox" name="kidneyRisk" value="age">
        <span>Berusia 60 tahun atau lebih</span>
      </label>

      <label class="risk-option">
        <input type="checkbox" name="kidneyRisk" value="aki">
        <span>Pernah mengalami acute kidney injury (AKI)</span>
      </label>

      <label class="risk-option">
        <input type="checkbox" name="kidneyRisk" value="smoking">
        <span>Memiliki kebiasaan merokok</span>
      </label>

      <button id="checkRiskButton" class="primary-button">
        Periksa Faktor Risiko
      </button>

      <div id="riskResult" aria-live="polite"></div>
    </div>

    <div class="content-body-card">
      <h3>💡 Mengapa Skrining Penting?</h3>
      <p>
        Penyakit ginjal kronis dapat berkembang tanpa gejala
        pada tahap awal. Pemeriksaan kreatinin serum, eGFR,
        dan urine albumin-to-creatinine ratio (uACR) dapat
        membantu mendeteksi gangguan ginjal.
      </p>
    </div>

    <div class="content-body-card">
      <h3>⚠️ Catatan Penting</h3>
      <p>
        Hasil kuesioner ini hanya untuk edukasi. Hasil negatif
        tidak menjamin seseorang bebas dari penyakit ginjal,
        sedangkan hasil positif tidak berarti seseorang pasti
        mengalami penyakit ginjal.
      </p>
      <p>
        Konsultasikan kebutuhan pemeriksaan dengan tenaga
        kesehatan, terutama jika memiliki diabetes, hipertensi,
        atau faktor risiko lainnya.
      </p>
    </div>
  `;

  const checkButton = document.getElementById("checkRiskButton");
  const resultBox = document.getElementById("riskResult");

  checkButton.addEventListener("click", function () {
    const selectedRisks = document.querySelectorAll(
      'input[name="kidneyRisk"]:checked'
    );

    const total = selectedRisks.length;

    let resultHTML = "";

    if (total === 0) {
      resultHTML = `
        <div class="content-body-card">
          <h3>Belum Ada Faktor Risiko yang Dipilih</h3>
          <p>
            Kamu belum memilih faktor risiko pada kuesioner ini.
            Tetap jaga kesehatan ginjal dan lakukan pemeriksaan
            sesuai kebutuhan klinis.
          </p>
        </div>
      `;
    } else {
      resultHTML = `
        <div class="content-body-card">
          <h3>Faktor Risiko Teridentifikasi</h3>
          <p>
            Kamu memilih ${total} faktor risiko.
            Ini bukan penilaian tingkat risiko atau diagnosis,
            tetapi informasi untuk membantu mengenali kondisi
            yang perlu diperhatikan.
          </p>
          <p>
            Pertimbangkan konsultasi dengan tenaga kesehatan
            untuk menentukan apakah pemeriksaan tekanan darah,
            kreatinin serum, eGFR, dan uACR diperlukan.
          </p>
        </div>
      `;
    }

    resultBox.innerHTML = resultHTML;
    resultBox.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });
}

function renderPrevention() {
  const content = document.getElementById("contentBody");

  content.innerHTML = `
    <div class="content-body-card">
      <h3>🌱 Kidney Prevention</h3>
      <p>
        Ginjal memiliki peran penting dalam menjaga keseimbangan
        tubuh. Kebiasaan hidup sehat dapat membantu menjaga
        kesehatan ginjal dan mengurangi faktor risiko penyakit ginjal.
      </p>
    </div>

    <div class="content-body-card prevention-card">
      <h3>💧 1. Penuhi Kebutuhan Cairan</h3>
      <p>
        Minumlah air secara teratur sesuai kebutuhan tubuh,
        aktivitas, cuaca, dan kondisi kesehatan.
      </p>
      <p>
        Kebutuhan cairan setiap orang berbeda. Pasien dengan
        penyakit ginjal atau gagal jantung mungkin memerlukan
        pembatasan cairan sesuai anjuran tenaga kesehatan.
      </p>
    </div>

    <div class="content-body-card prevention-card">
      <h3>🥗 2. Terapkan Pola Makan Sehat</h3>
      <p>
        Pilih makanan bergizi seimbang dengan memperhatikan
        asupan garam, gula, dan lemak.
      </p>
      <ul>
        <li>Perbanyak sayur dan buah sesuai kondisi kesehatan.</li>
        <li>Batasi makanan tinggi garam dan makanan olahan.</li>
        <li>Hindari konsumsi gula berlebihan.</li>
        <li>Atur asupan protein sesuai kebutuhan tubuh.</li>
      </ul>
    </div>

    <div class="content-body-card prevention-card">
      <h3>🏃 3. Aktif Bergerak</h3>
      <p>
        Lakukan aktivitas fisik secara rutin sesuai kemampuan,
        seperti berjalan kaki, bersepeda, atau olahraga ringan.
      </p>
      <p>
        Aktivitas fisik membantu menjaga berat badan serta
        mendukung pengendalian tekanan darah dan gula darah.
      </p>
    </div>

    <div class="content-body-card prevention-card">
      <h3>🩺 4. Kendalikan Tekanan Darah dan Gula Darah</h3>
      <p>
        Hipertensi dan diabetes merupakan faktor risiko penting
        penyakit ginjal kronis.
      </p>
      <ul>
        <li>Periksa tekanan darah secara berkala.</li>
        <li>Pantau kadar gula darah sesuai anjuran.</li>
        <li>Minum obat sesuai resep dokter.</li>
        <li>Lakukan kontrol kesehatan secara teratur.</li>
      </ul>
    </div>

    <div class="content-body-card prevention-card">
      <h3>🚭 5. Hindari Rokok</h3>
      <p>
        Merokok dapat meningkatkan risiko penyakit pembuluh
        darah dan memperburuk kesehatan ginjal.
        Hindari rokok dan paparan asap rokok.
      </p>
    </div>

    <div class="content-body-card prevention-card">
      <h3>💊 6. Gunakan Obat dengan Bijak</h3>
      <p>
        Beberapa obat, termasuk obat antiinflamasi nonsteroid
        (OAINS/NSAID), dapat menyebabkan gangguan ginjal
        terutama pada kondisi tertentu.
      </p>
      <ul>
        <li>Gunakan obat sesuai dosis dan anjuran.</li>
        <li>Hindari penggunaan obat tanpa indikasi yang jelas.</li>
        <li>Konsultasikan penggunaan obat kepada tenaga kesehatan.</li>
        <li>Berhati-hati terhadap suplemen atau jamu yang tidak jelas kandungannya.</li>
      </ul>
    </div>

    <div class="content-body-card prevention-card">
      <h3>🔍 7. Lakukan Pemeriksaan Ginjal</h3>
      <p>
        Orang dengan faktor risiko seperti diabetes,
        hipertensi, atau riwayat penyakit ginjal perlu
        mendiskusikan pemeriksaan ginjal dengan tenaga kesehatan.
      </p>
      <p>
        Pemeriksaan dapat mencakup kreatinin serum, eGFR,
        dan urine albumin-to-creatinine ratio (uACR).
      </p>
    </div>

    <div class="content-body-card">
      <h3>💚 Ingat 7 Langkah Menjaga Ginjal</h3>
      <p>
        Minum sesuai kebutuhan, makan sehat, aktif bergerak,
        kendalikan tekanan darah dan gula darah, hindari rokok,
        gunakan obat dengan bijak, serta lakukan pemeriksaan
        kesehatan sesuai kebutuhan.
      </p>
    </div>
  `;
}

function renderQuiz() {
  const questions = [
    {
      question: "Apa fungsi utama ginjal?",
      options: [
        "Memompa darah ke seluruh tubuh",
        "Menyaring darah dan membentuk urine",
        "Menghasilkan enzim pencernaan",
        "Mengatur gerakan tubuh"
      ],
      answer: 1,
      explanation: "Ginjal menyaring darah, membuang zat sisa metabolisme, dan membentuk urine."
    },
    {
      question: "Di bagian manakah proses filtrasi darah dimulai?",
      options: [
        "Tubulus distal",
        "Duktus kolektivus",
        "Glomerulus",
        "Pelvis renalis"
      ],
      answer: 2,
      explanation: "Filtrasi darah dimulai di glomerulus, yaitu anyaman kapiler dalam nefron."
    },
    {
      question: "Apa definisi penyakit ginjal kronis (PGK)?",
      options: [
        "Gangguan ginjal yang berlangsung selama 1 minggu",
        "Kelainan struktur atau fungsi ginjal selama minimal 3 bulan",
        "Penurunan urine selama 24 jam",
        "Peningkatan ureum sesaat"
      ],
      answer: 1,
      explanation: "PGK ditandai kelainan struktur atau fungsi ginjal yang memiliki implikasi terhadap kesehatan dan berlangsung minimal 3 bulan."
    },
    {
      question: "Pemeriksaan yang digunakan untuk memperkirakan kemampuan filtrasi ginjal adalah...",
      options: [
        "Hemoglobin",
        "Trombosit",
        "eGFR",
        "Leukosit"
      ],
      answer: 2,
      explanation: "eGFR atau estimated Glomerular Filtration Rate digunakan untuk memperkirakan laju filtrasi glomerulus."
    },
    {
      question: "Manakah kebiasaan yang membantu menjaga kesehatan ginjal?",
      options: [
        "Mengonsumsi obat antinyeri tanpa pengawasan",
        "Mengonsumsi garam secara berlebihan",
        "Mengontrol tekanan darah dan gula darah",
        "Menghindari pemeriksaan kesehatan"
      ],
      answer: 2,
      explanation: "Mengontrol tekanan darah dan gula darah membantu mengurangi risiko kerusakan ginjal."
    }
  ];

  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  function showQuestion() {
    const q = questions[currentQuestion];

    contentBody.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-heading">
          <span class="quiz-label">KIDNEY FUN ZONE</span>
          <h2>Kidney Knowledge Quiz 🧠</h2>
          <p>Uji pengetahuanmu seputar kesehatan ginjal!</p>
        </div>

        <div class="quiz-progress">
          <div class="quiz-progress-info">
            <span>Soal ${currentQuestion + 1} dari ${questions.length}</span>
            <span>${Math.round(
              ((currentQuestion + 1) / questions.length) * 100
            )}%</span>
          </div>
          <div class="quiz-progress-track">
            <div class="quiz-progress-fill"
              style="width:${((currentQuestion + 1) / questions.length) * 100}%">
            </div>
          </div>
        </div>

        <div class="quiz-card">
          <h3>${q.question}</h3>

          <div class="quiz-options">
            ${q.options.map((option, index) => `
              <button class="quiz-option" data-answer="${index}">
                <span class="quiz-option-letter">
                  ${String.fromCharCode(65 + index)}
                </span>
                <span>${option}</span>
              </button>
            `).join("")}
          </div>

          <div id="quizFeedback"></div>
          <button id="quizNext" class="primary-button" disabled>
            ${currentQuestion === questions.length - 1
              ? "Lihat Hasil"
              : "Soal Berikutnya"}
          </button>
        </div>

        <p class="quiz-note">
          Kuis ini merupakan media edukasi dan bukan alat diagnosis medis.
        </p>
      </div>
    `;

    document.querySelectorAll(".quiz-option").forEach(button => {
      button.addEventListener("click", () => {
        if (answered) return;

        answered = true;
        const selected = Number(button.dataset.answer);
        const correct = selected === q.answer;

        if (correct) score++;

        document.querySelectorAll(".quiz-option").forEach(option => {
          option.disabled = true;
          const value = Number(option.dataset.answer);

          if (value === q.answer) {
            option.classList.add("correct");
          } else if (value === selected) {
            option.classList.add("incorrect");
          }
        });

        const feedback = document.getElementById("quizFeedback");

        feedback.innerHTML = `
          <div class="quiz-explanation ${correct ? "correct-feedback" : "wrong-feedback"}">
            <strong>${correct ? "Benar! 🎉" : "Belum tepat."}</strong>
            <p>${q.explanation}</p>
          </div>
        `;

        document.getElementById("quizNext").disabled = false;
      });
    });

    document.getElementById("quizNext").addEventListener("click", () => {
      if (!answered) return;

      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        answered = false;
        showQuestion();
      } else {
        showResult();
      }
    });
  }

  function showResult() {
    const percentage = Math.round((score / questions.length) * 100);

    let message = "";

    if (score === 5) {
      message = "Luar biasa! Kamu sangat memahami kesehatan ginjal.";
    } else if (score >= 3) {
      message = "Bagus! Terus tingkatkan pengetahuanmu tentang ginjal.";
    } else {
      message = "Jangan menyerah! Yuk, pelajari kembali materi OSMIRA.";
    }

    contentBody.innerHTML = `
      <div class="quiz-result">
        <div class="quiz-result-icon">🏆</div>
        <span class="quiz-label">QUIZ COMPLETED</span>
        <h2>Kuis Selesai!</h2>

        <div class="quiz-score">
          <strong>${score}/${questions.length}</strong>
          <span>Jawaban Benar</span>
        </div>

        <h3>${percentage}%</h3>
        <p>${message}</p>

        <button id="quizRestart" class="primary-button">
          Ulangi Kuis
        </button>
      </div>
    `;

    document.getElementById("quizRestart").addEventListener("click", () => {
      currentQuestion = 0;
      score = 0;
      answered = false;
      showQuestion();
    });
  }

  showQuestion();
}

function renderFunZone() {
  contentBody.innerHTML = `
    <div class="funzone-container">
      <div class="funzone-heading">
        <span class="quiz-label">LEARN • PLAY • EXPLORE</span>
        <h2>Kidney Fun Zone 🎮</h2>
        <p>Belajar kesehatan ginjal dengan cara menyenangkan!</p>
      </div>

      <div class="funzone-menu">
        <button class="funzone-card" id="openQuiz">
          <div class="funzone-icon quiz-icon">🎯</div>
          <div class="funzone-text">
            <h3>Kidney Quiz</h3>
            <p>Uji pengetahuanmu dan dapatkan skor otomatis!</p>
            <span>Start Quiz →</span>
          </div>
        </button>

        <button class="funzone-card" id="openFlashcards">
          <div class="funzone-icon flashcard-icon">📚</div>
          <div class="funzone-text">
            <h3>Kidney Flashcards</h3>
            <p>Pelajari istilah dan fakta penting tentang ginjal.</p>
            <span>Explore Flashcards →</span>
          </div>
        </button>
      </div>
    </div>
  `;

  document.getElementById("openQuiz")
    .addEventListener("click", renderQuiz);

  document.getElementById("openFlashcards")
    .addEventListener("click", renderFlashcards);
}


function renderFlashcards() {
  const flashcards = [
    {
      question: "Apa itu nefron?",
      answer: "Nefron adalah unit struktural dan fungsional ginjal yang bertugas menyaring darah dan membentuk urine."
    },
    {
      question: "Apa fungsi glomerulus?",
      answer: "Glomerulus merupakan kumpulan kapiler yang melakukan proses filtrasi darah pada ginjal."
    },
    {
      question: "Apa itu kreatinin?",
      answer: "Kreatinin merupakan zat sisa metabolisme otot yang dikeluarkan melalui ginjal. Kadarnya dalam darah digunakan untuk membantu menilai fungsi ginjal."
    },
    {
      question: "Apa itu eGFR?",
      answer: "Estimated Glomerular Filtration Rate adalah perkiraan laju filtrasi glomerulus yang digunakan untuk menilai kemampuan filtrasi ginjal."
    },
    {
      question: "Apa itu albuminuria?",
      answer: "Albuminuria adalah kondisi ketika albumin ditemukan dalam urine. Kondisi ini dapat menjadi penanda kerusakan ginjal."
    },
    {
      question: "Apa kepanjangan PGK?",
      answer: "PGK adalah Penyakit Ginjal Kronis, yaitu kelainan struktur atau fungsi ginjal yang berlangsung minimal 3 bulan dan memiliki implikasi terhadap kesehatan."
    },
    {
      question: "Apa fungsi hormon eritropoietin?",
      answer: "Eritropoietin merupakan hormon yang diproduksi terutama oleh ginjal dan merangsang sumsum tulang untuk membentuk sel darah merah."
    },
    {
      question: "Apa fungsi renin?",
      answer: "Renin adalah enzim yang berperan dalam sistem renin-angiotensin-aldosteron untuk membantu mengatur tekanan darah dan keseimbangan cairan."
    },
    {
      question: "Apa fungsi vitamin D aktif dari ginjal?",
      answer: "Ginjal mengubah vitamin D menjadi bentuk aktif, yaitu kalsitriol, yang membantu mengatur penyerapan kalsium dan fosfat."
    },
    {
      question: "Apa pemeriksaan untuk mendeteksi albumin dalam urine?",
      answer: "Pemeriksaan urine albumin-to-creatinine ratio (uACR) digunakan untuk menilai jumlah albumin dalam urine relatif terhadap kreatinin."
    }
  ];

  let currentCard = 0;
  let isFlipped = false;

  function showCard() {
    const card = flashcards[currentCard];

    const progress = ((currentCard + 1) / flashcards.length) * 100;

    contentBody.innerHTML = `
      <div class="flashcard-container">

        <div class="flashcard-heading">
          <span class="quiz-label">KIDNEY FUN ZONE</span>
          <h2>Kidney Flashcards 📚</h2>
          <p>
            Belajar istilah penting tentang ginjal
            dengan cara menyenangkan!
          </p>
        </div>

        <div class="flashcard-counter" id="flashCounter">
          Kartu ${currentCard + 1} dari ${flashcards.length}
        </div>

        <div class="flashcard-progress">
          <div
            class="flashcard-progress-fill"
            id="flashProgress"
            style="width: ${progress}%">
          </div>
        </div>

        <div class="flashcard-scene">

          <div class="flashcard" id="flashcard">

            <div class="flashcard-face flashcard-front">

              <span class="flashcard-label">
                PERTANYAAN
              </span>

              <h3>${card.question}</h3>

              <p>👆 Klik kartu untuk melihat jawaban</p>

            </div>

            <div class="flashcard-face flashcard-back">

              <span class="flashcard-label">
                JAWABAN
              </span>

              <h3>${card.answer}</h3>

              <p>👆 Klik kartu untuk kembali</p>

            </div>

          </div>

        </div>

        <div class="flashcard-controls">

          <button
            id="flashPrev"
            class="flash-button"
            ${currentCard === 0 ? "disabled" : ""}>
            ← Sebelumnya
          </button>

          <button
            id="flashFlip"
            class="flash-button flash-primary">
            Lihat Jawaban
          </button>

          <button
            id="flashNext"
            class="flash-button"
            ${currentCard === flashcards.length - 1 ? "disabled" : ""}>
            Selanjutnya →
          </button>

        </div>

        <button id="flashShuffle" class="flash-shuffle">
          🔀 Acak Kartu
        </button>

        <p class="quiz-note">
          Pelajari setiap kartu untuk memperkuat
          pemahamanmu tentang ginjal.
        </p>

      </div>
    `;

    // EVENT KLIK KARTU
    document.getElementById("flashcard")
      .addEventListener("click", flipCard);

    // EVENT TOMBOL LIHAT JAWABAN
    document.getElementById("flashFlip")
      .addEventListener("click", flipCard);

    // TOMBOL SEBELUMNYA
    document.getElementById("flashPrev")
      .addEventListener("click", () => {

        if (currentCard > 0) {
          currentCard--;
          isFlipped = false;
          showCard();
        }

      });

    // TOMBOL SELANJUTNYA
    document.getElementById("flashNext")
      .addEventListener("click", () => {

        if (currentCard < flashcards.length - 1) {
          currentCard++;
          isFlipped = false;
          showCard();
        }

      });

    // TOMBOL ACAK KARTU
    document.getElementById("flashShuffle")
      .addEventListener("click", () => {

        for (let i = flashcards.length - 1; i > 0; i--) {

          const j = Math.floor(Math.random() * (i + 1));

          [flashcards[i], flashcards[j]] =
          [flashcards[j], flashcards[i]];

        }

        currentCard = 0;
        isFlipped = false;

        showCard();

      });

  }

  // FUNGSI MEMBALIK KARTU
  function flipCard() {

    isFlipped = !isFlipped;

    const cardElement = document.getElementById("flashcard");
    const flipButton = document.getElementById("flashFlip");

    cardElement.classList.toggle("flipped", isFlipped);

    flipButton.textContent = isFlipped
      ? "Lihat Pertanyaan"
      : "Lihat Jawaban";

  }

  // TAMPILKAN KARTU PERTAMA
  showCard();
}


// ======================================
// SISTEM MEMBUKA HALAMAN
// ======================================



function openPage(pageName) {
  if (pageName === "home") {
    showHome();
    return;
  }

  const page = pages[pageName];

  if (!page) return;

  homePage.classList.remove("active");
  contentPage.classList.add("active");

  contentTitle.textContent = page.title;
  contentDescription.textContent = page.description;

  if (pageName === "kidney101") {
    renderKidney101();
  } else if (pageName === "disease") {
    renderAkiCkd();
  } else if (pageName === "checkup") {
    renderCheckup();
  } else if (pageName === "scanner") {
    renderScanner();
  } else if (pageName === "prevention") {
    renderPrevention();
  } else if (pageName === "quiz") {
    renderFunZone();
  } else {
    contentBody.innerHTML = `
      <div class="content-body-card">
        <h3>${page.title}</h3>
        <p>Materi ${page.title} sedang dikembangkan.</p>
      </div>
    `;
  }

  updateNavigation(pageName);
  window.scrollTo({ top: 0, behavior: "smooth" });
}



// ======================================
// KEMBALI KE BERANDA
// ======================================

function showHome() {

  contentPage.classList.remove("active");
  homePage.classList.add("active");

  updateNavigation("home");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

// ======================================
// NAVIGASI BAWAH
// ======================================

function updateNavigation(pageName) {

  document.querySelectorAll(".nav-item").forEach(item => {

    item.classList.toggle(
      "active",
      item.dataset.page === pageName
    );

  });

}

// ======================================
// EVENT TOMBOL
// ======================================

document.querySelectorAll("[data-page]").forEach(button => {

  button.addEventListener("click", () => {

    openPage(button.dataset.page);

  });

});

backButton.addEventListener("click", showHome);

