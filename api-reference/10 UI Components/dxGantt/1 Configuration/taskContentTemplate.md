---
id: dxGantt.Options.taskContentTemplate
type: template
---
---
##### shortDescription
Specifies custom content for the task.

##### param(container): DxElement
#include common-ref-elementparam with { element: "task" }

##### param(item): Object
An object that contains information about the task and its default settings.

##### field(item.cellSize): Object
The size of the cell that contains the task.

##### field(item.isMilestone): Boolean
Specifies whether the task is a milestone.

##### field(item.taskData): Object
The processed task.

##### field(item.taskHTML): Object
The default HTML element of the processed task.

##### field(item.taskPosition): Object
The task's position.

##### field(item.taskResources): Array<Object>
The task's resources.

##### field(item.taskSize): Object
The task's size.

##### return: String | Element | jQuery
#include common-template-return-value

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/TaskTemplate/"
}

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            taskContentTemplate: getTaskContentTemplate,
            // ...
        });
    }); 

    function getTaskContentTemplate(item, container) {
        var $customContainer = $(document.createElement("div")) 
            .addClass("custom-task") 
            .text(item.taskData.title) 
            .attr("style", "width:" + item.taskSize.width + "px"); 
        return $customContainer; 
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt taskContentTemplate="myTaskTemplate">
        <div *dxTemplate="let data of 'myTaskTemplate'">
            <div [style.width.px]="item.taskSize.width" class="custom-task">{{item.taskData.title}}</div>
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
            :task-content-template="myTaskTemplate" >
            <template #myTaskTemplate="{ data : item }">
                <div [style.width.px]="item.taskSize.width" class="custom-task">{{item.taskData.title}}</div>
                <!-- ... -->
            </template>                       
        </DxGantt>
    </template>
    
    <script>
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

    const TaskTemplate = (item) => {
        return ( 
            <div className="custom-task" style={{width: item.taskSize.width + "px"}}> 
                <div className="custom-task-title">{item.taskData.title}</div> 
            </div> 
        );         
    }

    export default function App() {
        return (
            <Gantt 
                taskContentRender={TaskTemplate}>
                //...
            </Gantt>
        );  
    }

    export default App;

##### ASP.NET MVC

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .TaskContentTemplate(new JS("getTaskContentTemplate"))
        // ...
    )

    <script>
        function getTaskContentTemplate(task, container) {
            var $customContainer = $(document.createElement("div"))
                .addClass("custom-task");
                .text(item.Task.Title);
                .attr("style", "width:" + item.TaskSize.Width + "px"); 
            return $customContainer;
        }    
    </script>

---
