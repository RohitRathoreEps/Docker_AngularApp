import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map, of } from 'rxjs';
import { EmployeeServices } from '../../../services/employee-services';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

public data:any;
constructor(private employeeServices:EmployeeServices) {
  

}

getData() {

  this.employeeServices.getEmployees().subscribe((data) => {
    this.data = data;
    console.log(this.data);
  });
}

}