const { exit } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

var listtasks = ["Read book", "Buy grocery", "Cook food"];
var StatusArr = ["-","-","-"];

console.log("Welcome to task manager");

function main_prog () {
   console.log("1: View tasks");
   console.log("2: Add task");
   console.log("3: Delete task");
   console.log("4: Mark task");
   console.log("5: EXIT");
   rl.question("Input: ", answer => {
      if (answer == 1) {
         display_tasks();
      }
      if (answer == 2) {
         add_tasks();
      }
      if (answer==3)
      {
         del_tasks();
      }
      if (answer==4)
      {
         mark_donetasks();
      }
      if (answer==5)
      {
         exit();
      }
   });
}

var display_tasks = () => {
   console.log('---Tasks---','     ---Status---')
   var newstr = "";
   for (var i = 0; i < listtasks.length; i++) {
      newstr = listtasks[i].padEnd(20);
      console.log(i+1, newstr + StatusArr[i]);
   }
   console.log(" ");
   main_prog();
}

function add_tasks () {
   
      rl.question('Enter a new task: ', sentence => {
      // var arrlen = listtasks.length;
      // console.log (arrlen);
      listtasks.push(sentence);
      StatusArr.push("-");
      console.log ('Task added');
      display_tasks();
   });
}

function del_tasks () {
   rl.question('Task to remove: ',valuesentbyuser =>
   {
      if (valuesentbyuser > 0) {
         if (valuesentbyuser < listtasks.length) {
         listtasks.splice(valuesentbyuser - 1, 1);
         StatusArr.splice(valuesentbyuser - 1, 1);
      }
   }
      console.log('Task removed')
      display_tasks();
   });
}

function mark_donetasks () {
   rl.question('Task to complete: ',valuesentbyuser =>
   {
      if (valuesentbyuser > 0) {
         if (valuesentbyuser < listtasks.length) {
         StatusArr[valuesentbyuser - 1] = "Done";
      }
   }
      console.log('Task completed')
      display_tasks();
   });
}

main_prog();