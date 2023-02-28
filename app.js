
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



//<********************************* Changing Word with replace and replaceall method *********************>

// var str = "my name is umer aqeel umer"

// console.log(str.replace("umer","aqeel"))


// var str = "my name is umer aqeel umer"

// console.log(str.replaceAll("umer","aqeel"))

















