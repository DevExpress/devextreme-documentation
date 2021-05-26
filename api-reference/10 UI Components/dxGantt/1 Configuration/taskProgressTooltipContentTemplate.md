---
id: dxGantt.Options.taskProgressTooltipContentTemplate
type: template
---
---
##### shortDescription
Specifies custom content for the tooltip that displays the task's progress while the progress handler is resized in the UI.

##### param(container): DxElement
#include common-ref-elementparam with { element: "progress area in the task tooltip" }

##### param(item): Object
An object that contains information about the task's progress.

##### field(item.progress): Number
The task's progress.

##### return: String | Element | jQuery
#include common-template-return-value

---

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            taskProgressTooltipContentTemplate: getTaskProgressTooltipContentTemplate,
            // ...
        });
    }); 

    function getTaskProgressTooltipContentTemplate(item, container) {
        var $customTooltipProgress = $(document.createElement("div"))
            .addClass("custom-tooltip");
​
        $(document.createElement("div"))
            .addClass("custom-tooltip-progress")
            .text("Progress: " + item.progress + "%")
            .appendTo($customTooltipProgress);
        // ...
        return $customTooltipProgress;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt taskProgressTooltipContentTemplate="myTaskProgressTooltipTemplate">
        <div *dxTemplate="let item of 'myTaskProgressTooltipTemplate'" class="custom-tooltip">
            <div class="custom-tooltip-progress">Progress: {{item.progress}}%</div>
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
            :task-progress-tooltip-content-template="myTaskProgressTooltipTemplate" >
            <template #myTaskProgressTooltipTemplate="{ data: item }">
                <div class="custom-tooltip">
                    <div class="custom-tooltip-progress">Progress: {{ item.progress }}%</div>
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

    const TaskProgressTooltipTemplate = (item) => {
        return ( 
            <div className="custom-tooltip">
                <div className="custom-tooltip-progress">Progress: {item.progress}%</div>
                <!-- ... -->
            </div>            
        );         
    }

    export default function App() {
        return (
            <Gantt
                taskProgressTooltipContentRender={TaskProgressTooltipTemplate}>
                //...
            </Gantt>
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .TaskProgressTooltipContentTemplate(new JS("getTaskProgressTooltipContentTemplate"))
        // ...
    )

    <script>
        function getTaskProgressTooltipContentTemplate(item, container) {
            var $customTooltipProgress = $(document.createElement("div"))
                .addClass("custom-tooltip");
        ​
            $(document.createElement("div"))
                .addClass("custom-tooltip-progress")
                .text("Progress: " + item.progress + "%")
                .appendTo($customTooltipProgress);
            // ...
            return $customTooltipProgress;
        }
    </script>

---
