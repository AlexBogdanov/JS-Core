function getLastK(n, k) {
    let sum = [1, 1];

    for (let i = 2; i < n; i++) {
        let numToAdd = 0;

        if (k >= sum.length) {
            for (let i = 0; i < sum.length; i++) {
                numToAdd += +sum[i];
            }
        } else {
            for (let i = sum.length - k; i < sum.length; i++) {
                numToAdd += +sum[i];
            }
        }

        sum.push(numToAdd);
    }
    
    let output = sum.join(' ');
    console.log(output);
}