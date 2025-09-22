//document.writeln("Hello this is js<br>")
//document.write("this is my first program<br>")
//console.log("this is second way to print js")
//alert("Hello welcome to my page")

//function mes()
//{
 //   let x=1235
   // let y=75
    //let sum=x+y
    //document.write("Value of addition is :"+sum+"<br>" )

    //let sub=x-y
    //document.write("value of sub is :"+sub+"<br>" )
    //let multi=10*2
    //document.write("value of mlutli is :"+multi+"<br>" )
    //let div=20/5
    //document.write("Value of div is :"+div +"<br>")
//}
//mes()

//let x=10
//let y=20

/*
document.write(x==y ,"<br>")
document.write(x===y ,"<br>")
document.write(x<y ,"<br>")


a=50
b=100
c=50

document.write(a==c+"<br>") && (+c==a ,"<br>")
document.write(a>b+"<br>") || (+b>c,"<br>")

let xx=5
let yy=10

document.write("y is :"+yy+"</br>")

yy+=xx
document.write("Now yy is :"+yy+"<br>")
x=100

if(x==100)
{
    alert("Contion is true")
}

else
{
    alert("Contion is false")
}

marks=99

if(marks>=90)
{
    alert("A+")

}
else if(marks<80 && marks>=70)
{
    alert("First class with distiontion")

}

else if(marks<70 && marks>35)
{
    alert("Pass")
}
else
{
    fail
}

 

let num =1235
if(num>0)
{
    if(num %2==0)
    {
        document.write("Number is positive and even")

    }
    else
    {
        document.write("Number is positive but odd")

    }


}
else{
    if(num%2==0)
    {
        document.write("Number is Negative and even")

    }
  else{
    document.write("Number is negative and odd<br>")
  }
}


let marks=78;
let grade='A';

if(marks>=70)

{
    if(grade=='A')
    {
        document.write("MArks is:" , marks +" Grades are :" , grade)
    }
}



document.write("1.Addition<br> 2.Substraction <br> 3.Multipilcation <br> 4.Divition <br>")
let choice=5
document.writeln("<br>You Want To Perform a ", choice + " no Of operation<br></br>")

let a=100
let b=200

switch(choice)
{
    case 1:document.write("Addition is :", a+b)
    break;
    case 2:document.write("Substraction is :", a-b)
    break;
    case 3:document.write("multiplication is :", a*b)
    break;
    case 4:document.write("Divition is :", a/b)
    break;
    default: document.write("Your choise is Wrong!")

}


let x=10
while(x>=1)
{
    document.write( x+ "<br>")
    x--
}


let xx=1;
do{
    document.write(x+"<br>")
    xx++
}
while(x<=10)




 function mes()
{
     alert("Welcome to my page")
 }

 function getvalue(value)
 {
    document.write("Cube Of 3 is :" , value*value*value)
 }

 function add(num1 ,num2)
 {
    document.write("Add is :",num1+num2)
 }

 alert(getalert())
 
 function getalert()
 {
    return "This is alert"
 }


 let multi=new Function("num1" , "num2", "return num1*num2")
 {


 document.write(multi(5,5))
 }
 

 emp={id:1, name:"Surya", salary:55000}
 document.write(emp.id+"<br>" +emp.name+"<br>"+ emp.salary +"<br>")
 
 //second Way to create and print the object

 function job( id , name , salary)
 {
    this.id:id;
    this.name:name;
    this.salary:salary;

 }

 e=new job(1,"sanket", 55000);
 document.write("")

*/

function emp(id,name,salary)
{
    this.id=id;
    this.name=name;
    this.salary=salary;

}

e=new emp(101,"Surya" ,55000)
document.write(e.id+ "<br>" + e.name+"<br>"  + e.salary +"<br>");


function withnew()
{
var emp =new Object();
emp.id=101;
emp.name="Surya Patil";
emp.salary=50000;
document.write(emp.id+" "+emp.name+" "+emp.salary+"<br>");
}

withnew();


 emp={
    id:1, 
    name:"Surya", 
    salary:55000
}
 document.write(emp.id+"<br>" +emp.name+"<br>"+ emp.salary +"<br>")


 var employe =new Object();
 employe.id=102;
 employe.name="Surya patil"


 function avrage()

{
    let arr=[10,20,30,40,50]
    let add=0;
    let avg=0;
    for(let i=0; i<=arr.length;i++)
    {
      add+=arr[i];
    }
    avg=add/arr;
    document.writeln(avg)
}
//amrstrong number and palnodrom nunber