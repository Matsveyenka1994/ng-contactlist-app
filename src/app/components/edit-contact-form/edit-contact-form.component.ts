import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Contact} from '../../model/contact';
import {NgbAlert, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    NgbAlert,
    ReactiveFormsModule
  ],
  templateUrl: './edit-contact-form.component.html',
  styles: ``
})
export class EditContactFormComponent {

  @Input()
  protected contactToEdit!: Contact;

  protected editForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal) {
    this.editForm = this.fb.group({
      firstName: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern('[a-zA-Z]+')
      ]],
      lastName: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern('[a-zA-Z]+')
      ]],
      phone: [null, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(15),
        Validators.pattern('[0-9]+')
      ]],
      email: [null, [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]],
      address: [null, [
        Validators.minLength(10),
        Validators.maxLength(120),
      ]]
    });
  }

  onClickSave() {
    if (this.editForm?.valid) {
      this.activeModal.close(this.editForm.value);
    } else {
      // Optional: Add validation error handling here
    }
  }

  onClickCancel() {
    this.activeModal.dismiss("cancel");
  }
}

