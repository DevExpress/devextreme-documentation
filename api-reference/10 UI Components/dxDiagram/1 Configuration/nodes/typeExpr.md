---
id: dxDiagram.Options.nodes.typeExpr
type: String | function(data, value)
default: 'type'
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns the shape type for a node.

##### param(data): any
The current node's data object.

##### return: any
The [shape type](/concepts/05%20UI%20Components/Diagram/40%20Shape%20Types.md '/Documentation/Guide/UI_Components/Diagram/Shape_Types/') for a node.

##### param(value): any
<!-- Description goes here -->

---
The built-in shape types are shown in the [Shape Types](/concepts/05%20UI%20Components/Diagram/40%20Shape%20Types.md '/Documentation/Guide/UI_Components/Diagram/Shape_Types/') section.

    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                typeExpr: itemTypeExpr,
                ...
            },
        });

        function itemTypeExpr(obj, value) {
            if(value)
                obj.type = (value === "rectangle") ? undefined : "group";
            else
                return obj.type === "group" ? "ellipse" : "rectangle";
        }
    });
