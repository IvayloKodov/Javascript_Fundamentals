function parseEmployeeData(employees) {
    let regex = /^([A-Z][A-Za-z]*)\s*-\s*([1-9][0-9]*)\s*-\s*([A-Za-z0-9 -]+)$/;
    return employees
        .filter(l => regex.test(l))
        .map(l => regex.exec(l))
        .map(m => `Name: ${m[1]}\nPosition: ${m[3]}\nSalary: ${m[2]}`)
        .join('\n');
}

console.log(parseEmployeeData(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']));
;