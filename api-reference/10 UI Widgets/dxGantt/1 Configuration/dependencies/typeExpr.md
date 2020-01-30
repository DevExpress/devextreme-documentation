---
id: dxGantt.Options.dependencies.typeExpr
type: String | function()
default: 'type'
---
---
##### shortDescription
Specifies the data field that provides dependency types.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            dependencies: {
                dataSource: dependencies,
                typeExpr: "dependencyType"
            },
            // your code
        });
    });
    <!-- tab: data.js -->
    var dependencies = [{
        'id': 0,
        'predecessorId': 1,
        'successorId': 2,
        'dependencyType': 0
    },
    // ...
    ];

##### Angular

    <!-- tab: app.service.ts -->
    export class Dependency {
        id: number;
        predecessorId: number;
        successorId: number;
        dependencyType: number;
    }
    let dependencies: Dependency[] = [{
        'id': 0,
        'predecessorId': 1,
        'successorId': 2,
        'dependencyType': 0
    },
    // ...
    ];
    <!-- tab: app.component.html -->
    <dx-gantt >
        <dxo-dependencies [dataSource]="dependencies" [typeExpr]="dependencyType" ></dxo-dependencies>
        // ...
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt>
            <DxDependencies 
                :data-source="dependenciesDataSource"
                typeExpr="dependencyType"
                />
            // ...
        </DxGantt>
    </template>    
    <!-- tab: data.js -->
    export const dependencies = [{
        'id': 0,
        'predecessorId': 1,
        'successorId': 2,
        'dependencyType': 0
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
                        typeExpr="dependencyType" />
                    // ...
                </Gantt>
            );
        }
    }
    <!-- tab: data.js -->
    export const dependencies = [{
        'id': 0,
        'predecessorId': 1,
        'successorId': 2,
        'dependencyType': 0
    }, 
    // ...
    ];

---