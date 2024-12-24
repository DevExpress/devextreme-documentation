#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesArrayHierarchicalStructure/"
}

Use the [nodes.dataSource](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/dataSource.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#dataSource') property to bind the UI component to a hierarchical object. 

Specify the following **required properties**: [nodes.keyExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#keyExpr'), [nodes.itemsExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/itemsExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#itemsExpr').

**Do not specify** the [nodes.parentKeyExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/parentKeyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#parentKeyExpr') and [edges](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/') properties because they are a part of another binding mode.

During the binding process, the UI component creates a shape for every bound node and all connectors that are between a node and its children. Note that the edges are not maintained as entities in a data source, thus the detached connector disappears after it is rebound.

![Diagram - Node and Edge Arrays](/images/diagram/db-linear-array.png)

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
                textExpr: "Title",
                itemsExpr: "Items",
            },
        });
    });

    <!-- tab: data.js -->
    const employees = [{
        "ID": 3,
        "Full_Name": "Arthur Miller",
        "Title": "CTO",
        "Items": [{
            "ID": 6,
            "Full_Name": "Brett Wade",
            "Title": "IT Manager",
            "Items": [{
                "ID": 21,
                "Full_Name": "Taylor Riley",
                "Title": "Network Admin",
            }, {
                "ID": 23,
                "Full_Name": "Wally Hobbs",
                "Title": "Programmer",
            }, {
                "ID": 24,
                "Full_Name": "Brad Jameson",
                "Title": "Programmer",
            }]
        }, {
            "ID": 9,
            "Full_Name": "Barb Banks",
            "Title": "Support Manager",
            "Items": [{
                "ID": 18,
                "Full_Name": "James Anderson",
                "Title": "Support Assistant",
            }]
        }]
    }];

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram>
        <dxo-nodes
            [dataSource]="dataSource"
            keyExpr="ID"
            textExpr="Title"
            itemsExpr="Items"
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
        Full_Name: string;
        Title: string;
        Items: Employee[];
    }

    const employees = [{
        "ID": 3,
        "Full_Name": "Arthur Miller",
        "Title": "CTO",
        "Items": [{
            "ID": 6,
            "Full_Name": "Brett Wade",
            "Title": "IT Manager",
            "Items": [{
                "ID": 21,
                "Full_Name": "Taylor Riley",
                "Title": "Network Admin",
            }, {
                "ID": 23,
                "Full_Name": "Wally Hobbs",
                "Title": "Programmer",
            }, {
                "ID": 24,
                "Full_Name": "Brad Jameson",
                "Title": "Programmer",
            }]
        }, {
            "ID": 9,
            "Full_Name": "Barb Banks",
            "Title": "Support Manager",
            "Items": [{
                "ID": 18,
                "Full_Name": "James Anderson",
                "Title": "Support Assistant",
            }]
        }]
    }];

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
            :items-expr="'Items'"
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
    const employees = [{
        "ID": 3,
        "Full_Name": "Arthur Miller",
        "Title": "CTO",
        "Items": [{
            "ID": 6,
            "Full_Name": "Brett Wade",
            "Title": "IT Manager",
            "Items": [{
                "ID": 21,
                "Full_Name": "Taylor Riley",
                "Title": "Network Admin",
            }, {
                "ID": 23,
                "Full_Name": "Wally Hobbs",
                "Title": "Programmer",
            }, {
                "ID": 24,
                "Full_Name": "Brad Jameson",
                "Title": "Programmer",
            }]
        }, {
            "ID": 9,
            "Full_Name": "Barb Banks",
            "Title": "Support Manager",
            "Items": [{
                "ID": 18,
                "Full_Name": "James Anderson",
                "Title": "Support Assistant",
            }]
        }]
    }];

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
                    itemsExpr="Items"
                />
            </Diagram>
        );
    };

    export default App;

    <!-- tab: data.js -->
    const employees = [{
        "ID": 3,
        "Full_Name": "Arthur Miller",
        "Title": "CTO",
        "Items": [{
            "ID": 6,
            "Full_Name": "Brett Wade",
            "Title": "IT Manager",
            "Items": [{
                "ID": 21,
                "Full_Name": "Taylor Riley",
                "Title": "Network Admin",
            }, {
                "ID": 23,
                "Full_Name": "Wally Hobbs",
                "Title": "Programmer",
            }, {
                "ID": 24,
                "Full_Name": "Brad Jameson",
                "Title": "Programmer",
            }]
        }, {
            "ID": 9,
            "Full_Name": "Barb Banks",
            "Title": "Support Manager",
            "Items": [{
                "ID": 18,
                "Full_Name": "James Anderson",
                "Title": "Support Assistant",
            }]
        }]
    }];

    export default {
        getEmployees() {
            return employees;
        }
    }

---