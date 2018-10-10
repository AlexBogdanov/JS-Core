function fruitOrVegetable(product) {
    let output = '';

    if (product === 'banana' || product === 'apple' || product === 'kiwi' || product === 'cherry'
        || product === 'lemon' || product === 'grapes' || product === 'peach') {
        output = 'fruit';
    } else if (product === 'tomato' || product === 'cucumber' || product === 'pepper' ||
                product === 'onion' || product === 'garlic' || product === 'parsley') {
        output = 'vegetable';
    } else {
        output = 'unknown';
    }

    console.log(output);
}