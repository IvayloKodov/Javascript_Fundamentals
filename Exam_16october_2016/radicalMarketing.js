function solve(commands) {
    let log = new Map();
    let subscribesCounter = new Map();

    for (let command of commands) {
        let args = command.split('-');

        if (args.length == 1) {
            let person = args[0];
            if (log.has(person)) {
                continue;
            }

            subscribesCounter.set(person, 0);

            log.set(person, []);
        } else {
            let [subscriber, person] = args;
            if (!log.has(person) ||
                !log.has(subscriber) ||
                person == subscriber ||
                log.get(person).hasOwnProperty(subscriber);
            ) {
                continue;
            }

            let count = subscribesCounter.get(subscriber);
            subscribesCounter.set(subscriber, count + 1);
            log.get(person).push(subscriber);
        }
    }

    let [person, subscribers] = [...log].sort(sortPersonsBySubscribers)[0];

    console.log(person);
    [...subscribers].forEach((s, i) => console.log(`${i + 1}. ${s}`));

    function sortPersonsBySubscribers(a, b) {
        if (a[1].length !== b[1].length) {
            return b[1].length - a[1].length;
        } else {
            let aSubscribesCount = subscribesCounter.get(a[0]);
            let bSubscribesCount = subscribesCounter.get(b[0]);

            return bSubscribesCount - aSubscribesCount;
        }
    }
}

solve([
    "A",
    "B",
    "A-B",
    "C",
    "C-B",
    "D",
    "D-B",
    "E",
    "E-B",
    "A-C",
    "D-C",
    "E-C"
]);