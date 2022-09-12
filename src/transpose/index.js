/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let result = [];
  for ( let i = 0; i < array[0].length; i++) {
    let col = [];

    for ( let j = 0; j < array.length; j++){
      col.push(array[j][i]);
    };
    result.push(col)
  }
return result;
  
}
	console.log(transpose([[1,2,3,4], [5,6,7,8], [9,10,11,12]]))


module.exports = transpose;
