---
id: dxGantt.Options.tasks.titleExpr
type: String | function()
default: 'title'
---
---
##### shortDescription
Specifies the data field that provides task titles.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            tasks: {
                dataSource: tasks,
                titleExpr: "taskTitle"
            },
            //...
        });
    });
    <!-- tab: data.js -->
    var tasks = [{
        'id': 1,
        'parentId': 0,
        'taskTitle': 'Software Development',
        'start': new Date('2019-02-21T05:00:00.000Z'),
        'end': new Date('2019-07-04T12:00:00.000Z'),
        'progress': 31
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
        <dxo-tasks [dataSource]="tasks" [titleExpr]="taskTitle" ></dxo-tasks>
		// ...
    </dx-gantt>
    <!-- tab: app.service.ts -->
    let tasks: Task[] = [{
        'id': 1,
        'parentId': 0,
        'taskTitle': 'Software Development',
        'start': new Date('2019-02-21T05:00:00.000Z'),
        'end': new Date('2019-07-04T12:00:00.000Z'),
        'progress': 31
    }, 
    // ...   
    ]; 

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ...
            <DxTasks 
                :data-source="tasksDataSource"
                titleExpr="taskTitle" />
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
        'taskTitle': 'Software Development',
        'start': new Date('2019-02-21T05:00:00.000Z'),
        'end': new Date('2019-07-04T12:00:00.000Z'),
        'progress': 31
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
                <Tasks dataSource={tasks} titleExpr="taskTitle" />
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
        'taskTitle': 'Software Development',
        'start': new Date('2019-02-21T05:00:00.000Z'),
        'end': new Date('2019-07-04T12:00:00.000Z'),
        'progress': 31
    },
    // ...
    ];
    
---