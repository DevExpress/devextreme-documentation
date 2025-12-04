To add an AI column to {WidgetName}, follow these steps:

- Define [aiIntegration](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#aiIntegration) (or **columns[]**.**ai**.[aiIntegration](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/ai/#aiIntegration) to configure AI settings specific to a column).
- Set a column's [type](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#type) to *"ai"*.
- Specify the AI column's [name](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#name).
- Configure **columns[]**.**ai** options, including [mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/ai/#mode), predefined [prompt](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/ai/#prompt), and [noDataText](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/ai/#noDataText) (displayed when the AI service returns no data for a row).

[note] Specify [keyExpr](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#keyExpr) or implement key fields within the component [dataSource](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataSource) (for instance, **ArrayStore**.[key](/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key)) to ensure AI columns function correctly.