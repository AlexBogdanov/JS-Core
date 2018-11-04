function personalInfo(name, age, weightKg, heightCm) {
    function calculateBMI(weightKg, heightM) {
        return Math.round(weightKg / Math.pow(heightM, 2));
    }

    function defineStatus(bmi) {
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

    const bmi = calculateBMI(weightKg, heightCm / 100);
    const status = defineStatus(bmi);

    let output = {
        name,
        personalInfo: {
            age,
            weight: weightKg,
            height: heightCm
        },
        BMI: bmi,
        status
    }

    if (status === 'obese') {
        output.recommendation = 'admission required';
    }

    return output;
}

module.exports = personalInfo;