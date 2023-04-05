function findPrimeNumber(num) {
   if (num > 1000) return "Ошибка";
   if (num === 0) return "Ноль";
   if (num === 1) return "Единица не считается";

   let divCount = 0;
   for (let i = 1; i <= num; i++) {
      if (num % i === 0) divCount++;
   }

   if (divCount === 2)
      return "Число простое.";
   else
      return "Число составное.";
}

console.log(findPrimeNumber(10));