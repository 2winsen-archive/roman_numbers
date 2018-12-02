const t1 = ((testName) => {
	const target = toRoman('i');
	target === 1 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t1');

const t2 = ((testName) => {
	const target = toRoman('ii');
	target === 2 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t2');

const t3 = ((testName) => {
	const target = toRoman('iii');
	target === 3 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t3');

const t4 = ((testName) => {
	const target = toRoman('iv');
	target === 4 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t4');

const t5 = ((testName) => {
	const target = toRoman('v');
	target === 5 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t5');

const t6 = ((testName) => {
	const target = toRoman('vi');
	target === 6 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t6');

const t7 = ((testName) => {
	const target = toRoman('vii');
	target === 7 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t7');

const t8 = ((testName) => {
	const target = toRoman('viii');
	target === 8 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t8');

const t9 = ((testName) => {
	const target = toRoman('ix');
	target === 9 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t9');

const t10 = ((testName) => {
	const target = toRoman('x');
	target === 10 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t10');

const t11 = ((testName) => {
	const target = toRoman('mcmxcix');
	target === 1999 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);	
})('t11');

const t12 = ((testName) => {
	const target = toRoman('dclxvi');
	target === 666 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t12');

const t13 = ((testName) => {
	const target = toRoman('mmxviii');
	target === 2018 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t13');

const t14 = ((testName) => {
	const target = toRoman('cccxxxiii');
	target === 333 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t14');

const t15 = ((testName) => {
	const target = toRoman('lxxix');
	target === 79 ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t15');

const t16 = ((testName) => {
	const target = toRoman('iix');
	target === 'invalid' ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t16');

const t17 = ((testName) => {
	const target = toRoman('iiii');
	target === 'invalid' ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t17');

const t18 = ((testName) => {
	const target = toRoman('ivx');
	target === 'invalid' ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t18');

const t19 = ((testName) => {
	const target = toRoman('ixi');
	target === 'invalid' ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t19');

const t20 = ((testName) => {
	const target = toRoman('ixv');
	target === 'invalid' ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t20');

const t21 = ((testName) => {
	const target = toRoman('ixx');
	target === 'invalid' ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t21');

const t22 = ((testName) => {
	const target = toRoman('ivix');
	target === 'invalid' ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t22');


const t23 = ((testName) => {
	const target = toRoman('cmd');
	target === 'invalid' ? console.log(testName + ' success') : console.error(testName + ' failed with ' + target);
})('t23');
