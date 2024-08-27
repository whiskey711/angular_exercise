import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Handle form submission
    if (this.username === 'FDMUser' && this.password === '1234') {
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  }
}
