import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ClientPackagesService } from '../core/services/client-packages.service';
import { UserService } from '../core/services/user.service';
import { Package } from '../core/models/package.model';
//import { Router, RouterModule, Routes } from '@angular/router';
 

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
}) 



export class DeliveriesComponent implements OnInit {
 
   id :number;
    
   userPackages : [{}] ; 

  constructor(
    private router : Router , 
    private packagesService:ClientPackagesService , 
    private userServives :UserService
    ) {
        
     
     }

  ngOnInit() {
   // this.packagesService.getUserpackages();
   this.packagesService.getAllPackage().subscribe((r:Array<Package>)=>
   { 
   console.log(r);

  }
   )
   
    console.log(this.packages) ;
  }
  packages : Array<Package> = this.packagesService.getUserpackages() ; 
  
  
  


    openPackage( inpackage :Package){
    
    
      this.id=inpackage.id ; 
  
    }
    
  

}
