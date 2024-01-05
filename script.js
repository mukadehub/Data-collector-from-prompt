var name =  prompt('Plese enter your full name')
var firstcn = prompt('Plese enter your first course name')
var firstg = prompt('Plese enter your first course grade')
var firstu = prompt('Plese enter your first course unit')
var secoundcn = prompt('Plese enter your secound curse name')
var secoundg = prompt('Plese enter your secound curse grade')
var secoundu = prompt('Plese enter your secound curse unit')
alert('thanks for giving me the necessary information press ok to print out your info')
let computerGradePoint1;
let computerGradePoint2;

document.getElementsByTagName('td')[0].innerHTML=name;
console.log("plese enter your name:", name)

document.getElementsByTagName('td')[1].innerHTML=firstcn;
console.log("plese enter your name:", firstcn)

document.getElementsByTagName('td')[2].innerHTML=firstg;
console.log("plese enter your name:", firstg)

document.getElementsByTagName('td')[3].innerHTML=firstu;
console.log("plese enter your name:", firstu)

document.getElementsByTagName('td')[4].innerHTML=secoundcn;
console.log("plese enter your name:", secoundcn)

document.getElementsByTagName('td')[5].innerHTML=secoundg;
console.log("plese enter your name:", secoundg)

document.getElementsByTagName('td')[6].innerHTML=secoundu;
console.log("plese enter your name:", secoundu)

const metric ={"A":5.0,"B":4.0,"C":3.0,"D":2.0,"E":1.0,"F":0}

if (firstg === null || metric[firstg.toLocaleUpperCase()] === undefined) alert("Grade not valid")
if (secoundg === null || metric[firstg.toLocaleUpperCase()] === undefined) alert("Grade not valid")

 computerGradePoint1 = metric [firstg.toLocaleUpperCase()];z
 computerGradePoint2 = metric [firstg.toLocaleUpperCase()];

 console.log("computer:", computerGradePoint1, computerGradePoint2, metric['A'], firstg, secoundg);

 let CGPA=((computerGradePoint1 * Number(firstg)) + (computerGradePoint2 * Number(secoundg))) / (Number(firstg) + Number(secoundg));

 document.getElementsByTagName("h3")[0].innerHTML = CGPA.toFixed(2);

 console.log("Your total resolt sum is:", CGPA.toFixed(2))

