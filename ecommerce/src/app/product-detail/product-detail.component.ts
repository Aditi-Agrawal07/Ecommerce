import { NgClass, NgStyle } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [NgStyle,NgClass],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  constructor(private renderer: Renderer2){}

  colors: string[] = ['#314F4A', '#31344F', '#4F4631'];
  selectedColor: string | null = null;

  sizes: string[] = ["Small", "Medium", "Large", "X-Large"]
  selectedSize: string | null = null;


  selectedImage: string = "../../assets/Images/product1/image1.png";
  previousElement: any

  counter = 0;

  
  selectImage(event:any){
    if(this.previousElement){
      this.renderer.removeClass(this.previousElement, 'selected')
    }
    this.selectedImage = event.target.src
    this.renderer.addClass(event.target, 'selected')
   this.previousElement = event.target
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  selectSize(size: string){
    this.selectedSize = size

  }

  decrement(){
   if(this.counter > 0){
    this.counter--;
   }
  }
  increment(){
    this.counter++;
  }

}
