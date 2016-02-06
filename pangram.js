function processData(input) {
  var alph_string = 'abcdefghijklmnopqrstuvwxyz';
  var input_string = _input.replace(/\s+/g, '');
  var input_string_lc = input_string.toLowerCase();

  for (var i = 0; i < alph_string.length; i++) {
  	var letterToCheck = alph_string.charAt(i);
  	var flag = false;
  	for (var j = 0; j < input_string_lc.length; j++) {
  		var letterInMySentence = input_string_lc.charAt(j);
  		if (letterToCheck === letterInMySentence) {
  			flag = true;
  			break;
  		}
  	}
  	
  	if (flag === false) {
  		return "not pangram";
  	}
  }
  return "pangram";
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   process.stdout.write("" + processData(_input) + "\n");
});
