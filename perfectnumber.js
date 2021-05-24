// program to find the factors of an integer

// take input
var num = prompt('Enter a positive number: ');

var count=0;
for(var i = 1; i <= num; i++)
 {

    // check if number is a factor
    if(num % i == 0) {
              
      count=count+i;
    }
 }
      if(count%num==0)
      {
         console.log("its perfect no")
      }
      else
      {
        console.log("its not perfect")
      }
      