import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { CustomerComponent } from "./customer/customer.component";
import { HeaderComponent } from './header/header.component';
import { PosterComponent } from './poster/poster.component';
import { BrowseStyleComponent } from "./browse-style/browse-style.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent, CustomerComponent, HeaderComponent, PosterComponent, BrowseStyleComponent, ProductDetailComponent]
})
export class AppComponent {
  title = 'ecommerce';
}
