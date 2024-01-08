export const formatNumber = (num: number): string => {
	if (num > 1000 && num < 100000) {
		return (num/1000)%2 === 0 ? (num/1000).toString() : (num/1000).toFixed(1) + 'k';
	} else if (num > 99999 && num < 999999) {
		return (num/1000).toFixed(0) + 'k';
	} else if (num > 999999) {
		return (num/1000000) + 'M';
	} else {
		return num.toString();
	}
};