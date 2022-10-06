//created a function called checkStringAnagram
//created parameters called a & b
function checkStringsAnagram(a, b) {
    //split takes apart the stings
    //sort goes through the letters and compares them
    //join puts the letters back into a string
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    //if you can make string1 & 2 using the same letters it will output true
    //otherwise it will output false
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 } // assigned the values of a & b
 checkStringsAnagram("optimisthall","pickle")
