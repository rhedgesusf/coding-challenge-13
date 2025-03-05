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

function createEmployee(name, position) {
  const employeeContainer = document.getElementById("employeeContainer");

  if (employeeContainer) {
    const card = document.createElement("div");

    card.setAttribute("class", "employee-card");
    card.setAttribute("id", "employeeCard");

   setEmployeeDetails(card, name, position);

    card.addEventListener("dblclick", (event) => {
      editEmployeeCard(card);
    });

    employeeContainer.appendChild(card);
  }
}

function setEmployeeDetails(card, name, position) {
  card.innerHTML = `<div><h3>${name}</h3>
    <p>${position}</p>
</div>`;

  const button = document.createElement("button");
  button.textContent = "Remove";
  button.addEventListener("click", (event) => {
    employeeContainer.removeChild(card);
    event.stopPropagation();
  });
  card.appendChild(button);
}

createEmployee("John Doe", "Manager");
createEmployee("Mike Miller", "Supervisor");
createEmployee("Jerry Wilken", "Electrician");

/////////////////////////////////////////////////////////////
// Task 3: Converting NodeLists to Arrays for Bulk Updates //
/////////////////////////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Converting NodeLists to Arrays for Bulk Updates");

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

// Added click event listener (remove) in createEmployee method

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

function editEmployeeCard(card) {
  let name = card.querySelector("h3").innerText;
  let position = card.querySelector("p").innerText;
  card.innerHTML = `
                <div>
                    <input type="text" id="name" value="${name}">
                    <input type="text" id="position" value="${position}">
                </div>
            `;
  const button = document.createElement("button");
  button.textContent = "Save";
  button.addEventListener("click", () => {
    saveEmployee(card);
  });
  card.appendChild(button);
}

function saveEmployee(card) {
    let name = card.querySelector("#name").value;
    let position = card.querySelector("#position").value;

    setEmployeeDetails(card, name, position);
}