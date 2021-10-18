1. "3" will be printed to the console at line 12 because the size of the array is 3 and i is incremented up to 3 before it exits the loop.
2. "150" will be printed to the console at line 13 because the last discountedPrice that is calculated is on 300 with a discount of 0.5 or 50%. discountedPrice is calculated by taking 300 and multiplying it by (1-0.5), which would be 150, and thus the discountedPrice.
3. "150" will be printed to the console at line 14 because finalPrice is calculated with a discountedPrice of 150, and it takes this value of 150 and multiplies it by 100 and rounds it, which ends up being 15000. It then divides this value by 100, which would be 150, and thus the finalPrice.
4. This function will return an array of all the discountedPrices, which in this case would be [50, 100, 150]. This is because the finalPrice after the discount is pushed to the array, and every time an element is pushed it is added to the end of the array.
5. An error will occur because "i" is only defined within the scope of the for loop, and the console.log(i) call is outside of that scope.
6. An error will occur because "discountedPrice" is only defined within the scope of the for loop, and the console.log(discountedPrice) call is outside of that scope.
7. "150" will be printed to the console at line 14 because finalPrice is calculated with a discountedPrice of 150, and it takes this value of 150 and multiplies it by 100 and rounds it, which ends up being 15000. It then divides this value by 100, which would be 150, and thus the finalPrice. It is also declared within the scope of the function, and the console.log(finalPrice) call is called within this scope.
8. This function will return an array of all the discountedPrices, which in this case would be [50, 100, 150]. This is because the finalPrice after the discount is pushed to the array, and every time an element is pushed it is added to the end of the array.
9. An error will occur because "i" is only defined within the scope of the for loop, and the console.log(i) call is outside of that scope.
10. "3" will be printed to the console because "length" is a constant and is assigned to the value of prices.length, which is 3 in this instance.
11. This function will return an array of all the discountedPrices, which in this case would be [50, 100, 150]. This is because the discountedPrice is pushed to the array, and every time an element is pushed it is added to the end of the array.
12A. student.name
12B. student['Grad Year']
12C. student.greeting();
12D. student['Favorite Teacher'].name
12E. student.courseLoad[0]
13A. '32' - String Conversion
13B. 1 - Numeric Conversion
13C. 3 - null has a value of 0; Numeric Conversion
13D. '3null' - String Conversion
13E. 4 - true is value of 1 for numeric conversion
13F. 0 - false has a value of 0 and null has a value of 0; Numeric Conversion
13G. '3undefined' - String conversion
13H. NaN - conversion failed
14A. true - '2' becomes a number
14B. false - when comparing strings, '2' comes after '1'
14C. true - '2' becomes a number
14D. false - '2' is not converted and thus '2' and 2 are not equal.
14E. false - true is converted to 1 and 1 is not equal to 2.
14F. true - Boolean(2) yields true, and true === true.
15. === checks equality without type conversion, whereas == does.
17. The result will be the array [2, 4, 6]. This is because in line 4, callback(array[i]) refers to doSomething, which will return array[i] * 2. This element is pushed to newArr, and newArr is returned.
19. 1
    4
    3
    2

