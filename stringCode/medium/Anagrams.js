/**
 * this code checks if two strings are anagrams
 */

 var str1 = "rail safety"
 var str2 = "fairy tales"
 var test1 = ""
 var test2 = ""

 for (let str1index = 0,str2index = 0; 
            str1index < str1.length,str2index < str2.length; 
                    str1index++,str2index++) {
                        test1 += str1[str1index]
                        test2 += str2[str2index]
 }
 console.log(test1)
 console.log(test2)