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
                    dataSource: orgItems
                },
                edges: {
                    dataSource: orgLinks
                },
                layout: "layered"
            });
        });
        
        <!-- tab: data.js -->
        var orgItems = [
            {  
                "id":"106",
                "text":"Development",
                "type":2
            },
            {  
                "id":"108",
                "text":"WPF\nTeam",
                "type":2
            },
            {  
                "id":"109",
                "text":"Javascript\nTeam",
                "type":2
            },
            // ...
        ];

        var orgLinks = [  
            {  
                "id":"124",
                "from":"106",
                "to":"108",
            },
            {  
                "id":"125",
                "from":"106",
                "to":"109",
            },
            // ...
        ];
