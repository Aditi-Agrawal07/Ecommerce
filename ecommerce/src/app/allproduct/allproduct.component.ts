import { Component, OnInit } from '@angular/core';
import { ProductcardsComponent } from '../productcards/productcards.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [ProductcardsComponent],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.css'
})
export class AllproductComponent {
 constructor(private productService: ProductService){}
 products!: []
  ngOnInit() {
    const data = this.productService.getAllProducts().subscribe((response)=>{
      this.products = response 
    });
   

    
  }


  

}
