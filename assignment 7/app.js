//Chap 1//

//task 1//
alert("Welcome to my website!");

//task 2//
alert("Error! Please Enter A Valid Password.");

//task 3//
alert("Welcome to JS Land.. \n Happy Coding! ")

//task 4//
alert("Welcome to JS Land.. ")
alert("Happy Coding!")


//Chap 2//

//task 1//
var username;

//task 2//
var myName = "Syed"+" "+"Rafay"+" "+"Zia"

//task 3//
var message = "Hello"+" "+"World!"
alert(message)

//task 4//
var a = prompt("Your Name:","Name");
alert(a)
var b = prompt("Your age:","age");
alert(b)
var c = prompt("Your course:","course")

//task 5//
var a = "pizza";
for (var i=a.length; i>=0; i--){
    for ( var j =0; j<i; j++ )
    {
        document.write(a[j])
    }
    document.write("<br>")
}

//task 6//
var email = "rafayzia10@gmail.com"
var x = "my"+" "+"email"+" "+"is"+" "+email
alert(x)

//task 7//
var book = "A"+" "+"smarter"+" "+"way"+" "+"to"+" "+"learn"+" "+"javascript"
var x = "I"+" "+"am"+" "+"trying"+" "+"to"+" "+"learn"+" "+"from"+" "+"the"+" "+"book"+" "+book
alert(x)

//task 8//
document.write("yay"+" "+"i"+" "+"can"+" "+"html"+" "+"content"+" "+"through"+" "+"javascript")

//task 9//
var x = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(x)

//Chap 3//

//task 1//
 var age = 19
 var x = "i"+" "+"am"+" "+age+" "+"years"+" "+"old"
 alert(x)

 //task 2//
 function VisitCounter(){

    var visits = GetCookie("counter");
    
    if (!visits) { visits = 1;
    
    document.write("By the way, this is your first time here.");
    
    }
    
    else {
    
    visits = parseInt(visits) + 1;
    
    document.write("I note, you have been here " + visits + " times.");}
    
    setCookie("counter", visits,expdate);}

 //task 3//
 var birthyear = 18
 document.write("my"+" "+"birth"+" "+"year"+" "+"is"+" "+birthyear+"<br>"+"Declared"+" "+"variable"+" "+"is"+" "+"a"+" "+"number")   

 //task 4//
 var x = prompt("Your name:","name")
 var y = prompt("your product","product")
 var z = prompt("quantity of your product","quantity")
 alert(x+" "+"has"+" "+"ordered"+" "+y+" "+"of"+" "+"quantity"+z+"from"+" "+"xyz"+" "+"website")

 //Chap 4//

 //task 1//
 var x ; var y ; var z;

 //task 2//
 var rof ; var sydny95; var pop88 ; var rule$09 ; hi_09;
 var 9op ; var 99 ; var 09pop ; var 1200 ; var 0_09p;

 //task 3//
 document.write("<h1>Rules for naming js</h1>")
 document.write("<br>")
 document.write("variable names can only contain letters,numbers,$ and _. For example $my_1stVariable <br>")
 document.write("Variables must begin with a letter, $ or __. For example $name, _name or name <br>")
 document.write( "Variable names are case sensitive")
document.write("Variable names should not be JS keywords.")


//Chap 5//

//Task 1//
var x = prompt("FIRST NUMBER:")
var y = prompt("SECOND NUMBER:")
var z = x+y
document.write("Sum of"+x+" "+"+"+y+" "+"is"+" "+z)


//task 2//
var x = prompt("FIRST NUMBER:")
var y = prompt("SECOND NUMBER:")
var z = x-y
document.write("Subtraction of"+x+" "+"-"+y+" "+"is"+" "+z)


//task 3//
var x = prompt("FIRST NUMBER:")
var y = prompt("SECOND NUMBER:")
var z = x/y
document.write("Division of"+x+" "+"/"+y+" "+"is"+" "+z)


//task 4//
var x = prompt("FIRST NUMBER:")
var y = prompt("SECOND NUMBER:")
var z = x%y
document.write("Modulus of"+x+" "+"%"+y+" "+"is"+" "+z)


//task 5//
var y = 5
document.write("Value after variable declaration undefined")
document.write("initial value : 5")
document.write("Value after increment is :6")
document.write("Value after addition is : 13")
document.write("Value after decrement: 12")
document.write("The remainder is : 0")

