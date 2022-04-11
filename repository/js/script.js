for (let i = 0; i <= 100; i++) {

    // 1. definire se è pari o dispari
    let pippo;

    if (i % 3 === 0) {
        pippo = "Fizz";
    } if (i % 5 === 0) {
        pippo = "Buzz";
    } if (i % 3 === 0 && i % 5 === 0) {
        pippo = "FizzBuzz"
    }

    // 2. stampare
    console.log(i, pippo);
}