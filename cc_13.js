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
        button.addEventListener('click', () => {
            employeeContainer.removeChild(card);
        });
        card.appendChild(button);

        employeeContainer.appendChild(card);    
    }
}

createEmployee("John Doe", "Manager");
createEmployee("Mike Miller", "Supervisor");
createEmployee("Jerry Wilken", "Electrician");