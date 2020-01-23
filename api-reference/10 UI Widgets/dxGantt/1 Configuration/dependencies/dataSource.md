---
id: dxGantt.Options.dependencies.dataSource
type: Array<Object> | DataSource | DataSource_Options
default: null
---
---
##### shortDescription
Binds the widget to the data source which contains dependencies.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            dependencies: {
                dataSource: dependencies
            },
            //...
        });
    });
    <!-- tab: data.js -->
    var dependencies = [{
        'id': 0,
        'predecessorId': 1,
        'successorId': 2,
        'type': 0
    },
    // ...
    ];    

##### Angular

    <!-- tab: app.component.ts -->
    import { DxGanttModule } from 'devextreme-angular';
    import { Service, Task, Dependency, Resource, ResourceAssignment } from './app.service';
    // ...
    export class AppComponent {        
        dependencies: Dependency[];
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxGanttModule
        ],
        // ...
    })
    <!-- tab: app.component.html -->
    <dx-gantt ... 
        <dxo-dependencies [dataSource]="dependencies"></dxo-dependencies>
    </dx-gantt>
    <!-- tab: app.service.ts -->
    let dependencies: Dependency[] = [{
        'id': 0,
        'predecessorId': 1,
        'successorId': 2,
        'type': 0
    }, 
    // ...   
    ];  

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ...       
            <DxDependencies :data-source="dependenciesDataSource"/>
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
            },
            computed: {                
                dependenciesDataSource() { return dependencies; },
				// ...
            }
        };
    </script>
    <!-- tab: data.js -->
    export const dependencies = [{
        'id': 0,
        'predecessorId': 1,
        'successorId': 2,
        'type': 0
    },
    // ...
    ];

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Gantt, { Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing } from 'devextreme-react/gantt';
    import { tasks, dependencies, resources, resourceAssignments } from './data.js';

    class App extends React.Component {
        render() {
            return (
            <Gantt ...             
                <Dependencies dataSource={dependencies} />
                // ...
            </Gantt>
            );
        }
    }
    export default App;
    <!-- tab: data.js -->
    export const dependencies = [{
        'id': 0,
        'predecessorId': 1,
        'successorId': 2,
        'type': 0
    },
    // ...
    ];

---
