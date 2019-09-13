import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CardDetailComponent } from './card-detail/card-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'card', component: CardComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: CardDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
