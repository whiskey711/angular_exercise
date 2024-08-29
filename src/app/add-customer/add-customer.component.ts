import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  customer = {
    name: '',
    streetNumber: '',
    postalCode: '',
    customerType: ''
  };

  onSubmit() {
    if (this.customer.name && this.customer.streetNumber && this.customer.postalCode && this.customer.customerType) {
      // Handle form submission, e.g., send data to the server
      console.log('Customer data:', this.customer);
      alert('Customer added successfully!');
    }
  }
}
