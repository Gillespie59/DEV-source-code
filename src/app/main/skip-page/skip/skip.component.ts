import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "c3m-skip",
  templateUrl: "./skip.component.html",
  styleUrls: ["./skip.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SkipComponent {
  @Input() id: string;
  @Input() text: string;
}
