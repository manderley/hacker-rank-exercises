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

    for (var i = 1, j = n-1; i <= n; i++, j--) {
    	var myString = new Array(j+1).join(" ");
    	myString += new Array(i+1).join("#");
    	process.stdout.write("" + myString + "\n");
    }

}
