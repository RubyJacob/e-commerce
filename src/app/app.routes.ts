import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products',component:ProductComponent},
    {path:'contact',component:ContactComponent},
    {path:'products/:id',component :SingleComponent}

];
