import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  profileForm = this.fb.group({
    names: this.fb.array([this.fb.control("")])
  });

  ngOnInit() {
    console.log("ngOnInit baby!!!");
  }

  get names() {
    return this.profileForm.get("names") as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  updateProfile() {
    this.profileForm.patchValue({
      firstName: "Nancy",
      address: {
        street: "123 Drew Street"
      }
    });
  }

  addAlias() {
    this.names.push(this.fb.control(""));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
