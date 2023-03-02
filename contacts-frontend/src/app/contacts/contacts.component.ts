import { Component, Input } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { FilterPipe } from '../filter.pipe';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  @Input() value: any

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return ('000000' + color).slice(-6);
  }

  contacts?: any;
  isLoading?: boolean = false;
  constructor(private contactService: ContactService) { }

  singleContact(id: any){
    this.contactService.getSingleContacts(id).subscribe(
      data => {
        sessionStorage.setItem('contact', JSON.stringify(data));
        window.location.reload()
        
      },
      err => {
        console.log(err);
        
      }
    );
  }


  ngOnInit(): void {
    console.log(this.value);
    
    this.isLoading = true
    this.contactService.getContacts().subscribe(
      data => {
        this.isLoading = false
        this.contacts = data
        if (this.value) {
          this.contacts.filter(item => item.first_name.toLowerCase().includes( this.value.toLowerCase()))
        }

      },
      err => {
        this.isLoading = false
        console.log(err);
        
      }
    );

  }

}
