// Your code here

const employeeRecords = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ];

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
    
    for(item of array){
        employeeRecords.push(createEmployeeRecord(item))
    }
    console.log(employeeRecords.length)
    return employeeRecords;
}

//creates a time object and is added to the employee object
function createTimeInEvent(employeeObject, date){
    employeeObject.timeInEvents = {
        'type': 'TimeIn',
        'hour': date.slice(11,13),
        'date': date.slice(0,10)
    }
    return employeeObject;
}

//console.log(createTimeInEvent(employeeRecords[0], "1987-05-27 1250"))