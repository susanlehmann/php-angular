import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgxTuiCalendarComponent } from 'ngx-tui-calendar';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    defaultView: 'week';
    useCreationPopup: true;
    useDetailPopup: true;
    calendars = [{'id': '1', 'name': 'My Calendar', 'checked': true, 'color': '#ffffff', 'bgColor': '#9e5fff', 'borderColor': '#9e5fff', 'dragBgColor': '#9e5fff'}, {'id': '2', 'name': 'Company', 'checked': true, 'color': '#ffffff', 'bgColor': '#00a9ff', 'borderColor': '#00a9ff', 'dragBgColor': '#00a9ff'}, {'id': '3', 'name': 'Family', 'checked': true, 'color': '#ffffff', 'bgColor': '#ff5583', 'borderColor': '#ff5583', 'dragBgColor': '#ff5583'}, {'id': '4', 'name': 'Friend', 'checked': true, 'color': '#ffffff', 'bgColor': '#03bd9e', 'borderColor': '#03bd9e', 'dragBgColor': '#03bd9e'}, {'id': '5', 'name': 'Travel', 'checked': true, 'color': '#ffffff', 'bgColor': '#bbdc00', 'borderColor': '#bbdc00', 'dragBgColor': '#bbdc00'}, {'id': '6', 'name': 'etc', 'checked': true, 'color': '#ffffff', 'bgColor': '#9d9d9d', 'borderColor': '#9d9d9d', 'dragBgColor': '#9d9d9d'}, {'id': '7', 'name': 'Birthdays', 'checked': true, 'color': '#ffffff', 'bgColor': '#ffbb3b', 'borderColor': '#ffbb3b', 'dragBgColor': '#ffbb3b'}, {'id': '8', 'name': 'National Holidays', 'checked': true, 'color': '#ffffff', 'bgColor': '#ff4040', 'borderColor': '#ff4040', 'dragBgColor': '#ff4040'}];
    milestone: `<span class="calendar-font-icon ic-milestone-b"></span> <span style="background-color: ' + model.bgColor + '">' + model.title + '</span>'`;
    allday = `<strong>00:00</strong> <span class="calendar-font-icon ic-user-b"></span> Za pat conepa.`;
    time = `<strong>02:00</strong> <span class="calendar-font-icon ic-repeat-b"></span> Jujoj hi lo.`;
    template = {milestone : this.milestone, allday : this.allday, time : this.time};

    @ViewChild('exampleCalendar') exampleCalendar: NgxTuiCalendarComponent;

    constructor() {}

    onTuiCalendarCreate($event) {
    /* at this point the calendar has been created and it's methods are available via the ViewChild defined above, so for example you can do: */
    this.exampleCalendar.createSchedules([/* populated schedules array goes here*/]);
    console.log('lul');
    }

    ngOnInit() {
    }
}
