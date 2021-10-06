import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
 //{path:'product', component:ProductComponent,
 ////children:[
   //{path:'id',
  //component:ProductDetailsComponent}
 //]},


{path:'product',component:ProductComponent},
  {path:'contact',component:ContactComponent},
  {path:'example',redirectTo:'/contact'},
  {path:'productdetail',component:ProductDetailsComponent},
  {path:'product1',component:Product1Component},
  {path:'product2',component:Product2Component},
  {path:'product3',component:Product3Component},

{path:'**',component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
