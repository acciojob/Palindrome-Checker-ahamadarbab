// complete the given function

function palindrome(str){
	const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

	const revered = cleaned.split("").reverse().join("");

	return revered === cleaned;
}
module.exports = palindrome
