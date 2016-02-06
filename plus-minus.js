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
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var positive_numbers = 0;
    var negative_numbers = 0;
    var zeros = 0;

    for (var i = 0; i < arr.length; i++) {
    	if (arr[i] > 0) {
    		positive_numbers++;
    	}
    	if (arr[i] < 0) {
    		negative_numbers++;
    	}
    	if (arr[i] === 0) {
    		zeros++;
    	}
    }

    positive_fraction = positive_numbers / n;
    negative_fraction = negative_numbers / n;
    zero_fraction = zeros / n;

    process.stdout.write("" + positive_fraction + "\n");
    process.stdout.write("" + negative_fraction + "\n");
    process.stdout.write("" + zero_fraction + "\n");

}
