export class UI {
    constructor(){
        this.employeesList = document.getElementById('employees');
        this.update = document.getElementById('update');
        this.nameInput = document.querySelector('#name');
        this.department = document.querySelector('#department');
        this.salary = document.querySelector('#salary');
    }

    addAllEmployeeToUI(employees) {
        

            // <tr>
            //     <td> Farid Bagirzade </td>

            //     <td> IT </td>

            //     <td> 4000 </td>

            //     <td> 1 </td> 

            //     <td> 
            //           <a href = "#" id = "update-employee" class = "btn btn-danger" > Update </a>
            //     </td>

            //     <td>
            //          <a href = "#" id = "delete-employee" class = "btn btn-danger" > Delete </a>
            //     </td >

            // </tr>

            let result = "";
        
            employees.forEach(employee => {
                result += ` 
                        <tr>
                            <td> ${employee.name} </td>

                            <td> ${employee.department} </td>

                            <td> ${employee.salary} </td>

                            <td> ${employee.id} </td> 

                            <td> 
                                <a href = "#" id = "update-employee" class = "btn btn-danger" > Update </a>
                            </td>

                            <td>
                                <a href = "#" id = "delete-employee" class = "btn btn-danger" > Delete </a>
                            </td >
                        </tr>`
            });


            this.employeesList.innerHTML = result;
    }


    clearInputs(){
        this.nameInput.value = "";
        this.department.value = "";
        this.salary.value = "";
    }

    addEmployeeToUI(newEmp){
        
            this.employeesList.innerHTML += `
                        <tr>
                            <td> ${newEmp.name} </td>

                            <td> ${newEmp.department} </td>

                            <td> ${newEmp.salary} </td>

                            <td> ${newEmp.id} </td> 

                            <td> 
                                <a href = "#" id = "update-employee" class = "btn btn-danger" > Update </a>
                            </td>

                            <td>
                                <a href = "#" id = "delete-employee" class = "btn btn-danger" > Delete </a>
                            </td >
                        </tr>
            `
    }


    deleteEmployeeFromUI(element) {
        element.remove();
    }

    toggleUpdateButton(target){

        if(this.update.style.display === "none"){
            this.update.style.display = "block";
            this.addEmployeeInfoInputs(target);
        }else {
            this.update.style.display = "none";
            this.clearInputs();
        }

    }

    addEmployeeInfoInputs(target){
        const children = target.children;

        this.nameInput.value = children[0].textContent;
        this.department.value = children[1].textContent;
        this.salary.value = children[2].textContent;
    }

    updateEmployeeOnUI(employee,parent){

        parent.innerHTML = `
                <tr>
                            <td> ${employee.name} </td>

                            <td> ${employee.department} </td>

                            <td> ${employee.salary} </td>

                            <td> ${employee.id} </td> 

                            <td> 
                                <a href = "#" id = "update-employee" class = "btn btn-danger" > Update </a>
                            </td>

                            <td>
                                <a href = "#" id = "delete-employee" class = "btn btn-danger" > Delete </a>
                            </td >
                </tr>
        `

        this.clearInputs();

    }
}