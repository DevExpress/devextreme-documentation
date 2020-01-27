---
id: dxGantt.Options.resourceAssignments.dataSource
type: Array<Object> | DataSource | DataSource_Options
default: null
---
---
##### shortDescription
Binds the widget to the data source, which contains resource assignments.

---
---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            resourceAssignments: {
                dataSource: resourceAssignments
            },
            //...
        });
    });
    <!-- tab: data.js -->
    var resourceAssignments = [{
        'id': 0,
        'taskId': 3,
        'resourceId': 1
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
        <dxo-resource-assignments [dataSource]="resourceAssignments" />
        <!-- ... -->
    </dx-gantt>
    <!-- tab: app.service.ts -->
    let resourceAssignments: ResourceAssignment[] = [{
        'id': 0,
        'taskId': 3,
        'resourceId': 1
    },
    // ...   
    ]; 

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxResourceAssignments :data-source="resourceAssignmentsDataSource" />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import { DxGantt, DxResourceAssignments, ... } from 'devextreme-vue/gantt';
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
        'taskId': 3,
        'resourceId': 1
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
                    <ResourceAssignments dataSource={resourceAssignments} />
                    {/* ... */}
                </Gantt>
            );
        }
    }
    <!-- tab: data.js -->
    export const resourceAssignments = [{
        'id': 0,
        'taskId': 3,
        'resourceId': 1
    },
    // ...
    ];

---
