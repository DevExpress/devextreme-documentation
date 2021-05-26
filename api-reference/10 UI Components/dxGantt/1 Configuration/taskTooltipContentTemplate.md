---
id: dxGantt.Options.taskTooltipContentTemplate
type: template
---
---
##### shortDescription
Specifies custom content for the task tooltip.

##### param(container): DxElement
#include common-ref-elementparam with { element: "task tooltip" }

##### param(task): any
The processed task.

##### return: String | Element | jQuery
#include common-template-return-value

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/ChartAppearance/"
}

Note that the **container** parameter contains the content of the default tooltip. You should clear the **container** parameter to specify custom content for the task tooltip.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            taskTooltipContentTemplate: getTaskTooltipContentTemplate,
            // ...
        });
    }); 

    function getTaskTooltipContentTemplate(task, container) {
        var $customTooltip = $(document.createElement("div"))
            .addClass("custom-task-edit-tooltip");
​
        $(document.createElement("div"))
            .addClass("custom-tooltip-title")
            .text(task.title)
            .appendTo($customTooltip);
        // ...
        return $customTooltip;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt taskTooltipContentTemplate="myTaskTooltipTemplate">
        <div *dxTemplate="let task of 'myTaskTooltipTemplate'" class="custom-task-edit-tooltip">
            <div class="custom-tooltip-title">{{task.title}}</div>
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
            :task-tooltip-content-template="myTooltipContentTemplate" >
            <template #myTooltipContentTemplate="{ data: task }">
                <div class="custom-task-edit-tooltip">
                    <div class="custom-tooltip-title">{{ task.title }}</div>
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

    const TaskTooltipTemplate = (task) => {
        return ( 
            <div class="custom-task-edit-tooltip">
                <div class="custom-tooltip-title">{{ task.title }}</div>
                <!-- ... -->
            </div>
        );         
    }

    export default function App() {
        return (
            <Gantt
                taskTooltipContentRender={TaskTooltipTemplate}>
                //...
            </Gantt>
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .TaskTooltipContentTemplate(new JS("getTaskTooltipContentTemplate"))
        // ...
    )

    <script>
        function getTaskTooltipContentTemplate(task, container) {
            var $customTooltip = $(document.createElement("div"))
                .addClass("custom-task-edit-tooltip");

            $(document.createElement("div"))
                .addClass("custom-tooltip-title")
                .text(task.Title)
                .appendTo($customTooltip);
            // ...

            return $customTooltip;            
        }    
    </script>

---
