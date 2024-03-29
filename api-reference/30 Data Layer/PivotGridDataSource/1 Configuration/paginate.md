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

- **scrolling**.[mode](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/scrolling/mode.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/scrolling/#mode') should be *"virtual"*.
- Data should come from a remote source because other data processing operations also become [remote](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations') when you enable paging.
- [allowExpandAll](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowExpandAll.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowExpandAll') and [allowSortingBySummary](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowSortingBySummary.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowSortingBySummary') are ignored.
- [Running totals](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/runningTotal.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#runningTotal') and the *"absoluteVariation"* and *"percentVariation*" [summary post-processing functions](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryDisplayMode.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode') are calculated only for loaded data.
- [Grouped items](/concepts/05%20UI%20Components/PivotGrid/050%20Grouping/030%20Fields%20Grouping.md '/Documentation/Guide/UI_Components/PivotGrid/Grouping/#Fields_Grouping') in the [header filter](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/headerFilter/') are not paginated.
- Empty records are NOT filtered out.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/RemoteVirtualScrolling/"
}
