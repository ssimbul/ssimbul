import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { skills } from "../../models/skill";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],

  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  profile = "../assets/img/portrait2.jpg";
  background = "../assets/img/carleton.jpg";

  skillList: skills[];

  constructor() {
    this.skillList = [
      {
        name: "Full Stack Development",
        type: "1",
        icon: "../assets/skill_icons/fullstack_icon.png"
      },
      {
        name: "Object Oriented Programming",
        type: "1",
        icon: "../assets/skill_icons/oop_icon.png"
      },
      {
        name: "AngularJS",
        type: "1",
        icon: "favicon.ico"
      },
      {
        name: ".NET Frameworks",
        type: "1",
        icon: "../assets/skill_icons/net_icon.png"
      },
      {
        name: "Contentful : Content Mangement API",
        type: "1",
        icon: "../assets/skill_icons/contentful_icon.png"
      },
      {
        name: "Vue.js",
        type: "1",
        icon: "../assets/skill_icons/vue_icon.png"
      },
      {
        name: "mySQL | SQL | LINQ",
        type: "1",
        icon: "../assets/skill_icons/database_icon.png"
      },
      {
        name: "MATLAB",
        type: "1",
        icon: "../assets/skill_icons/matlab_icon.png"
      },
      {
        name: "C#",
        type: "1",
        icon: "../assets/skill_icons/csharp_icon.jpg"
      },
      {
        name: "C++",
        type: "1",
        icon: "../assets/skill_icons/cpp_icon.png"
      },
      {
        name: "C",
        type: "1",
        icon: "../assets/skill_icons/c_icon.jpg"
      },
      {
        name: "Git",
        type: "1",
        icon: "../assets/skill_icons/git_icon.png"
      },
      {
        name:
          "Analog Design & Verfication | Integrated Amplifiers, Filters, Oscillators",
        type: "2",
        icon: "../assets/skill_icons/analog_icon.png"
      },
      {
        name:
          "Digital Design & Verfication | Verilog HDL, System Clocking, UVM, FPGA ",
        type: "2",
        icon: "../assets/skill_icons/digital_icon.png"
      },
      {
        name: "Microcontroller Architecture | Arduino, Node MCU ",
        type: "2",
        icon: "../assets/skill_icons/arduino_icon.png"
      },
      {
        name: "Schematic Interpretation and Debugging",
        type: "2",
        icon: "../assets/skill_icons/circuit_icon.png"
      },
      {
        name: "Xilinx , PSpice, OrCAD Simulation Software",
        type: "2",
        icon: "../assets/skill_icons/xilinx_icon.jpg"
      },
      {
        name: "Oscilliscopes, Multimeters, Spectral & Network Analyzers",
        type: "2",
        icon: "../assets/skill_icons/circuit_icon.png"
      },
      {
        name: "CPU and GPU Architecture | RTL, Assembly",
        type: "2",
        icon: "../assets/skill_icons/circuit_icon.png"
      },
      {
        name: "Communication Theory Knowledge | Signal Processing",
        type: "2",
        icon: "../assets/skill_icons/circuit_icon.png"
      },
      {
        name: "Fast Learner",
        type: "3",
        icon: ""
      },
      {
        name: "Analytical",
        type: "3",
        icon: ""
      },
      {
        name: "Creative",
        type: "3",
        icon: ""
      },
      {
        name: "Collaborative",
        type: "3",
        icon: ""
      },
      {
        name: "Adaptive",
        type: "3",
        icon: ""
      }
    ];
  }

  ngOnInit() {}

  isSoftware(type: string) {
    if (type === "1") {
      return true;
    }
    return false;
  }

  isHardware(type: string) {
    if (type === "2") {
      return true;
    }
    return false;
  }

  isPersonal(type: string) {
    if (type === "3") {
      return true;
    }
    return false;
  }
}
