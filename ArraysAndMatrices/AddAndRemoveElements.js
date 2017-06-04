function addAndRemove(commands) {
    let initialNumber = 1;
    let arr = [];

    for (let command of commands) {
        if (command == 'add') {
            arr.push(initialNumber);
        } else if(command == 'remove' && arr.length > 0)
        {
            arr.pop();
        }

        initialNumber++;
    }

    return arr.length == 0 ? 'Empty' : arr.join('\n');
}

console.log(addAndRemove(['add', 'add','remove', 'add', 'add']));