// CHAPTER # 01


// TASK 01:
alert("Welcome to my website!");

// TASK 02:
alert("Error! Please enter a valid password.");

// TASK 03:
alert("Welcome to JS land...\nHappy Coding!");

// TASK 04:
alert("Welcome to JS land.");
alert("Happy Coding!\nPrevent this page fromadditional dialogs"); //*************************************

// TASK 05:

console.log("Hello... I can run js through my web browser's console.");
alert("Hello... I can run js through my web browser's console.");

// TASK 06:
// html




//  CHAPTER # 02


// TASK 01:
var username;

// TASK 02:
var myName="Lihaz Ali Shah";

// TASK 03:
var massage="Hollo world!";
alert(massage);

// TASK 04:
var studentName="lihaz Ali Shah";
var studentAge="18 years old";
var certificate="Certified Mobile Application Developnmnet";
alert(studentName);
alert(studentAge);
alert(certificate);


// TASK 05:
alert("          PIZZA\n          PIZZ\n          PIZ\n          PI\n          P");


// TASK 06:
var Email="lihazalishah@gmail.com";
alert("My Email address is " + Email);

// TASK 07:
var BOOOK="“A smarter way to learn JavaScript”.";
alert("I'm trying to learn from the book " + BOOOK);

// TAST 08;
document.write("Yah! i can write HTML contant through javascript");


// TAST 08;

alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");


// CHAPTER # 03

// TAST 01;

var age=18;
alert("i'm" + " "+ age +" " +" year old");

// TAST 02;//*********************************


// TAST 03;
var birthYear="2001";
document.write("My birth year is " +birthYear + "</br>");
document.write("Data type of my declear variable is number");

// TAST 04;
var site="Diamond Super Market";
var userName=prompt("enter your name");
var products=prompt("enter your products");
var quality=prompt("how many "+ products +" you went!");
document.write(" "+ userName + "  Orderd  "+ quality +" "+ products + " on " + site + " ");


// CHAPTER # 04

// TAST 01;
var a=10,b=20,c=30;
alert(a);
alert(b);
alert(c);

// TAST 02;
// legal variable
var $_="lihaz";_$="something";var Cost = 100;
// illegal Variable
var student_name="lihaz"; name1 ="lihaz";

// TAST 03;
// heading in index.html


// CHAPTER # 05

// TAST 01;
var number1=+prompt("Enter 1st number");
var number2=+prompt("Enter 2nd number");
var Sum = number1 + number2;
document.write("Sum of " + number1 + " and " + number2 +" "+ " is " + Sum );

// TAST 02;
var number1=+prompt("Enter 1st number");
var number2=+prompt("Enter 2nd number");
var Subtract = number1 - number2;
document.write("Subtraction of " + number1 + " and " + number2 +" "+ " is " + Subtract );

var number1=+prompt("Enter 1st number");
var number2=+prompt("Enter 2nd number");
var Multiplication = number1 * number2;
document.write("multiplication of " + number1 + " and " + number2 +" "+ " is " + Multiplication );

var number1=+prompt("Enter 1st number");
var number2=+prompt("Enter 2nd number");
var Division = number1 / number2;
document.write("Division of " + number1 + " and " + number2 +" "+ " is " + Division );

var number1=+prompt("Enter 1st number");
var number2=+prompt("Enter 2nd number");
var mode = number1 % number2;
document.write("Mode of " + number1 + " and " + number2 +" "+ " is " + mode );

// TAST 03;
var number;
document.write("value after variable decleration is:  "+number + "</br>");
number=5;
document.write("initial value : " + number +"</br>");
number=++number;
document.write("Value after increment is :" + number + "</br>");
number= number+7;
document.write("Value after addition is :" + number + "</br>") ;
number=--number;
document.write("Value after decrement is :" + number + "</br>") ;
var remender=number%3;
document.write("The remender is :" + remender + "</br>") ;

// TAST 04;
var ticketPrice = 600;
var totalTicket= 5;
var output= totalTicket*ticketPrice;
document.write("Total cost to buy  "+ " " + totalTicket + "  ticket to a movie is  "+ output +" PKR" );

// TAST 05;
var number=+ prompt("enter number");
document.write("Table of "+" "+number +"</br>");
for(var i=1; i<=10 ;i++){
document.write(" "+ number + " X " + i + " = " + number*i + "</br>");
}

