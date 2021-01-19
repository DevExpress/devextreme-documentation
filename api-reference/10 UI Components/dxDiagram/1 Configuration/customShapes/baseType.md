---
id: dxDiagram.Options.customShapes.baseType
acceptValues: 'text' | 'rectangle' | 'ellipse' | 'cross' | 'triangle' | 'diamond' | 'heart' | 'pentagon' | 'hexagon' | 'octagon' | 'star' | 'arrowLeft' | 'arrowTop' | 'arrowRight' | 'arrowBottom' | 'arrowNorthSouth' | 'arrowEastWest' | 'process' | 'decision' | 'terminator' | 'predefinedProcess' | 'document' | 'multipleDocuments' | 'manualInput' | 'preparation' | 'data' | 'database' | 'hardDisk' | 'internalStorage' | 'paperTape' | 'manualOperation' | 'delay' | 'storedData' | 'display' | 'merge' | 'connector' | 'or' | 'summingJunction' | 'verticalContainer' | 'horizontalContainer' | 'cardWithImageOnLeft' | 'cardWithImageOnTop' | 'cardWithImageOnRight'
type: String
---
---
##### shortDescription
Specifies the base shape type for the custom shape. The built-in shape types are shown in the [Shape Types](/concepts/05%20Widgets/Diagram/40%20Shape%20Types.md '/Documentation/Guide/Widgets/Diagram/Shape_Types/') section.

---
When the **baseType** property is specified, the [backgroundImageUrl](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/customShapes/backgroundImageUrl.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#backgroundImageUrl') property is not in effect.

#include common-ref-enum with {
    enum: "`DiagramShapeType`",
    values: "`Text`, `Rectangle`, `Ellipse`, `Cross`, `Triangle`, `Diamond`, `Heart`, `Pentagon`, `Octagon`, `Star`, `ArrowLeft`, `ArrowTop`, `ArrowRight`, `ArrowBottom`, `ArrowNorthSouth`, `ArrowEastWest`, `Process`, `Decision`, `Terminator`, `PredefinedProcess`, `Document`, `MultipleDocuments`, `ManualInput`, `Preparation`, `Data`, `Database`, `HardDisk`, `InternalStorage`, `PaperTape`, `ManualOperation`, `Delay`, `StoredData`, `Display`, `Merge`, `Connector`, `Or`, `SummingJunction`, `VerticalContainer`, `HorizontalContainer`, `CardWithImageOnLeft`, `CardWithImageOnTop`, `CardWithImageOnRight`"
}