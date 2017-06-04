function solve(arr) {
    let products = arr.filter((p, i) => i % 2 == 0).join(', ');
    let price = arr.filter((p, i) => i % 2 == 1).map(Number).reduce((a, b) => a + b);

    return `You purchased ${products} for a total sum of ${price}`
}

console.log(solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']));
