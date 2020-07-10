#include tutorials-intro-installationnote

**DateBox** is a widget that allows users to set a certain date, time, or date/time combination.

This tutorial shows how to configure basic **DateBox** features. The newly created widget allows users to set the date and time from a specific date range, logs this value to the console, and prevents users from specifying weekend days (Saturday and Sunday) and US bank holidays.

<div class="simulator-desktop-container" data-view="/Content/Applications/20_1/GettingStartedWith/DateBox/index.html, /Content/Applications/20_1/GettingStartedWith/DateBox/index.js, /Content/Applications/20_1/GettingStartedWith/DateBox/index.css"></div>


Refer to the subtopics for details on each configuration step. You can also see the full code below or download it from the following GitHub repository: <a href="https://github.com/DevExpress-Examples/getting-started-with-datebox" target="_blank">getting-started-with-datebox</a>:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const now = new Date();
        const holidays = [
            new Date(0, 0, 1),
            new Date(0, 0, 20),
            new Date(0, 1, 17),
            new Date(0, 4, 10),
            new Date(0, 4, 25),
            new Date(0, 5, 21),
            new Date(0, 6, 4),
            new Date(0, 8, 7),
            new Date(0, 9, 5),
            new Date(0, 9, 12),
            new Date(0, 10, 11),
            new Date(0, 10, 26),
            new Date(0, 10, 27),
            new Date(0, 11, 24),
            new Date(0, 11, 25),
            new Date(0, 11, 31)
        ];

        $("#dateBoxContainer").dxDateBox({
            type: "datetime",
            max: now,
            min: new Date(1900, 0, 1),
            value: now,
            onValueChanged: function(e) {
                console.log(e.value);
                console.log(e.previousValue);
            },
            disabledDates: function(args) {
                const dayOfWeek = args.date.getDay();
                const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; 
                return args.view === "month" && (isWeekend || isHoliday(args.date)); 
            }
        });

        function isHoliday(date) {
            for (let holiday of holidays) {
                if (date.getDate() === holiday.getDate() && date.getMonth() === holiday.getMonth()) {
                    return true;
                }          
            }
            return false;
        }
    });

    <!-- tab: index.html -->
    <!DOCTYPE html>
    <html>
        <head>
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/20.1.4/css/dx.common.css">
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/20.1.4/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/20.1.4/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="dateBox"></div>
        </body>
    </html>

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-box    
        type="datetime"
        [min]="minDate"
        [max]="now"
        [value]="now"
        (onValueChanged)="onValueChanged($event)"
        [disabledDates]="getDisabledDates">
    </dx-date-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { AppService  } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        title = 'Getting started with DateBox';
        holidays: Date[];
        now: Date = new Date();
        minDate: Date = new Date(1900, 0, 1);

        constructor(service: AppService) {
            this.holidays = service.getHolidays();
            this.getDisabledDates = this.getDisabledDates.bind(this);
        }

        onValueChanged(e) {
            console.log(e.previousValue);
            console.log(e.value);
        }

        getDisabledDates(args): boolean {
            const dayOfWeek = args.date.getDay();
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            return args.view === "month" && (isWeekend || this.isHoliday(args.date));
        }

        isHoliday(date): boolean {
            for (let holiday of this.holidays) {
                if (date.getDate() === holiday.getDate() && date.getMonth() === holiday.getMonth()) {
                    return true;
                }          
            }
            return false;
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    const holidays = [
        new Date(0, 0, 1),
        new Date(0, 0, 20),
        new Date(0, 1, 17),
        new Date(0, 4, 10),
        new Date(0, 4, 25),
        new Date(0, 5, 21),
        new Date(0, 6, 4),
        new Date(0, 8, 7),
        new Date(0, 9, 5),
        new Date(0, 9, 12),
        new Date(0, 10, 11),
        new Date(0, 10, 26),
        new Date(0, 10, 27),
        new Date(0, 11, 24),
        new Date(0, 11, 25),
        new Date(0, 11, 31)
    ];

    @Injectable()
    export class AppService {

        getHolidays(): Date[] {
            return holidays;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDateBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDateBoxModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDateBox
            type="datetime"
            :min="minDate"
            :max="now"
            :value="now"
            @value-changed="onValueChanged"
            :disabled-dates="getDisabledDates"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateBox } from 'devextreme-vue/date-box';

    const holidays = [
        new Date(0, 0, 1),
        new Date(0, 0, 20),
        new Date(0, 1, 17),
        new Date(0, 4, 10),
        new Date(0, 4, 25),
        new Date(0, 5, 21),
        new Date(0, 6, 4),
        new Date(0, 8, 7),
        new Date(0, 9, 5),
        new Date(0, 9, 12),
        new Date(0, 10, 11),
        new Date(0, 10, 26),
        new Date(0, 10, 27),
        new Date(0, 11, 24),
        new Date(0, 11, 25),
        new Date(0, 11, 31)
    ]

    export default {
        components: {
            DxDateBox
        },
        data() {
            return {
                now: Date(),
                minDate: new Date(1900, 0, 1)
            }
        },
        methods: {
            onValueChanged(e) {
                console.log(e.previousValue);
                console.log(e.value);
            },
            getDisabledDates(args) {
                const dayOfWeek = args.date.getDay();
                const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                return args.view === "month" && (isWeekend || this.isHoliday(args.date));
            },
            isHoliday(date) {
                for (let holiday of holidays) {
                    if (date.getDate() === holiday.getDate() && date.getMonth() === holiday.getMonth()) {
                        return true;
                    }          
                }
                return false;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DateBox } from 'devextreme-react/date-box';

    const holidays = [
        new Date(0, 0, 1),
        new Date(0, 0, 20),
        new Date(0, 1, 17),
        new Date(0, 4, 10),
        new Date(0, 4, 25),
        new Date(0, 5, 21),
        new Date(0, 6, 4),
        new Date(0, 8, 7),
        new Date(0, 9, 5),
        new Date(0, 9, 12),
        new Date(0, 10, 11),
        new Date(0, 10, 26),
        new Date(0, 10, 27),
        new Date(0, 11, 24),
        new Date(0, 11, 25),
        new Date(0, 11, 31)
    ]

    class App extends React.Component {
        now = new Date();
        minDate = new Date(1900, 0, 1);

        constructor(props) {
            super(props);
            this.state = {
                dateBoxValue: this.now
            };
            this.getDisabledDates = this.getDisabledDates.bind(this);
            this.onValueChanged = this.onValueChanged.bind(this);
        }

        getDisabledDates(args) {
            const dayOfWeek = args.date.getDay();
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            return args.view === "month" && (isWeekend || this.isHoliday(args.date));
        }

        isHoliday(date) {
            for (let holiday of holidays) {
                if (date.getDate() === holiday.getDate() && date.getMonth() === holiday.getMonth()) {
                    return true;
                }          
            }
            return false;
        }

        onValueChanged(e) {
            console.log(e.previousValue);
            console.log(e.value);
            this.setState({
                dateBoxValue: e.value
            });
        } 

        render() {
            return (
                <DateBox      
                    type="datetime"
                    min={this.minDate}
                    max={this.now}
                    value={this.state.dateBoxValue}
                    onValueChanged={this.onValueChanged}
                    disabledDates={this.getDisabledDates}
                />
            );
        }
    }
    export default App;

---