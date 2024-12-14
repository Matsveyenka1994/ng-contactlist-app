import {Component} from '@angular/core';
import {ContactListComponent} from './components/contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  imports: [ContactListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Contacts';
}
