function personalBMI(name, age, weightKg, heigthCm) {
    function calculateBMI() {
        return weightKg / Math.pow(heightM, 2);
    }

    function defineStatus() {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25) {
            return 'normal';
        } else if (bmi < 30) {
            return 'overweight';
        } else if (bmi > 30) {
            return 'obese';
        }
    }

    let heightM = heigthCm / 100;
    let bmi = calculateBMI();
    let status = defineStatus();

    let profile = {
        name,
        personalInfo: {
            age,
            weight: weightKg,
            height: heigthCm
        },
        BMI: Math.round(bmi),
        status
    };

    if (status === 'obese') {
        profile.recommendation = 'admission required';
    }
    
    return profile;
}