// TAST 06;
var flag =+prompt("convert C into F enter 1 \nconvert F into  C enter 2")
if(flag === 1){
var temp_in_centigrade    =  +prompt("Enter tempreature in centigrade");
var temp_in_ferhit = (temp_in_centigrade * ( 9 / 5 ) ) + 32;
document.write(" "+ temp_in_centigrade +" C "+ " is "+ temp_in_ferhit +" F </br>"); 
}
else if(flag === 2) {
var temp_in_ferhit      =  +prompt("Enter tempreature in ferhit");
var  temp_in_centigrade  = ( temp_in_ferhit - 32) * 9 / 5;
document.write(" "+ temp_in_ferhit +" F "+ " is "+ temp_in_centigrade +" C"); 
}else{
    alert("Enter correct choice!");
}

// TAST 07;
// in html

// TAST 08;
// in html

// TAST 09;
// in html

// TAST 10;
var number = +prompt("enter a number");
var output = [(number+5)*10]/2;
var add =number+5;
var multiply= add*10;
var divide= multiply/2;
document.write("you entered :"+ number +"</br> add 5 number becomes " + add +" and multiply by 10 number becomes "+ multiply +" and then devided by 2 number become "+divide+" </br>");
document.write("Answer is :"+ output);

// TAST 11;
// in html

// TAST 12;
// in html

// CHAPTER # 06

// TAST 1;

var number =+prompt("Enter a number");
document.write("Result : "+" </br>");
document.write("The value of number is :" +" "+ number +" </br>");
document.write("</br> </br> -------------------------------- </br>");

var pre_Increment=++number;
document.write("</br> </br> The value of ++number is :" +pre_Increment+" </br>");
document.write("Now the value of number is :" +pre_Increment+" </br>");

var increment=number+1;
document.write("</br> </br> The value of number++ is :" +number+" </br>");
document.write("Now the value of number is :" +increment+" </br>");

var pre_Decrement=--increment;
document.write("</br> </br> The value of --number is :" +pre_Decrement+" </br>");
document.write("Now the value of number is :" +pre_Decrement+" </br>");

var Decrement=pre_Decrement-1;
document.write("</br> </br> The value of number-- is :" +number+" </br>");
document.write("Now the value of number is :" +Decrement+" </br>");



// TAST 2;

var a=2,b=1;

document.write("a is : "+a+" </br>");
document.write("b is : "+b+" </br>");
var a_pre_Decrement=--a;
var b_pre_Decrement=--b;
var b_pre_Increment=++b;
var b_pos_Decrement=b--;
document.write("</br></br> --a is : "+a_pre_Decrement+" </br>");
var result1=a_pre_Decrement - b_pre_Decrement;
document.write("--a - --b is : "+result1 +" </br>");
var result2=result1 + b_pre_Increment;
document.write("--a -- --b + ++b is : "+ result2 + " </br>");
var result=result2 + b_pos_Decrement;

document.write(" RESULT is : "+result);

// TAST 3;
var name=prompt("enter your name");
alert("your name is " + name + " !!");

// TAST 4;
// task 04 is missing in assignment book;


// TAST 5;

var number=+ prompt("enter number");
if(number>=1 ){
     document.write("Table of "+" "+number +"</br></br>");
     for(var i=1; i<=10 ;i++)
     {
        document.write(" "+ number + " X " + i + " = " + number*i + "</br>");
      }
}
else{
    document.write(" Default printing Table of 5 </br></br>");
    for(var i=1; i<=10 ;i++)
    {
       document.write(" 5  X " + i + " = " + 5*i + "</br>");
     }
}

// TAST 6;

var subject_1_name=prompt("Enter 1st subject name");
var subject_2_name=prompt("Enter 2nd subject name");
var subject_3_name=prompt("Enter 3rd subject name");

var subject_1_mark=+prompt("Enter your "+ subject_1_name +" marks </br>");
var subject_2_mark=+prompt("Enter your "+ subject_2_name +" marks </br>");
var subject_3_mark=+prompt("Enter your "+ subject_3_name +" marks </br>");

var subject_1_percentage=subject_1_mark/100 *100;
var subject_2_percentage=subject_2_mark/100 *100;
var subject_3_percentage=subject_3_mark/100 *100;

var totalMarks=300;
var total_ObtainMarks= subject_2_mark + subject_2_mark +subject_3_mark;
var percentage= total_ObtainMarks/totalMarks * 100;

