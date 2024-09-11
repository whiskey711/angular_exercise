import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { BankComponent } from './bank/bank.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'post', component: PostComponent },
  { path: 'customer', component: BankComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'update-customer/:id', component: UpdateCustomerComponent },
  { path: 'account', component: AccountComponent },

];