//task 6//
var x = 600 
document.write("Cost of 5 movie tickets is"+" "+x*5)

//task 7//
var x = prompt("Table number:")
for (
    var i = 1; i<=10;i++)
    {
        document.write(x+" "+"x"+" "+i+" "+"="+" "+x*i+"<br>")
    }

//task 8//
var x = prompt("Temprature in Celcius:")
document.write(x+" "+"in farheneit is"+" "+(x*9/5)+32)
var x = prompt("Temprature in Farheneit:")
document.write(x+" "+"in Celcius is"+" "+(x-32)*5/9)


//task 9//
var a = prompt("price of product 1")
document.write("Price of product 1 is"+" "+a+"<br>")
var b = prompt("quantity of product 1")
document.write("Quantity of product 1 is"+" "+b+"<br>")
var c = prompt("price of product 2")
document.write("Price of product 2 is"+" "+a+"<br>")
var d = prompt("quantity of product 2")
document.write("Quantity of product 2 is"+" "+b+"<br>")
document.write("Shipping charges are 100. <br>")
document.write("Total cost is"+" "+a*b+c*d+100)


//task 10//
document.write(<h1>MARKS SHEET</h1>)
var x = prompt("Enter marks total:")
 var y = prompt("Enter obtained marks:")
document.write("Total Marks:"+" "+x)
document.write("Obtained Marks"+" "+y)
document.write("Percentage:"+" "+x/y*100)


//task 11//
document.write("Total pakistani rupees"+" "+10*104.80+28*25)

//task 12//
 var x = prompt("Any number?")
document.write((x+5*2)/2)

//task 13//
 var x = prompt("Enter current year")
 var y = prompt("Enter birth year")
 document.write("your age is"+" "+x-y)

 //task 14//
 document.write(<h1>The Geometrizer</h1>)
 var x = prompt("Enter radius")
 document.write("Circumference of circle is"+" "+2*3.14*x)
 document.write("Area of circle is"+" "+3.14*x**2)

 //task 15//
 document.write(<h1>The Lifetime Supply Calculator</h1>)
 var a = "snackers"
 var b = 19
 var c = 65
 var d = 2
 document.write("you will need"+" "+(65-19)*365*2+" "+"to last forever.")




 //Chap 6-9//

 //task 1//
 document.write(<h1>Arthimetic</h1>)
 var a = prompt("Enter a number")
 document.write("The value of a is"+" "+a)
 document.write("the value of ++a is"+" "+++a)
 document.write("the value of a++ is"+" "+a++)
 document.write("the value of --a is"+" "+--a)
 document.write("the value of a-- is"+" "+a--)

 //task 2//
 var a  = 2 ; b =1
 var result = --a - --b + ++b + b--
 //Answer is one//
 // in first step pre decrement occurs so a becomes 1 and b becomes 0//
 //second step b again becomes 1 and gets subtracted by itself so 1 of a is remainder//

 //task 3//
 var a = prompt("Your name?")
 alert("Welcome Dear,"+" "+a)

 //task 4//
 var x = prompt("Table number:")
 if (x === "undefined"){
for (
    var i = 1; i<=10;i++)
    {
        document.write(5+" "+"x"+" "+i+" "+"="+" "+x*i+"<br>")
    }}
    else ()=>{for (var i = 1; i<=10;i++)
    {
       ( document.write(x+" "+"x"+" "+i+" "+"="+" "+x*i+"<br>"))}}

 //task 5//
 var a = prompt("Enter subject name")      
 var b = prompt("Enter subject name")      
 var c = prompt("Enter subject name") 
 var d = 100
 var e = prompt("Enter obtained marks")     
 var f = prompt("Enter obtained marks")     
 var g = prompt("Enter obtained marks")     




 //Chap 9-11//


 //task 1//
 var city = prompt("Enter city name")

if (city === "karachi"){
    alert("Welcome to the city of lights."
    )
}


//task 2//

var gender = prompt("Enter gender:")
if (gender==="male"){
    alert("Welcome sir")
}
if ( gender==="female"){
    alert("Welcome ma'am")
}

//task 3//
var color = prompt("Enter color of traffic light")
if (color ==="red"){
    alert("Must stop!")
}
if (color ==="yellow"){
    alert("Be ready..")
}
if (color==="green"){
    alert("You can go.")
}



