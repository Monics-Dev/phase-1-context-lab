
// function createEmployeeRecord(employeeData) {
//     const employeeRecord = {
//       firstName: employeeData[0],
//       familyName: employeeData[1],
//       title: employeeData[2],
//       payPerHour: employeeData[3],
//       timeInEvents: [],
//       timeOutEvents: []
//     };
//     return employeeRecord;
//   }
//   function createEmployeeRecords(arr) {
//     let employeeRecords = [];
//     for (let i = 0; i < arr.length; i++) {
//       let employee = createEmployeeRecord(arr[i]);
//       employeeRecords.push(employee);
//     }
//     return employeeRecords;
//   }
 

// let createTimeInEvent = function(dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//     this.timeInEvents.push({
//         type: "TimeIn",
//         hour: parseInt(hour, 10),
//         date,
//     })
// }
// function createTimeOutEvent(dateStamp) {
//     let event = {};
//     event.type = "TimeOut";
//     event.hour = dateStamp.slice(11, 13);
//     event.date = dateStamp.slice(0,10);
//     return event;
//   }
//   function hoursWorkedOnDate(date) {
//     return timeOutEvent - timeInEvent;
//   }
//   function wagesEarnedOnDate(date) {
//     const hoursWorked = hoursWorkedOnDate(date);
//     const payRate = record.payRate;
//     return (hoursWorked * payRate).toFixed(2);
//   }
//   function allWagesFor() {
//     let sum = 0;
//     let dates = Object.keys(this.data);
//     dates.forEach(date => {
//       sum += this.wagesEarnedOnDate(date);
//     });
//     return sum;
//   } 
//   function findEmployeeByFirstName(srcArray, firstName) {
//     for (let i = 0; i < srcArray.length; i++) {
//         if (srcArray[i].firstName === firstName) {
//             return srcArray[i];
//         }
//     }
//     return undefined;
// }
// function calculatePayroll(employeeRecords){
//     let totalPay = 0;
//     employeeRecords.forEach(record => {
//       totalPay += allWagesFor(record);
//     });
//     return totalPay;
//   }
  /* Your Code Here */
// let createEmployeeRecord = function(arr){
//     return {
//         firstName: arr[0],
//         familyName: arr[1],
//         title: arr[2],
//         payPerHour: arr[3],
//         timeInEvents: [],
//         timeOutEvents: []
//     }
// }

// let createEmployeeRecords = function(employeeRowData) {
//     return employeeRowData.map(function(arr){
//         return createEmployeeRecord(arr)
//     })
// }
// let createTimeInEvent = function(dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//     this.timeInEvents.push({
//         type: "TimeIn",
//         hour: parseInt(hour, 10),
//         date,
//     })
// }

// // const allWagesFor = function () {
// //     const eligibleDates = this.timeInEvents.map(function (e) {
// //         return e.date
// //     return this
// // })
// // }

// let createTimeOutEvent = function(dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//     this.timeOutEvents.push({
//         type: "TimeOut",
//         hour: parseInt(hour, 10),
//         date,
//     })

//     return this
// }
// let hoursWorkedOnDate = function(soughtDate){
//     let inEvent = this.timeInEvents.find(function(e){
//         return e.date === soughtDate
//     })
//     let outEvent = this.timeOutEvents.find(function(e){
//         return e.date === soughtDate
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//     return (outEvent.hour - inEvent.hour) / 100
// })
// }

// let wagesEarnedOnDate = function(dateSought){
//     let rawWage = hoursWorkedOnDate.call(this, dateSought)
//         * this.payPerHour
//     return parseFloat(rawWage.toString())
// }
// let allWagesFor = function(){
//     let eligibleDates = this.timeInEvents.map(function(e){
//         return e.date
//     })
// }
// let payable = eligibleDates.reduce(function(memo, d){
//     return memo + wagesEarnedOnDate.call(this, d)
// }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!


// let findEmployeeByFirstName = function(srcArray, firstName) {
//     return srcArray.find(function(rec){
//       return rec.firstName === firstName
//     })
//   }
//   let calculatePayroll = function(arrayOfEmployeeRecords){
//     return arrayOfEmployeeRecords.reduce(function(memo, rec){
//         return memo + allWagesFor.call(rec)
//     }, 0)

function createEmployeeRecord(testEmployee){
    let employeeObject = {}
    for(let item of testEmployee )
    {
        employeeObject["firstName"] = testEmployee[0]
        employeeObject["familyName"]  = testEmployee[1]
        employeeObject["title"] = testEmployee[2]
        employeeObject["payPerHour"] = testEmployee[3]
    }
    employeeObject["timeInEvents"] = [ ]
    employeeObject["timeOutEvents"] = [ ]
return employeeObject
}
function createEmployeeRecords(myArray){
    let arrayToBeReturned = []
    myArray.forEach(element => {
            arrayToBeReturned.push(createEmployeeRecord(element))    
    });
 return arrayToBeReturned       
}

let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}



const createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}
let hoursWorkedOnDate = function(soughtDate){
    let comingIn = this.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let goingOut = this.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (goingOut.hour - comingIn.hour) / 100
}

let wagesEarnedOnDate = function(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}



    let allWagesFor = function(){
        let eligibleDates = this.timeInEvents.map(function(e){
            return e.date
        })
        let payable = eligibleDates.reduce(function(memo, d){
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
        
        return payable
    }
    

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}
let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}