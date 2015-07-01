//输入两个数和运算符，计算结果输出
<!DOCTYPE html>
<html>
 <head>
  <title> 事件</title>  
  <script type="text/javascript">
   function count(){
       
    //获取第一个输入框的值
    var value1=document.getElementById("txt1").value;
	//获取第二个输入框的值
    var value2=document.getElementById("txt2").value;
	//获取选择框的值
    var Selection=document.getElementById("select").value;
	//获取通过下拉框来选择的值来改变加减乘除的运算法则
    var value3="";
    switch(Selection){
        case "+": value3=parseInt(value1)+parseInt(value2);
                   break;
        case "-": value3=parseInt(value1)-parseInt(value2);;
                   break;
        case "*": value3=parseInt(value1)*parseInt(value2);;
                   break;
        case "/": value3=parseInt(value1)/parseInt(value2);
    }
    //设置结果输入框的值 
    document.getElementById("fruit").value=value3;
   }
  </script> 
 </head> 
 <body>
   <input type='text' id='txt1' /> 
   <select id='select'>
		<option value='+'>+</option>
		<option value="-">-</option>
		<option value="*">*</option>
		<option value="/">/</option>
   </select>
   <input type='text' id='txt2' /> 
   <input type='button' value=' = ' onClick="count()"/> <!--通过 = 按钮来调用创建的函数，得到结果--> 
   <input type='text' id='fruit' />   
 </body>
</html>

