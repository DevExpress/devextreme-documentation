To add an AI column to {WidgetName}, follow these steps:

- Specify [keyExpr](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr) or implement key fields within the component [dataSource](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource) (for instance, **ArrayStore**.[key](/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key)).
- Define [aiIntegration](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#aiIntegration) (or **columns[]**.**ai**.[aiIntegration](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/ai/#aiIntegration) to configure AI settings specific to a column).
- Set a column's [type](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#type) to *"ai"* and specify this column's [name](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#name).