document.write("------ Subject --- "+""+" --- Total Marks --- "+" "+" "+" "+" --- Obtained Marks --- "+" "+" "+" "+" --- Percentage --- </br></br> ");
document.write(" -------- " + subject_1_name+" -------- "+" ------- 100 ------- "+" ------- "+subject_1_mark+" ------- "+" "+" ------- "+subject_1_percentage+" % </br>");
document.write(" -------- "+ subject_2_name+" -------- "+" ------- 100 ------- "+" ------- "+subject_2_mark+" ------- "+" "+" ------- "+subject_2_percentage+" % </br>");
document.write(" -------- "+ subject_3_name+" -------- "+" ------- 100 ------- "+" ------- "+subject_3_mark+" ------- "+" "+" ------- "+subject_3_percentage+" % </br>");
document.write(" ------------------------------------ "+ totalMarks +" ---------- "+total_ObtainMarks+" ----------- "+percentage+" %");



// CHAPTER 09 10;

// Task 1;
var CityName=prompt("Enter city name");
if(CityName==='karachi' || CityName==='KARACHI'){
    alert("Welcome to City of lights !! ");
}else if(CityName==='Lahore' || CityName==='lahore' || CityName==='LAHORE'){
    alert("welcome to lahore..\n lahore is one of the beautiful city of our country Pakistan.");
}
else if(CityName==='islamabad' || CityName==='Islamabad' || CityName==='ISLAMABAD'){
    alert("welcome to Islamabad..\n Islamabad is one of the beautiful city of our country Pakistan.");
}else{
    alert("welcome to "+ CityName +" !!");
}


// Task 2;
var gender=prompt("Enter gender");

if(gender==="male" || gender==="Male" || gender=== "MALE"){
    alert("Good Morning sir!!");
}
else if(gender==="female" || gender==="Female" || gender==="FEMALE"){
    alert("Good Morning Ma'am")
}
else{
    alert("please enter correct option!!");
}

// Task 3;

var color=prompt("Enter Signal color");
if(color==="red" || color==="Red" || color==="RED"){
    alert("Must Stop !!");
}else if(color==="yellow" || color==="Yellow" || color==="YELLOW"){
    alert("Ready to move !!");
}else if(color==="green" || color==="Green" || color==="GREEN"){
    alert("Move now!!");
}else{
    alert("Please enter signal color.");
}

// Task 4;

var fuel_OF_car=prompt("Enter remaining Fuel of car in liters");

if(fuel_OF_car<"0.25 liters" || fuel_OF_car<"0.25"){
    alert("Please refill the fuel in your car");
}else{
    alert("Thank you for coperate!!");
}

// Task 5;

// a)
var a = 4;
 if (++a === 5){ alert("given condition for variable a is true"); } // alert massege is running

// b)
var b = 82;
 if (b++ === 83){ alert("given condition for variable b is true"); } // not running condition false

// c)
var c = 12;
 if (c++ === 13){
      alert("condition 1 is true"); } // not running
  if (c === 13){
       alert("condition 2 is true"); } // condition 2 is true
   if (++c < 14){
        alert("condition 3 is true"); } // not running
 if(c === 14){
      alert("condition 4 is true"); } // condition 4 is true

// d)
 var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){  // condition running (true)
     alert("The cost equals"); 
    }

// e)
if (true){ alert("True"); }  // running
if (false){ alert("False"); } // not running

// f)
if("car" < "cat"){ alert("car is smaller than cat"); } //running

// Task 6;
// html

// Task 7;

var number=6;
var guessNumber=+prompt("Guess the number..\n [Hint: number is in between 1-10]");

if(guessNumber===6){
    alert("Bingo! Correct answer");
}else if(guessNumber===5 || guessNumber===7){
    alert("Close enough to the correct answer.");
}else if(guessNumber===1 || guessNumber===2 || guessNumber===3 || guessNumber===4 || guessNumber===8 || guessNumber===9 || guessNumber===10) {
    alert("Wrong!!! better Luck next time .");
}else{
    alert("enter number or enter number between range");
}


// Task 8;

var number=+prompt("Enter a number");
if(number%3==0){
    alert("Number is divisible by 3");
}
else{
    alert("Number is not divisible by 3");
}

// Task 9;

 var number=+prompt("Enter a number");
 if(number%2==0){
     alert(" "+ number +" is Even number ");

 }else {
     alert(" "+number +" is odd number ");
 }


// Task 10;

 var Temperature=+prompt("Enter temperature");
 if(Temperature>40){
     alert("It is too hot outside.");
 }else if(Temperature>30){
    alert("The Weather today is Normal.”");
}else if(Temperature>20){
    alert("Today’s Weather is cool.”");
}else if(Temperature>10){
    alert("OMG! Today’s weather is so Cool.”");
}

