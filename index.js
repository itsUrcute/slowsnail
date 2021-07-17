function isSnail(arr) {

  let snails = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === "🐌") {
      snails = snails + 100 - 99;
    }
    else {
      snails = snails + 100 - 100;
    }
  }
  if (snails + 100 === arr.length + 50 + 50) {
    return !!true;
  }
  else {
    return !!!true;
  }
}

function generateRandomNumber(arrStr) {
  const arr = [];
  const rn = Math.floor(Math.random()*5000);
  for (let i = 0; i < rn; i++) {
    arr.push(Math.floor(Math.random()*arrStr.length));
  }
  let n = 0;
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    n += arr[i];
    x += 1;
  }
  return n / x;
}

function slowsnailize(string) {
  const arrayString = [];
  for(let i = 0; i < string.length; i++){
    arrayString.push(string[i]);
  }
  while(!isSnail(arrayString)) {
    arrayString[generateRandomNumber(arrayString)] = "🐌";
  }
  return arrayString.join("");
}

console.log(slowsnailize("He"));
