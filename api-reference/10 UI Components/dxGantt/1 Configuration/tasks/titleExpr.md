---
id: dxGantt.Options.tasks.titleExpr
type: String | function()
default: 'title'
---
---
##### shortDescription
Specifies the data field that provides task titles.

---
If the field name in your data source differs from default 'title', use this property to map data fields:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            tasks: {
                dataSource: tasks,
                // ...
                titleExpr: "taskTitle"
            },
            //...
        });
    });

    <!-- tab: data.js -->
    var tasks = [{
        'taskId': 1,
        'parentTaskId': 0,
        'taskTitle': 'Software Development',
        'startDate': new Date('2019-02-21T05:00:00.000Z'),
        'endDate': new Date('2019-07-04T12:00:00.000Z'),
        'taskProgress': 31
        'taskColor': 'red'
    },
    // ...
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-tasks ...
            [dataSource]="tasks" 
            titleExpr="taskTitle" >
        </dxo-tasks>
        <!-- ... -->
    </dx-gantt>

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';
    
    export class Task {
        taskId: number;
        parentTaskId: number;
        taskTitle: string;
        startDate: Date;
        endDate: Date;
        taskProgress: number;
        taskColor: string;
    }

    const tasks: Task[] = [{
        'taskId': 1,
        'parentTaskId': 0,
        'taskTitle': 'Software Development',
        'startDate': new Date('2019-02-21T05:00:00.000Z'),
        'endDate': new Date('2019-07-04T12:00:00.000Z'),
        'taskProgress': 31,
        'taskColor': 'red'
    },
    // ...   
    ]; 
    @Injectable()
    export class Service {
        getTasks(): Task[] {
            return tasks;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >        
            <DxTasks ...
                :data-source="tasks"
                title-expr="taskTitle" />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        // ...
    </script>

    <!-- tab: data.js -->
    export const tasks = [{
        'taskId': 1,
        'parentTaskId': 0,
        'taskTitle': 'Software Development',
        'startDate': new Date('2019-02-21T05:00:00.000Z'),
        'endDate': new Date('2019-07-04T12:00:00.000Z'),
        'taskProgress': 31,
        'taskColor': 'red'
    },
    // ...
    ];	

##### React

    <!-- tab: App.js -->
    // ...
    const App = () => {
        return (
            <Gantt ... >
                <Tasks ...
                    dataSource={tasks}
                    titleExpr="taskTitle" />
                {/* ... */}
            </Gantt>
        );
    };

    export default App;
    
    <!-- tab: data.js -->
    export const tasks = [{
        'taskId': 1,
        'parentTaskId': 0,
        'taskTitle': 'Software Development',
        'startDate': new Date('2019-02-21T05:00:00.000Z'),
        'endDate': new Date('2019-07-04T12:00:00.000Z'),
        'taskProgress': 31,
        'taskColor': 'red'
    },
    // ...
    ];

---