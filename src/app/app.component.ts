import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: "HOME",
        link: "./home",
        index: 0
      },
      {
        label: "ABOUT ME",
        link: "./about",
        index: 1
      },
      {
        label: "PROJECTS",
        link: "./proj",
        index: 2
      },
      {
        label: "CONTACT",
        link: "./contact",
        index: 3
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(tab => tab.link === "." + this.router.url)
      );
    });
  }
}
