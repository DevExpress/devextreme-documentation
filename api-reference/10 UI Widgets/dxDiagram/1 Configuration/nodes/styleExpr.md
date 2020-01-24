---
id: dxDiagram.Options.nodes.styleExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides a node style.

##### param(data): Object
The current node's data object.

---
The style settings must be specified as CSS rules presented in JSON format.

        <!--data structure-->
        {
            "selector_1":{
            "property_1":"value_1",
            ...
            }
        ...
        }