import { Component, OnInit } from '@angular/core';
import { Customerdto } from '../models/customerdto';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit {
  customerdto: Customerdto = {
    name: '',
    address: {
      streetNumber: '',
      postalCode: '',
    },
    customerType: ''
  };

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let customerId = this.route.snapshot.paramMap.get('id');
    // this.apiService.getCustomerById(customerId).subscribe((data: Customer) => {
    //   this.customer = data;
    // });
    console.log(customerId);
  }

  onSubmit() {
    if (this.customerdto.name && this.customerdto.address.streetNumber && this.customerdto.address.postalCode && this.customerdto.customerType) {
      // Handle form submission, e.g., send data to the server
      this.apiService.createCustomer(this.customerdto).subscribe(
        response => {
          if (response) {
            alert("Customer created successfully");
            window.location.reload();
          } else {
            alert("Something wrong");
          }
        }
      );
      
    }
  }
}
