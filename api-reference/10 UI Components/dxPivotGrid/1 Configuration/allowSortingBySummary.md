---
id: dxPivotGrid.Options.allowSortingBySummary
type: Boolean
default: false
---
---
##### shortDescription
Allows users to sort the pivot grid by summary values instead of field values. Ignored if the [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/)'s [paginate](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#paginate) property is **true**.

---
With this property enabled, an end-user can use the context menu of a column or row header to apply sorting by summary values.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/SimpleArray/"
}