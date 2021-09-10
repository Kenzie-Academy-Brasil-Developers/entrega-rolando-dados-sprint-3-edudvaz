let count = [0,0,0,0,0,0,0,0,0,0,0,0,0]


function rollOfDice1(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function rollOfDice2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function diceRollThousandTimes(){
      for(let i = 1; i <=1000; i++){
          let diceSum = rollOfDice1(1,6) + rollOfDice2(1,6);
          count[diceSum] += 1
      }
      show();
      return count
  }


  function show(){
    for(let i = 2; i <= 12; i++){
      const graphic = document.getElementById("graphic")
      const bar = document.createElement('div')
      const allBars = document.createElement('p')
      bar.innerText = [i] + ": " + count[i]
      allBars.style.width = count[i] + "1px"
      allBars.style.height = 25 + "px"
      allBars.style.backgroundColor = "DarkOrchid"
      allBars.innerText = [i] + ": " + count[i]
      graphic.appendChild(allBars)
    }

      return count;
  }
  diceRollThousandTimes();