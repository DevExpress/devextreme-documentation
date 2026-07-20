---
id: dxVectorMap.Options.onSelectionChanged
type: function(e) | undefined
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a layer element is selected or selection is canceled.

##### param(e): viz/vector_map:SelectionChangedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.target): MapLayerElement
The selected/deselected layer element; described in the [Layer Element](/api-reference/10%20UI%20Components/dxVectorMap/6%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/') section.

---
To identify whether the selection has been applied or canceled, call the layer element's [selected()](/api-reference/10%20UI%20Components/dxVectorMap/6%20Map%20Elements/Layer%20Element/3%20Methods/selected().md '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/Methods/#selected') method.

[note] To implement VectorMap selection, you must specify the [onClick](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/#onClick') event handler. For more information about configuring selection, refer to the following topic: [End-User Interaction - Selection](/concepts/05%20UI%20Components/VectorMap/40%20End-User%20Interaction/50%20Selection/10%20Selection.md '/Documentation/Guide/UI_Components/VectorMap/End-User_Interaction/#Selection').