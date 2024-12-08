import { Component } from '@angular/core';
import {Contact} from '../../model/contact';
import {ContactListElementComponent} from './contact-list-element/contact-list-element.component';

const CONTACTS : Contact [] = [
  {
    name: "Vasja",
    lastName: "Pupkin",
    phone: "015959599501",
    email: 'vasja.pupkin@gmail.com',
    address: 'Main str 1'
  },
  {
    name: "Maria",
    lastName: "Scmidt",
    phone: "015959599502",
    email: 'maria.schmidt@gmail.com',
    address: 'Main str 2'
  }
]

@Component({
  selector: 'app-contact-list',
  imports: [
    ContactListElementComponent
  ],
  templateUrl: './contact-list.component.html',
  standalone: true,
  styles: ``
})
export class ContactListComponent {
   allContacts : Contact[] = CONTACTS;

}
