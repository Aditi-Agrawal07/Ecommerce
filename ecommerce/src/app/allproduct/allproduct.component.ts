import { Component, OnInit ,HostListener } from '@angular/core';
import { ProductcardsComponent } from '../productcards/productcards.component';
import { ProductService } from '../product.service';
// import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [ProductcardsComponent ,FormsModule,CommonModule],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.css'
})
export class AllproductComponent {
  // showFilter = false;
  
  // toggleFilter() {
  //   this.showFilter = !this.showFilter;
  // }
  showFilters: boolean = false;
  isMobileScreen: boolean = false;

  filter = {
    priceRange: 50,
    
  };


 constructor(private productService: ProductService){}

 products!: []
  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
    const data = this.productService.getAllProducts().subscribe((response)=>{
      this.products = response 
    });
  }
  checkScreenSize() {
    this.isMobileScreen = window.innerWidth <= 768;
    if (!this.isMobileScreen) {
      this.showFilters = true; // Always show filters on larger screens
    }
  }
  toggleFilters() {
    if (this.isMobileScreen) {
      this.showFilters = !this.showFilters;
    }
  }


  onSubmit(form: any) {
    console.log('Form Submitted!', form.value);
    // Perform actions with the form data
  }
}

