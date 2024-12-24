#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesArrayPlainStructure/"
}

Use the [nodes.dataSource](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/dataSource.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#dataSource') property to bind the UI component to a list of nodes where each record specifies a node's key value and includes a parent node's key value reference.

Specify the following **required properties**: [nodes.keyExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#keyExpr'), [nodes.parentKeyExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/parentKeyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#parentKeyExpr').

**Do not specify** the [nodes.itemsExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/itemsExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#itemsExpr') and [edges](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/') properties because they are a part of another binding mode.

During the binding process, the UI component creates a shape for every bound node and a connector between every pair of nodes linked by the _Key_ - _Parent Key_ reference. Note that edges are not maintained as entities in a data source, thus a detached connector disappears after rebinding.

![Diagram - Linear Array](/images/diagram/db-linear-array.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "ID",
                    data: employees
                }),
                keyExpr: "ID",
                parentKeyExpr: "Head_ID",            
                textExpr: "Title"
            },
        });
    });

    <!-- tab: data.js -->
    const employees = [{
        "ID": 3,
        "Full_Name": "Arthur Miller",
        "Title": "CTO",
    }, {
        "ID": 6,
        "Head_ID": 3,
        "Full_Name": "Brett Wade",
        "Title": "IT Manager",
    }, {
        "ID": 9,
        "Head_ID": 3,
        "Full_Name": "Barb Banks",
        "Title": "Support Manager",
    }, {
        "ID": 18,
        "Head_ID": 9,
        "Full_Name": "James Anderson",
        "Title": "Support Assistant",
    }, {
        "ID": 21,
        "Head_ID": 6,
        "Full_Name": "Taylor Riley",
        "Title": "Network Admin",
    }, {
        "ID": 23,
        "Head_ID": 6,
        "Full_Name": "Wally Hobbs",
        "Title": "Programmer",
    }, {
        "ID": 24,
        "Head_ID": 6,
        "Full_Name": "Brad Jameson",
        "Title": "Programmer",
    }];

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram>
        <dxo-nodes
            [dataSource]="dataSource"
            keyExpr="ID"
            textExpr="Title"
            parentKeyExpr="Head_ID"
        >
        </dxo-nodes>
    </dx-diagram>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import ArrayStore from "devextreme/data/array_store";
    import { Service } from "./app.service";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [Service]
    })
    
    export class AppComponent {
        dataSource: ArrayStore;
        constructor(service: Service) {
            this.dataSource = new ArrayStore({
            key: "ID",
            data: service.getEmployees(),
            });
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from "@angular/core";

    export class Employee {
        ID: number;
        Head_ID?: number;
        Full_Name: string;
        Title: string;
    }

    const employees: Employee[] = [
        {
            ID: 3,
            Full_Name: "Arthur Miller",
            Title: "CTO",
        },
        {
            ID: 6,
            Head_ID: 3,
            Full_Name: "Brett Wade",
            Title: "IT Manager",
        },
        {
            ID: 9,
            Head_ID: 3,
            Full_Name: "Barb Banks",
            Title: "Support Manager",
        },
        {
            ID: 18,
            Head_ID: 9,
            Full_Name: "James Anderson",
            Title: "Support Assistant",
        },
        {
            ID: 21,
            Head_ID: 6,
            Full_Name: "Taylor Riley",
            Title: "Network Admin",
        },
        {
            ID: 23,
            Head_ID: 6,
            Full_Name: "Wally Hobbs",
            Title: "Programmer",
        },
        {
            ID: 24,
            Head_ID: 6,
            Full_Name: "Brad Jameson",
            Title: "Programmer",
        },
    ];

    @Injectable()
    export class Service {
        getEmployees() {
            return employees;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxDiagram>
        <DxNodes
            :data-source="dataSource"
            :key-expr="'ID'"
            :text-expr="'Title'"
            :parent-key-expr="'Head_ID'"
        />
    </DxDiagram>
    </template>

    <script>
    import {
        DxDiagram, DxNodes
    } from 'devextreme-vue/diagram';
    import ArrayStore from 'devextreme/data/array_store';
    import service from './data.js';

    export default {
        components: {
            DxDiagram, DxNodes
        },
        data() {
            return {
                dataSource: new ArrayStore({
                    key: 'ID',
                    data: service.getEmployees(),
                })
            };
        }
    };
    </script>

    <!-- tab: data.js -->
    const employees = [
        {
            ID: 3,
            Full_Name: "Arthur Miller",
            Title: "CTO",
        },
        {
            ID: 6,
            Head_ID: 3,
            Full_Name: "Brett Wade",
            Title: "IT Manager",
        },
        {
            ID: 9,
            Head_ID: 3,
            Full_Name: "Barb Banks",
            Title: "Support Manager",
        },
        {
            ID: 18,
            Head_ID: 9,
            Full_Name: "James Anderson",
            Title: "Support Assistant",
        },
        {
            ID: 21,
            Head_ID: 6,
            Full_Name: "Taylor Riley",
            Title: "Network Admin",
        },
        {
            ID: 23,
            Head_ID: 6,
            Full_Name: "Wally Hobbs",
            Title: "Programmer",
        },
        {
            ID: 24,
            Head_ID: 6,
            Full_Name: "Brad Jameson",
            Title: "Programmer",
        },
    ];

    export default {
        getEmployees() {
            return employees;
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
        data: service.getEmployees(),
    });

    const App = () => {
        return (
            <Diagram>
            <Nodes 
                dataSource={dataSource} 
                keyExpr="ID" 
                textExpr="Title" 
                parentKeyExpr="Head_ID"
            />
            </Diagram>
        );
    };

    export default App;

    <!-- tab: data.js -->
    const employees = [
        {
            ID: 3,
            Full_Name: "Arthur Miller",
            Title: "CTO",
        },
        {
            ID: 6,
            Head_ID: 3,
            Full_Name: "Brett Wade",
            Title: "IT Manager",
        },
        {
            ID: 9,
            Head_ID: 3,
            Full_Name: "Barb Banks",
            Title: "Support Manager",
        },
        {
            ID: 18,
            Head_ID: 9,
            Full_Name: "James Anderson",
            Title: "Support Assistant",
        },
        {
            ID: 21,
            Head_ID: 6,
            Full_Name: "Taylor Riley",
            Title: "Network Admin",
        },
        {
            ID: 23,
            Head_ID: 6,
            Full_Name: "Wally Hobbs",
            Title: "Programmer",
        },
        {
            ID: 24,
            Head_ID: 6,
            Full_Name: "Brad Jameson",
            Title: "Programmer",
        },
    ];

    export default {
        getEmployees() {
            return employees;
        }
    }

---