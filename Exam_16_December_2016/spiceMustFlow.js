function solve([totalAmount]) {
    totalAmount = Number(totalAmount);
    let crewConsuming = 26;
    let mineDroping = 10;

    let days = 0;
    let miningAmount = 0;
    while (totalAmount >= 100) {
        miningAmount += totalAmount;
        totalAmount -= mineDroping;
        days++;
        if (miningAmount >= crewConsuming) {
            miningAmount -= crewConsuming;
        }
    }

    if (miningAmount >= crewConsuming) {
        miningAmount -= crewConsuming;
    }

    console.log(days);
    console.log(miningAmount);
}

solve(['200']);