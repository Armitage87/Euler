var primetest = function (primever) {
	var prime = true;
	for (var num_a = 2; num_a < primever; num_a++) {
		if (primever % num_a === 0) {
			prime = false;
		}
	}
	return prime;
};

var problem3 = function () {
	var primenum = 0;
	var input_num1 = document.getElementById('limithtml3');
	var input_num = input_num1.value;
	
	for (var num_b = 2; num_b <= input_num; num_b++) {
		if (input_num % num_b === 0) {
			input_num = input_num/num_b;
			console.log("num_b" + num_b);
			console.log("input_num" + input_num);
			if (primetest(num_b) === true) {
				primenum = num_b;
			}
		}
	}
	console.log("biggest prime: " + primenum);
	
	document.getElementById('final_res').innerHTML = primenum;
};