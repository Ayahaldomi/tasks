const dataUrl = 'https://666aabcf7013419182d05f8c.mockapi.io/employees';
let count = 0;
let newRowLocalArray = JSON.parse(localStorage.getItem("taskLocal")) || [];
let jsondata = [];



// Load data on window load
window.onload = async function loadData() {

        const res = await fetch(dataUrl);
        jsondata = await res.json();
        localStorage.setItem("employees", JSON.stringify(jsondata));

        for (let i = 0; i < jsondata.length; i++) {
            const option = document.createElement('option');
            option.textContent = jsondata[i].name;
            option.value = jsondata[i].id;
            itemList.appendChild(option);
        }
        // add rows frof local storge
        populateTable(newRowLocalArray);

};

// Function to populate the table from local storage
function populateTable(dataArray) {
    const tableRef = document.getElementById("task-table");
    for (let i = 0; i < dataArray.length; i++) {
        let newRow = tableRef.insertRow(1);
        newRow.classList.add(i);

        let newCell1 = newRow.insertCell(0);
        let newCell2 = newRow.insertCell(1);
        let newCell3 = newRow.insertCell(2);
        let newCell4 = newRow.insertCell(3);
        let newCell5 = newRow.insertCell(4);
        let newCell6 = newRow.insertCell(5);
        let newCell7 = newRow.insertCell(6);
        let newCell8 = newRow.insertCell(7);
        let newCell9 = newRow.insertCell(8);

        newCell1.textContent = dataArray[i].name;
        newCell2.textContent = dataArray[i].email;
        newCell3.textContent = dataArray[i].task;

        
        newCell6.textContent = dataArray[i].start;
        newCell7.textContent = dataArray[i].dueDate;
        newCell8.textContent = dataArray[i].description;
        newCell9.innerHTML = `<button class="delete-button" onclick="deleteRow(${newRowLocalArray[i].id}, this)"><i class="fa-solid fa-eraser" width="100" style="color: #002142;"></i></button>`;
        
        // Add scope="row" to the first cell so bootstrap work
        newCell1.setAttribute('scope', 'row'); 

        // add class to css style the value
        if (dataArray[i].priority === "Low") {
            newCell5.innerHTML = `<span class="lowP">${dataArray[i].priority}</span>`;
        }
        else if (dataArray[i].priority === "Medium") {
            newCell5.innerHTML = `<span class="mediumP">${dataArray[i].priority}</span>`;
        }
        else if (dataArray[i].priority === "High") {
            newCell5.innerHTML = `<span class="highP">${dataArray[i].priority}</span>`;
        }

        // add class to css style the value
        if (dataArray[i].status === "To-do") {
            newCell4.innerHTML = `<span class="TodoS">${dataArray[i].status}</span>`;
        } 
        else if (dataArray[i].status === "In Progress") {
            newCell4.innerHTML = `<span class="inProgressS">${dataArray[i].status}</span>`;
        } 
        else if (dataArray[i].status === "Done") {
            newCell4.innerHTML = `<span class="doneS">${dataArray[i].status}</span>`;
        }
        
    }
}


    
//display the form and TaskForName

const TaskForName = document.getElementById("TaskForName");

function addtask() {
    form.style.display = 'inline';
    let collection = itemList.value;
    for (let i = 0; i < jsondata.length; i++) {
        if (collection == jsondata[i].id) {
            TaskForName.textContent = jsondata[i].name;
        }
    }
    
    // blur effect
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    form.classList.toggle('form-visible');

    var body = document.getElementById('body');
    body.style.overflowY = 'hidden'
    
}

// Function to hide the form
function cancel() {
    form.style.display = 'none';
    // blur effect
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    form.classList.toggle('form-visible');
    body.style.overflowY = 'auto'
}
// Form elements
const itemList = document.getElementById("myselect");
const taskTitle = document.getElementById("taskTitle");
const Status = document.getElementById("status");
const priority = document.getElementById("priority");
const startDate = document.getElementById("startDate");
const dueDate = document.getElementById("dueDate");
const description = document.getElementById("description");
var form = document.getElementById("form");


