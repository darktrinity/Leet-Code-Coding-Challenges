/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var stripBits = Math.pow(2,num.toString(2).length) -1;
    return ~num & stripBits;
}
