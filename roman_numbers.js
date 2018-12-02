const romanToInt = {
	i: 1,
	v: 5,
	x: 10,
	l: 50,
	c: 100,
	d: 500,
	m: 1000
}

const isValid = s => {				
	let minus = 0;
	let minusee = 0;
	let eq = 1;
	let lastNum = 0;
	for (let i = 0; i < s.length; i++) {
		const current = romanToInt[s[i]];
		const next = romanToInt[s[i + 1]];
		if (minus) {
			if (next && minusee.toString().length === next.toString().length) {
				return false;
			}
			eq = 1;
			minus = 0;
			minusee = 0;
			continue;
		}
		if (current == null) {
			return false;
		}
		if (next != null &&  current === next) {
			eq = eq + 1;
			if (eq > 3) {
				return false;
			}						
			minus = 0;
		} else if (next != null &&  current < next) {
			minus = next - current;
			minusee = current;
			const subtraction = next - current;
			if (subtraction !== 4 && 
				subtraction !== 9 && 
				subtraction !== 40 && 
				subtraction !== 90 && 
				subtraction !== 400 && 
				subtraction !== 900 
			) {
				return false;
			}
			eq = 1;
		} else {						
			minus = 0;
			minusee = 0;
			eq = 1;
		}
		if (lastNum && ((minus > lastNum) || (current > lastNum))) {
			return false;
		}
		lastNum = (!minus) ? current : minus;
	}
	return true;
}

// 1  2 3   4  5 6  7   8    9  10
// i ii iii iv v vi vii viii ix x
const toRoman = s => {
	if (!isValid(s)) {
		return 'invalid';
	}
	let result = 0;
	let minus = 0;
	for (let i = 0; i < s.length; i++) {
		const current = romanToInt[s[i]] - minus;
		const next = romanToInt[s[i + 1]];
		minus = 0;
		if (next != null && current > next) {
			result = result + current;
		} else if (next != null &&  current < next) {
			minus = current;
		} else {
			result = result + current;
		}
	}			
	return result;
}