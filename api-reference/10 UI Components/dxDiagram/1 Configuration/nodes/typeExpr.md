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
A node's new shape type or `undefined`.

---
A function assigned to this property should do the following:

* Return a node's new shape type when the **value** parameter is set to `undefined`.
* Save a new shape type value to a data storage when the **value** parameter contains a node's shape type. For instance, assign this value to the **obj** parameter's field to save a node's shape type in your data source.

The built-in shape types are shown in the [Shape Types](/concepts/05%20UI%20Components/Diagram/40%20Shape%20Types.md '/Documentation/Guide/UI_Components/Diagram/Shape_Types/') section.

---
##### jQuery

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

---