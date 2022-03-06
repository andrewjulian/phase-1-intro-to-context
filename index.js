// Your code here

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
    const employeeRecords = []
    for(let item of array){
        employeeRecords.push(createEmployeeRecord(item))
    }
    return employeeRecords;
}


//creates a time in object and is added to the employee object
function createTimeInEvent(employeeObject, workDay){
    const totalEventsIn = employeeObject.timeInEvents 
    const newInput = {
        type: 'TimeIn',
        hour: parseInt(workDay.slice(11,13)+"00"),
        date: workDay.slice(0,10)
    }
    totalEventsIn.push(newInput)
    return employeeObject;
}

//creates a time out object and is added to the employee object
function createTimeOutEvent(employeeObject, workDay){
    const totalEventsOut = employeeObject.timeOutEvents
    const newInput = {
        type: 'TimeOut',
        hour: parseInt(workDay.slice(11,13)+"00"),
        date: workDay.slice(0,10) 
    }
    totalEventsOut.push(newInput)
    return employeeObject;
}

//calculates the hours worked for a single employee on a specific day
function hoursWorkedOnDate (employeeObject, workDay){
    for(let day of employeeObject.timeInEvents){
        if(day.date == workDay){
            return day.timeOutEvents.hour - day.timeInEvents.hour
        }
    }
    
}

//calculates the pay (hours * payrate) for a single employee on a specific day
function wagesEarnedOnDate (employeeObject, workDay){
    return hoursWorkedOnDate(employeeObject, workDay) * employeeObject.payPerHour
}

//clculates the pay for a single employee for all days worked
function allWagesFor(employeeObject){
    //for all dates worked, total wages
    let totalPay = 0;
    for(let day in employeeObject.timeInEvents.date){
        totalPay += hoursWorkedOnDate(employeeObject, workDay)
    }
    return totalPay
}

//calculates the total payroll for all employees on all days
function calculatePayroll(array){
    let totalPayroll = 0;
    for(let person in array){
        totalPayroll += allWagesFor(person)
    }
    return totalPayroll
}

