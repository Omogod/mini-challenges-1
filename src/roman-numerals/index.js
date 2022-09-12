/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */


function value(r) {
    if (r == 'I')
        return 1;
    if (r == 'V')
        return 5;
    if (r == 'X')
        return 10;
    if (r == 'L')
        return 50;
    if (r == 'C')
        return 100;
    if (r == 'D')
        return 500;
    if (r == 'M')
        return 1000;

}

function romanToDecimal(str)
{


    let result = 0;

    for (let i = 0; i < str.length; i++)
    {
    

        let val1 = value(str[i]);

        if (i + 1 < str.length) {
            let val2 = value(str[i + 1]);

            if (val1 >= val2) {

                result += val1;
            }
            else
            {
            
                result += val2 - val1;
                i++;
            }
        } else {
            result += val1;
        }
    }

    return result;
}

console.log(romanToDecimal('MMCDXLIII'))
module.exports = romanToDecimal;
