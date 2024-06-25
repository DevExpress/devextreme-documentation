---
id: dxGantt.scrollToDate(date)
---
---
##### shortDescription
Scrolls the Gantt chart to the specified date.

##### param(date): Date | Number | String
The date.

---

You can pass the date to the **scrollToDate** method in the following formats:

- [Date](https://www.w3schools.com/js/js_date_formats.asp)

        <!--JavaScript-->
        var gantt = $("#ganttContainer").dxGantt("instance");
        gantt.scrollToDate(new Date("December 17, 2020"));

- Number - Specifies a date as a timestamp (total milliseconds since 1970/01/01). 

        <!--JavaScript-->
        var gantt = $("#ganttContainer").dxGantt("instance");
        gantt.scrollToDate(1876800000000);

- String - Specifies a date as a string value. 

        <!--JavaScript-->
        var gantt = $("#ganttContainer").dxGantt("instance");
        gantt.scrollToDate("2020/01/01");

Note that the **scrollToDate** method scrolls to a date inside the current scroll area. You can zoom the chart to resize the viewport.

[note]
Specify a timeout if you call the **scrollToDate** method in the [contentReady](/api-reference/10%20UI%20Components/Widget/4%20Events/contentReady.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#contentReady') event.

---
##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    gantt.scrollToDate(new Date("December 17, 2020"));

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxGanttComponent } from "devextreme-angular";
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })    
    
    export class AppComponent {
        @ViewChild(DxGanttComponent, { static: false }) gantt: DxGanttComponent;
        // Prior to Angular 8
        // @ViewChild(DxGanttComponent) gantt: DxGanttComponent;

        yourCustomMethod() {
            this.gantt.instance.scrollToDate(new Date("December 17, 2020")); 
            // ...
        }
    }

    <!-- tab: app.component.html -->
    <dx-gantt ... >
    </dx-gantt>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxGanttModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxGanttModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ...
            :ref="ganttRef">
        </DxGantt>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-gantt/dist/dx-gantt.css';

    import DxGantt from 'devextreme-vue/gantt';

    const ganttRef = 'gantt';

    export default {
        components: {
            DxGantt
        },
        data() {
            return {
                ganttRef
            }
        },
        computed: {
            gantt: function() {
                return this.$refs[ganttRef].instance;
            }
        },
        methods: {
            yourCustomMethod(){
                this.gantt.scrollToDate(new Date("December 17, 2020"));
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Gantt from 'devextreme-react/gantt';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.ganttRef = React.createRef();

            this.yourCustomMethod = () => {
                this.gantt.scrollToDate(new Date("December 17, 2020"));
                // ...
            }
        }

        get gantt() {
            return this.ganttRef.current.instance();
        }

        render() {
            return (
                <Gantt ...
                    ref={this.ganttRef}>
                </Gantt>
            );
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        @* ... *@
    )

    <script type="text/javascript">
        function getGanttInstance() {
            return $("#gantt").dxGantt("instance");
        }
        function yourCustomMethod() {
            var ganttInstance = getGanttInstance();
            ganttInstance.scrollToDate(new Date("December 17, 2020"));
            // ...
        }
    </script>

--- 

#####See Also#####
- [toolbar](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/toolbar.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/toolbar/')