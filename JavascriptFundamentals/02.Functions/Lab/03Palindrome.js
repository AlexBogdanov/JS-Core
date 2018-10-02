function isPalindrome(data) {
    let isItPalindrome = false;
    let text1 = '';
    let text2 = '';

    for (let i = 0; i < data.length / 2; i++) {
        text1 += data[i];
        text2 += data[data.length - 1 - i];
    }

    if (text1 === text2)
        isItPalindrome = true;
        
    console.log(isItPalindrome);
}