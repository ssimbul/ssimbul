import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  first = "Spencer ";
  last = "Simbul";
  profile = "../assets/img/profile-removebg-preview.png";
  background = "..assets/img/background.jpg";
}
