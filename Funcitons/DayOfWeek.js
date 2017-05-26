function dayOfWeek(day) {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (!daysOfWeek.includes(day)) {
        return 'error';
    } else {
        return daysOfWeek.indexOf(day) + 1;
    }
}

console.log(dayOfWeek('Monday'));