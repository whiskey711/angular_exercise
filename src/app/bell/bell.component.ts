import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-bell',
    standalone: true,
    imports: [
        RouterOutlet, CommonModule
    ],
    templateUrl: './bell.component.html'
})

export class BellComponent {
    subscribed: boolean = false;
    bellEmpty: string = "Bell empty";
    bellfill: string = "Bell filled";

    toggleSubscription() {
        this.subscribed = !this.subscribed;
    }
}