//task 3//
var fuel = prompt("Enter fuel")
if (fuel<0.25){
    alert("low fuel")
}

//task 4//

a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//condition is true

b. var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//Output undefined

c. var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
//only condition 3 is true.

if(c === 14){
alert("condition 4 is true");
}


d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//condition is true

e. if (true){
alert("True");
}

//undefined
if (false){
alert("False");
}
//undefined

f. if("car" < "cat"){
alert("car is smaller than cat");
}
//undefined

//task 5//

var a = prompt("Enter subject 1 marks")
var b = prompt("Enter subject 2 marks")
var c = prompt("Enter subject 3 marks")

var d = (a+b+c)/300*100
if (d>=80){
    document.write("TOTAL MARKS:300 <br>"
    +"OBTAINED MARKS:"+a+b+c+
    "<br> PERCENTAGE:"+d+"<br>REMARKS:EXCELLENT <br> GRADE:A1")
}
if (d>=70 && d<80){
    document.write("TOTAL MARKS:300 <br>"
    +"OBTAINED MARKS:"+a+b+c+
    "<br> PERCENTAGE:"+d+"<br>REMARKS:GOOD <br> GRADE:A")
}
if (d>=60 && d<70){
    document.write("TOTAL MARKS:300 <br>"
    +"OBTAINED MARKS:"+a+b+c+
    "<br> PERCENTAGE:"+d+"<br>REMARKS:YOU NEED TO IMPROVE <br> GRADE:B")
}
if (d>=50 && d<60){
    document.write("TOTAL MARKS:300 <br>"
    +"OBTAINED MARKS:"+a+b+c+
    "<br> PERCENTAGE:"+d+"<br>REMARKS:SORRY <br> GRADE:C")
}


//task 6//

var a = 5
var b = prompt("guess the number")
if (a===b){
    alert("Bingo!")
}
else (){
    alert ("you were close")
}

//task 7//
var a = prompt("Enter number")
if (a%3===0){
    alert("Number is divisible by 3")
}


//task 8//
var a = prompt("Enter number")
if (a%2===0){
    alert("Number is even")
}
if (a%2==!0){
    alert("Number is odd")
}


//task 9//

var a = prompt("Enter temprature")
if (a>40){
    alert("it is hot outside")
}
if (a>30){
    alert("it is normal outside")
}
if (a>20){
    alert("it is cold outside")
}
if (a>10){
    alert("“OMG! Today’s weather is so Cool.")
}


//task 10//
var a = prompt("Enter first number")
var b = prompt("Enter second number")
var c = prompt("Enter operator")
if (c==="+"){
    alert(a+b)
}
if (c==="-")
{
    alert(a-b)
}
if (c==="/"){
    alert(a/b)
}
if (c==="%"){
    alert(a%b)
}
if (c==="*"){
    alert(a*b)
}

//Chap 12-13//

//task 1//

var x = prompt("Enter anything")
if (x.charCodeAt()>=65 && x.charCodeAt()<=90){
    alert("Uppercase letter")

}
if (x.charCodeAt()>=97 && x.charCodeAt()<=122){
    alert("Lowercase letter")

}
if (x.charCodeAt()>=48 && x.charCodeAt()<=57){
    alert("Digit")

}


//task 2//
var x = prompt("Enter a digit")
var y = prompt("Enter another digit")
if (x>y){
    alert("First digit is bigger")}
    if (x<y){
        alert("Second digit is bigger")
    }
    if (x===y){
        alert("Both digits equal")
    }

//task 3//
var x = prompt("Enter number")
if (x<0){
    alert("Number is negative")
}
if (x>0){
    alert("Number is positive")
}
if(x==0){
    alert("Number is zero")
}


//task 4//
var x = ["a","e","i","o","u"]
var y = prompt("Enter a letter")
if (x.includes(y,0)){
    alert("True")
}
else {
    alert("False")
}

//task 5//
var x =prompt("Enter a password")
var y = prompt("Enter password again")
if (x===y){
    alert("Correct pass")
}
else{
    alert("Incorrect")
}


//task 6//
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";}


//task 7//
var x = prompt("Enter time")
if (x>=0000 && x<=1200){
    alert("Good morning")
}
else if (x>=1200 && x<=1700){
    alert("Good afternoon")
}
else if (x>=1700 && x<=2100){
    alert("Good Evening")
}
else if (x>=2100 && x<=2359){
    alert('Good night')
}


