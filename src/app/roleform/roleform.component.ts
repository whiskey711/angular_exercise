import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { emailValidatorDirective } from "./email-validator.directive";

@Component({
    selector: 'app-roleform',
    templateUrl: './roleform.component.html',
    standalone: true,
    imports: [CommonModule, FormsModule, emailValidatorDirective]
})

export class RoleformComponent {
    applicant = {
        email: '',
        role: '',
        clearedQualityGate: false,
        stream: null
    }

    onSubmit(userForm: any) {
        console.log('Form Submitted!', userForm.value);
    }

}