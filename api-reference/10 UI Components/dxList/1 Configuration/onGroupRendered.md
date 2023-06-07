---
id: dxList.Options.onGroupRendered
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a group element is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): dxList
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.groupData): Object
The current group's data.

##### field(e.groupElement): DxElement
#include common-ref-elementparam with { element: "group" }

##### field(e.groupIndex): Number
The group's index.

##### field(e.model): any
Model data. Available only if Knockout is used.

---
#####See Also#####
- [grouped](/api-reference/10%20UI%20Components/dxList/1%20Configuration/grouped.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#grouped')