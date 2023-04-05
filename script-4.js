function countInOrderEverySecond(num1, num2) {
   let prog = num1;

   let intervalId = setInterval(function () {
      if (prog <= num2) {
         console.log(prog)
         prog++;
      } else clearInterval(intervalId);
   }, 1000);
}

countInOrderEverySecond(1, 10);