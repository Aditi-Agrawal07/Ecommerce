import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
   {path:" ", component:HomepageComponent},
    {path: 'productDetails' , component:ProductDetailComponent},
    {path:'allProducts' , component:AllproductComponent}
];
