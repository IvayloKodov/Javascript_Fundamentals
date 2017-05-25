function rounding([number, precision]) {
    let result = Number(number).toFixed(precision >= 15 ? 15 : precision);

    //console.log(result.replace(/[0]+$/,''));
    console.log(result / 1);
}

rounding([10.5, 3]);