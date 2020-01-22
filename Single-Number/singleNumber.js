/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var temp = 0;
    for (num of nums) {
        temp = temp ^ num;    
    } return temp;
};
