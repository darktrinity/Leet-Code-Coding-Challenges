/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var str = x.toString().split(""); //Convert int to array of chr;
    var neg = '';
    
    if (str[0] == '-') { 
        neg = str.shift();//removes '-' from value if negative number
        str.reverse(); //Reverse the order of characters;
        str.unshift(neg); //add back the '-'
    } else str.reverse(); //Reverse the order of characters;
    
    str = parseInt(str.join("")); //combine and convert array of chr to int 
    
    return str;
};
