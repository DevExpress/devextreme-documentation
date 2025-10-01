- **Configurable Diagram Creation and Editing**    
The Diagram component allows users to create and edit diagrams. You can configure [editing](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/editing/') permissions and enable/disable certain actions such as shape [deletion](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/editing/allowDeleteShape.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/editing/#allowDeleteShape'), [resizing](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/editing/allowResizeShape.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/editing/#allowResizeShape') and [adding](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/editing/allowAddShape.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/editing/#allowAddShape'). The component also supports custom permission logic implemented in the [edit request handler](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/onRequestEditOperation.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#onRequestEditOperation').

- **Data Binding**    
DevExtreme Diagram can load and display diagrams from different [data source](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') types. The component supports two-way data binding and integrates with [DevExtreme DataSource push services](/concepts/70%20Data%20Binding/5%20Data%20Layer/3%20Data%20Modification/30%20Integration%20with%20Push%20Services.md '/Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification/Integration_with_Push_Services'). Diagram accepts data in the following structures:
    - [Node and Connector Arrays](/concepts/05%20UI%20Components/Diagram/10%20Data%20Binding/10%20Node%20and%20Edge%20Arrays.md '/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Node_and_Edge_Arrays')
    - [Plain Node Arrays](/concepts/05%20UI%20Components/Diagram/10%20Data%20Binding/20%20Linear%20Array.md '/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Linear_Array')
    - [Hierarchical Node Arrays](/concepts/05%20UI%20Components/Diagram/10%20Data%20Binding/30%20Hierarchical%20Array.md '/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Hierarchical_Array')

- **Automatic Layouts**    
You can bind Diagram to a data source that does not specify node coordinates. Configure an [automatic layout type](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/type.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#type') and choose a diagram [orientation](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/nodes/autoLayout/orientation.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#orientation') to generate diagram layouts.

- **Built-In Shape Types**    
The Diagram component ships with 40 resizable [shape types](/concepts/05%20UI%20Components/Diagram/40%20Shape%20Types.md '/Documentation/Guide/UI_Components/Diagram/Shape_Types/'). These include shapes that contain images, flowchart shapes, and container shapes.

- **Custom Shapes**    
You can configure [custom](/concepts/05%20UI%20Components/Diagram/20%20Custom%20Shapes '/Documentation/Guide/UI_Components/Diagram/Custom_Shapes/') shape [text](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/defaultText.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#defaultText') and [connection points](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/connectionPoints '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/connectionPoints/'), as well as add [inner](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/defaultImageUrl.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#defaultImageUrl') and [background images](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/backgroundImageUrl.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#backgroundImageUrl').

- **Connector Customization**    
You can customize node connectors and arrange them as needed. You can add [points](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/pointsExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#pointsExpr') and [text](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/textExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#textExpr'), specify a [line style](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/styleExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#styleExpr'), and [lock](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/edges/lockedExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#lockedExpr') specific connectors.

- **Interaction Functionality**    
DevExtreme Diagram includes user interaction features such as [zoom](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/zoomLevel '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/zoomLevel/') and pan, [snap to grid](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/snapToGrid.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#snapToGrid'), and undo/redo.

- **Export**    
You can [export](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/export/') diagrams as raster and vector image files. The component can export files in the following formats:
    - JPG
    - PNG
    - SVG

- **Adaptability and RTL**    
The component adapts its layout to fit screens of all sizes, including portrait orientation screens. Diagram also ships with [right-to-left](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/rtlEnabled.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#rtlEnabled') (RTL) representation support.

- **Keyboard Navigation**    
DevExtreme Diagram supports [keyboard navigation](/concepts/05%20UI%20Components/Diagram/45%20Keyboard%20Support.md '/Documentation/Guide/UI_Components/Diagram/Keyboard_Support/').

- **Customization**    
You can customize the component appearance and configure diagram visual settings such as [page size](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/pageSize '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/pageSize/') and [grid visibility](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/showGrid.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#showGrid'). You can also toggle [Diagram tools](/concepts/05%20UI%20Components/Diagram/30%20Diagram%20Tools.md '/Documentation/Guide/UI_Components/Diagram/Diagram_Tools/') as needed or enable [readOnly](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#readOnly') to hide all tools.
