The Diagram allows you to bind a number of shape and connector visual properties, like type, size, and style.

![Diagram - Data Binding Options](/images/diagram/binding-options.png)

The following node properties are available:

<table class="dx-table">
    <tr>
        <th>Node property</th>
        <th>Value the property should return</th>
        <th>Sample return value</th>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#containerChildrenExpr">containerChildrenExpr</a></td>
        <td>A container's nested items. This property is in effect for <i>verticalContainer</i> or <i>horizontalContainer</i> nodes. Excludes <a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#containerKeyExpr">containerKeyExpr</a>.</td>
        <td>[{"id":"112","text":"Ana\nTrujillo"}, {"id":"113","text":"Antonio\nMoreno"}]</td>    
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#containerKeyExpr">containerKeyExpr</a></td>
        <td>A parent container node key. The parent container node must be of the <i>verticalContainer</i> or <i>horizontalContainer</i> type. Excludes <a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#containerChildrenExpr">containerChildrenExpr</a>.</td>
        <td>"102"</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#customDataExpr">customDataExpr</a></td>
        <td>A node's custom data.</td>
        <td>-</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#heightExpr">heightExpr</a></td>
        <td>A node's height, in <a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units">units</a>.</td>
        <td>0.625</td>
    </tr> 
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#imageUrlExpr">imageUrlExpr</a></td>
        <td>A node's image URL or Base64 encoded image. This property is in effect for nodes of the <i>cardWithImageOnLeft</i>, <i>cardWithImageOnTop</i>, or <i>cardWithImageOnRight</i> type.</td>
        <td>"images/employees/30.png"</td>
    </tr> 
    <tr>
    <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#leftExpr">leftExpr</a></td>
        <td>The x-coordinate of a node's left border, in <a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units">units</a>.</td>
        <td>0.5</td>
    </tr> 
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#lockedExpr">lockedExpr</a></td>
        <td>A value that indicates whether a node is locked.</br>Should return <i>true</i> or <i>false</i>.</td>
        <td>true</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#styleExpr">styleExpr</a></td>
        <td>A node's style.</td>
        <td>{ "stroke": "red" }</td>
    </tr>
    <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#textExpr">textExpr</a></td>
        <td>A node's text.</td>
        <td>"ASP.NET"</td>
    </tr> 
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#textStyleExpr">textStyleExpr</a></td>
        <td>A node's text style.</td>
        <td>{ "font-weight": "bold", "text-decoration": "underline" }</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#topExpr">topExpr</a></td>
        <td>The y-coordinate of a node's top border, in <a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units">units</a>.</td>
        <td>0.875</td>
    </tr> 
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#typeExpr">typeExpr</a></td>
        <td>A node's shape type. Built-in shape types are shown in the <a href="/Documentation/Guide/UI_Components/Diagram/Shape_Types/">Shape Types</a> section.</td>
        <td>"horizontalContainer"</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#widthExpr">widthExpr</a></td>
        <td>A node's width, in <a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units">units</a>.</td>
        <td>2</td>
    </tr> 
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#zIndexExpr">zIndexExpr</a></td>
        <td>A node's z-index.</td>
        <td>1</td>
    </tr>
</table>

The following node properties are available:

