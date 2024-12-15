import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Contact} from '../../model/contact';
import {NgbAlert, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-edit-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    NgbAlert,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './edit-contact-form.component.html',
  styles: ``
})
export class EditContactFormComponent implements OnInit {

  @Input()
  protected contactToEdit!: Contact;

  protected editForm: FormGroup | undefined;

  constructor(private fb: FormBuilder,
              private activeModal: NgbActiveModal) {

  }

  ngOnInit(): void {
    console.log('this.contactToEdit', this.contactToEdit);
    this.editForm = this.fb.group({
      firstName: [this.contactToEdit.firstName, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern('[a-zA-Z]+')
      ]],
      lastName: [this.contactToEdit.lastName, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern('[a-zA-Z]+')
      ]],
      phone: [this.contactToEdit.phone, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(15),
        Validators.pattern('[0-9]+')
      ]],
      email: [this.contactToEdit.email, [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]],
      address: [this.contactToEdit.address, [
        Validators.minLength(10),
        Validators.maxLength(120),
      ]]
    });
  }


  onClickSave(): void {
    this.activeModal.close(this.editForm!.value);

  }

  onClickCancel(): void {
    this.activeModal.dismiss("cancel");
  }

  hasControlError(error: 'required' | 'minLength' | 'maxLength' | 'pattern', controlName: 'firstName' | 'lastName' | 'phone' | 'email' | 'address') {
    const formControl = this.getFormControl(controlName);
    return formControl.hasError(error);
  }

  isFormDirtyOrTouched(controlName: 'firstName' | 'lastName' | 'email' | 'phone' | 'address') {
    const formControl = this.getFormControl(controlName);
    return formControl.dirty || !formControl.untouched;
  }

  getControlErrors(controlName: 'firstName' | 'lastName' | 'email' | 'phone' | 'address') {
    const formControl = this.getFormControl(controlName);
    return formControl.errors;
  }

  getFormControl(controlName: 'firstName' | 'lastName' | 'email' | 'phone' | 'address') {
    return this.editForm!.controls[controlName]
  }

  ngOnDestroy(): void {
    console.warn("Component destroyed")
  }
}


