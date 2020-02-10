---
id: dxGantt.Options.resources
type: Object
default: null
---
---
##### shortDescription
Configures task resources.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}

You can add resources to a project and assign them to tasks. Resources can be people responsible for tasks, equipment, materials, etc. The **Gantt**  displays resources as labels on the right of the tasks.

![DevExtreme Gantt Chart - Resources](/images/Gantt/resources.png)

Use the [dataSource](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/resources/#dataSource) option to bind the widget to a data source, which contains resources. If the field names in your data source differ from the 'id' and 'text' default names, use the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/resources/#keyExpr) and/or [textExpr](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/resources/#textExpr) options to map data fields. 

#####See Also#####
- [showResources](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#showResources)
- [Gantt Elements - Resources](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/#Resource)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            resources: {
                dataSource: resources,
                keyExpr: "resourceId",
                textExpr: "title"
            },
            //...
        });
    });

    <!-- tab: data.js -->
    var resources = [{
        'resourceId': 1,
        'title': 'Management'
    }, 
    // ...
    ];    

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-resources 
            [dataSource]="resources" 
            keyExpr="resourceId"
            textExpr="title">
        </dxo-resources>
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
        resources: Resource[];
        // ...
        constructor(service: Service) {
            this.resources = service.getResources();
            // ...
        }        
    }    

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxGanttModule } from 'devextreme-angular';
    import { Service, Resource, ... } from './app.service';

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
    
    export class Resource {
        id: number;
        text: string;
    }
    
    const resources: Resource[] = [{
        'resourceId': 1,
        'title': 'Management'
    },
    // ...   
    ]; 
    @Injectable()
    export class Service {
        getResources(): Resource[] {
            return resources;
        }
    }    

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxResources 
                :data-source="resources"
                key-expr="resourceId"
                text-expr="title" />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css'; 

        import { 
            DxGantt, 
            DxResources, 
            // ... 
        } from 'devextreme-vue/gantt';
        import { 
            resources, 
            // ... 
        } from './data.js';
        
        export default {
            components: { 
                DxGantt, 
                DxResources, 
                // ... 
            },
            data() {
                return { 
                    resources, 
                    // ... 
                };
            }
        };
    </script>

    <!-- tab: data.js -->
    export const resources = [{
        'resourceId': 1,
        'title': 'Management'
    },
    // ...
    ];	
	
##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Gantt, { 
        Resources, 
        // ... 
    } from 'devextreme-react/gantt';
    import { 
        resources, 
        // ... 
    } from './data.js';
    
    class App extends React.Component {
        render() {
            return (
                <Gantt ... >
                    <Resources 
                        dataSource={resources}
                        keyExpr="resourceId"
                        textExpr="title" />
                    {/* ... */}
                </Gantt>
            );
        }
    }
    export default App;
    
    <!-- tab: data.js -->
    export const resources = [{
        'resourceId': 1,
        'title': 'Management'
    },
    // ...
    ];

---
