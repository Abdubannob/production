
    let rangeMin = 100;
    const ranges = document.querySelector(".range-selecteds");
    const rangeInputs = document.querySelectorAll(".range-inputs input");
    const rangePrices = document.querySelectorAll(".range-prices p");
        rangeInputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minRange = parseInt(rangeInputs[0].value);
        let maxRange = parseInt(rangeInputs[1].value);
        if (maxRange - minRange < rangeMin) {     
          if (e.target.className === "min") {
            rangeInputs[0].value = maxRange - rangeMin;        
          } else {
            rangeInputs[1].value = minRange + rangeMin;        
          }
        } else {
          rangePrices[0].textContent = minRange;
          rangePrices[1].textContent = maxRange;
          ranges.style.left = (minRange / rangeInputs[0].max) * 100 + "%";
          ranges.style.right = 100 - (maxRange / rangeInputs[1].max) * 100 + "%";
        }
      });
    });
      