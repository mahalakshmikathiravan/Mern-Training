let fruits = ["Apple", "Banana", "Mango"];
let numbers = new Array(1, 2, 3, 4, 5);
console.log(fruits[0]);  
console.log(fruits[2]);    


function startTimer() {
    let count = 1;
  
    const intervalId = setInterval(function () {
      console.log(count);
      count++;
  
      if (count > 10 ) {
        clearInterval(intervalId); // Stop after 5
      }
    }, 1000); // 1000ms = 1 second
  }
  
  startTimer();
  