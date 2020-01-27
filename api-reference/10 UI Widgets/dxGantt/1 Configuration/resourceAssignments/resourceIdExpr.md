---
id: dxGantt.Options.resourceAssignments.resourceIdExpr
type: String | function()
default: 'resourceId'
---
---
##### shortDescription
Specifies the data field that provides resource IDs.

---
---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            resourceAssignments: {
                dataSource: resourceAssignments,
                resourceIdExpr: "resourceKey",
                taskIdExpr: "taskKey"
            },
            //...
        });
    });
    <!-- tab: data.js -->
    var resourceAssignments = [{
        'id': 0,
        'taskKey': 3,
        'resourceKey': 1
    },
    // ...
    ];    

##### Angular

    <!-- tab: app.component.ts -->
    import { DxGanttModule } from 'devextreme-angular';
    import { ResourceAssignment, ... } from './app.service';
    export class AppComponent {
        resourceAssignments: ResourceAssignment[];
        // ...
    }
    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-resource-assignments 
            [dataSource]="resourceAssignments" 
            resourceIdExpr="resourceKey" 
            taskIdExpr="taskKey" />
        <!-- ... -->
    </dx-gantt>
    <!-- tab: app.service.ts -->
    let resourceAssignments: ResourceAssignment[] = [{
        'id': 0,
        'taskKey': 3,
        'resourceKey': 1
    },
    // ...   
    ]; 

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxResourceAssignments 
                :data-source="resourceAssignmentsDataSource"
                resourceId-expr="resourceKey"
                task-id-expr="taskKey" />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import {
            DxGantt,
            DxResourceAssignments,
            // ...
        } from 'devextreme-vue/gantt';
        import { resourceAssignments, ... } from './data.js';
        export default {
            components: { DxResourceAssignments, ... },
            data() {
                return { resourceAssignments, ... };
            },
            computed: {
                resourceAssignmentsDataSource() { return resourceAssignments; },
                // ...
            }
        };
    </script>
    <!-- tab: data.js -->
    export const resourceAssignments = [{
        'id': 0,
        'taskKey': 3,
        'resourceKey': 1
    },
    // ...
    ];

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Gantt, { ResourceAssignments, ... } from 'devextreme-react/gantt';
    import { resourceAssignments, ... } from './data.js';
    class App extends React.Component {
        render() {
            return (
                <Gantt ... >     
                    <ResourceAssignments dataSource={resourceAssignments} resourceIdExpr="resourceKey" taskIdExpr="taskKey" />
                    // ...
                </Gantt>
            );
        }
    }
    export default App;
    <!-- tab: data.js -->
    export const resourceAssignments = [{
        'id': 0,
        'taskKey': 3,
        'resourceKey': 1
    },
    // ...
    ];

---
