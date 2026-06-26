// complete the given function

function palindrome(str){
	const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

	const reversed = cleaned.split("").reverse().join("");

	return reversed === cleaned;
}
module.exports = palindrome
