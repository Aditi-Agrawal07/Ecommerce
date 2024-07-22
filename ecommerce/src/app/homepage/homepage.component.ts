import { Component } from '@angular/core';
import { ProductcardsComponent } from '../productcards/productcards.component';
import { PosterComponent } from '../poster/poster.component';
import { BrowseStyleComponent } from '../browse-style/browse-style.component';
import { CardsComponent } from '../cards/cards.component';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from '../header/header.component';
import { CustomerComponent } from "../customer/customer.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [PosterComponent, ProductcardsComponent, BrowseStyleComponent, CardsComponent, FooterComponent, HeaderComponent, FooterComponent, CustomerComponent]
})
export class HomepageComponent {

}
