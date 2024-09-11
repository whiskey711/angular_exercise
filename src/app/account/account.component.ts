import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  accounts: Account[] = [];
  filterAccounts: Account[] = this.accounts;
  city: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.apiService.getAccounts().subscribe(
      response => this.accounts = response
    );
    this.filterAccounts = this.accounts;
  }

  searchByCity() {
    this.apiService.getAccountByCity(this.city).subscribe(response => this.filterAccounts = response);
    console.log(this.filterAccounts);
  }

  viewAllAccounts() {
    this.filterAccounts = this.accounts;
  } 

  onEnterdown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchByCity();
    }
  }
}
