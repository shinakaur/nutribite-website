// ======================================
// ELEMENT
// ======================================

const weightBtn = document.getElementById("weightBtn");

const resultSection = document.getElementById("resultSection");

const weightResult = document.getElementById("weightResult");

const emailSection = document.getElementById("emailSection");

const saveWeight = document.getElementById("saveWeight");

const emailInput = document.querySelector("#emailSection input");


// ======================================
// HITUNG RENCANA
// ======================================

weightBtn.addEventListener("click", function () {

    weightResult.innerHTML = `

    <div class="weight-card">

        <h2 class="weight-title">Rencana Berat Badan</h2>

        <div class="weight-grid">

            <div class="weight-item">

                <h4>Berat Saat Ini</h4>

                <p>72 kg</p>

                <span>Kondisi saat ini</span>

            </div>

            <div class="weight-item">

                <h4>Target Berat</h4>

                <p>65 kg</p>

                <span>Target yang ingin dicapai</span>

            </div>

            <div class="weight-item">

                <h4>Estimasi Waktu</h4>

                <p>3 Bulan</p>

                <span>Perkiraan waktu pencapaian</span>

            </div>

            <div class="weight-item">

                <h4>Target per Minggu</h4>

                <p>-0,6 kg</p>

                <span>Target penurunan yang disarankan</span>

            </div>

        </div>


        <div class="progress-box">

            <h3>Estimasi Progress</h3>

            <div class="progress">

                <div class="progress-fill"></div>

            </div>

            <p class="progress-text">70% Target Dapat Dicapai</p>

        </div>


        <div class="weight-tips">

            <h3>Rekomendasi</h3>

            <ul>

                <li>Jalan kaki minimal 8.000 langkah setiap hari.</li>

                <li>Minum air putih minimal 2 liter per hari.</li>

                <li>Perbanyak konsumsi makanan tinggi protein.</li>

                <li>Tidur selama 7–8 jam setiap malam.</li>

                <li>Kurangi makanan tinggi gula dan makanan cepat saji.</li>

            </ul>

        </div>

    </div>

    `;

    resultSection.style.display = "block";

    emailSection.style.display = "block";

    resultSection.scrollIntoView({

        behavior: "smooth"

    });

});


// ======================================
// SIMPAN HASIL
// ======================================

saveWeight.addEventListener("click", function () {

    if (emailInput.value.trim() === "") {

        alert("Silakan masukkan email terlebih dahulu.");

        return;

    }

    window.location.href = "thankyou.html";

});