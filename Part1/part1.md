# Part 1a
### var declaration
1. Will print  "values added: 20"
2.  Will print "final result: 20"

### let declaration
3. values added: 20
4. this will give you an error, because "let" can only be accessed within the block.

### const declaration
5. Line 9 will not be printed. Will return an error in line 4because the variable is constant
6. Line 13 will not be printed. Will return an error because the variable is constant

# Part 1b

1. Line 12 will print 3. because it sends in an array of size 3.
2. it will print 150. 300*(1-0.5) = 150 because it takes the most recent value for i.
3. it will print 150. it will take the most recent value of final price.
4. The function will return a new array [50,100,150] as it will be pushing a new value for each index as it goes through the for loop.
5. This will return an error because i is declared with a let declaration, the variable is locally in the for loop.
6. This will return an error because discountedPrice is declared with a let declaration, the variable is locally in the for loop.
7. This will print 150 because the variable is declared in the function.
8. The function will return a new array [50,100,150] as it will be pushing a new value for each index as it goes through the for loop.
9. This will return an error because i is declared with a let declaration, the variable is locally in the for loop.
10. This will print 3 because even if you are declaring a constant variable, you are not changing the value.
11. This will return [50,100,150]. Even if you declare the variable as constant, you are only change the content inside the array not the array itself.

### Data Types
12. 
    - A. student.name
    - B. student['Grad Year']
    - C. student.greeting
    - D. student['Favorite Teacher']
    - E. student.courseLoad[0]

### Basic Operators & Type Conversion
13.  - A. '32', this will turn 2 to a string and concatenate the strings
    - B. 1, this will turn '3' to a math value and 3-2=1
    - C. 3, null will be converted to 0
    - D. 3null, null will be converted to a string and concatenate
    - E. 4, true wil be converted to 1 and add 3
    - F. 0, both false and null will be converted to 0
    - G. 3undefined, undefined will be converted to a string
    - H. NaN, because "3" will be converted to an integer and undefined will be - converted to NaN. 
14.  - A. true, '2' will be converted to an integer and check 2 > 1
    - B. false, '2' and '12' is compared as a string format. '2' has a smaller length of string than '12' meaning it is greater.
    - C. true, '2' will be converted to an integer.
    - D. false, === does not allow conversion which will make this false
    - E. false, true will be coverted to 1 and 1 does not equal 2
    - F. true, 2 will be converted to true and true == true.
15.  == will allow type conversion to check. === doesn't allow type conversion.
16. image
17.  First we run line 13 which calls the function modifyArray and takes the parameters of an array [1,2,3] and the function doSomething. Now we go the the function modifyArray which will create a new empty array 'B'. The for loop will iterate 3 times and everytime we will be accessing the value of the array 'A' and passing it to the callback function which is actually the doSomething function. This will return the input multiplied by 2 and push that new number to array 'B'. Once it exit the loop, the function will return array 'B', returning the result of [2,4,6].
18. image
19.  The output will be 1, 4, 3, 2 because there is a time delay set for when the program prints 2 and 3.