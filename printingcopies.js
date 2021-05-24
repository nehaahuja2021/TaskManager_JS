var n=[6,18,79];
var totalprice;
for(var i=0; i<n.length;i++)
{
if (n[i]<10)
{
totalprice= n[i] * 3;
console.log("total price is : " +totalprice);
}

else if (n[i]<20 && n[i]>=10)
{
  totalprice= n[i] * 2;
  console.log("total price is : " +totalprice);
}
else if (n[i]>=20)
{
totalprice= n[i] * 1;
console.log("total price is : " +totalprice);
}
}

