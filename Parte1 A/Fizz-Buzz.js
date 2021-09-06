
for (let index = 0; index < 100; index++) {
    // const element = array[index];
    let result = ''
    if (index % 2 == 0) {
        result += ' ' + index + ' Fizz';
    }
    if (index % 5 == 0) {
        result += ' ' + index + ' Buzz';
    }
    console.log( result || index )
}
