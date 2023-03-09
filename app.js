//<**********************************Chapter no 21*******************************>

//Question no 01

// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter Last Name")
// var fullName = firstName + lastName
// alert("Hi, "+ fullName +". How are you" )

//Question no 02

// var mobileName = prompt("Enter your favourite Mobile Name")
// document.write("My favourite Phone Name is: " + mobileName + "</br>" )
// document.write("Lenght of the string is: "+mobileName.length)

//Question no 03

// var string = "Pakistani"
// document.write("String: "+string)
// document.write("</br>Index of 'n' is: " + string.indexOf("n"))

//Question no 04

// var string = "Hello world"
// document.write("String: "+string)
// document.write("</br>Index of 'n' is: " + string.lastIndexOf("l"))

//Question no 05

// var str = "Pakistani"
// document.write("String: "+str)
// document.write("</br>Character at Index 3 is: " + str.charAt(3))

// Question no 06

// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter Last Name")
// alert("Hi, "+ firstName.concat(lastName) +". How are you" )

//Question no 07

// var word = "Hyderabad"
// document.write("City: "+word)
// document.write("</br>After Replacement: " + word.replace("Hyder","Islam"))


//Question no 08

// var message = "Ali and Sam are best friend.They play cricket and football together."
// document.write("Message: " + message)
// document.write("</br>After Replacement: " + message.replaceAll("and","&"))


//Question no 09

// var string = "372"
// var number = Number(string)
// document.write("Value: " + string)
// document.write("</br>Type: " + typeof(string))
// document.write("</br>Value: " + string)
// document.write("</br>Type: " + typeof(number))


//Question no 10

// var input = prompt("Enter any word")
// var result = input.toUpperCase()
// alert(result)


//Question no 11

// var input = "javascript"
// var spl = input.toLowerCase().split(" ");

// for( var i=0;i<spl.length;i++){
//   spl[i]=spl[i][0].toUpperCase() + spl[i].slice(1)
// }
// var join = spl.join(" ")
// console.log(join)


// Question no 12

// var num = 36.36
// var replace = num.toString().replace(".","")
// console.log(replace)


//Question no 14

// var arr = ["cakes", "apple pie", "cookies", "chips", "patties"];

// var userInput = prompt("Enter the name of the Item");

// var match = false;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i].toLowerCase() === userInput.toLowerCase()) {
//  match = true;
//     break;
//   }
// }
// if (match) {
//   console.log(userInput + " is available in the Bakery at index " + i);
// } else {
//   console.log(userInput + " is not available in the Bakery at any index ");
// }

//Question no 15

// var pass = prompt("Enter a valid Password")

// if(pass === )


var password = prompt("Please enter a password that contains alphabets and numbers, is at least 6 characters long, and does not start with a number:");

if (password.length < 6) {
  alert("Password should be at least 6 characters long. Please enter a valid password.");
} else if (!isNaN(password.charAt(0))) {
  alert("Password should not start with a number. Please enter a valid password.");
} else if () {
  alert("Password should contain both alphabets and numbers. Please enter a valid password.");
} else {
  alert("Password is valid.");
}