//Chap 14-16//


//task 1-6//

var x = []
var y = {}
var z = ["A","b","hi"]
var c = [1,2,3,56]
var d = [c>totalCost,0<9,x>9]
var e = ["a",23,5<9,"hi"]

//task 7//
var  x = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write(<h1>QUALIFICATIONS:</h1>+"<br>"
)
for (var i=0; i<9; i++)
{
    document.write(i+")"+" "+x[i])
    document.write("<br>")
}

//task 8//
var x = ["michael","sam","john"]
var y = [300,400,360]
for ( i=0; i<=x.length;i++){
    document.write(x[i]+" "+"Score"+" "+y[i]+" "+"percentage"+" "+y[i]/500*100+"<br>")
}

//task 9//
var x = ["red","yellow","green"]
var y = prompt("Enter a color")
x.unshift(y)
alert(x)
var y = prompt("Enter a color")
x.push(y)
alert(x)
var y = prompt("Enter a color")
var z = prompt("Enter a color")
x.unshift(y,z)
alert(x)
x.pop
alert(x)
var x = ("Enter color name")
var y = ("Enter how many colors")
x.splice(y,0,x)
alert(x)
var x = ("Enter how many colors")
var y = ("Enter index")
x.splice(y,x)
alert(x)


//task 10//
var x = [100,90,120,200]
x.sort();
alert(x)

//task 11//
var  cities = ["karachi","lahore","lyari","multan"]
var selectedcities = []
cities.slice(0,2)
alert(cities)
alert(selectedcities)


//task 12//
var arr = ["This", "is", " my ", " cat"];
document.write(arr.join(" "))


//task 13//

array = [];
 array.push(1);
 array.push(2);
 array.push(3);
 array.shift();


 //Chap 17-20//

 //task 1//
 var a = [[[]]]

 //task 2//
 var a = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

 //task 3//
 for (i=0;i<11;i++)
 {
     document.write(i,"<br>")
 }

//task 4//
 var x = prompt("Enter number")
 var y = prompt('Enter length')
 {for (var i = 1; i<=y;i++)
    {
       ( document.write(x+" "+"x"+" "+i+" "+"="+" "+x*i+"<br>"))}}

//task 5//
var fruits = ["apple", "banana", "mango", "orange",
    "strawberry"]  
for (i=0;i<=fruits.length,i++)
{document.write
(fruits[i])}


//task 6//
var a = [1,2,3,4,5,6,7,8,9]
document.write("Counting:",a)
document.write("reverse:",a.reverse())
for (i=0;i<=a.length,i++;){
if (a[i]%2===0){
document.write("Even:",a[i])}
else{
    document.write("odd:",a[i])
}}


//task 7//
var a = ["cake", "apple pie", "cookie", "chips","patties"]
var x = prompt("Enter item")
if (a.indexOf(x) in a){
alert(a.indexOf(x),"is available in our bakery")}
else{
    alert("item isnt available.")
}


//task 8//
var a = [24, 53, 78, 91, 12]
document.write(a)
var b = 0
for (i==0,i<=a.length;i++;){
if (b>a[i]){
    b=a[i]
}
}
document.write("largest num",b)

//task 9//
var a = [24, 53, 78, 91, 12]
document.write(a)
var b = 0
for (i==0,i<=a.length;i++;){
if (b<a[i]){
    b=a[i]
}
}
document.write("smallest num",b)


//task 10//
for (i=1,i<=20;i++;){
document.write(5*i," ")
}



//chap 21-25//


//task 1//
var a = prompt('Enter first name')
var b = prompt("Enter last name")
var fullname = a+" "+b
alert("Welcome,"+" "+fullname)


//task 2//
var a = prompt("Enter your mobile phone:")
document.write("My mobile phone is:"+" "+a+"<br>")
document.write("length of string"+" "+a.length)


//task 3//
var a = "pakistani"
document.write("String:"+" "+"Pakistani <br>")
document.write("Index of 'n'"+" "+a.indexOf("n"))

//task 4//
var a = "Hello world"
document.write("String:"+" "+"Hello world <br>")
document.write("Index of last 'l'"+" "+a.lastIndexOf("l"))

//task 5//
var a = "pakistani"
document.write("String:"+" "+"Pakistani <br>")
document.write("CHaracter at index '3'"+" "+a.charAt(3))


