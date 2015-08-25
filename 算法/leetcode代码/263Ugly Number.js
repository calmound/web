/**
 * 题意：判断num是不是Ugly NUmber，判断的标准num的分因子只能是2，3，5，并且1是一个特例
 * 思路：依次循坏排除分因子2，3，5;需要注意的是0要特判，不然造成死循环
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
        if(num==0) return false;
        while(num%2==0)  num/=2;
        while(num%3==0)  num/=3;
        while(num%5==0)  num/=5;
        if(num==1) return true;
        return false;
};