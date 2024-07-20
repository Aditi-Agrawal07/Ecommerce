import { Component } from '@angular/core';
import { ProductcardsComponent } from '../productcards/productcards.component';

@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [ProductcardsComponent],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.css'
})
export class AllproductComponent {

}
