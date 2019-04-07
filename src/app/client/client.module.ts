import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { clientRoutingModule } from './client-routing.module';
import { MainComponent } from './main/main.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';


@NgModule({
  declarations: [HeaderComponent, MainComponent, SideNavBarComponent, DeliveriesComponent 
  ],
  imports: [
    CommonModule ,
    clientRoutingModule
  ]
})
export class ClientModule { }