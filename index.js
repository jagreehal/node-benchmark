const fs = require('fs');
const process = require('child_process');
const benchmark = require('./src/benchmark');

function async(command, callback) {
    let id = process.exec(command, function (error, stdout, stderr) {
        callback(error, id);
    });
}

var items = [
    'npm run start:ts-node',
    'npm run start:vanilla',
];

function final(results) {
    benchmark((e, r) => {
        console.log(r);
        results.map(x => {
            x.kill();
        })
    })

}

function run(items, final) {
    var results = [];
    items.forEach(function (item) {
        async(item, function (err, result) {
            results.push(result);
            if (results.length == items.length) {
                final(results);
            }
        })
    });
}

run(items, final);