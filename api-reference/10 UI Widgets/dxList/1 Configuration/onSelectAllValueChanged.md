---
id: dxList.Options.onSelectAllValueChanged
type: function(e)
default: null
EventForAction: dxList.selectAllValueChanged
---
---
##### shortDescription
A function that is executed when the "Select All" check box value is changed. Applies only if the [selectionMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode') is *"all"*.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.value): Boolean
The "Select All" check box's state.

---
#####See Also#####
- [selectAllMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectAllMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectAllMode')
- [List - Handle Selection-Related Events](/concepts/05%20Widgets/List/25%20Selection/10%20Events.md '/Documentation/Guide/Widgets/List/Selection/#Events')