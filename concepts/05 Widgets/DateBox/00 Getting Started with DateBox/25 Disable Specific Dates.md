To prevent users from setting specific dates, use the [disabledDates](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/disabledDates.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#disabledDates') option. It can be set to a function or an array of Date values. In this tutorial, we implement a function that disables weekend days (Saturday and Sunday) and US bank holidays.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...
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
            // ...
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

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-box ...
        [disabledDates]="getDisabledDates">
    </dx-date-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { AppService } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
        holidays: Date[];

        constructor(service: AppService) {
            this.holidays = service.getHolidays();
            this.getDisabledDates = this.getDisabledDates.bind(this);
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDateBox ...
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
        // ...
        methods: {
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
    ];

    class App extends React.Component {
        // ...

        constructor(props) {
            // ...
            this.getDisabledDates = this.getDisabledDates.bind(this);
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

        render() {
            return (
                <DateBox ...
                    disabledDates={this.getDisabledDates}
                />
            );
        }
    }
    export default App;

---

Run the code and ensure that the disabled dates cannot be set.

You have now configured the basic **DateBox** features. For more details on this widget, explore the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview)
* [API Reference](/api-reference/10%20UI%20Widgets/dxDateBox '/Documentation/ApiReference/UI_Widgets/dxDateBox/')
