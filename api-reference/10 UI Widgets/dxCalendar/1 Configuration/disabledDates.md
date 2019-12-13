---
id: dxCalendar.Options.disabledDates
type: Array<Date> | function(data)
default: null
---
---
##### shortDescription
Specifies dates to be disabled.

##### param(data): Object
Information about the checked date.

##### field(data.component): Object
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Methods/#instance').

##### field(data.date): Date
The currently checked date.

##### field(data.view): String
The current view.

##### return: Boolean
**true** if the date should be disabled; otherwise **false**.

---
This option accepts an array of dates...

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#calendarContainer").dxCalendar({
            // ...
            disabledDates: [ 
                new Date("07/1/2017"),  
                new Date("07/2/2017"), 
                new Date("07/3/2017") 
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-calendar ...
        [disabledDates]="disabledDates">
    </dx-calendar>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        disabledDates: Date[] = [ 
            new Date("07/1/2017"),  
            new Date("07/2/2017"), 
            new Date("07/3/2017") 
        ];
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxCalendarModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxCalendarModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-calendar ...
            :disabled-dates="disabledDates"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxCalendar from 'devextreme-vue/calendar';

    export default {
        components: {
            DxCalendar
        },
        data() {
            return {
                disabledDates: [ 
                    new Date("07/1/2017"),  
                    new Date("07/2/2017"), 
                    new Date("07/3/2017") 
                ]
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Calendar from 'devextreme-react/calendar';

    class App extends React.Component {
        constructor() {
            this.disabledDates = [ 
                new Date("07/1/2017"),  
                new Date("07/2/2017"), 
                new Date("07/3/2017") 
            ];
        }
        render() {
            return (
                <Calendar ...
                    disabledDates={this.disabledDates} 
                />
            );
        }
    }
    export default App;

---

... or a function that specifies whether the currently checked date is disabled.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#calendarContainer").dxCalendar({
            // ...
            disabledDates: function(args) {
                var dayOfWeek = args.date.getDay(),
                    month = args.date.getMonth(),
                    isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 ),
                    isMarch = (args.view === "year" || args.view === "month") && month === 2;

                return isWeekend || isMarch;
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-calendar ...
        [disabledDates]="disableDates">
    </dx-calendar>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        disableDates(args) {
            var dayOfWeek = args.date.getDay(),
                month = args.date.getMonth(),
                isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 ),
                isMarch = (args.view === "year" || args.view === "month") && month === 2;

            return isWeekend || isMarch;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxCalendarModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxCalendarModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-calendar ...
            :disabled-dates="disableDates"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxCalendar from 'devextreme-vue/calendar';

    export default {
        components: {
            DxCalendar
        },
        methods: {
            disableDates(args) {
                var dayOfWeek = args.date.getDay(),
                    month = args.date.getMonth(),
                    isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 ),
                    isMarch = (args.view === "year" || args.view === "month") && month === 2;

                return isWeekend || isMarch;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Calendar from 'devextreme-react/calendar';

    class App extends React.Component {
        disableDates(args) {
            var dayOfWeek = args.date.getDay(),
                month = args.date.getMonth(),
                isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 ),
                isMarch = (args.view === "year" || args.view === "month") && month === 2;

            return isWeekend || isMarch;
        }
        render() {
            return (
                <Calendar ...
                    disabledDates={this.disableDates} 
                />
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview/"
}

#####See Also#####
- [Specify the Value Range](/concepts/05%20Widgets/Calendar/12%20Specify%20the%20Value%20Range.md '/Documentation/Guide/Widgets/Calendar/Specify_the_Value_Range/')