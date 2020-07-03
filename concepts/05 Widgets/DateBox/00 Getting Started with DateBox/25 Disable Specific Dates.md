To prevent users from setting specific dates, use the [disabledDates](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#disabledDates) option. It can be set to a function or an array of Date values. In this tutorial, we implement the function, and it disables weekend days and the US bank holidays.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            // ...
            disabledDates: function(args) {
                const dayOfWeek = args.date.getDay();
                const isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6); 
                return isWeekend || isHoliday(args.date);
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
    <dx-date-box ...
        [disabledDates]="getDisabledDates">
    </dx-date-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
        holidays: Date[];

        constructor(service: AppService){
            this.holidays = service.getHolidays();
            this.getDisabledDates = this.getDisabledDates.bind(this);
        }

        onValueChanged(e){
            console.log(e.previousValue);
            console.log(e.value);
        }

        getDisabledDates(args): boolean {
            const dayOfWeek = args.date.getDay();
            const isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 );
            return isWeekend || this.isHoliday(args.date);
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

    export default {
        // ...
        methods: {
            getDisabledDates(args) {
                const dayOfWeek = args.date.getDay();
                const isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 );
                return isWeekend || this.isHoliday(args.date);
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

    class App extends React.Component {
        // ...

        constructor(props) {
            // ...
            this.getDisabledDates = this.getDisabledDates.bind(this);
        }

        getDisabledDates(args) {
            const dayOfWeek = args.date.getDay();
            const isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 );
            return isWeekend || this.isHoliday(args.date);
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

Run the code and ensure the disabled dates cannot be set.

You have configured basic **DateBox** features. To take a more detailed look at this widget, explore the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview)
* [API Reference](/Documentation/ApiReference/UI_Widgets/dxDateBox/)