<table class="dx-table">
    <tr>
        <th>Edge property</th>
        <th>Value the property should return</th>
        <th>Sample return value</th>
    </tr>
        <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#customDataExpr">customDataExpr</a></td>
        <td>An edge's custom data.</td>
        <td>-</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#fromExpr">fromExpr</a></td>
        <td>An edge's start node key.</td>
        <td>"101",</td>
    </tr>    
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#fromLineEndExpr">fromLineEndExpr</a></td>
        <td>An edge's line start tip.</br>Should return <i>"arrow"</i>, <i>"filledTriangle"</i>, <i>"outlinedTriangle"</i>, or <i>"none"</i>.</td>
        <td>"none"</td>
    </tr>   
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#fromPointIndexExpr">fromPointIndexExpr</a></td>
        <td>A shape's connection point index where an edge begins.</td>
        <td>1</td>
    </tr> 
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#lineTypeExpr">lineTypeExpr</a></td>
        <td>An edge's line type.</br>Should return <i>"orthogonal"</i> or <i>"straight"</i>.</td>
        <td>"straight"</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#lockedExpr">lockedExpr</a></td>
        <td>A value that indicates whether a node is locked.</br>Should return <i>true</i> or <i>false</i>.</td>
        <td>false</td>
    </tr> 
    <tr>
    <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#pointsExpr">pointsExpr</a></td>
        <td>An edge's key points.</td>
        <td>[{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}]</td>
    </tr> 
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#styleExpr">styleExpr</a></td>
        <td>An edge's style.</td>
        <td>{"stroke-dasharray":"4"}</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#textExpr">textExpr</a></td>
        <td>An edge's text.</td>
        <td>"text" or { 0.3: "text1", 0.8: "text2" }</td>
    </tr>    
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#toExpr">textStyleExpr</a></td>
        <td>An edge's text style.</td>
        <td>{ "font-weight": "bold"}</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#toExpr">toExpr</a></td>
        <td>An edge's end node key.</td>
        <td>"102",</td>
    </tr>    
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#toLineEndExpr">toLineEndExpr</a></td>
        <td>An edge's line end tip.</br>Should return <i>"arrow"</i>, <i>"filledTriangle"</i>, <i>"outlinedTriangle"</i>, or <i>"none"</i>.</td>
        <td>"filledTriangle"</td>
    </tr>
    <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#toPointIndexExpr">toPointIndexExpr</a></td>
        <td>A shape's connection point index where an edge ends.</td>
        <td>11</td>
    </tr> 
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#zIndexExpr">zIndexExpr</a></td>
        <td>An edge's z-index.</td>
        <td>0</td>
    </tr>
</table>

[note]

- If a binding property is undefined, the corresponding shape or connector property value is maintained inside the loaded Diagram UI component and is lost after a page is reloaded.

