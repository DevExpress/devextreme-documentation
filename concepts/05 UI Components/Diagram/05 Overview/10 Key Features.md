- **Configurable Diagram Creation and Editing**    
The Diagram component allows users to create and edit diagrams. You can configure [editing](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/editing/) permissions and enable/disable certain actions such as shape [deletion](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/editing/#allowDeleteShape), [resizing](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/editing/#allowResizeShape) and [adding](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/editing/#allowAddShape). The component also supports custom permission logic implemented in the [edit request handler](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#onRequestEditOperation).

- **Data Binding**    
DevExtreme Diagram can load and display diagrams from different [data source](/Documentation/ApiReference/Data_Layer/DataSource/) types. The component supports two-way data binding and integrates with [DevExtreme DataSource push services](/Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification/Integration_with_Push_Services). Diagram accepts data in the following structures:
    - [Node and Connector Arrays](/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Node_and_Edge_Arrays)
    - [Plain Node Arrays](/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Linear_Array)
    - [Hierarchical Node Arrays](/Documentation/Guide/UI_Components/Diagram/Data_Binding/#Hierarchical_Array)

- **Automatic Layouts**    
You can bind Diagram to a data source that does not specify node coordinates. Configure an [automatic layout type](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#type) and choose a diagram [orientation](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/autoLayout/#orientation) to generate diagram layouts.

- **Built-In Shape Types**    
The Diagram component ships with 40 resizable [shape types](/Documentation/Guide/UI_Components/Diagram/Shape_Types/). These include shapes that contain images, flowchart shapes, and container shapes.

- **Custom Shapes**    
You can configure [custom](/Documentation/Guide/UI_Components/Diagram/Custom_Shapes/) shape [text](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#defaultText) and [connection points](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/connectionPoints/), as well as add [inner](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#defaultImageUrl) and [background images](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#backgroundImageUrl).

- **Connector Customization**    
You can customize node connectors and arrange them as needed. You can add [points](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#pointsExpr) and [text](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#textExpr), specify a [line style](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#styleExpr), and [lock](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/#lockedExpr) specific connectors.

- **Interaction Functionality**    
DevExtreme Diagram includes user interaction features such as [zoom](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/zoomLevel/) and pan, [snap to grid](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#snapToGrid), and undo/redo.

- **Export**    
You can [export](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/export/) diagrams as raster and vector image files. The component can export files in the following formats:
    - JPG
    - PNG
    - SVG

- **Adaptability and RTL**    
The component adapts its layout to fit screens of all sizes, including portrait orientation screens. Diagram also ships with [right-to-left](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#rtlEnabled) (RTL) representation support.

- **Keyboard Navigation**    
DevExtreme Diagram supports [keyboard navigation](/Documentation/Guide/UI_Components/Diagram/Keyboard_Support/).

- **Customization**    
You can customize the component appearance and configure diagram visual settings such as [page size](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/pageSize/) and [grid visibility](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#showGrid). You can also toggle [Diagram tools](/Documentation/Guide/UI_Components/Diagram/Diagram_Tools/) as needed or enable [readOnly](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#readOnly) to hide all tools.
