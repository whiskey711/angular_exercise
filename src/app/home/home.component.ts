import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { BellComponent } from '../bell/bell.component';
import { RoleformComponent } from '../roleform/roleform.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CapitalizeWordsPipe } from '../pipes/capitalize-words.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, FormsModule, BellComponent, RoleformComponent, RouterOutlet, CommonModule, CapitalizeWordsPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'angular_exercise';
  items = ['item_0', 'item_1', 'item_2'];

  labelContent: string = "";
}
