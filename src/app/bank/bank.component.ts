import { Component, importProvidersFrom, OnInit } from '@angular/core';
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
  customers: Customer[] = [];
  searchId: number|undefined = undefined;
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

  navigateToUpdateCustomer(id: number) {
    this.router.navigate(['/update-customer', id]);
  }

  deleteCustomer(id: number): void {
    let confirmation = confirm('Are you sure you want to delete this customer?');
    if (confirmation) {
      this.apiService.deleteCustomer(id).subscribe(response => console.log(response));
      alert('Customer deleted successfully.');
      window.location.reload();
    }
  }
}
