for(var x = 1; x < 8; x++)
{
var menuid = document.getElementById("menu"+x);
menuid.num = x;
type();
}
function type()
{
var menuh2 = menuid.getElementsByTagName("h2");
var menuul = menuid.getElementsByTagName("ul");
var menuli = menuul[0].getElementsByTagName("li");
menuh2[0].onmouseover = show;
menuh2[0].onmouseout = unshow;
menuul[0].onmouseover = show;
menuul[0].onmouseout = unshow;
function show()
{
menuul[0].className = "clearfix typeul block"
}
function unshow()
{
menuul[0].className = "typeul"
}
for(var i = 0; i < menuli.length; i++)
 {
 menuli[i].num = i;
 var liul = menuli[i].getElementsByTagName("ul")[0];
  if(liul)
  {
  typeshow()
  }
 }
function typeshow()
{
menuli[i].onmouseover = showul;
menuli[i].onmouseout = unshowul;
}
function showul()
{
menuli[this.num].getElementsByTagName("ul")[0].className = "block";
}
function unshowul()
{
menuli[this.num].getElementsByTagName("ul")[0].className = "";
}
}