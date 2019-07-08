void FizzBuzz(n) {
	for (var i = 1; i <= n; i++) {
		if ((i%5 != 0) && (1%3 != 0)) {console.log(i)}
		if (1%3 == 0) {console.log("Fizz")}
		if (1%5 == 0) {console.log("Buzz")}
	}
}

FizzBuzz(100);