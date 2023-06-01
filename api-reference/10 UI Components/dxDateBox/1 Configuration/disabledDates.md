---
id: dxDateBox.Options.disabledDates
type: Array<Date> | function(data)
default: null
---
---
##### shortDescription
Specifies dates that users cannot select. Applies only if [pickerType](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/pickerType.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#pickerType') is *"calendar"*.

##### param(data): Object
Information about the checked date.

##### field(data.component): dxDateBox
The UI component's [instance](/api-reference/10%20UI%20Components/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Components/dxDateBox/Methods/#instance').

##### field(data.date): Date
The currently checked date.

##### field(data.view): String
The current view: *"month"*, *"year"*, *"decade"*, or *"century"*.

##### return: Boolean
**true** if the date should be disabled; otherwise **false**.

---
This property accepts an array of dates:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
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
    <dx-{widget-name} ...
        [disabledDates]="disabledDates">
    </dx-{widget-name}>

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

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :disabled-dates="disabledDates"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
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

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

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
                <{WidgetName} ...
                    disabledDates={this.disabledDates} 
                />
            );
        }
    }
    export default App;

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview/"
}

Alternatively, pass a function to **disabledDates**. This function should define the rules that determine whether the checked date is disabled. A separate set of rules should target every view individually.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            disabledDates: function(args) {
                const dayOfWeek = args.date.getDay();
                const month = args.date.getMonth();
                const isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 );
                const isMarch = (args.view === "year" || args.view === "month") && month === 2;

                return isWeekend || isMarch;
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [disabledDates]="disableDates">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        disableDates(args) {
            const dayOfWeek = args.date.getDay();
            const month = args.date.getMonth();
            const isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 );
            const isMarch = (args.view === "year" || args.view === "month") && month === 2;

            return isWeekend || isMarch;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :disabled-dates="disableDates"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        methods: {
            disableDates(args) {
                const dayOfWeek = args.date.getDay();
                const month = args.date.getMonth();
                const isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 );
                const isMarch = (args.view === "year" || args.view === "month") && month === 2;

                return isWeekend || isMarch;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        disableDates(args) {
            const dayOfWeek = args.date.getDay();
            const month = args.date.getMonth();
            const isWeekend = args.view === "month" && (dayOfWeek === 0 || dayOfWeek === 6 );
            const isMarch = (args.view === "year" || args.view === "month") && month === 2;

            return isWeekend || isMarch;
        }
        render() {
            return (
                <{WidgetName} ...
                    disabledDates={this.disableDates} 
                />
            );
        }
    }
    export default App;

---