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
        label: "EDUCATION",
        link: "./edu",
        index: 1
      },
      {
        label: "EXPERIENCE",
        link: "./exp",
        index: 2
      },
      {
        label: "PROJECTS",
        link: "./proj",
        index: 3
      },
      {
        label: "CONTACT",
        link: "./contact",
        index: 4
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