//task 6//
var a = prompt('Enter first name')
var b = prompt("Enter last name")
var fullname = ""
fullname = fullname.concat(a," ",b)
alert("Welcome,"+" "+fullname)


//task 7//
var a = "hyderabad"
document.write("String :"+" "+a+"<br>")
document.write("Replaced string :"+" "+a.replace("hyder","islam"))

//task 8//
var message = "Ali and Sami are best friends. They play cricket and football together."
document.write(message.replace(/and/g,"&"))


//task 9//
var a = "472"
document.write("Value:"+" "+a+"<br>Type:"+" "+typeof a)
var a = 472
document.write("Value:"+" "+a+"<br>Type:"+" "+typeof a)


//task 10//
var a = prompt("Enter string:")
alert(a.toUpperCase())

//task 11//
var a = prompt("Enter string:")
alert(a.replace(a[0],a[0].toUpperCase()))

//task 12//
var a = 35.36
document.write("type :"+" "+typeof a+"<br>")
var a = toString(a)
var b = a.split(".",2)
for (i=0,i<=b.length;i++;){
var a = a.concat(toString(i)," ")
}
document.write("type: "+" "+typeof a)

//task 13//

var a = prompt("Enter username")
var b = [33,44,46,64]
for (i=0,i<=a.length;i++;){
    if (b.includes(a.charCodeAt(i,0))===true){
        alert("Enter a proper username.")
        break
}
else{
    continue
    alert("Welcome",a)}


}


//task 14//
var a = ["cake", "apple pie", "cookie", "chips", "patties"]
var b = prompt("Enter an eatable")
var b = b.toLowerCase()
    if (a.includes(b)===true){
        alert("WE HAVE THE PRODUCT")
    }
    
    else{alert("We do not have the product")

    }


 //task 15//
var a = prompt("Enter password")
var b = ["0","1","2","3","4","5","6","7","8","9"]
var c = ["!",",",".","@"]
for (i=0,i<=a.length;i++;)
    if (c.includes(a[i],0)===true){
        alert("Pass cannot contain special characters")
        break   
    }
    else{
     continue       
    }
if (b.includes(a[0],0)===true){
    alert("Do not start pass with number")
    
}
else if (a.length<6){
    alert("Pass must be 6 characters atleast")
}
else{
    alert("Congratulations, pass is updated.")
}



//task 16//

var university = "University of Karachi"
var a = university.split("")
document.write(a.join(" <br> "))


//task 17//
var a = prompt("Enter string")
document.write("last character of string:"+" "+a[-1])

//task 18//
var a = "the quick brown fox jumps over the lazy dog"
var count = 0
count = parseInt(count)
var b = a.split("the")
count = b.length-1
document.write("number of the in string:"+" "+count+b) 



//Chap 26-30//

//task 1//
var a = prompt("Enter a positive integer")
document.write("number:"+" "+a)
document.write("round off value:"+" "+Math.round(a))
document.write("ceil value:"+" "+Math.ceil(a))
document.write("Floor value"+" "+Math.floor(a))


//task 2//
var a = prompt("Enter a negative floating point integer:")
document.write("number:"+" "+a)
document.write("round off value:"+" "+Math.round(a))
document.write("ceil value:"+" "+Math.ceil(a))
document.write("Floor value"+" "+Math.floor(a))


//task 3//
var a = prompt("Enter an integer")
if (parseInt(a)<0){
    document.write("Absolute value is:"+" "+parseInt(a)*(-1))
}
else{
    document.write("absolute number is:"+" "+parseInt(a))
}


//task 4//
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write("Random die throw:"+" "+numberOfStars)


//task 5//
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 2) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write("Random toss throw:"+" "+numberOfStars)


//task 6//
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 100) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write("Random number:"+" "+numberOfStars)


//task 7//
var a = prompt("Enter weight")
var b = a.split("k")
document.write("Weight of user:"+" "+b[0]+"kilograms")

//task 8//
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 10) + 1;
var numberOfStars = Math.floor(improvedNum);
var a = prompt("Enter number from 1-10")
if(parseInt(a)===numberOfStars){
    alert("Congrats! you guessed it right.")
}
else{
    alert("Try again :(")
}

//Chap 31-34//


//task 1//
var rightNow = new Date();
document.write(rightNow)

//task 2//
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var rightNow = new Date();
var month = rightNow.getMonth()
document.write(months[month])

