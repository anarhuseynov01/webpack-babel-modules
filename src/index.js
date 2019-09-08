import {Request} from './request';
import {UI} from './ui';

// choose elements
const form = document.querySelector('#employee-form');
const nameInput = document.querySelector('#name');
const department = document.querySelector('#department');
const salary = document.querySelector('#salary');
const employeesList = document.querySelector("#employees");
const update = document.querySelector("#update");


const request = new Request("http://localhost:3000/employees");
const ui = new UI();



// request.get()
// .then(res => console.log(res))
// .catch(err => console.log(err));


// request.post({
//     name: "Farid Abasov",
//     department: "IT",
//     salary: 6000
// })
// .then(res => console.log(res))
// .catch(err => console.log(err));


// request.put(1,{
//     name: "Anar Huseynov",
//     department: "IT",
//     salary: 2000
// })
// .then(res => console.log(res))
// .catch(err => console.log(err));

// request.delete(3)
// .then(res => console.log(res))
// .catch(err => console.log(err));



eventListeners();


function eventListeners(){
    document.addEventListener('DOMContentLoaded',getAllEmployees);
    form.addEventListener('submit',addEmployee)
    employeesList.addEventListener('click',UpdateOrDelete)
}

function getAllEmployees(){

    request.get()
    .then(employees => {
        ui.addAllEmployeeToUI(employees)
    })
    .catch(err => console.log(err))

}


function addEmployee(e){

    const employeeName = nameInput.value.trim();
    const employeeDepartment = department.value.trim();
    const employeeSalary = salary.value.trim();


    if(employeeName == "" || employeeDepartment == "" || employeeSalary == ""){
        alert("Please enter all fields!");
    }else {
        request.post({
            name: employeeName,
            department: employeeDepartment,
            salary: Number(employeeSalary)
        })
        .then(newemp => {
            ui.addEmployeeToUI(newemp);
        })
        .catch(err => console.log(err))
    }

    ui.clearInputs();
    e.preventDefault();
}


function UpdateOrDelete(e){
    if(e.target.id === "delete-employee"){
        deleteEmployee(e.target);
    }
    else if (e.target.id === "update-employee"){

    }
}


function deleteEmployee(targetEmployee) {
    const id = Number(targetEmployee.parentElement.previousElementSibling.previousElementSibling.textContent);
    request.delete(id)
    .then(message => {
        ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement);
    })
    .catch(err => console.log(err))
}