import { Component, OnInit, Output, OnChanges } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { UserService } from "../core/services/user.service";
import { User } from "../core/models/user.model";
import { ClientPackagesService } from "../core/services/client-packages.service";
import { Package } from "../core/models/package.model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit, OnChanges {
  constructor(
    private router: Router,
    private userService: UserService,
    private packagesService: ClientPackagesService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSpinner = false;
      }
    });
  }
  @Output() user: User;
  showSpinner: boolean = false;
  showNav: boolean = true;
  show() {
    this.showNav = !this.showNav;
  }
  ngOnInit() {
    //To prevent app crash while refreash th page
    this.showSpinner = true;
    this.userService.getUserData().subscribe(respnse => {
      this.showSpinner = false;
      const currentUser = new User(respnse);
      this.userService.user = currentUser;
      this.packagesService.setPackages(currentUser.packages, false);

      this.user = currentUser;
    });
  }
  ngOnChanges() {
    this.showSpinner = false;
  }
}