//task 3//
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
document.write(nameOfToday)


//task 4//
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if (nameOfToday==="sat" || "sun"){
    document.write("its funday!")
}

//task 5//
var date = new Date()
var day = date.getUTCDate()
if (day<16){
    document.write("First 15 days of the month")
}
else{
    document.write("Last 15 days of the month")
}


//task 6//
var date = new Date()
var time = date.getTime()
document.write("number of milliseconds:"+" "+time)
document.write("number of minutes:"+" "+time/60000)


//task 7//
var date = new Date()
var hour = date.getHours()
if (hour<12){
    document.write("its AM")
}
else{
    document.write("its PM")
}


//task 8//

var laterdate = new Date("December 31, 2020")
document.write(laterdate)


//task 9//
//task unclear//

//task 10//
var date = new Date()
var time = date.getTime()
var k1 = new Date("January 1, 2015")
var K1 = k1.getTime() 
var sec = (K1-time)/1000
document.write("Seconds passed:",sec)

//task 11//
var date = new Date()
var back = new Date ("June 21, 1920, 15:20:54")
document.write('100 years back:'+back)


//task 12//
var a = prompt("Enter age")
var date = new Date()
var year = date.getUTCFullYear()
var birth = year - parseInt(a)
document.write("Birth year is"+" "+birth)


//task 13//
var date = new Date()
var units = 400
var mon = date.getUTCMonth()
document.write(<h1>K-ELECTRIC BILL</h1>)
document.write("customer name: Rafay Zia")
document.write("Month:"+mon)
document.write("Units this month:"+units)
document.write("Charges per unit:16")
document.write("Late payment surcharge:350")
document.write("Net amount payable within due date:"+units*16)
document.write("Net amount payable after due date:"+units*16+350)


//Chap 35-38//

//task 1//
function time(){
    document.write(new Date())
}

time()

//task 2//
function fullname(){
    var a = prompt("first name")
    var b  = prompt("Last name")
    alert("Hello"+a+" "+b)
}

fullname()


//task 3//
function sum(){
    var a = prompt("first num")
    var b  = prompt("Last num")
    alert(parseInt(a)+parseInt(b))
}

sum()


//task 4//
function calc(){
    var a = prompt("first num")
    var b  = prompt("Last num")
    var c = prompt("Enter operator")
    if (c==="+"){
       alert(parseInt(a)+parseInt(b))
    }
    if (c==="-"){
        alert(parseInt(a)-parseInt(b))
    }
    if (c==="/"){
        alert(parseInt(a)/parseInt(b))
}
   if (c==="%"){
    alert(parseInt(a)%parseInt(b))

   }
}

calc()


//task 5//

function squ(n){
    alert(parseInt(n)*parseInt(n))
}

squ()

//task 6//
function squ(n){
        return (n != 1) ? n * factorial(n - 1) : 1;
      }
squ()

//task 7//
function count(a,b){
   for (i=a,i<=b;i++;) {
       document.write(i)

   }
}

var x = prompt("Enter starting num")
var y = prompt("Enter last num")
count(x,y)


//task 8//
function hyp(x,y){
    function squ(n){
        return n*n;
      }
    
     var   x = squ(x)
     var   y = squ(y)
     var   c = (x+y) 
        alert (Math.sqrt(c));
    

}

hyp(8,9)


//task 9//
function area(a,b){
  return alert("AREA:"+a*c)
}
area(5,7)

var a = prompt("first val")
var b = prompt("second val")
area(a,b)



//task 10//
function pal(x){
    for (i=x.length,i<=0;i--;){
        var a = a+x[i]
    }
    if (a===x){alert("Palindrome")}
else{
    alert("Not palindrome")
}
}

pal("mamoo")


//task 11//
function apl(x){
   var a = x.split(" ")
   var b = ""
   for (i=0,i<=a.length;i++;){
        var b = a[i][0].toUpperCase()+b
     }       
   
  alert(b)
}

apl("hello world baby girl")


//task 12//
function len(x){
    var a = x.split(" ")
    var b = 0
    for (i=0,i<=a.length;i++;){
      var c = a[i].length
      if(c>b){
          b=c

}
else{
    continue
      }
    }
    alert()
}

len("hi boy whats up")


//Chap 38-42//


