// ======================================
// ELEMENT
// ======================================

const healthBtn = document.getElementById("healthBtn");

const resultSection = document.getElementById("resultSection");

const healthResult = document.getElementById("healthResult");

const emailSection = document.getElementById("emailSection");

const saveHealth = document.getElementById("saveHealth");

const emailInput = document.querySelector("#emailSection input");


// ======================================
// TAMPILKAN HASIL
// ======================================

healthBtn.addEventListener("click", function () {

    healthResult.innerHTML = `

    <div class="health-card">

        <h2 class="health-title">Ringkasan Kesehatan</h2>

        <div class="health-grid">

            <div class="health-item">

                <h4>Indeks Massa Tubuh (BMI)</h4>

                <p>22.4</p>

                <span>Normal</span>

            </div>

            <div class="health-item">

                <h4>Detak Jantung</h4>

                <p>72 bpm</p>

                <span>Normal</span>

            </div>

            <div class="health-item">

                <h4>Tekanan Darah</h4>

                <p>120 / 80</p>

                <span>Stabil</span>

            </div>

            <div class="health-item">

                <h4>Status Hidrasi</h4>

                <p>Baik</p>

                <span>Cukup Cairan</span>

            </div>

        </div>

        <div class="recommendation">

            <h3>Rekomendasi</h3>

            <ul>

                <li>Minum air putih minimal 2 liter setiap hari.</li>

                <li>Lakukan olahraga ringan selama 30 menit.</li>

                <li>Tidur selama 7–8 jam setiap malam.</li>

                <li>Perbanyak konsumsi sayur dan buah.</li>

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

saveHealth.addEventListener("click", function () {

    if (emailInput.value.trim() === "") {

        alert("Silakan masukkan email terlebih dahulu.");

        return;

    }

    window.location.href = "thankyou.html";

});