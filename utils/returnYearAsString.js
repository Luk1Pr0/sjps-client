export default function createCurrentAndNextYearStrings() {
	// Current year as a string
	const currentYear = new Date().getFullYear().toString();

	// next year as an integer
	const nextYear = parseInt(currentYear) + 1;

	// next year as a formatted string including only last 2 digits of the year
	const nextYearFormatted = nextYear.toString().substring(2, 4);

	return `${currentYear}/${nextYearFormatted}`
}