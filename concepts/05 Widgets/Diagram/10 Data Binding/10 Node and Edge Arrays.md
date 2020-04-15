#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesAndEdgesArrays/"
}

Bind the **Diagram**'s [nodes](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/') and [edges](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/') collections to the appropriate plain lists of nodes and edges.

You should specify the following required properties.

- [nodes.keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#keyExpr')
- [edges.keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#keyExpr')
- [edges.fromExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges/fromExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#fromExpr')
- [edges.toExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges/toExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#toExpr')

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
        var orgItems = [
            {  
                "id":"101",
                "text":"Development",
            },
            {  
                "id":"102",
                "text":"Javascript\nTeam",
            },
            {  
                "id":"103",
                "text":"ASP.NET\nTeam",
            }
        ];

        var orgLinks = [  
            {  
                "id":"121",
                "from":"101",
                "to":"102",
            },
            {  
                "id":"122",
                "from":"101",
                "to":"103",
            }
        ];

![Diagram - Node and Edge Arrays](/images/diagram/db-node-and-edge-arrays.png)   