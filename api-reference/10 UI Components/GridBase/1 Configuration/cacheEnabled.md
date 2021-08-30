---
id: GridBase.Options.cacheEnabled
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether data should be cached.

---
<!-- %fullDescription% -->

[note]If you fetch data from the server, some operations with data can be executed [remotely](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '{basewidgetpath}/Configuration/remoteOperations/'), while others - locally. If you perform basic operations (sorting, filtering, and paging) remotely and advanced operations (grouping and summary calculation) locally, certain user actions will force the {WidgetName} to query the server for data repeatedly despite caching being enabled. Particularly, the advanced operations demand data to be reloaded completely  from the server to provide correct results.

#####See Also#####
- [Enhance Performance on Large Datasets](/concepts/05%20UI%20Components/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets '/Documentation/Guide/UI_Components/{WidgetName}/Enhance_Performance_on_Large_Datasets/')

<!-- import * from 'api-reference\10 UI Components\dxTreeList\1 Configuration\cacheEnabled.md' -->