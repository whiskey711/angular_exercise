import { Component, OnInit } from '@angular/core';
import { Customerdto } from '../models/customerdto';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';

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
  customer: Customer = {
    customerId: 0,
    name: '',
    address: {
      streetNumber: '',
      city: '',
      province: '',
      postalCode: ''
    }
  };
  // city: string | undefined;
  // province: string | undefined;

  constructor(private apiService: ApiService, private actroute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let customerId = this.actroute.snapshot.paramMap.get('id');
    console.log(customerId);
    if (customerId != null) {
      this.apiService.getCustomerById(customerId).subscribe(response => {
        this.customer = response;
      });
      // this.customerdto.address.postalCode = this.customer.address.postalCode;
      // this.city = this.customer.address.city;
      // this.province = this.customer.address.province;
      console.log(this.customerdto);
    } else {
      alert('Something wrong');
    }
  }

  onSubmit() {
    if (this.customer.address.postalCode) {
      // Handle form submission, e.g., send data to the server
      this.customerdto.address.postalCode = this.customer.address.postalCode;
      this.customerdto.name = this.customer.name;
      this.apiService.updateCustomer(this.customerdto, this.customer.customerId).subscribe(
        response => {
          if (response) {
            alert("Customer updated successfully");
            this.router.navigate(['/customer']);
          } else {
            alert("Something wrong");
          }
        }
      );
      
    }
  }
}
