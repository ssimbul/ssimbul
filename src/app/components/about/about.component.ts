import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  profile = "../assets/img/placeholder.png";
  background = "../assets/img/carleton.jpg";

  constructor() {}

  ngOnInit() {}
}
