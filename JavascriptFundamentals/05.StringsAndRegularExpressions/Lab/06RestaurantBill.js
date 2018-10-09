function calculateBill(order) {
    let purchase = [];
    let bill = 0;

    for (let i = 0; i < order.length; i++) {
        if (i % 2 === 0) {
            purchase.push(order[i]);
        } else {
            bill += +order[i];
        }
    }

    console.log(`You purchased ` + purchase.join(', ') + ` for a total sum of ${bill}`);
}