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
}

function getAllEmployees(){

    request.get()
    .then(employees => {
        ui.addAllEmployeeToUI(employees)
    })
    .catch(err => console.log(err))

}