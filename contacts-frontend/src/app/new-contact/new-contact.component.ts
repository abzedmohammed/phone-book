import { Component } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {

  form: any = {
    first_name:  '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    avatar: '',
    custom_date: '',
    custom_date_label: '',
    relationship: '',
  };

  isLoading = false;
  errorMessage = '';

  constructor(private contactService: ContactService) { }

  onSubmit(): void {
    this.isLoading = true;
    const data = {
      first_name: this.form.first_name,
      last_name: this.form.last_name || null,
      email: this.form.email || null,
      phone: this.form.phone,
      address: this.form.address || null,
      city: this.form.city || null,
      avatar: this.form.avatar || null,
      custom_date: this.form.custom_date || null,
      custom_date_label: this.form.custom_date_label || null,
      relationship: this.form.relationship || null,
  }

  this.contactService.newContact(data).pipe(first()).subscribe(
    data => {
      this.isLoading = false;
      this.reloadPage();
    },
    err => {
      this.isLoading = false;
      this.errorMessage = err.error;
      console.log(this.errorMessage);        
    }
  ); 
  }

  reloadPage(){
    window.location.reload();
    window.location.href = '/'
  }

}
