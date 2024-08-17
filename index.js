/**
* Function to convert a given number into words.
* @param {number} num - The number to be converted into words.
* @returns {string} - The word representation of the given number.
*/
function IntToWord(num) {
    if (num < 0) return 'Negative numbers are not supported';

    if (num === 0) return 'Zero';

    // Arrays to hold words for single-digit, double-digit, and below-hundred numbers
    const single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const below_hundred = ['Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    // Recursive function to translate the number into words
    function translate(n) {
        let word = "";
        if (n < 10) {
            word = single_digit[n];
        } else if (n < 20) {
            word = double_digit[n - 10];
        } else if (n < 100) {
            word = below_hundred[Math.floor(n / 10) - 2] + (n % 10 !== 0 ? ' ' + translate(n % 10) : '');
        } else if (n < 1000) {
            word = translate(Math.floor(n / 100)) + ' Hundred' + (n % 100 !== 0 ? ' ' + translate(n % 100) : '');
        } else if (n < 1000000) {
            word = translate(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 !== 0 ? ' ' + translate(n % 1000) : '');
        } else if (n < 1000000000) {
            word = translate(Math.floor(n / 1000000)) + ' Million' + (n % 1000000 !== 0 ? ' ' + translate(n % 1000000) : '');
        } else {
            word = translate(Math.floor(n / 1000000000)) + ' Billion' + (n % 1000000000 !== 0 ? ' ' + translate(n % 1000000000) : '');
        }
        return word;
    }

    // Get the result by translating the given number
    return translate(num).trim() + '.';
}


module.exports = { IntToWord };