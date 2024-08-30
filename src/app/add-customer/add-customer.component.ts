import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Customerdto } from '../models/customerdto';
import { ApiService } from '../api.service';
import { response } from 'express';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  customerdto: Customerdto = {
    name: '',
    address: {
      streetNumber: '',
      postalCode: '',
    },
    customerType: ''
  };

  constructor(private apiService: ApiService) {}

  onSubmit() {
    if (this.customerdto.name && this.customerdto.address.streetNumber && this.customerdto.address.postalCode && this.customerdto.customerType) {
      // Handle form submission, e.g., send data to the server
      this.apiService.createCustomer(this.customerdto).subscribe(
        response => {
          if (response) {
            alert("Customer created successfully");
          } else {
            alert("Something wrong");
          }
        }
      );
      
    }
  }
}
