let readline = require('readline');

let numTestCases = null;

let testCases = [];
let curTestCase = 0;
let testCaseLines = 0;
let curTestCaseLine = 0;
let isTestCase = false;

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {

    if(numTestCases === null) {
        numTestCases = parseInt(line);
    }
    else if(!isTestCase) {
        testCaseLines = parseInt(line);
        curTestCase++;
        testCases[curTestCase-1] = [];
        isTestCase = true;
    }
    else if(isTestCase) {
        curTestCaseLine++;
        
        testCases[curTestCase-1].push(line.split(' '));
        
        if(curTestCaseLine === testCaseLines) {
            isTestCase = false;
            curTestCaseLine = 0;
        }
    }
    
    if(!isTestCase && curTestCase === numTestCases) {
        runTestCases();
    }
});

let runTestCases = () => {
    for(let i = 1; i <= numTestCases; i++) {
        console.log("Case #" + i + ": " + solve(testCases[i-1]));
    }
}

let solve = (matrix) => {
    // Solve the problem here and log the console.
    return `${k} ${r} ${c}`;
}
