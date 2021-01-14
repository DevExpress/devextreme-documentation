#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesAndEdgesArrays/"
}

Use the [nodes.dataSource](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#dataSource') and [edges.dataSource](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#dataSource') options to bind the **Diagram** UI component to plain lists of nodes and edges.

Specify the following **required options**: [nodes.keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#keyExpr'), [edges.keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#keyExpr').

**Do not specify** the [parentKeyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/parentKeyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#parentKeyExpr') and [itemsExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/itemsExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#itemsExpr') options, because they are a part of another binding mode.

During the binding process, the UI component creates a shape for every bound node and a connector for every bound edge. To attach a start or end of a connector to a shape, use the [edges.fromExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges/fromExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#fromExpr') and [edges.toExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges/toExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#toExpr') options. These expressions should return keys of attached nodes.

        <!-- tab: index.js -->
        $(function() {
            $("#diagram").dxDiagram({
                nodes: {
                    dataSource: new DevExpress.data.ArrayStore({
                        key: "this",
                        data: orgItems
                    }),
                    keyExpr: "id",
                    textExpr: "text",
                },
                edges: {
                    dataSource: new DevExpress.data.ArrayStore({
                        key: "this",
                        data: orgLinks
                    }),
                    keyExpr: "id",
                    fromExpr: "from",
                    toExpr: "to"
                },
            });
        });
            
        <!-- tab: data.js -->
        var orgItems = [{  
            "id":"101",
            "text":"Development",
        },{  
            "id":"102",
            "text":"Javascript\nTeam",
        },{  
            "id":"103",
            "text":"ASP.NET\nTeam",
        }];

        var orgLinks = [{  
            "id":"121",
            "from":"101",
            "to":"102",
        },{  
            "id":"122",
            "from":"101",
            "to":"103",
        }];

![Diagram - Node and Edge Arrays](/images/diagram/db-node-and-edge-arrays.png)   
