let arr = [15, 27, null, 32, "ad", 48, 'car', 95, null, 50, 87, 66];

function findEvenAndOddElements() {
   let even = 0;
   let odd = 0;

   array.map(function (item, index, arr) {
      if (item == null) {
         console.log("Элемент " + index + " равен null.");
         return;
      }

      if (typeof item == "string") {
         console.log("Элемент " + index + " - является строкой.");
         return;
      }

      if (item % 2 === 0) even++;
      else odd++;
   });

   console.log("Чётных чисел: " + even);
   console.log("Нечётных чисел: " + odd);
}

findEvenAndOddElements();