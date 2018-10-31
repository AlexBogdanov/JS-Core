function personalBMI(name, age, weightKg, heightCm) {
    function calculateBMI() {
        return weightKg / Math.pow(heightM, 2);
    }

    function calculateStatus() {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25) {
            return 'normal';
        } else if (bmi < 30) {
            return 'overweight';
        } else if (bmi >= 30) {
            return 'obese';
        } 
    }

    let heightM = heightCm / 100;
    let bmi = calculateBMI();
    let status = calculateStatus();

    let personalInfo = {
        name,
        personalInfo: {
            age,
            weightKg,
            heightCm
        },
        BMI: Math.round(bmi),
        status
    };

    if (status === 'obese') {
        personalInfo.recommendation = 'admission required';
    }

    return personalInfo;
}