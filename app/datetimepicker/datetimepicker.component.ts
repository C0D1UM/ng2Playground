import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'flatpickr';
//declare var $: JQueryStatic;

@Component({
  moduleId: module.id,
  selector: 'datetime-picker',
  templateUrl: 'datetimepicker.component.html'
})
export class datetimePickerComponent implements OnInit {

  ngOnInit() {
    $(".datetimepicker").flatpickr({
      //"mode": "single",
      //"time_24hr": true,
      //"enableSeconds": true,
      //"enableTime": true
    });
  }

}