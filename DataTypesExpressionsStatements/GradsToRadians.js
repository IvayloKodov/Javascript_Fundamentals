function gradsToRadians(grad) {
    grad = grad % 400;

    let conversion = grad * 0.9;
    if (grad > 0) {
        console.log(conversion);
    } else {
        console.log(360 + conversion);
    }
}

gradsToRadians(-50);