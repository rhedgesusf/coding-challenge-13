/////////////////////////////////////////
// Task 1: Creating the Base Structure //
/////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Creating the Base Structure");

// Created base structure in HTML

///////////////////////////////////////////////
// Task 2: Adding Employee Cards Dynamically //
///////////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Adding Employee Cards Dynamically");

// create function to dynamically create employee and add to container
function createEmployee(name, position) {
  const employeeContainer = document.getElementById("employeeContainer");

  if (employeeContainer) {
    // create div for the employee card
    const card = document.createElement("div");

    // add class and id attributes
    card.setAttribute("class", "employee-card");
    card.setAttribute("id", "employeeCard");

    // set the main content (static)
    setEmployeeDetails(card, name, position);

    // add a double click listener to the card
    card.addEventListener("dblclick", (event) => {
      // switch to edit mode
      editEmployeeCard(card);
    });

    employeeContainer.appendChild(card);
  }
}

// created this function so that it could be re-used; used later in the save method
function setEmployeeDetails(card, name, position) {
  card.innerHTML = `<div><h3>${name}</h3>
    <p>${position}</p>
    </div>`;

  // create a button
  const button = document.createElement("button");
  button.textContent = "Remove";

  // add click listener
  button.addEventListener("click", (event) => {
    // remove from container
    employeeContainer.removeChild(card);
    event.stopPropagation();
  });
  card.appendChild(button);
}

// create test data
createEmployee("John Doe", "Manager");
createEmployee("Mike Miller", "Supervisor");
createEmployee("Jerry Wilken", "Electrician");

/////////////////////////////////////////////////////////////
// Task 3: Converting NodeLists to Arrays for Bulk Updates //
/////////////////////////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Converting NodeLists to Arrays for Bulk Updates");


// set background color of all cards to "lightcoral"
const cards = document.querySelectorAll(".employee-card");

if (cards) {
  const cardsArray = Array.from(cards);
  cardsArray.forEach((card) => {
    card.style.backgroundColor = "lightcoral";
  });
}

////////////////////////////////////////////////////////////////////////
// Task 4: Implementing Removal of Employee Cards with Event Bubbling //
////////////////////////////////////////////////////////////////////////

console.log("--------------------------------------");
console.log(
  "Task 4: Implementing Removal of Employee Cards with Event Bubbling"
);

// Added click event listener (remove) in createEmployee method above

// add a click event listener to the parent container
const employeeContainer = document.getElementById("employeeContainer");

employeeContainer.addEventListener("click", () => {
  console.log(`employee clicked`);
});

// Added stopPropagation() to button click listener

///////////////////////////////////////////////////////////////////////
// Task 5: Additional Challenge - Inline Editing of Employee Details //
///////////////////////////////////////////////////////////////////////

console.log("--------------------------------------");
console.log(
  "Task 5: Additional Challenge - Inline Editing of Employee Details"
);

// create function to allow editing of the data
function editEmployeeCard(card) {
  
  // first get the values of the static content
  let name = card.querySelector("h3").innerText;
  let position = card.querySelector("p").innerText;

  // change content of the card to <input> elements for editing
  card.innerHTML = `
                <div>
                    <input type="text" id="name" value="${name}">
                    <input type="text" id="position" value="${position}">
                </div>
            `;

  // create a Save button
  const button = document.createElement("button");
  button.textContent = "Save";
  button.addEventListener("click", () => {
    // call save method when button is clicked
    saveEmployee(card);
  });
  card.appendChild(button);
}

// save the employee details and switch back to static content
function saveEmployee(card) {

  // get the values of the <input> elements
  let name = card.querySelector("#name").value;
  let position = card.querySelector("#position").value;

  // call this method to set static content
  setEmployeeDetails(card, name, position);
}