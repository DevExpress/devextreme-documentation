---
id: dxGantt.Options.resources.textExpr
type: String | function()
default: 'text'
---
---
##### shortDescription
Specifies the data field that provides resource texts.

---
---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            resources: {
                dataSource: resources,
                textExpr: "title"
            },
            //...
        });
    });
    <!-- tab: data.js -->
    var resources = [{
        'id': 1,
        'title': 'Management'
    }, 
    // ...
    ];    

##### Angular

    <!-- tab: app.component.ts -->
    import { DxGanttModule } from 'devextreme-angular';
    import { Service, Task, Dependency, Resource, ResourceAssignment } from './app.service';
    // ...
    export class AppComponent {
        resources: Resource[];		
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
        <dxo-resources [dataSource]="resources" [textExpr]="title" ></dxo-resources>
		// ...
    </dx-gantt>
    <!-- tab: app.service.ts -->
    let resources: Resource[] = [{
        'id': 1,
        'title': 'Management'
    },
    // ...   
    ]; 
     

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ...
            <DxResources 
                :data-source="resourcesDataSource"
                textExpr="title" 
            />
			// ...
        </DxGantt>
    </template>
    <script>
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
            },
            computed: {
                resourcesDataSource() { return resources; },
				// ...
            }
        };
    </script>
    <!-- tab: data.js -->
    export const resources = [{
        'id': 1,
        'title': 'Management'
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
                <Resources 
                    dataSource={resources}
                    textExpr="title" />
				// ...
            </Gantt>
            );
        }
    }
    export default App;
    <!-- tab: data.js -->
    export const resources = [{
        'id': 1,
        'title': 'Management'
    },
    // ...
    ];

---
