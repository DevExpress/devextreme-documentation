---
uid: ui/data_grid:MasterDetail.template
type: template
---
---
##### shortDescription
Specifies a custom template for detail sections.

##### param(detailElement): DxElement
#include common-ref-elementparam with { element: "detail section" }

##### param(detailInfo): Object
Information about the master row.

##### field(detailInfo.data): Object
The master row's data object.

##### field(detailInfo.key): any
The master row's key.

##### field(detailInfo.watch): function()
Allows tracking a variable and performing actions when it changes. Applies when [repaintChangesOnly](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/repaintChangesOnly.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#repaintChangesOnly') is **true**.       
This function has the following parameters:     

- **getter(data)**: Function        
A function that returns the variable that should be tracked.

- **handler(newValue)**: Function       
A function called when this variable changes.

##### return: any
A template name or container.

---
