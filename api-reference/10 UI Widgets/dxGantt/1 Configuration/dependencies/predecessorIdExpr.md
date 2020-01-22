---
id: dxGantt.Options.dependencies.predecessorIdExpr
type: String | function()
default: 'predecessorId'
---
---
##### shortDescription
Specifies the data field that provides predecessor IDs.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            dependencies: {
                dataSource: dependencies,
                predecessorIdExpr: "predId"
            },
            // your code
        });
    });
    <!-- tab: data.js -->
    var dependencies = [{
        'id': 0,
        'predId': 1,
        'successorId': 2,
        'type': 0
    },
    // ...
    ];

##### Angular

    <!-- tab: app.service.ts -->
    export class Dependency {
        id: number;
        predId: number;
        successorId: number;
        type: number;
    }
    let dependencies: Dependency[] = [{
        'id': 0,
        'predId': 1,
        'successorId': 2,
        'type': 0
    },
    // ...
    ];
    <!-- tab: app.component.html -->
    <dx-gantt >
        <dxo-dependencies [dataSource]="dependencies" [predecessorIdExpr]="predId" ></dxo-dependencies>
        // ...
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt>
            <DxDependencies 
                :data-source="dependenciesDataSource"
                predecessorIdExpr="predId"
                />
            // ...
        </DxGantt>
    </template>    
    <!-- tab: data.js -->
    export const dependencies = [{
        'id': 0,
        'predId': 1,
        'successorId': 2,
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
                        predecessorIdExpr="predId" />
                    // ...
                </Gantt>
            );
        }
    }
    <!-- tab: App.js -->
    export const dependencies = [{
        'id': 0,
        'predId': 1,
        'successorId': 2,
        'type': 0
    }, 
    // ...
    ];

---
