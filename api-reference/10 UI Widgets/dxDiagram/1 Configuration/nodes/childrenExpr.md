---
id: dxDiagram.Options.nodes.childrenExpr
type: String | function(data)
default: 'children'
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides a container's nested items.

##### param(data): Object
The current node's data object.

---
This option is in effect for nodes of the `"verticalContainer"` or `"horizontalContainer"` type.

As an alternative, use the [containerKeyExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#containerKeyExpr) option to provide a container's content.


    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "this",
                    data: orgItems
                }),
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