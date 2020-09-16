---
id: dxGantt.Options.dependencies
type: Object
default: null
---
---
##### shortDescription
Configures dependencies.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}


Dependencies specify the relationships between tasks. The following image illustrates how the Gantt displays dependencies in the chart:

![DevExtreme Gantt Chart - Dependencies](/images/Gantt/Dependency.png)

The **Gantt** widget supports the following dependency types:

- Finish to Start (FS) - The predecessor task's endpoint specifies the successor task's start point.

- Start to Start (SS) - The predecessor task's start point specifies the successor task's start point.

- Finish to Finish (FF) - The predecessor task's end point specifies the successor task's end point.

- Start to Finish (SF) - The predecessor task's start point specifies the successor task's end point.

In a database, you can use any of the following formats (digit or string) to store dependency types: 

<table class="dx-table">
    <tr>
        <th>Dependency Type</th>
        <th>Supported Values</th>
    </tr>     
    <tr>
        <td>Finish to Start (FS)</td>
        <td>0, "0", "FS", "fs"
        </td>
    </tr>
    <tr>
        <td>Start to Start (SS)</td>
        <td>1, "1", "SS", "ss"
        </td>
    </tr>
    <tr>
        <td>Finish to Finish (FF)</td>
        <td>2, "2", "FF", "ff"
        </td>
    </tr>
    <tr>
        <td>Start to Finish (SF)</td>
        <td>3, "3", "SF", "sf"
        </td>
    </tr>
</table>

Use the [dataSource](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/dependencies/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/dependencies/#dataSource') option to bind the widget to a data source, which contains information about dependency types. If the field names in your data source differ from the 'id', 'type', 'predecessorId' and 'successorId' default names, use the [keyExpr](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/dependencies/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/dependencies/#keyExpr'), [typeExpr](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/dependencies/typeExpr.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/dependencies/#typeExpr') options to map data fields. 

#####See Also#####
- [Gantt Elements - Dependency](/concepts/05%20Widgets/Gantt/10%20Gantt%20Elements/20%20Dependency.md '/Documentation/Guide/Widgets/Gantt/Gantt_Elements/#Dependency')

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            dependencies: {
                dataSource: dependencies,
                keyExpr: "dependencyId",
                typeExpr: "dependencyType",
                predecessorIdExpr: "taskPredecessorId",
                successorIdExpr: "taskSuccessorId"
            },
            //...
        });
    });

    <!-- tab: data.js -->
    var dependencies = [{
        'dependencyId': 0,
        'taskPredecessorId': 1,
        'taskSuccessorId': 2,
        'dependencyType': 0
    },    
    // ...
    ];    

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-dependencies
            [dataSource]="dependencies" 
            keyExpr="dependencyId"
            typeExpr="dependencyType"
            predecessorIdExpr="taskPredecessorId"
            successorIdExpr="taskSuccessorId" >
        </dxo-dependencies>
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
        dependencies: Dependency[];
        // ...

        constructor(service: Service) {
            this.dependencies = service.getDependencies();
            // ...
        }        
    }    

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxGanttModule } from 'devextreme-angular';
    import { Service, Dependency, ... } from './app.service';

    @NgModule({
        imports: [
            BrowserModule,
            DxGanttModule
        ],        
        declarations: [AppComponent],
        providers: [Service],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';
    
    export class Dependency {
        dependencyId: number;
        taskPredecessorId: number;
        taskSuccessorId: number;
        dependencyType: number;
    } 

    let dependencies: Dependency[] = [{
        'dependencyId': 0,
        'taskPredecessorId': 1,
        'taskSuccessorId': 2,
        'dependencyType': 0 
    },
    // ...   
    ]; 
    @Injectable()
    export class Service {
        getDependencies(): Dependency[] {
            return dependencies;
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
            <DxDependencies
                :data-source="dependencies"
                key-expr="dependencyId"
                type-expr="dependencyType"
                predecessor-id-expr="taskPredecessorId"
                successor-id-expr="taskSuccessorId" />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt, 
            DxDependencies, 
            // ... 
        } from 'devextreme-vue/gantt';
        import { 
            dependencies, 
            // ... 
        } from './data.js';
        
        export default {
            components: { 
                DxGantt, 
                DxDependencies, 
                // ... 
            },
            data() {
                return { 
                    dependencies, 
                    // ... 
                };
            }
        };
    </script>

    <!-- tab: data.js -->
    export const dependencies = [{
        'dependencyId': 0,
        'taskPredecessorId': 1,
        'taskSuccessorId': 2,
        'dependencyType': 0
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
        Dependencies, 
        // ... 
    } from 'devextreme-react/gantt';
    import { 
        dependencies, 
        // ... 
    } from './data.js';
    
    class App extends React.Component {
        render() {
            return (
                <Gantt ... >
                    <Dependencies 
                        dataSource={dependencies}
                        keyExpr="dependencyId"
                        typeExpr="dependencyType"
                        predecessorIdExpr="taskPredecessorId"
                        successorIdExpr="taskSuccessorId" />
                    {/* ... */}
                </Gantt>
            );
        }
    }
    export default App;
    
    <!-- tab: data.js -->
    export const dependencies = [{
        'dependencyId': 0,
        'taskPredecessorId': 1,
        'taskSuccessorId': 2,
        'dependencyType': 0
    },
    // ...
    ];

---
