function printTheBiggestNum(nums) {
    let num1 = +nums[0];
    let num2 = +nums[1];
    let num3 = +nums[2];
    
    if (num1 >= num2) {
        if (num1 >= num3) {
            console.log(num1);
        } else {
            console.log(num3);
        }
    } else {
        if (num2 >= num3) {
            console.log(num2);
        } else {
            console.log(num3);
        }
    }
}