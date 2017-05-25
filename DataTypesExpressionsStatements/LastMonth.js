function lastMonth([day, month, year]) {
    let lastDayOfPreviousMonth = new Date(year, month-1, 0).getDate();
    console.log(lastDayOfPreviousMonth);
}

lastMonth([17, 3, 2002]);