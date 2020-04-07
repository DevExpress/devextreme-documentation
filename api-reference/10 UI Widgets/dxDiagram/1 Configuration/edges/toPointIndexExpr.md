---
id: dxDiagram.Options.edges.toPointIndexExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides an index of a shape connection point where an edge ends.

##### param(data): Object
The current edge's data object.

---
The built-in shape's connection points are numbered clockwise starting with the leftmost point on the top border.

![Diagram - Shape Points](/images/diagram/point-index-expr.png)

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "this",
                    data: orgItems
                }),
            },
            edges: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "this",
                    data: orgLinks
                }),
                fromPointIndexExpr: "startPoint",
                toPointIndexExpr: "endPoint",
            },
        });
    });
    
    <!-- tab: data.js -->
    var orgItems = [
        {  
            "id":"106",
            "text":"Process 1",
        },
        {  
            "id":"110",
            "text":"Process 2",
        },
    ];

    var orgLinks = [  
        {  
            "id":"127",
            "from":"106",
            "to":"110",
            "startPoint": 2,
            "endPoint": 0,
        },
            {  
            "id":"127",
            "from":"110",
            "to":"106",
            "startPoint": 2,
            "endPoint": 0,
        },
    ];

![Diagram - Points Example](/images/diagram/point-index-example.png)