const form = document.querySelector("form");

form.addEventListener("submit", function (p) {
    p.preventDefault();
   const height = parseInt(document.querySelector("#height").value);
   const weight = parseInt(document.querySelector("#weight").value);
   const result = document.querySelector("#results");

   if ( height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Give a valid Height`;
    result.style.color = "red";
   }
   else if ( weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Give a valid weight`;
    result.style.color = "red";
   }
   else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = bmi
    if (bmi < 18.6) {
        result.innerHTML = `under weight ${bmi}`
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
        result.innerHTML = `Normal Range ${bmi}`
    }
    if (bmi > 24.9) {
        result.innerHTML = `Overweight ${bmi}`
    }
   }


   
})