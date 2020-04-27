---
id: dxDiagram.Options.defaultItemProperties.textStyle
type: Object
---
---
##### shortDescription
Specifies an item's default text style.

---
The **textStyle** option specifies a text style that is applied to a shape/connector if the [nodes.textStyleExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#textStyleExpr)/[edges.textStyleExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/#textStyleExpr) option does not provide another value.

The style settings can be specified in the following ways:

- as inline style declaration, for instance `"font-weight: bold; text-decoration: underline"`,
- as CSS rules in JSON format, for instance `{ "font-weight": "bold", "text-decoration": "underline" }`.
