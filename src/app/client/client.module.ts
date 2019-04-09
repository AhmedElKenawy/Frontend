import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { clientRoutingModule } from './client-routing.module';
import { MainComponent } from './main/main.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { PackagesComponent } from './packages/packages.component';
import { CaptinProfileComponent } from './captin-profile/captin-profile.component';


@NgModule({
  declarations: [HeaderComponent, MainComponent, SideNavBarComponent, DeliveriesComponent, PackagesComponent, CaptinProfileComponent 
  ],
  imports: [
    CommonModule ,
    clientRoutingModule
  ]
})
export class ClientModule { }
