---
id: dxDiagram.Options.defaultItemProperties.style
type: Object
---
---
##### shortDescription
Specifies a default item style.

---
The **style** option specifies a default style that is applied to a shape/connector if there is not another value provided via the [nodes.styleExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#styleExpr)/[edges.styleExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#styleExpr) option.

The style settings can be specified in the following ways:

- as inline style declaration, for instance `"fill: #d9d9d9; stroke: #999999"`,
- as CSS rules presented in JSON format, , for instance `{"fill": "#d9d9d9", "stroke": "#999999"}`.