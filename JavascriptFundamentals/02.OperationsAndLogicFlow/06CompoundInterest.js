function calculateCompoundInterest(data) {
    let principalSum = data[0];
    let interestRatePercent = data[1];
    let compoudingPeriodOfMonths = data[2];
    let totalTimeSpan = data[3];

    let compoundingTimesPerYear = 12 / compoudingPeriodOfMonths;

    let amount = principalSum * Math.pow((1 + ((interestRatePercent / 100) / compoundingTimesPerYear)), compoundingTimesPerYear * totalTimeSpan);

    console.log(Number(amount.toFixed(2)));
}