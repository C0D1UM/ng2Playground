import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as moment from 'moment';
import 'flatpickr';
import 'eonasdan-bootstrap-datetimepicker';
import 'bootstrap-daterangepicker';

@Component({
  moduleId: module.id,
  selector: 'datetime-picker',
  templateUrl: 'datetimepicker.component.html',
  styleUrls: ['datetimepicker.component.css']

})
export class datetimePickerComponent implements OnInit {

  ngOnInit() {
    let startDatetimePicker, endDatetimepicker;
    startDatetimePicker = $(".datetimepicker#startDate").flatpickr({
      "mode": "single",
      "time_24hr": true,
      "enableSeconds": true,
      "enableTime": true,
      onChange: function (dateObj, dateStr, instance) {
        let minMoment = moment(dateStr, 'YYYY-MM-DD HH:mm:ss');
        console.debug('minMoment', minMoment);
        endDatetimepicker.set('minDate', dateStr);
      }
    });
    endDatetimepicker = $(".datetimepicker#endDate").flatpickr({
      "mode": "single",
      "time_24hr": true,
      "enableSeconds": true,
      "enableTime": true,
    });


    $('#datetimepicker2').datetimepicker({
      icons: {
        time: 'fa fa-clock-o',
        date: 'fa fa-calendar-o',
        up: 'fa fa-chevron-up',
        down: 'fa fa-chevron-down',
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        clear: 'fa fa-trash'
      }
    });

    $('#daterangepicker1').daterangepicker({
      autoApply: true,
    });
    $('#daterangepicker2').daterangepicker({
      autoUpdateInput: true,
      timePicker: true,
      timePicker24Hour: true,
      timePickerIncrement: 30,
      timePickerSeconds: true,
      locale: {
        format: 'DD MMMM YYYY HH:mm:ss'
      }
    });
    $('#daterangepicker3').daterangepicker({
      autoApply: true,
      singleDatePicker: true,
      timePicker: true,
      timePicker24Hour: true,
      timePickerIncrement: 1,
      timePickerSeconds: true,
      minDate: moment(),
      locale: {
        format: 'DD MMMM YYYY HH:mm:ss'
      }
    });


  }

}