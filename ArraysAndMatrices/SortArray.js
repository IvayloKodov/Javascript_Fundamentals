function sortArray(input) {

    function sortByLength(a, b) {
        return a.length - b.length || sortByName(a, b);
    }

    function sortByName(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }

    input.sort((a, b) => SortByLength(a, b)).forEach(c => console.log(c));
}

console.log(sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));