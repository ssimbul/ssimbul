import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  first = "Spencer ";
  last = "Simbul";
  profile = "../assets/img/profile-removebg-preview.png";
  background = "..assets/img/background.jpg";

  constructor() {}

  ngOnInit() {}
}
