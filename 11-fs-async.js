// Asynchronous approach
// Blocking

const { readFile, writeFile } = require('fs')

console.log("Start");
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result.txt',
            'The results is ' + first + ', ' + second,
            { flag: 'a' },
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Done with the task');
            }
        )
    })
})

console.log('Starting new one');