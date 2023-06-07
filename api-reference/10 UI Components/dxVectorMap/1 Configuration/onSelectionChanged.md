---
id: dxVectorMap.Options.onSelectionChanged
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a layer element is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): dxVectorMap
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): MapLayerElement
The selected/deselected layer element; described in the [Layer Element](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/') section.

---
To identify whether the selection has been applied or canceled, call the layer element's [selected()](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element/3%20Methods/selected().md '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/Methods/#selected') method.