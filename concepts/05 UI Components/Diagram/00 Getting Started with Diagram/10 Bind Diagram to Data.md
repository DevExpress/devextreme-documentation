Use the [nodes.dataSource](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/dataSource.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#dataSource') property to bind Diagram to a list of nodes. This tutorial uses a [linear array](/concepts/05%20UI%20Components/Diagram/10%20Data%20Binding/20%20Linear%20Array.md '/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Linear_Array') of nodes as the data source for the initial Diagram. In this case, the required properties to specify are [nodes.keyExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#keyExpr') and [nodes.parentKeyExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/parentKeyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#parentKeyExpr'). The tutorial also includes [nodes.textExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/textExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#textExpr').

For details about different ways to bind Diagram data, refer to the following help topic: [Data Binding](/concepts/05%20UI%20Components/Diagram/10%20Data%20Binding '/Documentation/Guide/UI_Components/Diagram/Data_Binding/').

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: 'ID',
                    data: projectTasks,
                }),
                keyExpr: "ID",
                parentKeyExpr: "Parent_ID",
                textExpr: "Task_Name",
            },
        });
    });

    <!-- tab: data.js -->
    const projectTasks = [
        {
            "ID": 1,
            "Task_Name": "Project Planning",
            "Description": "Define project scope and goals",
        },
        {
            "ID": 2,
            "Parent_ID": 1,
            "Task_Name": "Requirement Analysis",
            "Description": "Gather and document requirements",
        },
        {
            "ID": 3,
            "Parent_ID": 1,
            "Task_Name": "Resource Allocation",
            "Description": "Assign team and resources",
        },
        {
            "ID": 4,
            "Parent_ID": 2,
            "Task_Name": "Design Specifications",
            "Description": "Outline system design",
        },
        {
            "ID": 5,
            "Parent_ID": 3,
            "Task_Name": "Task Scheduling",
            "Description": "Develop project timeline",
        },
        {
            "ID": 6,
            "Parent_ID": 2,
            "Task_Name": "Risk Assessment",
            "Description": "Identify potential risks",
        },
        {
            "ID": 7,
            "Parent_ID": 1,
            "Task_Name": "Kick-off Meeting",
            "Description": "Launch project with stakeholders",
        }
    ];


##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram>
        <dxo-nodes
            [dataSource]="dataSource"
            keyExpr="ID"
            parentKeyExpr="Parent_ID"
            textExpr="Task_Name"
        >
        </dxo-nodes>
    </dx-diagram>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import ArrayStore from "devextreme/data/array_store";
    import { Service, Task } from "./app.service";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [Service]
    })
    
    export class AppComponent {
        projectTasks: Task[];
        dataSource: ArrayStore;
        constructor(service: AppService) {
            this.projectTasks = service.getTasks();
            this.dataSource = new ArrayStore({
                key: 'ID',
                data: service.getTasks(),
            });
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Task {
        "ID": number;
        "Parent_ID"?: number;
        "Task_Name": string;
        "Description": string;
    }

    const projectTasks: Task[] = [
        {
            "ID": 1,
            "Task_Name": "Project Planning",
            "Description": "Define project scope and goals",
        },
        {
            "ID": 2,
            "Parent_ID": 1,
            "Task_Name": "Requirement Analysis",
            "Description": "Gather and document requirements",
        },
        {
            "ID": 3,
            "Parent_ID": 1,
            "Task_Name": "Resource Allocation",
            "Description": "Assign team and resources",
        },
        {
            "ID": 4,
            "Parent_ID": 2,
            "Task_Name": "Design Specifications",
            "Description": "Outline system design",
        },
        {
            "ID": 5,
            "Parent_ID": 3,
            "Task_Name": "Task Scheduling",
            "Description": "Develop project timeline",
        },
        {
            "ID": 6,
            "Parent_ID": 2,
            "Task_Name": "Risk Assessment",
            "Description": "Identify potential risks",
        },
        {
            "ID": 7,
            "Parent_ID": 1,
            "Task_Name": "Kick-off Meeting",
            "Description": "Launch project with stakeholders",
        }
    ];

    @Injectable({
        providedIn: 'root'
    })
    export class AppService {
        getTasks() {
            return projectTasks;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxDiagram>
        <DxNodes
            :data-source="dataSource"
            :key-expr="'ID'"
            :text-expr="'Task_Name'"
            :parent-key-expr="'Parent_ID'"
        />
    </DxDiagram>
    </template>

    <script setup>
    import {
        DxDiagram, DxNodes
    } from 'devextreme-vue/diagram';
    import ArrayStore from 'devextreme/data/array_store';
    import service from './data.js';

    const dataSource = new ArrayStore({
        key: 'ID',
        data: service.getTasks(),
    });
    </script>

    <!-- tab: data.js -->
    const projectTasks = [
        {
            "ID": 1,
            "Task_Name": "Project Planning",
            "Description": "Define project scope and goals",
        },
        {
            "ID": 2,
            "Parent_ID": 1,
            "Task_Name": "Requirement Analysis",
            "Description": "Gather and document requirements",
        },
        {
            "ID": 3,
            "Parent_ID": 1,
            "Task_Name": "Resource Allocation",
            "Description": "Assign team and resources",
        },
        {
            "ID": 4,
            "Parent_ID": 2,
            "Task_Name": "Design Specifications",
            "Description": "Outline system design",
        },
        {
            "ID": 5,
            "Parent_ID": 3,
            "Task_Name": "Task Scheduling",
            "Description": "Develop project timeline",
        },
        {
            "ID": 6,
            "Parent_ID": 2,
            "Task_Name": "Risk Assessment",
            "Description": "Identify potential risks",
        },
        {
            "ID": 7,
            "Parent_ID": 1,
            "Task_Name": "Kick-off Meeting",
            "Description": "Launch project with stakeholders",
        }
    ];

    export default {
        getTasks() {
            return projectTasks;
        }
    }

##### React

    <!-- tab: App.js -->
    import React from "react";
    import Diagram, { Nodes } from "devextreme-react/diagram";
    import ArrayStore from "devextreme/data/array_store";
    import service from "./data.js";

    const dataSource = new ArrayStore({
        key: 'ID',
        data: service.getTasks(),
    });

    const App = () => {
        return (
            <Diagram>
            <Nodes 
                dataSource={dataSource} 
                keyExpr="ID" 
                textExpr="Task_Name" 
                parentKeyExpr="Parent_ID"
            />
            </Diagram>
        );
    };

    export default App;

    <!-- tab: data.js -->
    const projectTasks = [
        {
            "ID": 1,
            "Task_Name": "Project Planning",
            "Description": "Define project scope and goals",
        },
        {
            "ID": 2,
            "Parent_ID": 1,
            "Task_Name": "Requirement Analysis",
            "Description": "Gather and document requirements",
        },
        {
            "ID": 3,
            "Parent_ID": 1,
            "Task_Name": "Resource Allocation",
            "Description": "Assign team and resources",
        },
        {
            "ID": 4,
            "Parent_ID": 2,
            "Task_Name": "Design Specifications",
            "Description": "Outline system design",
        },
        {
            "ID": 5,
            "Parent_ID": 3,
            "Task_Name": "Task Scheduling",
            "Description": "Develop project timeline",
        },
        {
            "ID": 6,
            "Parent_ID": 2,
            "Task_Name": "Risk Assessment",
            "Description": "Identify potential risks",
        },
        {
            "ID": 7,
            "Parent_ID": 1,
            "Task_Name": "Kick-off Meeting",
            "Description": "Launch project with stakeholders",
        }
    ];

    export default {
        getTasks() {
            return projectTasks;
        }
    }

---