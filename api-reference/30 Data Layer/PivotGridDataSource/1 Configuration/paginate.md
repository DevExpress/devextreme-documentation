---
id: PivotGridDataSource.Options.paginate
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the **PivotGridDataSource** should load data in portions. Can be used only with an [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/').

---
Paging has the following specifics:

- **scrolling**.[mode](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/scrolling/mode.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/scrolling/#mode') should be *"virtual"*.
- Data should come from a remote source because other data processing operations also become [remote](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations') when you enable paging.
- [allowExpandAll](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowExpandAll.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowExpandAll') and [allowSortingBySummary](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowSortingBySummary.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowSortingBySummary') are ignored.
- [Running totals](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/runningTotal.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#runningTotal') and the *"absoluteVariation"* and *"percentVariation*" [summary post-processing functions](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryDisplayMode.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode') are calculated only for loaded data.
- [Grouped items](/concepts/05%20Widgets/PivotGrid/050%20Grouping/030%20Fields%20Grouping.md '/Documentation/Guide/Widgets/PivotGrid/Grouping/#Fields_Grouping') in the [header filter](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/headerFilter/') are not paginated.
- Empty records are NOT filtered out.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/RemoteVirtualScrolling/"
}
