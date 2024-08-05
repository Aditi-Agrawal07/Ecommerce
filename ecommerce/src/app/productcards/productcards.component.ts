import { Component, Input } from '@angular/core';
import { Product } from './Interface/product';

@Component({
  selector: 'app-productcards',
  standalone: true,
  imports: [],
  templateUrl: './productcards.component.html',
  styleUrl: './productcards.component.css'
})
export class ProductcardsComponent {
  hoverIndex: number | null = null;
  @Input()
  products!:Product[]
  casual=[
    {id:'1' , img:"assets/Images/card9.png", title:'T-shrit with Tape Details', rating:"assets/Images/star10.png" , point:'4.5/5', price:'$120',isWishlisted: false  },
   {id:'2' , img:"assets/Images/card10.png", title:'skinny Fit Jeans',rating:"assets/Images/star10.png" , point:'3.5/5', price:'$240' , totalprice:'$260' , discount:'-20%',isWishlisted: false  },
   {id:'3' , img:"assets/Images/card11.png", title:'Checkered Shrit',rating:"assets/Images/star10.png" , point:'4.5/5', price:'$180',isWishlisted: false },
   {id:'4' , img:"assets/Images/card2.png",title:'Sleeve Striped T-shrit', rating:"assets/Images/star10.png" , point:'4.5/5', price:'$130'  , totalprice:'$160' , discount:'-30%' ,isWishlisted: false },
   {id:'5' , img:"assets/Images/card3.png",title:'Sleeve Striped T-shrit', rating:"assets/Images/star10.png" , point:'4.5/5', price:'$130'  , totalprice:'$160' , discount:'-30%' ,isWishlisted: false },
   {id:'6' , img:"assets/Images/card4.png",title:'Sleeve Striped T-shrit', rating:"assets/Images/star10.png" , point:'4.5/5', price:'$130'  , totalprice:'$160' , discount:'-30%' ,isWishlisted: false },
   {id:'7' , img:"assets/Images/card5.png",title:'Sleeve Striped T-shrit', rating:"assets/Images/star10.png" , point:'4.5/5', price:'$130'  , totalprice:'$160' , discount:'-30%' ,isWishlisted: false },
   {id:'8' , img:"assets/Images/card6.png",title:'Sleeve Striped T-shrit', rating:"assets/Images/star10.png" , point:'4.5/5', price:'$130'  , totalprice:'$160' , discount:'-30%' ,isWishlisted: false },
   {id:'9' , img:"assets/Images/card7.png",title:'Sleeve Striped T-shrit', rating:"assets/Images/star10.png" , point:'4.5/5', price:'$130'  , totalprice:'$160' , discount:'-30%' ,isWishlisted: false },
   
   ]
   toggleWishlist(card: any) {
    card.isWishlisted = !card.isWishlisted;
  }
}
