---
id: GridBase.Options.aiIntegration
type: AIIntegration | undefined
default: undefined
---
---
##### shortDescription
Binds the {WidgetName} to an AI service.

---
To activate AI functionality in {WidgetName}, configure this object and assign *"ai"* to a column's [type](/api-reference/_hidden/dxDataGridColumn/type.md '{basewidgetpath}/Configuration/columns/#type') property.

This object configures options for all AI columns within the component. To configure AI options specific to a column, define **columns[]**.**ai**.[aiIntegration](/api-reference/40%20Common%20Types/15%20grids/ColumnAIOptions/aiIntegration.md '{basewidgetpath}/Configuration/columns/ai/#aiIntegration').

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/AIColumns/",
    name: "DataGrid - AI Columns"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/AIColumns/",
    name: "TreeList - AI Columns"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/AIAssistant/",
    name: "DataGrid - AI Assistant"
}
