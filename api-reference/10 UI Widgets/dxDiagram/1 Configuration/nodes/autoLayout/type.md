---
id: dxDiagram.Options.nodes.autoLayout.type
acceptValues: 'auto' | 'off' | 'tree' | 'layered'
type: String
---
---
##### shortDescription
Specifies the diagram layout type.

---
 The **auto** value corresponds to **off** when both shape coordinates (<xref:DevExpress.Web.ASPxDiagram.DiagramNodeMappingInfo.Left> and <xref:DevExpress.Web.ASPxDiagram.DiagramNodeMappingInfo.Top>) are specified; otherwise, the **auto** value corresponds to **layered**.


[note] When the **type** option is set to **layered** or **tree**, the shape coordinates specified by the [leftExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#leftExpr) and [topExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#topExpr) options are ignored.
