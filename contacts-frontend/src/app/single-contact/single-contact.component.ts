import { Component } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent {

  contact = JSON.parse( sessionStorage.getItem('contact') || '{}' )

  form: any = {
    first_name:  this.contact.first_name,
    last_name: this.contact.last_name,
    email: this.contact.email,
    phone: this.contact.phone,
    address: this.contact.address,
    city: this.contact.city,
    avatar: this.contact.avatar,
    custom_date: this.contact.custom_date,
    custom_date_label: this.contact.custom_date_label,
    relationship: this.contact.relationship,
  };

  isLoading = false;
  errorMessage = '';

  
  

  constructor(private contactService: ContactService) { }

  onSubmit(id): void {
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

  this.contactService.updateSingleContacts(id, data).pipe(first()).subscribe(
    data => {
      this.isLoading = false;
      sessionStorage.setItem('contact', JSON.stringify(data));
      this.reloadPage();
    },
    err => {
      this.isLoading = false;
      this.errorMessage = err.error;
      console.log(this.errorMessage);        
    }
  ); 
}

onDelete(id): void {
  this.isLoading = true;
  this.contactService.deleteSingleContacts(id).pipe(first()).subscribe(
    data => {
      this.isLoading = false;
      sessionStorage.clear();
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
}

  ngOnInit(): void {

  }
}
