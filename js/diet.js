// =========================================
// ELEMENT
// =========================================

const generateBtn = document.getElementById("generateBtn");

const resultSection = document.getElementById("resultSection");

const emailSection = document.getElementById("emailSection");

const mealContainer = document.getElementById("mealContainer");


// =========================================
// BUTTON
// =========================================

generateBtn.addEventListener("click", function () {

    mealContainer.innerHTML = `

    <div class="meal">

        <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600">

        <div>

            <h3>Sarapan</h3>

            <p>Oatmeal + Pisang</p>

            <span>320 kcal</span>

        </div>

    </div>


    <div class="meal">

        <img src="https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&w=600">

        <div>

            <h3>Makan Siang</h3>

            <p>Ayam Panggang + Nasi Merah</p>

            <span>580 kcal</span>

        </div>

    </div>


    <div class="meal">

        <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600">

        <div>

            <h3>Snack</h3>

            <p>Apel Merah</p>

            <span>120 kcal</span>

        </div>

    </div>


    <div class="meal">

        <img src="https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600">

        <div>

            <h3>Makan Malam</h3>

            <p>Salad Sayur + Dada Ayam</p>

            <span>420 kcal</span>

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
// SAVE RESULT
// ======================================

const saveButton = document.querySelector(".email-section button");

saveButton.addEventListener("click", function(){

    window.location.href = "thankyou.html";

});