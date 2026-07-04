// ======================================
// ELEMENT
// ======================================

const nutritionBtn = document.getElementById("nutritionBtn");

const resultSection = document.getElementById("resultSection");

const nutritionResult = document.getElementById("nutritionResult");

const emailSection = document.getElementById("emailSection");

const saveNutrition = document.getElementById("saveNutrition");

const emailInput = document.querySelector("#emailSection input");


// ======================================
// TAMPILKAN HASIL
// ======================================

nutritionBtn.addEventListener("click", function () {

    nutritionResult.innerHTML = `

    <div class="nutrition-card">

        <h2 class="nutrition-title">Ringkasan Nutrisi Harian</h2>

        <div class="nutrition-grid">

            <div class="nutrition-item">

                <h4>Total Kalori</h4>

                <p>1.440</p>

                <span>kkal</span>

            </div>

            <div class="nutrition-item">

                <h4>Protein</h4>

                <p>95 g</p>

                <span>Kebutuhan hampir terpenuhi</span>

            </div>

            <div class="nutrition-item">

                <h4>Karbohidrat</h4>

                <p>180 g</p>

                <span>Konsumsi normal</span>

            </div>

            <div class="nutrition-item">

                <h4>Lemak</h4>

                <p>45 g</p>

                <span>Masih dalam batas aman</span>

            </div>

        </div>

        <div class="nutrition-progress">

            <div class="progress-row">

                <h4>Protein</h4>

                <div class="progress-bar">

                    <div class="progress-fill" style="width:80%;"></div>

                </div>

                <div class="progress-value">80%</div>

            </div>

            <div class="progress-row">

                <h4>Karbohidrat</h4>

                <div class="progress-bar">

                    <div class="progress-fill" style="width:70%;"></div>

                </div>

                <div class="progress-value">70%</div>

            </div>

            <div class="progress-row">

                <h4>Lemak</h4>

                <div class="progress-bar">

                    <div class="progress-fill" style="width:60%;"></div>

                </div>

                <div class="progress-value">60%</div>

            </div>

            <div class="progress-row">

                <h4>Total Kalori</h4>

                <div class="progress-bar">

                    <div class="progress-fill" style="width:75%;"></div>

                </div>

                <div class="progress-value">75%</div>

            </div>

        </div>

        <div class="nutrition-tips">

            <h3>Rekomendasi</h3>

            <ul>

                <li>Perbanyak konsumsi makanan tinggi protein.</li>

                <li>Tambahkan sayuran hijau pada setiap waktu makan.</li>

                <li>Batasi makanan dan minuman tinggi gula.</li>

                <li>Minum air putih minimal 2 liter setiap hari.</li>

                <li>Konsumsi buah sebagai camilan sehat.</li>

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

saveNutrition.addEventListener("click", function () {

    if (emailInput.value.trim() === "") {

        alert("Silakan masukkan email terlebih dahulu.");

        return;

    }

    window.location.href = "thankyou.html";

});