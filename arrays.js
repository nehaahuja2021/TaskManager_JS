//var x=[-3, 3, 5, 7];
var x=prompt("Enter 5 numbers");
var min = x[0];
for(var i=1; i<x.length; i++)
{
    if (x[i]<min)
    {
    min = x[i];
    }
}
console.log( "Smallest no. is " + min);