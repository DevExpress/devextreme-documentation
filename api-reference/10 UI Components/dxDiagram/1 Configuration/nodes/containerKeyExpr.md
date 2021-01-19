---
id: dxDiagram.Options.nodes.containerKeyExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides a key of a node's parent container node.

##### param(data): Object
The current node's data object.

---
The parent container node must be of the `"verticalContainer"` or `"horizontalContainer"` [type](/concepts/05%20Widgets/Diagram/40%20Shape%20Types.md '/Documentation/Guide/Widgets/Diagram/Shape_Types/').

You can also use the [containerChildrenExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/containerChildrenExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#containerChildrenExpr') option to provide a container's content.


    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "this",
                    data: orgItems
                }),
                keyExpr: "id",
                parentKeyExpr: "parent_id",
                containerKeyExpr: "team",
            },

        });
    });
    
    <!-- tab: data.js -->
    var orgItems = [
        {  
            "id":"106",
            "text":"Development",
            "type":"ellipse"
        },
        {  
            "id":"110",
            "text":"ASP.NET Team",
            "type": "horizontalContainer",
            "parent_id": "106",
        },
        {  
            "id":"112",
            "text":"Ana\nTrujillo",
            "type":"rectangle",
            "team": "110"
        },
        {  
            "id":"113",
            "text":"Antonio\nMoreno",
            "type":"rectangle",
            "team": "110"
        },
    ];

![Diagram - Container](/images/diagram/children-container-expr.png)