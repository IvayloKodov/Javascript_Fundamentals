function solve(arr) {
    let usernames = arr.map(a => a.split('@')).map(e => e[0] + '.' + e[1].split('.').map(s => s[0]).join(''));

    return usernames.join(', ');
}

console.log(solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));