// Task 11;


var number1=+prompt("enter 1st number");
var number2=+prompt("enter 2nd number");
var sign=prompt("enter sign");

document.write("1st number : "+ number1 +" </br>");
document.write("2nd number : "+ number2 +" </br>");
document.write("Sign is : "+ sign +" </br>");
if(sign==='+'){
    var result=number1 + number2;
    document.write("Result :  "+ number1 +" "+ sign +" "+number2 +" = "+ result);

}else if(sign==='-'){
    var result=number1 - number2;
    document.write("Result : "+ number1 +" "+ sign +" "+number2 +" = "+ result);

}else if(sign==='*'){
    var result=number1 * number2;
    document.write("Result :  "+ number1 +" "+ sign +" "+number2 +" = "+ result);

}else if(sign==='/'){
    var result=number1 / number2;
    document.write("Result :  "+ number1 +" "+ sign +" "+number2 +" = "+ result);

}else if(sign==='%'){
    var result=number1 % number2;
    document.write("Result :  "+ number1 +" "+ sign +" "+number2 +" = "+ result);

}


// Chapter 12 13;

// Task 1;

var character = prompt("Enter chharacter");
var input=character.charCodeAt(character);
 if(input >=65 && input <=90){
     alert(character+" is Upper case letter");
 }
 if(input >=97 && input <=122){
    alert(character+" is lower case letter");
}
else{
    alert(character+" is number");
}

// Tast 2;
var num_1= prompt("Enter 1st number");
var num_2= prompt("Enter 2nd number");
if(num_1 > num_2){
    alert(num_1+" is greater");
}
if(num_2 > num_1){
    alert(num_2+" is greater");
}
if(num_1 === num_2){
    alert("Both number are equal");
}

// Task 3;

var num_1= prompt("Enter a number");

if(num_1 > 1){
    alert(num_1+" is positive");
}
if(num_1 <= -1){
    alert(num_1+" is negative");
}
if(num_1 == 0){
    alert("number is 0");
}

// Task 4;

var character= prompt("Enter a character");

if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' ||character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U'){
    alert("true");
}
else{
    alert("False");
}

// Task 5;

var My_password="lihaz123";
var pASSword=prompt("Enter password");
if(pASSword === My_password){
    alert("Correct! The password you entered matches the original password.");
}
else if(pASSword == ""){
    alert("Please enter your password.");
}
else
if(pASSword != My_password){
    alert("Incorrect password");
}

// Task 6;

var hour=13;
if(hour < 18){
    alert("Good day")
}else{
    alert("Good evening");
}

// Task 7;

var time=+prompt("Enter time.\nclock format like: 1900 = 7pm.");

if(time >= 0000 && time < 1200){
  alert("Good Morning!");
}else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!");
  }else if(time >= 1700 && time < 2100){
    alert("Good Evening!");
  }else if(time >= 2100 && time<2359){
    alert("Good night!");
  }




// Chapter 14-16;
// Assignment 13-15;



// Task 1;

var student_Name=[];

// Task 2;

var student_Name= new Array();

// Task 3;

var student_Name=["lihaz", "ali", "shah"];

// Task 4;

var student_Roll_num=["1","2","3","4"];

// Task 5;

var boolean_Array=[true,false];

// Task 6;

var student_Name_0r_rollnum=["lihaz",1234,"Ali",6789,true];

// Task 7;
// html

// Task 8;

var student_Name= [];                  //array initialize for name
var student_Score=[];                 //array initialize for score
var percentage=[];                   //array initialize for percentage calculation
var size = 3; //Maximum Array size
var totalMarks=500;

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	student_Name[i] = prompt('Enter Name ' + (i+1));
	student_Score[i] = prompt('Enter Score ' + (i+1));
}
for(var k=0; k<size; k++){
   percentage[k]=student_Score[k]/totalMarks *100;
}
//Print the array in the console.
for(var j=0; j<size; j++){
document.write("Score of "+student_Name[j]+" is "+student_Score[j]+". percentage :"+percentage[j]+"% </br>");
}

// Task 9;

var color=["Red","Blue","Green"];
document.write("initial array </br>");
console.log("initial array \n");
for(var i=0;i<color.length;i++){
console.log(color[i]);
document.write("</br>"+color[i]+" </br>");
}


