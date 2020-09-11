---
id: dxDiagram.Options.nodes.containerChildrenExpr
type: String | function(data)
default: 'children'
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides a container's nested items.

##### param(data): Object
The current node's data object.

---
This option is in effect for `"verticalContainer"` or `"horizontalContainer"` nodes.

You can also use the [containerKeyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/containerKeyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#containerKeyExpr') option to provide a container's content.


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
