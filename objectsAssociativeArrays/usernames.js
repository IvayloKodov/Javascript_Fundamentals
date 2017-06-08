function solve(arr) {
    let usernames = new Set();
    arr.map(e => usernames.add(e));

    console.log([...usernames].sort(sortUsernames).join('\n'));

    function sortUsernames(a, b) {
        if (a.length != b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }
}

solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);