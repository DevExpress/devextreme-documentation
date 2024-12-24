#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesAndEdgesArrays/"
}

Use the [nodes.dataSource](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/dataSource.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#dataSource') and [edges.dataSource](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/dataSource.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#dataSource') properties to bind the Diagram UI component to plain lists of nodes and edges.

Specify the following **required properties**: [nodes.keyExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#keyExpr'), [edges.keyExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#keyExpr').

**Do not specify** the [parentKeyExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/parentKeyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#parentKeyExpr') and [itemsExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/itemsExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#itemsExpr') properties, because they are a part of another binding mode.

During the binding process, the UI component creates a shape for every bound node and a connector for every bound edge. To attach a start or end of a connector to a shape, use the [edges.fromExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/fromExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#fromExpr') and [edges.toExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/toExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#toExpr') properties. These expressions should return keys of attached nodes.

![Diagram - Node and Edge Arrays](/images/diagram/db-node-and-edge-arrays.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "id",
                    data: orgItems
                }),
                keyExpr: "id",
                textExpr: "text",
            },
            edges: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "id",
                    data: orgLinks
                }),
                keyExpr: "id",
                fromExpr: "from",
                toExpr: "to"
            },
        });
    });
        
    <!-- tab: data.js -->
    const orgItems = [{  
        "id":"101",
        "text":"Development",
    },{  
        "id":"102",
        "text":"Javascript\nTeam",
    },{  
        "id":"103",
        "text":"ASP.NET\nTeam",
    }];

    const orgLinks = [{  
        "id":"121",
        "from":"101",
        "to":"102",
    },{  
        "id":"122",
        "from":"101",
        "to":"103",
    }];

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram>
        <dxo-nodes 
            [dataSource]="flowNodesDataSource" 
            keyExpr="id" 
            textExpr="text"
        ></dxo-nodes>
        <dxo-edges
            [dataSource]="flowEdgesDataSource"
            keyExpr="id"
            fromExpr="from"
            toExpr="to"
        ></dxo-edges>
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
        flowNodesDataSource: ArrayStore;
        flowEdgesDataSource: ArrayStore;

        constructor(service: Service) {
            this.flowNodesDataSource = new ArrayStore({
                key: "id",
                data: service.getFlowNodes(),
            });
            this.flowEdgesDataSource = new ArrayStore({
                key: "id",
                data: service.getFlowEdges(),
            });
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from "@angular/core";

    export class FlowNode {
        id: number;
        text: string;
    }

    export class FlowEdge {
        id: number;
        from: number;
        to: number;
    }

    const flowNodes: FlowNode[] = [
        {
            id: 101,
            text: "Development",
        },
        {
            id: 102,
            text: "Javascript\nTeam",
        },
        {
            id: 103,
            text: "ASP.NET\nTeam",
        }
    ];

    const flowEdges: FlowEdge[] = [
        {
            id: 121,
            from: 101,
            to: 102,
        },
        {
            id: 122,
            from: 101,
            to: 103,
        }
    ];

    @Injectable()
    export class Service {
        getFlowNodes() {
            return flowNodes;
        }
        getFlowEdges() {
            return flowEdges;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxDiagram>
        <DxNodes
            :data-source="flowNodesDataSource"
            :key-expr="'id'"
            :text-expr="'text'"
        >
        </DxNodes>
        <DxEdges
            :data-source="flowEdgesDataSource"
            :key-expr="'id'"
            :from-expr="'from'"
            :to-expr="'to'"
        />
    </DxDiagram>
    </template>

    <script>
    import {
        DxDiagram, DxNodes, DxEdges
    } from 'devextreme-vue/diagram';
    import ArrayStore from 'devextreme/data/array_store';
    import service from './data.js';

    export default {
        components: {
            DxDiagram, DxNodes, DxEdges
        },
        data() {
            return {
                flowNodesDataSource: new ArrayStore({
                    key: 'id',
                    data: service.getFlowNodes(),
                }),
                flowEdgesDataSource: new ArrayStore({
                    key: 'id',
                    data: service.getFlowEdges(),
                }),
            };
        },
    };
    </script>

    <!-- tab: data.js -->
    const flowNodes = [
        {
            id: 101,
            text: "Development",
        },
        {
            id: 102,
            text: "Javascript\nTeam",
        },
        {
            id: 103,
            text: "ASP.NET\nTeam",
        },
    ];
    const flowEdges = [
        {
            id: 121,
            from: 101,
            to: 102,
        },
        {
            id: 122,
            from: 101,
            to: 103,
        },
    ];

    export default {
        getFlowNodes() {
            return flowNodes;
        },
        getFlowEdges() {
            return flowEdges;
        },
    };

##### React

    <!-- tab: App.js -->
    import React from "react";
    import Diagram, { Nodes, Edges } from "devextreme-react/diagram";
    import ArrayStore from "devextreme/data/array_store";
    import service from "./data.js";

    const flowNodesDataSource = new ArrayStore({
        key: "id",
        data: service.getFlowNodes(),
    });
    const flowEdgesDataSource = new ArrayStore({
        key: "id",
        data: service.getFlowEdges(),
    });

    const App = () => {
        return (
            <Diagram>
                <Nodes dataSource={flowNodesDataSource} keyExpr="id" textExpr="text" />
                <Edges
                    dataSource={flowEdgesDataSource}
                    keyExpr="id"
                    fromExpr="from"
                    toExpr="to"
                />
            </Diagram>
        );
    };

    export default App;

    <!-- tab: data.js -->
    const flowNodes = [
        {
            id: 101,
            text: "Development",
        },
        {
            id: 102,
            text: "Javascript\nTeam",
        },
        {
            id: 103,
            text: "ASP.NET\nTeam",
        },
    ];
    const flowEdges = [
        {
            id: 121,
            from: 101,
            to: 102,
        },
        {
            id: 122,
            from: 101,
            to: 103,
        },
    ];

    export default {
        getFlowNodes() {
            return flowNodes;
        },
        getFlowEdges() {
            return flowEdges;
        },
    };

---   