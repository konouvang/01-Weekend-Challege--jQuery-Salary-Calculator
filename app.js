$( document ).ready( readyNow );

const salary = 0;
let employees = [];

function addEmployees(){
  console.log( 'in addEmployees' );
  // get user input create a new object
  let newEmployees = {
    firstName: $( '#firstNameIn' ).val(),
    lastName: $( '#lastNameIn').val(),
    id: $( '#idIn' ).val(),
    title: $( '#titleIn').val(),
    annualSalary: $( '#salaryIn').val()
  }
  // push the new employees in array
  employees.push( newEmployees );
  // empty inputs
  $( '#firstNameIn' ).val( '' );
  $( '#lastNameIn' ).val( '' );
  // calculate totalMonthly
  calculateTotalMonthly();
  // update DOM
  displayEmployees();
} // end addPurchase



function calculateTotalMonthly(){
  // console.log( 'in calculateTotalMonthly' );
  // loop through employees Array
  let totalSalary = 0   ;
  for( let i = 0; i < employees.length; i++ ){
    // got each employees, add up total of all salary
    totalSalary = totalSalary + employees[ i ].annualSalary;
    return totalSalary
  } // end for
  //console.log( 'totalSalary:', totalSalary );
  // add totalSalary from the salary for totalmonthlysalary
  let el = 0
  el.empty();
  el.append ( totalSalary );
} // end calculateTotalMonthly

function displayHire() {
  console.log( 'in displayHire');
  // target output by ID
  let el = $( '#hireOut' );
  // empty
  el.empty();
  // loop through employees array
  for( person of hire ){
    // for each purchase, create a list item
    el.append( `<li>` + person.firstName + `: ` + person.lastName + `: ` + person.id + `: ` + person.title +`: `+ person.annualSalary +`</li>` );
  } // end for
} // end displayPurchases

function readyNow() {
  // display salary
  // target salaryOut by id
  let el = $( '#salaryOut' );
  el.empty();
  el.append( salary );
  // handle click event
  $( '#addEmployeesButton' ).on( 'click', addEmployees );
  //init display
  calculateTotalMonthly();
} // end readyNow