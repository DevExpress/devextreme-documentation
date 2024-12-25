The UI component creates a diagram layout based on the algorithm specified by the [autoLayout.orientation](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/orientation.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#orientation") and [autoLayout.type](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/type.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#type") properties.

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                autoLayout: {
                    orientation: "horizontal"
                    type: "tree",
                },
                ...
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram>
        <dxo-nodes ...>
            <dxo-auto-layout orientation="horizontal" type="tree"></dxo-auto-layout>
        </dxo-nodes>
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxDiagram>
        <DxNodes ...>
            <DxAutoLayout :orientation="'horizontal'" :type="'tree'"/>
        </DxNodes>
    </DxDiagram>
    </template>

    <script>
    import {
        DxDiagram, DxNodes, DxAutoLayout
    } from 'devextreme-vue/diagram';

    export default {
        components: {
            DxDiagram, DxNodes, DxAutoLayout
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from "react";
    import Diagram, { Nodes, AutoLayout } from "devextreme-react/diagram";

    const App = () => {
        return (
            <Diagram>
                <Nodes ...>
                    <AutoLayout orientation="horizontal" type="tree" />
                </Nodes>
            </Diagram>
        );
    };

    export default App;

---

You can create a diagram layout based on shape coordinates maintained in a data source. Set the [leftExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/leftExpr.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#leftExpr") and [topExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/topExpr.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#topExpr") properties to names of data source fields that provide shape coordinates.

If you bind a Diagram to an array of edges, you can specify a shape's connection point where an edge begins ([fromPointIndexExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/fromPointIndexExpr.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#fromPointIndexExpr")) and ends ([toPointIndexExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/toPointIndexExpr.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#toPointIndexExpr")) and provide additional points for connectors with the [pointsExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/pointsExpr.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#pointsExpr") property.

Shape and edge point coordinates are specified in [units](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units").

[note]

If the [autoLayout.type](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/type.md "Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#type") property is set to **auto** (default value), and both the [leftExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/leftExpr.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#leftExpr") and [topExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/topExpr.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#topExpr") properties are specified, the autolayout feature is disabled. The UI component creates a diagram layout based on the provided coordinates. If the position properties are not specified, the **auto** type denotes the **layered** layout.

If the [autoLayout.type](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/type.md "Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#type") property is set to **layered** or **tree**, predefined shape coordinates ([leftExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/leftExpr.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#leftExpr") and [topExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/topExpr.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#topExpr")) and edge points ([pointsExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/pointsExpr.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#pointsExpr")) are ignored.

[/note]

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "key",
                    data: orgItems
                }),
                autoLayout: {
                    type: "off"
                },
                keyExpr: "key",
                leftExpr: "left",
                textExpr: "text",
                topExpr: "top",
            },
            edges: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "key",
                    data: orgLinks
                }),
                keyExpr: "key",
                fromExpr: "from",
                toExpr: "to",
                fromPointIndexExpr: "fromPoint",
                toPointIndexExpr: "toPoint",
                pointsExpr: "points",
            },
            units: "in",
        });
    });

    <!-- tab: data.js -->
    const orgItems = [
      {
            key: "101",
            left: 0.5,
            text: "Product Manager",
            top: 0.875,
      },
      {
            key: "102",
            left: 2.5,
            text: "Team",
            top: 0.5,
        },
    ];
    const orgLinks = [
      {
            key: "1",
            from: "101",
            to: "102",
            fromPoint: 1,
            toPoint: 3,
            points: [{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}],
      },
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram units="in">
        <dxo-nodes
            [dataSource]="orgItemsDataSource"
            keyExpr="key"
            textExpr="text"
            leftExpr="left"
            topExpr="top"
        >
            <dxo-auto-layout type="off"></dxo-auto-layout>
        </dxo-nodes>
        <dxo-edges
            [dataSource]="orgLinksDataSource"
            keyExpr="key"
            fromExpr="from"
            toExpr="to"
            fromPointIndexExpr="fromPoint"
            toPointIndexExpr="toPoint"
            pointsExpr="points"
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
        orgItemsDataSource: ArrayStore;

        orgLinksDataSource: ArrayStore;

        constructor(service: Service) {
            this.orgItemsDataSource = new ArrayStore({
                key: 'key',
                data: service.getOrgItems(),
            });
            this.orgLinksDataSource = new ArrayStore({
                key: 'key',
                data: service.getOrgLinks(),
            });
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    private class Point {
        x: number;
        y: number;
    }

    export class OrgItem {
        key: string;
        left: number;
        text: string;
        top: number;
    }

    export class OrgLink {
        key: string;
        from: string;
        to: string;
        fromPoint: number;
        toPoint: number;
        points: Point[];
    }

    const orgItems: OrgItem[] = [
        {
            key: "101",
            left: 0.5,
            text: "Product Manager",
            top: 0.875,
        },
        {
            key: "102",
            left: 2.5,
            text: "Team",
            top: 0.5,
            },
        ];
    const orgLinks: OrgLink[] = [
        {
            key: "1",
            from: "101",
            to: "102",
            fromPoint: 1,
            toPoint: 3,
            points: [{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}],
        },
    ];

    @Injectable()
    export class Service {
        getOrgItems() {
            return orgItems;
        }
        getOrgLinks() {
            return orgLinks;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDiagram units="in">
            <DxNodes
                :data-source="orgItemsDataSource"
                :key-expr="'key'"
                :text-expr="'text'"
                :left-expr="'left'"
                :top-expr="'top'"
            >
                <DxAutoLayout :type="'off'" />
            </DxNodes>
            <DxEdges
                :data-source="orgLinksDataSource"
                :key-expr="'key'"
                :from-expr="'from'"
                :to-expr="'to'"
                :from-point-index-expr="'fromPoint'"
                :toPointIndexExpr="'toPoint'"
                :points-expr="'points'"
            />
        </DxDiagram>
    </template>
    <script setup>
    import {
        DxDiagram, DxNodes, DxAutoLayout, DxEdges,
    } from 'devextreme-vue/diagram';
    import ArrayStore from 'devextreme/data/array_store';
    import service from './data.js';

    const orgItemsDataSource = new ArrayStore({
        key: 'key',
        data: service.getOrgItems(),
    });
    const orgLinksDataSource = new ArrayStore({
        key: 'key',
        data: service.getOrgLinks(),
    });
    </script>
    
    <!-- tab: data.js -->
    const orgItems = [
      {
            key: "101",
            left: 0.5,
            text: "Product Manager",
            top: 0.875,
      },
      {
            key: "102",
            left: 2.5,
            text: "Team",
            top: 0.5,
        },
    ];
    const orgLinks = [
      {
            key: "1",
            from: "101",
            to: "102",
            fromPoint: 1,
            toPoint: 3,
            points: [{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}],
      },
    ];

    export default {
        getOrgItems() {
            return orgItems;
        }
        getOrgLinks() {
            return orgLinks;
        }
    }

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Diagram, {
        Nodes, AutoLayout, Edges, Toolbox, Group,
    } from 'devextreme-react/diagram';
    import ArrayStore from 'devextreme/data/array_store';
    import service from './data.js';

    const orgItemsDataSource = new ArrayStore({
        key: 'key',
        data: service.getOrgItems(),
    });
    const orgLinksDataSource = new ArrayStore({
        key: 'key',
        data: service.getOrgLinks(),
    });

    export default function App() {
        return (
            <Diagram units="in">
                <Nodes
                    dataSource={orgItemsDataSource}
                    keyExpr="key"
                    textExpr="text"
                    leftExpr="left"
                    topExpr="top"
                >
                    <AutoLayout type="off" />
                </Nodes>
                <Edges
                    dataSource={orgLinksDataSource}
                    keyExpr="key"
                    fromExpr="from"
                    toExpr="to"
                    fromPointIndexExpr="fromPoint"
                    toPointIndexExpr="toPoint"
                    pointsExpr="points"
                />
            </Diagram>
        );
    }

    <!-- tab: data.js -->
    const orgItems = [
      {
            key: "101",
            left: 0.5,
            text: "Product Manager",
            top: 0.875,
      },
      {
            key: "102",
            left: 2.5,
            text: "Team",
            top: 0.5,
        },
    ];
    const orgLinks = [
      {
            key: "1",
            from: "101",
            to: "102",
            fromPoint: 1,
            toPoint: 3,
            points: [{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}],
      },
    ];

    export default {
        getOrgItems() {
            return orgItems;
        }
        getOrgLinks() {
            return orgLinks;
        }
    }

---

The Diagram UI component reloads the diagram every time the data source changes. The [onRequestLayoutUpdate](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/onRequestLayoutUpdate.md "/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#onRequestLayoutUpdate") function is executed after diagram data is reloaded and allows you to specify whether the UI component should update the diagram layout.
