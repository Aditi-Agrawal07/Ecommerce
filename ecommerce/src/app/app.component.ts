import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { CustomerComponent } from "./customer/customer.component";
import { HeaderComponent } from './header/header.component';
import { PosterComponent } from './poster/poster.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent, CustomerComponent]


})
export class AppComponent {
  title = 'ecommerce';
}
