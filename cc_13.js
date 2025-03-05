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

    if(employeeContainer) {
        const card = document.createElement('div');

        card.setAttribute('class', 'employee-card');
        card.setAttribute('id', 'employeeCard');
    
        card.innerHTML = `<div><h3>${name}</h3>
                           <p>${position}</p>
        </div>`;
        
        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.addEventListener('click', (event) => {
            employeeContainer.removeChild(card);
            event.stopPropagation();
        });
        card.appendChild(button);

        employeeContainer.appendChild(card);    
    }
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
    cardsArray.forEach(card => {
        card.style.backgroundColor = "lightcoral";
    });
}

////////////////////////////////////////////////////////////////////////
// Task 4: Implementing Removal of Employee Cards with Event Bubbling //
////////////////////////////////////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Implementing Removal of Employee Cards with Event Bubbling");

// Added click event listener (remove) in createEmployee method

const employeeContainer = document.getElementById("employeeContainer");

employeeContainer.addEventListener('click', () => {
    console.log(`employee clicked`);
});

// Added stopPropagation() to button click listener