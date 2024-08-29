import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bank.component.html'
})
export class BankComponent implements OnInit {
  customers: Customer[] = [
    {customerId: 1, name: "Bruce", address: {
      streetNumber: "1234 Big Street",
      postalCode: "123 abc",
      city: "Gothem",
      province: "New York"
    }},
    {customerId: 2, name: "Clark", address: {
      streetNumber: "9876 Little Ave",
      postalCode: "987 zyx",
      city: "Metropolis",
      province: "New York"
    }}
  ];
  searchId: number = 0;
  filterCustomers = this.customers;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  searchById() {
    if (this.searchId == 0) {
      this.filterCustomers = this.customers;
    } else {
      this.filterCustomers = this.customers.filter(
        c => c.customerId == this.searchId
      );
    }
  }

  getCustomers(): void {
    this.apiService.getCustomers().subscribe(
      response => this.customers = response
    );
    this.filterCustomers = this.customers;
  }

  viewAllCustomer() {
    this.filterCustomers = this.customers;
  } 

  onEnterdown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchById();
    }
  }

  navigateToAddCustomer() {
    this.router.navigate(['/add-customer']);
  }

}
