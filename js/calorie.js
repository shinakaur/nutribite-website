// ======================================
// ELEMENT
// ======================================

const foodImage = document.getElementById("foodImage");

const previewBox = document.getElementById("previewBox");

const previewImage = document.getElementById("previewImage");

const foodName = document.getElementById("foodName");

const analyzeBtn = document.getElementById("analyzeBtn");

const resultSection = document.getElementById("resultSection");

const resultContainer = document.getElementById("resultContainer");

const emailSection = document.getElementById("emailSection");


// ======================================
// PREVIEW IMAGE
// ======================================

foodImage.addEventListener("change", function(){

    const file = this.files[0];

    if(file){

        previewImage.src = URL.createObjectURL(file);

        previewBox.style.display = "block";

    }

});


// ======================================
// ANALYZE
// ======================================

analyzeBtn.addEventListener("click", function(){

    let image = previewImage.src;

    if(image == ""){

        image = "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800";

    }

    let food = foodName.value;

    if(food.trim() == ""){

        food = "Nasi Goreng";

    }

    resultContainer.innerHTML = `

<div class="result-card">

<img src="${image}">

<div class="result-info">

<h3>${food}</h3>

<div class="nutrition-grid">

<div class="nutrition-item">

<h4>Kalori</h4>

<p>650 kcal</p>

</div>

<div class="nutrition-item">

<h4>Protein</h4>

<p>18 g</p>

</div>

<div class="nutrition-item">

<h4>Karbohidrat</h4>

<p>70 g</p>

</div>

<div class="nutrition-item">

<h4>Lemak</h4>

<p>24 g</p>

</div>

</div>

</div>

</div>

<div class="tips">

<h3>Tips Hari Ini</h3>

<ul>

<li>Minum air putih minimal 2 liter.</li>

<li>Batasi konsumsi minuman manis.</li>

<li>Lakukan jalan kaki selama 30 menit.</li>

</ul>

</div>

`;

    resultSection.style.display = "block";

    emailSection.style.display = "block";

    resultSection.scrollIntoView({

        behavior:"smooth"

    });

});

// ======================================
// SAVE RESULT
// ======================================

const saveButton = document.querySelector(".email-section button");

saveButton.addEventListener("click", function(){

    window.location.href = "thankyou.html";

});