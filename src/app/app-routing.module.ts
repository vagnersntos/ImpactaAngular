import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { OutputPaiComponent } from './output-pai/output-pai.component';
import { PaiComponent } from './pai/pai.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component'
import { TwoWayComponent } from './two-way/two-way.component';

const routes: Routes = [
  {path:'interpolation', component:InterpolationComponent},
  {path:'property-binding', component:PropertyBindingComponent},
  {path:'event-binding', component:EventBindingComponent},
  {path:'two-way', component:TwoWayComponent},
  {path:'pai', component:PaiComponent},
  {path:'output-pai', component:OutputPaiComponent},
  {path:'ng-if', component:NgIfComponent},
  {path:'ng-for', component:NgForComponent},
  {path:'ng-class', component:NgClassComponent},
  {path:'ng-style', component:NgStyleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
