function print(arr) {
    let delimeter = arr.pop();

    return arr.join(delimeter);
}

console.log(print(['One','Two','Three','Four','-']));;