//add a new row to the table and local storage
function addRow() {
    // for required field
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    let tableRef = document.getElementById("task-table");
    let collection = itemList.value;
    let taskTitleValue = taskTitle.value;
    let statusValue = Status.value;
    let priorityValue = priority.value;
    let startDateValue = startDate.value;
    let dueDateValue = dueDate.value;
    let descriptionValue = description.value;

    

    for (let i = 0; i < jsondata.length; i++) {
        if (collection == jsondata[i].id) {
            let newRow = tableRef.insertRow(1);
            newRow.classList.add(i);

            

            let newCell1 = newRow.insertCell(0);
            let newCell2 = newRow.insertCell(1);
            let newCell3 = newRow.insertCell(2);
            let newCell4 = newRow.insertCell(3);
            let newCell5 = newRow.insertCell(4);
            let newCell6 = newRow.insertCell(5);
            let newCell7 = newRow.insertCell(6);
            let newCell8 = newRow.insertCell(7);
            let newCell9 = newRow.insertCell(8);

            newCell1.textContent = jsondata[i].name;
            newCell2.textContent = jsondata[i].email;
            newCell3.textContent = taskTitleValue;
            
            
            newCell6.textContent = startDateValue;
            newCell7.textContent = dueDateValue;
            newCell8.textContent = descriptionValue;
            newCell9.innerHTML = `<button class="delete-button" onclick="deleteRow(${jsondata[i].id}, this)"><i class="fa-solid fa-eraser" style="color: #002142;"></i></button>`;
            
            // Add scope="row" to the first cell so bootstrap work
            newCell1.setAttribute('scope', 'row'); 

            // add class to css style the value
            if (priorityValue === "Low") {
                newCell5.innerHTML = `<span class="lowP">${priorityValue}</span>`;
            }
            else if (priorityValue === "Medium") {
                newCell5.innerHTML = `<span class="mediumP">${priorityValue}</span>`;
            }
            else if (priorityValue === "High") {
                newCell5.innerHTML = `<span class="highP">${priorityValue}</span>`;
            }

            // add class to css style the value
            if (statusValue === "To-do") {
                newCell4.innerHTML = `<span class="TodoS">${statusValue}</span>`;
            }
            else if (statusValue === "In Progress") {
                newCell4.innerHTML = `<span class="inProgressS">${statusValue}</span>`;
            }
            else if (statusValue === "Done") {
                newCell4.innerHTML = `<span class="doneS">${statusValue}</span>`;
            }

            // Clear form values
            taskTitle.value = "";
            Status.value = "";
            priority.value = "";
            startDate.value = "";
            dueDate.value = "";
            description.value = "";

            // Add to local storage
            addToLocal(jsondata[i].name, jsondata[i].email, taskTitleValue, statusValue, priorityValue, startDateValue, dueDateValue, descriptionValue);

            // Hidding the form
            form.style.display = 'none';

            // blur effect
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');
            form.classList.toggle('form-visible');
            body.style.overflowY = 'auto'
            
        }
    }
}

// Function to add a new task to local storage
function addToLocal(name, email, taskTitle, status, priority, start, due, description) {
    const newRowInfo = {
        "name": name,
        "email": email,
        "task": taskTitle,
        "status": status,
        "priority": priority,
        "start": start,
        "dueDate": due,
        "description": description,
        "id": count++,
    };
    newRowLocalArray.push(newRowInfo);
    localStorage.setItem("taskLocal", JSON.stringify(newRowLocalArray));
}

function deleteRow(id, button) {
    // Find the row containing the button
    var row = button.parentNode.parentNode;
    // Remove the row from the table
    row.parentNode.removeChild(row);

    let storedData = JSON.parse(localStorage.getItem('taskLocal'));
            storedData = storedData.filter(dataArray => dataArray.id !== id);
            localStorage.setItem('taskLocal', JSON.stringify(storedData));
}

// function myFunction(arrayOfObjects, char) {
//     return arrayOfObjects.some((obj) =>
//       obj.charLists.some((charList) => charList.includes(char))
//     );
//   }
   
//   const arrayOfObjects = [
//     { charLists: ["HTML", "CSS", "JavaScripat"] },
//     { charLists: ["React", "Redux", "Routes"] },
//     { charLists: ["10", "20", "30"] },
//   ];
   
//   const result1 = myFunction(arrayOfObjects, "rkmgsl");
//   console.log(result1);
   
//   const result2 = myFunction(arrayOfObjects, "PHP");
//   console.log(result2);
   
//   const result3 = myFunction(arrayOfObjects, "20");
//   console.log(result3);




