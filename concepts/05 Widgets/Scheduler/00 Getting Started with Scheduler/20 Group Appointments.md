We will group appointments by priority. For this, do the following:
1. Create a resource kind. In this example, this is the `priorities` array. It consists of objects each of which defines a priority category: sets its heading, color, and id. 
2. Use the [resources](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/) array to add a resource kind: specify the [fieldExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#fieldExpr) and [dataSource](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#dataSource) fields in the resource object. By this moment, the appointments will be painted based on the priority.
3. Use the [groups](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#groups) option to specify the field by which appointments are categorized.

---
##### jQuery

    <!-- tab: index.js --> 
    $(function() { 
        $("#scheduler").dx{WidgetName}({ 
            // ...
            resources: [
                {
                    fieldExpr: "priorityId",
                    dataSource: priorities,
                    label: "Priority"
                }
            ],
            groups: ["priorityId"],
        });
    });

##### Angular 

    <!-- tab: app.component.html --> 
    <dx-scheduler ...
        [groups]="['priorityId']">
        <!-- ... -->
        <dxi-resource
            [dataSource]="priorities"
            fieldExpr="priorityId"
            label="Priority">
        </dxi-resource>
    </dx-scheduler> 

    <!-- tab: app.component.ts --> 
    import { Component } from '@angular/core';
    import { Appointment, Priority, AppService } from './app.service';

    @Component({ 
        selector: 'app-root', 
        templateUrl: './app.component.html', 
        styleUrls: ['./app.component.css'] 
    }) 
    export class AppComponent {
        // ...
        priorities: Priority[];

        constructor(service: AppService) {
            // ...
            this.priorities = service.getPriorities();
        }
    } 

    <!-- tab: app.service.ts --> 
    // ...

    export class Priority {
        text: string;
        id: number;
        color: string;
    }

    let prioritiesData: Priority[] = [
        {
            text: "Low Priority",
            id: 1,
            color: "#1e90ff"
        }, {
            text: "High Priority",
            id: 2,
            color: "#ff9747"
        }
    ];

    @Injectable({
        providedIn: 'root'
    })
    export class AppService {
        // ...
        getPriorities() {
            return prioritiesData;
        }
    }

##### Vue 

    <!-- tab: App.vue --> 
    <template> 
        <DxScheduler ...
            :groups="groups">
            <!-- ... -->
            <DxResource
                :data-source="priorities"
                field-expr="priorityId"
                label="Priority"
            />
        </DxScheduler>
    </template> 

    <script> 
    import 'devextreme/dist/css/dx.common.css'; 
    import 'devextreme/dist/css/dx.light.css'; 

    import { DxScheduler, DxResource, DxEditing } from 'devextreme-vue/scheduler';
    import { data, priorities } from './data.js';

    export default { 
        components: {
            // ...
            DxResource
        },
        data() {
            return {
                // ...
                priorities: priorities,
                groups: ['priorityId'],
            };
        }
    } 
    </script> 

    <!-- tab: data.js --> 
    // ...
    export const priorities = [
        {
            text: "High priority",
            id: 1,
            color: "#cc5c53"
        }, {
            text: "Low priority",
            id: 2,
            color: "#ff9747"
        }
    ];


##### React 

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Scheduler, Resource, Editing } from 'devextreme-react/scheduler';

    // ...
    const groups = ['priorityId'];

    function App() {
        return (
            <div className="App">
                <Scheduler ... 
                    groups={groups}>
                {/* ... */}
                <Resource
                    fieldExpr="priorityId"
                    dataSource={priorities}
                    label="Priority"
                />
                </Scheduler>
            </div>
        );
    }

    <!-- tab: data.js --> 
    // ...
    export const priorities = [
        {
            text: "High priority",
            id: 1,
            color: "#cc5c53"
        }, {
            text: "Low priority",
            id: 2,
            color: "#ff9747"
        }
    ];

---

If you run this code, you will see the Scheduler grid is split into two columns. Each column displays appointments of either low or high priority.