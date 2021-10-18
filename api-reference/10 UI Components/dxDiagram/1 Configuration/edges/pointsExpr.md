---
id: dxDiagram.Options.edges.pointsExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns an edge's key points.

##### param(data): any
The current edge's data object.

##### return: any
An edge's key points.

##### param(value): any
<!-- Description goes here -->

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

[note]

- Predefined edge points are ignored if the [autoLayout.type](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/type.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#type') property is set to **layered** or **tree**.

- If an edge is connected to nodes, the UI component calculates coordinates of connection points and the first and last points specified in a data source are ignored.

[/note]