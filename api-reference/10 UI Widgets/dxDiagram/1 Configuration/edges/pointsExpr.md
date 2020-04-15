---
id: dxDiagram.Options.edges.pointsExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides an edge's key points.

##### param(data): Object
The current edge's data object.

---
    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {...},
            edges: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "this",
                    data: orgLinks
                }),
                pointsExpr: "points",
            },
        });
    });

    <!-- tab: data.js -->
    var orgLinks = [  
        {  
            id: "1",
            from: "101",
            to: "102",
            points: [{x:1.5,y:1.125},{x:1.75,y:0.875},{x:2.5,y:0.875}],
        },
        //...
    ];

[note] If an edge is connected to nodes, the widget calculates coordinates of connection points and points specified in a data source are ignored.
