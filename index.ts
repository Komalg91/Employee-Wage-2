console.log("************ Welcome to Employee Wage Computation*****************")

//UC2
const is_absent = 0;
function attendance_check(empCheck) {
    
    if(empCheck == is_absent){
        console.log("Employee is absent");
        empCheck = 0;
    }
    else{
        console.log("Employee is present");
        empCheck = 1;
    }
    return empCheck;
}

let emp_atd_check = Math.floor(Math.random()*10)%2;
console.log(attendance_check(emp_atd_check));