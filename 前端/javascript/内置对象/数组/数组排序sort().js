/*
sort()方法使数组中的元素按照一定的顺序排列。
语法：arrayObject.sort(方法函数[可选])
 function sortNum(a,b) {
  return a - b;
 //升序，如降序，把“a - b”该成“b - a”
}
*/
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Array对象 </title>
<script type="text/javascript">
   function sortNum(a,b) {
        return b-a;
   }
var myarr = new Array("80","16","50","6","100","1");
document.write(myarr.sort(sortNum));
</script>
</head>
<body>
</body>
</html>
/*
运行结果：100,80,50,16,6,1
*/