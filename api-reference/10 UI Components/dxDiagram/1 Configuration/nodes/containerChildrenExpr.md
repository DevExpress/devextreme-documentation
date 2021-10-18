---
id: dxDiagram.Options.nodes.containerChildrenExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns a container's nested items.

##### param(data): any
The current node's data object.

##### return: any
A container's nested items.

##### param(value): any
<!-- Description goes here -->

---
This property is in effect for `"verticalContainer"` or `"horizontalContainer"` nodes.

You can also use the [containerKeyExpr](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/containerKeyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#containerKeyExpr') property to provide a container's content.


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
                containerChildrenExpr: "children",
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
            "children": [
            {
                "id":"112",
                "text":"Ana\nTrujillo",
                "type":"rectangle",
            },
            {
                "id":"113",
                "text":"Antonio\nMoreno",
                "type":"rectangle",
            }]
        }
    ];

![Diagram - Container](/images/diagram/children-container-expr.png)
