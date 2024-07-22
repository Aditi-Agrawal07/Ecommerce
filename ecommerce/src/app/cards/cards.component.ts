import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AllproductComponent } from '../allproduct/allproduct.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [ProductDetailComponent  , AllproductComponent, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  hoverIndex: number | null = null;

  NewArrivals =[
{id:'1' , img:"assets/Images/card1.png", title:'T-shrit with Tape Details', rating:"assets/Images/star10.png" , point:'4.5/5', price:'$120',isWishlisted: false  },
{id:'2' , img:"assets/Images/card2.png", title:'skinny Fit Jeans',rating:"assets/Images/star10.png" , point:'3.5/5', price:'$240' , totalprice:'$260' , discount:'-20%',isWishlisted: false  },
{id:'3' , img:"assets/Images/card3.png", title:'Checkered Shrit',rating:"assets/Images/star10.png" , point:'4.5/5', price:'$180',isWishlisted: false },
{id:'4' , img:"assets/Images/card4.png",title:'Sleeve Striped T-shrit', rating:"assets/Images/star10.png" , point:'4.5/5', price:'$130'  , totalprice:'$160' , discount:'-30%' ,isWishlisted: false },

  ]
  TopSelling=[
    {id:'1' , img:"assets/Images/card5.png", title:'Vertical Striped Shrit', rating:"assets/Images/star10.png" , point:'5.0/5', price:'$212' , totalprice:'$232' , discount:'-20%' ,isWishlisted: false   },
{id:'2' , img:"assets/Images/card6.png", title:'Courage Graphic T-shrit',rating:"assets/Images/star10.png" , point:'4.5/5', price:'$145' ,isWishlisted: false  },
{id:'3' , img:"assets/Images/card7.png", title:'Loose Fit Bermuda Shorts',rating:"assets/Images/star10.png" , point:'3.5/5', price:'$80' ,isWishlisted: false },
{id:'4' , img:"assets/Images/card8.png",title:'Faded Skinny Jeans', rating:"assets/Images/star10.png" , point:'4.5/5', price:'$210' ,isWishlisted: false  },
  ]
  toggleWishlist(card: any) {
    card.isWishlisted = !card.isWishlisted;
  }
}
