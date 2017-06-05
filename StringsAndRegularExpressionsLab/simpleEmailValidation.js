function emailValidation(email) {
    let regex = new RegExp(/^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/);

    return regex.test(email) ? 'Valid' : 'Invalid';
}

console.log(emailValidation('valid@email.bg'));