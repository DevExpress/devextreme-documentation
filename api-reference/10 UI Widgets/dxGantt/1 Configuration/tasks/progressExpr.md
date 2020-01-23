---
id: dxGantt.Options.tasks.progressExpr
type: String | function()
default: 'progress'
---
---
##### shortDescription
Specifies the data field that provides tasks' progress.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            tasks: {
                dataSource: tasks,
                progressExpr: "taskProgress"
            },
            //...
        });
    });
    <!-- tab: data.js -->
    var tasks = [{
        'id': 1,
        'parentId': 0,
        'title': 'Software Development',
        'start': new Date('2019-02-21T05:00:00.000Z'),
        'end': new Date('2019-07-04T12:00:00.000Z'),
        'taskProgress': 31
    },
    // ...
    ];

##### Angular

    <!-- tab: app.component.ts -->
    import { DxGanttModule } from 'devextreme-angular';
    import { Service, Task, Dependency, Resource, ResourceAssignment } from './app.service';
    // ...
    export class AppComponent {
        tasks: Task[];
        // ...
    }
    <!-- tab: app.component.html -->
    <dx-gantt ... 
        <dxo-tasks [dataSource]="tasks" [progressExpr]="taskProgress" ></dxo-tasks>
		// ...
    </dx-gantt>
    <!-- tab: app.service.ts -->
    let tasks: Task[] = [{
        'id': 1,
        'parentId': 0,
        'title': 'Software Development',
        'start': new Date('2019-02-21T05:00:00.000Z'),
        'end': new Date('2019-07-04T12:00:00.000Z'),
        'taskProgress': 31
    }, 
    // ...   
    ]; 

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ...
            <DxTasks 
                :data-source="tasksDataSource"
                progressExpr="taskProgress" />
			// ...
        </DxGantt>
    </template>
    <script>
        import {
            DxGantt,
            DxTasks,
			// ...
        } from 'devextreme-vue/gantt';

        import {
            tasks,
			// ...
        } from './data.js';

        export default {
            components: {
                DxGantt,
                DxTasks,
				// ...
            },
            data() {
                return {
                tasks,
				// ...
                };
            },
            computed: {
                tasksDataSource() { return tasks; },
				// ...
            }
        };
    </script>
    <!-- tab: data.js -->
    export const tasks = [{
        'id': 1,
        'parentId': 0,
        'title': 'Software Development',
        'start': new Date('2019-02-21T05:00:00.000Z'),
        'end': new Date('2019-07-04T12:00:00.000Z'),
        'taskProgress': 31
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
                <Tasks dataSource={tasks} progressExpr="taskProgress" />
				// ...
            </Gantt>
            );
        }
    }
    export default App;
    <!-- tab: data.js -->
    export const tasks = [{
        'taskId': 1,
        'parentTaskId': 0,
        'title': 'Software Development',
        'start': new Date('2019-02-21T05:00:00.000Z'),
        'end': new Date('2019-07-04T12:00:00.000Z'),
        'taskProgress': 31
    },
    // ...
    ];
    
---