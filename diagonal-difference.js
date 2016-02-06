process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }

    var primary_diagonal = 0;
    var secondary_diagonal = 0;

    for (var i = n - 1, j = 0; i >= 0; i--, j++) {
        secondary_diagonal+=a[i][j];
        primary_diagonal+=a[j][j];
    }

    var difference = Math.abs(primary_diagonal - secondary_diagonal);

    process.stdout.write("" + difference + "\n");

}