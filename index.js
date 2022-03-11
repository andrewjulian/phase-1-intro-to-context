//create a record for an employee (no time data included)
function createEmployeeRecord(employeeInfoArray){
    return {
        'firstName' : employeeInfoArray[0],
        'familyName': employeeInfoArray[1],
        'title': employeeInfoArray[2],
        'payPerHour': employeeInfoArray[3],
        'timeInEvents': [],
        'timeOutEvents': []
    }
}

//create employee records from an array of arrays (employee data)
function createEmployeeRecords(array) {
    const employeeRecords = array.map(createEmployeeRecord)
    return employeeRecords;
}

//creates a time in object and is added to the employee object
function createTimeInEvent(employeeObject, workDay){
    const totalEventsIn = employeeObject.timeInEvents 
    const newInput = {
        'type': 'TimeIn',
        'hour': parseInt(workDay.slice(11,13)+"00"),
        'date': workDay.slice(0,10)
    }
    totalEventsIn.push(newInput)
    return employeeObject;
}

//creates a time out object and is added to the employee object
function createTimeOutEvent(employeeObject, workDay){
    const totalEventsOut = employeeObject.timeOutEvents
    const newInput = {
        'type': 'TimeOut',
        'hour': parseInt(workDay.slice(11,13)+"00"),
        'date': workDay.slice(0,10) 
    }
    totalEventsOut.push(newInput)
    return employeeObject;
}

//calculates the hours worked for a single employee on a specific day
function hoursWorkedOnDate(employeeObject, workDay){
    let totalHours = 0
    const employeeTimeInList = employeeObject.timeInEvents
    console.log(employeeTimeInList)
    for(let day in employeeTimeInList){
        console.log(day)
        if(employeeObject.timeInEvents[day].date === workDay){
            totalHours += employeeObject.timeOutEvents[day].hour - employeeObject.timeInEvents[day].hour
        }
    }
    return totalHours/100
}

//calculates the pay (hours * payrate) for a single employee on a specific day
function wagesEarnedOnDate (employeeObject, workDay){
    return hoursWorkedOnDate(employeeObject, workDay) * employeeObject.payPerHour
}


//clculates the pay for a single employee for all days worked
function allWagesFor(employeeObject){
    //for all dates worked, total wages
    let totalPay = 0;
    const employeeTimeInList = employeeObject.timeInEvents
    for(let day in employeeTimeInList){
        console.log(day)
        totalPay += wagesEarnedOnDate(employeeObject, employeeObject.timeInEvents[day].date)
    }
    return totalPay
}

//calculates the total payroll for all employees on all days
function calculatePayroll(array){
    let totalPayroll = 0;  

    for(let person of array){
        console.log(person)
        totalPayroll += allWagesFor(person)
    } 

    return totalPayroll
}
