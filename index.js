//First exercise
function EmployeeInfo(name, salary)
{
    console.log("Wlcome " + name + " Your monthly salary is:" + salary);
}

//Display current date and time
const currentDateTime = new Date();
console.log("This is my first programe");
console.log("Programe run on : " + currentDateTime.toLocaleString());

var  EmpName = "John";
var EmpSalary = 50000;

//calling the function
EmployeeInfo(EmpName,EmpSalary);

//Second exercise
const EmpSkills= (skills,Name,labGrp)=> {
    console.log("Student ID: " + Name+ " Expert in: "+ skills);
    console.log("Lab Group Name: " + labGrp);
}
EmpSkills("java", "3244826 ", "25")

//Third exercise
const student= require('./StudentInfo')
const person= require('./Person')

//getname is the function so we use
console.log(student.Studentgrade())
console.log("grade is " + student.Studentgrade(55))
person1= new person("Jim", "USA", "jim@gmail.com")
console.log("using Person Module", person1.getPersonInfo())
console.log("Programe ended")

//Forth exercise: NideJS core Modules
os=require("os") 
const util=require('util') 
console.log("temporary directory"+ os.tmpdir() ) 
console.log("hostname: "+ os.hostname()) 
console.log("OS : " + os.platform() +"release:"+ os.release()) 
console.log("Uptime"+ (os.uptime())/3600 +" hours") 
console.log("userInfo" + util.inspect(os.userInfo())) 
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte") 
console.log(" free: "+os.freemem()/1000000000 + "Giga byte") 
console.log("CPU "+ util.inspect(os.cpus())) 
console.log("Network"+ util.inspect(os.networkInterfaces())) 
console.log("programe end") 

