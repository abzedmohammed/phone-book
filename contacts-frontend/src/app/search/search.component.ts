import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  // @Output() public found = new EventEmitter<any>();

  value: string = ''

  searchName(data: string) {
    this.value = data;
    console.log(this.value);
    
  }
}
