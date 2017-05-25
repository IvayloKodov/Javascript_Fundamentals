function compoundInterest(arr) {
    let [principal, interestPercent, period, timespan]=arr;
    let frequency = 12 / period;
    let deposit = principal * Math.pow(1 + (interestPercent / frequency / 100), frequency * timespan);
    console.log(deposit);
}

compoundInterest([100000, 5, 12, 25]);