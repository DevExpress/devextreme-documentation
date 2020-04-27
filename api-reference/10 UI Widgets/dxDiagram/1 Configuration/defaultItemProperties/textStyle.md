---
id: dxDiagram.Options.defaultItemProperties.textStyle
type: Object
---
---
##### shortDescription
Specifies an item's default text style.

---
The **textStyle** option specifies a default text style that is applied to a shape/connector if there is not another value provided via the [nodes.textStyleExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#textStyleExpr)/[edges.textStyleExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#textStyleExpr) option.

The style settings can be specified in the following ways:

- as inline style declaration, for instance `"font-weight: bold; text-decoration: underline"`,
- as CSS rules presented in JSON format, , for instance `{ "font-weight": "bold", "text-decoration": "underline" }`.