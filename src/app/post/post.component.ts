import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Item } from '../models/item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  items: Item[] = [];
  newItem: Item = {userId: 0, id: 0, title: '', body: ''};

  constructor(private apiServ: ApiService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.apiServ.getItems().subscribe(
      response => this.items = response
    );
  }

  deleteItem(id: number): void {
    this.apiServ.deleteItem(id).subscribe(() => {
      this.items = this.items.filter((item) => item.id !== id);
    });
  }

  addItem(): void {
    this.apiServ.createItem(this.newItem).subscribe((item) => {
      this.items.push(item);
      this.newItem = { userId: 0, id: 0, title: '', body: '' }; // Reset form
    });
  }
  
}
