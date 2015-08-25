/**
 * 题意：A表示1  B表示2  AA表示27  AB表示28 ------>给你一串字符串输出相应的数字
 * 分析：这个就类似于二进制转十进制，从字符串后面往前遍历，然后pow(26,n)*s[i]
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
        var num = 0;
		for(var i=s.length-1;i>=0;i--)
		{
			num += Math.pow(26,s.length-i-1)*(s.charCodeAt(i)-64);
		}	
		return num;
};