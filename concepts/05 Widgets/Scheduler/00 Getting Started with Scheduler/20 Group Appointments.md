**Scheduler** groups appointments by categories called resources. In this tutorial, we will create resources that define the appointments' priorities. The final objective is to implement grouping in accordance with the following algorithm:

1. **Define resource instances**
A resource instance defines a category by which to group appointments. Each object of a resource instance should consist of the required id, color, and optional text fields. In the data source file, define the priorities array to store the resource instances for high and low priority appointments.

2. **Define resource kinds**
A resource kind applies a resource instance to the widget. The [resources](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/) option specifies an array of resource kinds. Each array item must specify at least the two fields: [dataSource](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#dataSource) (an array of resource instances) and [fieldExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#fieldExpr) (the data object field that specifies the category). Assign the priorities array to dataSource and the priorityId field to fieldExpr.

3. **Specify the groups option**
By now, the **Scheduler** has applied the resource kinds: the appointments are colored differently and you can change their priority in the appointment's details form. To display the appointments in columns according to their resource kinds, specify the [groups](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#groups) option. It is an array that consists of the **fieldExpr** value(s) of the resource kind(s).

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

    <!-- tab: index.js --> 
    // ...
    const priorities = [
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
            text: "High priority",
            id: 1,
            color: "#cc5c53"
        }, {
            text: "Low priority",
            id: 2,
            color: "#ff9747"
        }
    ];

    @Injectable({
        providedIn: 'root'
    })
    export class AppService {
        // ...
        getPriorities(): Priority[] {
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

If you run this code, you will see the **Scheduler** grid is split into two columns: High priority and Low priority.