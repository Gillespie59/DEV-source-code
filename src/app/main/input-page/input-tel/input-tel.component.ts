import { Component, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "c3m-input-tel",
  templateUrl: "./input-tel.component.html",
  styleUrls: ["./input-tel.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class InputTelComponent {
  // Inputs
  @Input() title;
  @Input() placeholder = "";
  @Input() name;
  @Input() id = "";
}
