- **Diagram Creation and Editing**    
DevExtreme Diagram allows users to create and edit diagrams. Configure the [editing](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/editing/) object to control which editing operations are available. Enable [readOnly](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#readOnly) to restrict all editing operations.

- **Data Binding**    
The component supports loading and updating data from different [data source](/Documentation/ApiReference/Data_Layer/DataSource/) types.

- **Exporting**    
The Diagram component supports exporting diagrams as raster and vector image files. The component supports the following file formats:
    - JPG
    - PNG
    - SVG

- **Diagram Customization**    
You can specify custom shapes as objects or SVG elements using [customShapes[]](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/) or [customShapeTemplate](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#customShapeTemplate). Implement [pageSize](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/pageSize/) and [pageColor](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#pageColor) to customize diagram pages. Configure **nodes**.[styleExpr](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#styleExpr) to apply additional CSS styles.

- **Component Customization**    
Specify [width](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#width)/[height](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#height) to change the width/height of the component. Configure visibility and other properties of component controls in the following objects:
    - [mainToolbar](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/mainToolbar/)    
        Customize font options and undo/redo edits using the main toolbar.
    - [propertiesPanel](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/propertiesPanel/)    
        Configure style and layout settings such as page size and color in the properties panel.
    - [toolbox](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/toolbox/)    
        View available shapes in the toolbox and drag and drop them into your diagram.
    - [viewToolbar](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/viewToolbar/)    
        Use the view toolbar to change viewport settings such as zoom levels and grid size.