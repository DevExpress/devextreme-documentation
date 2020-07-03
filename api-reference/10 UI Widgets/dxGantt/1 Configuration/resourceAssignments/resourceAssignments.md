---
id: dxGantt.Options.resourceAssignments
type: Object
default: null
---
---
##### shortDescription
Configures resource assignments.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}

Resource assignments define relationship between tasks and resources.

Use the [dataSource](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/resourceAssignments/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/resourceAssignments/#dataSource') option to bind the widget to a data source, which contains resource assignments. If the field names in your data source differ from the 'id', 'resourceId' and 'taskId' default names, use the [keyExpr](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/resourceAssignments/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/resourceAssignments/#keyExpr'), [resourceIdExpr](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/resourceAssignments/resourceIdExpr.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/resourceAssignments/#resourceIdExpr') and/or [taskIdExpr](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/resourceAssignments/taskIdExpr.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/resourceAssignments/#taskIdExpr') options to map data fields. 

#####See Also#####
- [Gantt Elements - Resources](/concepts/05%20Widgets/Gantt/10%20Gantt%20Elements/30%20Resource.md '/Documentation/Guide/Widgets/Gantt/Gantt_Elements/#Resource')

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            resourceAssignments: {
                dataSource: resourceAssignments,
                keyExpr: "key",
                resourceIdExpr: "resourceKey",
                taskIdExpr: "taskKey"
            },
            //...
        });
    });

    <!-- tab: data.js -->
    var resourceAssignments = [{
        'key': 0,
        'taskKey': 3,
        'resourceKey': 1
    },
    // ...
    ];    

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-resource-assignments 
            [dataSource]="resourceAssignments" 
            keyExpr="key"
            resourceIdExpr="resourceKey" 
            taskIdExpr="taskKey">
        </dxo-resource-assignments>
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
        resourceAssignments: ResourceAssignment[];
        // ...

        constructor(service: Service) {
            this.resourceAssignments = service.getResourceAssignments();
            // ...
        }
    }    
    
    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxGanttModule } from 'devextreme-angular';
    import { Service, ResourceAssignment, ... } from './app.service';

    @NgModule({
        imports: [
            BrowserModule,
            DxGanttModule
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';
    
    export class ResourceAssignment {
        id: number;
        taskId: number;
        resourceId: number;
    }

    const resourceAssignments: ResourceAssignment[] = [{
        'key': 0,
        'taskKey': 3,
        'resourceKey': 1
    },
    // ...   
    ]; 
    @Injectable()
    export class Service {
        getResourceAssignments(): ResourceAssignment[] {
            return resourceAssignments;
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
            <DxResourceAssignments 
                :data-source="resourceAssignments"
                key-expr="key"
                resource-id-expr="resourceKey"
                task-id-expr="taskKey" />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css';  

        import { 
            DxGantt, 
            DxResourceAssignments, 
            //... 
        } from 'devextreme-vue/gantt';
        import { 
            resourceAssignments, 
            // ... 
        } from './data.js';
        
        export default {
            components: { 
                DxGantt, 
                DxResourceAssignments, 
                //... 
            },
            data() {
                return { 
                    resourceAssignments, 
                    //... 
                };
            }
        };
    </script>
    <!-- tab: data.js -->
    export const resourceAssignments = [{
        'key': 0,
        'taskKey': 3,
        'resourceKey': 1
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
        ResourceAssignments, 
        //... 
    } from 'devextreme-react/gantt';
    import { 
        resourceAssignments, 
        //... 
    } from './data.js';
    
    class App extends React.Component {
        render() {
            return (
                <Gantt ... >  
                    <ResourceAssignments 
                        dataSource={resourceAssignments} 
                        keyExpr="key"
                        resourceIdExpr="resourceKey" 
                        taskIdExpr="taskKey" />
                </Gantt>
            );
        }
    }
    export default App;
    
    <!-- tab: data.js -->
    export const resourceAssignments = [{
        'key': 0,
        'taskKey': 3,
        'resourceKey': 1
    },
    // ...
    ];

---
