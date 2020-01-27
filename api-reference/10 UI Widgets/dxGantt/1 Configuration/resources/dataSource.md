---
id: dxGantt.Options.resources.dataSource
type: Array<Object> | DataSource | DataSource_Options
default: null
---
---
##### shortDescription
Binds the widget to the data source, which contains resources.

---
---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            resources: {
                dataSource: resources
            },
            //...
        });
    });
    <!-- tab: data.js -->
    var resources = [{
        'id': 1,
        'text': 'Management'
    }, 
    // ...
    ];    

##### Angular

    <!-- tab: app.component.ts -->
    import { DxGanttModule } from 'devextreme-angular';
    import { Resource, ... } from './app.service';
    export class AppComponent {
        resources: Resource[];
        // ...
    }
    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-resources [dataSource]="resources" />
        <!-- ... --> 
    </dx-gantt>
    <!-- tab: app.service.ts -->
    let resources: Resource[] = [{
        'id': 1,
        'text': 'Management'
    },
    // ...   
    ];

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxResources :data-source="resourcesDataSource" />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import { DxGantt, DxResources, ... } from 'devextreme-vue/gantt';
        import { resources, ... } from './data.js';
        export default {
            components: { DxResources, ... },
            data() {
                return { resources, ... };
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
        'text': 'Management'
    },
    // ...
    ];

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Gantt, { Resources, ... } from 'devextreme-react/gantt';
    import { resources, ... } from './data.js';
    class App extends React.Component {
        render() {
            return (
                <Gantt ... >   
                    <Resources dataSource={resources} />
                    {/* ... */}
                </Gantt>
            );
        }
    }
    <!-- tab: data.js -->
    export const resources = [{
        'id': 1,
        'text': 'Management'
    },
    // ...
    ];

---

