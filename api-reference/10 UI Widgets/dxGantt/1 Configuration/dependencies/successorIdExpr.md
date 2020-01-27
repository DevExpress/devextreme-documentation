---
id: dxGantt.Options.dependencies.successorIdExpr
type: String | function()
default: 'successorId'
---
---
##### shortDescription
Specifies the data field that provides successor IDs.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            dependencies: {
                dataSource: dependencies,
                successorIdExpr: "successorKey"
            },
            // your code
        });
    });
    <!-- tab: data.js -->
    var dependencies = [{
        'id': 0,
        'predecessorId': 1,
        'successorKey': 2,
        'type': 0
    },
    // ...
    ];

##### Angular

    <!-- tab: app.service.ts -->
    export class Dependency {
        id: number;
        predecessorId: number;
        successorKey: number;
        type: number;
    }
    let dependencies: Dependency[] = [{
        'id': 0,
        'predecessorId': 1,
        'successorKey': 2,
        'type': 0
    },
    // ...
    ];
    <!-- tab: app.component.html -->
    <dx-gantt >
        <dxo-dependencies [dataSource]="dependencies" [successorIdExpr]="successorKey" ></dxo-dependencies>
        // ...
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt>
            <DxDependencies 
                :data-source="dependenciesDataSource"
                successorIdExpr="successorKey"
                />
            // ...
        </DxGantt>
    </template>    
    <!-- tab: data.js -->
    export const dependencies = [{
        'id': 0,
        'predecessorId': 1,
        'successorKey': 2,
        'type': 0
    },
    // ...
    ];

##### React

    <!-- tab: App.js -->
    // ...
    import { tasks, dependencies, resources, resourceAssignments } from './data.js';
    class App extends React.Component {
        render() {
            return (
                <Gantt>
                    <Dependencies 
                        dataSource={dependencies} 
                        successorIdExpr="successorKey" />
                    // ...
                </Gantt>
            );
        }
    }
    <!-- tab: data.js -->
    export const dependencies = [{
        'id': 0,
        'predecessorId': 1,
        'successorKey': 2,
        'type': 0
    }, 
    // ...
    ];

---