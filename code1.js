var problem1 = function() {
	var total1 = 0;
	var total2 = 0;
	
	var limit1 = document.getElementById('limithtml1');
	
	for (var i = 0; i < limit1.value; i = i+ 3) {
		if (i % 5 !== 0) {
			total1 - total1 + i;
		}
	}
for (var i2 = 0; i2 < limit1.value; i2 = i2 + 5) {
	total2 = total2 + i2;
}



var totalgen = total1 + total2;

console.log(limit1);
console.log(total1);
console.log(total2);
console.log("total" + totalgen);

document.getElementById ('final_res').innerHTML = totalgen;

};