var add_Start=prompt("enter color to add at start");
color.unshift(add_Start); //adding color at start
document.write("After adding a color at start</br>");
console.log("After adding a color at start\n");
for(var i=0;i<color.length;i++){
    console.log(color[i]);
    document.write(" </br>"+color[i]+"  </br>");
    }

    var add_end=prompt("enter color to add at end");
color.push(add_end); //adding colorat end
document.write("After adding a color at end</br>");
console.log("After adding a color at end\n");
for(var i=0;i<color.length;i++){
    console.log(color[i]);
    document.write(" </br>"+color[i]+"  </br>");
    }

    var add_Start1=prompt("enter one color to add at start");
    var add_Start2=prompt("enter another color to add at start");
color.unshift(add_Start1); //adding two color at start add1
color.unshift(add_Start2); //adding two color at start add2
document.write("After adding two color at start</br>");
console.log("After adding two color at start\n");
for(var i=0;i<color.length;i++){
    console.log(color[i]);
    document.write(" </br>"+color[i]+"  </br>");
    }

    var delete_Start=prompt("press enter or ok for delete first color");
    color.shift(delete_Start); //delete color at start
    document.write("After deleted a color at start</br>");
    console.log("After deleted a color at start\n");
    for(var i=0;i<color.length;i++){
        console.log(color[i]);
        document.write(" </br>"+color[i]+"  </br>");
        }

        var delete_last=prompt("press enter or ok for delete last color");
    color.pop(delete_last); //delete color at start
    document.write("After deleted a color at end</br>");
    console.log("After deleted a color at end\n");
    for(var i=0;i<color.length;i++){
        console.log(color[i]);
        document.write(" </br>"+color[i]+"  </br>");
        }

        var Add_Any_position_index=+prompt("Enter color at any position\nplease enter index");
        var color_name=prompt("enter color name");
    color.splice(Add_Any_position_index,0,color_name); //add color at any position
    document.write("After add a color at "+Add_Any_position_index+"position </br>");
    console.log("After add a color at "+Add_Any_position_index+" position\n");
    for(var i=0;i<color.length;i++){
        console.log(color[i]);
        document.write(" </br>"+color[i]+"  </br>");
        }

        var delete_color_at_Any_index=+prompt("Enter index where you delete color");
        var How_many_color=+prompt("enter number how many color you delete");
    color.splice(delete_color_at_Any_index,How_many_color); //delete color(s) at any position
    document.write("After deleted  color(s) from "+delete_color_at_Any_index+" position to "+How_many_color+" position </br>");
    console.log("After delete color(s) from "+delete_color_at_Any_index+" position to "+How_many_color+" position\n");
    for(var i=0;i<color.length;i++){
        console.log(color[i]);
        document.write(" </br>"+color[i]+"  </br>");
        }





// Task 10;

var student_Score=[];
var size=5;

for(var i=0; i<size; i++) {
	//Taking Input from user
	student_Score[i] = prompt('Enter Score ' + (i+1));
}
document.write(student_Score.sort()); // for sorting i n assending order



// Task 11;

 var cities=["karachi","Lahore","Islamabad","Quetta","Peshawer"];
 document.write("Cities list.</br></br> ");
 for(var i=0; i<cities.length; i++){
   document.write(cities[i]+" </br>");
}
var selected_Cities=cities.slice(1,4);
document.write("</br>selected cities </br></br>");
document.write(selected_Cities);

// Task 12;

var arr = ["This","is","my", "cat"];
document.write("Array </br>");
document.write(arr);
var sentence=arr.join(" ");
document.write("</br></br> String </br>");
document.write(sentence);


// Task 13; //FIFO

var devices=[];
var size=5;
document.write("Devices:</br></br>");
for(var i=0; i<size; i++) {
// 	//Taking Input from user
    devices[i] = prompt('Enter device ' + (i+1));
    console.log(devices[i]);
    document.write(" "+devices[i]+" ,");
}
for( var j=0; j<size; j++){
var choice=+prompt("enter your choice\n 1-----> for delete device\n  0-----> for printing");
if(choice=== 1){
var deleted=devices.shift();
document.write("</br> Out: </br>");
document.write(deleted+" </br>");
}else if(choice === 0){
    document.write("Devices in list:</br>");
document.write(" </br> "+devices+" ,</br>");
size--;
}
}

// Task 14; //  LIFO

