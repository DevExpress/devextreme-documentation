The Gantt UI component requires separate data sources for [tasks](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/tasks '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/'), [resources](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/resources '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/resources/'), [resource assignments](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/resourceAssignments '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/resourceAssignments/') and [dependencies](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/dependencies '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/dependencies/'). 

[note]

- The **tasks** data source is required, whereas the data sources that contain [resources](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/resources '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/resources/'), [dependencies](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/dependencies '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/dependencies/'), and [resource assignments](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/resourceAssignments '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/resourceAssignments/') are optional.

- 'id' and 'parentId' fields should not have the same value.

- If your first (root) task 'parentId' value is not 0, specify a [rootValue](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/rootValue.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#rootValue'). For example, if the root task 'parentId' is -1, set the **rootValue** property to -1.  

[/note]

The example below illustrates how to bind the Gantt UI component to data sources that contain the same field names as those the UI component uses in its internal binding settings. If field names of your data sources differ from the standard field names, use the **[dataField]Expr** expressions listed in the API section of [tasks](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/tasks '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/'), [resources](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/resources '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/resources/'), [resource assignments](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/resourceAssignments '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/resourceAssignments/'), and [dependencies](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/dependencies '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/dependencies/').

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            rootValue: -1,
            tasks: {
                dataSource: tasks
            },
            dependencies: {
                dataSource: dependencies
            },
            resources: {
                dataSource: resources
            },
            resourceAssignments: {
                dataSource: resourceAssignments
            }
            ...
        });
    });

    <!-- tab: data.js -->
    const tasks = [{
        id: 1,
        parentId: -1,
        title: 'Software Development',
        start: new Date('2019-02-21T05:00:00.000Z'),
        end: new Date('2019-07-04T12:00:00.000Z'),
        progress: 31,
    }, {
        id: 2,
        parentId: 1,
        title: 'Scope',
        start: new Date('2019-02-21T05:00:00.000Z'),
        end: new Date('2019-02-26T09:00:00.000Z'),
        progress: 60,
    }, {
        id: 3,
        parentId: 2,
        title: 'Determine project scope',
        start: new Date('2019-02-21T05:00:00.000Z'),
        end: new Date('2019-02-21T09:00:00.000Z'),
        progress: 100,
    }];

    const dependencies = [{
        id: 1,
        predecessorId: 1,
        successorId: 2,
        type: 0,
    }, {
        id: 2,
        predecessorId: 2,
        successorId: 3,
        type: 0,
    }];

    const resources = [{
        id: 1,
        text: 'Management',
    }];

    const resourceAssignments = [{
        id: 0,
        taskId: 3,
        resourceId: 1,
    }];

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt [rootValue]="-1">
        <dxo-tasks [dataSource]="tasks"></dxo-tasks>
        <dxo-dependencies [dataSource]="dependencies"></dxo-dependencies>
        <dxo-resources [dataSource]="resources"></dxo-resources>
        <dxo-resource-assignments
            [dataSource]="resourceAssignments"
        ></dxo-resource-assignments>
    </dx-gantt>

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export interface Task {
        id: number;

        parentId: number;

        title: string;

        start: Date;

        end: Date;

        progress: number;
    }

    export interface Dependency {
        id: number;

        predecessorId: number;

        successorId: number;

        type: number;
    }

    export interface Resource {
        id: number;

        text: string;
    }

    export interface ResourceAssignment {
        id: number;

        taskId: number;

        resourceId: number;
    }

    const tasks: Task[] = [{
        id: 1,
        parentId: -1,
        title: 'Software Development',
        start: new Date('2019-02-21T05:00:00.000Z'),
        end: new Date('2019-05-04T12:00:00.000Z'),
        progress: 31,
    }, {
        id: 2,
        parentId: 1,
        title: 'Scope',
        start: new Date('2019-02-21T05:00:00.000Z'),
        end: new Date('2019-02-26T09:00:00.000Z'),
        progress: 60,
    }, {
        id: 3,
        parentId: 2,
        title: 'Determine project scope',
        start: new Date('2019-02-21T05:00:00.000Z'),
        end: new Date('2019-02-21T09:00:00.000Z'),
        progress: 100,
    }];

    const dependencies: Dependency[] = [{
        id: 1,
        predecessorId: 1,
        successorId: 2,
        type: 0,
    }, {
        id: 2,
        predecessorId: 2,
        successorId: 3,
        type: 0,
    }];

    const resources: Resource[] = [{
        id: 1,
        text: 'Management',
    }];

    const resourceAssignments: ResourceAssignment[] = [{
        id: 0,
        taskId: 3,
        resourceId: 1,
    }];

    @Injectable()
    export class Service {
        getTasks(): Task[] {
            return tasks;
        }

        getDependencies(): Dependency[] {
            return dependencies;
        }

        getResources(): Resource[] {
            return resources;
        }

        getResourceAssignments(): ResourceAssignment[] {
            return resourceAssignments;
        }
    }

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import {
        Service, Task, Dependency, Resource, ResourceAssignment,
    } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [Service],
    })
    export class AppComponent {
        tasks: Task[];

        dependencies: Dependency[];

        resources: Resource[];

        resourceAssignments: ResourceAssignment[];

        constructor(service: Service) {
            this.tasks = service.getTasks();
            this.dependencies = service.getDependencies();
            this.resources = service.getResources();
            this.resourceAssignments = service.getResourceAssignments();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    template>
    <DxGantt
        :root-value="-1"
    >
        <DxTasks :data-source="tasks"/>
        <DxDependencies :data-source="dependencies"/>
        <DxResources :data-source="resources"/>
        <DxResourceAssignments :data-source="resourceAssignments"/>
    </DxGantt>
    </template>

    <script>
    // ..
    import {
        DxGantt,
        DxTasks,
        DxDependencies,
        DxResources,
        DxResourceAssignments,
    } from 'devextreme-vue/gantt';

    import {
        tasks,
        dependencies,
        resources,
        resourceAssignments,
    } from './data.js';

    export default {
        components: {
            DxGantt,
            DxTasks,
            DxDependencies,
            DxResources,
            DxResourceAssignments,
        },
        data() {
            return {
                tasks,
                dependencies,
                resources,
                resourceAssignments,
            };
        },
    };
    </script>

    <!-- tab: data.js -->
    export const tasks = [{
        id: 1,
        parentId: -1,
        title: 'Software Development',
        start: new Date('2019-02-21T05:00:00.000Z'),
        end: new Date('2019-07-04T12:00:00.000Z'),
        progress: 31,
    }, {
        id: 2,
        parentId: 1,
        title: 'Scope',
        start: new Date('2019-02-21T05:00:00.000Z'),
        end: new Date('2019-02-26T09:00:00.000Z'),
        progress: 60,
    }, {
        id: 3,
        parentId: 2,
        title: 'Determine project scope',
        start: new Date('2019-02-21T05:00:00.000Z'),
        end: new Date('2019-02-21T09:00:00.000Z'),
        progress: 100,
    }];

    export const dependencies = [{
        id: 1,
        predecessorId: 1,
        successorId: 2,
        type: 0,
    }, {
        id: 2,
        predecessorId: 2,
        successorId: 3,
        type: 0,
    }];

    export const resources = [{
        id: 1,
        text: 'Management',
    }];
    
    export const resourceAssignments = [{
        id: 0,
        taskId: 3,
        resourceId: 1,
    }];

##### React

    <!-- tab: App.js -->
    import Gantt, {
        Tasks, Dependencies, Resources, ResourceAssignments,
    } from 'devextreme-react/gantt';

    import {
        tasks, dependencies, resources, resourceAssignments,
    } from './data.js';

    function App() {
        return (
            <Gantt rootValue={-1}>
                <Tasks dataSource={tasks} />
                <Dependencies dataSource={dependencies} />
                <Resources dataSource={resources} />
                <ResourceAssignments dataSource={resourceAssignments} />
            </Gantt>
        );
    }

    export default App;

    <!-- tab: data.js -->
    export const tasks = [{
        id: 1,
        parentId: -1,
        title: 'Software Development',
        start: new Date('2019-02-21T05:00:00.000Z'),
        end: new Date('2019-07-04T12:00:00.000Z'),
        progress: 31,
    }, {
        id: 2,
        parentId: 1,
        title: 'Scope',
        start: new Date('2019-02-21T05:00:00.000Z'),
        end: new Date('2019-02-26T09:00:00.000Z'),
        progress: 60,
    }, {
        id: 3,
        parentId: 2,
        title: 'Determine project scope',
        start: new Date('2019-02-21T05:00:00.000Z'),
        end: new Date('2019-02-21T09:00:00.000Z'),
        progress: 100,
    }];

    export const dependencies = [{
        id: 1,
        predecessorId: 1,
        successorId: 2,
        type: 0,
    }, {
        id: 2,
        predecessorId: 2,
        successorId: 3,
        type: 0,
    }];

    export const resources = [{
        id: 1,
        text: 'Management',
    }];
    
    export const resourceAssignments = [{
        id: 0,
        taskId: 3,
        resourceId: 1,
    }];

---