//task 1//
function PowerOfNumber(b,e){
  
  var i, pow = 1;
 
  for(i=0; i<e; i++){
    pow = pow*b;
  }
 
  return pow;
}
PowerOfNumber(4,2)


//task 2//

function isLeapYear(n) { 
    if( (n % 100 === 0) ? (n % 400 === 0) : (n % 4 === 0) === "true"){
        return("Year is leap year.")
    }
    else{
        return ("Year is not leap year.")

    }
    
}


//task 3//

function S(a,b,c){
    var s = (a+b+c)/2
    return s
}
function a2(a,b,c){
var area = S()(S()-a)(S()-b)(S()-c)
return area
}


//task 4//

function average(a,b,c){
var d = (a+b+c)/3
return d
}
function percentage(a,b,c){
    var d = (a+b+c)/300 * 100
    return d
}
function mainFunction(a,b,c){
    return("Your average and percentage is",percentage(a,b,c),"and",average(a,b,c))
}


//task 5//
function myIndexOf(myString, word) {
    var len = myString.length;
    var wordLen = word.length;
    for(var i = 0; i < len; i++) {
        var j = 0;
        for(j = 0; j < wordLen; j++) {
            if(myString[i+j] != word[j]) {
                break;
            }
        }
        if(j == wordLen) {
            return i;
        }
    }

    return -1;
}


//task 6//

function del(a){
    v = ["a","e","i","o","u"]
    for (i=0 , i<=a.length();i++;){
        if (a[i] in v){
            a.splice(i,1)
        }
        return a
    }
}


//task 7//
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var chars = str.toLowerCase().split("");
    var count = 0;
    
    // Loop over every character
    for(let i = 0; i < chars.length - 1; i++) {
      var char = chars[i];
      var next = chars[i + 1];
      
      // Increase count if both characters are any of the following: aeiou
      if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
        count++
      }
    }
    
    return count;
  }
  
  var found = findOccurrences();
  
  console.log(found);
  

//task 8//


function meter(n){
    var m = n*1000
return m}
function inch(n){
    var m = n*39370.1
return m}
function feet(n){
    var m = n*3280.84
return m}
function centimeters(){
    var m = n*100000
    return m
}




var a = prompt("Enter distance")
console.log(meter(a))
console.log(centimeters(a))
console.log(feet(a))
console.log(inch(a))

//task 9//

function overtime(n){
    if (n>40){
       return( pay = 12*(n-40))
    }
    else{
        return("Not enough hours of overtime.")
    }
}

overtime(45)


//task 10//

function notes(n){
    var h;
    var t;
    var f;
if (n>99){
    h = n/100
    n = n%100
    if (n>49){
        f =n/50
        n = n%50
    }
    if (n>9){
        t = n/10
    }
}

var str = "Your money is"+parseInt(h)+" "+"hundred"+" "+parseInt(t)+" "+"tens"+" "+"and"+" "+parseInt(f)+" "+"fifty"
return str}


notes(160)



//chap 43-48//

//task 1//

<a href="" id="a1" onclick="alert()">hi</a>


//task 2//

<div>
   <img src="download.jfif" alt="" onclick="alert('thank you')">
</div>
<div>
    <img src="download (1).jfif" alt="" onclick="alert('thank you')">
</div>


</div></div>
//task 3//
function deleteRow(){
        document.getElementById('courses').deleteRow(0);
     }
 //task 4//

<img src="download.jfif" alt="" onmousemove="this.src='popp.jfif'" onmouseout="this.src='download.jfif'" >


</img>
//task 5//
    var c = 0;
    function inc() {
        c += 1;
        document.getElementById("clicks").innerHTML = c;
}


//Chap 49-52//

//task 1//

  

function sub(a,b){
    var a,b;
    a = document.getElementById(naam).value
    b = document.getElementById(number).value
  document.write("Number is"+" "+b)
  document.write("Name is"+" "+a)
}


//task 2//

function deleterow1(){
    document.getElementById('courses1').deleteRow();
}
function deleterow2(){
    
    document.getElementById('courses1').deleteRow();

}


//task 3//

var table = document.getElementById('courses1');
                
for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
         //rIndex = this.rowIndex;
         document.getElementById("name").value = this.cells[0].innerHTML;
         document.getElementById("class").value = this.cells[1].innerHTML;
         document.getElementById("address").value = this.cells[2].innerHTML;
    };
}

function deleterow1(){
    document.getElementById('courses2').deleteRow(1);
}
