
//<********************************Sorting *********************> 
// var arr = [10,9,8,7,6,5,4,3,2,1]
// for(var i=0;i<arr.lenght;i++){
//     for(var j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[i]){
//             arr[i]=[arr[j],arr[j]=arr[i]][0]
//         }
//     }
// }
// console.log(arr)


//<*************************Smaller Number*************************>

// var number = [24, 53, 78, 91, 12];
// var smallest = number[0];
// for (var i = 0; i < number.length; i++) {
//   if (number[i] < smallest) {
//     smallest = number[i];
//   } 
// }
// alert("Array Items: "+number)
// alert("The smallest number in the array is: " + smallest);


//<********************Greater Number*************************>

// var number = [24, 53, 78, 91, 12];
// var largest = number[0];

// for (var i = 0; i < number.length; i++) {
//   if (number[i] > largest) {
//     largest = number[i];
//   }
// }
// alert("Array Items: "+number)
// alert("The largest number in the array is: " + largest);

//<**********************Missing Number*************************>

// var numbers = [25,26,27,28,29,31,32,33,34,35];
// var missingNumber = numbers[0] - 1;
// for (let i = 0; i < numbers.length; i++) 
//   if (numbers[i] - missingNumber > 1) {
//     missingNumber += 1;
//     break;
//   }
//    else {
//     missingNumber = numbers[i];
//   }


// console.log("Missing number is:", missingNumber);


// var arr = [21,22,23,25,26,27,28,29,30]
// var index = 0
// for (var i=arr[0];i<arr[arr.lenght-1];i++){  
//     // if(i !== arr[index]){
//     //     console.log(i)
//     // }

// console.log(index)
 
// }


//<***********************Finding letter or Number***************************************>

// var str = "hgud0898yhr8yf98";


// for (var i = 0; i < str.length; i++) {
//   var charCode = str.charCodeAt(i);

 
//   if (charCode >= 97 && charCode <= 112) {
//     console.log("The variable contains the letter"+ str[i]);
//   }
 
//   else {
//     console.log("The variable contains the number"+ str[i]);
//   }
// }


//<*************************** Capitilize first word*************************>

// var str = "umer"

// var capital = str[0].toUpperCase()

// var result= capital+str.slice(1)
// console.log(result)


//<************************** Capitilize first letter for many words ****************>

// var word = prompt("Enter any word")

// var wordsplit = word.split(" ");
// var arr = []
// for(var i=0 ; i < wordsplit.length; i++){
//     var result = wordsplit[i][0].toUpperCase() + wordsplit[i].slice(1)
//     arr.push(result)
// }
// console.log(arr.join(" "))

//<**************************** Changing word with another word********************>

// var str = "my name is umer khan umer"

// for(var i=0;i<str.length;i++){
//     if(str.slice(i,i+4) === "umer"){
//   str= str.slice(0,i) + "aqeel" + str.slice(i+4)
    
// }

// }
// console.log(str)



//<********************************* Changing Word with replace and replaceall method *********************>

// var str = "my name is umer aqeel umer"

// console.log(str.replace("umer","aqeel"))


// var str = "my name is umer aqeel umer"

// console.log(str.replaceAll("umer","aqeel"))



//<**********************************Generate a program in wvahich head and tail show randomly*******************************>

// var player1 = prompt("Enter Player 1 Name:");
// var player2 = prompt("Enter Player 2 Name:");
// var coinSides = ["Heads", "Tails"];
// var coinSide = coinSides[Math.ceil(Math.random() * 1)];
// const player1Choice = prompt( player1 + ", choose Heads or Tails:");

// if (player1Choice.toLowerCase() === coinSide.toLowerCase()) {
//   alert( player1 + " wins! The coin landed on " + coinSide);
// } else {
//   alert( player2 + " wins! The coin landed on " + coinSide);
// }




//<*************************************Generate a program in which dice number show randomly**************************>

// var dice = Math.ceil(Math.random() * 6)
// console.log(dice)


//<*************************************Generate 10 digit Random Password***************************************>

  // // var user = prompt("Enter your email")
  // var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  // var password = "";
  // for (let i = 0; i <=10; i++) {
  //     password += char[(Math.floor(Math.random() * char.length))]; 
  // }
  // alert("Your unique Password is : " + password );


//<********************************************Generate 10 digit password only one loop ********************************>


//   var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';"
//   var password = "";

//   for (var i = 0; i <10; i++) {
//     var char1 = char[Math.floor(Math.random() * char.length)];
//     if (i < 3) {
//       char1 = char[Math.floor(Math.random() * 26)];
//     } else if (i < 6) {
//       char1 = char[Math.floor(Math.random() * 26) + 26];
//     } else if (i < 9) {
//       char1 = char[Math.floor(Math.random() * 10) + 52];
//     } else {
//       char1 = char[Math.floor(Math.random() * 14) + 62];
//     }
//     password += char1;
//   }
// console.log(password);

// seperate date time etc 

// var today = new Date();
// var str = today.toString()
// console.log(str)
// var day = "Date: " + str.slice(0,3) + "\n" + "Month: " + str.slice(4,8) + "\n" + "Date: " + str.slice(8,10) + "\n" + "Year: " + str.slice(11,15) + "\n" + "Time: " + str.slice(16,24) + "\n" + "Time Zone: " + str.slice(24,33) + "\n" + "Standard Name: " + str.slice(33)
// console.log(day)


// Calculate Age
// var birthyear = prompt("Enter your Birth age")
// var today = new Date();
// var currentyear = today.getFullYear()
// var calculate = currentyear - birthyear
// alert("Your age is: " + calculate) 

// Calculate Whole Age 

// var birthday = prompt("Enter your birth","11 sep 2004")
// var today = new Date();
// var birthDayDate = new Date(birthday);
// var diff = today.getTime() - birthDayDate.getTime();
//  diff/ (1000 * 60 * 60 * 24 * 30 * 12)

// var years = diff/ (1000 * 60 * 60 * 24 * 30 * 12)
// var month = diff/ (1000 * 60 * 60 * 24 * 30 )
// var hours = diff/ (1000 * 60 * 60  )
// var time = diff/ (1000 * 60 )

// console.log("You are " + Math.floor(years) + " years old " + Math.floor(month) + " months old " + hours + " hours old " + time + " seconds old"  )







