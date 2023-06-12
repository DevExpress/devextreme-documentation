---
id: dxList.Options.onSelectAllValueChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the "Select All" check box value is changed. Applies only if the [selectionMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode') is *"all"*.

##### param(e): Object
Information about the event.

##### field(e.component): dxList
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.value): Boolean
The "Select All" check box's state.

---
#####See Also#####
- [selectAllMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/selectAllMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectAllMode')
- [List - Handle Selection-Related Events](/concepts/05%20UI%20Components/List/25%20Selection/10%20Events.md '/Documentation/Guide/UI_Components/List/Selection/#Events')