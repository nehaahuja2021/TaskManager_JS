var i1,i2,i3,i4,i5,i6;
i1=i2=i3=i4=i5=i6=0;
var arr=[];
for (let j=0;j<5;j++)
{
  let a=Math.floor(Math.random()*6)+1;
  arr.push(a);
}
// generating random numbers & pushing in array arr
for( var i=0;i<arr.length;i++)
{
switch(arr[i])
{
  case 1: 
    i1++;
    break;
  
  case 2: 
    i2++;
    break;
  
  
  case 3: 
  
    i3++;
    break;
  
  case 4: i4++;
    break;
  
  case 5: i5++;
    break;
  
  case 6: i6++;
    break;
default : console.log(" no number found");

}
}

console.log(" no of times 1 appeared  "+i1 );
console.log(" no of times 2 appeared  "+i2 );
console.log(" no of times 3 appeared  "+i3 );
console.log(" no of times 4 appeared  "+i4 );
console.log(" no of times 5 appeared  "+i5 );
console.log(" no of times 6 appeared  "+i6 );
