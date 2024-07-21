import { Component } from '@angular/core';
import { ProductcardsComponent } from '../productcards/productcards.component';
import { PosterComponent } from '../poster/poster.component';
import { BrowseStyleComponent } from '../browse-style/browse-style.component';
import { CardsComponent } from '../cards/cards.component';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [PosterComponent, ProductcardsComponent, BrowseStyleComponent, CardsComponent, FooterComponent, HeaderComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
