function capitalizeWords(text) {
    let textArr = text.split(/\s+/g);

    let result = textArr.map(word => {
        if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90 || word.charCodeAt(0) >= 91 && word.charCodeAt(0) <= 122) {
            return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return word.slice(1, 2).toUpperCase() + word.slice(2).toLowerCase();
        }
    });

    console.log(result.join(' '));
}