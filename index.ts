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

const full_time = 8;
const part_time = 4;
const wage_per_hour = 20;
let emp_hours;
function daily_wage_func(random_time)
{
    switch(random_time)
    {
        case 1:
            emp_hours = full_time;
            break;
        case 0:
            emp_hours = part_time;
            break;
        default:
            emp_hours = 0;
            break;    
    }
    return emp_hours;
}
let random_time = Math.floor(Math.random()*10)%3;
emp_hours = daily_wage_func(random_time);
let daily_wage = emp_hours *  wage_per_hour;
console.log("Wage: " +daily_wage);
let emp_atd_check = Math.floor(Math.random()*10)%2;
console.log(attendance_check(emp_atd_check));