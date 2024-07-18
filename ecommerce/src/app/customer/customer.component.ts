import { Component, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// register Swiper custom elements

register();

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerComponent {


  

  

  nextbtnClick(){
   

  }

  prevbtnClick(){
   
  }



}
