---
id: dxList.Options.onPullRefresh
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the "pull to refresh" gesture is performed. Supported on mobile devices only.

##### param(e): Object
Information about the event.

##### field(e.component): dxList
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

---
#####See Also#####
- [List - Touch-Screen Gestures](/concepts/05%20UI%20Components/List/45%20End-User%20Interaction/01%20Touch-Screen%20Gestures.md '/Documentation/Guide/UI_Components/List/End-User_Interaction/Touch-Screen_Gestures/')