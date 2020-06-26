---
id: dxDiagram.Options.nodes.imageUrlExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or expression that provides an image URL or Base64 encoded image for a node.

##### param(data): Object
The current node's data object.

---
This option is in effect for nodes of the `"cardWithImageOnLeft"`, `"cardWithImageOnTop"`, or `"cardWithImageOnRight"` [type](/concepts/05%20Widgets/Diagram/40%20Shape%20Types.md '/Documentation/Guide/Widgets/Diagram/Shape_Types/').

    <!-- tab: index.js -->
        $(function() {
            $("#diagram").dxDiagram({
                nodes: {
                    dataSource: new DevExpress.data.ArrayStore({
                        key: "this",
                        data: orgItems
                    }),
                    imageUrlExpr: "picture",
                },
                edges: {
                    dataSource: new DevExpress.data.ArrayStore({
                        key: "this",
                        data: orgLinks
                    })
                },
            });
        });
    
    <!-- tab: data.js -->
    var orgItems = [
        {  
            "id":"110",
            "text":"ASP.NET\nTeam",
            "type": "ellipse"
        },
        {  
            "id":"112",
            "text":"Ken Samuelson",
            "type": "cardWithImageOnLeft",
            "picture": "images/employees/32.png"
        },
        {  
            "id":"113",
            "text":"Terry Bradley",
            "type": "cardWithImageOnLeft",
            "picture": "images/employees/33.png"
        },
    ];

    var orgLinks = [  
        {  
            "id":"129",
            "from":"110",
            "to":"112",
        },
        {  
            "id":"130",
            "from":"110",
            "to":"113",
        }
    ];

![Diagram - Data Binding Options](/images/diagram/image-url-expr.png)