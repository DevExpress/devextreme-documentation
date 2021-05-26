---
id: dxGantt.Options.taskTimeTooltipContentTemplate
type: template
---
---
##### shortDescription
Specifies custom content for the tooltip that displays the task's start and end time while the task is resized in the UI.

##### param(container): DxElement
#include common-ref-elementparam with { element: "time fields in the task tooltip" }

##### param(item): Object
An object that contains information about the task's start and end dates.

##### field(item.end): Date
The task's end date.

##### field(item.start): Date
The task's start date.

##### return: String | Element | jQuery
#include common-template-return-value

---

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            taskTimeTooltipContentTemplate: getTaskTimeTooltipContentTemplate,
            // ...
        });
    }); 

    function getTaskTimeTooltipContentTemplate(item, container) {
        var $customTooltipTime = $(document.createElement("div"))
            .addClass("custom-tooltip");
​
        $(document.createElement("div"))
            .addClass("custom-tooltip-time")
            .text("End Date: " + item.end)
            .appendTo($customTooltipTime);
        // ...
        return $customTooltipTime;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt taskTimeTooltipContentTemplate="myTaskTimeTooltipTemplate">
        <div *dxTemplate="let item of 'myTaskTimeTooltipTemplate'" class="custom-tooltip">
            <div class="custom-tooltip-time">End Date: {{item.end}}</div>
            <!-- ... -->
        </div>
        ...
    </dx-gantt>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        // ...
    } 

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxGanttModule } from 'devextreme-angular';

    @NgModule({
        imports: [
            BrowserModule,
            DxGanttModule
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt 
            :task-time-tooltip-content-template="myTaskTimeTooltipTemplate" >
            <template #myTaskTimeTooltipTemplate="{ data: item }">
                <div class="custom-tooltip">
                    <div class="custom-tooltip-time">End Date: {{item.end}}</div>
                    <!-- ... -->
                </div>
            </template>
        </DxGantt>
    </template>
    
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    import { DxGantt } from 'devextreme-vue/gantt';
    
    export default {
        components: {
            DxGantt
        },
        methods: {
            //...
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Gantt from 'devextreme-react/gantt';
    import { Template } from 'devextreme-react/core/template';

    const TaskTimeTooltipTemplate = (item) => {
        return ( 
            <div className="custom-tooltip">
                <div className="custom-tooltip-time">End Date: {item.end}</div>
                <!-- ... -->
            </div>
        );         
    }

    export default function App() {
        return (
            <Gantt
                taskTimeTooltipContentRender={TaskTimeTooltipTemplate}>
                //...
            </Gantt>
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .TaskTimeTooltipContentTemplate(new JS("getTaskTimeTooltipContentTemplate"))
        // ...
    )

    <script>
        function getTaskTimeTooltipContentTemplate(item, container) {
            var $customTooltipTime = $(document.createElement("div"))
                .addClass("custom-tooltip");
    ​
            $(document.createElement("div"))
                .addClass("custom-tooltip-time")
                .text("End Date: " + item.end)
                .appendTo($customTooltipTime);
            // ...
            return $customTooltipTime;
        }
    </script>

---
