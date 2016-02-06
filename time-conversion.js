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
  var time = readLine();

  var am_pm = time.substr(8);
  var time_trimmed = time.substr(0, 8);
  var time_array = time_trimmed.split(":");
  var new_time = time_trimmed;
  var hh = parseInt(time_array[0]);

  if (am_pm === "PM" && hh !== 12) {
  	hh += 12;
  	time_array[0] = hh.toString();
  	new_time = time_array.join(":");
  }

  if (am_pm === "AM" && hh === 12) {
  	time_array[0] = "00";
  	new_time = time_array.join(":");
  }

  process.stdout.write(""+new_time+"\n");
}
