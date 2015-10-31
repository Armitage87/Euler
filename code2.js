var problem2 = function () {
	var fib1 = 1;
	var fib2 = 1;
	var toteven1 = 0;
	var toteven2 = 0;
	var totevegen = 0;
	var limit2 = document.getElementById('limithtml2');
	
		for (fib1 = 1; fib1 < limit2.value && fib2 < limit2.value; fib1 = fib1 + fib2) {
			fib2 = fib1 + fib2;
			if (fib1 % 2 === 0) {
				toteven1 += fib1;
				if (fib2 % 2 === 0) {
					toteven2 += fib2;
				}
			}
			else if (fib1 % 2 !== 0 && fib2 % 2 === 0) {
				toteven2 += fib2;
			}
		}
		totevegen = toteven1 + toteven2;
		console.log("fiblimit" + limit2);
		console.log("fib1" + toteven1);
		console.log("fib2" + toteven2);
		console.log("fibeven" + totevegen);
		
		document.getElementById('final_res').innerHTML = totevegen;
}