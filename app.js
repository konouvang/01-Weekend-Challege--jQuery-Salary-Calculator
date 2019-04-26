$(document).ready(readyNow);

const salary = 0;
let employees = [];

function addEmployees() {
  console.log('in addEmployees');
  // get user input create a new object
  let newEmployees = {
    firstName: $('#firstNameIn').val(),
    lastName: $('#lastNameIn').val(),
    id: $('#idIn').val(),
    title: $('#titleIn').val(),
    // parseInt converts a string into a number. The line below WITHOUT parseInt, would be a string
    annualSalary: parseInt($('#salaryIn').val())
  }
  // push the new employees in array
  employees.push(newEmployees);
  // empty inputs
  $('#firstNameIn').val('');
  $('#lastNameIn').val('');
  $('#idIn').val('');
  $('#titleIn').val('');
  $('#salaryIn').val('');
  // calculate totalMonthly
  calculateTotalMonthly();
  // update DOM
  displayEmployees();
} // end addPurchase



function calculateTotalMonthly() {
  // console.log( 'in calculateTotalMonthly' );
  // loop through employees Array
  let totalSalary = 0;
  for (let i = 0; i < employees.length; i++) {
    // got each employees, add up total of all salary
    totalSalary = totalSalary + employees[i].annualSalary;
  }

  $('#calulateTotalMonthly').text(totalSalary);
} // end calculateTotalMonthly

function displayEmployees() {
  console.log('in displayEmployees');
  // target output by ID
  let el = $('#hireOut');
  // empty
  el.empty();
  // loop through employees array
  for (let person of employees) {
    // for each purchase, create a list item
    el.append(`<li>` + person.firstName + `: ` + person.lastName + `: ` + person.id + `: ` + person.title + `: ` + person.annualSalary + `</li>`);
  } // end for
} // end displayPurchases

function readyNow() {
  // display salary
  // target salaryOut by id
  let el = $('#salaryOut');
  el.empty();
  el.append(salary);
  // handle click event
  $('#addEmployeesButton').on('click', addEmployees);
  //init display
  calculateTotalMonthly();
} // end readyNow