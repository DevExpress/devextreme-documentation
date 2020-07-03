---
id: dxGantt.Options.tasks
type: Object
default: null
---
---
##### shortDescription
Configures tasks.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}

![DevExtreme Gantt Chart - Tasks](/images/Gantt/task.png)

Use the [dataSource](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/tasks/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/tasks/#dataSource') option to bind the widget to a data source, which contains tasks. If the field names in your data source differ from default names ('id', 'parentId', 'title', 'start', 'end', 'progress', 'color'), use appropriate options ([keyExpr](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/tasks/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/tasks/#keyExpr'), [parentIdExpr](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/tasks/parentIdExpr.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/tasks/#parentIdExpr'), etc.) to map data fields.

#####See Also#####
- [Gantt Elements - Tasks](/concepts/05%20Widgets/Gantt/10%20Gantt%20Elements/10%20Task.md '/Documentation/Guide/Widgets/Gantt/Gantt_Elements/#Task')

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            tasks: {
                dataSource: tasks,
                keyExpr: "taskId", 
                parentIdExpr: "parentTaskId",
                titleExpr: "taskTitle",
                progressExpr: "taskProgress",
                startExpr: "startDate",
                endExpr: "endDate",
                colorExpr: "taskColor"
            },
            //...
        });
    });

    <!-- tab: data.js -->
    var tasks = [{
        'taskId': 1,
        'parentTaskId': 0,
        'taskTitle': 'Software Development',
        'startDate': new Date('2019-02-21T05:00:00.000Z'),
        'endDate': new Date('2019-07-04T12:00:00.000Z'),
        'taskProgress': 31
        'taskColor': 'red'
    },
    // ...
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-tasks 
            [dataSource]="tasks" 
            keyExpr="taskId"
            parentIdExpr="parentTaskId"
            titleExpr="taskTitle"
            progressExpr="taskProgress"
            startExpr="startDate"
            endExpr="endDate"
            colorExpr="taskColor" >
        </dxo-tasks>
        <!-- ... -->
    </dx-gantt>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        tasks: Task[];
        // ...
        constructor(service: Service) {
            this.tasks = service.getTasks();
            // ...
        }        
    }    

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxGanttModule } from 'devextreme-angular';
    import { Service, Task, ... } from './app.service';

    @NgModule({
        imports: [
            BrowserModule,
            DxGanttModule
        ],
        providers: [Service],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';
    
    export class Task {
        taskId: number;
        parentTaskId: number;
        taskTitle: string;
        startDate: Date;
        endDate: Date;
        taskProgress: number;
        taskColor: string;
    }

    const tasks: Task[] = [{
        'taskId': 1,
        'parentTaskId': 0,
        'taskTitle': 'Software Development',
        'startDate': new Date('2019-02-21T05:00:00.000Z'),
        'endDate': new Date('2019-07-04T12:00:00.000Z'),
        'taskProgress': 31,
        'taskColor': 'red'
    },
    // ...   
    ]; 
    @Injectable()
    export class Service {
        getTasks(): Task[] {
            return tasks;
        }
    }

    <!-- tab: angular.json -->
    {
      "projects": {
        "ProjectName": {
          "architect": {
            "build": {
              "options": {
                "styles": [
                  "node_modules/devextreme/dist/css/dx.common.css",
                  "node_modules/devextreme/dist/css/dx.light.css",
                  "node_modules/devexpress-gantt/dist/dx-gantt.css",
                  "src/styles.css"
                ],
                ...
              },
              ...
            },
            ...
          }
        },
        ...
      },
      ...
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >        
            <DxTasks
                :data-source="tasks"
                key-expr="taskId"
                parent-id-expr="parentTaskId"
                title-expr="taskTitle"
                progress-expr="taskProgress"
                start-expr="startDate"
                end-expr="endDate"
                color-expr="taskColor" />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt, 
            DxTasks, 
            // ... 
        } from 'devextreme-vue/gantt';

        import { 
            tasks, 
            // ... 
        } from './data.js';
        
        export default {
            components: { 
                DxGantt, 
                DxTasks, 
                // ... 
            },
            data() {
                return { 
                    tasks, 
                    // ... 
                };
            }
        };
    </script>

    <!-- tab: data.js -->
    export const tasks = [{
        'taskId': 1,
        'parentTaskId': 0,
        'taskTitle': 'Software Development',
        'startDate': new Date('2019-02-21T05:00:00.000Z'),
        'endDate': new Date('2019-07-04T12:00:00.000Z'),
        'taskProgress': 31,
        'taskColor': 'red'
    },
    // ...
    ];	

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-gantt/dist/dx-gantt.css'; 

    import Gantt, { 
        Tasks, 
        // ... 
    } from 'devextreme-react/gantt';
    import { 
        tasks, 
        // ... 
    } from './data.js';
    
    class App extends React.Component {
        render() {
            return (
                <Gantt ... >
                    <Tasks 
                        dataSource={tasks}
                        keyExpr="taskId"
                        parentIdExpr="parentTaskId"
                        titleExpr="taskTitle"
                        progressExpr="taskProgress"
                        startExpr="startDate"
                        endExpr="endDate"
                        colorExpr="taskColor" />
                    {/* ... */}
                </Gantt>
            );
        }
    }
    export default App;
    
    <!-- tab: data.js -->
    export const tasks = [{
        'taskId': 1,
        'parentTaskId': 0,
        'taskTitle': 'Software Development',
        'startDate': new Date('2019-02-21T05:00:00.000Z'),
        'endDate': new Date('2019-07-04T12:00:00.000Z'),
        'taskProgress': 31,
        'taskColor': 'red'
    },
    // ...
    ];

---
