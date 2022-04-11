const rowWrapper = document.querySelector(".row");

for (let i = 0; i <= 100; i++) {
  // 1. definire se è pari o dispari
  let pippo;

  if (i % 3 === 0) {
    pippo = "fizz";
  } if (i % 5 === 0) {
    pippo = "buzz";
  } if (i % 3 === 0 && i % 5 === 0) {
    pippo = "fizzbuzz"
  }

  // 2. output
  rowWrapper.innerHTML += `<div class="box ${pippo}">${i}</div>`;
}

div.append