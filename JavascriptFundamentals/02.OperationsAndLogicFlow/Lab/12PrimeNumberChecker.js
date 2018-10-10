function checkIfPrime(num) {
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    }

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    console.log(isPrime);
}