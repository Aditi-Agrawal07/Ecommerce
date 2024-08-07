import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { CustomerComponent } from "./customer/customer.component";
import { HeaderComponent } from './header/header.component';
import { PosterComponent } from './poster/poster.component';
import { BrowseStyleComponent } from "./browse-style/browse-style.component";
import { CardsComponent } from './cards/cards.component';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { AllproductComponent } from './allproduct/allproduct.component';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent, CustomerComponent, HeaderComponent, PosterComponent, 
        BrowseStyleComponent,CardsComponent,ProductDetailComponent,AllproductComponent , HomepageComponent]
})
export class AppComponent {
  title = 'ecommerce';
}
