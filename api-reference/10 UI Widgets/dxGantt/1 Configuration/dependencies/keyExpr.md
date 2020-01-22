---
id: dxGantt.Options.dependencies.keyExpr
type: String | function()
default: 'id'
---
---
##### shortDescription
Specifies the data field that provides keys for dependencies.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            dependencies: {
                dataSource: dependencies,
                keyExpr: "key"
            },
            // your code
        });
    });
    <!-- tab: data.js -->
    var dependencies = [{
        'key': 0,
        'predecessorId': 1,
        'successorId': 2,
        'type': 0
    },
    // ...
    ];

##### Angular

    <!-- tab: app.service.ts -->
    export class Dependency {
        key: number;
        predecessorId: number;
        successorId: number;
        type: number;
    }
    let dependencies: Dependency[] = [{
        'key': 0,
        'predecessorId': 1,
        'successorId': 2,
        'type': 0
    },
    // ...
    ];
    <!-- tab: app.component.html -->
    <dx-gantt >
        <dxo-dependencies [dataSource]="dependencies" [keyExpr]="key" ></dxo-dependencies>
        // ...
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt>
            <DxDependencies 
                :data-source="dependenciesDataSource"
                keyExpr="key"
                />
            // ...
        </DxGantt>
    </template>
    <script>
    import {
        DxGantt,
        DxDependencies,
        // ...
    } from 'devextreme-vue/gantt';

    import {
        dependencies,
        // ...
    } from './data.js';
    // ...
    </script>
    <!-- tab: data.js -->
    export const dependencies = [{
        'key': 0,
        'predecessorId': 1,
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
                        keyExpr="key" />
                    // ...
                </Gantt>
            );
        }
    }
    <!-- tab: App.js -->
    export const dependencies = [{
        'key': 0,
        'predecessorId': 1,
        'successorId': 2,
        'type': 0
    }, 
    // ...
    ];
    
---