- Diagram [nodes](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/') and shapes ([default](/concepts/05%20UI%20Components/Diagram/40%20Shape%20Types.md '/Documentation/Guide/UI_Components/Diagram/Shape_Types/') and [custom](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/')) are linked. Initially, you can set all shape properties with [defaultItemProperties](/ApiReference/UI_Components/dxDiagram/Configuration/defaultItemProperties/) or within a [customShapes](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/') array. When a shape is placed on a canvas, these properties merge with the **nodes'** default settings or callbacks that end with **Expr** (for instance, [typeExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/typeExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#typeExpr')). Use these callbacks to override the default shape settings.

- If you bind a Diagram to a [linear](/concepts/05%20UI%20Components/Diagram/10%20Data%20Binding/20%20Linear%20Array.md '/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Linear_Array') or [hierarchical array](/concepts/05%20UI%20Components/Diagram/10%20Data%20Binding/30%20Hierarchical%20Array.md '/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Hierarchical_Array'), edge binding properties are not in effect, because connectors are not bound to specific edges. This is why the storage of connector styles in a data source is not supported.

[/note]

You can set a binding property to the name of a data source field that supplies item values, or to an expression that returns a constant value or calculates a value in runtime based on conditions.

If your diagram includes container shapes, define the [containerKeyExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/containerKeyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#containerKeyExpr') property to store information about a parent container in the data source. Otherwise, this information will be lost. 

![Diagram - Data Bound Diagram](/images/diagram/data-bound-diagram.png)

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
                containerKeyExpr: "containerKey",
                heightExpr: "height",
                imageUrlExpr: "imageUrl",
                keyExpr: "key",
                leftExpr: "left",
                lockedExpr: "locked",
                styleExpr: function(obj) {if (obj.type.includes("Container")) return {"stroke": "red"}},
                textExpr: "text",
                textStyleExpr: "textStyle",
                topExpr: "top",
                typeExpr: "type",
                widthExpr: "width",
                zIndexExpr: "zIndex",
            },
            edges: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "key",
                    data: orgLinks
                }),
                fromExpr: "from",
                fromLineEndExpr: function() {return "none"},
                fromPointIndexExpr: "fromPointIndex",
                keyExpr: "key",
                lineTypeExpr: function() {return "straight"},
                lockedExpr: "locked",
                pointsExpr: "points",
                styleExpr: function() {return ({"stroke-dasharray":"4"})},
                textExpr: "text",
                textStyleExpr: "textStyle",
                toExpr: "to",
                toLineEndExpr: function() {return "arrow"},
                toPointIndexExpr: "toPointIndex",
            },
        });
    });

    <!-- tab: data.js -->
    const orgItems = [
        {  
            height: 0.625,
            key: "101",
            left: 0.5,
            locked: true,
            text: "Product Manager",
            textStyle: { "font-weight": "bold", "text-decoration": "underline" },
            top: 0.875,
            type: "rectangle",
            width: 1,
            zIndex: 2,
        },
        {  
            height: 1.375,
            key: "102",
            left: 2.5,
            locked: false,
            text: "Team",
            textStyle: { "font-weight": "bold", "text-decoration": "underline" },
            top: 0.5,
            type: "horizontalContainer",
            width: 2,
            zIndex: 1,
        },{
            height: 0.5,
            imageUrl: "images/employees/30.png",
            key: "103",
            left: 2.875,
            text: "Team Leader",
            top: 0.625,
            type: "cardWithImageOnLeft",
            width: 1.5,
            containerKey: "102",
        },{
            height: 0.5,
            key: "104",
            left: 2.875,
            text: "Developers",
            top: 1.25,
            type: "rectangle",
            width: 1.5,
            containerKey: "102",
        }
    ];
    const orgLinks = [  
        {  
            from: "101",
            fromPointIndex: 1,
            key: "1",
            locked: false,
            points: [{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}],
            text: "Task",
            textStyle: { "font-weight": "bold"},
            to: "102",
            toPointIndex: 11,
        },
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram>
        <dxo-nodes
            [dataSource]="orgItemsDataSource"
            keyExpr="key"
            textExpr="text"
            leftExpr="left"
            topExpr="top"
            containerKeyExpr="containerKey"
            heightExpr="height"
            imageUrlExpr="imageUrl"
            lockedExpr="locked"
            textStyleExpr="textStyle"
            typeExpr="type"
            widthExpr="width"
            zIndexExpr="zIndex"
            [styleExpr]="itemStyleExpr"
        >
            <dxo-auto-layout type="off"></dxo-auto-layout>
        </dxo-nodes>
        <dxo-edges
            [dataSource]="orgLinksDataSource"
            keyExpr="key"
            fromExpr="from"
            toExpr="to"
            fromPointIndexExpr="fromPointIndex"
            toPointIndexExpr="toPointIndex"
            pointsExpr="points"
            [fromLineEndExpr]="linkFromLineEndExpr"
            [lineTypeExpr]="linkLineTypeExpr"
            lockedExpr="locked"
            [styleExpr]="linkStyleExpr"
            textExpr="text"
            textStyleExpr="textStyle"
            toLineEndExpr="linkToLineEndExpr"
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

        itemStyleExpr(obj) {
            if (obj.type && obj.type.includes("Container")) {
                return { stroke: "red" };
            }
            return null;
        }

        linkFromLineEndExpr(obj) {
            return 'none';
        }

        linkLineTypeExpr(obj) {
            return 'straight';
        }

        linkStyleExpr(obj) {
            return { "stroke-dasharray": "4" };
        }

        linkToLineEndExpr(obj) {
            return 'arrow';
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    private class Point {
        x: number;
        y: number;
    }

    export class OrgItem {
        height: number,
        key: string;
        left: number;
        locked: boolean;
        text: string;
        textStyle: Object;
        top: number;
        type: string;
        width: number;
        zIndex: number;
    }

    export class OrgLink {
        key: string;
        from: string;
        to: string;
        fromPointIndex: number;
        toPointIndex: number;
        points: Point[];
        locked: boolean;
        textStyle: Object;
    }

    const orgItems: OrgItem[] = [
        {  
            height: 0.625,
            key: "101",
            left: 0.5,
            locked: true,
            text: "Product Manager",
            textStyle: { "font-weight": "bold", "text-decoration": "underline" },
            top: 0.875,
            type: "rectangle",
            width: 1,
            zIndex: 2,
        },
        {  
            height: 1.375,
            key: "102",
            left: 2.5,
            locked: false,
            text: "Team",
            textStyle: { "font-weight": "bold", "text-decoration": "underline" },
            top: 0.5,
            type: "horizontalContainer",
            width: 2,
            zIndex: 1,
        },{
            height: 0.5,
            imageUrl: "images/employees/30.png",
            key: "103",
            left: 2.875,
            text: "Team Leader",
            top: 0.625,
            type: "cardWithImageOnLeft",
            width: 1.5,
            containerKey: "102",
        },{
            height: 0.5,
            key: "104",
            left: 2.875,
            text: "Developers",
            top: 1.25,
            type: "rectangle",
            width: 1.5,
            containerKey: "102",
        }
    ];
    const orgLinks: OrgLink[] = [  
        {  
            from: "101",
            fromPointIndex: 1,
            key: "1",
            locked: false,
            points: [{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}],
            text: "Task",
            textStyle: { "font-weight": "bold"},
            to: "102",
            toPointIndex: 11,
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
        <DxDiagram>
            <DxNodes
                :data-source="orgItemsDataSource"
                :key-expr="'key'"
                :text-expr="'text'"
                :left-expr="'left'"
                :top-expr="'top'"
                :container-key-expr="'containerKey'"
                :height-expr="'height'"
                :image-url-expr="'imageUrl'"
                :locked-expr="'locked'"
                :text-style-expr="'textStyle'"
                :type-expr="'type'"
                :width-expr="'width'"
                :z-index-expr="'zIndex'"
                :style-expr="itemStyleExpr"
            >
                <DxAutoLayout :type="'off'" />
            </DxNodes>
            <DxEdges
                :data-source="orgLinksDataSource"
                :key-expr="'key'"
                :from-expr="'from'"
                :to-expr="'to'"
                :from-point-index-expr="'fromPointIndex'"
                :toPointIndexExpr="'toPointIndex'"
                :points-expr="'points'"
                :from-line-end-expr="linkFromLineEndExpr"
                :line-type-expr="linkLineTypeExpr"
                :locked-expr="'locked'"
                :style-expr="linkStyleExpr"
                :text-expr="'text'"
                :text-style-expr="'textStyle'"
                :to-line-end-expr="linkToLineEndExpr"
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

    const itemStyleExpr = (obj) => {
        if (obj.type && obj.type.includes("Container")) {
            return { stroke: "red" };
        }
        return null;
    };

    const linkFromLineEndExpr = (obj) => {
        return 'none';
    };

    const linkLineTypeExpr = (obj) => {
        return 'straight';
    };

    const linkStyleExpr = (obj) => {
        return { "stroke-dasharray": "4" };
    };

    const linkToLineEndExpr = (obj) => {
        return 'arrow';
    };
    </script>
    
    <!-- tab: data.js -->
    const orgItems = [
        {  
            height: 0.625,
            key: "101",
            left: 0.5,
            locked: true,
            text: "Product Manager",
            textStyle: { "font-weight": "bold", "text-decoration": "underline" },
            top: 0.875,
            type: "rectangle",
            width: 1,
            zIndex: 2,
        },
        {  
            height: 1.375,
            key: "102",
            left: 2.5,
            locked: false,
            text: "Team",
            textStyle: { "font-weight": "bold", "text-decoration": "underline" },
            top: 0.5,
            type: "horizontalContainer",
            width: 2,
            zIndex: 1,
        },{
            height: 0.5,
            imageUrl: "images/employees/30.png",
            key: "103",
            left: 2.875,
            text: "Team Leader",
            top: 0.625,
            type: "cardWithImageOnLeft",
            width: 1.5,
            containerKey: "102",
        },{
            height: 0.5,
            key: "104",
            left: 2.875,
            text: "Developers",
            top: 1.25,
            type: "rectangle",
            width: 1.5,
            containerKey: "102",
        }
    ];
    const orgLinks = [  
        {  
            from: "101",
            fromPointIndex: 1,
            key: "1",
            locked: false,
            points: [{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}],
            text: "Task",
            textStyle: { "font-weight": "bold"},
            to: "102",
            toPointIndex: 11,
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

    const itemStyleExpr = (obj) => {
        if (obj.type && obj.type.includes("Container")) {
            return { stroke: "red" };
        }
        return null;
    };

    const linkFromLineEndExpr = (obj) => {
        return 'none';
    };

    const linkLineTypeExpr = (obj) => {
        return 'straight';
    };

    const linkStyleExpr = (obj) => {
        return { "stroke-dasharray": "4" };
    };

    const linkToLineEndExpr = (obj) => {
        return 'arrow';
    };

    export default function App() {
        return (
            <Diagram units="in">
                <Nodes
                    dataSource={orgItemsDataSource}
                    keyExpr="key"
                    textExpr="text"
                    leftExpr="left"
                    topExpr="top"
                    containerKeyExpr="containerKey"
                    heightExpr="height"
                    imageUrlExpr="imageUrl"
                    lockedExpr="locked"
                    textStyleExpr="textStyle"
                    typeExpr="type"
                    widthExpr="width"
                    zIndexExpr="zIndex"
                    styleExpr={itemStyleExpr}
                >
                    <AutoLayout type="off" />
                </Nodes>
                <Edges
                    dataSource={orgLinksDataSource}
                    keyExpr="key"
                    fromExpr="from"
                    toExpr="to"
                    fromPointIndexExpr="fromPointIndex"
                    toPointIndexExpr="toPointIndex"
                    pointsExpr="points"
                    fromLineEndExpr={linkFromLineEndExpr}
                    lineTypeExpr={linkLineTypeExpr}
                    lockedExpr="locked"
                    styleExpr={linkStyleExpr}
                    textExpr="text"
                    textStyleExpr="textStyle"
                    toLineEndExpr={linkToLineEndExpr}
                />
            </Diagram>
        );
    }

    <!-- tab: data.js -->
    const orgItems = [
        {  
            height: 0.625,
            key: "101",
            left: 0.5,
            locked: true,
            text: "Product Manager",
            textStyle: { "font-weight": "bold", "text-decoration": "underline" },
            top: 0.875,
            type: "rectangle",
            width: 1,
            zIndex: 2,
        },
        {  
            height: 1.375,
            key: "102",
            left: 2.5,
            locked: false,
            text: "Team",
            textStyle: { "font-weight": "bold", "text-decoration": "underline" },
            top: 0.5,
            type: "horizontalContainer",
            width: 2,
            zIndex: 1,
        },{
            height: 0.5,
            imageUrl: "images/employees/30.png",
            key: "103",
            left: 2.875,
            text: "Team Leader",
            top: 0.625,
            type: "cardWithImageOnLeft",
            width: 1.5,
            containerKey: "102",
        },{
            height: 0.5,
            key: "104",
            left: 2.875,
            text: "Developers",
            top: 1.25,
            type: "rectangle",
            width: 1.5,
            containerKey: "102",
        }
    ];
    const orgLinks = [  
        {  
            from: "101",
            fromPointIndex: 1,
            key: "1",
            locked: false,
            points: [{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}],
            text: "Task",
            textStyle: { "font-weight": "bold"},
            to: "102",
            toPointIndex: 11,
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