var devices=[];
var size=5;
document.write("Devices:</br></br>");
for(var i=0; i<size; i++) {
// 	//Taking Input from user
    devices[i] = prompt('Enter device ' + (i+1));
    console.log(devices[i]);
    document.write(" "+devices[i]+" ,");
}
for( var j=0; j<size; j++){
var choice=+prompt("enter your choice\n 1-----> for delete device\n  0-----> for printing");
if(choice=== 1){
var deleted=devices.pop();
document.write("</br> Out: </br>");
document.write(deleted+" </br>");
}else if(choice === 0){
    document.write("Devices in list:</br>");
document.write(" </br> "+devices+" ,</br>");
size--;
}
}


// Task 15;
// html



// Chapter 17-20;


// Task 1;

var arr=[
    [1],
    [2],
    [3],
    [4],
          ];

// Task 2;

var arr=[            ///// 2D array
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
];
document.write("2D Array:</br>");
for(var i=0; i<arr.length ; i++){

    for( var j=0 ; j< arr.length+1 ; j++){
        document.write(" "+arr[i][j]);
    }
    document.write("</br>");
}

// Task 3;

for( var i=1; i<=10 ; i++){  // counting 1-10
    document.write(i+" </br>");
}


// Task 4;

var number=+ prompt("enter number");         //////// table of any num from any length
var length=+ prompt("Enter length of table");
if(number>=1 ){
     document.write("Table of "+" "+number +"</br> Length "+ length+ " </br></br>");
     for(var i=1; i<=length ;i++)
     {
        document.write(" "+ number + " X " + i + " = " + number*i + "</br>");
      }
}


// Task 5;

var fruit=["Apple","Mango","Banana","Orange","strawberry"];
document.write("Fruits name:</br></br>");
for(var i=0 ; i< fruit.length; i++){
    document.write(""+ fruit[i] +" </br>");
}
document.write("</br>");

for( var i=0 ; i<fruit.length; i++){
    document.write(" Element of index "+ i +" is "+ fruit[i]+" </br>");
}

// Task 6;

document.write("Counting: </br></br>"); //a)
for(var i=1; i<=15; i++){
    document.write(i+", ");
}

document.write("</br></br> Reverse Counting: </br></br>"); //b)
for(var j=10; j>=1; j--){
    document.write(j +", ");
}

document.write("</br></br> Even Counting: </br></br>"); //c)
for(var i=0 ;i <= 20; i=i+2){
    document.write(i +", ");
}

document.write("</br></br> odd Counting: </br></br>"); //d)
for(var i=0 ;i <= 20; i++){
    if(i%2!=0){
        document.write(i +", ");
    }
}
document.write("</br></br> Series: </br></br>"); //c)
for(var i=2 ;i <= 20; i=i+2){
    document.write(i +"k, ");
}


// Task 7;

var arr=["cake","pine apple","cookie","chips","patties"];

var input=prompt("Enter iteam name");


    // console.log(arr[0]);
    if(input === "cake"){
        alert(input+" is available at index  0  in our bakery");

    }
    
    if(input === "pine apple"){
        alert(input+" is available at index  1  in our bakery");

    }
    
    if(input === "cookies"){
        alert(input+" is available at index  2  in our bakery");

    }
   
    if(input === "chips"){
        alert(input+" is available at index  3  in our bakery");

    }
    
    if(input === "patties"){
        alert(input+" is available at index  4  in our bakery");

    }
  
    else{

        alert("We are sorry, "+ input + " is not available in our bakery.");
    
    }


// Task 8;

  var arr=[];                     // finding large value
  var size=5;                
  for( var i=0 ; i<size ; i++){
      arr[i]=+prompt("Enter number "+(i+1));
  }

var max_value = arr[0];

for(var i=0;i<5; i++){
    if(arr[i]>max_value){
        max_value=arr[i];
    }
}
document.write("Array items: </br> </br>");
document.write(arr+", </br></br>");
document.write("</br> The Largest number is : "+ max_value);

// Task 9;

  var arr=[];                     // finding smallest value
  var size=5;                
  for( var i=0 ; i<size ; i++){
      arr[i]=+prompt("Enter number "+(i+1));
  }

var min_value = arr[0];

for(var i=0;i<5; i++){
    if(arr[i]<min_value){
        min_value=arr[i];
    }
}
document.write("Array items: </br> </br>");
document.write(arr+", </br></br>");
document.write("</br> The smallest number is : "+ min_value);


// Task 10;

document.write("Multiples of  5 (Range: 1-100) </br>"); //// multiples of 5 (Range :1-100)
for( var i=1; i <= 100; i++){
    if(i%5==0){
        document.write(i+" , ");
     }
    }
